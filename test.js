const avatarGenerator = require('avatar-generator')({
  order: 'background face clothes head hair eye mouth'.split(' '),
  images: require('path').join(__dirname, './node_modules/avatar-generator/img'), // path to sprites 
  convert: 'convert'
})
console.log(avatarGenerator)
console.log('here')

avatarGenerator('asdfasdf', 'male', 50)
  .write('test.png', console.log)
