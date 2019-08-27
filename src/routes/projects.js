const express = require('express');
const projectController = require('../components/projects/project.controller')

const projectsRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        projectController.listProjects(req, res);
    });

    return router;
}

module.exports = projectsRoutes;
