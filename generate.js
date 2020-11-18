const fs=require('fs');const data0="node_modules/\n"
const data1="test/\n"
const data2=".travis.yml\n"
const data3=".jshintrc\n"
const data4="Gruntfile.coffee"
const data5=data0+data1
const data6=data2+data3
const data7=data5+data6
const data8=data7+data4
const data9='.npmignore';fs.writeFile(data9,data8,function (err){if (err) throw err;console.log('npmignore file... generated!');});
