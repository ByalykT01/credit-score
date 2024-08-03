import { auth } from "@clerk/nextjs/server";
import { getLoan } from "~/server/queries";

export default async function LoanModal({
  params: { id: loan_id },
}: {
  params: { id: string };
}) {
  const user = auth();
  if (!user.userId) {
    throw new Error("Unauthorized access");
  }

  const idAsNum = Number(loan_id);
  if (isNaN(idAsNum)) {
    throw new Error("Invalid loan ID");
  }

  const loan = await getLoan(idAsNum);
  if (!loan) {
    throw new Error("Loan not found");
  }
  return (
    <div className="flex min-h-[95vh] items-center justify-center text-white">
      <div className="w-96 rounded-lg bg-gradient-to-b from-aurora-7 to-aurora-6 p-6 shadow-lg">
        <h1 className="mb-4 text-4xl font-bold">Loan Details</h1>
        <div className="text-2xl">
          <p className="mb-2">
            <span className="font-semibold">Loan ID:</span> {loan.id}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Number of Dependents:</span>{" "}
            {loan.no_of_dependents}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Education:</span>{" "}
            {loan.graduated ? "Yes" : "No"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Self Employed:</span>{" "}
            {loan.self_employed ? "Yes" : "No"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Income per Annum:</span> $
            {loan.income_annum.toLocaleString()}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Loan Amount:</span> $
            {loan.loan_amount.toLocaleString()}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Loan Term:</span> {loan.loan_term}{" "}
            months
          </p>
          <p className="mb-2">
            <span className="font-semibold">CIBIL Score:</span>{" "}
            {loan.cibil_score}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Residential Assets Value:</span> $
            {loan.residential_assets_value}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Commertial Assets Value:</span> $
            {loan.commercial_assets_value}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Luxury Assets Value:</span> $
            {loan.luxury_assets_value}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Bank Assets Value:</span> $
            {loan.bank_asset_value}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Loan Status:</span>{" "}
            {loan.loan_status === "" ? "undefined" : loan.loan_status}
          </p>
        </div>
      </div>
    </div>
  );
}
