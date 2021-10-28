// file responsible for user service
// contains the business logic and communicates with the userModel
const DATA = require('../models/userModel')

const USERS = DATA.USERS

async function getUsers () {
  return USERS.findAll({ order: ['id'] })
}

async function getUserById (idUser) {
  return USERS.findByPk(idUser)
}

// toda vez que for update, começar com um objeto em branco
async function updateUser (idUser, userData) {
  const USER = await getUserById(idUser)
  let gender = userData.gender
  let ipAddress = userData.ip_address

  if (gender) {
    gender = USER.gender
  } else {
    gender = userData.gender
  }

  if (ipAddress) {
    ipAddress = USER.ip_address
  } else {
    ipAddress = userData.ip_address
  }
  return USER.update({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    gender: gender,
    ip_address: ipAddress

  })
}

async function createUser (userData) {
  await USERS.create({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    gender: userData.gender ? userData.gender : null,
    ip_address: userData.ip_address ? userData.ip_address : null

  })
  return userData
}

module.exports = { getUsers, getUserById, updateUser, createUser }
