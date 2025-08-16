import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Flame, Play } from "lucide-react";
import videoFile from "../assets/WinterArc.mp4"; // Adjust the path as needed

// We define props to pass the `isMobile` state from the parent
interface VideoPlayerProps {
  isMobile: boolean;
}

export function VideoPlayer({ isMobile }: VideoPlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // This effect tries to autoplay and shows a play button on failure
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.warn("Autoplay with sound blocked, showing play button");
          setShowPlayButton(true);
        });
      }
    }
  }, [isMobile]);

  // Handler to play the video and hide the button
  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  }, []);

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto relative z-20 mt-8 sm:mt-12 2xl:w-6xl "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-900 bg-neutral-800">
        {/* Play Button Overlay */}
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 cursor-pointer group"
            aria-label="Play video"
          >
            <Play className="w-16 h-16 text-white/80 group-hover:text-white/100 transition-all duration-300 group-hover:scale-110" />
          </button>
        )}

        {/* Loading Indicator */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-400 z-20">
            <div className="text-center">
              <Flame className="mx-auto mb-2 animate-pulse" size={32} />
              <p className="text-sm">Loading Winter ARC video...</p>
              <p className="text-xs mt-1 opacity-70">
                Optimized for faster loading
              </p>
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay={!isMobile}
          muted={false}
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full h-auto object-cover relative z-10"
          style={{ maxHeight: "350px" }}
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={videoFile} type="video/mp4" />
          <p className="text-white p-4">
            Your browser does not support the video tag.
          </p>
        </video>
      </div>
    </motion.div>
  );
}