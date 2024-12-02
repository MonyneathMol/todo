
require('./configs/database')
const express = require('express')
const todoRouter = require('./routes/todo')
const authRouter = require('./routes/auth')
const authMiddleware = require('./middlewares/auth')
const app = express()


// const test = require('./middlewares/response_formater')
const cors = require('cors')

// Enable CORS
app.use(cors());

app.use(express.json())

app.use('/auth/',authRouter)

app.get('/',(req,res) => {
    console.log('app started')
    res.json({
        message:'This should work'
    })
})

app.get('/profile',authMiddleware,(req, res) => {
    res.json({ message: `Welcome, ${req.user.username}!`, id: `${req.user.id}` });
})

app.use('/todo/',todoRouter)



app.listen(3001,()=> {
    console.log('app is start on port 3001')
})
