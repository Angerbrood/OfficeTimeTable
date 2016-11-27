var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var flash = require('connect-flash');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var admin = require('./dao/AdminDao.js');
var worker = require('./dao/PublicDao.js');
var login = require('./dao/LoginDao.js');
var Promise  = require('bluebird');


var app = express();


app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({ cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false}));

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename : "E:/Projects/ELTE/OfficeTimeTable/resources/database/timetable.db"
    }
});

var bookshelf = require('bookshelf')(knex);
var Account = bookshelf.Model.extend({
    tableName: 'Account',
    login : Promise.method(function (username, password, type) {
        if(!username || !password || !type) throw new Error("Username, password, type required");
        return new this({name: username.toLowerCase().trim()}).fetch({require: true}).tap(function(customer) {

        });
    })
});
app.use(bodyParser.json());
app.use(flash());
app.use(passport.initialize());   // passport initialize middleware
app.use(passport.session());      // passport session middleware


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


passport.use('publicAuth', new LocalStrategy(
    function(username, password, done) {
        Account.where({ name: username, password : password }).fetch().then( function (user) {
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));
passport.use('adminAuth', new LocalStrategy(
    function(username, password, done) {
        Account.where({ name: username, password : password  }).fetch().then( function (user) {
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!password) {
                return done(null, false, {message: 'Incorrect password.'});
            }

            return done(null, user);
        });
    }
));
app.get('/', function (req, res) {
    res.render('index',  { message: req.flash() });
});
app.get('/admin', function (req, res) {
    res.render('admin');
});
app.get('/public', function (req, res) {
    res.render('public',  { message: req.flash() });
});

app.post('/adminLogin',
    passport.authenticate('adminAuth', {
        successRedirect: '/admin',
        failureRedirect: '/',
        badRequestMessage : 'Missing username or password.',
        failureFlash: true

    })
);
app.post('/publicLogin',
    passport.authenticate('publicAuth', {
        successRedirect: '/public',
        failureRedirect: '/',
        badRequestMessage : 'Missing username or password.',
        failureFlash: true })
);
app.post('/admin/getWorkerByID', function (req, res) {
   admin.getWorkerById(req, res);
});
app.post('/admin/sendPayment', function (req, res) {
    admin.sendPayments(req, res);
});
app.post('/admin/addSalaryCategory', function (req, res) {
    admin.addSalaryCategory(req, res);
});
app.post('/admin/exit', function (req, res, done) {
    req.logout();
    req.session.destroy();
    res.send('/');
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
    req.logout();
    req.session.destroy();
    res.send('/');
});
app.post('/getAccountID', function (req, res) {
   res.send({userID : req.user.id});
});
var http = require("http");
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
