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

/*
var temp = new Account({name : "Temp", password : "temp", type : "type"});
temp.save();*/


function findUser (name, password, type) {
    var result = "";

    Account.where('name', name).where('password', password).where('type', type).fetch().then(function (item, result) {
        //console.log(item.toJSON());
        result = item.toJSON();
        return result;
    });

    return result;
};

console.log(findUser("Temp", "temp", "type"));