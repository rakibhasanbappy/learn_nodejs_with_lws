//here, we learn about how to request data to a server using stream and buffer

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method = "post" action = "/process"><input name = "message"/></form><button type="submit" action = "/process">Submit</button></body></html>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const data = [];
        req.on('data', (chunk)=>{
            data.push(chunk);
        });

        req.on('end',()=>{
            console.log("Stream Finished!");
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
        })
        res.write('Hello Bappy!, thanks for submitting!');
        res.end();
    } else {
        res.write('Hello Bappy!, Not Found 404 :)!');
        res.end();
    }
});

server.listen(3000);

console.log('Server is Running!');