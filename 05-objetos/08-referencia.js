/*
Los primitivo que pueder ser cualquier valor dado a una variable se dicen primitivos
y viene almacenados directamente en la memoria ram
En cambio los Objetos, Array, Funciones no guardan los datos directamente en la misma 
celda de la RAM, mas bien guardan una referencia que indica la posizione de la memoria
donde estos datos se encuentran.
Las referencias en JavaScript apuntan a ubicaciones de memoria donde se almacenan objetos.
Cuando asignas una referencia a una variable, estás haciendo que esa variable apunte al 
objeto en la memoria, no copiando el objeto en sí.
En resumen, los tipos primitivos se copian por valor, mientras que las referencias 
se copian por referencia, lo que significa que apuntan al mismo lugar en la memoria. 
Esto tiene implicaciones importantes en la forma en que se manejan y se comportan los 
datos en JavaScript.
*/

let a = {prop: 1};

function suma(n){
    n.prop++;
}

suma (a);
console.log(a);