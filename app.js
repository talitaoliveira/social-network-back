const express = require('express');
const app = express();

const port = 3000;
const apiName = '/api';

app.get('/', (req, res) => {
    res.send({ message: 'Hello, world!' })
});

// Mapping routes
const projectRoutes = require('./src/components/projects/project.routes');
const userRoutes = require('./src/components/users/user.routes');
app.use(`${apiName}/projects`, projectRoutes());
app.use(`${apiName}/users`, userRoutes());

// Run app
app.listen(port);
console.log('Listen on port 3000');


module.exports = app; // for testing