let arr1 = [1, 2];
let arr2 = [5, 6];

//spread sirver para combinar distintos arrays
let arr3 = [...arr1, 3, 4, ...arr2];
let arr4 = [...arr3]

console.log(arr3);
// .pop serve a togliere l'ultimo elemento di un array
arr3.pop();

console.log(arr3);
console.log(arr3, arr4);