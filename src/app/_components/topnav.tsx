import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
  return (
    <nav className="flex w-full items-center justify-between p-5 font-semibold border-b text-3xl">
        <div>Credit</div>
        <div>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
    </nav>
  )
}