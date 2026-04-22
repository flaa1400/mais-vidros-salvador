/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FACC15', // Yellow
        secondary: '#1E3A8A', // Dark Blue
        accent: '#000000', // Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem', // px-6
          sm: '2rem',
          lg: '3rem', // px-12
        },
      },
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
}
