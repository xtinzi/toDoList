'use strict';

var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({

        env: {
            chrome: {
                PLATFORM: 'CHROME'
            },
            firefox: {
                PLATFORM: 'FIREFOX'
            },
            android: {
                PLATFORM: 'ANDROID'
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
            options: {
                node: true,
                strict: "global",
                esversion: 6
            }
        },

        cucumber_coverage: {
            toDo: {
                src: 'features/support/',                            // folder to the tests to execute
                options: {
                    coverage: 'testLogs/coverage',                      // set where coverage reports will be stored in relation to gruntfile
                    /*check: {                                        // check coverage meets minimum requirements of project
                     // lines: 50,
                     //statements: 50,
                     //functions: 50,
                     //branches: 50,                              // all coverage levels are percentages to use during checks
                     force: true                                 // when using tags checking is not performed, set force to still check coverage levels
                     },*/
                    format: 'pretty',                               // showing output of feature execution (default: pretty)
                    print: 'detail',                                // display results of coverage to console (default: summary)
                    report: 'html',                                 // generate a coverage report (default: lcov)
                    steps: 'features/step_definitions/',     // location of step definitions to support feature tests
                    tags: '~@Ignore',                               // Any tags you might want to limit / exclude from running
                    target: './'                           // target source code to perform coverage of
                }
            }
        },

        exec: {
            run_cucumber_tests: {
                command: path.join('node_modules', 'cucumber',  'bin', 'cucumber.js')
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-cucumber-coverage');

    grunt.registerTask('default', ['jshint', 'exec', 'test']);
    grunt.registerTask('chrome', ['env:chrome', 'jshint', 'exec']);
    grunt.registerTask('firefox', ['env:firefox', 'jshint', 'exec']);
    grunt.registerTask('android', ['env:android', 'jshint', 'exec']);
    grunt.registerTask('test', ['cucumber_coverage']);


};
