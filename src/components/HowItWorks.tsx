import React, { useState, useEffect } from 'react';

type WorkflowStep = {
  title: string;
  headline: string;
  description: string;
  outcome: string;
  techDetail: string;
  icon: React.ReactNode;
};

const WorkflowIcons = {
  approach: (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 text-neon-blue"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="12" r="8" />
        <path d="M26 22 L26 40" />
        <path d="M14 58 L22 38" />
        <path d="M38 58 L30 38" />
        <path d="M40 26 H52 C55.3137 26 58 28.6863 58 32 V52 C58 55.3137 55.3137 58 52 58 H40" />
        <path d="M18 32 H26" />
      </g>
    </svg>
  ),
  scan: (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 text-neon-blue"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="52" height="44" rx="8" />
        <path d="M20 22 H44" />
        <path d="M20 32 H26" />
        <path d="M32 32 H38" />
        <path d="M44 32 H48" />
        <path d="M24 42 H30" />
        <path d="M36 42 H40" />
      </g>
      <circle cx="32" cy="32" r="10" fill="currentColor" opacity="0.12" />
      <path d="M30 24 C38 26 36 40 28 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  binary: (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 text-neon-blue"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="6" y="10" width="52" height="44" rx="10" fill="currentColor" opacity="0.08" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
      >
        <path d="M18 24 H24" />
        <path d="M30 24 H36" />
        <path d="M42 24 H46" />
        <path d="M18 32 H22" />
        <path d="M26 32 H32" />
        <path d="M38 32 H44" />
        <path d="M50 32 H54" />
        <path d="M18 40 H26" />
        <path d="M34 40 H40" />
        <path d="M46 40 H52" />
      </g>
    </svg>
  ),
  secure: (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 text-neon-blue"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8 L52 16 V32 C52 44 44 54 32 58 C20 54 12 44 12 32 V16 Z" />
        <circle cx="32" cy="32" r="8" />
        <path d="M32 28 V36" />
      </g>
    </svg>
  ),
  approve: (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 text-neon-blue"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="44" height="24" rx="6" />
        <rect x="20" y="36" width="24" height="20" rx="6" />
        <path d="M28 46 L30 48 L36 40" />
      </g>
    </svg>
  ),
};

