import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function CommunitySection() {
  const stats = [
    { value: "50K+", label: "Active Warriors", color: "text-cyan-400" },
    { value: "2M+", label: "Workouts Completed", color: "text-blue-400" },
    { value: "95%", label: "Success Rate", color: "text-purple-400" },
    { value: "24/7", label: "Community Support", color: "text-pink-400" }
  ];

  const testimonials = [
    {
      name: "Alex Thunder",
      role: "Winter Warrior",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Winter ARC transformed me completely. 90 days ago I was weak, now I'm unstoppable. The community support is incredible!",
      borderColor: "border-cyan-400",
      nameColor: "text-cyan-400",
      cardBorder: "border-cyan-500/20"
    },
    {
      name: "Maya Storm",
      role: "Fitness Legend",
      avatar: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The challenges pushed me beyond what I thought possible. I've never felt stronger or more confident. This is more than fitness - it's a lifestyle.",
      borderColor: "border-blue-400",
      nameColor: "text-blue-400",
      cardBorder: "border-blue-500/20"
    },
    {
      name: "Ryan Beast",
      role: "Power Titan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Winter ARC gave me structure, motivation, and results I never imagined. The snow animation while working out is so motivating!",
      borderColor: "border-purple-400",
      nameColor: "text-purple-400",
      cardBorder: "border-purple-500/20"
    }
  ];

  return (
    <section 
      id="community" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      data-testid="community-section"
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
            JOIN THE <span className="text-cyan-400">LEGION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Connect with warriors worldwide. Share your journey, celebrate victories, and push each other to greatness.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="community-stats"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${index}`}
            >
              <div className={`text-4xl font-orbitron font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-300 font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border ${testimonial.cardBorder} card-hover`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div 
                  className={`w-12 h-12 bg-cover bg-center rounded-full border-2 ${testimonial.borderColor}`}
                  style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                />
                <div className="ml-3">
                  <h4 className={`font-orbitron font-bold ${testimonial.nameColor}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm font-inter">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 font-inter mb-4">"{testimonial.quote}"</p>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
