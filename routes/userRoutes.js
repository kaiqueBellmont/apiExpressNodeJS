const {getUsers, getUsersById, UpdateUser, createUser} = require('../src/controllers/userController');

const router = require('express').Router();

//User Routes
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.put('/users/:id', UpdateUser);
router.post('/users', createUser);


module.exports = router;