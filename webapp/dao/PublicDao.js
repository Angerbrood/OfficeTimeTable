var database = require('../config/Bookself.js');

function addDate(timetable , req, res) {
    var result = "";
    try {
        var item = new database.TimeTable({days : timetable.days});
        item.save();
        result = "Sikeres mentés!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
}
function modifyDate(timetable, req, res) {
    var result = "";
    try {
        var item = new database.TimeTable({id : timetable.id, days : timetable.days});
        item.update();
        result = "Sikeres mentés!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
}
function modifyData(data, req, res) {
    var result = "";
    try {
        var item = new database.Account({
            id : data.id, name : data.name, password : data.password
        });
        item.update();
        result = "Sikeresen módosítva!";
    } catch (err) {
        result = "Hiba történt." + err;
    }
    res.send(result);
}
function getSalary(id, req, res) {
    try {
        database.Worker.where('id', id).fetch().then(function (item) {
            res.send(item);
        })
    } catch (err) {
        res.send("Hiba történt!" + err);
    }
}