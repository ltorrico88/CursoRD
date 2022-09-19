// Declarando varios tipos de variable
var name = "Leonardo" // String
var students = 40 // Number
var countries = ["Venezuela", "Colombia", "Perú"] // Array
var grades = { Carlos: "B", Paula: "A" } // Object
var success = true // Boolean
var nothing = null // Null

console.log(students);
// resultado 40

// --------------------------------------------------------------------- //

// Declarando variable global
var vaso = "lleno";

function beber() {
    // Declarando una variable local
    var vaso = "vacío";
    console.log(vaso);
}

console.log(vaso);
beber();
console.log(vaso);

// Resulado:
// lleno
// vacío
// lleno

// --------------------------------------------------------------------- //

const PI = 3.1415;
PI=100;
console.log(PI);
