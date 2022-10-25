const http = require('http');

for (let i = 0; i < 3; i++){
    http.get(process.argv[2 + i], function (response) {
        response.setEncoding('utf8');
        let data = "";
        response.on('data', function (chunk) {
            data += chunk;
        });
        response.on("end", function () {
            console.log(data);
        });
    });
};