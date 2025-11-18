import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Technology from './components/Technology';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <Technology />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
