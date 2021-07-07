const socket = io()
const messagesContainer = document.getElementById('messages')
const form = document.getElementById('form')
const usersInput = document.getElementById('input')
const roomChange = document.getElementById('randomroom')

form.addEventListener('submit', e => {
    e.preventDefault()
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ''
    }
})

roomChange.addEventListener('click', () => {
    socket.emit('roomjoin')
    drawMessage('Joined Room')
})

socket.on('message', msg => {
    drawMessage(msg)
})

function drawMessage(msg) {
    const item = document.createElement('li')
    item.textContent = msg
    messagesContainer.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
}