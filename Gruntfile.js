module.exports = function(grunt) {
  var themeRoot = 'site/wp-content/themes/catapult/';
  var homepageJSFiles = [
    themeRoot + 'js/libs/parsley.js',
    themeRoot + 'js/map.js',
    themeRoot + 'js/team.js',
    themeRoot + 'js/donations.js',
    themeRoot + 'js/home.js'
  ];
  var commonJSFiles = [
    themeRoot + 'js/libs/underscore.js',
    themeRoot + 'js/libs/jquery.royalslider.min.js',
    themeRoot + 'js/libs/waypoints.js',
    themeRoot + 'js/libs/jquery.transit.js',
    themeRoot + 'js/libs/leaflet/leaflet.js',
    themeRoot + 'js/libs/leaflet/markercluster/leaflet.markercluster-src.js',
    themeRoot + 'js/common.js'
  ];
  var blogJSFiles = [
    themeRoot + 'js/ParsePostType.js',
    themeRoot + 'js/libs/masonry.pkgd.min.js',
    themeRoot + 'js/blog.js'
  ];
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          mangle: false,
          beautify: false,
          report: 'min'
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
          beautify: true,
          report: 'min'
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
        src: themeRoot + 'js/home.min.js',
        dest: themeRoot + 'js/home.min.js',

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
    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*', '*.scss', 'node_modules', '.sass-cache'],
        recursive: true
      },
      dist: {
        options: {
          src: [],
          dest: ''
        }
      },
      dev: {
        options: {
          src: ['site/wp-content/themes/catapult/js/home.min.js'],
          dest: '/wp-content/themes/catapult/js',
          host: 'catapult-larry@catapult.staging.wpengine.com',
          syncDestIgnoreExcl: true
        }
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
  grunt.loadNpmTasks('grunt-rsync');

  // Default task(s).
  grunt.registerTask('default', ['sass:dev', 'uglify:dev']);
  grunt.registerTask('release', ['sass:dist', 'uglify:dist', 'removelogging']);

};