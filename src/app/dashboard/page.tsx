import { UserPage } from "../_components/userpage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <div className="grid h-56 gap-4">
        <div className="text-2xl font-semibold ">
          Welcome to your private page
        </div>
        <div className="grid gap-10 text-2xl font-semibold">
          <UserPage />
        </div>
      </div>
    </main>
  );
}
