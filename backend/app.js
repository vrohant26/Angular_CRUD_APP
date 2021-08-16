const express = require('express')
const app = express()
const todo = require('./db/model') 
var cors = require('cors')
require('./db/mongoose')

app.use(cors())

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/person' ,(req , res)=>{
   todo.find({}).then((person)=>{
       res.send(person)
   })
})

app.post('/person' ,(req , res)=>{
    let name = req.body.name
    let age = req.body.age
    let gender = req.body.gender
    let phone = req.body.phone
    let newlist = new todo({
        name,
        age,
        gender,
        phone
    })
    newlist.save((listdoc)=>{
        res.send(listdoc)
    })
})

app.patch('/person/:id', (req , res)=>{
    todo.findOneAndUpdate({_id : req.params.id}, {
        $set : req.body
    }).then((upddata)=>{
        res.send(upddata)
    })
})

app.delete('/person/:id',(req,res)=>{
    todo.findOneAndRemove(
        {_id: req.params.id}
    ).then((removedlist)=>{
        res.send(removedlist)
    })
})

app.listen(3000, ()=>{
    console.log('server connected!')
})