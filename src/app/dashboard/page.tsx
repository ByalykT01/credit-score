import { UserPage } from "../_components/userpage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="min-h-[95vh]">
      <div>
        <UserPage />
      </div>
    </main>
  );
}
