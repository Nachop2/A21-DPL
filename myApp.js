let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', function (req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
    //res.send("Hello Express");
})
































module.exports = app;
