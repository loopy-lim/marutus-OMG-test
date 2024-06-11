"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const HomeDescription = () => {
  const carousel = Array.from(
    { length: 11 },
    (_, i) => `/images/carousel/${i + 1}.jpeg`
  );

  return (
    <Carousel
      className="min-h-screen flex justify-center items-center flex-col p-12 pr-36"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {carousel.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`${index} carousel`}
              className="max-h-[calc(100vh-96px)] mx-auto rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
