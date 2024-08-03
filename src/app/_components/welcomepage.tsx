import { SignInButton } from "@clerk/nextjs";

export function WelcomePage() {
  return (
    <div className="p-5 text-center">
      <h1 className="mt-52 text-6xl font-bold">Welcome to Credit Calculator</h1>
      <p className="m-24 text-5xl">
        Hello! Start calculating your credit with ease. You will have the
        opportunity to enter your data and receive the possibility of getting a
        loan.
      </p>
      <SignInButton>
        <div className="m-auto flex min-h-24 w-48 cursor-pointer select-none items-center justify-center rounded-lg bg-aurora-5 text-5xl hover:bg-aurora-4">
          Hello!
        </div>
      </SignInButton>
    </div>
  );
}
