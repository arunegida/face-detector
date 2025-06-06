import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key-here'
});

// Emotion analysis endpoint
app.post('/analyze-emotion', async (req, res) => {
  try {
    const { image } = req.body;
    
    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
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
              Map the detected emotion to one of the specified categories that would be suitable for music recommendation.
              
              If you cannot clearly detect a face or emotion, default to "happy" with lower confidence.`
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${image}`
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
    let result;
    try {
      result = JSON.parse(content);
    } catch (parseError) {
      // If JSON parsing fails, provide a default response
      result = {
        emotion: 'happy',
        confidence: 0.6,
        description: 'Could not parse emotion analysis, defaulting to happy'
      };
    }
    
    // Validate and sanitize the response
    const validEmotions = ['happy', 'sad', 'energetic', 'calm', 'romantic', 'motivated', 'angry', 'surprised', 'neutral'];
    if (!validEmotions.includes(result.emotion?.toLowerCase())) {
      result.emotion = 'happy';
    }
    
    result.emotion = result.emotion.toLowerCase();
    result.confidence = Math.min(Math.max(result.confidence || 0.5, 0), 1);

    res.json(result);

  } catch (error) {
    console.error('Error analyzing emotion:', error);
    
    // Return a fallback response
    res.json({
      emotion: 'happy',
      confidence: 0.5,
      description: 'Analysis failed, defaulting to happy mood'
    });
  }
});

app.listen(port, () => {
  console.log(`Emotion analysis server running at http://localhost:${port}`);
});