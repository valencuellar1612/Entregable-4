const { getAll, create, getOne, remove, update, verifyCode, login, getLoggedUser } = require('../controllers/user.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/users')
    .get(verifyJWT,getAll)
    .post(create);

userRouter.route('/users/login')
    .post(login);

userRouter.route('/users/:id')
    .get(verifyJWT, getLoggedUser)

userRouter.route('/users/:id')
    .get(verifyJWT, getOne)
    .delete (verifyJWT,remove)
    .put(update);

userRouter.route('/users/verify/:code')
    .get(verifyCode)

module.exports = userRouter;