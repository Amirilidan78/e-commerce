module.exports = {
  // activate dark mode by adding dark class to body
  darkMode: 'class',

  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        white: '#fff' ,
        black: '#000' ,
        red: '#c70d1d' ,
        blue: '#3499FC' ,
        dark : '#0A071B',
      },
    }
  },

  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },

  plugins: [
    require('tailwindcss-dark-mode')()
  ],

  // for production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ]
  },
}
