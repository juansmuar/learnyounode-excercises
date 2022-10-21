const fs = require('fs');

const info = fs.readFileSync(process.argv[2],'utf-8');

let count = (info.match(/\n/g) || []).length;
console.log(count);


