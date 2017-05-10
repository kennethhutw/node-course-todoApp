//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find({_id:new ObjectID('5911f158974d5a1a2c897720')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined,2));
  },(err) =>{
    console.log('Unable to fetch todos',err);
  });
  db.close();
});