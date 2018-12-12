var express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const todoList = [
//     {
//         id: 1,
//         todo: "Implement a REST API"
//     }
// ]

const todoList = {
    1: {
        todo: 'implement a rest api'
    },

}

// GET /api/todos
app.get('/api/todos', (req, res, nextFn) =>{
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    res.json(todoList)
})


// GET /api/todos/:id
app.get('/api/todos/:id', (req, res, nextFn) =>{
    console.log(req.params.id)
    console.log(typeof(req.params.id))
    let id = req.params.id
    if(todoList[id])
    res.send(todoList[id])
})





// POST /api/todos
app.post('/api/todos', (req, res, nextFn) =>{
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('This should be req.body', req.body)
    // todoList.push({id: todoList.length+1, todo:req.body.todo})
    let ifNum = true
    let id = 1
    while(ifNum){
        if(todoList[id]){
            id++
        }else{
            ifNum = false
        }
    }
    todoList[id] = req.body
    res.send({succes: 'true'})
    console.log(todoList)
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res, nextFn) =>{
    console.log('~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(req.params)
    let id = req.params.id
    if(todoList[id]){
    todoList[id] = req.body
    }
    res.json({succes: 'true'})
    console.log(todoList)
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res, nextFn) =>{
    delete todoList[req.params.id]
    res.json({delete: 'true'})
})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})