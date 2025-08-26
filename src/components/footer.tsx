import { FaXTwitter, FaTiktok, FaTelegram } from "react-icons/fa6";

  const socialLinks = [
    { href: "https://x.com/WinterArcOnSol", icon: <FaXTwitter />, label: "Twitter" },
    { href: "https://www.tiktok.com/@winterarconsol", icon: <FaTiktok />, label: "TikTok" },
    { href: "https://t.me/WinterArcPortal", icon: <FaTelegram />, label: "Telegram" },
  ];
export function Footer() {

  return (
    <footer
      className="py-8 text-white"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">

          <div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            data-testid="footer-top-content"
          >
            <span className="font-orbitron font-bold text-2xl">Winter ARC</span>
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

          <div className="text-center">
            <p className="text-gray-400 font-inter">
              © {new Date().getFullYear()} Winter ARC. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 font-inter mt-1">
              Built for warriors, by warriors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}