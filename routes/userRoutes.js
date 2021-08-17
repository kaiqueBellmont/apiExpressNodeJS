const validatePayload = require('../src/middlewares/validateUserDataMiddleware');
const {getUsers, getUsersById, UpdateUser, createUser} = require('../src/controllers/userController');

const router = require('express').Router();

//aqui teria um validate user

//User Routes
router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.put('/users/:id',validatePayload, UpdateUser);
router.post('/users', createUser);


module.exports = router;