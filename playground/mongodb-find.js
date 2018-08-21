const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  // .find({_id: new ObjectID('5b7bc974cd2b932754424e94')})
  // .toArray()
  // .then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  db.collection('Users')
  .find({name: 'Elgun'})
  .toArray()
  .then((docs) => {
    console.log(`Todos:`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch', err);
  });

  // db.close();
});
