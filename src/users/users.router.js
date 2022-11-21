/*IMPORTS*/
const router = require('express').Router()
const usersServices = require('./users.services')


/*ROUTES*/
router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postNewUser)
router.get('/users/:id', usersServices.getUserById)
router.delete('/users/:id', usersServices.deleteUser)
router.patch('/users/:id', usersServices.patchUser)


/*EXPORT*/
module.exports = router

