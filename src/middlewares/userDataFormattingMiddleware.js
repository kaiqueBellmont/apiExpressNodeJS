// middleware needed to format data and deliver only relevant fields in response
const FIELDS = ['gender', 'ip_address', 'createdAt', 'updatedAt']

exports.userDataFormatting = async (req, res) => {
  const USER = res.locals.user

  if (!Array.isArray(USER)) {
    const CLONED_USER = Object.assign({}, USER.toJSON())
    removeFields(CLONED_USER, FIELDS)
    return res.status(200).json(CLONED_USER)
  } else {
    const CLONED_USER = []

    for (const ITEM of USER) {
      const item = ITEM.toJSON()
      removeFields(item, FIELDS)
      CLONED_USER.push(item)
    }

    return res.status(200).json(CLONED_USER)
  }
}

function removeFields (user, fields) {
  for (const FIELD of fields) {
    delete user[FIELD]
  }
}
