import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { EmotionCard } from './components/EmotionCard';
import { SongCard } from './components/SongCard';
import { CameraCapture } from './components/CameraCapture';
import { EmotionResult } from './components/EmotionResult';
import YoutubePlayer from './components/YoutubePlayer';
import { emotions } from './data/emotions';
import { songs } from './data/songs';
import { moodToYoutube } from './utils/moodToYoutube';

type AppMode = 'camera' | 'manual' | 'results';

function App() {
  const [mode, setMode] = useState<AppMode>('camera');
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');
  const [detectedEmotion, setDetectedEmotion] = useState<string>('');
  const [confidence, setConfidence] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const backgroundGradient = useMemo(() => {
    const emotion = selectedEmotion || detectedEmotion;
    if (!emotion) {
      return 'from-purple-400 via-pink-500 to-red-500';
    }
    
    const emotionData = emotions.find(e => e.id === emotion);
    return emotionData ? emotionData.bgGradient : 'from-purple-400 via-pink-500 to-red-500';
  }, [selectedEmotion, detectedEmotion]);
  
  const recommendedSongs = useMemo(() => {
    const emotion = selectedEmotion || detectedEmotion;
    if (!emotion) return [];
    return songs.filter(song => song.emotion === emotion);
  }, [selectedEmotion, detectedEmotion]);

  const handleEmotionDetected = async (emotion: string, conf: number) => {
    setIsAnalyzing(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDetectedEmotion(emotion);
    setConfidence(conf);
    setIsAnalyzing(false);
    setMode('results');
  };

  const handleContinueToRecommendations = () => {
    setSelectedEmotion(detectedEmotion);
    setMode('results');
  };

  const handleRetakePhoto = () => {
    setDetectedEmotion('');
    setConfidence(0);
    setMode('camera');
  };

  const handleManualSelection = () => {
    setMode('manual');
  };

  const handleBackToCamera = () => {
    setSelectedEmotion('');
    setDetectedEmotion('');
    setMode('camera');
  };

  const currentEmotion = selectedEmotion || detectedEmotion;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        {/* Camera Mode */}
        {mode === 'camera' && (
          <div className="space-y-8">
            <CameraCapture 
              onEmotionDetected={handleEmotionDetected}
              isAnalyzing={isAnalyzing}
            />
            
            <div className="text-center">
              <button
                onClick={handleManualSelection}
                className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                Or choose manually
              </button>
            </div>
          </div>
        )}

        {/* Manual Selection Mode */}
        {mode === 'manual' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                How are you feeling today?
              </h2>
              <button
                onClick={handleBackToCamera}
                className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-30 transition-colors mb-8"
              >
                ← Back to Camera
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {emotions.map((emotion) => (
                <EmotionCard
                  key={emotion.id}
                  emotion={emotion}
                  isSelected={selectedEmotion === emotion.id}
                  onClick={() => {
                    setSelectedEmotion(emotion.id);
                    setMode('results');
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Results Mode */}
        {mode === 'results' && detectedEmotion && !selectedEmotion && (
          <div className="space-y-8">
            <EmotionResult
              detectedEmotion={detectedEmotion}
              confidence={confidence}
              onContinue={handleContinueToRecommendations}
              onRetake={handleRetakePhoto}
            />
          </div>
        )}

        {/* Music Recommendations */}
        {mode === 'results' && currentEmotion && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Perfect for your {emotions.find(e => e.id === currentEmotion)?.name.toLowerCase()} mood
              </h2>
              <p className="text-white text-opacity-90 mb-4">
                {recommendedSongs.length} songs curated just for you
              </p>
              <div className="space-x-4">
                <button
                  onClick={handleBackToCamera}
                  className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  Take New Photo
                </button>
                <button
                  onClick={handleManualSelection}
                  className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  Choose Different Mood
                </button>
              </div>
            </div>
            {/* YouTube Player for mood-based playlist */}
            {/* <div className="mb-8">
              <YoutubePlayer url={moodToYoutube(currentEmotion)} />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {recommendedSongs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          </div>
        )}
        
        {/* Initial Call to Action */}
        {mode === 'camera' && !isAnalyzing && (
          <div className="text-center mt-16">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">
                AI-Powered Music Discovery
              </h3>
              <p className="text-white text-opacity-90 mb-6">
                Let our advanced emotion recognition technology analyze your facial expression and recommend the perfect music for your current mood
              </p>
              <div className="flex items-center justify-center space-x-4 text-white text-opacity-80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Real-time Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Secure & Private</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;