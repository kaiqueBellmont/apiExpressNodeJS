const userService = require('../../src/services/userService')

async function validateUpdateUser(req, res, next) {
    const ID_ESPERADO = req.params['id']
    const ID_RECEBIDO = req.body.id
    const body = req.body
    
    try{

        if((ID_ESPERADO) === (ID_RECEBIDO)){
            if(body.first_name.length > 0){
                if(body.last_name.length > 0){
                    if(body.email.length > 0){
                        return next();
                    } else {
                        res.status(400).json({ status: 400, message: "O campo 'email' está vazio" })
                    }
                } else {
                    res.status(400).json({ status: 400, message: "O campo 'Last_name' está vazio" })
                }
            } else {
                res.status(400).json({ status: 400, message: "O campo 'first_name' está vazio" })
            }        
        } res.status(400).json({ status: 400, message: "O id está errado" })

    }catch (e) {
        res.status(400).json({ status: 400, message: e.message })
 
    }

}

async function validateCreateUser(req, res, next) {
    const ID_ESPERADO = req.params['id']
    const ID_RECEBIDO = req.body.id
    const body = req.body
    
    try{
        if(body.first_name.length > 0){
           
            if(body.last_name.length > 0){
                
                if(body.email.length > 0){
                    
                    return next();
                
                } else {
                    res.status(400).json({ status: 400, message: "O campo 'email' está vazio" })
                }
            
            } else {
                res.status(400).json({ status: 400, message: "O campo 'Last_name' está vazio" })
            }

        } else {
            res.status(400).json({ status: 400, message: "O campo 'first_name' está vazio" })
        }        
    }catch (e) {
        res.status(400).json({ status: 400, message: e.message })
 
    }

}


module.exports = {validateUpdateUser, validateCreateUser};