var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var bookself = require('./config/Bookself.js');
var app = express();


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/admin', function (req, res) {
    res.render('admin.html');
});
app.get('/public', function (req, res) {
    res.render('public.html');
});
app.get('/public/getSalary', function (req, res) {

});
app.get('/admin/getDate', function (req, res) {

});
app.post('/admin/sendPayment', function (req, res, done) {

});
app.post('/admin/exit', function (req, res, done) {

});
app.post('/admin/addWorker', function (req, res, done) {

});
app.post('/admin/modifyWorker', function (req, res, done) {

});
app.post('/admin/deleteWorker', function (req, res, done) {

});
app.post('/login', function (req, res, done) {
    res.send("Login request");
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.type);

});
app.post("/public/addDate", function (req, res, done) {

});
app.post("/public/modifyDate", function (req, res, done) {

});
app.post("/public/modifyAccountData", function (req, res, done) {

});
app.post('public/exit', function (req, res, done) {

});

var http = require("http");
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
