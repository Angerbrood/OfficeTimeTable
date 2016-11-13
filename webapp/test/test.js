var chai = require('chai');
var expect = chai.expect;
var adminDao = require('../../webapp/dao/AdminDao.js');
var publicDao = require('../../webapp/dao/PublicDao.js');
var httpMocks = require('node-mocks-http');


describe('AdminDao', function() {
   it('should add a new worker to the database', function() {

        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/admin/addWorker',
            body : {
                name: "Sanyi", age: "20",
                university: "ELTE", position: "BackEnd",
                weekly_hour: "20", worker_status: "Alkamazott",
                tableID: 3, salaryID: 1
            }
        });
        var response = httpMocks.createResponse();

        adminDao.addNewWorker(request.body, request, response);

        expect(response._getData()).to.equal("Sikeresen hozzáadva!");

    });

    it('should modify an existing worker', function () {
        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/admin/modifyWorker',
            body : { id: 1,
                name: "SanyiUpdate", age: "20",
                university: "ELTE", position: "BackEnd",
                weekly_hour: "20", worker_status: "Alkamazott",
                tableID: 3, salaryID: 1
            }
        });
        var response = httpMocks.createResponse();

        adminDao.modifyWorker(request, response);

        expect(response._getData()).to.equal("Sikeresen módosítva!");
    });
    it('should modify an existing worker', function () {
        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/admin/deleteWorker',
            body : { id: 1,
                name: "SanyiUpdate", age: "20",
                university: "ELTE", position: "BackEnd",
                weekly_hour: "20", worker_status: "Alkamazott",
                tableID: 3, salaryID: 1
            }
        });
        var response = httpMocks.createResponse();

        adminDao.deleteWorker(request, response);

        expect(response._getData()).to.equal("Sikeres törlés!");
    });

    it('should return an existing worker', function () {
        var request = httpMocks.createRequest({
            method : 'GET',
            url : '/admin/getWorkerByID',
            body: {id : 1}
        });
        var response = httpMocks.createResponse();
        adminDao.getWorker(request.body.id, request, response);
        expect(response.status().statusMessage).to.equal('OK');

    });

     it('should return all workers', function () {
         var request = httpMocks.createRequest({
         method : 'GET',
         url : '/admin/getAllWorker',
         });
         var response = httpMocks.createResponse();
         adminDao.getAllWorkers(request, response);

         expect(response.status().statusMessage).to.equal('OK');
     });

});
describe('PublicDao', function() {
    it('should add a new date', function () {
        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/public/addDate',
            body : {
                days : ''
            }
        });
        var response = httpMocks.createResponse();

        publicDao.addDate(request, response);

        expect(response._getData()).to.equal("Sikeres mentés!");
    });
    it('should modify an existing date', function () {
        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/public/modifyDate',
            body : {
                id : 3,
                days : ''
            }
        });
        var response = httpMocks.createResponse();

        publicDao.modifyHours(request, response);

        expect(response._getData()).to.equal("Sikeres mentés!");
    });
    it('should modify an existing account data', function () {
        var request = httpMocks.createRequest({
            method : 'POST',
            url : '/public/modifyDate',
            body : {
                id : 3,
                name : 'Sanyi',
                passw : 'Sanyi',
                type : 'Sanyi'
            }
        });
        var response = httpMocks.createResponse();

        publicDao.modifyAccountData(request, response);

        expect(response._getData()).to.equal("Sikeresen módosítva!");
    });
    it('should return an existing account data', function () {
        var request = httpMocks.createRequest({
            method : 'GET',
            url : '/public/getAccountData',
            body: {id : 1}
        });
        var response = httpMocks.createResponse();
        publicDao.getAccountData(request, response);
        expect(response.status().statusMessage).to.equal('OK');

    });
    it('should return an existing salary', function () {
        var request = httpMocks.createRequest({
            method : 'GET',
            url : '/public/getSalary',
            body: {id : 1}
        });
        var response = httpMocks.createResponse();
        publicDao.getSalary(request.body.id, request, response);
        expect(response.status().statusMessage).to.equal('OK');

    });
});