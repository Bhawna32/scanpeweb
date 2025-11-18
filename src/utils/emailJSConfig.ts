// EmailJS configuration for sending emails from frontend
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
//
// QUICK SETUP:
// 1. Create a .env file in the root directory (same folder as package.json)
// 2. Add these lines with your actual values:
//    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
//    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
//    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
// 3. Restart your development server
//
// OR directly replace the values below:
// - Service ID: From Email Services > Your Service > Service ID
// - Template ID: From Email Templates > Your Template > Template ID
// - Public Key: From Account > General > Public Key

import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_zz75esa',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_xkrw3wb',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'oy9NOvI8ymBsfXL7w',
};

// Initialize EmailJS (call this once when app loads)
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// EmailJS template parameters
// These variable names should match your EmailJS template variables (e.g., {{from_name}}, {{from_email}}, etc.)
export interface EmailJSParams {
  to_email: string;
  from_name: string;
  from_email: string;
  message: string;
  subject: string;
}

// EmailJS implementation
export const sendEmailJS = async (params: EmailJSParams): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn('EmailJS is not configured. Please set up your EmailJS credentials in emailJSConfig.ts');
      console.warn('Or set environment variables: REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY');
      return false;
    }

    // Initialize EmailJS if not already initialized
    initEmailJS();

    // Send email using EmailJS
    // The templateParams object should match your EmailJS template variable names
    const templateParams = {
      to_email: params.to_email,
      from_name: params.from_name,
      from_email: params.from_email,
      message: params.message,
      subject: params.subject,
      // You can also add reply_to for better email handling
      reply_to: params.from_email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};


