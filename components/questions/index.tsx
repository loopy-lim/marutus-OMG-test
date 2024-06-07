import { QUESTIONS } from "@/constants/questions";
import { QuestionBlock } from "./block";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const QuestionBlocks = () => {
  return (
    <Carousel
      opts={{
        active: false,
      }}
    >
      <CarouselContent>
        {QUESTIONS.map((question, index) => (
          <CarouselItem key={index}>
            <QuestionBlock data={question} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
