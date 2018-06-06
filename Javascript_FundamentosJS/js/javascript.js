var estudiantes=[
			{
				"codigo":"1",
				"nombre":"Jessica James",
				"nota":13
			},
			{
				"codigo":"2",
				"nombre":"Jimmy Perez",
				"nota":20
			},	
			{
				"codigo":"3",
				"nombre":"Carolina Villanueva",
				"nota":12
			},	{
				"codigo":"4",
				"nombre":"Julio Mendoza",
				"nota":14
			},	{
				"codigo":"5",
				"nombre":"Yeni Borges",
				"nota":18
			},	{
				"codigo":"6",
				"nombre":"Carmen Elguetta",
				"nota":9
			},	{
				"codigo":"7",
				"nombre":"Lidia Manrique",
				"nota":17
			},	{
				"codigo":"8",
				"nombre":"Sebastina Buenaventura",
				"nota":12
			},	
			{
				"codigo":"9",
				"nombre":"Jose Teixeira",
				"nota":15
			},
			{
				"codigo":"10",
				"nombre":"Ricardo Mendoza",
				"nota":19
			}
		];

function mostrarJson(){

	console.log(estudiantes)
	console.log(estudiantes.length)
	var out = "-----------Estudiantes-----------<br>";
	
	var i;
	for (i = 0; i < estudiantes.length; i++) { 
		out += "- " + "Codigo:" + estudiantes[i].codigo + "- " + "Nombre:" + estudiantes[i].nombre  + "-"  +"nota:" + estudiantes[i].nota +"<br>";
	}
	document.getElementById("tabla").innerHTML = out;
}

function calcularNotaPromedio(){
	var i;
	var out=0;
	var cant=estudiantes.length;
	
	for (i = 0; i < cant; i++) {
		out +=estudiantes[i].nota;
	}
	out=out/cant;
	document.getElementById("tabla").innerHTML=out;
}
function estudianteMayorNota(){
	
	var i;
	var out=0;
	var nota;
	var nombre;
	var cant=estudiantes.length;
	nombre =estudiantes[0].nombre;
	nota =estudiantes[0].nota;
	
	for (i = 1; i < cant; i++) { 	
		var test= estudiantes[i].nota;
		if(nota < estudiantes[i].nota){
			nombre =estudiantes[i].nombre;
			nota =estudiantes[i].nota;
		}
		document.getElementById("tabla").innerHTML="- Nombre:"+nombre +"- Nota:"+ nota; //nota mayor		
	}
}
function estudianteMenorNota(){
	var i;
	var out=0;
	var nota;
	var nombre;
	var cant=estudiantes.length;
	nombre =estudiantes[0].nombre;
	nota =estudiantes[0].nota;
	
	for (i = 1; i < cant; i++) { 
		
		if(nota > estudiantes[i].nota){
			nombre =estudiantes[i].nombre;
			nota =estudiantes[i].nota;
		}	
		document.getElementById("tabla").innerHTML="Nombre:"+nombre +"- Nota:"+ nota; //nota menor
	}
}