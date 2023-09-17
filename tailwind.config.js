/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        //Primary
        marine_blue: "#02295a",
        purplish_blue: "#473dff",
        pastel_blue: "#adbeff",
        light_blue: "#bfe2fd",
        hover_blue: "#174a8c",
        strawberr_red: "#ed3548",
        //Neutral
        cool_gray: "#9699ab",
        light_gray: "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",

      }
    },
  },
  plugins: [],
}
