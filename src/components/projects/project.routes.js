const express = require('express');
const router = express.Router();
const projectController = require('./project.controller')

const projectsRoutes = () => {
    router.get('/', (req, res, next) => {
        projectController.listProjects(req, res);
    });

    return router;
}

module.exports = projectsRoutes;
