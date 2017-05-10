//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//  db.collection('Todos').findOneAndUpdate(
//    {
//       _id :new ObjectID("5913340f31732e35f259ea51")
//     },
//   {
//     $set:{completed:true}
//   },{
//     returnOriginal:false
//   }
// ).then((result) =>{
//   console.log(result);
// });
db.collection('Users').findOneAndUpdate(
  {
     _id :new ObjectID("5913328031732e35f259ea4f")
   },
 {
   $set:{name:'Allen'},$inc:{age:1}
 },{
   returnOriginal:false
 }
).then((result) =>{
 console.log(result);
});
  db.close();
});
