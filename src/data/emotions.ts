import { Emotion } from '../types/music';

export const emotions: Emotion[] = [
  {
    id: 'happy',
    name: 'Happy',
    icon: '😊',
    color: 'bg-yellow-500',
    bgGradient: 'from-yellow-400 to-orange-500',
    description: 'Upbeat and joyful music to lift your spirits'
  },
  {
    id: 'sad',
    name: 'Sad',
    icon: '😢',
    color: 'bg-blue-500',
    bgGradient: 'from-blue-400 to-indigo-600',
    description: 'Melancholic tunes for reflective moments'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    icon: '⚡',
    color: 'bg-red-500',
    bgGradient: 'from-red-400 to-pink-600',
    description: 'High-energy tracks to get you moving'
  },
  {
    id: 'calm',
    name: 'Calm',
    icon: '🧘',
    color: 'bg-green-500',
    bgGradient: 'from-green-400 to-teal-500',
    description: 'Peaceful and relaxing music for tranquility'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    icon: '💕',
    color: 'bg-pink-500',
    bgGradient: 'from-pink-400 to-rose-500',
    description: 'Love songs and romantic ballads'
  },
  {
    id: 'motivated',
    name: 'Motivated',
    icon: '🔥',
    color: 'bg-purple-500',
    bgGradient: 'from-purple-400 to-violet-600',
    description: 'Inspiring tracks to fuel your ambition'
  }
];