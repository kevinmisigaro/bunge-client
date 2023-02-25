import StandardLayout from "@/components/layouts/StandardLayout";
import ParliamentQuestionSummary from "@/components/posts/ParliamentQuestionSummary";

export default function Index() {
  return (
    <StandardLayout>
      <div className="text-2xl font-medium mb-10">Day 1 questions</div>
      <div className="flex flex-col gap-y-4">
        <ParliamentQuestionSummary />
        <ParliamentQuestionSummary />
        <ParliamentQuestionSummary />
        <ParliamentQuestionSummary />
      </div>
    </StandardLayout>
  );
}
