import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { WelcomePage } from "./_components/welcomepage";
import LoanForm from "./_components/loanform";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const loans = await db.query.loans.findMany();
  //console.log(loans);

  return (
    <main>
      <SignedOut>
        <WelcomePage />
      </SignedOut>
      <SignedIn>
        <div className="grid h-56 items-center justify-center gap-4">
          <div className="text-2xl font-semibold ">GIVE ME YOUR DATA</div>
          <div className="grid gap-10 text-2xl font-semibold">
            {loans.map((loan: any) => (
              <div key={loan.id}>{loan.username + " " + loan.loan_term}</div>
            ))}

            <div>
              <LoanForm />
            </div>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
