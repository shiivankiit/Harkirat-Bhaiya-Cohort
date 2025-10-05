const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email:String,
    password:String,
    name:String
})

const Todo = new Schema({
     title:String,
     done:Boolean,
     userId:ObjectId
})

//Mongoose.model says in which collection you want to insert the data.
//In this case we are putting the data into usrs collection.
//Basically this model let you insert the data in users collection{users,todos}.

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);


//We are exporting this varibale so that we can import it to the index.js so we can call usermodel.insert function.
//and exporting this object functionallity to
module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}