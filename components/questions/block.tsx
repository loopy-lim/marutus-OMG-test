import { Question } from "@/constants/questions";
import { ElementType, ExtractAnswer } from "@/lib/typeHelper";
import { useId } from "react";

interface QuestionBlockProps {
  data: Question;
}

interface AnswerBlockProps {
  answer: ElementType<ExtractAnswer<Pick<Question, "answer">>>;
}

const AnswerBlock = ({ answer: { a } }: AnswerBlockProps) => {
  const id = useId();

  return (
    <div className="flex items-center">
      <input className="hidden peer" type="radio" name="answer" id={id} />
      <label
        className="peer-checked:bg-slate-200 w-full rounded border border-slate-200 p-2 cursor-pointer"
        htmlFor={id}
      >
        {a}
      </label>
    </div>
  );
};

export const QuestionBlock = ({ data }: QuestionBlockProps) => {
  return (
    <div className="break-keep">
      <h3 className="font-semibold text-xl my-4">{data.question}</h3>
      <div className="flex flex-col gap-2">
        {data.answer.map((answer) => (
          <AnswerBlock key={answer.a} answer={answer} />
        ))}
      </div>
    </div>
  );
};
