var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('./administrator.html', function(err, data){
           res.write(data);
    res.end();
    })
   // res.writeHead(200,{'content-type': 'text/html'});

}).listen(3000);

myDateTime = function (){
    return Date();
};
