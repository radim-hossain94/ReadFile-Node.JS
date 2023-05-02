let fs = require('fs');
let http = require('http');


let server = http.createServer((req, res)=>{
    if(req.url == "/"){
        fs.readFile('./public/home.html', (error,data)=>{
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(data);
            res.end();
        })

    }
    else if (req.url == "/about"){
        fs.readFile('./public/about.html', (error, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == "/contact"){
        fs.readFile('./public/contact.html', (error, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == "/service"){
        fs.readFile('./public/service.html', (error, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else{
        fs.readFile('./public/404.html', (error, data)=>{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});