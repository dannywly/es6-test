'use strict';

module.exports = {
  options: {
    sourceMap: false,
    presets: ['es2015']
  },
  files: {
    // "src/build/compiled.js": "src/features/**/let.js"
    expand: true,
    cwd: 'src/',
    src: ['features/**/*.js'],
    dest: "<%= buildDir%>",
    extDot: 'first',
    ext: '-compiled.js'
  }
}