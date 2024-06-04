const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const Login = mongoose.model('Login', {
    name: String,
    email: String,
    password: String,
});


app.get("/login",  async (req, res) => {
    const login = await Login.find()
  res.send(login)
})

app.delete("/login/delete/:id", async(req, res) => {
    const login = await Login.findByIdAndDelete(req.params.id)
    return res.send(login)
})

app.put("/login/update/:id", async(req, res) => {
    const login = await Login.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
return res.send(login)
})

app.post("/login/create/", async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    if (!name){
        res.send("Nome não corresponde.")
        return
    }
    if (!email){
        res.send("Email não corresponde.")
        return
    }
    if (!password){
        res.send("Senha não corresponde.")
        return
    }
    const login = new Login({
         name: name,
         email: email,
         password: password,
         })
        await login.save()
        return res.send(login)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://rodolfomanoel470:zKa05trmIZR2GxF1@bdpresente.fttzn1n.mongodb.net/?retryWrites=true&w=majority&appName=bdpresente')
    console.log('app rodando')
})