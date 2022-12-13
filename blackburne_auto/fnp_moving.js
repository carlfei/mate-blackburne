
var arr_moving_blancas_ini=[];
var arr_moving_blancas_end=[];
var arr_moving_negras_ini=[];
var arr_moving_negras_end=[];
var figura_neg=10, figura_n="", figura_n2="", x=0;
var ancho_de_pieza_func="width:40px;";

/*
function reload_js(){
var arr_moving_blancas_ini=[];
var arr_moving_blancas_end=[];
var arr_moving_negras_ini=[];
var arr_moving_negras_end=[];
var figura_neg=10, figura_n="", figura_n2="", x=0;
var ancho_de_pieza_func="width:40px;";	
	
}

*/

function cambia_ancho_de_pieza(mi_p){
	if(mi_p==0) ancho_de_pieza_func="width:30px;";
	if(mi_p==1) ancho_de_pieza_func="width:20px;";
	
}


function carga_moving(arr_moving_bla, arr_moving_neg){
	
	for(i=0; i<arr_moving_neg.length; i++){
	arr_moving_negras_ini[i]=arr_moving_neg[i][0];
	arr_moving_negras_end[i]=arr_moving_neg[i][1];
			}
		
		
		for(i=0; i<arr_moving_bla.length; i++){  //i=1  para que no añada la pieza protagonista
		arr_moving_blancas_ini[i]=arr_moving_bla[i][0];
		arr_moving_blancas_end[i]=arr_moving_bla[i][1];
		}
		
}


function que_blanca(par, xk){
	
	if(par==0){
	return arr_moving_blancas_ini[xk];
	
	}
	
	if(par==1){
	return arr_moving_blancas_end[xk];

	}
	
	
}



function to_negras(figura_neg){

figura_n2=la_fig_neg(figura_neg);



id585=setInterval(mueve_las_negras,1500);

function mueve_las_negras(){

id585=clearInterval(id585);	
id_move_2=setInterval(move,2000);
//alert(arr_moving_negras_end[x]);
 $("."+arr_moving_negras_ini[x]).css("visibility", "hidden");  
 
 //$("#"+arr_moving_negras_end[x]).html("<img class='"+arr_moving_negras_end[x]+"' src='"+figura_n2+"' style='width:40px;'/>");
 $("#"+arr_moving_negras_end[x]).html("<img class='"+arr_moving_negras_end[x]+"' src='"+figura_n2+"' style='"+ancho_de_pieza_func+"'/>");
 x++;
 
 if(x==arr_moving_negras_end.length) x=0;
 
 
 bien();
}
//x++;
}


function la_fig_neg(nan_neg){
	
if(nan_neg==0){
figura_n='../J_2/pn.png';
}
	
if(nan_neg==1){
figura_n='../J_2/tn.png';
}
	
if(nan_neg==2){
	figura_n='../J_2/cn.png';
}
	
if(nan_neg==3){
	figura_n='../J_2/an.png';
}
	
if(nan_neg==4){
	figura_n='../J_2/rin.png';
	}
	
if(nan_neg==5){
	figura_n='../J_2/rn.png';
		}

return figura_n;
	
}