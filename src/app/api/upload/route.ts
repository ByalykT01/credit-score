// pages/api/predict.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { loans } from "~/server/db/schema";
import { getLoans } from "~/server/queries";
import type { LoanData } from "~/lib/types";
import { execFile } from "child_process";

export const GET = async () => {
  try {
    const loansData = await getLoans();
    return NextResponse.json(loansData);
  } catch (error) {
    console.error("Error fetching loans:", error);
    return NextResponse.json(
      { error: "Failed to fetch loans" },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const new_loan = await req.json();
    new_loan.userId = user.userId;

    // Execute the Python script
    const loan_status = await new Promise<string[]>((resolve, reject) => {
      const child = execFile(
        "python3",
        ["src/app/api/predict.py"],
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error executing Python script:", error);
            reject(error);
          } else if (stderr) {
            console.error("Python script error:", stderr);
            reject(new Error(stderr));
          } else {
            console.log("Python script output:", stdout); // Log output
            resolve(JSON.parse(stdout));
          }
        },
      );

      child.stdin?.write(JSON.stringify([new_loan]));
      child.stdin?.end();
    });

    // Insert the updated loan into the database
    const insertedLoan = await db.insert(loans).values(new_loan);
    console.log("Inserted loan:", insertedLoan);

    return new NextResponse(
      JSON.stringify({ message: "New loan is created", loan_status }),
      { status: 201 },
    );
  } catch (e: any) {
    console.error("Error with new loan creation:", e);
    return new NextResponse(
      JSON.stringify({ message: "Error with new loan creation: " + e.message }),
      { status: 500 },
    );
  }
};
