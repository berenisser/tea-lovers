var botonSuscribirse = document.getElementById("suscribirse");
var showInputs = document.querySelector(".todos-inputs");
botonSuscribirse.addEventListener("click", display);

function display(){
	showInputs.classList.toggle("show");
}

function confirm(){
	alert("Muchas gracias por suscribirte");
}