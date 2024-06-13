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

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const paramString = Object.keys(searchParams)
        .map((key) => `${key}=${searchParams[key]}`)
        .join("&");
    fetch('https://marutus-omg-server.loopy.workers.dev/', {
      signal,
      method: 'POST',
      body: JSON.stringify({'answers': paramString})
    })

    return () => {
      controller.abort();
    }
  }, [])

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크 복사 완료!\n붙여넣기로 결과를 공유해보세요!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-4">
      <div className="text-center">
        <div className="font-semibold">
          {searchParams["name"] ?? "김마르투스"}님의 결과는!
        </div>
        <h3 className="font-bold text-2xl my-4">{selectedPerson?.name}</h3>
        <img
          src={`/images/${selectedPerson?.name}.jpeg`}
          alt={selectedPerson?.name}
          className="w-4/5 m-4 rounded-lg mx-auto"
        />
        <div className="break-keep text-pretty lg:text-base/7">
          {selectedPerson?.characteristic}{" "}
          <span className="underline underline-offset-2 decoration-blue-600 font-bold text-blue-600">
            {selectedPerson?.disposition}
          </span>
        </div>
      </div>
      <div className="flex gap-2 my-4">
        <Button className="hover:bg-blue-600 bg-blue-700">
          <Link href="/">처음으로 돌아가기</Link>
        </Button>
        <Button variant="secondary" onClick={() => copyToClipboard()}>
          공유하기
        </Button>
      </div>
    </div>
  );
};
