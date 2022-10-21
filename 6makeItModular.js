const myModule = require('./6myModule.js');

const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, function (err, list) {
  if (err) {
    return console.error('There was an error:', err);
  } 
  list.forEach(file => {
        console.log(file);
    })
})