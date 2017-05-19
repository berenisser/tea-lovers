//Llamamos al boton de suscripcion
var botonSuscribirse = document.getElementById("suscribirse");
botonSuscribirse.addEventListener("click", confirmar);

function confirmar(){
	validarNombre();
	validarEmail();
	validarDireccion();
	validarSeleccion();
}

function validarNombre(){
	var nombre = document.getElementById("nombre").value;
	if (!(/^[a-zA-Z]{2,30}$/).test(nombre)){
		alert("Error: Debe llenar todos los campos");
	}
}

function validarEmail(){
	var email = document.getElementById("email").value;
	if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(email)){
		alert("Error: Debe escribir su email correctamente")
	} 
}

function validarDireccion(){
	var direccion = document.getElementById("direccion").value;
	if(!(/^[a-zA-Z0-9]/).test(direccion)){
		alert("Debe escribir su direccion correctamente");
	}
}

function validarSeleccion(){
	var seleccion = document.getElementById("selecciones");
		if (seleccion.value == 0){
			alert("Debe seleccionar una opción de té");
		}else{
			document.getElementById("nombre").value ="";
			document.getElementById("email").value = "";
			document.getElementById("direccion").value = "";
			document.getElementById("selecciones").value = "0";	
			alert("Muchas gracias por suscribirte");
		}
}