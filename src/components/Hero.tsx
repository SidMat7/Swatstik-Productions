import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax and Blur */}
      <motion.div
        initial={{ scale: 1.2, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{ backgroundImage: "url('src/assets/images/heroimage.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 backdrop-blur-sm" />
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-8 md:mb-12 px-4"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark px-4 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white/90 animate-pulse" />
              <span className="text-black/90 font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm text-center whitespace-nowrap group-hover:text-white transition-colors duration-300">
                Trusted Manufacturer & Distributor
              </span>
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white/90 animate-pulse" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight text-white text-center px-4"
          >
            Premium Quality{" "}
            <span className="text-primary relative inline-block">
              Besan
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] md:h-1 bg-gradient-to-r from-primary/80 via-primary to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-2 md:gap-3 mb-8 md:mb-12 px-4"
          >
            <span className="font-inter text-lg sm:text-xl md:text-2xl text-white/90 text-center leading-relaxed">
              Chemical-free, High protein Besan made from
            </span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="font-inter text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent"
            >
              100% Pure Chana Dal
            </motion.span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProducts}
              className="bg-primary text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full
                transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:bg-primary-dark text-sm sm:text-base"
            >
              Explore Our Products
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 md:gap-3"
        >
          <span className="text-white/80 text-xs md:text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown className="text-primary h-5 w-5 md:h-6 md:w-6" />
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-8 md:h-12 w-[1px] bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;