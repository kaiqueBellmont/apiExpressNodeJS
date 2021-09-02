// file responsible for creating the server and pre-defining routes
const EXPRESS = require('express')
const APP = EXPRESS()
const routes = require('../../apiExpressNodeJS/routes/userRoutes')

APP.use(EXPRESS.json())
APP.use(EXPRESS.urlencoded({ extended: true }))

APP.get('/', (req, res) => {
  res.send('Olá, este é o local host')
})

APP.use('/api/v1/', routes)

APP.listen(3020, () => console.log('Example app listening on port 3000!'))

module.exports = {
  APP
}
