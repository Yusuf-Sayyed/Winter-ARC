import { motion } from "framer-motion";
import { Dumbbell, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-slate-900/80"></div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-6 text-shadow">
          <span className="text-white">WINTER</span>
          <span className="text-cyan-400 animate-glow ml-4">ARC</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 font-inter font-light">
          Transform Your Body. Transform Your Mind. <br />
          <span className="text-cyan-400 font-semibold">Embrace The Challenge.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-lg font-orbitron font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 animate-glow"
            data-testid="button-start-arc"
          >
            <Dumbbell className="mr-2" />
            START YOUR ARC
          </Button>

          <button
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-orbitron font-bold text-lg transform hover:scale-105 transition-all duration-300"
              data-testid="button-watch-trailer"
            >
              <Play className="mr-2" />
              WATCH TRAILER
            </button>

        </div>
      </motion.div>
    </section>
  );
}
