const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
    fs.readdir(dir, (err, files) => {
        if (err)
          return callback(err);
        let list = [];
        files.forEach(file => {
            if (path.extname(file) === "." + ext){
                list.push(file); 
            }
            return list
        })
        callback(null, list)
    })
}

