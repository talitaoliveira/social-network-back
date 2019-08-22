const express = require('express');
const app = express();

const port = 3000;

// Routes
const projectsRoutes = require('./src/routes/projects');
app.use('/projects', projectsRoutes());

app.get('/', function (req, res) {
    res.send('hello world')
});

// Run app
app.listen(port);
console.log('Listen on port 3000');


module.exports = app; // for testing