require('./configs/database')
const express = require('express')
const todoRouter = require('./routes/todo')
const app = express()
const test = require('./middlewares/response_formater')
const cors = require('cors')

// Enable CORS
app.use(cors());

app.use(express.json())


app.get('/',(req,res) => {
    console.log('app started')
    res.json({
        message:'This should work'
    })
})

app.use('/todo/',todoRouter)


app.listen(3001,()=> {
    console.log('app is start on port 3001')
})
