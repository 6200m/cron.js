var fs = require('fs');
const contentmain0 = ' module.exports = (grunt) ->\n';
const contentmain1 = '   require("\'matchdep\'").filterDev("\'grunt-*\'").forEach (contrib) ->\n';
const contentmain2 = '     grunt.loadNpmTasks contrib\n';
const contentmain3 = ' \n';
const contentmain4 = '   config =\n';
const contentmain5 = '     test: "\'test\'"\n';
const contentmain6 = ' \n';
const contentmain7 = '   grunt.initConfig\n';
const contentmain8 = '     config: config\n';
const contentmain9 = ' \n';
const contentsecn0 = '     jshint:\n';
const contentsecn1 = '       options:\n';
const contentsecn2 = '         jshintrc: "\'./.jshintrc\'"\n';
const contentsecn3 = '       default:\n';
const contentsecn4 = '         files:\n';
const contentsecn5 = '           src: [\n';
const contentsecn6 = '             "\'./index.js\'"\n';
const contentsecn7 = '           ]\n';
const contentsecn8 = ' \n';
const contentsecn9 = '     mochaTest:\n';
const contentothr0 = '       test:\n';
const contentothr1 = '         options:\n';
const contentothr2 = '           timeout: 5000\n';
const contentothr3 = '           ui: "\'exports\'"\n';
const contentothr4 = '           reporter: "\'spec\'"\n';
const contentothr5 = '         src: [\n';
const contentothr6 = '           "\'<%= config.test %>/test.js\'"\n';
const contentothr7 = '         ]\n';
const contentothr8 = ' \n';
const contentothr9 = '   \n';
const contentmisc0 = '   grunt.registerTask "\"default\"", [\n';
const contentmisc1 = '     "\"jshint\""\n';
const contentmisc2 = '     "\"mochaTest\""\n';
const contentmisc3 = '   ]\n';
const contentmisc4 = '   \n';
const contentmisc5 = contentmain0 + contentmain1 + contentmain2 + contentmain3 + contentmain4 + contentmain5 + contentmain6 + contentmain7 + contentmain8 + contentmain9
const contentmisc6 = contentsecn0 + contentsecn1 + contentsecn2 + contentsecn3 + contentsecn4 + contentsecn5 + contentsecn6 + contentsecn7 + contentsecn8 + contentsecn9
const contentmisc7 = contentothr0 + contentothr1 + contentothr2 + contentothr3 + contentothr4 + contentothr5 + contentothr6 + contentothr7 + contentothr8 + contentothr9
const contentmisc8 = contentmisc0 + contentmisc1 + contentmisc2 + contentmisc3 + contentmisc4 + contentmisc5
const contentmisc9 = contentmisc5 + contentmisc6 + contentmisc7 + contentmisc8 
fs.writeFile('mynewfile3.txt', contentmisc9, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
