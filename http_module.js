var http = require('http');

/*
http.createServer(function (req, res){
    res.write('Hello World!'); // write a response to the client
    res.end(); // end the response

}).listen(8080); // the server object listens on port 8080


///////////


http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});  // Http Header. first argument is status code, second argument is object containing response headers
    res.write(req.url); //read query string write a response to the client with url part after domain name
    res.end(); // end the response

}).listen(8080); // the server object listens on port 8080
*/

//////////


// same as above but query string is split 

var url = require('url');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});  // Http Header. first argument is status code, second argument is object containing response headers
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt); // end the response

}).listen(8080); // the server object listens on port 8080


