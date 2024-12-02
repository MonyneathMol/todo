
const mongoose = require('mongoose')

const scheme = mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        isCheck:{
            type:Boolean,
            require:true,
            default:false,
        },
        dateTime:{
            type:Date,
            default:Date.now
        }
    }
)

const Todo = mongoose.model('todos',scheme)
module.exports = Todo
