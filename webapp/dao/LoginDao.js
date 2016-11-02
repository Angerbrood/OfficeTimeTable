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

var findUser = function (req, res) {
    var result = "";

    Account.where('name', req.username).where('password', req.password).fetch().then(function (item) {
        return item;
    });

    return result;
};

module.exports.findUser = findUser;

