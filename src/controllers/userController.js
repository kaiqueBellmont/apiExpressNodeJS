// controllers responsible for user services
const USER_SERVICE = require('../../src/services/userService')
const DEFAULT_ERROR_CODE = 400
const DEFAULT_SUCCESS_CODE = 200

function successResponse (res, data, statusCode) {
  return res.status(statusCode).json(data)
}

function errorResponse (res, statusCode) {
  return res.status(statusCode)
}

exports.getUsers = async (req, res, next) => {
  try {
    res.locals.user = await USER_SERVICE.getUsers()

    return next()
  } catch (e) {
    return errorResponse(res, DEFAULT_ERROR_CODE)
  }
}

exports.getUsersById = async (req, res, next) => {
  try {
    res.locals.user = await USER_SERVICE.getUserById(req.params.id)

    return next()
  } catch (e) {
    return errorResponse(res, DEFAULT_ERROR_CODE)
  }
}

exports.UpdateUser = async (req, res) => {
  try {
    const USER = await USER_SERVICE.UpdateUser(req.params.id, req.body)
    return successResponse(res, USER, DEFAULT_SUCCESS_CODE)
  } catch (e) {
    return errorResponse(res, DEFAULT_ERROR_CODE)
  }
}

exports.createUser = async (req, res) => {
  try {
    const NEW_USER = await USER_SERVICE.createUser(req.body)
    return successResponse(res, NEW_USER, 201)
  } catch (e) {
    return errorResponse(res, DEFAULT_ERROR_CODE)
  }
}
