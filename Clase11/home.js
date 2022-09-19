let diaSemana = prompt("¿Que dia es hoy?");

switch (diaSemana){
    case "lunes":
        alert("Lunes se ejercita lumbares");
        document.querySelector("#p1").innerHTML= "Lunes se ejercita lumbares";
        break;

    case "martes":
        alert("Martes se ejercita dorsales y pectorales");
        document.querySelector("#p1").innerHTML= "Martes se ejercita dorsales y pectorales";
        break;

    case "miercoles":
        alert("Miercoles se realiza caminata de 3 km");
        document.querySelector("#p1").innerHTML= "Miercoles se realiza caminata de 3 km";
        break;

    case "jueves":
        alert("Jueves se ejercita sentadilla, Burpees y Gemelos");
        document.querySelector("#p1").innerHTML= "Jueves se ejercita sentadilla, Burpees y Gemelos";
        break;

    case "viernes":
        alert("Viernes se ejercita triceps");
        document.querySelector("#p1").innerHTML= "Viernes se ejercita triceps";
        break;
    
    case "sabado":
        alert("Sabado se ejercita aerobicos");
        document.querySelector("#p1").innerHTML= "Sabado se ejercita aerobicos";
        break;

    case "domingo":
        alert("Domingo se hace trabajo de flexibilidad");
        document.querySelector("#p1").innerHTML= "Domingo se hace trabajo de flexibilidad";
        break;
    
    default:
        alert("Escribe el dia de la semana en minusculas.");
        document.querySelector("#p1").innerHTML= "Escribe el dia de la semana en minusculas.";
}

// -------------------------------------- //

for(i=20; i<=70; i++){

    document.write("El numero es: " + i + "<br>");

}

// -------------------------------------- //

let contSaludo = prompt("Ingrese la cantidad de saludos");

while (contSaludo>0 ){

    document.write("<br>" + "Hola Mundo");
    contSaludo = contSaludo - 1;

}
