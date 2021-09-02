// model responsible for creating the users schema
const { Sequelize, DataTypes } = require('sequelize')
// Aqui preciso enviar as variaveis de ambiente no lugar da senha
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

const USER = SEQUELIZE.define('users', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(55),
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING(55),
    allowNull: true
  },
  ip_address: {
    type: DataTypes.STRING(55),
    allowNull: true
  }

}, {
  // Other model options go here
  dateStrings: true,
  typeCast: true,
  timezone: 'GMT-3',
  timestamps: true
})

const USERS = USER

module.exports = { USERS }
