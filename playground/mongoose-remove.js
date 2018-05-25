const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

var id = '5b075351ff375fb0f18b638e';

// Removes all docs
Todo.remove({}).then((result) => {
  console.log(result);
}); 

// Remove by id
Todo.findByIdAndRemove(id).then((result) => {
  console.log(result);
});