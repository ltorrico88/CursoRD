function envio(){

var respuesta;
var opcion = window.confirm("¿Vive en una distancia menor igual a 40 km?");


    if (opcion == true) {
    respuesta = "Envio Gratis";
    } else {
	respuesta = "Debe pagar $800 adicionales";
    }

    document.getElementById("textoenvio").innerHTML=respuesta;
}



