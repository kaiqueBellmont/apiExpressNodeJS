const { validateUpdateUser, validateCreateUser } = require('../src/middlewares/userDataValidateMiddleware')
const { userDataFormatting } = require('../src/middlewares/userDataFormattingMiddleware')
const { existsUser } = require('../src/middlewares/userVerificationMiddleware')
const { getUsers, getUsersById, UpdateUser, createUser } = require('../src/controllers/userController')

const ROUTER = require('express').Router()

// User Routes
ROUTER.get('/users', getUsers, userDataFormatting)
ROUTER.get('/users/:id', existsUser, getUsersById, userDataFormatting)
ROUTER.put('/users/:id', validateUpdateUser, UpdateUser)
ROUTER.post('/users', validateCreateUser, createUser)

module.exports = ROUTER
