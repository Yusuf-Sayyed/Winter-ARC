import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Users, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ChallengesSection() {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "PUSH-UP DOMINATION",
      description: "30-day progressive push-up challenge. Start with 10, build to 100.",
      progress: 0,
      total: 30,
      unit: "Days",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-400 to-blue-500",
      iconBg: "bg-cyan-500",
      titleColor: "text-cyan-400",
      progressColor: "text-cyan-400"
    },
    {
      id: 2,
      title: "CARDIO STORM",
      description: "High-intensity cardio sessions that will test your endurance limits.",
      progress: 0,
      total: 20,
      unit: "Sessions",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-400 to-purple-500",
      iconBg: "bg-blue-500",
      titleColor: "text-blue-400",
      progressColor: "text-blue-400"
    },
    {
      id: 3,
      title: "TITAN STRENGTH",
      description: "Progressive overload strength training for maximum power gains.",
      progress: 0,
      total: 25,
      unit: "Workouts",
      icon: Dumbbell,
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "from-purple-400 to-pink-500",
      iconBg: "bg-purple-500",
      titleColor: "text-purple-400",
      progressColor: "text-purple-400"
    }
  ]);

  const startChallenge = (challengeId: number) => {
    setChallenges(prev =>
      prev.map(challenge =>
        challenge.id === challengeId
          ? { ...challenge, progress: 1 }
          : challenge
      )
    );
  };

  const weeklyGoals = [
    { value: 7, label: "Workouts/Week", color: "cyan" },
    { value: 10, label: "Hours Training", color: "blue" },
    { value: "2K", label: "Calories Burned", color: "purple" },
    { value: 1, label: "New You", color: "pink" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400",
      blue: "bg-blue-500/20 border-blue-500 text-blue-400",
      purple: "bg-purple-500/20 border-purple-500 text-purple-400",
      pink: "bg-pink-500/20 border-pink-500 text-pink-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section
      id="challenges"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
      data-testid="challenges-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-shadow">
            WINTER <span className="text-cyan-400">CHALLENGES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Push beyond your limits. Each challenge is designed to forge an unbreakable spirit and unstoppable body.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-cyan-500/30 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              data-testid={`challenge-card-${challenge.id}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${challenge.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <challenge.icon className="text-white text-xl" />
                </div>
                <h3 className={`font-orbitron font-bold text-xl ${challenge.titleColor}`}>
                  {challenge.title}
                </h3>
              </div>

              <p className="text-gray-300 font-inter mb-4">{challenge.description}</p>

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
                onClick={() => startChallenge(challenge.id)}
                className={`w-full bg-gradient-to-r ${challenge.gradient} hover:${challenge.hoverGradient} py-3 rounded-lg font-orbitron font-bold transition-all duration-300`}
                data-testid={`button-start-challenge-${challenge.id}`}
              >
                {challenge.progress === 0 ? "START CHALLENGE" : "CONTINUE"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Weekly Goals */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="weekly-goals"
        >
          <h3 className="font-orbitron font-bold text-3xl text-center mb-8 text-cyan-400">
            WEEKLY GOALS
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {weeklyGoals.map((goal, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`goal-${index}`}
              >
                <div className={`w-20 h-20 ${getColorClasses(goal.color)} border-4 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="font-orbitron font-bold text-2xl">
                    {goal.value}
                  </span>
                </div>
                <p className="font-inter text-gray-300">{goal.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
