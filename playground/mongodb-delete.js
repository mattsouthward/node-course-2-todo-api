// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Change oil in Toyota'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Change oil in Chevy'}).then((result) => {
  //   console.log(result);
  // })
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Matt'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b046dd05ba80b64c5e75d5e')}).then((result) => {
    console.log(result);
  });

  // db.close();
});
