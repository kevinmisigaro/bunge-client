import StandardLayout from "@/components/layouts/StandardLayout";
import ParliamentDay from "@/components/posts/ParliamentDay";

export default function Index() {
  return (
    <StandardLayout>
      <div className="text-2xl font-medium mb-4">12th Parliament session</div>
      <div className="text-justify mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat. Sint amet cum delectus.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus
        sequi aut possimus voluptas in amet incidunt, quisquam, rem ex ad
        expedita unde suscipit itaque repellat. Sint amet cum delectus.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat. Sint amet cum delectus.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus
        sequi aut possimus voluptas in amet incidunt, quisquam, rem ex ad
        expedita unde suscipit itaque repellat. Sint amet cum delectus.
      </div>
      <div className="text-lg mb-2 font-semibold">Parliament days</div>
      <div>
        <ParliamentDay />
        <ParliamentDay />
        <ParliamentDay />
        <ParliamentDay />
      </div>
    </StandardLayout>
  );
}
