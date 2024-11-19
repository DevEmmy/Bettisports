import React, { useState, useEffect } from 'react';

interface AudioDurationProps {
  base64Audio: string;
}

interface Duration {
  hours: number;
  minutes: number;
  seconds: number;
}

const AudioDuration: React.FC<AudioDurationProps> = ({ base64Audio }) => {
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = base64Audio;

    audio.onloadedmetadata = () => {
      const durationInSeconds = audio.duration;

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = Math.floor(durationInSeconds % 60);

      setDuration({ hours, minutes, seconds });
    };

    audio.onerror = () => {
      console.error("Failed to load audio from Base64.");
    };
  }, [base64Audio]);

  // Render loading message or formatted duration
  if (duration === null) {
    return <div>Loading...</div>;
  }

  return (
      <>
        {duration.hours > 0 && `${duration.hours} hour `}{duration.minutes} min {duration.seconds} sec
      </>
  );
};

export default AudioDuration;