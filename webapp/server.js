var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var admin = require('./dao/AdminDao.js');
var worker = require('./dao/PublicDao.js');
var login = require('./dao/LoginDao.js');
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

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy(
    function(username, password, done) {
        login.findUser({username : username, password : password}, '', function(res) {
            if(res) {
                return done(null, user);
            }
        });
    }
));


app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/admin', function (req, res) {
    res.render('admin.html');
});
app.get('/public', function (req, res) {
    res.render('public.html');
});
app.post('/login', function (req, res) {
    var temp = login.findUser(req, res);
    console.log(temp);
});
app.post('/redirect', function (req, res) {
    console.log(req);
    if(req.body.type == 'Alkalmazott') {
        res.redirect('localhost:3000/public');
    } else {
        res.redirect('localhost:3000/admin');
    }
});
app.post('/admin/getWorkerByID', function (req, res) {
   admin.getWorkerById(req, res);
});
app.post('/admin/sendPayment', function (req, res, done) {

});
app.post('/admin/addSalaryCategory', function (req, res) {
    admin.addSalaryCategory(req, res);
});
app.post('/admin/exit', function (req, res, done) {

});
app.post('/admin/addWorker', function (req, res) {
    admin.addNewWorker(req.body, req, res);
});
app.post('/admin/modifyWorker', function (req, res) {
    admin.modifyWorker(req, res);
});
app.post('/admin/getAllSalary', function (req, res) {
    admin.getAllSalary(req, res);
});
app.post('/admin/getAllTimeTable', function (req, res) {
    admin.getAllTimeTable(req, res);
});
app.post('/admin/getAllWorker', function (req, res) {
    admin.getAllWorkers(req, res);
});
app.post('/admin/deleteWorker', function (req, res) {
    admin.deleteWorker(req, res);
});
app.post('/public/addDate', function (req, res) {
    worker.addDate(req, res);
});
app.post("/public/modifyDate", function (req, res) {
    worker.modifyHours(req, res);
});
app.post("/public/getAccountData", function (req, res) {
    worker.getAccountData(req, res);
});
app.post('/public/modifyAccountData', function (req, res) {
    worker.modifyAccountData(req, res);
});
app.post('/public/getWorkerData', function (req, res) {
    worker.getWorkerData(req, res);
});
app.post('public/exit', function (req, res, done) {

});

var http = require("http");
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
