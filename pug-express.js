const express = require('express');
const path = require('path');
let app = express();

function myApp(port,file){

    app.get('/home',function(req,res){
        app.set('views',path.join(__dirname,file));
        app.set('view engine','pug');
        res.render(file,{ date: new Date().toDateString() });
    });
    app.listen(port);

}
myApp(process.argv[2],process.argv[3]);