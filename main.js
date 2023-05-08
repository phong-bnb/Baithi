var ManageStudent = require("./ManageStudent").ManageStudent;
var Student = require("./student").Student;
var readlineSync = require('readline-sync');
var managementStudent = new ManageStudent();
var repeat = true;
var nunStudent = readlineSync.question("nhap so luong sinh vien: ");
for (var i = 0; i < nunStudent; i++) {
    console.log("sinh vien thu ".concat(i + 1));
    var idStudent = readlineSync.question("idStudent: ");
    var nameStudent = readlineSync.question("nameStudent: ");
    var classStudent = readlineSync.question("classStudent: ");
    var addressStudent = readlineSync.question("addressStudent: ");
    var scoreStudent = +readlineSync.question("scoreStudent: ");
    var interset = readlineSync.question("interset: ");
    var student1 = new Student(idStudent, nameStudent, classStudent, addressStudent, scoreStudent, interset);
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
            console.log("=================Search students by name=================");
            managementStudent.searchStudentByName(findName);
            break;
        }
        case 3: {
            var findId = readlineSync.question("nhap id sinh vien muon sua: ");
            var editId = readlineSync.question("idStudent: ");
            var editName = readlineSync.question("nameStudent: ");
            var editClassName = readlineSync.question("classStudent: ");
            var editAddress = readlineSync.question("addressStudent: ");
            var editScore = +readlineSync.question("score: ");
            var editInterset = readlineSync.question("interset: ");
            console.log("=================Update student's information=================");
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
