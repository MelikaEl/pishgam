"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Define the card content structure
interface CardContent {
  header: string;
  paragraph: string;
  bullets: string[];
  buttonText: string;
}

interface CarouselProps {
  items: {
    image: string;
    card: CardContent;
  }[];
}

const Card: React.FC<{ content: CardContent }> = ({ content }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 w-full max-w-lg mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{content.header}</h2>
      <p className="text-gray-600 mb-4">{content.paragraph}</p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        {content.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        {content.buttonText}
      </button>
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {items.map((item, index) => {
          const position =
            index === currentIndex
              ? "translate-x-0 scale-100 z-20"
              : index === (currentIndex + 1) % items.length
              ? "translate-x-full scale-75 z-10"
              : "translate-x-[-100%] scale-75 z-10";

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-700 ease-in-out ${position} flex flex-col items-center`}
            >
              <Image
                width={626}
                height={422}
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-xl"
              />
              {index === currentIndex && <Card content={item.card} />}
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;