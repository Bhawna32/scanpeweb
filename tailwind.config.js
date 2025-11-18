/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'poppins': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        // Primary Green Palette (Existing - Enhanced)
        'neon-blue': '#B7FF6E',        // Bright lime green - primary accent
        'neon-purple': '#E9FFD6',      // Very light green - backgrounds
        'accent-blue': '#96F29B',      // Light green - secondary accent
        'accent-purple': '#4ADE80',    // Medium green - primary action
        
        // Extended Green Palette (Payment-focused)
        primary: {
          50: '#F0FDF4',   // Lightest green
          100: '#DCFCE7',  // Very light green
          200: '#E9FFD6',  // Existing neon-purple
          300: '#BBF7D0',  // Light green
          400: '#96F29B',  // Existing accent-blue
          500: '#4ADE80',  // Existing accent-purple - main primary
          600: '#22C55E',  // Medium green - hover states
          700: '#16A34A',  // Dark green - active states
          800: '#15803D',  // Darker green
          900: '#14532D',  // Darkest green
        },
        secondary: {
          50: '#F9FAFB',   // Off-white
          100: '#F3F4F6',  // Light gray
          200: '#E5E7EB',  // Light gray
          300: '#D1D5DB',  // Medium gray
          400: '#9CA3AF',  // Gray
          500: '#6B7280',  // Medium gray
          600: '#4B5563',  // Dark gray
          700: '#374151',  // Darker gray
          800: '#1F2937',  // Very dark gray
          900: '#111827',  // Almost black
        },
        // Semantic Colors for Payment Website
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'dotted-grid': "radial-gradient(circle, #000 1px, transparent 1px)",
      },
      backgroundSize: {
        'dotted': '20px 20px',
      },
    },
  },
  plugins: [],
}

