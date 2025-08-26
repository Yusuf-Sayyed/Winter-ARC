import { useMemo, useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Snowflake, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import { SnowAnimation } from "../components/snow_animation";
import { Navigation } from "../components/navigation";
import { IntroVideoSection } from "../components/video_player";
import { useLocation } from "wouter";
import tojiImage from "../assets/tojiinGYM_1755205052057.jpeg";
import tojiCard from "../assets/tojiCard.jpeg";
import bakiImage from "../assets/baki.jpg";
import animeChar1 from "../assets/anime-char-1.jpeg";
import { Button } from "../components/ui/button"
import { MotivationSection } from "../components/motivation_section";
import { Footer } from "../components/footer";
import { HowToBuyWinterArc } from '../components/howtobuy';
import { WinterArcCertificate } from '../components/contract_section'

export default function Home() {
  const [, setLocation] = useLocation();
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const contractAddress = "4j2gUEmfbSAacvSSd6yXo8yEzXCAUVeoXrqLVV3apump";
    navigator.clipboard.writeText(contractAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, []);

  const motivationCards = useMemo(
    () => [
      {
        title: "TOJI'S POWER",
        quote: "Strength without technique is meaningless. Master both.",
        image: tojiCard,
      },
      {
        title: "BAKI'S SPIRIT",
        quote: "The strongest fighter is the one who never gives up.",
        image: bakiImage,
      },
      {
        title: "WARRIOR'S MIND",
        quote: "Your body can endure anything. Train your mind first.",
        image: animeChar1,
      },
    ],
    [],
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % motivationCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, motivationCards.length]);

  const handleNavigateToChallenges = useCallback(() => {
    setLocation("/challenges");
  }, [setLocation]);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % motivationCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + motivationCards.length) % motivationCards.length);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen relative">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${tojiImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          opacity: 0.2,
        }}
      />
      <SnowAnimation />
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-32 pb-10 px-4"
      >
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h1 className="font-orbitron font-black text-[49px] leading-tight md:text-[80px] lg:text-[96px] mb-4 sm:mb-6 bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent">
            WINTER ARC
        </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-neutral-400 font-inter font-light px-4">
            Transform Your Body. Transform Your Mind.{" "}
            <br className="hidden sm:block" />
              Embrace The Challenge.
          </p>

                  {/* Copyable Contract Address Section */}
        <motion.div
          className="w-full w-xl mx-auto relative z-20 mb-8 sm:mb-12 2xl:w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-neutral-950/50 border border-neutral-900 rounded-lg p-3 flex items-center justify-between gap-3 backdrop-blur-sm">
            <p className="text-neutral-100 text-xs sm:text-sm xl:text-md 2xl:text-xl font-mono break-all flex-1">
              4j2gUEmfbSAacvSSd6yXo8yEzXCAUVeoXrqLVV3apump
            </p>
            <Button
              onClick={handleCopy}
              className="text-neutral-300 hover:text-white hover:bg-neutral-800"
            >
              {isCopied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" /> Copy CA
                </>
              )}
            </Button>
          </div>
        </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleNavigateToChallenges}
              className=" bg-neutral-800 border border-neutral-800 text-neutral-400 hover:bg-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-orbitron font-bold text-sm sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Dumbbell className="mr-2" />
              Sign the Contract
            </Button>
            <Button
              className=" bg-neutral-800 border border-neutral-800 text-neutral-400 hover:bg-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-orbitron font-bold text-sm sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://x.com/i/communities/1942548949589430344",
                  "_blank",
                )
              }
            >
              <Flame className="mr-2" />
              JOIN COMMUNITY
            </Button>
          </div>
        </motion.div>

        <HowToBuyWinterArc />
      <section className="mt-20">
        <WinterArcCertificate />
      </section>
      <IntroVideoSection />

      </section>

      {/* Motivation Section */}
      <section className="py-10 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent">
              LEGENDARY MOTIVATION
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto font-inter px-4">
              Channel the strength of legendary warriors. Every rep, every set,
              every drop of sweat brings you closer to your ultimate form.
            </p>
          </motion.div>

          {/* Desktop Grid View */}
          <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {motivationCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end">
                  <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-white">
                    {card.title}
                  </h3>
                  <p className="text-neutral-300 font-inter mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
                    "{card.quote}"
                  </p>
                  <div className="flex items-center text-neutral-300">
                    <Flame className="mr-2" />
                    <span className="font-semibold text-sm sm:text-base">UNLEASH POWER</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative mb-12 sm:mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <motion.div
                key={currentCard}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${motivationCards[currentCard].image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="font-orbitron font-bold text-2xl mb-3 text-white">
                    {motivationCards[currentCard].title}
                  </h3>
                  <p className="text-neutral-300 font-inter mb-4 text-lg leading-relaxed">
                    "{motivationCards[currentCard].quote}"
                  </p>
                  <div className="flex items-center text-neutral-300">
                    <Flame className="mr-2" />
                    <span className="font-semibold">UNLEASH POWER</span>
                  </div>
                </div>
              </motion.div>
              <button
                onClick={prevCard}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextCard}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {motivationCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentCard
                      ? 'bg-white'
                      : 'bg-neutral-600 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleNavigateToChallenges}
              className="bg-neutral-800 border border-neutral-800 text-neutral-400 hover:bg-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-orbitron font-bold text-sm sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Snowflake className="mr-2" />
              VIEW WINTER CHALLENGES
            </Button>
          </div>
        </div>
        <MotivationSection></MotivationSection>
      </section>
      <section className=" mt-12 sm:mt-2 relative z-2">
      <Footer></Footer>
      </section>
    </div>
  );
}