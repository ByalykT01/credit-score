import Link from "next/link";
import { getMyLoans } from "~/server/queries";
import type { LoanData } from "~/lib/types";

export const dynamic = "force-dynamic";

export async function UserPage() {
  const loans: LoanData[] = await getMyLoans();
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        {loans.length !== 0 ? (
          <table className="mx-auto mt-10 block min-w-full overflow-x-auto bg-gradient-to-b from-aurora-7 to-aurora-6 p-6">
            <thead>
              <tr>
                <th className="border-b px-4 py-2">Dependents</th>
                <th className="border-b px-4 py-2">Created At</th>
                <th className="border-b px-4 py-2">Graduated</th>
                <th className="border-b px-4 py-2">Self Employed</th>
                <th className="border-b px-4 py-2">Income</th>
                <th className="border-b px-4 py-2">Loan Amount</th>
                <th className="border-b px-4 py-2">Loan Term</th>
                <th className="border-b px-4 py-2">CIBIL Score</th>
                <th className="border-b px-4 py-2">Residential Assets</th>
                <th className="border-b px-4 py-2">Commercial Assets</th>
                <th className="border-b px-4 py-2">Luxury Assets</th>
                <th className="border-b px-4 py-2">Bank Assets</th>
                <th className="border-b px-4 py-2">Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan: LoanData, index: number) => (
                <tr key={index}>
                  <Link href={`/dashboard/loans/${loan.id}`}>
                    <td className="border-b px-4 py-2">
                      {new Date(loan.createdAt).toDateString()}
                    </td>
                  </Link>
                  <td className="border-b px-4 py-2">
                    {loan.no_of_dependents}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.graduated ? "Yes" : "No"}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.self_employed ? "Yes" : "No"}
                  </td>
                  <td className="border-b px-4 py-2">{loan.income_annum}</td>
                  <td className="border-b px-4 py-2">{loan.loan_amount}</td>
                  <td className="border-b px-4 py-2">{loan.loan_term}</td>
                  <td className="border-b px-4 py-2">{loan.cibil_score}</td>
                  <td className="border-b px-4 py-2">
                    {loan.residential_assets_value}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.commercial_assets_value}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.luxury_assets_value}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.bank_asset_value}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.loan_status === "" ? "undefined" : loan.loan_status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mx-auto mt-[15vw] text-center">
            <p className="px-4 py-2 text-6xl font-semibold">
              This page is empty...
            </p>
            <p className="px-4 py-2 text-5xl font-semibold">
              Make your first calculation -
              <Link
                href={"/"}
                className="text-sky-200 hover:text-sky-300 hover:underline"
              >
                {" "}
                write your data on main page!
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
