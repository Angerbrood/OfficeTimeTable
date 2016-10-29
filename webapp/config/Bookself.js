var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename : "E:/Projects/ELTE/OfficeTimeTable/resources/database/timetable.db"
    }
});

var bookshelf = require('bookshelf')(knex);


var Account = bookshelf.Model.extend({
    tableName: 'Account'
});
var Salary = bookshelf.Model.extend({
    tableName : 'Salary'
});
var TimeTable = bookshelf.Model.extend({
    tableName : 'TimeTable'
});
var Worker = bookshelf.Model.extend({
    tableName : 'Worker',
    timeTable : function () {
        return this.hasMany(TimeTable, 'tableID');
    },
    salaryTable : function() {
        return this.hasMany(Salary, 'salaryID');
    }
});

module.exports.Account = Account;
module.exports.Salary = Salary;
module.exports.TimeTable = TimeTable;
module.exports.Worker = Worker;