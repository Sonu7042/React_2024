const express = require('express')
const mongoConnect = require('./db')
const app = express()
// app.use(express.json())

mongoConnect()




app.use('/', require('./userController'))

app.listen(9000, () => {
    console.log("Server is listening...")
})

