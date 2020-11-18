const fs=require('fs');
const data01 = "{\n    // Settings\n    " + "\"passfail\"" + "      : false,  // Stop on first error.\n"
const data02 = "    " + "\"maxerr\"" + "        : 100,    // Maximum error before stopping.\n"
const data03 = "    " + "\"browser\"" + "       : false,  // Standard browser globals e.g. `window`, `document`.\n"
const data04 = "    " + "\"node\"" + "          : true,\n"
const data05 = "    " + "\"rhino\"" + "         : false,\n"
const data06 = "    " + "\"couch\"" + "         : false,\n"
const data07 = "    " + "\"wsh\"" + "           : true,   // Windows Scripting Host.\n"
const data08 = "    " + "\"jquery\"" + "        : false,\n"
const data09 = "    " + "\"prototypejs\"" + "   : false,\n"
const data10 = "    " + "\"mootools\"" + "      : false,\n"
const data11 = "    " + "\"dojo\"" + "          : false,\n"
const data12 = "    " + "\"predef\"" + "        : [  // Custom globals.\n    ],\n"
const data13 = "    " + "\"debug\"" + "         : false,  // Allow debugger statements e.g. browser breakpoints.\n"
const data14 = "    " + "\"devel\"" + "         : true,   // Allow developments statements e.g. `console.log();`.\n"
const data15 = "    " + "\"esnext\"" + "        : false,  // Using ES6\n"
const data16 = "    " + "\"noyield\"" + "       : false,  // allow generators with no yields\n"
const data17 = "    " + "\"strict\"" + "        : true,   // Require `use strict` pragma  in every file.\n"
const data18 = "    " + "\"globalstrict\"" + "  : false,  // Allow global " + "\"use strict\"" + " (also enables " + "\'strict\'" + ").\n"
const data19 = "    " + "\"asi\"" + "           : true,   // Tolerate Automatic Semicolon Insertion (no semicolons).\n"
const data20 = "    " + "\"laxbreak\"" + "      : true,   // Tolerate unsafe line breaks e.g. `return [\\n] x` without semicolons.\n"
const data21 = "    " + "\"bitwise\"" + "       : true,   // Prohibit bitwise operators (&, |, ^, etc.).\n"
const data22 = "    " + "\"boss\"" + "          : false,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.\n"
const data23 = "    " + "\"curly\"" + "         : true,   // Require {} for every new block or scope.\n"
const data24 = "    " + "\"eqeqeq\"" + "        : true,   // Require triple equals i.e. `===`.\n"
const data25 = "    " + "\"eqnull\"" + "        : false,  // Tolerate use of `== null`.\n"
const data26 = "    " + "\"evil\"" + "          : false,  // Tolerate use of `eval`.\n"
const data27 = "    " + "\"expr\"" + "          : false,  // Tolerate `ExpressionStatement` as Programs.\n"
const data28 = "    " + "\"forin\"" + "         : false,  // Tolerate `for in` loops without `hasOwnPrototype`.\n"
const data29 = "    " + "\"immed\"" + "         : true,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`\n"
const data30 = "    " + "\"latedef\"" + "       : true,   // Prohipit variable use before definition.\n"
const data31 = "    " + "\"loopfunc\"" + "      : false,  // Allow functions to be defined within loops.\n"
const data32 = "    " + "\"noarg\"" + "         : true,   // Prohibit use of `arguments.caller` and `arguments.callee`.\n"
const data33 = "    " + "\"regexp\"" + "        : true,   // Prohibit `.` and `[^...]` in regular expressions.\n"
const data34 = "    " + "\"regexdash\"" + "     : false,  // Tolerate unescaped last dash i.e. `[-...]`.\n"
const data35 = "    " + "\"scripturl\"" + "     : true,   // Tolerate script-targeted URLs.\n"
const data36 = "    " + "\"shadow\"" + "        : false,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.\n"
const data37 = "    " + "\"supernew\"" + "      : false,  // Tolerate `new function () { ... };` and `new Object;`.\n"
const data38 = "    " + "\"undef\"" + "         : true,   // Require all non-global variables be declared before they are used.\n"
const data39 = "    " + "\"newcap\"" + "        : true,   // Require capitalization of all constructor functions e.g. `new F()`.\n"
const data40 = "    " + "\"noempty\"" + "       : true,   // Prohibit use of empty blocks.\n"
const data41 = "    " + "\"nonew\"" + "         : true,   // Prohibit use of constructors for side-effects.\n"
const data42 = "    " + "\"nomen\"" + "         : false,  // Allow use of initial or trailing underbars in names.\n"
const data43 = "    " + "\"onevar\"" + "        : false,  // Allow only one `var` statement per function.\n"
const data44 = "    " + "\"plusplus\"" + "      : false,  // Prohibit use of `++` & `--`.\n"
const data45 = "    " + "\"sub\"" + "           : false,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.\n"
const data46 = "    " + "\"trailing\"" + "      : true,   // Prohibit trailing whitespaces.\n"
const data47 = "    " + "\"white\"" + "         : false,  // Check against strict whitespace and indentation rules.\n"
const data48 = "    " + "\"indent\"" + "        : 2       // Specify indentation spacing\n}\n"
const data49 = data01 + data02 + data03 + data04 + data05 + data06 + data07 + data08 + data09
const data50 = data10 + data11 + data12 + data13 + data14 + data15 + data16 + data17 + data18 + data19
const data51 = data20 + data21 + data22 + data23 + data24 + data25 + data26 + data27 + data28 + data29
const data52 = data30 + data31 + data32 + data33 + data34 + data35 + data36 + data37 + data38 + data39
const data53 = data40 + data41 + data42 + data43 + data44 + data45 + data46 + data47 + data48
const data54 = data49 + data50 
const data55 = data51 + data52 
const data56 = data53 + data54
const data57 = data54 + data55
const data58 = data57 + data56
const data59 = ".jshintrc"
fs.writeFile(data59, data58, function (err) {
  if (err) throw err;
  console.log(data59 + " file... generated!");
});
