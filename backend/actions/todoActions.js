const ToDo = require('../db/models/todo')

class todoActions {
    saveToDo(req, res) {
        const newTodo = new ToDo({
            title: 'Develop a new feature'
        })

        newTodo.save().then(() => {
            console.log('oK!')
        })

        res.send('oK')
    }
}

module.exports = new todoActions()