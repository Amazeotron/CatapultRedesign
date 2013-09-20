module.exports = function(grunt) {
  var homepageJSFiles = [
    'site/wp-content/themes/catapult/js/libs/parsley.js',
    'site/wp-content/themes/catapult/js/libs/leaflet/leaflet.js',
    'site/wp-content/themes/catapult/js/libs/leaflet/markercluster/leaflet.markercluster-src.js',
    'site/wp-content/themes/catapult/js/map.js',
    'site/wp-content/themes/catapult/js/team.js',
    'site/wp-content/themes/catapult/js/donations.js',
    'site/wp-content/themes/catapult/js/home.js'
  ];
  var commonJSFiles = [
    'site/wp-content/themes/catapult/js/libs/underscore.js',
    'site/wp-content/themes/catapult/js/libs/swipe.js',
    'site/wp-content/themes/catapult/js/libs/jquery.slides.js',
    'site/wp-content/themes/catapult/js/libs/waypoints.js',
    'site/wp-content/themes/catapult/js/libs/jquery.transit.js',
    'site/wp-content/themes/catapult/js/common.js'
  ];
  var blogJSFiles = [
    'site/wp-content/themes/catapult/js/ParsePostType.js',
    'site/wp-content/themes/catapult/js/libs/masonry.pkgd.min.js',
    'site/wp-content/themes/catapult/js/blog.js'
  ];
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: true,
          beautify: false
        },
        files: {
          'site/wp-content/themes/catapult/js/home.min.js': homepageJSFiles,
          'site/wp-content/themes/catapult/js/common.min.js': commonJSFiles,
          'site/wp-content/themes/catapult/js/blog.min.js': blogJSFiles
        }
      },
      dev: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: false,
          beautify: true
        },
        files: {
          'site/wp-content/themes/catapult/js/home.min.js': homepageJSFiles,
          'site/wp-content/themes/catapult/js/common.min.js': commonJSFiles,
          'site/wp-content/themes/catapult/js/blog.min.js': blogJSFiles
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
    removelogging: {
      dist: {
        src: 'site/wp-content/themes/catapult/js/home.min.js',
        dest: 'site/wp-content/themes/catapult/js/home.min.js',

        options: {
          
        }
      }
    },
    ftp_push: {
      options: {
        authKey: 'cata',
        host: 'ftp.catapultdesign.org',
        dest: '/home/catap1/public_html/dev/wp-content/themes/catapult',
        port: 21
      },
      files: {
        
      }
    },
    watch: {
      files: homepageJSFiles,
      tasks: 'default'
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-remove-logging');

  // Default task(s).
  grunt.registerTask('default', ['sass:dev', 'uglify:dev']);
  grunt.registerTask('release', ['sass:dist', 'uglify:dist', 'removelogging']);

};