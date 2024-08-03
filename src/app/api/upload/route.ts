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

    const loanData: LoanData = (await req.json()) as LoanData;

    const newLoan = await db.insert(loans).values({
      ...loanData,
      userId: user.userId,
    });

    return NextResponse.json(
      { message: "Loan created successfully", loanId: newLoan.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating loan:", error);
    return NextResponse.json(
      { error: "Failed to create loan" },
      { status: 500 },
    );
  }
};
