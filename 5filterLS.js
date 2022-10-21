const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    if (err)
      console.log(err);
    else {
      const ext = "." + process.argv[3];
      //console.log(ext);
      files.forEach(file => {
        if (path.extname(file) === ext){
            console.log(file);
        }
      })
    }
  })