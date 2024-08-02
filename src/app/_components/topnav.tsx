import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="bg-aurora-5 flex min-h-[5vh] w-full items-center justify-between p-5 text-3xl font-semibold">
      <Link href="/">Credit</Link>
      <Link href="/dashboard">Dashboard</Link>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
