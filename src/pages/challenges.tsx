import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Dumbbell, Target, ArrowLeft, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Navigation } from "../components/navigation";
import { SnowAnimation } from "../components/snow_animation";
import { useLocation } from "wouter";
import tojibgImage from "../assets/tojiinGYM_1755205052057.jpeg";
import tojiImage from "../assets/toji.jpeg";
import bakiImage from "../assets/baki.jpg";
import animeChar1 from "../assets/anime-char-1.jpeg";



export default function Challenges() {
  const [, setLocation] = useLocation();
  const [challenges] = useState([
    {
      id: 1,
      title: "TOJI'S STRENGTH",
      description: "30-day progressive strength challenge. Build unstoppable power like Toji Fushiguro.",
      progress: 0,
      total: 30,
      unit: "Days",
      icon: Zap,
      gradient: "from-gray-700 to-gray-900",
      hoverGradient: "from-gray-600 to-gray-800",
      iconBg: "bg-gray-700",
      titleColor: "text-gray-300",
      progressColor: "text-gray-300",
      bgImage: tojiImage
    },
    {
      id: 2,
      title: "BAKI'S TRAINING",
      description: "High-intensity combat training that will forge an unbreakable warrior spirit.",
      progress: 0,
      total: 20,
      unit: "Sessions",
      icon: Dumbbell,
      gradient: "from-gray-800 to-black",
      hoverGradient: "from-gray-700 to-gray-900",
      iconBg: "bg-gray-800",
      titleColor: "text-gray-300",
      progressColor: "text-gray-300",
      bgImage: bakiImage
    },
    {
      id: 3,
      title: "WARRIOR'S PATH",
      description: "Complete transformation journey. Become the strongest version of yourself.",
      progress: 0,
      total: 25,
      unit: "Workouts",
      icon: Target,
      gradient: "from-gray-700 to-black",
      hoverGradient: "from-gray-600 to-gray-900",
      iconBg: "bg-gray-700",
      titleColor: "text-gray-300",
      progressColor: "text-gray-300",
      bgImage: animeChar1
    }
  ]);

  // const startChallenge = (challengeId: number) => {
  //   setChallenges(prev =>
  //     prev.map(challenge =>
  //       challenge.id === challengeId
  //         ? { ...challenge, progress: 1 }
  //         : challenge
  //     )
  //   );
  // };

  return (
    <div className="bg-black text-neutral-400 min-h-screen overflow-x-hidden relative">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${tojibgImage})`, // Using the imported tojiImage
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          opacity: 0.2,
        }}
      />
      <SnowAnimation />
      <Navigation />

      {/* Header */}
      <div className="pt-20 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => setLocation("/")}
            className="mb-4 sm:mb-6 bg-neutral-800 border border-neutral-800 text-neutral-400 hover:bg-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-orbitron font-bold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            data-testid="back-button"
          >
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-20"
        data-testid="challenges-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent">
              WINTER CHALLENGES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-neutral-400 font-inter font-light px-4">
              Train Like Legends <br className="hidden sm:block" />
              Become <span className="font-semibold">Unstoppable</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                className="bg-gradient-to-br from-neutral-900/50 to-black rounded-xl border border-neutral-700/30 card-hover overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                data-testid={`challenge-card-${challenge.id}`}
              >
                {/* Character Image */}
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${challenge.bgImage}')`
                  }}
                >
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${challenge.iconBg} rounded-lg flex items-center justify-center bg-neutral-800`}>
                      <challenge.icon className="text-neutral-400 text-xl" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`font-orbitron font-bold text-xl mb-3 ${challenge.titleColor}`}>
                    {challenge.title}
                  </h3>

                  <p className="text-neutral-600 font-inter mb-4">{challenge.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter">Progress</span>
                      <span className={`${challenge.progressColor} font-bold`}>
                        {challenge.progress}/{challenge.total} {challenge.unit}
                      </span>
                    </div>
                    <Progress
                      value={(challenge.progress / challenge.total) * 100}
                      className="w-full"
                    />
                  </div>

                  <Button
                    disabled
                    className={`w-full text-gray-200 bg-gradient-to-r from-neutral-800 to-neutral-900 py-3 rounded-lg font-orbitron font-bold flex items-center justify-center opacity-50 cursor-not-allowed`}
                    data-testid={`button-start-challenge-${challenge.id}`}
                  >
                    <Clock className="mr-2 h-4 w-4 text-gray-200" />COMING SOON
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}