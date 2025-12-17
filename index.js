require("dotenv").config()
const Port = 3321
const { homepage } = require('./controllers/appController')
const express = require('express')
const router = require('./routers/appRouter')
const app = express()
const mongoose = require("mongoose")
app.use(express.json())

app.use(router)

mongoose.connect(process.env.db).then(()=>{
    console.log("Database connected successfully")


app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})
}).catch((error)=>{
    console.log("Database connection failed")
})