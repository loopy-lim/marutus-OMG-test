import { Question } from "@/constants/questions";
import { ElementType, ExtractAnswer } from "@/lib/typeHelper";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface QuestionBlockProps {
  data: Question;
  questionIndex: number;
}

interface AnswerBlockProps {
  answer: ElementType<ExtractAnswer<Pick<Question, "answer">>>;
  answerIndex: number;
  questionIndex: number;
}

const AnswerBlock = ({
  answer: { a },
  answerIndex,
  questionIndex,
}: AnswerBlockProps) => {
  const searchParams = useSearchParams();
  const currentAnswer = searchParams.get(`${questionIndex}`);
  const params = Object.fromEntries(searchParams.entries());

  return (
    <div className="flex items-center">
      <Link
        href={{
          query: {
            ...params,
            [questionIndex]: answerIndex,
            selected: questionIndex + 1,
          },
        }}
        className={cn(
          "w-full rounded border border-slate-200 p-2",
          currentAnswer === `${answerIndex}` && "bg-slate-200"
        )}
      >
        {a}
      </Link>
    </div>
  );
};

export const QuestionBlock = ({ data, questionIndex }: QuestionBlockProps) => {
  return (
    <div className="break-keep">
      <h3 className="font-semibold text-xl my-4">{data.question}</h3>
      <div className="flex flex-col gap-2">
        {data.answer.map((answer, index) => (
          <AnswerBlock
            key={answer.a}
            answer={answer}
            answerIndex={index}
            questionIndex={questionIndex}
          />
        ))}
      </div>
    </div>
  );
};
