const http = require('http')
const Sum = require("./modules/Sum")
const sayhello = require('./modules/sayhello')

http.createServer(function(req,res){
res.writeHead(200, {'Content-type': 'text/html'})
res.write('<h>Say hello</h1>')
res.end()
}).listen(8080,function(){
    console.log("server is running")
})
