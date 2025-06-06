import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Song } from '../types/music';

interface SongCardProps {
  song: Song;
}

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={song.imageUrl} 
          alt={`${song.title} album cover`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-gray-100">
            <Play className="w-5 h-5 text-gray-800 ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{song.title}</h3>
        <p className="text-gray-600 text-sm mb-2 truncate">{song.artist}</p>
        <p className="text-gray-500 text-xs mb-3 truncate">{song.album}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {song.genre}
            </span>
            <span className="text-xs text-gray-500">{song.duration}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="mt-3 flex items-center space-x-2">
          <div className="flex-1 bg-gray-200 rounded-full h-1">
            <div 
              className="bg-green-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${song.energy * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500">Energy</span>
        </div>
      </div>
    </div>
  );
};