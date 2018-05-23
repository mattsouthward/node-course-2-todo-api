var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // Tell mongoose to use builtin Promise lib
mongoose.connect('mongodb://localhost:27017/TodoApp');  // Connect to database

module.exports = {mongoose};
