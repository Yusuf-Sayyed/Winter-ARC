"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function HowToBuyWinterArc() {
  // Load Twitter widget script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto relative z-20 mt-8 sm:mt-12 px-4 sm:px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
<h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl mb-8 bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent pb-1 leading-normal">
  How to buy $WINTER Arc
</h2>
        <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto font-inter px-4">
          Learn, how to buy the $WINTER Arc Coin safely and easily.
        </p>
      </div>

      {/* Youtube Embed Container - Responsive and Centered */}
<div className="my-8 flex justify-center">
  <div className="w-full max-w-4xl aspect-video">
    <iframe
      className="w-full h-full rounded-2xl shadow-lg"
      src="https://www.youtube.com/embed/FnMIlzrCpI4?si=h25bHmeNAw5jmDhw"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>


    </motion.div>
  );
}