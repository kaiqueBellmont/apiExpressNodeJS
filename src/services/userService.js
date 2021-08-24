/*
No caso, o serviço seria igual os exemplos:
constructor(){
    self.user_repository = new UserJsonRepository()
}
listUser(){
    self.user_repository.listUser();
}
getUser(id){
    self.user_repository.getUser(id)
}
marca_de_verificação_branca
olhos
mãos_para_cima





17h32
Ai se fosse trocar para UserSequilizeRepository por exemplo, seria só trocar no construtor.
*/

const data = require('../../mock_data.json');
const fs = require("fs");
const fsAsync = require("fs/promises");


async function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}
async function getUserById(id_user) {
    return new Promise((resolve, reject) => {
        for (const item of data) {
            if (item['id'] === id_user) {
                resolve(item);
            }
        }
    })
}

async function UpdateUser(id_user, userData) {
    return new Promise((resolve, reject) => {
        let updatedUserData;
        for (const item of data) {
            if (item['id'] === id_user) {
                item['id'] = userData.id ? userData.id : userData.id
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
        fs.writeFileSync('mock_data.json', JSON.stringify(data, null, "\t"));
        resolve(updatedUserData)
    })
}

async function createUser(userData) {
    
    userData.id = data.length + 1 + ""
    userData.first_name = userData.first_name 
    userData.last_name = userData.last_name 
    userData.email = userData.email 
    userData.gender = userData.gender ? userData.gender : null
    userData.ip_address = userData.ip_address ? userData.ip_address : null

    data.push(userData)
    console.log(userData)

    await fsAsync.writeFile('mock_data.json', JSON.stringify(data, null, "\t"));
    return userData
}

module.exports = {getUsers, getUserById, UpdateUser, createUser}