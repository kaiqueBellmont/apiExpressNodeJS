// creates routes and communicates with middlewares and controllers
const { validateUser } = require('../middlewares/userDataValidateMiddleware')
const { userDataFormatting } = require('../middlewares/userDataFormattingMiddleware')
const { existsUser } = require('../middlewares/userVerificationMiddleware')
const { getUsers, getUsersById, updateUser, createUser } = require('../controllers/userController')

const ROUTER = require('express').Router()

// User Routes
ROUTER.get('/users', getUsers, userDataFormatting)
ROUTER.get('/users/:id', existsUser, getUsersById, userDataFormatting)
ROUTER.put('/users/:id', existsUser, validateUser, updateUser)
ROUTER.post('/users', validateUser, createUser)

module.exports = ROUTER
