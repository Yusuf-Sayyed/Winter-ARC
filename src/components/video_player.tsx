import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Flame, Volume2, VolumeX } from "lucide-react";

// Adjust these paths to your actual files
import videoFile from "../assets/WinterArc.mp4";
import posterImage from "../assets/posterVideo.jpeg"; // Create a preview image for the video

// A simple hook to detect window size. This makes the component self-contained.
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export function IntroVideoSection() {
  const isMobile = useIsMobile();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(isMobile); // Show button by default on mobile
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to handle autoplay for desktop
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      // Muted autoplay is highly likely to succeed
      videoRef.current.play().catch(() => {
        console.warn("Autoplay was blocked by the browser.");
        setShowPlayButton(true);
      });
    }
  }, [isMobile]);

  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const currentlyMuted = !videoRef.current.muted;
      videoRef.current.muted = currentlyMuted;
      setIsMuted(currentlyMuted);
    }
  }, []);

  return (
    <section id="intro-video" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main section container with gradient background and animation */}
        <motion.div
          className="text-center p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent mb-4">
            Forge Your Legend
          </h2>

          {/* Section Description */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto font-inter px-4">
            Witness the power of the Winter ARC. This is a call to arms for those who dare to conquer.
          </p>

          {/* Video Player Container */}
          <div className="w-full max-w-4xl mx-auto relative mt-8">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">

              {/* Play Button Overlay */}
              {showPlayButton && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 cursor-pointer group"
                  aria-label="Play video"
                >
                </button>
              )}

              {/* Loading Indicator */}
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-400 z-20">
                  <div className="text-center">
                    <Flame className="mx-auto mb-2 animate-pulse" size={32} />
                    <p className="text-sm">Loading Winter ARC...</p>
                  </div>
                </div>
              )}

              {/* Custom Unmute Button */}
              {videoLoaded && !showPlayButton && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-30 p-2 bg-black/40 rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-all"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              )}

              {/* Video Element */}
              <video
                ref={videoRef}
                autoPlay={!isMobile}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                poster={posterImage}
                className="w-full h-auto object-cover relative z-10"
                onLoadedData={() => setVideoLoaded(true)}
                onCanPlay={() => setVideoLoaded(true)}
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}