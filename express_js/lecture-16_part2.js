// Usage of static method

const express = require('express');

const app = express();

app.use(
    express.static(`${__dirname}/public/`, {
        index: 'home.html',
    }),
);
app.get('/', (req, res) => {
    res.send('This is home page!');
});

app.post('/', (req, res) => {
    res.send('This is home page with post request!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
