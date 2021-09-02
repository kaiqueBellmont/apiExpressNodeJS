// controllers responsible for user services
const USER_SERVICE = require('../../src/services/userService')

function successResponse (res, data, statusCode) {
  return res.status(statusCode).json(data)
}

function errorResponse (res, statusCode) {
  return res.status(statusCode).json({ status: 400 })
}

exports.getUsers = async (req, res, next) => {
  try {
    res.locals.user = await USER_SERVICE.getUsers()

    return next()
  } catch (e) {
    return errorResponse(res, 400)
  }
}

exports.getUsersById = async (req, res, next) => {
  try {
    res.locals.user = await USER_SERVICE.getUserById(req.params.id)

    return next()
  } catch (e) {
    return errorResponse(res, 400)
  }
}

exports.UpdateUser = async (req, res) => {
  try {
    const USER = await USER_SERVICE.UpdateUser(req.params.id, req.body)
    return successResponse(res, USER, 200)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.createUser = async (req, res) => {
  try {
    const NEW_USER = await USER_SERVICE.createUser(req.body)
    return successResponse(res, NEW_USER, 201)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}
