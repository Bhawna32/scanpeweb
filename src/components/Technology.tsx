import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Technology: React.FC = () => {
  const techStack = [
    {
      icon: '🔬',
      title: 'Near-Infrared Spectroscopy',
      description: '850nm wavelength captures 3D vein topology with sub-millimeter precision',
    },
    {
      icon: '🧠',
      title: 'Edge AI Processing',
      description: 'On-device neural networks for real-time pattern recognition and matching',
    },
    {
      icon: '🔐',
      title: '256-bit Encryption',
      description: 'Military-grade encryption ensures biometric data never leaves the device',
    },
    {
      icon: '⚡',
      title: 'Hardware Acceleration',
      description: 'Dedicated processors enable sub-second recognition and tokenization',
    },
  ];

  return (
    <section id="technology" className="py-12 md:py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-secondary-900 font-display mb-6">
            The Technology
            <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Behind Scanpe
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed text-body-lg">
            Built on cutting-edge biometric science and secure hardware architecture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 font-display">
                  {tech.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-sm text-body">
                  {tech.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Technology;
