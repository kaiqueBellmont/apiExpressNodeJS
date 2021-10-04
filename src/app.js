// file responsible for creating the server and pre-defining routes
const EXPRESS = require('express')
const APP = EXPRESS()
const ROUTES = require('../src/routes/userRoutes')

APP.use(EXPRESS.json())
APP.use(EXPRESS.urlencoded({ extended: true }))

APP.get('/', (req, res) => {
  res.send('Olá, este é o local host')
})
const port = 3000
APP.use('/api/v1/', ROUTES)

APP.listen(port, () => console.log(`Example app listening on ${port}!`))

module.exports = {
  APP
}
