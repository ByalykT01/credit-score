// pages/api/predict.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { loans } from "~/server/db/schema";
import { getLoans } from "~/server/queries";
import type { LoanData } from "~/lib/types";

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

    // Update the userId field in the loan object
    new_loan.userId = user.userId;

    // Insert the updated loan into the database
    const insertedLoan = await db.insert(loans).values(new_loan);
    console.log(insertedLoan);

    return new NextResponse(
      JSON.stringify({ message: "New loan is created" }),
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
