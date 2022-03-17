const ToDo = require('../db/models/todo')

class todoActions {
    async getAllToDos(req, res) {
        try {
            const doc = await ToDo.find({})
            res.status(200).send(doc)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async getToDo(req, res) {
        const id = req.params.id
        try {
            const todo = await ToDo.findOne({ _id: id})
            res.status(200).send(todo)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async saveToDo(req, res) {
        const title = req.body.title

        try {
            const newToDo = new ToDo({
                title: title,
                done: false
            })
            await newToDo.save()
            res.status(201).send(newToDo)
        } catch (err) {
            res.status(422).json({ message: err.message })
        }
    }

    async editToDo(req, res) {
        const id = req.params.id
        const title = req.body.title
        const done = req.body.done

        try {
            const toDo = await ToDo.findOne({ _id: id })
            toDo.title = title
            toDo.done = done
            await toDo.save() 
    
            res.status(201).send(toDo)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
    
    async deleteToDo(req, res) {
        const id = req.params.id

        try {
            await ToDo.deleteOne({ _id: id })
            res.sendStatus(204)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = new todoActions()