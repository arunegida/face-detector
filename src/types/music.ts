export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  imageUrl: string;
  emotion: string;
  energy: number;
  valence: number;
}

export interface Emotion {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgGradient: string;
  description: string;
}