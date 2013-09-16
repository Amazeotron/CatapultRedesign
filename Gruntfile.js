module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        beautify: false
      },
      homepage: {
        files: {
          'site/wp-content/themes/catapult/js/home.min.js': [
            'site/wp-content/themes/catapult/js/libs/easeljs-0.5.0.min.js',
            'site/wp-content/themes/catapult/js/libs/tweenjs-0.3.0.min.js',
            'site/wp-content/themes/catapult/js/libs/preloadjs-0.2.0.min.js',
            'site/wp-content/themes/catapult/js/libs/movieclip-0.5.0.min.js',
            'site/wp-content/themes/catapult/js/libs/swipe.js',
            'site/wp-content/themes/catapult/js/libs/underscore.js', 
            'site/wp-content/themes/catapult/js/libs/jquery.slides.js',  
            'site/wp-content/themes/catapult/js/libs/parsley.js',
            'site/wp-content/themes/catapult/js/libs/leaflet/leaflet.js',
            'site/wp-content/themes/catapult/js/libs/leaflet/markercluster/leaflet.markercluster-src.js',
            'site/wp-content/themes/catapult/js/keyofferings.js',
            'site/wp-content/themes/catapult/js/map.js',
            'site/wp-content/themes/catapult/js/team.js',
            'site/wp-content/themes/catapult/js/partners.js',
            'site/wp-content/themes/catapult/js/events.js',
            'site/wp-content/themes/catapult/js/donations.js',
            'site/wp-content/themes/catapult/js/faq.js',
            'site/wp-content/themes/catapult/js/home.js'
          ]
        }
      }
    },
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