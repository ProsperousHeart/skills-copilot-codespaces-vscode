// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer(function(req, res){
  const urlObj = url.parse(req.url);
  const urlPathName = urlObj.pathname;
  const filePath = path.join(__dirname, urlPathName);
  console.log(filePath);
  fs.readFile(filePath, 'utf8', function(err, data){
    if(err){
      res.statusCode = 404;
      res.end('Not Found');
    }else{
      res.end(data);
    }
  });
});

server.listen(8080, function(){
  console.log('Server is running on http://localhost:8080');
});