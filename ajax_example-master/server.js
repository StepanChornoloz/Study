const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const routes = require('./routes/index');
const comments = require('./routes/comments');
const list = require('./routes/list');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "Access-Control-Allow-Methods,  DELETE, PUT, POST, GET");
    next();
});

app.use('/', routes);
app.use('/comments', comments);
app.use('/list', list);

const appPort = process.env.PORT || 4001;
const server = app.listen(appPort, function () {
    const host = server.address().address;

    console.log(`Example app listening at ${host + appPort}`);
});
