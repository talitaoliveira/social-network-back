const express = require('express');
const projectController = require('./project.controller')

const projectsRoutes = (app) => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        projectController.listProjects(req, res);
    });

    return router;
}

module.exports = projectsRoutes;
