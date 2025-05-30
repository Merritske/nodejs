var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('')
   // res.writeHead(200,{'content-type': 'text/html'});
   res.write("the date and time: " + myDateTime())
    res.end()
}).listen(3000);

myDateTime = function (){
    return Date();
};
