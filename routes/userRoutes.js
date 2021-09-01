const { validateUpdateUser, validateCreateUser } = require('../src/middlewares/userDataValidateMiddleware')
const { userDataFormatting } = require('../src/middlewares/userDataFormattingMiddleware')
const { existsUser } = require('../src/middlewares/userVerificationMiddleware')
const { getUsers, getUsersById, UpdateUser, createUser } = require('../src/controllers/userController')

const router = require('express').Router()

// User Routes
router.get('/users', getUsers, userDataFormatting)
router.get('/users/:id', existsUser, getUsersById, userDataFormatting)
router.put('/users/:id', validateUpdateUser, UpdateUser)
router.post('/users', validateCreateUser, createUser)

module.exports = router
