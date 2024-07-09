export function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="-mt-10 h-[85vh] w-[90vw] overflow-hidden rounded-md bg-zinc-800 shadow-md">
        <div className="p-5 text-center">
          <h1 className="mt-28 text-6xl font-bold">
            Welcome to Credit Calculator
          </h1>
          <p className="m-24 text-5xl">
            Hii helloo! Start calculating your credit with ease. You will have
            the opportunity to enter your data and receive the possibility of
            getting a loan.
          </p>
          <p className="m-24 text-4xl">
            But pleeeeassseeeee, sign up if you want to continue to expand your
            knowledges
          </p>
        </div>
      </div>
    </div>
  );
}
