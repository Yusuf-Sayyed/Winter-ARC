import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame, Snowflake, Brain } from "lucide-react";

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

  const motivationCards = [
    {
      icon: Flame,
      title: "STRENGTH UNLEASHED",
      quote: "The pain you feel today will be the strength you feel tomorrow.",
      action: "IGNITE YOUR POWER",
      gradient: "from-cyan-900/20 to-slate-800",
      border: "border-cyan-500/20",
      iconColor: "text-cyan-400",
      titleColor: "text-cyan-400",
      actionColor: "text-cyan-400",
      bgImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Snowflake,
      title: "WINTER WARRIOR",
      quote: "Champions train when others sleep. Legends are forged in winter.",
      action: "EMBRACE THE COLD",
      gradient: "from-blue-900/20 to-slate-800",
      border: "border-blue-500/20",
      iconColor: "text-blue-400",
      titleColor: "text-blue-400",
      actionColor: "text-blue-400",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Brain,
      title: "MENTAL FORTRESS",
      quote: "Your body can stand almost anything. It's your mind you have to convince.",
      action: "MIND OVER MATTER",
      gradient: "from-purple-900/20 to-slate-800",
      border: "border-purple-500/20",
      iconColor: "text-purple-400",
      titleColor: "text-purple-400",
      actionColor: "text-purple-400",
      bgImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section 
      id="motivation" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      data-testid="motivation-section"
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
            POWER OF <span className="text-cyan-400">MOTIVATION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Channel the strength of legendary warriors. Every rep, every set, every drop of sweat brings you closer to your ultimate form.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {motivationCards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${card.gradient} p-6 rounded-xl border ${card.border} card-hover`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              data-testid={`motivation-card-${index}`}
            >
              <div 
                className="h-48 bg-cover bg-center rounded-lg mb-4" 
                style={{
                  backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3), rgba(15, 23, 42, 0.7)), url('${card.bgImage}')`
                }}
              />
              <h3 className={`font-orbitron font-bold text-xl mb-3 ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className="text-gray-300 font-inter mb-4">{card.quote}</p>
              <div className={`flex items-center ${card.actionColor}`}>
                <card.icon className="mr-2" />
                <span className="font-semibold">{card.action}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating Quote Section */}
        <motion.div 
          className="text-center p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/30"
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
            <blockquote className="text-2xl md:text-3xl font-orbitron font-bold text-cyan-400 mb-4">
              "{motivationalQuotes[currentQuote]}"
            </blockquote>
            <cite className="text-gray-400 font-inter">- Winter ARC Philosophy</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
