var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // Tell mongoose to use builtin Promise lib
mongoose.connect(process.env.MONGODB_URI);  // Connect to database

module.exports = {mongoose};
