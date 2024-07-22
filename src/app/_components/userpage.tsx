import { db } from "~/server/db";

export async function UserPage() {
  const loans = await db.query.loans.findMany();

  loans.map((loan: any, index: number) => (
    console.log(loan.self_employed.toString())
  ))
  return(
    <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Loan History</h1>
          <div className="">
            <table className="min-w-full border border-zinc-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Username</th>
                  <th className="px-4 py-2 border-b">Dependents</th>
                  <th className="px-4 py-2 border-b">Education</th>
                  <th className="px-4 py-2 border-b">Self Employed</th>
                  <th className="px-4 py-2 border-b">Income</th>
                  <th className="px-4 py-2 border-b">Loan Amount</th>
                  <th className="px-4 py-2 border-b">Loan Term</th>
                  <th className="px-4 py-2 border-b">CIBIL Score</th>
                  <th className="px-4 py-2 border-b">Residential Assets</th>
                  <th className="px-4 py-2 border-b">Commercial Assets</th>
                  <th className="px-4 py-2 border-b">Luxury Assets</th>
                  <th className="px-4 py-2 border-b">Bank Assets</th>
                  <th className="px-4 py-2 border-b">Loan Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan: any, index: number) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b">{loan.username}</td>
                    <td className="px-4 py-2 border-b">{loan.no_of_dependents}</td>
                    <td className="px-4 py-2 border-b">{loan.education}</td>
                    <td className="px-4 py-2 border-b">{loan.self_employed.toString()}</td>
                    <td className="px-4 py-2 border-b">{loan.income_annum}</td>
                    <td className="px-4 py-2 border-b">{loan.loan_amount}</td>
                    <td className="px-4 py-2 border-b">{loan.loan_term}</td>
                    <td className="px-4 py-2 border-b">{loan.cibil_score}</td>
                    <td className="px-4 py-2 border-b">{loan.residential_assets_value}</td>
                    <td className="px-4 py-2 border-b">{loan.commercial_assets_value}</td>
                    <td className="px-4 py-2 border-b">{loan.luxury_assets_value}</td>
                    <td className="px-4 py-2 border-b">{loan.bank_asset_value}</td>
                    <td className="px-4 py-2 border-b">{(loan.loan_status === "")? "undefined" : loan.loan_status }</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}