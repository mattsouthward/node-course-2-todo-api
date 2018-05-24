const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

// var id = '5b05d9929242768d04d93f2511';

var id = '5b05880da9cc7d7ae99aec7b';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }, 'text').then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id, 'text __v').then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   // console.log(e);
// });

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log(user);
}, (e) => {
  console.log(e);
});