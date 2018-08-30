const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8810c9f3712e49245b448711';
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log(todo);
// }).catch((e) => console.log(e));

// var id2 = '5b8816745f372f86f6561ee5';
//
// User.findById(id2).then((user) => {
//   if (!user) {
//     return console.log('User not found');
//   }
//   console.log(user);
// }).catch((e) => console.log(e));
