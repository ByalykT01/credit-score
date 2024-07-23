// pages/api/predict.ts
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';
import { loans } from '~/server/db/schema';
import { getLoans } from '~/server/queries';


export const GET = async() => {
  try{
  const loan = await getLoans()

  return new NextResponse(JSON.stringify(loan), {status: 200})
  } catch(e: any){
    return new NextResponse("Error in fetching users - " + e.message, {status: 500})
  }
}

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

    return new NextResponse(JSON.stringify({ message: "New loan is created" }), { status: 201 });
  } catch (e: any) {
    console.error('Error with new loan creation:', e);
    return new NextResponse(
      JSON.stringify({ message: 'Error with new loan creation: ' + e.message }),
      { status: 500 }
    );
  }
}
/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return req.method;

  try {
    const new_data = req.body;
    const {
      userId,
      no_of_dependents,
      education,
      self_employed,
      income_annum,
      loan_amount,
      loan_term,
      cibil_score,
      residential_assets_value,
      commercial_assets_value,
      luxury_assets_value,
      bank_asset_value,
      loan_status
    } = new_data;

    const newLoan = await db.insert(loans).values({
      userId,
      no_of_dependents,
      education,
      self_employed,
      income_annum,
      loan_amount,
      loan_term,
      cibil_score,
      residential_assets_value,
      commercial_assets_value,
      luxury_assets_value,
      bank_asset_value,
      loan_status
    });


    return res.status(201).json({ "answer": "true", });
  } catch (error) {
    console.error('Error inserting loan data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
*/