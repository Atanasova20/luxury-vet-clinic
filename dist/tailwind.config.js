/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./store.html",
    "./service.html",
    "./about us.html",
    "./news.html",
    "./contacts.html",
    "./profile.html",
    "./registration.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Добавям нови анимации и ключови кадри тук
      animation: {
        'fade-in': 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],

  theme: {
    extend: {
      animation: {
        'slide-up': 'slideUp 1.5s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
