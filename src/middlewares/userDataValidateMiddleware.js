function validateData (body, res) {
  if (body.first_name.length <= 0) {
    res.status(400).json({ status: 400, message: "missing field: 'first_name' " })
  }

  if (body.last_name.length <= 0) {
    res.status(400).json({ status: 400, message: "missing field: 'last_name' " })
  }

  if (body.email.length <= 0) {
    res.status(400).json({ status: 400, message: "missing field: 'email " })
  }
}

function validateUpdateUser (req, res, next) {
  const BODY = req.body

  try {
    validateData(BODY)
    return next()
  } catch (e) {
    res.status(400).json({ status: 400, message: e.message })
  }
}

function validateCreateUser (req, res, next) {
  const BODY = req.body

  try {
    validateData(BODY)
    return next()
  } catch (e) {
    res.status(400).json({ status: 400, message: e.message })
  }
}

module.exports = { validateUpdateUser, validateCreateUser }
