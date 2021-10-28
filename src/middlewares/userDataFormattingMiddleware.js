// middleware needed to format data and deliver only relevant fields in response
const FIELDS = ['gender', 'ip_address', 'createdAt', 'updatedAt']

function removeFields (user, fields) {
  for (const FIELD of fields) {
    delete user[FIELD]
  }
  return user
}

exports.userDataFormatting = async (req, res) => {
  const USER = res.locals.user
  let CLONED_USER
  if (!Array.isArray(USER)) {
    CLONED_USER = Object.assign({}, USER.toJSON())
    removeFields(CLONED_USER, FIELDS)
  } else {
    CLONED_USER = USER.map(item => removeFields(item.toJSON(), FIELDS))
  }
  return res.status(200).json(CLONED_USER)
}
