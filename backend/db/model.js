const mongoose = require('mongoose')

const ToDo = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name : String,
    age : String,
    gender: String,
    phone: String
})

const todo = mongoose.model('todo',ToDo)

module.exports = todo 