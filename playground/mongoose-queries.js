const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = "591333f931732e35f259ea50";

Todo.find({
	_id:id
}).then((Todos) =>{
	console.log('Todos',Todos);
});

Todo.findOne({
	_id:id
}).then((Todos) =>{
	console.log('Todo',Todos);
});




