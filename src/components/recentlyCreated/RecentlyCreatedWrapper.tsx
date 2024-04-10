import { loadRecentlyAdded } from "@lib/recently-added";
import RecentlyCreated from "./RecentlyCreated";

export default async function RecentlyCreatedWrapper() {
  const data = await loadRecentlyAdded();

  return (
    <section className="w-full flex justify-center bg-[#f7f8fa] px-12">
      <RecentlyCreated data={data || []} />
    </section>
  );
}
