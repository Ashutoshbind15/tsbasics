function func<T>(arg: T): T {
  return arg;
}

let o1 = func<string>("Hello");
let o2 = func<number>(10);

// function getFirstElement<T>(arr: T[]) {
//   return arr[0];
// }

// const el = getFirstElement<string>(["ash", 2]);
// console.log(el.toLowerCase());
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement<string>(["ash", "vb"]);
console.log(el.toLowerCase());
