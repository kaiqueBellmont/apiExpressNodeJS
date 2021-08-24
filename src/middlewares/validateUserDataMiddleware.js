function  hasDifference ({ body, required }) {
    return required.filter(field => !Object.keys(body).includes(field))
}

function validateData(body, res){

    if (body.first_name.length <= 0) {
        res.status(400).
        json({status: 400, message: "O campo 'first_name' está vazio"})
    }

    if (body.last_name.length <= 0) {
        res.status(400).
        json({status: 400, message: "O campo 'Last_name' está vazio"})
    }

    if (body.email.length <= 0) {
        res.status(400).
        json({status: 400, message: "O campo 'email' está vazio"})
    }


}

function validateUpdateUser(req, res, next) {
    const ID_ESPERADO = req.params.id
    const ID_RECEBIDO = req.body.id
    const body = req.body

    try{
        if((ID_ESPERADO) === (ID_RECEBIDO)) {

            validateData(body)
            return next();

        } else {
            res.status(400).
            json({ status: 400, message: "O id precisa ser identico ao da URI :"+ ID_ESPERADO })
        }

    }catch (e) {
        res.status(400).
        json({ status: 400, message: e.message })
    }
}

function validateCreateUser(req, res, next) {
    const body = req.body

    try{
        validateData(body)
        return next();
    }catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
}

module.exports = {validateUpdateUser, validateCreateUser};