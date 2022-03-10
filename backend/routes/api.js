const express = require('express')
const router = express.Router()

const todoActions = require('../actions/todoActions')


router.get('/todos', todoActions.getAllToDos)
router.get('/todos/:id', todoActions.getToDo)
router.post('/todos', todoActions.saveToDo)
router.put('/todos/:id', todoActions.editToDo)
router.delete('/todos/:id', todoActions.deleteToDo)

module.exports = router