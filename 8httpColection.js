const http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    let data = "";
    response.on('data', function (chunk) {
        data += chunk;
    });
    response.on("end", function () {
        console.log(data.length);
        console.log(data);
    });
});