const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const Registro = require ('./registro')
const Login = require ('./login')








app.listen(port, () => {
    mongoose.connect('mongodb+srv://rodolfomanoel470:ocJEjARPbVd68YIS@bdpresente.fttzn1n.mongodb.net/?retryWrites=true&w=majority&appName=bdpresente')
    console.log('app rodando')
})