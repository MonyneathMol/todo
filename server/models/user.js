
const mongoose = require('mongoose')

const scheme = mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        isActive:{
            type:Boolean,
            default:true
        },
    }, { timestamps: true } )

const User = mongoose.model('users',scheme)
module.exports = User