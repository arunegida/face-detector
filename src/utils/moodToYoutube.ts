export const moodToYoutube = (mood: string): string => {
  const moodMap: Record<string, string> = {
    happy: "https://www.youtube.com/embed/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", // Happy Hits 2024
    sad: "https://www.youtube.com/embed/playlist?list=PLw-VjHDlEOgs6584A9dJElU-1UxR8y4qF", // Sad Songs Playlist
    angry: "https://www.youtube.com/embed/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", // Rock & Metal Mix
    relaxed: "https://www.youtube.com/embed/playlist?list=PLw-VjHDlEOgs6584A9dJElU-1UxR8y4qF", // Chill Mix
    energetic: "https://www.youtube.com/embed/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", // Workout Mix
    romantic: "https://www.youtube.com/embed/playlist?list=PLw-VjHDlEOgs6584A9dJElU-1UxR8y4qF", // Love Songs 2024
    motivated: "https://www.youtube.com/embed/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", // Motivational Mix
    surprised: "https://www.youtube.com/embed/playlist?list=PLw-VjHDlEOgs6584A9dJElU-1UxR8y4qF", // Unexpected Hits
    neutral: "https://www.youtube.com/embed/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI", // Top Hits 2024
  };
  return moodMap[mood] || "https://www.youtube.com/embed/results?search_query=music";
}; 