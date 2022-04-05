//filesystem in node.js core module > dus niets installeren nodig

const fs = require('fs')
const fetch = require('node-fetch')

//read a file
// fs.readFile('./readme.txt', 'utf-8', (err, result)=>{
// console.log(result)
// })

// //write a file
// fs.writeFile('dontreadme.txt', 'this is a test', "utf-8", (err)=>{
//     console.log('saved')
// })
//write json file
// let student = {id:1, name:"Micheal Jackson"}
// fs.writeFile('student.json', JSON.stringify(student), "utf-8", (err)=>{
//     console.log("saved")
// })
////write file
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res=>res.json()
// .then((data)=>{
//     console.log(data)
//     //here we need to save that data
//     fs.writeFile('posts.json', JSON.stringify(data), 'utf-8', (err)=>{
//         console.log("data is saved")
//     })
// }))
////iets toevoegen aan een file
// fs.appendFile('readme.txt', `/nExtra info`, "utf-8", (err)=>{
//     console.log("data is appended")
// })
////delte file
// fs.unlink('readme.txt', (err)=>{
//     console.log('file is deleted')
// })

//step 1: read file
//step2 change data
//step 3 re-append data
//add a new file
 fs.writeFile('readme.txt', 'THIS IS A TEST', "utf-8", (err, result)=>{
    console.log(result)
})
//read the file
fs.readFile('readme.txt', "utf-8", (err, result)=>{
    console.log(result)
    //change the data
    let newData = result.toLowerCase(); ///hold new data
    //write the data
fs.writeFile('readme.txt', JSON.stringify(newData), (err)=>{
    console.log('file is updated')
})
})
