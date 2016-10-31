var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename : "E:/Projects/ELTE/OfficeTimeTable/resources/database/timetable.db"
    }
});

var bookshelf = require('bookshelf')(knex);
var Worker = bookshelf.Model.extend({
    tableName : 'Worker'
});
var Account = bookshelf.Model.extend({
    tableName: 'Account',
    idAttribute : 'id'
});
var Salary = bookshelf.Model.extend({
    tableName : 'Salary'
});
var TimeTable = bookshelf.Model.extend({
    tableName : 'TimeTable'
});


var addDate = function (req, res) {
    var result = "";
    try {
        var temp = JSON.stringify(req.body.days);
        console.log(JSON.stringify(req.body.days));
        var item = new TimeTable({days : temp, name : "temp"});
        item.save();
        result = "Sikeres mentés!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
};
var modifyHours = function (req, res) {
    var result = "";
    try {
        var item = new TimeTable({id : req.body.id, days : req.body.days});
        item.update();
        result = "Sikeres mentés!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
};
var modifyAccountData = function(req, res) {
    var result = "";
    try {

        new Account({'id' : req.body.id}).save({
            name : req.body.name,
            password : req.body.passw,
            type : req.body.type
        }).then(function (temp) {

        });
        result = "Sikeresen módosítva!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
};
var getSalary = function (id, req, res) {
    try {
        Worker.where('id', id).fetch().then(function (item) {
            res.send(item);
        })
    } catch (err) {
        res.send("Hiba történt!" + err);
    }
};
var getWorkerData = function (req, res) {
    try {
        Worker.where('id', req.body.id).fetch().then(function (item) {
            res.send(item);
        });
    } catch (err) {
        res.send(err);
    }
};
var getAccountData = function (req, res) {
  try {
      Account.where('id', req.body.id).fetch().then(function (item) {
          res.send(item);
      });
  } catch (err) {
      res.send(err);
  }
};

module.exports.addDate = addDate;
module.exports.modifyHours = modifyHours;
module.exports.modifyAccountData = modifyAccountData;
module.exports.getSalary = getSalary;
module.exports.getWorkerData = getWorkerData;
module.exports.getAccountData = getAccountData;