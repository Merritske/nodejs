const baseURL = "https://jsonplaceholder.typicode.com"
const fetch = require('node-fetch')
let postId = process.argv[2]

//console.log(process.argv) 
// toont ['C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\VDAB\\nodejs\\tuto5\\index.js']
// loopt over de arry die je in terminal ingeeft
//process.argv[0] ->'C:\\Program Files\\nodejs\\node.exe'
//process.argv[1] -> 'C:\\Users\\VDAB\\nodejs\\tuto5\\index.js'
//process.argv[2]-> in terminal: node index.js Atilla 6 -> geeft 'you entered postID: Atilla en {}
//process.argv[3] -> in terminal: node index.js Atilla 6 -> geeft 'you entered postID:6 en object van indexnummer 6 van de posts

console.log(`You entered postID: ${postId}`)

fetch(`${baseURL}/posts/${postId}`)
.then(res=>res.json())
.then((data)=>{
    console.log(data)
})
//in console: "node index.js 5" => toont post van id 5


