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
import { QuestionProgressBar } from "./Progress";

export const QuestionBlocks = () => {
  const [api, setApi] = useState<CarouselApi>();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const selected = parseInt(params["selected"] as string, 10) || 0;

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(selected);
  }, [api, selected]);

  return (
    <Carousel
      opts={{
        watchDrag: false,
      }}
      setApi={setApi}
      className="flex flex-col min-h-screen justify-center gap-4 px-4"
    >
      <QuestionProgressBar index={selected} total={QUESTIONS.length} />

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
