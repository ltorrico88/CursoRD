/* Con navegador Mozilla anda perfecto este mensaje, los demas navegadores pasa rapido el mensaje de alerta */
var respuesta;
var pregunta = window.confirm("¿Es mayor de 18 años?");

if (pregunta == true) {
    respuesta = "Ha ingresado al sitio, ya que es mayor de edad";
} else {
	respuesta = "Entra al sitio bajo su responsabilidad";
}
alert(respuesta);

/*se aplico esta funcion al evento onclick en los hipervinculos de las redes sociales que estan en footer*/
function saliendo_sitio(){
    alert("Usted esta saliendo de nuestro sitio");
}

