!(function () {
    'use strict';
    module.exports = function (grunt) {
       const sass = require('node-sass');       
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            sass: { 
                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: 'compressed',
                },
                dist: {
                    files: {
                        'public/css/custom.min.css': 'public/sass/main.scss'
                    }
                }, 
                admin: {
                    files: {
                        'public/css/admin.min.css': 'public/sass/admin/main.scss'      
                    }
                },               
            },            
            watch: {
                scripts: {
                    files: [
                        'public/sass/*****/*.scss','assets/sass/****/*.scss','public/sass/***/*.scss','public/sass/**/*.scss','public/sass/*/*.scss','public/sass/*.scss',
                        'public/sass/admin/*/*.scss',
                        ['Gruntfile.js']],
                        tasks: ['sass']

                }
            }
        });
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-sass');      
        grunt.loadNpmTasks('grunt-contrib-watch');
        // Default task(s).
        grunt.registerTask('default', ['sass','watch']);
    };
})();