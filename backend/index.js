const express = require('express')
const app = express()
const { port } = require('./config')

// db
require('./db/mongoose')

//  routes
const apiRouter = require('./routes/api')

app.use('/', apiRouter)


app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}...`)
})