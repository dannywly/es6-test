'use strict';

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
  require('time-grunt')(grunt);

  var globalData = {
    root: 'src/',
    features: 'src/features/',
    buildDir: 'src/build/'
  }

  require('load-grunt-config')(grunt, {
    // path to task.js files, defaults to grunt dir
    configPath: require('path').join(process.cwd(), 'grunt'),

    // auto grunt.initConfig
    // init: true,

    // data passed into config.  Can use with <%= test %>
    data: globalData,

    // use different function to merge config files
    // mergeFunction: require('recursive-merge'),

    // can optionally pass options to load-grunt-tasks.
    // If you set to false, it will disable auto loading tasks.
    loadGruntTasks: {
        pattern: 'grunt-*',
        // config: require('./package.json'),
        // scope: 'devDependencies'
    },

    // can post process config object before it gets passed to grunt
    // postProcess: function(config) {},

    // allows to manipulate the config object before it gets merged with the data object
    // preMerge: function(config, data) {}
  });


  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   babel: {
  //     options: {
  //       sourceMap: false,
  //       presets: ['es2015'],
  //     },
  //     // dist: {
  //       files: {
  //         // "src/build/compiled.js": "src/features/**/let.js"
  //         expand: true,
  //         src: ['src/features/**/*.js'],
  //         ext: '-compiled.js'
  //       }
  //     // }
  //   },
  //   clean: {
  //     test: ['src/build/**']
  //     // test: ['src/features/**/*-compiled.js']
  //   } 
  // });
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // // coffee
  // grunt.loadNpmTasks('grunt-contrib-coffee');
  // // sass
  // grunt.loadNpmTasks('grunt-contrib-compass');
  // // grunt.registerTask('default', 'Log some stuff.', function() {
  // //   grunt.log.write('Logging some stuff...').ok();
  // // });
  // grunt.registerTask("default", ['clean', 'babel']);
}