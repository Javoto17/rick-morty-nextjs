module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#c2e8c9',
      secondary: '#0aa3c0'
    })
  },
  variants: {},
  plugins: []
}
