// Lecture #5: Here I learned about the file system module(fs) in Node.js,

// path module

// const path = require('path');

// const myPath = 'F:/learn_nodejs_with_lws/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// os module

// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.homedir());
// console.log(os.freemem()); // this represents RAM
// console.log(os.totalmem()); // this represents RAM
// console.log(os.cpus());

// fs module

// const fs = require('fs');

// fs.writeFileSync('myFile.txt', 'hello 1234,');
// fs.appendFileSync('myFile.txt', ' learning  nodejs core module');

// console.log(fs.readFileSync('myFile.txt', 'utf-8'));

// fs.readFile('myFile.txt', (err, data) => {
//     console.log(data.toString());
// });

// console.log('The following one is for asynchronus:');

// events module

// const EventRaiser = require('./eventRaise');

// const event = new EventRaiser();

// // register a listener for the event - listener must be above event raise
// event.on('bellRing', (cause) => {
//     console.log(`Event Raised and Listened and the cause of the event is ${cause}`);
// });

// event.raiseAnEvent();

// http module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Bappy!, this is index page!');
        res.end();
    } else if (req.url === '/about') {
        res.write('Hello Bappy!, this is about us page!');
        res.end();
    } else {
        res.write('Hello Bappy!, Not Found 404 :)!');
        res.end();
    }
});

server.listen(3000);

console.log('Server is Running!');
