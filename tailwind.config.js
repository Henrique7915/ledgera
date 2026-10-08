/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A2A',
        night: '#14124A',
        violet: { 50: '#F4F1FF', 100: '#E8E2FF', 200: '#CFC3FF', 500: '#6D4AFF', 600: '#5B37F0', 700: '#4A28D1' },
        mint: { 300: '#7DF2C8', 400: '#2EE6A6', 500: '#14CC8E' },
        coral: '#FF6B81',
        sun: '#FFC857'
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
      boxShadow: {
        phone: '0 40px 80px -20px rgba(10,10,42,.55), 0 0 0 1px rgba(255,255,255,.08) inset',
        card: '0 20px 50px -20px rgba(74,40,209,.25)'
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }
      },
      animation: { floaty: 'floaty 6s ease-in-out infinite' }
    }
  },
  plugins: []
}
