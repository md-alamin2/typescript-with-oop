// oop -> instance of guard

class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} get sleep ${numOfHours} hours`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHours: number) {
        console.log(`${this.name} daily study ${numOfHours} hours`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numOfHours: number) {
        console.log(`${this.name} daily take class ${numOfHours} hours`)
    }
}

// function guard
const getStudent = (user: Person) => {
    return user instanceof Student; // if the student
}

const getTeacher = (user: Person) => {
    return user instanceof Teacher; // if the teacher
}

const getUserInfo = (user: Person) => {
    if (getStudent(user)) {
        user.doStudy(5)
    } else if (getTeacher(user)) {
        user.takeClass(4)
    } else {
        user.getSleep(8)
    }
}

const student = new Student('Al-Amin');
const teacher = new Teacher('Zahid');

getUserInfo(student)
getUserInfo(teacher)
