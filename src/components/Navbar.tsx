// Enhanced Navbar Component
import { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection !== -1) {
        setActiveLink(navLinks[currentSection].name.toLowerCase());
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 font-poppins ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <m.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={logo}
              className="h-10 w-auto object-contain" 
              alt="Logo" 
            />
            <div className="flex flex-col">
              <span className={`font-playfair text-2xl font-medium ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
                Swastik
              </span>
              <span className={`font-poppins text-[10px] uppercase tracking-[0.4em] ${
                isScrolled ? 'text-secondary/70' : 'text-white/70'
              }`}>
                Premium Besan
              </span>
            </div>
          </m.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <m.a
                  key={index}
                  href={link.href}
                  className={`relative group px-4 py-2 transition-all duration-300 ${
                    isScrolled ? 'text-secondary/70' : 'text-white/90'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10 tracking-[0.15em] uppercase text-[13px] font-medium">
                    {link.name}
                    
                    {/* Hover line effect */}
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/50 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    
                    {/* Active indicator */}
                    {activeLink === link.name.toLowerCase() && (
                      <m.span
                        layoutId="activeSection"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary to-primary/80"
                      />
                    )}
                  </span>

                  {/* Hover background glow */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  
                  {/* Text glow effect */}
                  <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isScrolled 
                      ? 'bg-primary/5' 
                      : 'bg-white/5'
                  }`} />
                </m.a>
              ))}
            </div>
            
            {/* Contact Buttons */}
            <div className="flex items-center gap-4">
              {/* First Phone Number */}
              <m.a
                href="tel:+917030070333"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full
                  transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:shadow-primary/20' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'
                }`}
              >
                <Phone size={16} className="animate-pulse" />
                <span className="text-sm tracking-wider font-medium">+91 7030070333</span>
              </m.a>

              {/* Second Phone Number */}
              <m.a
                href="tel:+918530256885"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full
                  transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:shadow-primary/20' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'
                }`}
              >
                <Phone size={16} className="animate-pulse" />
                <span className="text-sm tracking-wider font-medium">+91 8530256885</span>
              </m.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-full ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </m.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`mt-4 rounded-2xl p-4 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-black/20 backdrop-blur-lg'
              }`}>
                <div className="space-y-3">
                  {navLinks.map((link, index) => (
                    <m.a
                      key={index}
                      href={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-xl
                        hover:bg-primary/10 transition-colors ${
                        isScrolled ? 'text-secondary' : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight size={18} className="text-primary" />
                    </m.a>
                  ))}
                  
                  {/* Phone Numbers in Mobile Menu */}
                  <div className="flex flex-col gap-2 mt-4">
                    <m.a
                      href="tel:+917030070333"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/10"
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={18} className="text-primary animate-pulse" />
                      <span className={`font-medium ${
                        isScrolled ? 'text-secondary' : 'text-white'
                      }`}>
                        +91 7030070333
                      </span>
                    </m.a>

                    <m.a
                      href="tel:+918530256885"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (navLinks.length + 1) * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/10"
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={18} className="text-primary animate-pulse" />
                      <span className={`font-medium ${
                        isScrolled ? 'text-secondary' : 'text-white'
                      }`}>
                        +91 8530256885
                      </span>
                    </m.a>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.nav>
  );
};

export default Navbar;
