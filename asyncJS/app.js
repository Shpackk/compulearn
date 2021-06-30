// ============= using async|await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await response.json()
//         console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
// }
// fetchData()

// ============ using promises
const p = new Promise((resolve, reject) => {
    resolve(fetch('https://jsonplaceholder.typicode.com/todos'))
})

p.then(response => {
    return new Promise((resolve, reject) => {
        const data = response.json()
        resolve(data)
    })
}).then(data => {
    console.log(data)
}).catch(err => {
    console.error(err)
})