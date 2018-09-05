module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-jslint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jslint: { // configure the task
          // lint your project's server code
          server: {
            src: [ // some example files
              'app/js/*.js'
            ],
            exclude: [
              'app/js/config.js'
            ],
            directives: { // example directives
              node: false,
              todo: true,
              white: true,
              for: true
            },
            options: {
              edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
              errorsOnly: true, // only display errors
              failOnError: false // defaults to true
            }
          },
          // lint your project's client code
          client: {
            src: [
             
            ],
            directives: {
              predef: [
                '$',
                'document',
                'this',
                'Backbone',
              ]
            },
            options: {
              
            }
          }
        }
      });
     
      grunt.registerTask('default', 'jslint');
}