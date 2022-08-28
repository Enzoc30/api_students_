const bodyParser = require('body-parser');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const sequelize = require("./models")
const Students = require("./user")

// {force : true}
sequelize.sync({force : true}).then(() => {
    console.log("db is ready");
})

// Conectandose en la base de datos
const app = express();
app.use(express.json());
const db = new sqlite3.Database('example.db');

PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/students', async(req, res) => {
    const students = await Students.findAll();
    try {
        res.send(students);   
    } catch (error) {
        res.status(400).json({error});
    }
})

app.post('/students', async(req, res)=>{
    try {
        Students.create(req.body).then(()=>{
            res.send(" Student Created ")
        })   
    } catch (error) {
        res.status(400).json({error});
    }
})

app.get('/student/:id', async(req,res)=>{
    const student = await Students.findOne({where: {id : req.params.id}})
    try {
        res.send(student);
    } catch (error) {
        res.json({error})
    }
})

app.put('/student/:id', async(req,res) => {
    const student = await Students.findOne({where: {id : req.params.id}})
    try {
        student.lastname = req.body.lastname
        student.firstname = req.body.firstname
        student.gender = req.body.gender
        student.age = req.body.age
        await student.save()
        res.send("Updated")
    } catch (error) {
        res.status(400).json({error});
    }
})

app.delete('/student/:id', async(req,res) => {
    try {
        await Students.destroy({where:{id : req.params.id}})
        res.send("Deleted")    
    } catch (error) {
        res.status(400).json({error})
    }
})

app.listen(8000 , ()=>{
    console.log(`App is running in port : ${8000}`)
});
