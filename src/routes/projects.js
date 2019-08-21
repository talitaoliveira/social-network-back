const express = require('express');

const projectsRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.send('projects')
    });

    return router;
}

module.exports = projectsRoutes;
