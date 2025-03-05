"use client"; // Add this if using Next.js App Router
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter for Next.js

interface CardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  buttonText: string;
  redirectUrl?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  bulletPoints,
  buttonText,
  redirectUrl,
  onButtonClick,
}) => {
  const router = useRouter(); // Initialize Next.js router

  const handleButtonClick = () => {
    if (redirectUrl) {
      window.open(redirectUrl, "_blank", "noopener,noreferrer"); // Open in new tab
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full mx-auto m-10 mt-0 md:mt-2 ">
      {/* Header */}
      <div className="text-lg md:text-3xl font-black mb-4 text-center bg-custom-gray rounded p-3">
        <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
          {title}
        </span>
      </div>
      {/* Body */}
      <div>
        <p className="text-gray-600 mb-2 md:text-xl font-normal">{description}</p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 p-4 md:text-xl font-bold">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-2 flex justify-end">
        <Button 
          className="bg-gradient-to-r from-custom-purple to-custom-blue text-white text-xs md:text-xl font-bold  md:p-7"
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;