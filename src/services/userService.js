const data = require('../models/userModel')

// const fsAsync = require('fs/promises')
const users = data.users

function getUsers () {
  return new Promise((resolve) => {
    resolve(users.findAll())
  })
}

// async function isExistingId (idUser) {
//   return new Promise((resolve, reject) => {
//     console.log(!data.users.findByPk(idUser))
//     return !!data.users.findByPk(idUser)
//   }
//   )
// }

async function getUserById (idUser) {
  return new Promise((resolve, reject) => {
    users.findByPk(idUser).then(data => {
      const user = data.get({ plain: true })
      resolve(user)
    })
  })
}

async function UpdateUser (idUser, userData) {
  // aqui preciso dar os selects
  return new Promise((resolve, reject) => {
    const user =
            users.update({
              id: idUser,
              first_name: userData.first_name,
              last_name: userData.last_name,
              email: userData.email,
              gender: userData.gender ? userData.gender : null,
              ip_address: userData.ip_address ? userData.ip_address : null,
              createdAt: new Date(),
              updatedAt: new Date()

            },
            { where: users.id === 5 })
    console.log()

    resolve(user)
  })
}

async function createUser (userData) {
  const user =
        users.build({
          id: '',
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          gender: userData.gender ? userData.gender : null,
          ip_address: userData.ip_address ? userData.ip_address : null,
          createdAt: new Date(),
          updatedAt: new Date()

        })
  console.log()
  console.log(user.toJSON())
  await user.save()
  return userData
}

module.exports = { getUsers, getUserById, UpdateUser, createUser }
