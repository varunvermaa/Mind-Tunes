import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl, className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-green-900/50 mix-blend-multiply" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover scale-105 transform"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
    </div>
  );
};

export default VideoBackground;