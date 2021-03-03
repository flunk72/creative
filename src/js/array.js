const array = [
  1, 2, 3, 4, 5
]
console.log("Входные данные", array);
const step = 3

// for(i=0;i<step;i++) array.unshift(array.pop());

// console.log("Результат", array);

const arr = array.splice(-step).concat(array);

console.log("Результат", arr);

