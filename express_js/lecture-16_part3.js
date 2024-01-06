// Usage of router method

const express = require('express');

const app = express();

// Router Method
const router = express.Router({
    caseSensitive: true,
}); // bydefault router is case-insensitive

app.use(router);

router.get('/about', (req, res) => {
    res.send('This is home page!');
});

router.post('/', (req, res) => {
    res.send('This is home page with post request!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
