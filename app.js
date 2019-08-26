const express = require('express');
const app = express();

const port = 3000;


// Run app
app.listen(port);
console.log('Listen on port 3000');


module.exports = app; // for testing