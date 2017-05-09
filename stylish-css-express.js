const express = require('express');
const path = require('path');
const stylus = require('stylus');
let app = express();

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname,"public")));

app.listen(process.argv[2]);