import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react"; // Import X icon
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
      <div className="flex items-center">
        <button
          onClick={() => navigateTo("/")}
          className="flex items-center" // Make the button a flex container for inline alignment
          data-testid="logo"
        >
          <img
            src="/winterarclogo.png" // Use the correct path to your logo
            alt="Winter ARC Logo"
            className="h-9 w-auto mr-3" // Adjust height, maintain aspect ratio, and add some right margin
          />
          <span className="font-orbitron font-bold text-xl text-neutral-400 transition-colors">
            Winter ARC
          </span>
        </button>
      </div>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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