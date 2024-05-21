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
