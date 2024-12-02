const express = require('express')
const todoController = require('../controllers/todo_controller')

const router = express.Router()
router.route('/').get(todoController.getAllTodo).post(todoController.postTodo)
router.put('/:id',todoController.upDateTodo)

module.exports = router