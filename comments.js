// create web server 
// create a request handler
// create a response handler
// create a request listener
// create a response listener
// create a server listener
// create a server

// create a server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname
    if(pathname == '/'){
        // read index.html
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if(pathname == '/post'){
        var postData = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk){
            postData += chunk;
        });
        req.on('end', function(){
            var comment = qs.parse(postData);
            comments.push(comment);
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
    } else if(pathname == '/comment'){
        var data = JSON.stringify(comments);
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(data);
        res.end();
    } else {
        var ext = path.extname(pathname);
        var type = 'text/html';
        switch(ext){
            case '.js':
                type = 'text/javascript';
                break;
            case '.css':
                type = 'text/css';
                break;
            case '.png':
                type = 'image/png';
                break;
            default:
                type = 'text/html';
                break;
        }
        fs.readFile('.' + pathname, function(err, data){
            res.writeHead(200, {'Content-Type': type});
            res.write(data);
            res.end();
        });
    }
});
server.listen(3000);
console.log('Server started on localhost:3000');