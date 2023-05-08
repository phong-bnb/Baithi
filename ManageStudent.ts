const {Student} = require("./student");

export class ManageStudent {
    studentList=[];

    constructor() {
    }

    displayStudents() {
        if (this.studentList.length === 0) {
            console.log("Không có dữ liệu");
        } else {
            this.studentList.slice(0, 5).forEach((student) => {
                console.log("Mã sinh viên:", student.idStudent);
                console.log("Tên sinh viên:", student.nameStudent);
                console.log("Lớp:", student.classStudent);
                console.log("Quê quán:", student.addressStudent);
                console.log("Điểm:", student.scoreStudent);
                console.log("Sở thích:", student.interset);
                console.log("-------------------");

            });
        }
    }

    searchStudentByName(name: string) {
        // @ts-ignore
        let check = false
        for (let i = 0; i < this.studentList.length - 1; i++) {
            if (name === this.studentList[i].nameStudent){
                console.log("Mã sinh viên:", this.studentList[i].idStudent);
                console.log("Tên sinh viên:", this.studentList[i].nameStudent);
                console.log("Lớp:", this.studentList[i].classStudent);
                console.log("Quê quán:", this.studentList[i].addressStudent);
                console.log("Điểm:", this.studentList[i].scoreStudent);
                console.log("Sở thích:", this.studentList[i].interset);
                console.log("-------------------");
                break
            }else {
                check = true
            }
            if (check){
                console.log("============không có dữ liệu phù hợp============")
            }
        }
    }

    addStudent(student) {
        if (student!==undefined){
            this.studentList.push(student)
        }
        console.log("Thêm sinh viên thành công");
    }

    updateStudent(idStudent: string, newData) {
        // @ts-ignore
        const studentIndex = this.studentList.findIndex(
            (student) => student.idStudent === idStudent
        );

        if (studentIndex === -1) {
            console.log("Không tồn tại sinh viên cần cập nhật");
            return;
        }

        // Kiểm tra dữ liệu đầu vào
        if (!this.validateStudentData(newData)) {
            console.log("Dữ liệu không hợp lệ");
            return;
        }

        this.studentList[studentIndex] = newData;
        console.log("Cập nhật thông tin sinh viên thành công");
        console.table(this.studentList)
    }

    deleteStudent(idStudent: string) {
        // @ts-ignore
        const studentIndex = this.studentList.findIndex(
            (student) => student.idStudent === idStudent
        );

        if (studentIndex === -1) {
            console.log("Không tồn tại sinh viên cần xoá");
            return;
        }

        this.studentList.splice(studentIndex, 1);
        console.log("Xoá sinh viên thành công");
        console.table(this.studentList)
    }

    validateStudentData(student): boolean {
        if (
            !student.idStudent ||
            !student.nameStudent ||
            !student.classStudent ||
            !student.addressStudent ||
            !student.scoreStudent ||
            !student.interset
        ) {
            return false;
        }

        return !(typeof student.scoreStudent !== "number" || student.scoreStudent < 0);


    }
}