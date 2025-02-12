import { motion } from 'framer-motion';
import { Truck, Settings, ShieldCheck, Package, Leaf, Headphones, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "Bulk Supply & Wholesale",
    description: "Supplying high-quality besan flour to retailers, wholesalers, and food industries in bulk quantities with timely deliveries and competitive pricing.",
    color: "from-blue-500/20 to-transparent",
    iconBg: "bg-blue-500/10",
    highlight: "Competitive Bulk Pricing"
  },
  {
    icon: Settings,
    title: "Customized Processing",
    description: "Offering customized grinding & packaging solutions for businesses, hotels, and caterers, including private labeling services.",
    color: "from-purple-500/20 to-transparent",
    iconBg: "bg-purple-500/10",
    highlight: "Tailored Solutions"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Implementing 25+ quality checks to ensure purity, hygiene, and no preservatives, with full compliance to food safety regulations.",
    color: "from-green-500/20 to-transparent",
    iconBg: "bg-green-500/10",
    highlight: "25+ Quality Checks"
  },
  {
    icon: Package,
    title: "Retail Packaging",
    description: "Providing ready-to-use packaged besan in various sizes with attractive packaging designed for end consumers.",
    color: "from-yellow-500/20 to-transparent",
    iconBg: "bg-yellow-500/10",
    highlight: "Multiple Size Options"
  },
  {
    icon: Leaf,
    title: "Sustainable Processing",
    description: "Using environmentally friendly and waste-reducing food processing techniques with zero-waste packaging solutions.",
    color: "from-emerald-500/20 to-transparent",
    iconBg: "bg-emerald-500/10",
    highlight: "Eco-Friendly"
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description: "Offering technical guidance on storage, usage, and preservation of besan products with dedicated support.",
    color: "from-red-500/20 to-transparent",
    iconBg: "bg-red-500/10",
    highlight: "24/7 Support"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-cream/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div 
        className="absolute top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-semibold uppercase tracking-[0.2em] px-6 py-2 rounded-full text-sm border border-primary/10 shadow-sm">
              Our Expertise
            </span>
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
            className="font-playfair text-3xl md:text-5xl font-bold text-secondary mt-6 mb-6 px-4 tracking-tight leading-tight"
          >
            Trusted Partner in{" "}
            <span className="text-primary relative inline-block">
              Besan Production 
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-secondary/80 px-4 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
          >
            From wholesale distribution to customized packaging, discover how our comprehensive services 
            ensure quality at every step of besan production
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white hover:to-cream/30 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-6">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 + 0.3 
                  }}
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-secondary/70 tracking-wider`}
                >
                  {service.highlight}
                </motion.span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${service.iconBg} flex items-center justify-center ring-1 ring-black/5 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <service.icon size={24} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300 tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-secondary/90 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 