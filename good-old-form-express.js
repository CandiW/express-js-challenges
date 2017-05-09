const express = require('express');
const bodyparser = require('body-parser');
let app = express();

let encoder = app.use(bodyparser.urlencoded({extended: false}));

app.post('/form',function(req,resp){
    let reverse = req.body["str"].split('').reverse();
    resp.send(reverse.join(""));
});

app.listen(process.argv[2]);