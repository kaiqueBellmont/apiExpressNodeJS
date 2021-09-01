exports.userDataFormatting = async (req, res, next) => {
  const FIELDS = ['gender', 'ip_address', 'createdAt', 'updatedAt']
  const USER = res.locals.user

  if (!Array.isArray(USER)) {
    const CLONED_USER = Object.assign({}, USER.toJSON())
    removeFields(CLONED_USER, FIELDS)
    return res.status(200).json(CLONED_USER)
  } else {
    const CLONED_USER = []

    for (const item of USER) {
      removeFields(item, FIELDS)
      CLONED_USER.push(item.toJSON())
    }

    for (const item of CLONED_USER) {
      removeFields(item, FIELDS)
    }
    return res.status(200).json(CLONED_USER)
  }
}

function removeFields (user, fields) {
  for (const field of fields) {
    delete user[field]
  }
}
