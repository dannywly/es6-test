'use strict'

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      // dist: {
        files: {
          // "src/build/compiled.js": "src/features/**/let.js"
          expand: true,
          src: ['src/features/**/*.js'],
          ext: '-compiled.js'
        }
      // }
    },
    clean: {
      test: ['src/build/**']
      // test: ['src/features/**/*-compiled.js']
    } 
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  // coffee
  grunt.loadNpmTasks('grunt-contrib-coffee');
  // sass
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.registerTask('default', 'Log some stuff.', function() {
  //   grunt.log.write('Logging some stuff...').ok();
  // });
  grunt.registerTask("default", ['clean', 'babel']);
}