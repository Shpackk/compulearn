const socket = io()
const messagesContainer = document.getElementById('messages')
const form = document.getElementById('form')
const usersInput = document.getElementById('input')

form.addEventListener('submit', e => {
    e.preventDefault()
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ''
    }
})

socket.on('message', msg => {
    const item = document.createElement('li')
    item.textContent = msg
    messagesContainer.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})