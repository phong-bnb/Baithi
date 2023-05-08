var ManageStudent = require("./ManageStudent").ManageStudent;
var Student = require("./student").Student;
var readlineSync = require('readline-sync');
var managementStudent = new ManageStudent();
var repeat = true;
var nunStudent = readlineSync.question("nhap so luong sinh vien");
for (var i = 0; i < nunStudent; i++) {
    console.log("sinh vien thu ".concat(i + 1));
    var idStudent = readlineSync.question("id: ");
    var nameStudent = readlineSync.question("name: ");
    var classStudent = readlineSync.question("className: ");
    var addressStudent = readlineSync.question("homeTown: ");
    var scoreStudent = +readlineSync.question("score: ");
    var hobbies = readlineSync.question("hobbies: ");
    var student1 = new Student(idStudent, nameStudent, classStudent, addressStudent, scoreStudent, hobbies);
    managementStudent.addStudent(student1);
}
do {
    console.log("\n            menu\n            1. displayStudents\n            2. searchStudentByName\n            3. updateStudent\n            4. deleteStudent\n");
    var option = readlineSync.keyInSelect("nhap (1/4): ");
    switch (option) {
        case 1: {
            console.log("===============listStudent===============");
            managementStudent.displayStudents();
            break;
        }
        case 2: {
            var findName = readlineSync.question("nhap ten can tim: ");
            console.log("=================Search for students by name=================");
            managementStudent.searchStudentByName(findName);
            break;
        }
        case 3: {
            var findId = readlineSync.question("nhap id sinh vien muon sua: ");
            var editId = readlineSync.question("id: ");
            var editName = readlineSync.question("name: ");
            var editClassName = readlineSync.question("className: ");
            var editAddress = readlineSync.question("homeTown: ");
            var editScore = +readlineSync.question("score: ");
            var editInterset = readlineSync.question("hobbies: ");
            console.log("=================Update a student's information=================");
            managementStudent.updateStudent(findId, new Student(editId, editName, editClassName, editAddress, editScore, editInterset));
            break;
        }
        case 4: {
            var findId = readlineSync.question("nhap id sinh vien muon xoa: ");
            console.log("=================Delete a student=================");
            managementStudent.deleteStudent(findId);
            break;
        }
        case 0: {
            repeat = false;
        }
    }
} while (repeat);
