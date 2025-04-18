import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    /* Center every .container and give it some air */
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' },
    },

    extend: {
      /* ─── Brand & shadcn design tokens ────────────────────────── */
      colors: {
        /* brand */
        primary: 'hsl(var(--primary))',
        accent:  'hsl(var(--accent))',

        /* shadcn system */
        background:            'hsl(var(--background))',
        foreground:            'hsl(var(--foreground))',
        card:                  'hsl(var(--card))',
        'card-foreground':     'hsl(var(--card-foreground))',
        popover:               'hsl(var(--popover))',
        'popover-foreground':  'hsl(var(--popover-foreground))',
        border:                'hsl(var(--border))',
        input:                 'hsl(var(--input))',
        ring:                  'hsl(var(--ring))',
        secondary:             'hsl(var(--secondary))',
        'secondary-foreground':'hsl(var(--secondary-foreground))',
        muted:                 'hsl(var(--muted))',
        'muted-foreground':    'hsl(var(--muted-foreground))',
        destructive:           'hsl(var(--destructive))',
        'destructive-foreground':'hsl(var(--destructive-foreground))',
      },

      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    /* Optional helper variant: `child:` applies styles to direct children */
    plugin(({ addVariant }) => addVariant('child', '& > *')),
  ],
};

export default config;
