function func_size(tamanyo, nume){
		
var ancho="width:50px;";
var ancho_ama="50px";
var ancho_pieza="width:40px;";
if(tamanyo<900 && tamanyo>=550){
	
	ancho="width:37.5px;";
	ancho_pieza="width:30px;";
	ancho_ama="37.5px"
	cambia_ancho_de_pieza(0);

}

if(tamanyo<550){
	
	ancho="width:25px;";
	ancho_pieza="width:20px;";
	ancho_ama="25px"
	cambia_ancho_de_pieza(1);

}
	
if(nume==0)	return ancho;
if(nume==1)	return ancho_ama;
if(nume==2)	return ancho_pieza
	
	
}