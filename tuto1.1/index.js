console.log("hello node")
var a = 4
var b = 5
console.log(`de som van ${a} en ${b} is ${a + b}`)

import { createServer } from 'http'
import fetch from 'node-fetch'
createServer(function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => {
            // console.log(req.rawHeaders)
            res.write(`<h1>Hallo ${data.name}</h1>`)
            res.end()

        })
//    res.write(`
//        <h1 style='color:red;'>evenementenplanner</h1>`)
//     res.end()
}).listen(3000, () => {
    console.log("server is running")
})
