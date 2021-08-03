const data = require('../../mock_data.json');

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


module.exports = {getUsers, getUserById}