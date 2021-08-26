const express = require('express')
const app = express()
const routes = require('../../apiExpressNodeJS/routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Olá, este é o local host')
})

app.use('/api/v1/', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}
