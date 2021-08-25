const data = require('../../mock_data.json')
const fs = require('fs')
const fsAsync = require('fs/promises')

async function getUsers () {
  return new Promise((resolve) => {
    resolve(data)
  })
}

async function getUserById (idUser) {
  return new Promise((resolve, reject) => {
    for (const item of data) {
      if (item.id === idUser) {
        resolve(item)
      }
    }
  })
}

async function UpdateUser (idUser, userData) {
  return new Promise((resolve, reject) => {
    let updatedUserData
    for (const item of data) {
      if (item.id === idUser) {
        item.id = userData.id ? userData.id : userData.id
        item.first_name = userData.first_name
        item.last_name = userData.last_name
        item.email = userData.email
        item.gender = userData.gender ? userData.gender : null
        item.ip_address = userData.ip_address ? userData.ip_address : null
        console.log(item)
        updatedUserData = item
        break
      }
    }
    fs.writeFileSync('mock_data.json', JSON.stringify(data, null, '\t'))
    resolve(updatedUserData)
  })
}

async function createUser (userData) {
  userData.id = data.length + 1 + ''
  userData.gender = userData.gender ? userData.gender : null
  userData.ip_address = userData.ip_address ? userData.ip_address : null

  data.push(userData)
  console.log(userData)

  await fsAsync.writeFile('mock_data.json', JSON.stringify(data, null, '\t'))
  return userData
}

module.exports = { getUsers, getUserById, UpdateUser, createUser }
