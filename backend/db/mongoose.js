const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ToDo', {useNewUrlParser : true}).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log('There was an error !')
    console.log(err)
})

module.exports = mongoose