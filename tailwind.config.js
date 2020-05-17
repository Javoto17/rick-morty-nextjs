module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/pages/**/*.js',
    './src/layouts/**/*.js'
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#c2e8c9',
      secondary: '#0aa3c0'
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#c2e8c9',
      secondary: '#0aa3c0'
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
