class Worker {
    constructor(id, name, age, university, position, workingHours, status, tableID, salaryID) {
        if(id != -1) {
            this.name = name;
            this.age = age;
            this.university = university;
            this.position = position;
            this.workingHours = workingHours;
            this.status = status;
            this.tableID = tableID;
            this.salaryID = salaryID;
        } else {
            this.id = id;
            this.name = name;
            this.age = age;
            this.university = university;
            this.position = position;
            this.workingHours = workingHours;
            this.status = status;
            this.tableID = tableID;
            this.salaryID = salaryID;
        }
    }
}