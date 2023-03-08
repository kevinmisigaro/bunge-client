import PlainLayout from "@/components/layouts/PlainLayout";
import ParliamentQuestionSummary from "@/components/posts/ParliamentQuestionSummary";
import { IQuestion } from "@/types/Question";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Index() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const loadData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}question`
    );
    const result = await response.data;
    setQuestions(result);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PlainLayout>
      <div
        className="w-full bg-black/40 bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url('/images/team.png')`, height: "60vh" }}
      ></div>
      <div className="py-10 px-24 mt-8 mb-20">
        <div className="flex flex-row">
          {/* Parliament sessions */}
          {/* <div className="basis-3/5">

            <div className="text-3xl font-bold mb-10">
              Latest parliament sessions
            </div>

            <ParliamentSessionPost />
            <ParliamentSessionPost />
            <ParliamentSessionPost />
          </div> */}

          <div className="basis-3/5">
            <div className="text-3xl font-bold mb-10">Maswali ya bunge</div>

            <div className="flex flex-col gap-y-10">
              {questions.map((x: IQuestion) => (
               <div key={x.id}><ParliamentQuestionSummary question={x} /></div>
              ))}
            </div>
          </div>

          <div className="basis-2/5"></div>
        </div>
      </div>
    </PlainLayout>
  );
}
