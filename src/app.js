const express = require('express')

const app = express()

app.use(express.json())

app.get('/', () => {
    return res.status(200).json({
        message: 'Hello World!'
    })
})

module.exports = app
// docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash