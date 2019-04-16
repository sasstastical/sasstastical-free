var sass = require('rollup-plugin-sass')

module.exports = {
  input: './src/sasstastical-free.sass',
  output: [
    {
      file: 'dist/css/sasstastical-free.css'
    }
  ],
  plugins: [
    sass()
  ]
}
