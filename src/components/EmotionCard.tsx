import React from 'react';
import { Emotion } from '../types/music';

interface EmotionCardProps {
  emotion: Emotion;
  isSelected: boolean;
  onClick: () => void;
}

export const EmotionCard: React.FC<EmotionCardProps> = ({ emotion, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 transform
        ${isSelected 
          ? 'scale-105 shadow-2xl ring-4 ring-white ring-opacity-50' 
          : 'hover:scale-102 hover:shadow-xl'
        }
        group
      `}
    >
      <div className={`bg-gradient-to-br ${emotion.bgGradient} p-6 h-32`}>
        <div className="flex flex-col h-full justify-between">
          <div className="text-3xl mb-2">{emotion.icon}</div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">{emotion.name}</h3>
            <p className="text-white text-sm opacity-90 leading-tight">
              {emotion.description}
            </p>
          </div>
        </div>
        {isSelected && (
          <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};