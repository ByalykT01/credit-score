"use client";
import type { LoanData } from "~/lib/types";
import { useState } from "react";
import Input from "./_formcomponents/Input";
import Select from "./_formcomponents/Select";

export const dynamic = "force-dynamic";

export default function LoanForm() {
  const [formData, setFormData] = useState<LoanData>({
    id: 0,
    userId: "",
    no_of_dependents: 0,
    graduated: false,
    self_employed: false,
    income_annum: 0,
    loan_amount: 0,
    loan_term: 0,
    cibil_score: 0,
    residential_assets_value: 0,
    commercial_assets_value: 0,
    luxury_assets_value: 0,
    bank_asset_value: 0,
    loan_status: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [approval, setApproval] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "true" ? true : value === "false" ? false : value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const loanData: LoanData = (await response.json()) as LoanData;
      console.log(loanData);
      setApproval(loanData.loan_status as string | null);
    } catch (error) {
      console.error("Error fetching prediction", error);
    }
  };

  return (
    <div className="mx-auto mt-10 block max-w-[60vw] bg-gradient-to-b from-aurora-7 to-aurora-6 p-6 text-aurora-18">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            label="No. of Dependents"
            name="no_of_dependents"
            type="number"
            value={formData.no_of_dependents}
            onChange={handleChange}
            tooltip="The count of individuals, who rely on you for financial support"
          />
        </div>
        <Select
          label="Graduated"
          name="graduated"
          value={formData.graduated}
          options={[
            { value: true, label: "Graduated" },
            { value: false, label: "Not Graduated" },
          ]}
          onChange={handleChange}
        />

        <Select
          label="Self Employed"
          name="self_employed"
          value={formData.self_employed}
          options={[
            { value: true, label: "Self Employed" },
            { value: false, label: "Not Self Employed" },
          ]}
          onChange={handleChange}
        />
        <div>
          <Input
            label="Income per Annum"
            name="income_annum"
            type="number"
            value={formData.income_annum}
            onChange={handleChange}
            tooltip="Year's total money received from a job"
          />
        </div>
        <div>
          <Input
            label="Loan Amount"
            name="loan_amount"
            type="number"
            value={formData.loan_amount}
            onChange={handleChange}
            tooltip="An amount of money that you want to borrow"
          />
        </div>
        <div>
          <Input
            label="Loan Term"
            name="loan_term"
            type="number"
            value={formData.loan_term}
            onChange={handleChange}
            tooltip="The length in years of time it takes for a loan to be paid off completely"
          />
        </div>
        <div>
          <Input
            label="CIBIL Score"
            name="cibil_score"
            type="number"
            value={formData.cibil_score}
            onChange={handleChange}
            tooltip="A credit score - numerical expression, that is used to represent the creditworthiness of an individual"
          />
        </div>
        <div>
          <Input
            label="Residential Assets Value"
            name="residential_assets_value"
            type="number"
            value={formData.residential_assets_value}
            onChange={handleChange}
            tooltip="Estimated total value of your homes and properties"
          />
        </div>
        <div>
          <Input
            label="Commercial Assets Value"
            name="commercial_assets_value"
            type="number"
            value={formData.commercial_assets_value}
            onChange={handleChange}
            tooltip="Estimated total value of your business properties"
          />
        </div>
        <div>
          <Input
            label="Luxury Assets Value"
            name="luxury_assets_value"
            type="number"
            value={formData.luxury_assets_value}
            onChange={handleChange}
            tooltip="Estimated total value of your high-end possessions, such as art, jewelry, and luxury cars"
          />
        </div>
        <div>
          <Input
            label="Bank Asset Value"
            name="bank_asset_value"
            type="number"
            value={formData.bank_asset_value}
            onChange={handleChange}
            tooltip="Estimated total value of your financial holdings in banks, including savings, investments, and other monetary assets"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-aurora-5 px-4 py-2 text-3xl text-aurora-18 shadow-sm hover:bg-aurora-4 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {approval !== null && (
        <div className="mt-4 rounded-md bg-zinc-200 p-4 shadow-sm">
          <span
            className={`font-semibold ${approval ? "text-green-600" : "text-red-600"}`}
          >
            Saved
          </span>
        </div>
      )}
    </div>
  );
}
