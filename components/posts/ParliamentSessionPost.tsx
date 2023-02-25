import { useRouter } from "next/router";

export default function ParliamentSessionPost() {
  const { push } = useRouter();

  return (
    <div className="mb-10 border-b pb-4">
      <div className="text-lg font-medium">12th Parliament session</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat. Sint amet cum delectus.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus
        sequi aut possimus voluptas in amet incidunt, quisquam, rem ex ad
        expedita unde suscipit itaque repellat. Sint amet cum delectus.
      </div>

      <div
        onClick={() => push(`/posts/1`)}
        className="text-sm mt-2 hover:cursor-pointer hover:underline"
      >
        Read more...
      </div>
    </div>
  );
}
