# EmailJS Setup Guide

## Step 1: Get Your EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account

## Step 2: Create an Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use this template structure:

**Subject:** `{{subject}}`

**Content:**
```
New Demo Request from ScanPe Website

From: {{from_name}}
Email: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
This email was sent from the ScanPe contact form.
```

4. **Important:** Make sure to use these exact variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{subject}}`
   - `{{reply_to}}`

5. In the template settings, set **To Email** to: `Contact.scanpe@gmail.com`
6. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in the left sidebar
2. Find **Public Key** in the API Keys section
3. **Copy your Public Key** (you'll need this)

## Step 5: Add Credentials to Your Project

You have two options:

### Option A: Environment Variables (Recommended)

1. Create a `.env` file in the root of your project (same folder as `package.json`)
2. Add these lines:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the values with your actual credentials
4. **Important:** Restart your development server after adding the `.env` file

### Option B: Direct Configuration

1. Open `src/utils/emailJSConfig.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your Service ID
   - `YOUR_TEMPLATE_ID` → Your Template ID
   - `YOUR_PUBLIC_KEY` → Your Public Key

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Go to the Contact section on your website
3. Fill out the form and submit
4. Check your email inbox (Contact.scanpe@gmail.com) for the message

## Troubleshooting

- **Email not sending?** Check the browser console for error messages
- **Template variables not working?** Make sure variable names in your EmailJS template match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{subject}}`
- **Service ID not found?** Make sure you copied the Service ID (not Service Name)
- **Template ID not found?** Make sure you copied the Template ID (not Template Name)

## Security Note

Never commit your `.env` file to version control. It's already in `.gitignore` for your protection.


