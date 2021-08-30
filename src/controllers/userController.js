const userService = require('../../src/services/userService')

function defaultResponse (res, data) {
  return res.status(200).json(data)
}

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers()
    return res.status(200).json(users)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.getUsersById = async (req, res, next) => {
  // const existingId = await userService.isExistingId(req.params.id)

  try {
    const user = await userService.getUserById(req.params.id)
    res.locals.user = user
    return next()
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.UpdateUser = async (req, res) => {
  // const existingId = await userService.isExistingId(req.params.id)

  try {
    const user = await userService.UpdateUser(req.params.id, req.body)
    return defaultResponse(res, user)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.createUser = async (req, res) => {
  // const existingId = await userService.isExistingId(req.params.id)
  // console.log(existingId)
  try {
    const newUser = await userService.createUser(req.body)
    return res.status(200).json(newUser)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}
