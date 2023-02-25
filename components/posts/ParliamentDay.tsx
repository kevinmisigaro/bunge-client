import { useRouter } from "next/router";

export default function ParliamentDay() {
  const { push } = useRouter();

  return (
    <div
      className="text-sm mb-2 hover:cursor-pointer hover:underline"
      onClick={() => push(`/posts/day/1`)}
    >
      Day 1 questions
    </div>
  );
}
