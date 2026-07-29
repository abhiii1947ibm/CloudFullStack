// ------------ Handling URL's in NodeJS -------------

const http = require("http");  // built-in modules
const fs = require("fs");
const url = require("url");



const myServer = http.createServer((req, res) => {  // createServer takes a callback function (req,res)
    
    // console.log(req);
    // console.log("New request received.");

    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received.\n`;
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    fs.appendFile("./log.txt", log, (err,data) => {
        switch(myUrl.pathname){
            case '/':
                if(req.method === 'GET') res.end("HomePage.");
                break;
            case '/about':
                const username = myUrl.query.username;
                const name = myUrl.query.myname;
                res.end(`Hi ${name}, Tis is about page and your username is ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`This is search page and here are your results for ${search}.`);
                break;
            case '/contact':
                res.end("this is contact page.");
                break;
            case '/signup':
                if(req.method === 'GET') res.end("This is a signup form.");
                else if(req.method === 'POST') {
                    res.end('Success');
                }
                break;
            default: 
                res.end("404 Not found");
        }
    });
});

myServer.listen(8000, () => {
    console.log("Server Started!");
});

