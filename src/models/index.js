const DATABASE = require('../../config/database')
const USERNAME = DATABASE.username
const DATABASE_NAME = DATABASE.database
const PASSWORD = DATABASE.password

const { Sequelize } = require('sequelize')
const SEQUELIZE = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
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
