require('dotenv').config()

let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', function (req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
    //res.send("Hello Express");
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
    let json = { "message": "Hello json" };
    if (process.env.MESSAGE_STYLE == "uppercase") {
        json = { "message": "HELLO JSON" };
    } 
    res.json(json);
})




























module.exports = app;
