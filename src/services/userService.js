// file responsible for user service
// contains the business logic and communicates with the userModel
const DATA = require('../models/userModel')

const USERS = DATA.USERS

function getUsers () {
  return new Promise((resolve) => {
    resolve(USERS.findAll({ order: ['id'] }))
  })
}

async function getUserById (idUser) {
  return USERS.findByPk(idUser)
}

async function UpdateUser (idUser, userData) {
  const USER = await getUserById(idUser)
  let gender = userData.gender
  let ipAdress = userData.ip_address

  if (gender === null || gender === '' || ipAdress === undefined) {
    gender = USER.gender
  } else {
    gender = userData.gender
  }

  if (ipAdress === null || ipAdress === '' || ipAdress === undefined) {
    ipAdress = USER.ip_address
  } else {
    ipAdress = userData.ip_address
  }
  return USER.update({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    gender: gender,
    ip_address: ipAdress

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

module.exports = { getUsers, getUserById, UpdateUser, createUser }
