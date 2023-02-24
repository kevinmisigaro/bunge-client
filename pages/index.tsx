import PlainLayout from "@/components/layouts/PlainLayout";
import ParliamentSessionPost from "@/components/posts/ParliamentSessionPost";

export default function Index() {
  return (
    <PlainLayout>
      <div
        className="w-full bg-black/40 bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url('/images/team.png')`, height: "60vh" }}
      ></div>
      <div className="py-10 px-24 mt-8 mb-20">
        <div className="flex flex-row">
          {/* Parliament sessions */}
          <div className="basis-3/5">
            <div className="text-3xl font-bold mb-10">
              Latest parliament sessions
            </div>

            <ParliamentSessionPost />
            <ParliamentSessionPost />
            <ParliamentSessionPost />
          </div>
          <div className="basis-2/5"></div>
        </div>
      </div>
    </PlainLayout>
  );
}
