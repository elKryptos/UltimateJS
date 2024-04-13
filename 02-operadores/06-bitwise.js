// Decimal: 0 1 2 3 4 5 6 7 8 9
// Binario: 0, 1
// bit 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7
// Byte: 00001000 -> 8

// con este operador confronta los valores de los 0 y 1 y hace 1 si es 0|1 
// dando asi un valor nuevo que puede ser diverso
console.log(1 | 3); // 00000011 -> 3
console.log(1 | 4); // 00000101 -> 5
console.log(3 | 5); // 00000111 -> 7


// en este caso ambos bits tienen que ser 1 para que marquen con 1 o ambos 0 para 0
console.log(1 & 3); // 00000001 -> 1
console.log(1 & 4); // 00000000 -> 0
console.log(3 & 5); // 00000001 -> 1