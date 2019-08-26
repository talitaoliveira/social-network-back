const express = require('express');

const usersRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.send({ message: 'Hello, Users!' })
    });

    return router;
}

module.exports = usersRoutes;