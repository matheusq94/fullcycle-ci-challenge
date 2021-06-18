const express = require('express')

const app = express()
app.disable("x-powered-by");

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World!'
    })
})

module.exports = app