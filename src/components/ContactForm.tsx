
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mt-4">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-2xl font-bold text-secondary mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Our Location</p>
                    <p className="text-secondary-light">
                      A/P Ankalkhop, Near HP Petrol Pump, Tal - Palus, Dist - Sangli, 416316
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Phone Numbers</p>
                    <p className="text-secondary-light">+91 8530256885</p>
                    <p className="text-secondary-light">+91 7030070333</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Email</p>
                    <p className="text-secondary-light">swastikfood8055@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-accent 
                    focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-accent 
                    focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-accent 
                    focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 
                  rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
