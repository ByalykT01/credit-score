import { getMyLoans } from "~/server/queries";

export const dynamic = "force-dynamic";

export async function UserPage() {
  const loans = await getMyLoans();

  loans.map((loan: any, index: number) => console.log(loan.createdAt.toString()));
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <h1 className="mb-6 text-2xl font-semibold">Loan History</h1>
        <div className="">
          <table className="min-w-full border border-zinc-700">
            <thead>
              <tr>
                <th className="border-b px-4 py-2">Created At</th>
                <th className="border-b px-4 py-2">Dependents</th>
                <th className="border-b px-4 py-2">Education</th>
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
              {loans.map((loan: any, index: number) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2">
                    {loan.createdAt.toString()}
                  </td>
                  <td className="border-b px-4 py-2">
                    {loan.no_of_dependents}
                  </td>
                  <td className="border-b px-4 py-2">{loan.education}</td>
                  <td className="border-b px-4 py-2">
                    {loan.self_employed.toString()}
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
        </div>
      </div>
    </div>
  );
}
