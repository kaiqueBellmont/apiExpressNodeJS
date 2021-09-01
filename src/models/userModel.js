const { Sequelize, DataTypes } = require('sequelize')

// Option 1: Passing a connection URI

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ApiNode', 'kaiquecosta', 'Python@$123', {
  host: 'localhost',
  dialect: 'postgres',
  timezone: '-03:00'
})
try {
  sequelize.authenticate().then(() => console.log('Connection has been established successfully.'))
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

const User = sequelize.define('users', {
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
// User.sync()
const users = User

// `sequelize.define` also returns the model
console.log(User === sequelize.models.users) // true

module.exports = { users }
