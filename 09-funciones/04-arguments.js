function suma(a, b) {
   // return a + b
   return Array.from(arguments).reduce((acc, el) => acc + el);
}

   console.log(suma(5,2, 3, 4, 5, 6));
// console.log(suma(2))