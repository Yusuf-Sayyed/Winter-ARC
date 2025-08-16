import { Snowflake, Instagram, Youtube, MessageCircle, Twitter } from "lucide-react";

export function Footer() {
  const quickLinks = ["About Us", "Challenges", "Community", "Support"];
  const resources = ["Workout Plans", "Nutrition Guide", "Progress Tracker", "Mobile App"];

  return (
    <footer 
      className="bg-slate-900 border-t border-cyan-500/20 py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Snowflake className="text-cyan-400 text-2xl mr-3" />
              <span className="font-orbitron font-bold text-2xl">Winter ARC</span>
            </div>
            <p className="text-gray-400 font-inter mb-4">
              Transform your body and mind with the ultimate winter fitness challenge. Join thousands of warriors on their journey to greatness.
            </p>
            <div className="flex space-x-4" data-testid="social-links">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors" data-testid="link-instagram">
                <Instagram className="text-2xl" />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors" data-testid="link-youtube">
                <Youtube className="text-2xl" />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors" data-testid="link-discord">
                <MessageCircle className="text-2xl" />
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors" data-testid="link-twitter">
                <Twitter className="text-2xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-lg mb-4 text-cyan-400">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-400 hover:text-cyan-400 transition-colors font-inter"
                  data-testid={`link-${link.toLowerCase().replace(' ', '-')}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-lg mb-4 text-cyan-400">Resources</h4>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-400 hover:text-cyan-400 transition-colors font-inter"
                  data-testid={`link-${resource.toLowerCase().replace(' ', '-')}`}
                >
                  {resource}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2024 Winter ARC. All rights reserved. Built for warriors, by warriors.
          </p>
        </div>
      </div>
    </footer>
  );
}
