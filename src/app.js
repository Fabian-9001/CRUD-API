/*EXPRESS AND ROUTER*/
const express = require('express')
const usersRouter = require('./users/users.router')


/*APP AND PORT*/
const port = 9001
const app = express()


/*ACTIVE ROUTER AND FORMAT JSON*/
app.use(express.json())
app.use('/api/v1', usersRouter)


/*ACTIVE SERVER*/
app.listen(port, () => {
    console.log(`the port ${port} is active`)
})