"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { QUESTIONS } from "@/constants/questions";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CarouselApi } from "../ui/carousel";
import { cn } from "@/lib/utils";

interface QusetionMoveButtonsProps {
  api?: CarouselApi;
}

export const QusetionMoveButtons = ({ api }: QusetionMoveButtonsProps) => {
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const canNext = !Array.from({ length: QUESTIONS.length }, (_, i) =>
    searchParams.get(`${i}`)
  ).every((v) => v !== null);

  useEffect(() => {
    if (!api) {
      return;
    }
    const selected = parseInt(params["selected"] as string, 10) || 0;
    api.scrollTo(selected);
    setIsFirst(selected === 0 || selected === undefined);
    setIsLast(selected === QUESTIONS.length - 1);
  }, [api, params]);

  return (
    <div className="flex gap-4 w-full">
      <Link
        className="w-full"
        href={{
          query: {
            ...params,
            selected: Math.max(
              (parseInt(params["selected"] as string, 10) || 0) - 1,
              0
            ),
          },
        }}
      >
        <Button
          className={cn("w-full", isFirst && "bg-gray-600")}
          disabled={isFirst}
        >
          뒤로
        </Button>
      </Link>
      <Link
        className="w-full"
        href={{
          pathname: isLast && !canNext ? "/result" : "",
          query: {
            ...params,
            selected: Math.min(
              (parseInt(params["selected"] as string, 10) || 0) + 1,
              QUESTIONS.length - 1
            ),
          },
        }}
      >
        <Button
          className={cn("w-full", isLast && "bg-blue-700 hover:bg-blue-600")}
          disabled={isLast && canNext}
        >
          {isLast ? "결과보기" : "앞으로"}
        </Button>
      </Link>
    </div>
  );
};
