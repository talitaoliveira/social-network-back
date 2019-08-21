const express = require('express');
const app = express();
require('./src/routes')(app);

const port = 3000;

app.get('/', function (req, res) {
    res.send('hello world')
});

app.listen(port);