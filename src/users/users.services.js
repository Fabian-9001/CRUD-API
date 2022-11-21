/*IMPORT*/
const usersControllers = require('./users.controllers')


/*GET*/
const getAllUsers = (req, res) => {
    const allUsers = usersControllers.findAllUsers()
    res.status(200).json(allUsers)
}


/*GET*/
const getUserById = (req, res) => {
    const id = req.params.id
    const user = usersControllers.findUserById(id)

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}


/*POST*/
const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if (first_name, last_name, email, password, birthday) {
        const user = usersControllers.createNewUser({ first_name, last_name, email, password, birthday })
        res.status(201).json(user)

    } else {
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                password: 'string',
                birthday: 'string'
            }
        })
    }
}


/*DELETE*/
const deleteUser = (req, res) => {
    const id = req.params.id
    const user = usersControllers.removeUser(id)

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).json({ message: 'User Undifined' })
    }
}


/*PATCH*/
const patchUser = (req, res) => {
    const id = req.params.id
    const { first_name, last_name, email, password, birthday } = req.body

    const data = {
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    const user = usersControllers.updateUser(id, data)
    if (user) {
        res.status(200).json(user)
    }
    else {
        res.status(400).json({ message: 'User not found' })
    }
}


/*EXPORTS*/
module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser,
    patchUser
}