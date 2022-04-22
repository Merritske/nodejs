const mongoose = require('mongoose')

 mongoose.connect('mongodb+srv://admin:AdminFront.22@cluster0.8ady5.mongodb.net/Users?retryWrites=true&w=majority', function(){
    console.log('connected')
})


//hoe ziet de data eruit
const schema = new mongoose.Schema({
    user : Number,
    name: String,
    password: String,
    email: String,
})
//variabele maken om nieuwe gegevens in database te kunnen opslaan
const users = mongoose.model('Users', schema)
//nieuwe data maken en opslaan
const user = new users({
    user : 1,
    name : "An",
    password: "1234",
    email : "makadam@maka.com"
}).save() //save object in mongoDB

console.log(users.find({}))