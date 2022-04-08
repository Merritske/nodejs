const yargs = require('yargs')
const ytdl = require('ytdl-core')
const fs = require('fs');
const request = require('request');
var { sleep } = require('s1eep');

var LineByLineReader = require('linebyline')

const http = require('http')
const path = require('path')
const url = require('url')
//video bepalen

const options = yargs
    .usage(`Usage: --link <https://www.youtube.com/watch?v=_Qm6mCeDrhM>`)
    .options('link', { alias: 'link', describe: 'link to download video', demandOption: true })
    .argv;

// let getYouubeId = ytdl.getVideoID(options.link)
// //Qm6mCeDrhM
// console.log(getYouubeId)
// let info = ytdl.getInfo(getYouubeId)

// //info vinden over de video
// info.then(response=>{
//     console.log(response.formats[0])
//     //title van de video
//     console.log(response.videoDetails.title)
//     // info.pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
//  //vragen om de video op te halen
//     //de video downloaden op je computer = fs.createWriteStream()
//     request.get(response.formats[0].url)
//     .pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
// })

//     lr = LineByLineReader(`./${options.link}`);


// lr.on('line', function (line, lineCount, byteCount) {
// sleep(1000)
// console.log(line)
// let getYoutubeId = ytdl.getVideoID(line)//get youtubeid
// let info = ytdl.getInfo(getYoutubeId)
// console.log(getYoutubeId)
// info.then((response)=>{
//     console.log(response.formats[0])
//     //title van de video
//     console.log(response.videoDetails.title)
//     // info.pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
//  //vragen om de video op te halen
//     //de video downloaden op je computer = fs.createWriteStream()
//     request.get(response.formats[0].url)
//     .pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
// })

// });
// lr.on("error", function(err){
//     //something went wrong
// })


//trying to put in html
const directoryPath = path.join(__dirname, '.')
http.createServer(function (req, res){
res.writeHead(200, {"Content-Type":"text/html"});
res.end('<video src="./directoryPath" controls></video>')
       fs.readlink(url.pathToFileURL(directoryPath), function(){
           console.log("hello")
       })
    
}).listen(4005, function (){
    console.log("hei")
})



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
//     //listing all files using forEach

// });

