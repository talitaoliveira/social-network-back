const express = require('express');

const projectsRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.send({ message: 'Hello, Projects!' });
    });

    return router;
}

module.exports = projectsRoutes;
