module.exports=function(grunt){
    grunt.registerTask('venky14',function(){
        console.log("grunt running!.....");
    })
    var defaultmain=function(){
        console.log("i am the default shit guy");
    }
    var d = new Date();
    grunt.initConfig({
        concat: {
          options: {
            separator: '\n',
            sourceMap:true,
            banner:"/*last updated: "+d+"*/",
          },
          css: {
            src: ['../css/**/*.css'],
            dest: 'dist/style.css',
          },
          js:{
            src:['../js/**/*.js'],
            dest:'../../htdocs/js/grunt.js',
          }
        },
        watch: {
            css: {
              files: ['../css/**/*.css','../js/**/*.js'],
              tasks: ['concat','cssmin'],
              options: {
                spawn: false,
              },
            },
          },
          cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                '../../htdocs/css/build.min.css': ['./dist/style.css']
              }
            }
          },
          uglify: {
            my_target: {
              options: {
                sourceMap: true,
                sourceMapName: '../../htdocs/js/sourcemap.map'
              },
              files: {
                '../../htdocs/js/app.min.js': ['../js/**/*.js']
              }
            }
          },
          copy: {
            min: {
              expand: true,
              src: ['../js/hello.js','./package.json'],
              dest: '../../htdocs/js',
            },
          },
      });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['copy','concat','cssmin','uglify','watch']);
}