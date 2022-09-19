/*
let numberone=120;
let numbertwo=20;
let result = numberone + numbertwo;

console.log(result);
*/

let numberone=120;
let numbertwo=20;
let resultsuma = numberone + numbertwo;
let resultresta = numberone - numbertwo;
let resultmulti = numberone * numbertwo;
let resultdivision = numberone / numbertwo;
let comp = numberone > numbertwo;

console.log(comp);
console.log("Suma:" , resultsuma);
console.log("Resta:" , resultresta);
console.log("Multiplicacion:" , resultmulti);
console.log("Division:" , resultdivision);

//------------------------//

let name = "Diego";
let surname = "Castiglioni";

console.log(name + " " + surname);

//------------------------//

var num = 0;
var str = "0";

console.log("Igual", num == str); // true
console.log("Estrictamente igual", num === str);  // false

//------------------------//

const mayorEdad=18;

if(mayorEdad >=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

//------------------------//

let password = 'boca2022';
let input = 'boca2022';

if (password== input){
    console.log('Login Correcto');
}

//------------------------//

let nota = 9;

if(nota<4){
    console.log("Aplazado");
}else if(nota<7){
    console.log("Desaprobado");
}else if(nota<9){
    console.log("Aprobado");
}else{
    console.log("Sobresaliente");
}

//------------------------//

var edad=17;

if(edad>=18){
    console.log("Sos mayor de edad");
}else{
    console.log("Sos Menor");
}

//------------------------//
/*
let count = 50;

while(count > 0){
    console.log("Hola Estudiantes n°", count);
    count = count - 1;
}
*/
//------------------------//

let count = 50;

while(count > 0){
    console.log("Hola Chicos");
    count = count - 1;
}

//------------------------//

let nombre = ['Diego', 'Anabel', 'Esteban'];

console.log(nombre);
console.log(nombre[0]);
console.log(nombre[2]);
console.log("Cantidad de Nombre:", nombre.length);

for(var i=0; i < nombre.length; i++){
    console.log(nombre[i]);
}

//------------------------//

const frutas = ['🍋', '🥑'];

for(let i=0; i< frutas.length; i++){
    console.log("El elemento es:", frutas[i]);
}


frutas.push('🥜'); // metodo push agrega un elemento al final del vector frutas
frutas.unshift('🥝'); // metodo unshift es para agregar un elemento al principio de mi arreglo.

frutas.pop(); // Este metodo pop elimina el ultimo elemento del arreglo
frutas.shift(); // Este metodo shift elimina el primer elemento del arraelgo


//------------------------//

let expr = "Adios";

switch(expr){
    case 'Hola':
        console.log("Buenos Dias");
        break;
    case 'Adios':
        console.log("Hasta Pronto");
        break;
    case 'Ayuda':
        console.log("En que te puedo ayudar?");
        break;
    default:
        console.log("Disculpa no te entiendo");
}

//------------------------//

let ejercicio = "Lunes";

switch(ejercicio){
    case 'Lunes':
        console.log("Caminata de 5 km");
        break;
    case 'Martes':
        console.log("Caminata de 10 km");
        break;
    case 'Miercoles':
        console.log("Correr 5 km");
        break;
    case 'Viernes':
        console.log("Correr de 10 km");
        break;
    default:
        console.log("Descanso");
}
