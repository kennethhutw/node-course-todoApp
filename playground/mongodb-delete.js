//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result) =>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result) =>{
  //   console.log(result);
  // });
  //Find one and delete
  // db.collection("Todos").findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name:'Kenneth'});

  db.collection('Users').findOneAndDelete({
    _id:new ObjectId("5913328031732e35f259ea4f")
  }).then((result) =>{
    console.log(JSON.stringify(results, undefined,2));
  })
  db.close();
});
