"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  onChange: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      onChange(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      onChange(newIndex);
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.length === 1 ? (
          <Image
            width={550}
            height={422}
            src={images[0]}
            alt="Single Slide"
            className="absolute scale-100 z-20 rounded-2xl shadow-xl"
          />
        ) : (
          images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrev = (index + 1) % images.length === currentIndex;
            const isNext = (index - 1 + images.length) % images.length === currentIndex;

            let position = "translate-x-0 scale-100 z-20"; // Center image
            if (isNext) position = "md:translate-x-[-75%] scale-75 z-10"; // Left image (smaller)
            if (isPrev) position = "md:translate-x-[75%] scale-75 z-10"; // Right image (smaller)

            return (
              <Image
                width={550}
                height={422}
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute transition-transform duration-700 ease-in-out ${position} rounded-2xl shadow-xl`}
              />
            );
          })
        )}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition z-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition z-30"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
