'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'cheerio.js', 'test/**/*.js']
      },

      options : {
        node: true,
        globals : {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
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
    }
  });

  grunt.registerTask('lint', ['jshint:dev']);
  grunt.registerTask('latte', ['simplemocha:dev']);
  grunt.registerTask('test_suite', ['lint', 'latte']);
};
