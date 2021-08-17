const { use } = require('../../routes/userRoutes')
const userService = require('../../src/services/userService')
function defaultResponse(res, data){
    return res.status(200).json(data)
}
  

async function validatePayload(req, res) {
    const a = req.params
    const b = Object(res)
    const c = req.body.id
    await a,b
    if(Object(a['id'] === '2')){
        console.log("È igual")
    } else {
        console.log("è diferente")
    }
    return console.log(Object(a)), console.log(c)
}

module.exports = validatePayload;