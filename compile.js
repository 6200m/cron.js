const fs = require('fs');
const data00 = 'module.exports = (grunt) ->\n';
const data01 = '  require(\'matchdep\').filterDev(\'grunt-*\').forEach (contrib) ->\n';
const data02 = '    grunt.loadNpmTasks contrib\n\n';
const data03 = '  config  = \n';
const data04 = '    test: \'test\'\n\n';
const data05 = '  grunt.initConfig\n';
const data06 = '    config: config\n\n';
const data07 = '    jshint:\n';
const data08 = '      options:\n';
const data09 = '        jshintrc: \'./.jshintrc\'\n';
const data10 = '      default:\n';
const data11 = '        files:\n';
const data12 = '          src: [\n';
const data13 = '            \'./index.js\'\n';
const data14 = '          ]\n\n';
const data15 = '    mochaTest:\n';
const data16 = '      test:\n';
const data17 = '        options:\n';
const data18 = '          timeout: 5000\n';
const data19 = '          ui: \'exports\'\n';
const data20 = '          reporter: \'spec\'\n';
const data21 = '        src: [\n';
const data22 = '          \'<% =  config.test %>/test.js\'\n';
const data23 = '        ]\n\n  \n';
const data24 = '  grunt.registerTask \"default\", [\n';
const data25 = '    \"jshint\"\n';
const data26 = '    \"mochaTest\"\n  ]\n  \n';
const data27 = data00 + data01 + data02 + data03 + data04 + data05 + data06 + data07 + data08 + data09
const data28 = data10 + data11 + data12 + data13 + data14 + data15 + data16 + data17 + data18 + data19
const data29 = data27 + data28 + data20 + data21 + data22 + data23 + data24 + data25 + data26
fs.writeFie('Gruntfile.coffee', data29, function (err) {
  if (err) throw err;
  console.log('Compiled!');
});
