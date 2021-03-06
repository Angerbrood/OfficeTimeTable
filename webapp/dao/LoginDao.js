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
    Account.where('name', req.body.username).where('password', req.body.password).where('type', req.body.type).fetch().then(function (item) {
        //res.send(item);
        if(item) {
            res.send({id : item.attributes.id, type : item.attributes.type});
        } else {
            res.send("Nincs ilyen felhasználó!");
        }
    });

};

module.exports.findUser = findUser;

