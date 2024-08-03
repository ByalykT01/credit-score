import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import type { LoanData } from "~/lib/types";

export async function getMyLoans(): Promise<LoanData[]> {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized on queries");
  }

  const loans = await db.query.loans.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
  });

  const filteredLoans = loans.filter((loan) => loan.loan_status !== null);

  return filteredLoans as LoanData[];
}

export async function getLoans(): Promise<LoanData[]> {
  const loans = await db.query.loans.findMany();

  return loans as LoanData[];
}

export async function getLoan(id: number): Promise<LoanData | null> {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized on queries");
  }

  const loan = await db.query.loans.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!loan) {
    return null;
  }

  if (loan.userId !== user.userId) {
    throw new Error("Unauthorized: wrong userId");
  }

  return loan as LoanData;
}
