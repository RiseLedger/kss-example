module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                  outputStyle: 'compressed'
                },
                files: {
                    'assets/dist/main.css': 'assets/src/main.scss'
                }
            }
        },

        copy: {
            dist: {
                files: {
                    'styleguide/css/main.css': 'assets/dist/main.css'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-copy');

    grunt.registerTask('kss', ['copy']);
    grunt.registerTask('default', ['sass', 'kss']);
};
