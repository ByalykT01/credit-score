"use client";

import { useState } from "react";

export const dynamic = "force-dynamic";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    username: "",
    no_of_dependents: "",
    education: "",
    self_employed: "",
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: "",
    commercial_assets_value: "",
    luxury_assets_value: "",
    bank_asset_value: "",
    loan_status: "",
  });
  const [approval, setApproval] = useState(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
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

      const data = await response.json();
      setApproval(data.approval);
    } catch (error) {
      console.error("Error fetching prediction", error);
    }
  };

  return (
    <div className="bg-zinc-100 p-6 text-zinc-900">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            No. of Dependents
          </label>
          <input
            type="text"
            name="no_of_dependents"
            value={formData.no_of_dependents}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Education
          </label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Self Employed
          </label>
          <input
            type="text"
            name="self_employed"
            value={formData.self_employed}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Income per Annum
          </label>
          <input
            type="text"
            name="income_annum"
            value={formData.income_annum}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Loan Amount
          </label>
          <input
            type="text"
            name="loan_amount"
            value={formData.loan_amount}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Loan Term
          </label>
          <input
            type="text"
            name="loan_term"
            value={formData.loan_term}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            CIBIL ScoreCo
          </label>
          <input
            type="text"
            name="cibil_score"
            value={formData.cibil_score}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Residential Assets Value
          </label>
          <input
            type="text"
            name="residential_assets_value"
            value={formData.residential_assets_value}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Commercial Assets Value
          </label>
          <input
            type="text"
            name="commercial_assets_value"
            value={formData.commercial_assets_value}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Luxury Assets Value
          </label>
          <input
            type="text"
            name="luxury_assets_value"
            value={formData.luxury_assets_value}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">
            Bank Asset Value
          </label>
          <input
            type="text"
            name="bank_asset_value"
            value={formData.bank_asset_value}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-zinc-600 px-4 py-2 text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {approval !== null && (
        <div className="mt-4 rounded-md bg-zinc-200 p-4 shadow-sm">
          Loan Approval Status:{" "}
          <span
            className={`font-semibold ${approval ? "text-green-600" : "text-red-600"}`}
          >
            {approval ? "Approved" : "Not Approved"}
          </span>
        </div>
      )}
    </div>
  );
}
