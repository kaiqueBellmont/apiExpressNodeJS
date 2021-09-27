// model responsible for creating the users schema
const SEQUELIZE = require('../models/index')
const { DataTypes } = require('sequelize')

const USER = SEQUELIZE.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
