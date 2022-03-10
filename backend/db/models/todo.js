const mongoose = require('mongoose')

const ToDo = mongoose.model('ToDo', {
    title: String
})

module.exports = ToDo