/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neumorphic: {
          bg: '#E0E5EC',
          fg: '#3D4852',
          muted: '#6B7280',
          accent: '#6C63FF',
          accentLight: '#8B84FF',
          accentSecondary: '#38B2AC',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
