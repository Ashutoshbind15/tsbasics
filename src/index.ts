const greeter = (name: string) => {
  console.log(`Hello ${name}`);
};

greeter("World");

const summer = (a: number, b: number): number => a + b;
console.log(summer(1, 2));

const validateAge = (age: number): boolean => {
  return age >= 18;
};

const runSummerAfterASec = (summer: (a: number, b: number) => number) => {
  setTimeout(() => {
    console.log(summer(1, 2));
  }, 1000);
};

runSummerAfterASec(summer);
