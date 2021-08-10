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
                item.first_name = userData.first_name ? userData.first_name : item.first_name
                item.last_name = userData.last_name ? userData.last_name : item.last_name
                item.email = userData.email ? userData.email : item.email
                item.gender = userData.gender ? userData.gender : item.gender
                item.ip_address = userData.ip_address ? userData.ip_address : item.ip_address
                console.log(item)
                updatedUserData = item
                break
            }
        }
        console.log("*******************")
        fs.writeFileSync('mock_data.json', JSON.stringify(data, null, "\t"));
        resolve(updatedUserData)
    })
}

async function createUser(userData) {
    return new Promise((resolve, reject) => {
        userData.id = data.length + 1 + ""

        data.push(userData)
        console.log(userData)
        resolve(userData);
        fs.writeFileSync('mock_data.json', JSON.stringify(data, null, "\t"));
    })
}

module.exports = {getUsers, getUserById, UpdateUser, createUser}