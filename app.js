const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello, world!' })
});

// Mapping routes
const projectRoutes = require('./src/routes/projects');
app.use('/projects', projectRoutes());

// Run app
app.listen(port);
console.log('Listen on port 3000');


module.exports = app; // for testing