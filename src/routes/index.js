const express = require('express')
const router = express.Router()

const {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todo')

router.get('/todos', getTodos)
router.get('/todos/:id', getTodo)
router.post('/todos', addTodo)
router.patch('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router