const {ManageStudent} = require("./ManageStudent") ;
const {Student} = require("./student");

let readlineSync = require('readline-sync')
let managementStudent = new ManageStudent();
let repeat = true
let nunStudent = readlineSync.question("nhap so luong sinh vien: ")
for (let i = 0; i < nunStudent; i++) {
    console.log(`sinh vien thu ${i + 1}`)
    let idStudent = readlineSync.question("idStudent: ")
    let nameStudent = readlineSync.question("nameStudent: ")
    let classStudent = readlineSync.question("classStudent: ")
    let addressStudent = readlineSync.question("addressStudent: ")
    let scoreStudent = +readlineSync.question("scoreStudent: ")
    let interset = readlineSync.question("interset: ")
    let student1 = new Student(idStudent, nameStudent, classStudent, addressStudent, scoreStudent, interset);
    managementStudent.addStudent(student1);
}
do {
    console.log(`
            menu
            1. displayStudents
            2. searchStudentByName
            3. updateStudent
            4. deleteStudent
`)
    let option = readlineSync.keyInSelect("nhap (1/4): ")
    switch (option) {
        case 1: {
            console.log("===============listStudent===============")
            managementStudent.displayStudents();
            break
        }
        case 2: {
            let findName = readlineSync.question("nhap ten can tim: ")
            console.log("=================Search students by name=================")
            managementStudent.searchStudentByName(findName);
            break
        }
        case 3: {
            let findId = readlineSync.question("nhap id sinh vien muon sua: ")
            let editId = readlineSync.question("idStudent: ")
            let editName = readlineSync.question("nameStudent: ")
            let editClassName = readlineSync.question("classStudent: ")
            let editAddress = readlineSync.question("addressStudent: ")
            let editScore = +readlineSync.question("score: ")
            let editInterset = readlineSync.question("interset: ")
            console.log("=================Update student's information=================")
            managementStudent.updateStudent(findId, new Student(editId, editName, editClassName, editAddress, editScore, editInterset));
            break
        }
        case 4: {
            let findId = readlineSync.question("nhap id sinh vien muon xoa: ")
            console.log("=================Delete a student=================")
            managementStudent.deleteStudent(findId);
            break
        }
        case 0: {
            repeat = false

        }
    }
}while (repeat)

