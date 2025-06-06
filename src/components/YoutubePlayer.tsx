import React from "react";

interface YoutubePlayerProps {
  url: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ url }) => (
  <div className="youtube-player" style={{ width: "100%", height: "360px" }}>
    {/* <iframe
      width="100%"
      height="360"
      src={url}
      title="YouTube music"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    /> */}
  </div>
);

export default YoutubePlayer; 