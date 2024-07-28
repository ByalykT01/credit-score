import { SignedIn, SignedOut } from "@clerk/nextjs";
import { WelcomePage } from "./_components/welcomepage";
import LoanForm from "./_components/loanform";
import { UserPage } from "./_components/userpage";
import { getMyLoans } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

const loans = await getMyLoans();



export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <WelcomePage />
      </SignedOut>
      <SignedIn>
        <LoanForm />
      </SignedIn>
    </main>
  );
}
