const express = require('express');
const path = require('path');
let app = express();

function myApp(port,file){

    app.use(express.static(file || path.join(__dirname, 'public')));
    app.listen(port);

}

myApp(process.argv[2],process.argv[3]);