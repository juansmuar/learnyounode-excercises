const net = require('net')
const port = process.argv[2];

function fill(number) {
    if (number < 10)
        return '0' + number
    else
        return number
}

function date () {
    const date = new Date();
    const year = date.getFullYear();
    const month = fill(date.getMonth() + 1);
    const day = fill(date.getDate());
    const hour = fill(date.getHours());
    const minutes = fill(date.getMinutes());
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
}

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {   
        console.log(data.toString())
    })
    socket.write(date() + '\n');
    socket.end();
})
server.listen(port)