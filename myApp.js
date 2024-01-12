require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

console.log("Hello World");

const currentHour = (req, res, next) => {
    req.time = new Date().toString();
    next();
};

app.get("/now", currentHour, (req, res) => {
    res.send({
        time: req.time
    });
});

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/', function (req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
    //res.send("Hello Express");
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
    let json = { "message": "Hello json" };
    if (process.env.MESSAGE_STYLE == "uppercase") {
        json = { "message": "HELLO JSON" };
    }
    res.json(json);
});

app.get('/:word/echo', function (req, res) {
    let json = { echo: req.params.word }
    res.json(json);
});

app.get('/name', function (req, res) {
    let json = { name: req.query.first + " " + req.query.last }
    res.send(json);
});

app.use(bodyParser.urlencoded({extended: false}));

























module.exports = app;
