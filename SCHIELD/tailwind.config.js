module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1em',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    extend: {
      backgroundOpacity: ['active'],

      colors: {
                
 golden: '#FFD700',
        'red-green': 'linear-gradient(90deg, #FF4136, #2ECC40)',
        primary: '#066d36',
        secondary: '#A6EBC9',
        accent: '#fffbdb',
      },
    },
  },
  variants: {},
  plugins: [],
}
