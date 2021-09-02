exports.userDataFormatting = async (req, res, next) => {
  const FIELDS = ['gender', 'ip_address', 'createdAt', 'updatedAt']
  const USER = res.locals.user

  if (!Array.isArray(USER)) {
    const CLONED_USER = Object.assign({}, USER.toJSON())
    removeFields(CLONED_USER, FIELDS)
    return res.status(200).json(CLONED_USER)
  } else {
    const CLONED_USER = []

    for (const ITEM of USER) {
      removeFields(ITEM, FIELDS)
      CLONED_USER.push(ITEM.toJSON())
    }

    for (const ITEM of CLONED_USER) {
      removeFields(ITEM, FIELDS)
    }
    return res.status(200).json(CLONED_USER)
  }
}

function removeFields (user, fields) {
  for (const FIELD of fields) {
    delete user[FIELD]
  }
}
