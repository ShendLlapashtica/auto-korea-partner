/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#FFFFFF',
        card:    '#F8F9FA',
        accent:  '#FF4500',
        // Brand accent takes over the `red` palette so every existing
        // text-red-*/bg-red-*/border-red-* utility repaints automatically.
        red: {
          50:  '#FFF3ED',
          100: '#FFE2D2',
          200: '#FFC6A6',
          300: '#FFA070',
          400: '#FF7A44',
          500: '#FF4500',
          600: '#E63E00',
          700: '#C23400',
          800: '#9C2A00',
          900: '#7A2100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
