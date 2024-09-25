import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Service from './components/Service';
import AboutSection from './components/AboutSection';
import AppSection from './components/AppSection';
import TestimonialsCarousel from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <AboutSection />
      <AppSection />
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

export default App;
