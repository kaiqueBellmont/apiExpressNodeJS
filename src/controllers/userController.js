const userService = require('../../src/services/userService')

function defaultResponse (res, data) {
  return res.status(200).json(data)
}

exports.getUsers = async (req, res) => {
  // Validate request parameters, queries using express-validator
  try {
    const users = await userService.getUsers()
    return res.status(200).json(users)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.getUsersById = async (req, res) => {
  // Validate request parameters, queries using express-validator
  try {
    const user = await userService.getUserById(req.params.id)
    return res.status(200).json(user)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.UpdateUser = async (req, res) => {
  // Validate request parameters, queries using express-validator
  // ver se ja existe o usário
  try {
    const user = await userService.UpdateUser(req.params.id, req.body)
    return defaultResponse(res, user)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.createUser = async (req, res) => {
  // Validate request parameters, queries using express-validator
  try {
    const newUser = await userService.createUser(req.body)
    return res.status(200).json(newUser)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

module.exports = defaultResponse
