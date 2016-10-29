var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');

var bookselfConfig = require('./config/Bookself.js');
var loginController = require('./controller/login.js');



var app = express();




app.set('views', './views');
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(flash());





app.set('port', 3000);
app.use('/', loginController);
app.post('/login', function (req, res, next) {

});


var http = require("http");
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});