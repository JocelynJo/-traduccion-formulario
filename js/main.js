
function traducirForm(){
	var titulo=document.getElementById("form-signin-heading");

	titulo.innerHTML="Por favor inicia sesión";
	titulo.style="font-size:25px";//cambio tamaño font para ajustar 

	var caja=document.getElementById("inputEmail").placeholder = "Correo Electronico";
	var cajaPass=document.getElementById("inputPassword").placeholder="Contraseña";

	var checkboxTex=document.getElementsByTagName("span")[0];//poner la posicion del arrai en el que esta el texto
	checkboxTex.textContent="Recordar Datos";


	var botonTex=document.getElementsByTagName("button")[0];//poner la posicion del arrai en el que est el texto
	botonTex.textContent="Iniciar Sesión";//en caso de desconocnerla se deberia recorrer el arreglo
}

traducirForm();