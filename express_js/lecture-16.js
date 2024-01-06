// Usage of express.json, raw, text, urlencoded method
// Handle different type of request data

const express = require('express');

const app = express();

// app.use(express.json()); // get the content of body sent with the request.

// app.use(express.raw()); // use express.raw() to receive raw stream data buffer from request.

app.use(express.text()); // To receive plain text

// app.use(express.urlencoded()); // Used to receive data as form-url-encoded.

// It has to be specified that we use content-type -> application/json in the header.

app.get('/', (req, res) => {
    res.send('This is home page!');
});

app.post('/', (req, res) => {
    console.log(req.body); // There is no body properties of the req in raw Node.
    // We have to listen an req.ON event listener
    // console.log(req.body.toString()); // Convert the buffer data to String.
    console.log(typeof req.body); // It is an object
    console.log(req.body.name); // As an object
    res.send('This is home page with post request!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
