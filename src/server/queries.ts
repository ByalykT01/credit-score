import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';

export async function getMyLoans() {
  const user = auth();

  if(!user.userId) throw new Error("Unauthorized on queries")

  const loans = await db.query.loans.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
  });

  return loans;
}

export async function getLoans() {
  const loans = await db.query.loans.findMany();

  return loans;
}
