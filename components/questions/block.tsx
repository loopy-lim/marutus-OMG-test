import { Question } from "@/constants/questions";

interface QuestionBlockProps {
  data: Question;
}

export const QuestionBlock = ({ data }: QuestionBlockProps) => {
  return <div>{data.question}</div>;
};
