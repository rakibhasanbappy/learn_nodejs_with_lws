//here, we learned to use pipe to write stream data in server

const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + '/data.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('Server is Running!');
