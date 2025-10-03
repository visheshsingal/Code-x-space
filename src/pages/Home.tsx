import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <ServicesPreview />
      {/* <WhyChooseUs /> */}
      <ContactSection />
    </main>
  );
};

export default Home;