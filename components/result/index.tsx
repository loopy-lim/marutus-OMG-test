"use client";

import { PERSON } from "@/constants/person";
import { AnswerType, QUESTIONS } from "@/constants/questions";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Result = () => {
  const param = useSearchParams();
  const searchParams = Object.fromEntries(param);
  const router = useRouter();

  const answers = Array.from(
    { length: QUESTIONS.length },
    (_, i) => searchParams[i.toString()]
  );

  useEffect(() => {
    if (!answers.every((v) => v != null)) {
      searchParams["selected"] = answers.findIndex((v) => v == null).toString();
      const paramString = Object.keys(searchParams)
        .map((key) => `${key}=${searchParams[key]}`)
        .join("&");
      router.push(`/question?${paramString}`);
    }
  }, [answers, router, searchParams]);

  const types = answers
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
        <h3 className="font-bold text-2xl my-4">{selectedPerson?.name}</h3>
        <img
          src={`/images/${selectedPerson?.name}.jpeg`}
          alt={selectedPerson?.name}
          className="w-4/5 m-4 rounded-lg mx-auto"
        />
        <div className="break-keep text-pretty lg:text-base/7">
          {`${selectedPerson?.characteristic} ${selectedPerson?.disposition}`}
        </div>
      </div>
      <div className="my-4">
        <Button className="hover:bg-blue-600 bg-blue-700">
          <Link href="/">처음으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
};
