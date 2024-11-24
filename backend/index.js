const express = require('express')
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')

const app = express()
app.use(express.json())

app.post('/todo', async function (req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent the wrong input"
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : createPayload.completed
    })
    res.json({
        msg : "Todo created successfully"
    })
})

app.get('/todos', async function (req, res){

    const todos = await todo.find({})
    res.json({
        todos : todos.map((todo) => {
            return {
                title : todo.title,
                description : todo.description,
                completed : todo.completed
            }
        })
    })

})

app.post('/completed', async function (req, res){
    const updatePayload = req.body
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayLoad.success){
        res.status(411).json({
            msg : "you have sent the wrong id"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })

})

app.listen(3000, function(){
    console.log("Server is running on port 3000!")
})
