import { useState, useCallback } from "react";
import { Menu, Snowflake, X } from "lucide-react"; // Import X icon
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { FaXTwitter, FaTiktok, FaTelegram } from "react-icons/fa6"; // Social Icons

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navigateTo = useCallback((path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  }, [setLocation]);

  // This function seems unused but is kept in case you need it later
  // const scrollToSection = useCallback((sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   setIsMenuOpen(false);
  // }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const socialLinks = [
    { href: "https://x.com/WinterArcOnSol", icon: <FaXTwitter />, label: "Twitter" },
    { href: "https://www.tiktok.com/@winterarconsol", icon: <FaTiktok />, label: "TikTok" },
    { href: "https://t.me/WinterArcPortal", icon: <FaTelegram />, label: "Telegram" },
  ];

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md z-50 bg-transparent"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Snowflake className="text-gray-300 text-2xl mr-3" />
            <button
              onClick={() => navigateTo("/")}
              className="font-orbitron font-bold text-xl text-neutral-400 transition-colors"
              data-testid="logo"
            >
              Winter ARC
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateTo("/")}
              className="hover:text-gray-400 text-neutral-400 transition-colors font-inter"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("/challenges")}
              className="hover:text-gray-400 text-neutral-400 transition-colors font-inter"
              data-testid="nav-challenges"
            >
              Challenges
            </button>
            {/* Desktop Socials */}
            <div className="flex items-center space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 transition-colors duration-200 p-2 rounded-lg"
              data-testid="menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {/* Switch between Menu and X icon */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => navigateTo("/")}
                className="block w-full text-left px-4 py-3 text-neutral-400 rounded-lg bg-neutral-700/50 hover:bg-neutral-900/50 transition-colors"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("/challenges")}
                className="block w-full text-left px-4 py-3 text-neutral-400 rounded-lg bg-neutral-700/50 hover:bg-neutral-900/50 transition-colors"
                data-testid="mobile-nav-challenges"
              >
                Challenges
              </button>
              {/* Mobile Socials */}
              <div className="pt-4 flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}