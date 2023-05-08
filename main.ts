const {ManageStudent} = require("./ManageStudent") ;
const {Student} = require("./student");

let readlineSync = require('readline-sync')
let managementStudent = new ManageStudent();
let repeat = true
let nunStudent = readlineSync.question("nhap so luong sinh vien")
for (let i = 0; i < nunStudent; i++) {
    console.log(`sinh vien thu ${i + 1}`)
    let idStudent = readlineSync.question("id: ")
    let nameStudent = readlineSync.question("name: ")
    let classStudent = readlineSync.question("className: ")
    let addressStudent = readlineSync.question("homeTown: ")
    let scoreStudent = +readlineSync.question("score: ")
    let hobbies = readlineSync.question("hobbies: ")
    let student1 = new Student(idStudent, nameStudent, classStudent, addressStudent, scoreStudent, hobbies);
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
            console.log("=================Search for students by name=================")
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
            console.log("=================Update a student's information=================")
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

