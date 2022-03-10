const ToDo = require('../db/models/todo')

class todoActions {
    getAllToDos(req, res) {
        res.send('get all ok')
    }

    getToDo(req, res) {
        const id = req.params.id
        res.send(`get one ok, id: ${id}`)
    }

    saveToDo(req, res) {
        const title = req.body.title
        res.send(`save ok, title: ${title}`)
    }

    editToDo(req, res) {
        const id = req.params.id
        res.send(`edit ok, id: ${id}`)
    }
    
    deleteToDo(req, res) {
        const id = req.params.id
        res.send(`delete ok, id: ${id}`)
    }
}

module.exports = new todoActions()