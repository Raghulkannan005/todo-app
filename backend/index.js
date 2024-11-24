const express = require('express')

const app = express()
app.use(express.json())

app.get('/todos',function (req, res){

})

app.post('/todo',function (req, res){

})


app.post('/completed',function (req, res){

})

app.listen(3000, function(){
    console.log("Server is running on port 3000!")
})
