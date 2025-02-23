import React from "react";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  buttonText: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  bulletPoints,
  buttonText,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full mx-auto m-10 ">
      {/* Header */}
      <h2 className="text-xl font-extrabold mb-4 text-center bg-custom-gray rounded p-3">
        <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {/* Body */}
      <div>
        <p className="text-gray-600 mb-2">{description}</p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 p-4 font-bold">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-gradient-to-r from-custom-purple to-custom-blue text-white">{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;
