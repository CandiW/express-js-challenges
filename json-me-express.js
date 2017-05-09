const express = require('express');
const fs = require('fs');
let app = express();

function converter(port,file){

    app.get('/books',function(req,resp){
        fs.readFile(file,function(err,info){
            if(err) {
                console.log("Error: " + err);
                resp.send(404);
            }
            else {
            info = JSON.parse(info);
            resp.send(info);
            }
        });
    });
    app.listen(port);

}

converter(process.argv[2],process.argv[3]);