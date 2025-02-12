import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck } from 'lucide-react';

const products = [
  {
    name: "Swastik Besan",
    description: "Premium quality besan crafted from carefully selected 100% pure chana dal. Our state-of-the-art processing ensures perfect texture and rich aroma in every pack. Ideal for both commercial and household use, it guarantees exceptional results in all your recipes - from crispy pakoras to soft kadhi. Each batch undergoes rigorous quality checks to maintain our high standards.",
    sizes: ["250g", "500g", "1kg", "10kg"],
    image: "https://ik.imagekit.io/f3cuvriq6/max.png?updatedAt=1739379962137"
    features: [
      { icon: Star, text: "Premium Quality" },
      { icon: Award, text: "Best Seller" },
      { icon: ShieldCheck, text: "Quality Tested" }
    ]
  },
  // ... other products
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-cream/20 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-semibold uppercase tracking-[0.2em] px-6 py-2 rounded-full text-sm border border-primary/10 shadow-sm">
              Our Premium Product
            </span>
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-playfair text-4xl md:text-6xl font-bold text-secondary mt-6 mb-6 leading-tight"
          >
            Experience Pure{" "}
            <span className="text-primary relative inline-block">
              Quality
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
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-secondary/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Crafted with precision and care, our besan delivers consistent quality in every pack
          </motion.p>
        </div>

        {/* Centered Product Display */}
        <div className="max-w-3xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
              className="group relative bg-white/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image Container */}
              <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-cream/50 to-white">
                {/* Floating Animation Container */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-full h-full p-8 md:p-12"
                >
                  {/* Product Image with Shadow */}
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 w-4/5 h-4/5 left-1/2 -translate-x-1/2 bg-black/10 blur-2xl rounded-full transform-gpu" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform-gpu group-hover:scale-110 transition-transform duration-700 relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Product Details */}
              <div className="p-8 md:p-10 relative text-center">
                {/* Centered Size Badges */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full px-4">
                  {product.sizes.map((size, sizeIndex) => (
                    <motion.span
                      key={sizeIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {size}
                    </motion.span>
                  ))}
                </div>
                
                {/* Product Name & Description */}
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-secondary/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-6">
                  {product.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <feature.icon size={20} className="text-primary" />
                      <span className="text-sm font-medium text-secondary/80">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Most Popular
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
