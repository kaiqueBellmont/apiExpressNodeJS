// middleware needed to validate the required fields of the request
function validateData (body, res) {
  if (!body.first_name) {
    res.status(400)
  }
  if (!body.last_name) {
    res.status(400)
  }
  if (!body.email) {
    res.status(400)
  }
}

function validateUser (req, res, next) {
  const BODY = req.body
  try {
    validateData(BODY, res)
    return next()
  } catch (e) {
    res.status(400).json({ status: 400, message: 'incorrect values or Missing fields in the request' })
  }
}

module.exports = { validateUser }
