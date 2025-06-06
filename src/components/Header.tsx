import React from 'react';
import { Music, Headphones } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <Music className="w-8 h-8 text-purple-600" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Emotion Music Recommender
      </h1>
      
      <p className="text-xl text-white text-opacity-90 mb-2">
        Discover music that matches your mood
      </p>
      
      <div className="flex items-center justify-center space-x-2 text-white text-opacity-80">
        <Headphones className="w-5 h-5" />
        <span className="text-sm">AI-powered music recommendations based on your emotions</span>
      </div>
    </div>
  );
};