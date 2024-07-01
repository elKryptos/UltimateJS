let afuera = 'estoy afuera';

function alcance()  {
    function saludo() {}
    console.log(afuera);
    afuera = 'estoy dentro';
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola mundo';
}
// console.log(alcance);
// console.log(vieja);
// console.log(variable);
// console.log(constante);

console.log(afuera)
alcance();
console.log(afuera)