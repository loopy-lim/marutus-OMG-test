import { QUESTIONS } from "@/constants/questions";
import { QuestionBlock } from "./block";

export const QuestionBlocks = () => {
  return QUESTIONS.map((question, index) => (
    <QuestionBlock key={index} data={question} />
  ));
};
