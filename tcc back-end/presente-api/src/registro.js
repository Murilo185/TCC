const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())



module.exports = {
     Registro,
}


const Registro = mongoose.model ('Registro', {
    name: String,
    email: String,
    password: String,
});


app.get("/registro",  async (req, res) => {
    const registro = await Registro.find()
  res.send(registro)
})

app.delete("/registro/delete/:id", async(req, res) => {
    const registro = await Registro.findByIdAndDelete(req.params.id)
    return res.send(registro)
})

app.put("/registro/update/:id", async(req, res) => {
    const registro = await Registro.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
return res.send(registro)
})

app.post("/registro/create/", async (req, res) => {
     
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

   
    const registro = new Registro({
        
         name: name,        
         email: email,
         password: password,
         })
        await registro.save()
        return res.send(registro)
})

