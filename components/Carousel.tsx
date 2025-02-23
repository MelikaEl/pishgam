"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  onChange: (index: number) => void; // New callback function
}

const Carousel: React.FC<CarouselProps> = ({ images, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      onChange(newIndex); // Notify parent
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      onChange(newIndex); // Notify parent
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => {
          const position =
            index === currentIndex
              ? "translate-x-0 scale-100 z-20"
              : index === (currentIndex + 1) % images.length
              ? "translate-x-full scale-75 z-10"
              : "translate-x-[-100%] scale-75 z-10";

          return (
            <Image
              width={626}
              height={422}
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute transition-transform duration-700 ease-in-out ${position} rounded-2xl shadow-xl`}
            />
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
