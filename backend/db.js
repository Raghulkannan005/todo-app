const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Raghulkannan:9YKCgT4H3OvgzFQS@personal.nhtmd.mongodb.net/?retryWrites=true&w=majority&appName=Personal/todo")



const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}