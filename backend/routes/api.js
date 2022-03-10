const express = require('express')
const router = express.Router()

const todoActions = require('../actions/todoActions')

router.get('/', todoActions.saveToDo)

module.exports = router