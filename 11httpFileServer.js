const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];

//console.log(port);
//console.log(path);

const server = http.createServer(function (req, res){
    fs.createReadStream(path).pipe(res)
})
server.listen(port);