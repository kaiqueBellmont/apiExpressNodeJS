exports.userDataFormatting = async (req, res, next) => {
  const USER = res.locals.user
  const clonedUser = Object.assign({}, USER)
  const FIELDS = ['gender', 'ip_address']

  try {
    removeFields(clonedUser, FIELDS)
    return res.status(200).json(clonedUser)
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}

function removeFields (user, fields) {
  for (const field of fields) {
    delete user[field]
  }
}
