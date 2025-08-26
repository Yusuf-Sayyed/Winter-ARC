/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'brand-blue': '#1a73e8',
        'brand-gray': {
          100: '#f1f3f4',
          900: '#202124',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        vibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [
  ],
}