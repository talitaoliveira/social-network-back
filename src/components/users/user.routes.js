const express = require('express');
const router = express.Router();

const usersRoutes = () => {
    router.get('/', (req, res, next) => {
        res.send({ message: 'Hello, Users!' })
    });

    return router;
}

module.exports = usersRoutes;