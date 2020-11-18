const fs=require('fs');
const data00 = " {\n    " + "\"name\": " + "\"git-pull-cron-mod\",\n"
const data01 = "    " + "\"version\": " + "\"1.0.0\",\n"
const data02 = "    " + "\"description\": " + "\"Modified version of the tool that will git clone a repo into a folder and schedule a cron job to pull updates\",\n"
const data03 = "    " + "\"main\": " + "\"index.js\",\n"
const data04 = "    " + "\"scripts\"" + ": {\n"
const data05 = "      " + "\"test\": " + "\"grunt\",\n    },\n"
const data06 = "    " + "\"repository\"" + ": {\n"
const data07 = "      " + "\"type\": " + "\"git\",\n"
const data08 = "      " + "\"url\": " + "\"https://github.com/WiiLink24-Extensions/cron.js.git\"" + "\n    },\n"
const data09 = "    " + "\"keywords\"" + ": [\n"
const data10 = "      " + "\"git\",\n"
const data11 = "      " + "\"cron\"" + "\n    ],\n"
const data12 = "   " + "\"author\": " + "\"Ramesh Nair <ram@hiddentao.com> & Mod by 6100m\",\n"
const data13 = "   " + "\"license\": " + "\"MIT\",\n"
const data14 = "   " + "\"bugs\"" + ": {\n"
const data15 = "     " + "\"url\": " + "\"https://github.com/WiiLink24-Extensions/cron.js/issues\"" + "\n   },\n"
const data16 = "   " + "\"homepage\": " + "\"https://github.com/WiiLink24-Extensions/cron.js\"" + ",\n"
const data17 = "   " + "\"dependencies\"" + ": {\n"
const data18 = "     " + "\"debug\": " + "\"~4.1.1\",\n"
const data19 = "     " + "\"rimraf\": " + "\"~2.2.8\",\n"
const data20 = "     " + "\"cron\": " + "\"~1.0.4\",\n"
const data21 = "     " + "\"gift\": " + "\"~0.4.1\",\n"
const data22 = "     " + "\"bluebird\": " + "\"~1.2.4\"" + "\n   },\n"
const data23 = "   " + "\"devDependencies\"" + ": {\n"
const data24 = "     " + "\"grunt\": " + "\"~0.4.5\",\n"
const data25 = "     " + "\"grunt-mocha-test\": " + "\"~0.11.0\",\n"
const data26 = "     " + "\"grunt-contrib-jshint\": " + "\"~0.10.0\",\n"
const data27 = "     " + "\"atchdep\": " + "\"~0.3.0\",\n"
const data28 = "     " + "\"chai\": " + "\"~1.9.1\",\n"
const data29 = "     " + "\"sinon\": " + "\"~1.10.2\",\n"
const data30 = "     " + "\"then-fs\": " + "\"~1.0.6\",\n"
const data31 = "     " + "\"chai-as-promised\": " + "\"~4.1.1\"" + "\n   }\n }\n"
const data32 = data00 + data01 + data02 + data03 + data04 + data05 + data06 + data07 + data08 + data09
const data33 = data10 + data11 + data12 + data13 + data14 + data15 + data16 + data17 + data18 + data19
const data34 = data20 + data21 + data22 + data23 + data24 + data25 + data26 + data27 + data28 + data29
const data35 = data30 + data31 + data32 + data33 + data34 + data35 + data36 + data37 + data38 + data39
const data36 = data32 + data33
const data37 = data34 + data35
const data38 = data36 + data37
const data39 = "package.json file... generated!"
fs.writeFile(data39, data38, function (err) {
  if (err) throw err;
  console.log(data39);
});
