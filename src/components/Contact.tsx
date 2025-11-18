import React, { useState } from 'react';
import { sendContactEmail } from '../utils/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const highlightItems = [
    'Free setup and onboarding',
    'Dedicated support team',
    'Seamless merchant integration',
  ];

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-secondary-900 font-display mb-6">
            Ready to Step Into the
            <span className="block text-primary-600">Future of Payments?</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-body-lg">
            Experience the next generation of secure, palm-based checkout tailored to your business.
          </p>
          <div className="text-center mt-6">
            <p className="text-lg text-secondary-700 font-medium">
              Email us at:{' '}
              <a
                href="mailto:Contact.scanpe@gmail.com"
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-semibold"
              >
                Contact.scanpe@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold text-secondary-900 mb-8 font-display">Why teams choose ScanPe</h3>
            <p className="text-secondary-600 mb-8 leading-relaxed text-body-lg">
              Seamless integration for businesses of all sizes. Reduce transaction friction, lower processing costs, and provide your customers with the most convenient payment experience available.
            </p>

            <ul className="space-y-4">
              {highlightItems.map((item) => (
                <li key={item} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold shadow-sm">
                    ✓
                  </div>
                  <span className="text-secondary-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 bg-white text-secondary-900 placeholder-secondary-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 bg-white text-secondary-900 placeholder-secondary-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 resize-none bg-white text-secondary-900 placeholder-secondary-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request a Demo'}
              </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-success-50 border border-success-500 text-success-700 rounded-lg">
                      ✅ Thank you! Your message has been successfully sent to ScanPe.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-error-50 border border-error-500 text-error-700 rounded-lg">
                      ❌ Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

