const data = require('../models/userModel')

const users = data.users

function getUsers () {
  return new Promise((resolve) => {
    resolve(users.findAll({ order: ['id'] }))
  })
}

async function getUserById (idUser) {
  return users.findByPk(idUser)
}

async function UpdateUser (idUser, userData) {
  const user = await getUserById(idUser)
  let gender = userData.gender
  let ipAdress = userData.ip_address

  if (gender === null || gender === '') {
    gender = user.gender
  } else {
    gender = userData.gender
  }

  if (ipAdress === null || ipAdress === '') {
    ipAdress = user.ip_address
  } else {
    ipAdress = userData.ip_address
  }

  return user.update({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    gender: gender,
    ip_address: ipAdress

  })
}

async function createUser (userData) {
  const user =
        await users.create({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          gender: userData.gender ? userData.gender : null,
          ip_address: userData.ip_address ? userData.ip_address : null

        })
  console.log()
  console.log(user.toJSON())
  return userData
}

module.exports = { getUsers, getUserById, UpdateUser, createUser }
