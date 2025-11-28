// type guard

type NumberString = number | string

const add = (num1: NumberString, num2: NumberString) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    } else {
        return num1.toString() + num2.toString();
    }
}

add(2, 3) //5
add(2, '3') //23
add('5', 1) //51


// in guard

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string;
    role: 'Admin'
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
        console.log(`This is ${user.name} and his role is ${user.role}`)
    } else {
        console.log(`This is ${user.name} and his role is user`)
    }
}

getUserInfo({ name: 'Al-Amin', role: 'Admin' })