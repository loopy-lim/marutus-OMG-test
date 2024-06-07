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

export const QuestionBlocks = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setIsFirst(api.selectedScrollSnap() === 0);
      setIsLast(api.selectedScrollSnap() === QUESTIONS.length - 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="flex flex-col min-h-screen justify-center gap-4 px-4"
    >
      <CarouselContent>
        {QUESTIONS.map((question, index) => (
          <CarouselItem key={index}>
            <QuestionBlock data={question} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-4 w-full">
        <Button
          className={cn("w-full", isFirst && "bg-gray-600")}
          disabled={isFirst}
          onClick={() => api?.scrollPrev()}
        >
          뒤로
        </Button>
        <Button
          className={cn("w-full", isLast && "bg-gray-600")}
          onClick={() => api?.scrollNext()}
          disabled={isLast}
        >
          앞으로
        </Button>
      </div>
    </Carousel>
  );
};
