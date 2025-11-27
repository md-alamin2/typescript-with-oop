// inheritence

class Person{
name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address
    }

    getSleep (sleepHour: number){
        console.log(`${this.name} ghumay ${sleepHour} ghonta`)
    }
}

class Student extends Person{
    roll: number;
    
    constructor(roll: number, name: string, address: string) {
        super(name, address)
        this.roll = roll;
    }
    
}

const me = new Student(113200, 'Al-amin', 'Dhaka')

console.log(me)
me.getSleep(8)


class Teacher extends Person {
    age: number;
    designation: string;
    constructor(age: number, name: string, address: string, designation: string) {
        super(name, address)
        this.age = age;
        this.designation = designation;
    }


    takeClass(classHour: number){
        console.log(`${this.name} sir class nay ${classHour} ghonta`)
    }
}

const teacher1 = new Teacher(28, 'Fozlul', 'Bangladesh', 'Senior Instructor');

console.log(teacher1);
teacher1.takeClass(1)