const { Sequelize } = require('sequelize')
const SEQUELIZE = new Sequelize('ApiNode', 'kaiquecosta', 'Python@$123', {
  host: 'localhost',
  dialect: 'postgres',
  timezone: '-03:00'
})

try {
  SEQUELIZE.authenticate().then(() => console.log('Connection has been established successfully.'))
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
module.exports = SEQUELIZE
