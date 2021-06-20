/* eslint-disable */
const Jimp = require('jimp');

Jimp.read('public/img/avatar-mini.png').then((lenna) => {
  lenna.resize(512, 512).quality(100).greyscale().write('public/img/avatar-mini-512x512.png');
});
