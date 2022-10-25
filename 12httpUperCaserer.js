const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer(function (req, res){
    if (req.method === 'POST'){
        req.pipe(map(function (chunk){
            let body = chunk.toString().toUpperCase();
            return body
        })).pipe(res)
    }
})
server.listen(port);