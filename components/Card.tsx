import React from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>

      {/* Body */}
      <div>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-6">
        <Button  className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;