const yargs = require('yargs')
const ytdl = require('ytdl-core')
const fs = require('fs');
const request = require('request');
var { sleep } = require('s1eep');

var LineByLineReader = require('linebyline')

const http = require('http')
const path = require('path')
const url = require('url')

var formidable = require('formidable');

//video bepalen

const options = yargs
    .usage(`Usage: --link <https://www.youtube.com/watch?v=_Qm6mCeDrhM>`)
    .options('link', { alias: 'link', describe: 'link to download video', demandOption: true })
    .argv;

let getYouubeId = ytdl.getVideoID(options.link)
//Qm6mCeDrhM
console.log(getYouubeId)
let info = ytdl.getInfo(getYouubeId)

//info vinden over de video
info.then(response=>{
    console.log(response.formats[0])
    //title van de video
    console.log(response.videoDetails.title)
    // info.pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
 //vragen om de video op te halen
    //de video downloaden op je computer = fs.createWriteStream()
    request.get(response.formats[0].url)
    .pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
})

    lr = LineByLineReader(`./${options.link}`);


lr.on('line', function (line, lineCount, byteCount) {
sleep(1000)
console.log(line)
let getYoutubeId = ytdl.getVideoID(line)//get youtubeid
let info = ytdl.getInfo(getYoutubeId)
console.log(getYoutubeId)
info.then((response)=>{
    console.log(response.formats[0])
    //title van de video
    console.log(response.videoDetails.title)
    // info.pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
 //vragen om de video op te halen
    //de video downloaden op je computer = fs.createWriteStream()
    request.get(response.formats[0].url)
    .pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
})

});
lr.on("error", function(err){
    //something went wrong
})

//WERKT NIET
     
//  fs.readFile("links.txt", "utf-8", (err, response)=>{
// let all = []
// all = [...all, response]
// console.log(all)
//    http.createServer(function(req,res){  
//            res.writeHead(200, {"Content-Type": "text/html"}) 
//   all.map((result)=>{ 
      
//    res.write(
//      `<video width='320' height='240' controls crossOrigin><source src="${result}" type="video/mp4" ></video>`
//  )
//    })
//    res.end()

// } ).listen(8080, function(){
//         console.log("play song")
  
//   })
//res.write("hello")
    // <video width="320" height="240" controls><source src ="$encodeURIComponent{vid}.mp4"></video>`

  // })
//    res.write("")
//    res.write(``)
//    res.write("") 






//trying to put in html
//WERKT NIET
// const directoryPath = path.join(__dirname, '.')
// let x = 
// console.log(directoryPath)
//              http.createServer(function (req, res){
//                  console.log(res)
// //                 fs.readlink(url.pathToFileURL(directoryPath), function(err, directoryPath){
        
   
// // res.writeHead(200, {"Content-Type":"text/html"});
// // res.write('<video src="./directoryPath/Tom Petty And The Heartbreakers - Learning To Fly(Version1).mp4" controls></video>')
// //            res.end()  
// //               if(err){
// //              return console.log("unable to scan")
// //          }
// //    })

   
   
// }).listen(4005, function (){
//     console.log("hei")      }
//        )

//        const directoryPath = path.join(__dirname, '.\\');
    
// let fileName = []
//  fs.readdir(directoryPath, function (err, files) {

//      files.map((file)=>{
//            if(file.includes(".mp4")){
//           // console.log(file)
// fileName.push(file)
//      }
//      })
   
//   http.createServer(function(req, res){

//  res.writeHead(200, {'Content-Type': 'text/html', 'Accept-Ranges': "bytes"});

//  fileName.map((vid)=>{
//   let video = directoryPath+vid
//   res.write("<iframe>")
// //res.write(`<video width="320" height="240" controls> `)
// res.write(`<source src="${video}" type="video/mp4">`)
// res.write(`</video>`)
// res.write("</iframe>")
//  })
//  res.end()


// }).listen(8080, function(){
//      console.log('play')
//   })
//   })


    

// const directoryPath = path.join(__dirname, '.');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     http.createServer(function (req, res) {
//               res.writeHead(200, { 'Content-Type': 'text/html', "Accept-Ranges": "bytes" })
              
//         files.forEach(function (file) {
//             // Do whatever you want to do with the file

//             if (file.includes(".mp4")) {
//                 let absolutePath = path.resolve(`./${file}`)
//                 console.log(file)
          
//                 res.write(`<h1>hello</h1><video width="320" height="240" controls>
// <source src="${absolutePath}" type="video/mp4"></video>`)
// console.log(absolutePath)
//             }
//         });
//         res.end()
//     }).listen(4005, function () {
//         console.log('reg')
//     })


// });

