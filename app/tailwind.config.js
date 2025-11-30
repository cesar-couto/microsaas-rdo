/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563EB',
          orange: '#F97316',
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          info: '#3B82F6',
          error: '#EF4444',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        },
        border: '#E2E8F0',
        disabled: '#CBD5E1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
