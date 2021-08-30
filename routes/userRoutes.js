const { validateUpdateUser, validateCreateUser } = require('../src/middlewares/userDataValidateMiddleware')
const { getUsers, getUsersById, UpdateUser, createUser } = require('../src/controllers/userController')
const { userDataFormatting } = require('../src/middlewares/userDataFormattingMiddleware')

const router = require('express').Router()

// User Routes
router.get('/users', getUsers)
router.get('/users/:id', getUsersById, userDataFormatting)
router.put('/users/:id', validateUpdateUser, UpdateUser)
router.post('/users', validateCreateUser, createUser)

module.exports = router
