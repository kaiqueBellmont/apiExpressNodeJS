const userService = require('../../src/services/userService') 
  
exports.getUsers = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        let users = await userService.getUsers()
        return res.status(200).json(users);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUsersById = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        let user = await userService.getUserById(req.params.id, req.params.id_user)
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.UpdateUser = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        let user = await userService.UpdateUser(req.params.id, req.body)
        return res.status(200).json(user);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        let newUser = await userService.createUser(req.body)
        return res.status(200).json(newUser);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}