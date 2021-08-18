const {validateUpdateUser, validateCreateUser} = require('../src/middlewares/validateUserDataMiddleware');
const {getUsers, getUsersById, UpdateUser, createUser} = require('../src/controllers/userController');

const router = require('express').Router();

//aqui teria um validate user

//User Routes
router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.put('/users/:id',validateUpdateUser, UpdateUser);
router.post('/users', validateCreateUser, createUser);


module.exports = router;