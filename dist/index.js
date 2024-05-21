"use strict";
const greeter = (name) => {
    console.log(`Hello ${name}`);
};
greeter("World");
const summer = (a, b) => a + b;
console.log(summer(1, 2));
const validateAge = (age) => {
    return age >= 18;
};
const runSummerAfterASec = (summer) => {
    setTimeout(() => {
        console.log(summer(1, 2));
    }, 1000);
};
runSummerAfterASec(summer);
