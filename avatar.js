'use strict'

var avatar = require('avatar-generator')({
  // Optional settings. Default settings in 'settings.js'
  order: 'background face clothes head hair eye mouth'.split(' '), // order in which sprites should be combined
  images: require('path').join(__dirname, './img'), // path to sprites
  convert: 'convert' // Path to imagemagick convert
})

// avatar('User ID', 'female', 400)
//   .write('img/', function (err) { console.log(err) })

// const imageSlug = 'data:image/png;base64,' + buffer.toString('base64')
