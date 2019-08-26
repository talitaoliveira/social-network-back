const express = require('express');

const usersRoutes = () => {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.send('ok')
    });

    return router;
}

module.exports = usersRoutes;