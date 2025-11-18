import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-12 md:py-16">
      <div className="section-padding max-w-5xl mx-auto text-center">
        <ScrollAnimation delay={300}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-primary-100 shadow-lg">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary-900 font-display leading-tight">
              "We believe payments should be effortless, invisible, and secure — powered by who you are, not what you carry."
            </blockquote>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Vision;
