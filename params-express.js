const express = require('express');
const crypto = require('crypto');
let app = express();

app.put('/message/:id',function(req,resp){
    let id = req.params.id;
    resp.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.listen(process.argv[2]);