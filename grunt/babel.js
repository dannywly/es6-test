'use strict';

module.exports = {
  options: {
    sourceMap: false,
    presets: ['es2015']
  },
  files: {
    expand: true,
    cwd: '<%= root%>',
    src: ['features/**/*.js'],
    dest: "<%= buildDir%>",
    extDot: 'first',
    ext: '-compiled.js'
  }
}