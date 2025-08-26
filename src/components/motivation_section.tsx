import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const motivationalQuotes = [
  "THE STRONGEST PEOPLE ARE NOT THOSE WHO SHOW STRENGTH IN FRONT OF US, BUT THOSE WHO WIN BATTLES WE KNOW NOTHING ABOUT.",
  "YOUR ONLY LIMIT IS YOUR MIND. BREAK THROUGH THE BARRIERS AND BECOME LEGENDARY.",
  "CHAMPIONS ARE MADE WHEN NOBODY IS WATCHING. FORGE YOUR LEGEND IN THE WINTER.",
  "PAIN IS TEMPORARY, BUT QUITTING LASTS FOREVER. CHOOSE GREATNESS.",
  "THE WINTER DOESN'T ASK IF YOU'RE READY. IT MAKES YOU READY."
];

export function MotivationSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="motivation"
      className="py-8"
      data-testid="motivation-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Rotating Quote Section */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-neutral-900/20 to-neutral-800/20 rounded-2x1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="animate-float"
            data-testid="rotating-quote"
          >
            <blockquote className="text-2xl md:text-3xl font-orbitron font-bold bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent mb-4">
              "{motivationalQuotes[currentQuote]}"
            </blockquote>
            <cite className="text-neutral-400 font-inter">- Winter ARC Philosophy</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
