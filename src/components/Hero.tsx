import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Gradient Background - Professional Payment Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 opacity-95" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(183, 255, 110, 0.2) 1.4px, transparent 1.4px)',
        backgroundSize: '28px 28px'
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          {/* Centered Content */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white font-display mb-8 leading-[1.1] tracking-tight">
              <span className="block drop-shadow-2xl">Your Palm is</span>
              <span className="block bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent drop-shadow-lg">
                Your Wallet
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide text-body-lg">
              Revolutionary biometric technology that transforms your palm into a secure payment method.
              <span className="block mt-3 text-white/90 font-normal text-lg md:text-xl">
                No phone, no cards, no cash—just you.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
