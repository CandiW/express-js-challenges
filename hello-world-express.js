const express = require('express');
let app = express();

function myApp(port){
    app.get('/home',function(req,res){
        res.end('Hello World!');
    });
    app.listen(port);
}

myApp(process.argv[2]);