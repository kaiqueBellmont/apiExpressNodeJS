// creates routes and communicates with middlewares and controllers
const { validateUpdateUser, validateCreateUser } = require('../middlewares/userDataValidateMiddleware')
const { userDataFormatting } = require('../middlewares/userDataFormattingMiddleware')
const { existsUser } = require('../middlewares/userVerificationMiddleware')
const { getUsers, getUsersById, UpdateUser, createUser } = require('../controllers/userController')

const ROUTER = require('express').Router()

// User Routes
ROUTER.get('/users', getUsers, userDataFormatting)
ROUTER.get('/users/:id', existsUser, getUsersById, userDataFormatting)
ROUTER.put('/users/:id', validateUpdateUser, UpdateUser)
ROUTER.post('/users', validateCreateUser, createUser)

module.exports = ROUTER
