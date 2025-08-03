import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [{
        id: 1,
        name: "sahil kumar",
        age: 25
    }];

    getAllStudents() {
        return this.students;
    }


    getStudentById(id: number) {
        const student = this.students.find(student => student.id === id);
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }

        return student;
    }

    //post 
    createStudent(data: { name: string; age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    //PUT

    updateStudent(id: number, data: { name?: string; age?: number }) {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }

        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...data,
        };
        return this.students[studentIndex];
    }


    patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data)
        return student;
    }

    //DELETE
    deleteStudent(id: number) {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        const deletedStudent = this.students.slice(studentIndex, 1);

        return {
            message: 'Student Deleted', student: deletedStudent[0]
        }
    }

}
