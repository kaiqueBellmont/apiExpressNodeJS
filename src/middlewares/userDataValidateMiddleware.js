// middleware needed to validate the required fields of the request
function validateData (body, res) {
  if (body.first_name === '' || body.first_name === null) {
    res.status(400)
  }
  if (body.last_name === '' || body.last_name === null) {
    res.status(400)
  }
  if (body.email === '' || body.email === null) {
    res.status(400)
  }
}

function validateUpdateUser (req, res, next) {
  const BODY = req.body
  try {
    validateData(BODY)
    return next()
  } catch (e) {
    res.status(400).json({ status: 400, message: 'incorrect values in the request' })
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
