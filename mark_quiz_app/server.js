var express = require('express')
var app = express()
const http = require('http')
const path = require('path')
const PORT = process.env.PORT || 8080

const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')))

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

