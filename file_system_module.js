var fs = require('fs');
const { runInNewContext } = require('vm');

///////////////// for CRUD operations: create, read, update and delete files


// Read files
var http = require('http');
http.createServer(function (req, res){
    fs.readFile('demofile1.html', function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);


/* ////// Create files
Files system has methods for creating files:
fs.appendFile(); //// The method appends specified content to a file. If the file does not exist, the file will be created. Also updates

fs.open(); ////  The method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
If the file does not exist, an empty file is created

fs.writeFile();
///////////////////////

Delete files
fs.unlink();

Rename files
fs.rename();
*/



