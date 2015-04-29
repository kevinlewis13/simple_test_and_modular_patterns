'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'cheerio.js', 'test/**/*.js']
      },

      options: {
        jshintrc: true
      }
    },

    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      },

      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        //grep: '*-test', <- causes an error
        ui: 'bdd',
        reporter: 'tap'
      }
    },

    watch: {
      files: ['<%= jshint.dev.src %>', '.jshintrc'],
      tasks: ['test_suite']
    }
  });

  grunt.registerTask('lint', ['jshint:dev']);
  grunt.registerTask('latte', ['simplemocha:dev']);
  grunt.registerTask('test_suite', ['lint', 'latte']);
};
