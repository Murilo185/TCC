const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())
module.exports = Login;


const Login = mongoose.model('Login', {
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
     
        email: req.body.email,
        password: req.body.password,
    })
return res.send(login)
})

app.post("/login/create/", async (req, res) => {
    
    const email = req.body.email
    const password = req.body.password


    if (!email){
        res.send("Email não corresponde.")
        return
    }
    if (!password){
        res.send("Senha não corresponde.")
        return
    }
    const login = new Login({
        
         email: email,
         password: password,
         })
        await login.save()
        return res.send(login)
})



