import { UserPage } from "../_components/userpage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
        <div>
          <UserPage />
        </div>
    </main>
  );
}
