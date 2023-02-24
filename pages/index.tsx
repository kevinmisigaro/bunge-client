import PlainLayout from "@/components/layouts/PlainLayout";

export default function Home() {
  return (
    <PlainLayout>
      <div
        className="w-full bg-black/40 bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url('/images/team.png')`, height: "60vh" }}
      ></div>
      <div className="py-10 px-24">main</div>
    </PlainLayout>
  );
}
