const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const PORT = process.env.PORT || 3000

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        if (socket.room) {
            io.to(socket.room).emit('message', msg)
        } else {
            io.emit('message', msg);
        }
    });
    socket.on('roomjoin', () => {
        const room = 'room'
        socket.room = room
        socket.join(room)
    })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})