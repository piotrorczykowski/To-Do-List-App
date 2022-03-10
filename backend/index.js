const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')

// db
require('./db/mongoose')

//parsers
app.use(bodyParser.json())

//  routes
app.use('/', apiRouter)

// server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}...`)
})