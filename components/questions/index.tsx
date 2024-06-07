"use client";

import { QUESTIONS } from "@/constants/questions";
import { QuestionBlock } from "./block";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const QuestionBlocks = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

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
    <Carousel
      setApi={setApi}
      className="flex flex-col min-h-screen justify-center gap-4 px-4"
    >
      <CarouselContent>
        {QUESTIONS.map((question, index) => (
          <CarouselItem key={index}>
            <QuestionBlock data={question} questionIndex={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
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
            className={cn("w-full", isLast && "bg-gray-600")}
            disabled={isLast}
          >
            앞으로
          </Button>
        </Link>
      </div>
    </Carousel>
  );
};
