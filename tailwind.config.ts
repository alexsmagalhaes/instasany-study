import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531',
        'green-activity': '#5D8A83',
        'green-border': '#2A4B46',
        'green-action': '#CCEC60',
      },
      maxWidth: {
        'container-default': '77.5rem',
        'home-hero-heading': '66rem',
        'home-hero-icons-area': '53.4375rem',
        'home-hero-mockups-area': '59.75rem',
      },
      height: {
        'home-hero': '54.625rem',
      },
      backgroundImage: {
        'home-hero': 'url("/bg-hero.svg")',
      },
    },
  },
  plugins: [],
}
export default config
