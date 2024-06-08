import { PERSON } from "@/constants/person";
import { AnswerType, QUESTIONS } from "@/constants/questions";

interface ResultProps {
  result: string[];
}

export const Result = ({ result }: ResultProps) => {
  const types = result
    .map((v, i) => {
      const question = QUESTIONS[i];
      return question.answer[parseInt(v)].type;
    })
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {} as Record<AnswerType, number>);

  const EI = types.E > types.I ? "E" : "I";
  const SN = types.S > types.N ? "S" : "N";
  const JP = types.J > types.P ? "J" : "P";

  const selectedPerson = PERSON.find(
    (person) => person.type === `${EI}${SN}${JP}`
  );

  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-4">
      <div className="text-center">
        <h3 className="font-bold text-2xl my-8">{selectedPerson?.name}</h3>
        <div className="break-keep text-pretty">
          {`${selectedPerson?.characteristic} ${selectedPerson?.disposition}`}
        </div>
      </div>
    </div>
  );
};
