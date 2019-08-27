const express = require('express');
const router = express.Router();
const userController = require('./user.controller')

const usersRoutes = () => {
    router.get('/', (req, res, next) => {
        userController.listUsers(req, res);
    });

    return router;
}

module.exports = usersRoutes;