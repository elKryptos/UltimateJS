let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];


 let combinado = arr1.concat(arr2, arr3);
// console.log(combinado, arr1, arr2);

//el uso de slice en este caso es para seleccionar un numero limitato di 
//valore de un array, funciona solo despues de haber hecho el concat entre
//dos o mas array
let div = combinado.slice(3, 11);
console.log(div)