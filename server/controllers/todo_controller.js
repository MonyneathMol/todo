const Todo = require('../models/todos')
exports.getAllTodo = async (req,res)=> {

    const todos = await Todo.find()

    console.log('THIS SHOULD LIST ALL TODO')
    return res.json({
        message:'This this should list all todo',
        data:todos
    })
}

exports.getPostById = async (req,res) => {
    try{
        const {id} = req.params
        if (id === undefined) {
            throw new Error('ID not found')
        }

        const todo = await Todo.findById(id)
        return {
            'message':'Success',
            'data':todo
        }
    }catch(e) {

    }
}

exports.postTodo = async (req,res) => {
    try{
        const {name} = req.body;
        const todo = await Todo.create({name:name});
        console.log(`THIS SHOULD PERFORM POST TOD `,name)
    res.status(201).json({
        message:`result=${name}`
    })
    }catch(e) {
        res.status(500).json({
            message:'errorRes'
        })
        console.log('something is wrong',e)
    }
    
}

exports.upDateTodo = async (req,res) => {

    
    try{
        const {id} = req.params;
        const {name, isCheck} = req.body;
        console.log('PROCESS UPDATE TODO',req.body)
        const todo = await Todo.findById(id)
        if (todo === undefined) {
            return new Error('Todo Not found')
        }

        if (name !== undefined) {
            todo.name = name
        }

        if (isCheck !== undefined) {
            todo.isCheck = isCheck
        }

        console.log('UPDATE TODO',todo)

        await todo.save();

        return res.status(200).json({
            message:'success',
            data: todo
        })

    }catch(e){
        return res.status(404).json({
            message:`error occure ${e}`,

        })
    }
}