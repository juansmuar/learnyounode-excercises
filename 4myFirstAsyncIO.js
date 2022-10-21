const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    validateData(data);
});

function validateData(data) {
    let count = (data.match(/\n/g) || []).length;
    console.log(count);
}