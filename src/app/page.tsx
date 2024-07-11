import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { WelcomePage } from "./_components/welcomepage";

export const dynamic = "force-dynamic";
interface User {
  name: string;
  amount: number;
  bank: string;
}

const user1: User = {
  name: "user1",
  amount: 50.0,
  bank: "Pekao",
};

const user2: User = {
  name: "user2",
  amount: 150.0,
  bank: "Pekao",
};
const user3: User = {
  name: "user3",
  amount: 0,
  bank: "Barclays",
};
const user4: User = {
  name: "user4",
  amount: 69.42,
  bank: "Santander",
};

const users = [user1, user2, user3, user4];

const mockUsers = users.map((user, index) => ({
  id: index + 1,
  user,
}));

export default async function HomePage() {
  const loans = await db.query.loans.findMany();
  console.log(loans);

  return (
    <main>
      <SignedOut>
        <WelcomePage />
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4 ">
          {mockUsers.map((user) => (
            <div key={user.id} className="w-48">
              <h1>{user.user.name}</h1>
              <h2>Bank: {user.user.bank}</h2>
              <h2>{user.user.amount} PLN</h2>
            </div>
          ))}
        </div>
        <div className="grid h-56 items-center justify-center gap-4">
          <div className="text-2xl font-semibold ">GIVE ME YOUR DATA</div>
          <div className="grid gap-10 text-2xl font-semibold">
            {loans.map((loan: any) => (
              <div key={loan.id}>{loan.username + " " + loan.loan_term}</div>
            ))}
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
