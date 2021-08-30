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
  const existingId = await userService.isExistingId(req.params.id)

  try {
    if (existingId) {
      const user = await userService.getUserById(req.params.id)
      res.locals.user = user
      return next()
    } else {
      return res.status(404).json({ status: 400, message: 'User not found' })
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.UpdateUser = async (req, res) => {
  const existingId = await userService.isExistingId(req.params.id)

  try {
    if (existingId && req.body.id === req.params.id) {
      const user = await userService.UpdateUser(req.params.id, req.body)
      return defaultResponse(res, user)
    } else {
      return res.status(400).json({
        status: 400,
        message: 'O id do usuário é ' + req.params.id
      })
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

exports.createUser = async (req, res) => {
  const existingId = await userService.isExistingId(req.params.id)

  try {
    if (!existingId) {
      const newUser = await userService.createUser(req.body)
      return res.status(200).json(newUser)
    } else {
      return res.status(400).json({ status: 400, message: 'Usuario já existe' })
    }
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}
