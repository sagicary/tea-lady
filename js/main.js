function mostrarData(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var email=document.getElementById("mail").value;
	var mostrar = document.getElementById("clientes");
	mostrar.innerHTML = ("<center><p><h1>Datos usuario: </h1><p><b>Nombre:</b>"+nombre+
		"</p><b>Apellido: </b>"+apellido+
		"</p><b>Email: </b>"+email+"</center>");
}