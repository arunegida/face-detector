import { Song } from '../types/music';

export const songs: Song[] = [
  // Happy songs
  {
    id: '1',
    title: 'Good as Hell',
    artist: 'Lizzo',
    album: 'Cuz I Love You',
    genre: 'Pop',
    duration: '2:39',
    imageUrl: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'happy',
    energy: 0.8,
    valence: 0.9
  },
  {
    id: '2',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    album: 'Uptown Special',
    genre: 'Funk',
    duration: '4:30',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'happy',
    energy: 0.9,
    valence: 0.8
  },
  {
    id: '3',
    title: 'Walking on Sunshine',
    artist: 'Katrina and the Waves',
    album: 'Walking on Sunshine',
    genre: 'Pop Rock',
    duration: '3:58',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'happy',
    energy: 0.7,
    valence: 0.9
  },
  // Sad songs
  {
    id: '4',
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
    genre: 'Pop',
    duration: '4:45',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'sad',
    energy: 0.3,
    valence: 0.2
  },
  {
    id: '5',
    title: 'Mad World',
    artist: 'Gary Jules',
    album: 'Trading Snakeoil for Wolftickets',
    genre: 'Alternative',
    duration: '3:07',
    imageUrl: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'sad',
    energy: 0.2,
    valence: 0.1
  },
  {
    id: '6',
    title: 'Hurt',
    artist: 'Johnny Cash',
    album: 'American IV: The Man Comes Around',
    genre: 'Country',
    duration: '3:38',
    imageUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'sad',
    energy: 0.3,
    valence: 0.2
  },
  // Energetic songs
  {
    id: '7',
    title: 'Eye of the Tiger',
    artist: 'Survivor',
    album: 'Eye of the Tiger',
    genre: 'Rock',
    duration: '4:04',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'energetic',
    energy: 0.9,
    valence: 0.7
  },
  {
    id: '8',
    title: 'Thunder',
    artist: 'Imagine Dragons',
    album: 'Evolve',
    genre: 'Pop Rock',
    duration: '3:07',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'energetic',
    energy: 0.8,
    valence: 0.6
  },
  {
    id: '9',
    title: 'Pump It',
    artist: 'The Black Eyed Peas',
    album: 'Monkey Business',
    genre: 'Hip Hop',
    duration: '3:33',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'energetic',
    energy: 0.9,
    valence: 0.8
  },
  // Calm songs
  {
    id: '10',
    title: 'Weightless',
    artist: 'Marconi Union',
    album: 'Weightless',
    genre: 'Ambient',
    duration: '8:08',
    imageUrl: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'calm',
    energy: 0.1,
    valence: 0.5
  },
  {
    id: '11',
    title: 'Clair de Lune',
    artist: 'Claude Debussy',
    album: 'Suite Bergamasque',
    genre: 'Classical',
    duration: '4:42',
    imageUrl: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'calm',
    energy: 0.2,
    valence: 0.6
  },
  {
    id: '12',
    title: 'River',
    artist: 'Joni Mitchell',
    album: 'Blue',
    genre: 'Folk',
    duration: '4:00',
    imageUrl: 'https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'calm',
    energy: 0.3,
    valence: 0.4
  },
  // Romantic songs
  {
    id: '13',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    genre: 'Pop',
    duration: '4:23',
    imageUrl: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'romantic',
    energy: 0.4,
    valence: 0.8
  },
  {
    id: '14',
    title: 'At Last',
    artist: 'Etta James',
    album: 'At Last!',
    genre: 'Soul',
    duration: '3:01',
    imageUrl: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'romantic',
    energy: 0.5,
    valence: 0.9
  },
  {
    id: '15',
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    album: 'x (Multiply)',
    genre: 'Pop',
    duration: '4:41',
    imageUrl: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'romantic',
    energy: 0.4,
    valence: 0.8
  },
  // Motivated songs
  {
    id: '16',
    title: 'Stronger',
    artist: 'Kanye West',
    album: 'Graduation',
    genre: 'Hip Hop',
    duration: '5:11',
    imageUrl: 'https://images.pexels.com/photos/1464375/pexels-photo-1464375.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'motivated',
    energy: 0.8,
    valence: 0.7
  },
  {
    id: '17',
    title: 'Lose Yourself',
    artist: 'Eminem',
    album: '8 Mile Soundtrack',
    genre: 'Hip Hop',
    duration: '5:26',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'motivated',
    energy: 0.9,
    valence: 0.6
  },
  {
    id: '18',
    title: 'Roar',
    artist: 'Katy Perry',
    album: 'Prism',
    genre: 'Pop',
    duration: '3:43',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    emotion: 'motivated',
    energy: 0.7,
    valence: 0.8
  }
];