const ProcessVisualization: React.FC<{ steps: WorkflowStep[]; activeStep: number }> = ({ steps, activeStep }) => {
  return (
        <div className="relative w-full h-[450px] lg:h-[550px] mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-primary-50/30 to-white border-2 border-primary-100/60 shadow-2xl">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #B7FF6E 1px, transparent 1px), linear-gradient(to bottom, #B7FF6E 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Central Icon Display */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="relative">
          {/* Animated Rings */}
          <div className="absolute inset-0 flex items-center justify-center -z-0">
            <div className={`relative w-40 h-40 lg:w-48 lg:h-48 transition-all duration-1000 ease-out ${
              activeStep >= 1 ? 'scale-100 opacity-100' : 'scale-95 opacity-20'
            }`}>
              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                activeStep >= 1 ? 'border-neon-blue/50 shadow-lg shadow-neon-blue/20' : 'border-gray-300/20'
              }`} />
              <div className={`absolute inset-4 rounded-full border transition-all duration-1000 ${
                activeStep >= 2 ? 'border-neon-blue/40 opacity-100' : 'border-gray-300/10 opacity-0'
              }`} />
              <div className={`absolute inset-8 rounded-full border transition-all duration-1000 ${
                activeStep >= 3 ? 'border-accent-purple/30 opacity-100' : 'border-gray-300/5 opacity-0'
              }`} />
            </div>
          </div>
          
          {/* Central Icon */}
          <div className="relative z-10 w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
            <div className={`transition-all duration-700 ease-out ${
              activeStep >= 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-20 scale-90 -rotate-12'
            }`}>
              {React.cloneElement(steps[activeStep - 1]?.icon as React.ReactElement, {
                className: 'w-full h-full text-neon-blue drop-shadow-lg'
              })}
            </div>
          </div>
          
          {/* Glow Effect */}
          {activeStep >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center -z-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-neon-blue/10 blur-2xl animate-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Step Indicators - Horizontal Timeline */}
      <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isActive = activeStep === index + 1;
            const isCompleted = activeStep > index + 1;
            
            return (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center flex-1 group cursor-pointer">
                  {/* Step Circle */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-700 ease-out ${
                      isActive
                        ? 'border-neon-blue bg-gradient-to-br from-neon-blue/15 to-accent-purple/10 shadow-xl shadow-neon-blue/30 scale-110 ring-4 ring-neon-blue/20'
                        : isCompleted
                        ? 'border-neon-blue/70 bg-neon-blue/8 scale-100 shadow-md'
                            : 'border-secondary-300 bg-white scale-100 group-hover:border-primary-400 group-hover:scale-105'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-7 h-7 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className={`text-lg lg:text-xl font-bold transition-colors ${
                          isActive ? 'text-neon-blue' : 'text-secondary-400 group-hover:text-secondary-600'
                        }`}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-neon-blue/30 animate-ping" />
                    )}
                  </div>
                  
                  {/* Step Label */}
                  <p className={`text-xs md:text-sm font-bold text-center max-w-[120px] transition-all duration-700 leading-tight ${
                    isActive 
                        ? 'text-secondary-900 opacity-100 scale-100' 
                        : 'text-secondary-500 opacity-70 scale-95 group-hover:opacity-90 group-hover:scale-100'
                  }`}>
                    {step.headline}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-3 mb-10 relative">
                    <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                      isCompleted 
                        ? 'bg-gradient-to-r from-neon-blue/60 to-neon-blue/40 shadow-sm' 
                            : 'bg-secondary-200'
                    }`} />
                    {isCompleted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/80 to-neon-blue/60 rounded-full animate-pulse" />
                    )}
                    {isActive && index === activeStep - 1 && (
                      <div className="absolute inset-0 bg-neon-blue/40 rounded-full animate-pulse" />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps: WorkflowStep[] = [
    {
      title: 'approach',
      headline: 'Hover Your Hand',
      description: 'Simply hold your palm over the reader - the scanner automatically detects and guides you into position.',
      outcome: 'Scanner wakes and guides the user into position.',
      techDetail: 'Proximity sensors detect hand presence within 15cm range',
      icon: WorkflowIcons.approach,
    },
    {
      title: 'scan',
      headline: 'Infrared Scan Captures Veins',
      description: 'Infrared light maps the unique vein structure in under a second without touching the sensor.',
      outcome: 'Vein image is captured without storing a raw photo.',
      techDetail: '850nm NIR spectroscopy captures 3D vein topology',
      icon: WorkflowIcons.scan,
    },
    {
      title: 'binary',
      headline: 'Vein Map Becomes Encrypted Code',
      description: 'Dedicated hardware converts the pattern into a secure binary template that never leaves the device.',
      outcome: 'Only an encrypted template moves forward.',
      techDetail: 'Edge AI processor generates 256-bit encrypted hash',
      icon: WorkflowIcons.binary,
    },
    {
      title: 'secure',
      headline: 'Template Matches Locally',
      description: 'The template is compared with the stored biometric profile and a one-time payment token is created.',
      outcome: 'ScanPe produces a bank-ready payment token.',
      techDetail: 'On-device matching with <0.001% false acceptance rate',
      icon: WorkflowIcons.secure,
    },
    {
      title: 'approve',
      headline: 'Transaction Approved Instantly',
      description: 'The tokenized request reaches the bank, the payment is confirmed, and the terminal shows success.',
      outcome: 'Customer sees an approval tick in under two seconds.',
      techDetail: 'Blockchain-verified tokenization for instant settlement',
      icon: WorkflowIcons.approve,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-neon-blue/5 via-transparent to-accent-purple/5 rounded-full blur-3xl" />
      
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-accent-purple/10 border border-neon-blue/20 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse shadow-lg shadow-neon-blue/50" />
            <span className="text-xs font-bold text-neon-blue uppercase tracking-[0.25em]">
              Advanced Technology
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary-900 font-display mb-8 leading-[1.1] tracking-tight">
            How ScanPe
            <span className="block bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 bg-clip-text text-transparent mt-2">
              Works
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-light text-body-lg">
            A seamless five-step process that transforms your palm into a secure payment method
          </p>
        </div>
        
        {/* Process Visualization */}
        <ProcessVisualization steps={steps} activeStep={activeStep} />

        {/* Detailed Step Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {steps.map((step, index) => {
            const isActive = activeStep === index + 1;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(index + 1)}
                className={`relative group cursor-pointer text-left p-8 md:p-10 rounded-3xl border-2 transition-all duration-700 ease-out ${
                  isActive
                    ? 'border-neon-blue/60 bg-gradient-to-br from-white via-neon-blue/5 to-white shadow-2xl shadow-neon-blue/20 scale-[1.02] -translate-y-1'
                    : 'border-secondary-200/80 bg-white hover:border-primary-400 hover:shadow-xl hover:-translate-y-0.5'
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-blue/15 to-accent-purple/15 text-neon-blue border border-neon-blue/30 shadow-sm'
                      : 'bg-secondary-50 text-secondary-500 border border-secondary-200'
                  }`}>
                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-neon-blue animate-pulse shadow-sm shadow-neon-blue/50' : 'bg-secondary-400'
                    }`} />
                    Step {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`transition-all duration-700 ${
                    isActive ? 'opacity-100 scale-110 rotate-0' : 'opacity-30 scale-90 -rotate-6 group-hover:opacity-60 group-hover:scale-100 group-hover:rotate-0'
                  }`}>
                    {React.cloneElement(step.icon as React.ReactElement, {
                      className: 'w-10 h-10 text-neon-blue'
                    })}
                  </div>
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold font-display mb-5 transition-colors leading-tight ${
                  isActive ? 'text-secondary-900' : 'text-secondary-700 group-hover:text-secondary-900'
                }`}>
                  {step.headline}
                </h3>
                
                <p className="text-base md:text-lg text-secondary-600 leading-relaxed mb-6 font-light text-body">
                  {step.description}
                </p>
                
                {/* Outcome Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    isActive
                      ? 'bg-neon-blue/5 text-neon-blue border-neon-blue/20'
                      : 'bg-secondary-50 text-secondary-600 border-secondary-200'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {step.outcome}
                  </span>
                </div>
                
                {/* Tech Detail - Shows on Active */}
                {isActive && (
                  <div className="mt-8 pt-8 border-t-2 border-gradient-to-r from-neon-blue/30 to-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-gradient-to-b from-neon-blue to-accent-purple rounded-full" />
                      <p className="text-xs font-bold text-secondary-500 uppercase tracking-[0.2em]">
                        Technical Specification
                      </p>
                    </div>
                    <p className="text-sm font-mono text-neon-blue/90 bg-gradient-to-r from-neon-blue/5 to-accent-purple/5 px-4 py-3 rounded-xl border border-neon-blue/20 leading-relaxed">
                      {step.techDetail}
                    </p>
                  </div>
                )}
                
                {/* Active Indicator Glow */}
                {isActive && (
                  <>
                    <div className="absolute -top-1 -right-1 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-blue shadow-lg shadow-neon-blue/50 animate-ping" />
                  </>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Performance Metrics */}
        <div className="bg-gradient-to-br from-white via-primary-50/50 to-white rounded-3xl p-12 md:p-16 lg:p-20 border-2 border-primary-100/80 shadow-2xl mb-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-purple/5 rounded-full blur-3xl" />
          
          <div className="text-center mb-14 relative z-10">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-neon-blue uppercase tracking-[0.3em]">Performance Metrics</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 font-display mb-4">
              Industry-Leading
              <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Performance
              </span>
            </h3>
            <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto font-light text-body-lg">
              Built for speed, security, and reliability at enterprise scale
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 relative z-10">
            {[
              { label: 'Scan Speed', value: '<1s', unit: 'milliseconds', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
              { label: 'Accuracy', value: '99.99%', unit: 'recognition rate', icon: '🎯', color: 'from-blue-400 to-blue-600' },
              { label: 'Security', value: '256-bit', unit: 'encryption', icon: '🔒', color: 'from-green-400 to-green-600' },
              { label: 'Uptime', value: '99.9%', unit: 'reliability', icon: '📈', color: 'from-purple-400 to-purple-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-black text-secondary-900 mb-3 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-secondary-900 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-secondary-500 font-medium">
                  {stat.unit}
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
