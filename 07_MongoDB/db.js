const mongoose = require('mongoose');//This library let you create schemas.and schema is final structure of the database.
const Schema = mongoose.Schema;//Here mongoose define a class callled schema.
const ObjectId = mongoose.ObjectId;

//Using schema we define the structure in database how data goes in database.
const User = new Schema({
    email:String,
    password:String,
    name:String
})

const Todo = new Schema({ //When i am storing something to todo i also store userId i.e which user it belong to.
     title:String,
     done:Boolean,
     userId:ObjectId
})

//Mongoose.model says in which collection you want to insert the data.
//In this case we are putting the data into usrs collection.
//Basically this model let you insert the data in users collection{users,todos}.
//Here we are defining model.
const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);


//We are exporting this varibale so that we can import it to the index.js so we can call usermodel.insert function.
//and exporting this object functionallity to
module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}