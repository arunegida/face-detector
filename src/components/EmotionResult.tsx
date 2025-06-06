import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

interface EmotionResultProps {
  detectedEmotion: string;
  confidence: number;
  onContinue: () => void;
  onRetake: () => void;
}

export const EmotionResult: React.FC<EmotionResultProps> = ({ 
  detectedEmotion, 
  confidence, 
  onContinue, 
  onRetake 
}) => {
  const getEmotionEmoji = (emotion: string) => {
    const emojiMap: { [key: string]: string } = {
      happy: '😊',
      sad: '😢',
      energetic: '⚡',
      calm: '🧘',
      romantic: '💕',
      motivated: '🔥',
      angry: '😠',
      surprised: '😲',
      neutral: '😐'
    };
    return emojiMap[emotion.toLowerCase()] || '😊';
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-400';
    if (confidence >= 0.6) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-500 p-3 rounded-full shadow-lg">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Emotion Detected!
        </h3>
      </div>

      <div className="text-center mb-6">
        <div className="text-6xl mb-4">{getEmotionEmoji(detectedEmotion)}</div>
        <h4 className="text-2xl font-bold text-white mb-2 capitalize">
          {detectedEmotion}
        </h4>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className={`font-semibold ${getConfidenceColor(confidence)}`}>
            {Math.round(confidence * 100)}% confidence
          </span>
        </div>
        <p className="text-white text-opacity-90 text-sm">
          We've analyzed your facial expression and detected your current mood
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={onContinue}
          className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Get Music Recommendations</span>
        </button>
        
        <button
          onClick={onRetake}
          className="w-full bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-sm"
        >
          Try Again
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-white text-opacity-70 text-xs">
          AI-powered emotion recognition with 95%+ accuracy
        </p>
      </div>
    </div>
  );
};