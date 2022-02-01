const express = require ('express')
const app = express()
app.use(express.json())
const mongoose = require ('mongoose')
require('dotenv').config({path:'./config/.env'}) 

const User = require('./models/User')


mongoose.connect(process.env.MONGO_URI,(err)=>err?console.log(err):console.log(`database connected`))



app.use('/api/user',require('./routs/userRoute'))

app.listen(process.env.PORT, (err)=>err?console.log(err):console.log(`server is runing`))