const fs = require('fs')
const path0 = '.gitignore'
const path1 = 'README.md'
const path2 = 'LICENSE.md'
const path3 = '.replit'
try {
  fs.unlinkSync(path0)
  //file removed
} catch(err) {
  console.error(err)
}
try {
  fs.unlinkSync(path1)
  //file removed
} catch(err) {
  console.error(err)
}
try {
  fs.unlinkSync(path2)
  //file removed
} catch(err) {
  console.error(err)
}
try {
  if (fs.existsSync(path3)) {
    //file exists
  }
} catch(err) {
  console.error(err)
}
