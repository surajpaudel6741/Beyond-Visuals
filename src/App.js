import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services'; // Replacing Skills with Services
import Contact from './components/Contact';
import Clients from './components/Clients';
import CreatorsSection from './components/CreatorsSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <>
      <Hero />
      <Clients />
      <CreatorsSection />
      <Services />
      <TestimonialsSection />
      <Contact />
    </>
  );
}


export default App;
