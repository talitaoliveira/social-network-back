const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello, world!' })
});

// Mapping routes
const projectRoutes = require('./src/components/projects/project.routes');
const userRoutes = require('./src/routes/users');
app.use('/projects', projectRoutes());
app.use('/users', userRoutes());

// Run app
app.listen(port);
console.log('Listen on port 3000');


module.exports = app; // for testing