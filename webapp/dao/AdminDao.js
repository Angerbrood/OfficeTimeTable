var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename : "E:/Projects/ELTE/OfficeTimeTable/resources/database/timetable.db"
    }
});

var bookshelf = require('bookshelf')(knex);
var Worker = bookshelf.Model.extend({
    tableName : 'Worker',
    timetable : function () {
        return this.belongsTo(TimeTable, 'tableID');
    },
    salary : function () {
        return this.belongsTo(Salary, 'salaryID');
    }
});
var Account = bookshelf.Model.extend({
    tableName: 'Account'
});
var Salary = bookshelf.Model.extend({
    tableName : 'Salary'
});
var TimeTable = bookshelf.Model.extend({
    tableName : 'TimeTable',
});

var addNewWorker = function(worker, req, res) {
    var result = "";
    try {
        var item = new Worker({
            name : worker.name, age : worker.age,
            university : worker.university, position : worker.position,
            workingHours : worker.weekly_hour, status : worker.worker_status,
            tableID : worker.tableID, salaryID : worker.salaryID
        });
        item.save();
        result = "Sikeresen hozzáadva!";
    } catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);

};
var modifyWorker = function (req, res) {
    var result = "";
    try {
        new Worker({'id' : req.body.id}).save({
            name : req.body.name, age : req.body.age,
            university : req.body.university, position : req.body.position,
            workingHours : req.body.hours, status : req.body.status,
            tableID : req.body.tableID, salaryID : req.body.salaryID
        }).then(function(temp) {

        });
        result = "Sikeresen módosítva!";
    }
    catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);
};

var deleteWorker = function(req, res) {
    var result = "";
    try {
        Worker.where('id', req.body.id).fetch().then(function (item) {
            item.destroy();
        });
        result = "Sikeres törlés";
    } catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);
};
var getWorker = function (id, req, res) {
    try {
        Worker.where('id', id).fetch({withRelated:['timetable']}).then(function (item) {
            res.send(item);
        })
    } catch (err) {
        res.send("Hiba történt!" + err);
    }
};
var getAllWorkers = function (req, res) {
    Worker.fetchAll().then(function (item) {
        var result = [];
        item.models.forEach(function (item) {
            result.push( {
                id : item.attributes.id,
                name : item.attributes.name, age : item.attributes.age,
                university : item.attributes.university, position : item.attributes.position,
                hours : item.attributes.workingHours, status : item.attributes.status,
                tableID : item.attributes.tableID, salaryID : item.attributes.salaryID
            });
        });

        res.send(result)
    })
};
var getWorkerById = function (req, res) {
  Worker.where('id', req.body.id).fetch({withRelated:['timetable']}).then(function (item) {
     res.send(item);
  });
};
var getAllSalary = function (req, res) {
    Salary.fetchAll().then(function (item) {
        var result = [];
        item.models.forEach(function (item) {
            result.push( {id : item.attributes.id, position : item.attributes.position, salary : item.attributes.salary});
        });

        res.send(result)
    })
};
var getAllTimeTable = function (req, res) {
    TimeTable.fetchAll().then(function (item) {
        var result = [];
        item.models.forEach(function (item) {
            result.push( {id : item.attributes.id, days : item.attributes.days, name : item.attributes.name});
        });

        res.send(result)
    })
};
var addSalaryCategory = function (req, res) {
    var result = "";
    try {
        var item = new Salary({position : req.body.name, salary : req.body.salary});
        item.save();
        result = "Sikeres mentés!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
};
var sendPayments =function () {

};

module.exports.addNewWorker = addNewWorker;
module.exports.modifyWorker = modifyWorker;
module.exports.deleteWorker = deleteWorker;
module.exports.getWorker = getWorker;
module.exports.getAllWorkers = getAllWorkers;
module.exports.getAllSalary = getAllSalary;
module.exports.getAllTimeTable = getAllTimeTable;
module.exports.addSalaryCategory = addSalaryCategory;
module.exports.getWorkerById = getWorkerById;