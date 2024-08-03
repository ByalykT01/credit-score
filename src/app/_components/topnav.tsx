import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="flex min-h-[5vh] w-full items-center justify-between bg-aurora-5 p-5 text-4xl font-semibold">
      <div className="flex flex-1 items-center">
        <div className="rounded-md bg-aurora-4 px-8 py-2 shadow-sm hover:bg-aurora-3 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <Link href="/">Credit</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="rounded-md bg-aurora-4 px-8 py-2 shadow-sm hover:bg-aurora-3 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
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
