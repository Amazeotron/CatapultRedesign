module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//    uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          lineNumbers: false
        },
        files: {
          'site/wp-content/themes/catapult/css/main.css': 'site/wp-content/themes/catapult/sass/main.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'site/wp-content/themes/catapult/css/main.css': 'site/wp-content/themes/catapult/sass/main.scss'
        }
      }
    },
//    ftp_push: {
//      options: {
//        authKey: 'cata',
//        host: 'ftp.catapultdesign.org',
//        dest: '/home/catap1/public_html/dev/wp-content/themes/catapult',
//        port: 21
//      },
//      files: {
//        
//      }
//    },
    watch: {
      files: ['<%= sass.dev.files %>'],
      tasks: 'default'
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass:dev']);
  grunt.registerTask('release', ['sass:dist'])

};