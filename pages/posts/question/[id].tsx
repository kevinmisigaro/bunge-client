import StandardLayout from "@/components/layouts/StandardLayout";
import { IQuestion } from "@/types/Question";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

export default function Index() {
  const router = useRouter();
  const [question, setQuestion] = useState<IQuestion>();
  const { id } = router.query;

  const loadData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}question/${id}`
    );
    const result = await response.data;
    setQuestion(result);
    console.log(result);
    
  };

  useEffect(() => {
    if (!router.isReady) return;
    loadData();
  }, [router.isReady]);

  return (
    <StandardLayout>
      <div className="text-2xl font-medium mb-4">
        {_.capitalize(question?.question_sw ?? question?.question_en)}
      </div>
      <div className="text-justify mb-10">
        {question?.description_sw ?? question?.description_en}
      </div>
      {/* <div className="text-xl font-medium mb-4">Government response</div> */}
      {/* <div className="text-justify mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat. Sint amet cum delectus.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus
        sequi aut possimus voluptas in amet incidunt, quisquam, rem ex ad
        expedita unde suscipit itaque repellat. Sint amet cum delectus.
      </div>
      <div className="text-xl font-medium mb-4">Results</div>
      <div className="text-justify mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        delectus sequi aut possimus voluptas in amet incidunt, quisquam, rem ex
        ad expedita unde suscipit itaque repellat. Sint amet cum delectus.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus
        sequi aut possimus voluptas in amet incidunt, quisquam, rem ex ad
        expedita unde suscipit itaque repellat. Sint amet cum delectus.
      </div> */}
    </StandardLayout>
  );
}
