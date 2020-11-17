const fs = require('fs')
const path0 = '.gitignore'
const path1 = 'README.md'
const path2 = 'LICENSE.md'
const path3 = '.replit'
setTimeout(function() {
    try {
      if (fs.existsSync(path0)) {
        //file exists
        fs.unlinkSync(path0)
      }
    } catch(err) {
      console.error(err)
    }
}, 3000);
setTimeout(function() {
    try {
      if (fs.existsSync(path1)) {
        //file exists
        fs.unlinkSync(path1)
      }
    } catch(err) {
      console.error(err)
    }
}, 3000);
setTimeout(function() {
    try {
      if (fs.existsSync(path2)) {
        //file exists
        fs.unlinkSync(path2)
      }
    } catch(err) {
      console.error(err)
    }
}, 3000);
setTimeout(function() {
    try {
      if (fs.existsSync(path3)) {
        //file exists
        fs.unlinkSync(path3)
      }
    } catch(err) {
      console.error(err)
    }
}, 3000);
