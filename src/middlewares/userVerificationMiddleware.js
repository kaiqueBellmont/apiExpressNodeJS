// 404 se nao existir
// se existir next
const USER_SERVICE = require('../services/userService')

exports.existsUser = async function (req, res, next) {
  const EXISTS = (await USER_SERVICE.getUserById(req.params.id))
  if (EXISTS) {
    return next()
  }
  if (!EXISTS) {
    return res.status(404).json({ status: 404, message: "User Doesn't exists" })
  }
}
//
// exports.userDataFormatting = async (req, res, next) => {
//   const USER = res.locals.user
//   const clonedUser = Object.assign({}, USER)
//   const FIELDS = ['gender', 'ip_address', 'createdAt', 'updatedAt']
//
//   try {
//     removeFields(clonedUser, FIELDS)
//     return res.status(200).json(clonedUser)
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message })
//   }
// }
//
// function removeFields (user, fields) {
//   for (const field of fields) {
//     delete user[field]
//   }
// }
