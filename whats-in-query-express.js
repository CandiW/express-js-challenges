const express = require('express');
let app = express();

function queryExtractor(port){

    app.get('/search',function(req,resp){
        resp.send(req.query);
    });
    app.listen(port);

}

queryExtractor(process.argv[2]);