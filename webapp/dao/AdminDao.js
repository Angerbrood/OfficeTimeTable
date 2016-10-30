var database = require('../config/Bookself.js');

function addNewWorker(worker, req, res) {
    var result = "";
    try {
        var item = new database.Worker({
            name : worker.name, age : worker.age,
            university : worker.university, position : worker.position,
            hours : worker.hours, status : worker.status,
            tableID : worker.tableID, salaryID : worker.salaryID
        });
        item.save();
        result = "Sikeresen hozzáadva!";
    } catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);

}
function modifyWorker(worker, req, res) {
    var result = "";
    try {
        var item = new database.Worker({ id : worker.id,
            name : worker.name, age : worker.age,
            university : worker.university, position : worker.position,
            hours : worker.hours, status : worker.status,
            tableID : worker.tableID, salaryID : worker.salaryID
        });
        item.update();
        result = "Sikeresen módosítva!";
    }
    catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);
}

function deleteWorker(id, req, res) {
    var result = "";
    try {
        database.Worker.where('id', id).fetch().then(function (item) {
            item.delete();
        })
        result = "Sikeres törlés";
    } catch (err) {
        result = "Hiba történt!" + err;
    }
    res.send(result);
}
function getWorker(id, req, res) {
    try {
        database.Worker.where('id', id).fetch().then(function (item) {
            res.send(item);
        })
    } catch (err) {
        res.send("Hiba történt!" + err);
    }
}
function sendPayments() {

}