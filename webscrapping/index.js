const fetch = require('node-fetch')
const htmlParser = require('htmlparser2')
const cheerio = require('cheerio')
const fs = require('fs')
const http = require('http')


//install nodejs: npm init -y 
//install cheerio : npm i cheerio
//install htmlparser2 : npm i hetmlparser2
//install node-fetch : npm install node-fetch@2


fs.readFile('vrtNews.txt', 'utf-8', (err, result)=>{
result = result.slice(1, result.length-1);
http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/html"})
    res.write( `<h1>${result}. </h1> `)
    res.end()
}).listen(8000, function(){
    console.log("server is running")
})
console.log(result.slice(1, result.length-1))
})




fetch('https://www.vrt.be/vrtnws/nl/')
.then(res=>res.text())
.then((data)=>{
    const dom = htmlParser.parseDocument(data)
    const $= cheerio.load(dom)
    var news = ($('.vrt-teaser__title-text').first().text())
    //console.log($('.vrt-teaser__title-text').first().text())
    fs.writeFile('vrtNews.txt', JSON.stringify(news) , "utf-8", (err)=>{
console.log("result saved")
} )
})
