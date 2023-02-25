import { useRouter } from "next/router";

export default function ParliamentQuestionSummary() {
  const { push } = useRouter();

  return (
    <div>
      <div
        onClick={() => push(`/posts/question/1`)}
        className="text-xl font-medium mb-2 hover:cursor-pointer hover:underline"
      >
        Progress on female schools
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat.
      </div>
    </div>
  );
}
