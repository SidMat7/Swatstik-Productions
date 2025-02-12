import { motion } from 'framer-motion';
import { Star, Shield, Award, ArrowRight, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-cream via-white to-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-accent/20 to-accent/10 text-accent font-semibold uppercase tracking-widest px-6 py-2 rounded-full text-sm border border-accent/10 shadow-sm">
              Our Vision
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-playfair text-5xl md:text-7xl font-bold text-secondary mt-6 mb-8 leading-tight"
          >
            Tradition Meets{" "}
            <span className="relative inline-block">
              <span className="text-primary">Innovation</span>
              <Sparkles className="absolute -right-8 -top-6 text-accent h-6 w-6 animate-pulse" />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-20 max-w-3xl mx-auto"
          >
            Swastik Production is a trusted manufacturer, wholesaler, retailer, and distributor of premium-quality 
            besan flour. We prioritize taste, nutrition, and hygiene, ensuring our products undergo{" "}
            <span className="text-primary font-semibold">25+ quality checks</span>{" "}
            and remain untouched by hands for maximum safety and purity.
          </motion.p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Made from carefully selected chana dal, ensuring fine texture and rich aroma",
                color: "from-yellow-500/20 to-transparent",
                iconBg: "bg-yellow-500/10",
                delay: 0.2
              },
              {
                icon: Shield,
                title: "Food Safety",
                description: "Complies with strict food safety protocols with 25+ quality checks",
                color: "from-blue-500/20 to-transparent",
                iconBg: "bg-blue-500/10",
                delay: 0.4
              },
              {
                icon: Award,
                title: "Natural Ingredients",
                description: "Focused on eco-friendly and waste-minimizing food production",
                color: "from-green-500/20 to-transparent",
                iconBg: "bg-green-500/10",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-5 rounded-xl ${item.iconBg} ring-1 ring-black/5 shadow-lg`}
                    >
                      <item.icon size={36} className="text-accent" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-secondary/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// Add this to your global CSS
const styles = `
@keyframes bounce-x {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

.animate-bounce-x {
  animation: bounce-x 1s infinite;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, #000 1px, transparent 0);
  background-size: 40px 40px;
}
`;
