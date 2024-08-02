import { SignedIn, SignedOut } from "@clerk/nextjs";
import { WelcomePage } from "./_components/welcomepage";
import LoanForm from "./_components/loanform";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="min-h-[95vh]">
      <SignedOut>
        <WelcomePage />
      </SignedOut>
      <SignedIn>
        <LoanForm />
      </SignedIn>
    </main>
  );
}
