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
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};
