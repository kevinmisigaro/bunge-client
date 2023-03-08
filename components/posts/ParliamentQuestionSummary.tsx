import { IQuestion } from "@/types/Question";
import { useRouter } from "next/router";
import _ from "lodash";

export default function ParliamentQuestionSummary({
  question,
}: {
  question: IQuestion;
}) {
  const { push } = useRouter();

  return (
    <div>
      <div
        onClick={() => push(`/posts/question/${question.id}`)}
        className="text-xl font-medium mb-2 hover:cursor-pointer hover:underline"
      >
        {_.capitalize(question.question_sw ?? question.question_en)}
      </div>
      <div>{question.description_sw ?? question.description_en}</div>
      <div
        className="mt-2 text-sm hover:underline cursor-pointer font-semibold"
        onClick={() => push(`/posts/question/${question.id}`)}
      >
        Soma zaidi
      </div>
    </div>
  );
}
