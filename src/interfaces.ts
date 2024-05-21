interface User {
  id: string;
  age: number;
  username: string;
}

const ashutosh: User = {
  id: "123",
  age: 25,
  username: "ashutosh",
};

console.log(ashutosh);

const isLegal = (user: User): boolean => {
  return user.age >= 18;
};

console.log(isLegal(ashutosh));

interface Hooman {
  name: string;
  age: number;
}

class Employee implements Hooman {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

class Player implements Hooman {
  name: string;
  age: number;
  team: string;

  constructor(name: string, age: number, team: string) {
    this.name = name;
    this.age = age;
    this.team = team;
  }
}
