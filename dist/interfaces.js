"use strict";
const ashutosh = {
    id: "123",
    age: 25,
    username: "ashutosh",
};
console.log(ashutosh);
const isLegal = (user) => {
    return user.age >= 18;
};
console.log(isLegal(ashutosh));
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Player {
    constructor(name, age, team) {
        this.name = name;
        this.age = age;
        this.team = team;
    }
}
