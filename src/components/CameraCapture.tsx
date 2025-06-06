import React, { useRef, useState, useCallback } from 'react';
import { Camera, RotateCcw, Loader2, AlertCircle } from 'lucide-react';
import { analyzeEmotionApi, EmotionAnalysisResult   } from '../api/emotion-analysis';

interface CameraCaptureProps {
  onEmotionDetected: (emotion: string, confidence: number) => void;
  isAnalyzing: boolean;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({ onEmotionDetected, isAnalyzing }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string>('');
  const [capturedImage, setCapturedImage] = useState<string>('');

  const startCamera = useCallback(async () => {
    try {
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      setError('Unable to access camera. Please ensure camera permissions are granted.');
      console.error('Camera access error:', err);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  }, []);

  const capturePhoto = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to base64
    const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
    setCapturedImage(imageDataUrl);

    // Stop camera after capture
    stopCamera();

    // Send to emotion analysis
    await analyzeEmotion(imageDataUrl);
  }, [stopCamera]);

  const analyzeEmotion = async (imageDataUrl: string): Promise<EmotionAnalysisResult> => {
    try {
      const base64Image = imageDataUrl.split(',')[1];
      
      const response = await analyzeEmotionApi(base64Image);

      console.log(response,'this is the response');
      onEmotionDetected(response.emotion, response.confidence);
    } catch (err) {
      setError('Failed to analyze emotion. Please try again.');
      console.error('Emotion analysis error:', err);
    }
  };

  const retakePhoto = () => {
    setCapturedImage('');
    setError('');
    startCamera();
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <Camera className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Capture Your Mood
        </h3>
        <p className="text-white text-opacity-90 text-sm">
          Take a photo and let AI analyze your emotions to recommend perfect music
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-300 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-red-200" />
          <span className="text-red-200 text-sm">{error}</span>
        </div>
      )}

      <div className="relative mb-4">
        {capturedImage ? (
          <div className="relative">
            <img 
              src={capturedImage} 
              alt="Captured" 
              className="w-full h-64 object-cover rounded-lg"
            />
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-white animate-spin mx-auto mb-2" />
                  <p className="text-white text-sm">Analyzing your emotion...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-64 object-cover rounded-lg bg-gray-800 ${!isStreaming ? 'hidden' : ''}`}
            />
            {!isStreaming && (
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Camera preview will appear here</p>
                </div>
              </div>
            )}
          </>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="space-y-3">
        {!isStreaming && !capturedImage && (
          <button
            onClick={startCamera}
            className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
          >
            <Camera className="w-4 h-4" />
            <span>Start Camera</span>
          </button>
        )}

        {isStreaming && !capturedImage && (
          <div className="space-y-2">
            <button
              onClick={capturePhoto}
              disabled={isAnalyzing}
              className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Camera className="w-4 h-4" />
              <span>Capture Photo</span>
            </button>
            <button
              onClick={stopCamera}
              className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm"
            >
              Stop Camera
            </button>
          </div>
        )}

        {capturedImage && !isAnalyzing && (
          <button
            onClick={retakePhoto}
            className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Photo</span>
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-white text-opacity-70 text-xs">
          Your photo is processed locally and securely
        </p>
      </div>
    </div>
  );
};