"use client";

import { QUESTIONS } from "@/constants/questions";
import { QuestionBlock } from "./Block";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QusetionMoveButtons } from "./Move";

export const QuestionBlocks = () => {
  const [api, setApi] = useState<CarouselApi>();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    if (!api) {
      return;
    }
    const selected = parseInt(params["selected"] as string, 10) || 0;
    api.scrollTo(selected);
  }, [api, params]);

  return (
    <Carousel
      opts={{
        watchDrag: false,
      }}
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
      <QusetionMoveButtons api={api} />
    </Carousel>
  );
};
