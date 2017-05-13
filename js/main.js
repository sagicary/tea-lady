function mostrarData(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var email=document.getElementById("mail").value;
	var dire=document.getElementById("direccion").value;
	var fono=document.getElementById("fono").value;
	var te=document.getElementById("seleccion").value;
	var check=document.getElementById("check").checked;
	console.log(check);
	var mostrar = document.getElementById("clientes");
	if (nombre=="" || apellido=="" || email=="" || dire=="" || fono=="" || te=="" || check==""){
		alert("No puede dejar campos vacios");
	}else{
		mostrar.innerHTML = ("<center><p><h1>Datos usuario: </h1><p><b>Nombre: </b>"+nombre+
		"<p><b>Apellido: </b>"+apellido+
		"<p><b>Email: </b>"+email+
		"<p><b>Dirección: </b>"+dire+
		"<p><b>Teléfono: </b>"+fono+
		"<p><b>Tipo de té: </b>"+te+"</p><b>Estás suscrito al newsletter :)</b></center>");
	}
	
}