"use client";

import { PERSON } from "@/constants/person";
import { AnswerType, QUESTIONS } from "@/constants/questions";
import { useSearchParams } from "next/navigation";

export const Result = () => {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const keys = Object.keys(params);
  const types = keys
    .map((key) => {
      return QUESTIONS.map((question, index) => {
        if (key === `${index}`) {
          return question.answer[parseInt(params[key] as string, 10)].type;
        }
      }).filter((type) => type !== undefined);
    })
    .flat()
    .reduce((acc, cur) => {
      if (cur) {
        acc[cur] = (acc[cur] || 0) + 1;
      }
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
        <div className="break-keep">
          {`${selectedPerson?.characteristic} ${selectedPerson?.disposition}`}
        </div>
      </div>
    </div>
  );
};
