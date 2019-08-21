const express = require('express');
const ProjectController = express.Router();

ProjectController.get('/', (req, res) => {
    res.send('hello world')
    next();
});

module.exports = () => {
    ProjectController
}