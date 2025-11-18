import { sendEmailJS, EmailJSParams } from './emailJSConfig';

// Email service configuration
export const EMAIL_CONFIG = {
  to: 'Contact.scanpe@gmail.com',
  subject: 'New Contact Form Submission - Scanpe Website',
};

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending email to:', EMAIL_CONFIG.to);
    console.log('Form data:', formData);
    
    // Prepare EmailJS parameters
    const emailParams: EmailJSParams = {
      to_email: EMAIL_CONFIG.to,
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: EMAIL_CONFIG.subject,
    };
    
    // Send email using EmailJS
    const success = await sendEmailJS(emailParams);
    
    if (success) {
      console.log('Email sent successfully to Contact.scanpe@gmail.com');
    } else {
      console.error('Failed to send email');
    }
    
    return success;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
