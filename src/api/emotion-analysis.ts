import OpenAI from 'openai';

// This would typically be in your environment variables
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo - use server-side in production
});

export interface EmotionAnalysisResult {
  emotion: string;
  confidence: number;
  description: string;
}

export async function analyzeEmotionApi(base64Image: string): Promise<EmotionAnalysisResult> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze the facial expression in this image and determine the person's emotion. 
              
              Return your response in this exact JSON format:
              {
                "emotion": "one of: happy, sad, energetic, calm, romantic, motivated, angry, surprised, neutral",
                "confidence": 0.85,
                "description": "Brief description of what you observe"
              }
              
              Focus on facial expressions, eye contact, mouth position, and overall demeanor. 
              Map the detected emotion to one of the specified categories that would be suitable for music recommendation.`
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 300
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const result = JSON.parse(content);
    
    // Validate the response structure
    if (!result.emotion || typeof result.confidence !== 'number') {
      throw new Error('Invalid response format from OpenAI');
    }

    return {
      emotion: result.emotion.toLowerCase(),
      confidence: Math.min(Math.max(result.confidence, 0), 1), // Clamp between 0 and 1
      description: result.description || 'Emotion detected successfully'
    };

  } catch (error) {
    console.error('Error analyzing emotion:', error);
    
    // Fallback to a default emotion if analysis fails
    return {
      emotion: 'happy',
      confidence: 0.5,
      description: 'Unable to analyze emotion, defaulting to happy mood'
    };
  }
}