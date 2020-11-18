var fs=require('fs');
const data00 = "{\n"
const data01 = "    // Settings\n"
const data02 = "    " + "\"passfail\"" + "      : false,  // Stop on first error.\n"
const data03 = "    " + "\"maxerr\"" + "        : 100,    // Maximum error before stopping.\n"
const data04 = "    // Predefined globals whom JSHint will ignore.\n"
const data05 = "    " + "\"browser\"" + "       : false,   // Standard browser globals e.g. `window`, `document`.\n"
const data06 = "    " + "\"node\"" + "          : true,\n"
const data07 = "    " + "\"rhino\"" + "         : false,\n"
const data08 = "    " + "\"couch\"" + "         : false,\n"
const data09 = "    " + "\"wsh\"" + "           : true,   // Windows Scripting Host.\n"
const data10 = "    " + "\"jquery\"" + "        : false,\n"
const data11 = "    " + "\"prototypejs\"" + "   : false,\n"
const data12 = "    " + "\"mootools\"" + "      : false,\n"
const data13 = "    " + "\"dojo\"" + "          : false,\n"
const data14 = "    " + "\"predef\"" + "        : [  // Custom globals.\n"
const data15 = "    ],\n"
const data16 = "    // Development.\n"
const data17 = "    " + "\"debug\"" + "         : false,  // Allow debugger statements e.g. browser breakpoints.\n"
const data18 = "    " + "\"devel\"" + "         : true,   // Allow developments statements e.g. `console.log();`.\n"
const data19 = "    // ECMAScript\n"
const data20 = "    " + "\"esnext\"" + "        : false,   // Using ES6\n"
const data21 = "    " + "\"noyield\"" + "       : false,   // allow generators with no yields\n"
const data22 = "    " + "\"strict\"" + "        : true,  // Require `use strict` pragma  in every file.\n"
const data23 = "    " + "\"globalstrict\"" + "  : false,  // Allow global " + "\"use strict\"" + " (also enables " + "\'strict\'" + ").\n"
const data24 = "    // The Good Parts.\n"
const data25 = "    " + "\"asi\"" + "           : true,  // Tolerate Automatic Semicolon Insertion (no semicolons).\n"
const data26 = "    " + "\"laxbreak\"" + "      : true,   // Tolerate unsafe line breaks e.g. `return [\\n] x` without semicolons.\n"
const data27 = "    " + "\"bitwise\"" + "       : true,   // Prohibit bitwise operators (&, |, ^, etc.).\n"
const data28 = "    " + "\"boss\"" + "          : false,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.\n"
const data29 = "    " + "\"curly\"" + "         : true,   // Require {} for every new block or scope.\n"
const data30 = "    " + "\"eqeqeq\"" + "        : true,   // Require triple equals i.e. `===`.\n"
const data31 = "    " + "\"eqnull\"" + "        : false,  // Tolerate use of `== null`.\n"
const data32 = "    " + "\"evil\"" + "          : false,  // Tolerate use of `eval`.\n"
const data33 = "    " + "\"expr\"" + "          : false,  // Tolerate `ExpressionStatement` as Programs.\n"
const data34 = "    " + "\"forin\"" + "         : false,  // Tolerate `for in` loops without `hasOwnPrototype`.\n"
const data35 = "    " + "\"immed\"" + "         : true,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`\n"
const data36 = "    " + "\"latedef\"" + "       : true,   // Prohipit variable use before definition.\n"
const data37 = "    " + "\"loopfunc\"" + "      : false,  // Allow functions to be defined within loops.\n"
const data38 = "    " + "\"noarg\"" + "         : true,   // Prohibit use of `arguments.caller` and `arguments.callee`.\n"
const data39 = "    " + "\"regexp\"" + "        : true,   // Prohibit `.` and `[^...]` in regular expressions.\n"
const data40 = "    " + "\"regexdash\"" + "     : false,  // Tolerate unescaped last dash i.e. `[-...]`.\n"
const data41 = "    " + "\"scripturl\"" + "     : true,   // Tolerate script-targeted URLs.\n"
const data42 = "    " + "\"shadow\"" + "        : false,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.\n"
const data43 = "    " + "\"supernew\"" + "      : false,  // Tolerate `new function () { ... };` and `new Object;`.\n"
const data44 = "    " + "\"undef\"" + "         : true,   // Require all non-global variables be declared before they are used.\n"
const data45 = "    " + "\"newcap\"" + "        : true,   // Require capitalization of all constructor functions e.g. `new F()`.\n"
const data46 = "    " + "\"noempty\"" + "       : true,   // Prohibit use of empty blocks.\n"
const data47 = "    " + "\"nonew\"" + "         : true,   // Prohibit use of constructors for side-effects.\n"
const data48 = "    " + "\"nomen\"" + "         : false,   // Allow use of initial or trailing underbars in names.\n"
const data49 = "    " + "\"onevar\"" + "        : false,  // Allow only one `var` statement per function.\n"
const data50 = "    " + "\"plusplus\"" + "      : false,  // Prohibit use of `++` & `--`.\n"
const data51 = "    " + "\"sub\"" + "           : false,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.\n"
const data52 = "    " + "\"trailing\"" + "      : true,   // Prohibit trailing whitespaces.\n"
const data53 = "    " + "\"white\"" + "         : false,  // Check against strict whitespace and indentation rules.\n"
const data54 = "    " + "\"indent\"" + "        : 2       // Specify indentation spacing\n"
const data55 = "}\n"
const data56 = data00 + data01 + data02 + data03 + data04 + data05 + data06 + data07 + data08 + data09
const data57 = data10 + data11 + data12 + data13 + data14 + data15 + data16 + data17 + data18 + data19
const data58 = data20 + data21 + data22 + data23 + data24 + data25 + data26 + data27 + data28 + data29
const data59 = data30 + data31 + data32 + data33 + data34 + data35 + data36 + data37 + data38 + data39
const data60 = data40 + data41 + data42 + data43 + data44 + data45 + data46 + data47 + data48 + data49
const data61 = data50 + data51 + data52 + data53 + data54 + data55
const data62 = "."
const data63 = "jshintrc"
const data64 = data62 + data63
const data65 = data56 + data57
const data66 = data58 + data59
const data67 = data60 + data61
const data68 = data65 + data66
const data69 = data68 + data67
fs.writeFile(data64, data69, function (err) {
  if (err) throw err;
  console.log(data64 + " file... generated!");
});
