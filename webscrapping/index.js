const fetch = require('node-fetch')
const htmlParser = require('htmlparser2')
const cheerio = require('cheerio')
const fs = require('fs')

//install nodejs: npm init -y 
//install cheerio : npm i cheerio
//install htmlparser2 : npm i hetmlparser2
//install node-fetch : npm install node-fetch@2


fetch('https://www.vrt.be/vrtnws/nl/')
.then(res=>res.text())
.then((data)=>{
    const dom = htmlParser.parseDocument(data)
    const $= cheerio.load(dom)
    var news = ($('.vrt-teaser__title-text').first().text())
    console.log($('.vrt-teaser__title-text').first().text())
    fs.writeFile('vrtNews.txt', JSON.stringify(news) , "utf-8", (err)=>{
console.log("result saved")
} )
})
