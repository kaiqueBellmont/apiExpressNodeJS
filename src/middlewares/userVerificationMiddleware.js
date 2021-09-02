// middleware needed to verify the existence of a user in the database
const USER_SERVICE = require('../services/userService')

exports.existsUser = async function (req, res, next) {
  const EXISTS = (await USER_SERVICE.getUserById(req.params.id))
  if (EXISTS) {
    return next()
  }
  if (!EXISTS) {
    return res.status(404).json({ status: 404, message: "User Doesn't exists on database" })
  }
}
