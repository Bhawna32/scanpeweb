import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🔐',
      title: 'Ultra-Secure Biometric ID',
      description: 'Your unique palm print provides bank-level security for every transaction.',
    },
    {
      icon: '⚡',
      title: 'Faster than Cards or UPI',
      description: 'Complete payments in milliseconds with just a simple palm scan.',
    },
    {
      icon: '📱',
      title: 'No Devices, No Hassle',
      description: 'Leave your phone, wallet, and cards at home. Your palm is all you need.',
    },
    {
      icon: '🏢',
      title: 'For Businesses Too',
      description: 'Seamless integration for merchants with reduced transaction fees.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Recognition',
      description: 'Advanced machine learning ensures accurate and instant palm identification.',
    },
    {
      icon: '🔒',
      title: 'Privacy-First Design',
      description: 'Your biometric data never leaves the device. Complete privacy guaranteed.',
    },
  ];

  return (
    <section id="features" className="py-12 md:py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-secondary-900 font-display mb-6">
            Why
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Scanpe?
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-body-lg">
            Experience the future of payments with cutting-edge biometric technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="feature-card group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-body">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
