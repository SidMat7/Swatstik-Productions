import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import About from '@/components/About';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-cream-light">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
