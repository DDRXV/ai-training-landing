
/* ⚙️ tailwind.config.ts */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4F91',
        accent: '#D4AF37',
      },
    },
  },
  plugins: [],
};
export default config;