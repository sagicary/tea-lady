function mostrarData(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var email=document.getElementById("mail").value;
	var dire=document.getElementById("direccion").value;
	var fono=document.getElementById("fono").value;
	var mostrar = document.getElementById("clientes");
	if (nombre=="" || apellido=="" || mail==""){
		alert("No puede dejar campos vacios");
	}else{
		mostrar.innerHTML = ("<center><p><h1>Datos usuario: </h1><p><b>Nombre:</b>"+nombre+
		"</p><b>Apellido: </b>"+apellido+
		"</p><b>Email: </b>"+email+"</center>");
	}
	
}