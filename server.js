var express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// let newData = ''
// const callback = (err, data) => {
//     if (err) throw err

//     data = JSON.parse(data)
//     newData = data
// }

// // Getting my data from a JSON file
// const getData = () => {
//     fs.readFile('data.json', callback)
// }
// getData()
// console.log(newData)

// console.log('~~~~~~~~~~~~~')
// getData((res)=>{
//     console.log('This is the res' , res)
// })
// console.log(getData((res) => {
//     return res
// }))


const getDataFile = (file) => {
    return new Promise((resolve, reject) =>{
        fs.readFile('data.json', (err, data) =>{
            if(err) reject(err)
            console.log('here',data, data.toString());
            data = JSON.parse(data.toString())
            // resolve(data)
        })
    })
}



// GET /api/todos
app.get('/api/todos', (req, res, nextFn) => {
    console.log('Someone called the GET /api/todos')
    getDataFile('data.json')
    .then((data) =>{
        res.json(data.todoList)
    })
})






// GET /api/todos/:id
app.get('/api/todos/:id', (req, res, nextFn) => {
    console.log(req.params.id)
    console.log(typeof (req.params.id))
    let id = req.params.id

    getDataFile('data.json')
        .then((data)=>{
            if(data.todoList.userId[id]){
                res.json(data.todoList.userId[id])
            }
            else
            res.send('failed')
        })
    
})





// POST /api/todos
app.post('/api/todos', (req, res, nextFn) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('This should be req.body', req.body)
    getDataFile('data.json')
        .then((data) =>{
            let ifNum = true
            let id = 1
            while (ifNum) {
                if(data.todoList.userId[id])
                    id++
                else
                    ifNum = false
            }
            console.log('This is data.json', data.todoList.userId)
            let todoList = data.todoList.userId
            todoList[id] = req.body
            // jsonData = JSON.stringify(data)
            console.log(jsonData)
            res.send({
                succes: 'true'
            })

        })
    

})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res, nextFn) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(req.params)
    let id = req.params.id
    if (todoList[id]) {
        todoList[id] = req.body
    }
    res.json({
        succes: 'true'
    })
    console.log(todoList)
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res, nextFn) => {
    delete todoList[req.params.id]
    res.json({
        delete: 'true'
    })
})

app.listen(3000, function () {
    console.log('Todo List API is now listening on port 3000...');
})