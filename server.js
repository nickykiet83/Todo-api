var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
    id: 1,
    description: 'get lunch with mom',
    completed: false
}, {
    id: 2,
    description: 'go to market',
    completed: false
}, {
    id: 3,
    description: 'go to coffee with friends',
    completed: true
}];

// GET /todos
app.get('/todos', function (req, res){
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    
    todos.forEach(function(todo){
        if(todoId === todo.id){
            matchedTodo = todo;
        }
    });
    if(matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }
    
});

//root address
app.get('/', function (req, res){
    res.send('Todo API Root'); 
});

app.listen(PORT, function(){
    console.log('Express listening on port' + PORT + '!');
}); 