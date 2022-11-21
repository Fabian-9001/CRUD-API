/*DATABASE*/
let dataBase = []
let id = 1


/*GET*/
const findAllUsers = () => {
    return dataBase
}


/*GET*/
const findUserById = (id) => {
    const userFound = dataBase.find(user => user.id == id)
    return userFound
}


/*POST*/
const createNewUser = (data) => {

    const newUser = {
        id: id++,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }

    dataBase.push(newUser)
    return newUser
}


/*DELETE*/
const removeUser = (id) => {
    const userFound = dataBase.find(user => user.id == id)
    dataBase = dataBase.filter(user => user.id !== userFound.id)
    return userFound
}


/*PATCH*/
const updateUser = (id, data) => {
    let userFound = dataBase.find(user => user.id == id)

    let updateUserFound = {
        id: userFound.id,
        first_name: data.first_name || userFound.first_name,
        last_name: data.last_name || userFound.last_name,
        email: data.email || userFound.email,
        password: data.password || userFound.password,
        birthday: data.birthday || userFound.birthday
    }

    dataBase = dataBase.filter(user => user.id !== userFound.id)
    dataBase.push(updateUserFound)

    return updateUserFound
}


/*EXPORTS*/
module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    removeUser,
    updateUser
}



