module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [// Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' })],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: { preflight: false }
};