import StandardLayout from "@/components/layouts/StandardLayout";
import ParliamentSessionPost from "@/components/posts/ParliamentSessionPost";

export default function Index() {
  return (
    <StandardLayout>
      <div className="text-3xl font-bold mb-10">Latest parliament sessions</div>
      <div>
        <ParliamentSessionPost />
        <ParliamentSessionPost />
        <ParliamentSessionPost />
      </div>
    </StandardLayout>
  );
}
