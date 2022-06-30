/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './en/*.html',
    './vn/*.html',
    './*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        purple: '#8000de',
        cyan: '#00bdde',
        gray88: '#e0e0e0',
        yellow: '#fed715',
        pink: '#ff0768',
        blue: '#006aad',
        gray: '#777'
      },
      boxShadow: {
        '4px': '0 4px 0 #000',
        '2px': '0 2px 0 #000'
      },
      spacing: {
        4.25: '17rem',
        35: '35rem',
        78: '19.6875rem'
      },
      width: {
        '1/10': '10%'
      }
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      size30: '30%',
      size95: '95%'
    },
    backgroundPosition: {
      'left-bottom': 'left bottom',
      'right-top': 'right top',
      right: 'right'
    }
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')]
}
