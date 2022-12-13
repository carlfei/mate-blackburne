
<title>&nbsp;&nbsp;&nbsp;&nbsp;MATE BLACKBURNE&nbsp;&nbsp;&nbsp;&nbsp; &lt;/&gt;</title>
<?php include '../inc/cabecera_auto.php';?>

<!--
<body   style=" background-image: url('../chess_img.jpg');">
-->
<body   style="background-color:#EEEEEE;">

<div id="generateImg">  
    
 
  </div>

<center>


<span id="esp"><center id="esp"> </center>

  </span></div>
  



<div class="bordes">
<div id="wrap4">
<?php include '../inc/tablero_blanco.php';?>
</div>




</div> 
<script>
var arr_posi_blancas=[['3','b2'],['3','c2'],['4','e3'],['2','g5'],['5','g1']];
var arr_posi_negras=[['1','f8'],['5','g8'],['0','f7'],['0','h7'],['0','g6']];
var arr_corres_blanco=[['0','../J_2/pb.png'],['1','../J_2/tb.png'],['2','../J_2/cb.png'],['3','../J_2/ab.png'],['4','../J_2/rib.png'],['5','../J_2/rb.png']];
var arr_corres_negro=[['0','../J_2/pn.png'],['1','../J_2/tn.png'],['2','../J_2/cn.png'],['3','../J_2/an.png'],['4','../J_2/rin.png'],['5','../J_2/rn.png']];
var arr_moving_negras=[['h7','h5'],['g6','h5']];
var arr_moving_blancas=[['e3','h3'],['h3','h5'],['c2','h7']];
</script>


 <center>
 
</center>
 </center>
<script src="../js/func_size.js"></script> 
 <script src="fnp.js"></script> 
 <script src="fnp_moving.js"></script>
 
<script>
	
	//<object height="100%" width="100%" type="text/html" data="provider.html"/>
//imagenes de http://www.ajedrezeureka.com/font-ajedrez-chess-merida/
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var entra_logic=0;
var tt=0, uu2=8, uu=8, chit=0, yoorde="", coorde="", id_matriz="";
var arr_todas=[["a1","b1","c1","d1","e1","f1","g1","h1"],["a2","b2","c2","d2","e2","f2","g2","h2"],["a3","b3","c3","d3","e3","f3","g3","h3"],["a4","b4","c4","d4","e4","f4","g4","h4"],["a5","b5","c5","d5","e5","f5","g5","h5"],["a6","b6","c6","d6","e6","f6","g6","h6"],["a7","b7","c7","d7","e7","f7","g7","h7"],["a8","b8","c8","d8","e8","f8","g8","h8"]];
var nan3="", nan="", figura="";
var arr_coor_all=[], comprueba=0, arr=["a","b","c","d","e","f","g","h"];
var arr_posicion=[],arr_luz_brilla=[], atr="", rr=0, dd="";
var rr="", yy=0, xx=0, hh=0, la_figura=10, la_figura2=10,la_figura_neg=10, no_luz=0,  la_coorde="", esta_luz=0;
var id_anterior="", vuelta=0, conmutador=0, cont_mov_neg=0, xk=0, luz_ayuda=0, no_pasa2=0;
var id_global="", hacer_reload=0;

var ancho="width:50px;";
var ancho_ama="50px"
var ancho_pieza="width:40px;";



inicio();

function inicio(){
	//alert("aa");
//	reload_js();
	//reload_js_2();
	
	
var	arr_posi_blancas=[];
var	arr_posi_negras=[];
	
 arr_posi_blancas=[['3','b2'],['3','c2'],['4','e3'],['2','g5'],['5','g1']];
 
 arr_posi_negras=[['1','f8'],['5','g8'],['0','f7'],['0','h7'],['0','g6']];
var arr_corres_blanco=[['0','../J_2/pb.png'],['1','../J_2/tb.png'],['2','../J_2/cb.png'],['3','../J_2/ab.png'],['4','../J_2/rib.png'],['5','../J_2/rb.png']];
var arr_corres_negro=[['0','../J_2/pn.png'],['1','../J_2/tn.png'],['2','../J_2/cn.png'],['3','../J_2/an.png'],['4','../J_2/rin.png'],['5','../J_2/rn.png']];
var arr_moving_negras=[['h7','h5'],['g6','h5']];
var arr_moving_blancas=[['e3','h3'],['h3','h5'],['c2','h7']];
	
	
	
	
	
var tt=0, uu2=8, uu=8, chit=0, yoorde="", coorde="", id_matriz="";
var arr_todas=[["a1","b1","c1","d1","e1","f1","g1","h1"],["a2","b2","c2","d2","e2","f2","g2","h2"],["a3","b3","c3","d3","e3","f3","g3","h3"],["a4","b4","c4","d4","e4","f4","g4","h4"],["a5","b5","c5","d5","e5","f5","g5","h5"],["a6","b6","c6","d6","e6","f6","g6","h6"],["a7","b7","c7","d7","e7","f7","g7","h7"],["a8","b8","c8","d8","e8","f8","g8","h8"]];
var nan3="", nan="", figura="";
var arr_coor_all=[], comprueba=0, arr=["a","b","c","d","e","f","g","h"];
var arr_posicion=[],arr_luz_brilla=[], atr="", rr=0, dd="";
var rr="", yy=0, xx=0, hh=0, la_figura=10, la_figura2=10,la_figura_neg=10, no_luz=0,  la_coorde="", esta_luz=0;
var id_anterior="", vuelta=0, conmutador=0, cont_mov_neg=0, xk=0, luz_ayuda=0, no_pasa2=0;
var id_global="", hacer_reload=0;
//////////////////////////////////////////////////////////////////////////////////////////////////////////


var tamanyo=$(window).width();


var ancho="";
var ancho_ama=""
var ancho_pieza="";


ancho=func_size(tamanyo,0);
ancho_ama=func_size(tamanyo,1);
ancho_pieza=func_size(tamanyo,2);




inicia_piezas(arr_posi_blancas,arr_posi_negras,arr_moving_blancas,arr_moving_negras,ancho,ancho_pieza,ancho_ama);
}

//inicia_piezas();


//$("."+dd).css("visibility", "hidden");
	 //$("."+nan3).css("visibility", "hidden");





function inicia_piezas(bb,nn,mb,mn,a,ap,aa) {
	arr_posi_blancas=bb;
	arr_posi_negras=nn;
	arr_moving_blancas=mb;
	arr_moving_negras=mn;
	
	ancho=a;
	ancho_pieza=ap;
	ancho_ama=aa;
	
	
			$("#e3").css('background-image', 'url(../J_2/ama.png)');

id_move_33=setInterval(para,2000);
	
	
function para()	{
$("#e3").css('background-image', 'url(../J_2/ne.png)').css('opacity','1');	
id_move_33=clearInterval(id_move_33)	
	
}

	if(entra_logic==1){
	for(i=0; i<arr_moving_blancas.length; i++){
	
	$("."+arr_moving_blancas[i][1]).css("visibility", "hidden");

	}
	
	for(i=0; i<arr_moving_negras.length; i++){
	
	$("."+arr_moving_negras[i][1]).css("visibility", "hidden");

}
	
	
	
	
	}
	entra_logic=1;
	
	
	
//alert();
for(i=0; i<arr_posi_negras.length; i++){
	var fry=arr_posi_negras[i][0];
	
	 fry=parseInt(fry);
	

	
	figura=arr_corres_negro[fry][1];

$("#"+arr_posi_negras[i][1]).html("<img class='"+arr_posi_negras[i][1]+"' src='"+figura+"' style='"+ancho_pieza+"'/>");	
	}
//alert(arr_posi_blancas.length);
for(i=0; i<arr_posi_blancas.length; i++){
	fry=arr_posi_blancas[i][0];
	fry=parseInt(fry);
	figura=arr_corres_blanco[fry][1];

$("#"+arr_posi_blancas[i][1]).html("<img class='"+arr_posi_blancas[i][1]+"' src='"+figura+"' style='"+ancho_pieza+"'/>");	
	}

	
	/*
for(i=0; i<arr_posi_blancas.length; i++){
	
	$("."+arr_posi_blancas[i][1]).draggable();

	}
	
*/	


carga(arr_posi_blancas,arr_posi_negras);
carga_moving(arr_moving_blancas,arr_moving_negras);
cont_mov_neg=0;
intervalo();
//drop();
}


//drop();


function order(xx,yy,rr){
	
	if(rr==500){
	arr_coor_all=[];
			if(nan==0) {
			rr=la_coorde; arr_coor_all=peon(xx,yy,rr);
			}
			if(nan==1) arr_coor_all=torre(xx,yy,rr);
			if(nan==2) arr_coor_all=caballo(xx,yy,rr);
			if(nan==3) arr_coor_all=alfil(xx,yy,rr);
			if(nan==4) arr_coor_all=reina(xx,yy,rr);
			if(nan==5) arr_coor_all=rey(xx,yy,rr);
		
		}
	
	
	
if(rr==1000)	{
	//alert("en order: nan: "+nan+" rr: "+rr);
	arr_coor_all=[];
if(nan==0){
	
	figura='../J_2/pb.png';
	rr=la_coorde;
	arr_coor_all=peon(xx,yy,rr);
	
	}
	
	
	
	if(nan==1){
	figura='../J_2/tb.png';
	arr_coor_all=torre(xx,yy,rr);

	}
	
if(nan==2){
	figura='../J_2/cb.png';
	arr_coor_all=caballo(xx,yy,rr);
	
	}
	
	
	
	if(nan==3){
	figura='../J_2/ab.png';
	arr_coor_all=alfil(xx,yy,rr);
	
	}
	
	if(nan==4){
		figura='../J_2/rib.png';
	arr_coor_all=reina(xx,yy,rr);
	
	}
	
		if(nan==5){
	figura='../J_2/rb.png';
	arr_coor_all=rey(xx,yy,rr);
	
	}
}
}

cambia();
 function cambia(){
 
chit=0; tt=0; uu2=8; uu=8;
for(var i=0; i<64; i++){

						if(chit==0){
					
						$("#"+arr[tt]+uu).css('background-image', 'url(../J_2/bl.png)').css('opacity','1');
						

						tt++; 
					
						
						$("#"+arr[tt]+uu).css('background-image', 'url(../J_2/ne.png)').css('opacity','1');
						
						
						}

						if(chit==1){
						$("#"+arr[tt]+uu).css('background-image', 'url(../J_2/ne.png)').css('opacity','1');

						

						tt++; 
						$("#"+arr[tt]+uu).css('background-image', 'url(../J_2/bl.png)').css('opacity','1');

						

						}
								tt++;


			if(tt==8){
			tt=0; uu2=uu2-1;
			uu=uu2;

			if(chit==0){
			chit=1;
			}else{
			chit=0;
			}

			}

}





	$("#e3").css('background-image', 'url(../J_2/ama.png)');

id_move_331=setInterval(para_2,2000);
	
	
function para_2()	{
$("#e3").css('background-image', 'url(../J_2/ne.png)').css('opacity','1');	
id_move_331=clearInterval(id_move_331)	
	
}




}


function off_li(){
	
cambia();	
}



function drop(){

 for(j=0; j<=8; j++){
		 for(i=0; i<=8; i++){
			atr="#"+arr[i]+""+j;
	
			$( atr ).droppable({
			drop: function( event, ui ) {
				fun_tor($(this).attr("ID"));
					}
									});
								
 }
 
 }
 
 } 


function fun_tor(dd){
	
move(dd,0,0);
}






function esta_blanca(ff){

	var mn3 = ff.toString();
var caja3=arr_todas[mn3.charAt(1)][mn3.charAt(0)];


var existe=0;
for(hh=0; hh<arr_posi_blancas.length; hh++){
	
	if(caja3==arr_posi_blancas[hh][1] && caja3!=la_coorde){
	existe=1;
	
	
	}
	
	}
	
	return existe;
	}



function esta_negra(ff){

var mn2 = ff.toString();

var caja=arr_todas[mn2.charAt(1)][mn2.charAt(0)];

var existe=0;
for(hh=0; hh<arr_posi_negras.length; hh++){
	
	if(caja==arr_posi_negras[hh][1]){
	existe=1;

	}
	
	}

	return existe;
	
	}




function saber_coordenada(dd){
	
	var sisi=0;
	for(i3=0; i3<8; i3++){
		
		for(hh=0; hh<8; hh++){
	
		if(arr_todas[i3][hh]==dd){
		coorde=hh+""+i3;
			
			sisi=1;
			i3=9; hh=9;
			
		}
	}
	
	}
	
	if(sisi==1){
		return coorde;
		}else{
		coorde="";
		return coorde;
		}
	
	
}

function saber_figura(dd){
	var yes=0, numert=20;

	for(i3=0; i3<arr_posi_blancas.length; i3++){
	
	
			if(i3<arr_posi_blancas.length){
		if(arr_posi_blancas[i3][1]==dd){
		
		
			numert=arr_posi_blancas[i3][0];
			numert=parseInt(numert);
			yes=1;
			}
	}
		}
	
	return numert;
	}
	

function saber_figura_neg(dd){
	var yes=0, numert=20;

	for(i3=0; i3<arr_posi_negras.length; i3++){
	
	
			if(i3<arr_posi_negras.length){
				if(arr_posi_negras[i3][1]==dd){
		
			numert=arr_posi_negras[i3][0];
			numert=parseInt(numert);
			yes=1;
			
			}
	}
		}
	
	return numert;
	}	
	
	
	
	
	
function fun_tor44(){
	
	if(luz_ayuda==1){
		cambia();
		luz_ayuda=0;
		}
	
	arr_luz_brilla=[];
	for (i=0; i<arr_coor_all.length; i++){
	
	
	
var mn2 = arr_coor_all[i].toString();
var caja=arr_todas[mn2.charAt(1)][mn2.charAt(0)];
	
	
	
	if(i==0){
	$("#"+la_coorde).css('background-image', 'url(../J_2/ama.png)');	
		}
		if((i!=0 && caja!=la_coorde) || (i==0 && caja!=la_coorde)){
	$("#"+caja).css('background-image', 'url(../J_2/ama.png)');
	arr_luz_brilla[i]=caja;
		}
	
	}
arr_luz_brilla[i]=la_coorde;
esta_luz=1;


	}

	
	

  $(".uno").mousedown(function(){
    

la_coorde=(this.id);
nan3=la_coorde;
la_figura=saber_figura(this.id);
id_matriz=(this.id);

la_figura=parseInt(la_figura);
	
	
nan=la_figura;
	
	
rr=saber_coordenada(la_coorde);
rr=rr.toString();
yy=rr.charAt(0);
xx=rr.charAt(1);

xx=parseInt(xx);
yy=parseInt(yy);
	
	
	
order(xx,yy,1000);
	
	if(esta_luz==1) { 
	for(i=0; i<arr_luz_brilla.length-1; i++){
	
	if(arr_luz_brilla[i]==this.id){

	move(arr_luz_brilla[arr_luz_brilla.length-1],1, this.id); //el ide de la pieza esta en el ultimo elemento del array
	i=arr_luz_brilla.length;
	}
	
	
	
	}
	}

	
	if(esta_luz==1) { //esta el tablero encendido
	esta_luz=0;
	cambia();
	conmutador=1;
	}
	
	
	if((this.id==id_anterior && esta_luz==0 && conmutador==0) && no_luz==0){ //por si la pieza se pone en casilla falsa y vuelve a posicion guarda el mismo id
		fun_tor44();
	}
	
	
	if((this.id!=id_anterior || vuelta==1) && no_luz==0){ //por si la pieza se pone en casilla falsa y vuelve a posicion guarda el mismo id
		vuelta=0;
		fun_tor44();
	}
	
	
	
	no_luz=0;
	conmutador=0;

	
id_anterior=this.id;	
	
    });
	
	
	
	
		$(".uno").click(function(){
	
	
	
	
});
	
	
	
	
	function intervalo(){
	id_move=setInterval(move,2000);
	}
	
	
	var uno_dos=0;
	function move(dd,ee,mm){
	//alert(cont_mov_neg);
	if(id_move) id_move=clearInterval(id_move);
	if(uno_dos==1) id_move_2=clearInterval(id_move_2);
	
	uno_dos=1;
	ee=1;
	mm=arr_moving_blancas[cont_mov_neg][1];

	
	
	dd=arr_moving_blancas[cont_mov_neg][0];
	
	la_figura2=saber_figura(dd);

	la_figura2=parseInt(la_figura2);
	nan=la_figura2;
	

	
									if(ee==1){
								nan3=dd; no_luz=1; dd=mm;
									}
	
	
									rr=saber_coordenada(dd);
									rr=rr.toString();
									yy=rr.charAt(0);
									xx=rr.charAt(1);

									xx=parseInt(xx);
									yy=parseInt(yy);

									var no_pasa=1;
									no_pasa2=0;


			for(i=0; i<arr_coor_all.length; i++){
				
				if(arr_coor_all[i]==rr){
				no_pasa=0;
					}
				
				}

	if(que_blanca(0,xk)==nan3 && que_blanca(1,xk)==dd) {
	xk++;
	}else {
	no_pasa2=1;
	}

nan3=arr_moving_blancas[cont_mov_neg][0]; 
dd=arr_moving_blancas[cont_mov_neg][1];
no_pasa=0;
id_global=arr_moving_blancas[cont_mov_neg][0];
if((((no_pasa==0 &&  arr_moving_blancas[cont_mov_neg][1]==dd && arr_moving_blancas[cont_mov_neg][0]==id_global ) || (no_pasa==0 &&  comprueba==0 && arr_moving_blancas[cont_mov_neg][1]==dd)) && arr_moving_blancas[cont_mov_neg][0]==id_global) || (ee==1 && no_pasa2==0)){  //ee==1 que se va a mover por click

arr_coor_all=[];
order(xx,yy,1000);
if(nan==0){
	rr=la_coorde;
	arr_coor_all=peon(xx,yy,1000);
	
	}
	
	if(nan==1){
	
	arr_coor_all=torre(xx,yy,1000);
	}
	
if(nan==2){
	arr_coor_all=caballo(xx,yy,1000);
	}
	
	if(nan==3){
	arr_coor_all=alfil(xx,yy,1000);
	}
if(nan==4){
	
	arr_coor_all=reina(xx,yy,1000);
	}
	if(nan==5){
	
	arr_coor_all=rey(xx,yy,1000);
	}


	
	
	var come=0;
	for(i=0; i<arr_posi_negras.length; i++){
	
	if(arr_posi_negras[i][1]==dd){
	
	come=1;
	}
	}
	
	//comprueba la pieza pro su coordenada inicial
	var booleano_come_entra=0;
if(come==0 && arr_moving_blancas[cont_mov_neg][1]==dd){ //**
	booleano_come_entra=1; //**

		$("."+nan3).css("visibility", "hidden");
 

							
$("#"+dd).html("<img class='"+dd+"' src='"+figura+"' style='"+ancho_pieza+"'/>");
	//$("."+dd).draggable();


	for(i=0; i<arr_posi_blancas.length; i++){  //actualiza la nueva posicion de la blanca en el array
		if(arr_posi_blancas[i][1]==nan3) {
			arr_posi_blancas[i][1]=dd;
		
			i=arr_posi_blancas.length; //para que salga del bucle
			}
		}
		
		
		
bien();		
carga(arr_posi_blancas,arr_posi_negras);

//order(xx,yy,500);
//order(xx,yy,1000);


	}else{


mal();
//$("."+nan3).draggable({  revert: true, revertDuration: 100 });
vuelta=1;

}
	
	
if(come==1 && arr_moving_blancas[cont_mov_neg][1]==dd){ //**
	booleano_come_entra=1; //**

	
	elimina_negra_array();
	
	function elimina_negra_array(){ //elimina del array la pieza negra que a comida la blanca
	for(i=0; i<arr_posi_negras.length; i++){
	
	if(arr_posi_negras[i][1]==dd){
	
	arr_posi_negras.splice(i, 1);
	
	break;
	
	}
	}
	
	}
	/////////////////////////////////////////////////////////////////////////////////////
	
	
	
	$("#"+dd).html("<img class='"+dd+"' src='../J_2/t.png' style='"+ancho_pieza+"'/>");
	$("."+dd).css("visibility", "hidden");
	 $("."+nan3).css("visibility", "hidden");


$("#"+dd).html("<img class='"+dd+"' src='"+figura+"' style='"+ancho_pieza+"'/>");
	//$("."+dd).draggable();
	
	
	
	actualiza_blancas();
	
	function actualiza_blancas(){
		for(i=0; i<arr_posi_blancas.length; i++){  //actualiza la nueva posicion de la blanca en el array
		if(arr_posi_blancas[i][1]==nan3) {
			arr_posi_blancas[i][1]=dd;
		
			i=arr_posi_blancas.length; //para que salga del bucle
			}
		}
	}
	bien();
//order(xx,yy,500);
order(xx,yy,1000);
	
}else{

if(booleano_come_entra==0 && vuelta==0){ //**

mal();
//$("."+nan3).draggable({  revert: true, revertDuration: 100 });
vuelta=1;
}

}
	
	
	
	
	
	
	
	
	
	
	
	if(cont_mov_neg<arr_moving_negras.length){
	move_actualiza_negras();	
		}else{
		cont_mov_neg=0; win();
		}
	
	
	
function move_actualiza_negras(){  //hace movimiento de la negra y actualiza en array negro si come actualiza el array blanco
	if(booleano_come_entra==1){ //**
la_figura_neg=saber_figura_neg(arr_moving_negras[cont_mov_neg][0]);
to_negras(la_figura_neg);

	}
for(i=0; i<arr_posi_negras.length; i++){  //actualiza la nueva posicion de la blanca en el array
		if(arr_posi_negras[i][1]==arr_moving_negras[cont_mov_neg][0]) {
			arr_posi_negras[i][1]=arr_moving_negras[cont_mov_neg][1];
		
			i=arr_posi_negras.length; //para que salga del bucle
			carga(arr_posi_blancas,arr_posi_negras);
		carga_moving(arr_moving_blancas,arr_moving_negras);
			}
			}

			
			
////////////////////////////////////////////////////////////////////////////			
			
	for(i=0; i<arr_posi_blancas.length; i++){  //si la negra a comido blanca la blanca se elimina del array
	
	if(arr_moving_negras[cont_mov_neg][1]==arr_posi_blancas[i][1]){
		arr_posi_blancas.splice(i, 1);
	
		carga(arr_posi_blancas,arr_posi_negras);
		carga_moving(arr_moving_blancas,arr_moving_negras);
	break;
		}
	
	}
			
cont_mov_neg++;
}


	if(esta_luz==1){  //si al soltar la pieza en la casilla esta esta en luz
		cambia();
		esta_luz=0;
		}
	
	
	
come=0;
	
	
nan3=dd;
id_matriz=dd;
ee=0;
}else{
mal();
//$("."+nan3).draggable({  revert: true, revertDuration: 100 });
vuelta=1;

}


if(comprueba==0 && no_pasa==1){
if(booleano_come_entra==0){ //**
mal();
//$("."+nan3).draggable({  revert: true, revertDuration: 100 });


vuelta=1;

}
}


comprueba=1;


	}

	
	function que_blanca_ayuda(help1, help2){
	
	if(esta_luz==1) { //esta el tablero encendido
	esta_luz=0;
	cambia();
	
	}
	
	var la_coorde_h=que_blanca(help1, help2);
		$("#"+la_coorde_h).css('background-image', 'url(../J_2/ama_ma.png)');
		
		luz_ayuda=1;
	
	}
	
	
	
	function fun_ayuda(){
	boton(); //**
	que_blanca_ayuda(1,xk);
	}
	
	
	
	function fun_reload(){
	id_move_3=clearInterval(id_move_3); 
	//	location.reload();
	inicio();
		}
	
			function fun_home(){
			boton(); //**
    linkDestino="../";
			
	window.location = linkDestino;
}

function bien(){
	
		var	 audioElement= document.createElement('audio');
		audioElement.setAttribute('src', '../audios/bien.mp3');
		//audi();
		function audi(){
		audioElement.play();
		}
		
}	


function mal(){

				var	 audioElement= document.createElement('audio');
				
	audioElement.setAttribute('src', '../audios/mal.mp3');
		//audi();
		function audi(){
		audioElement.play();
		}
		
	
}
function boton(){
	
				var	 audioElement= document.createElement('audio');
			
			audioElement.setAttribute('src', '../audios/boton.mp3');
		//audi();
		function audi(){
		audioElement.play();
		}
		
	
}




function win(){
	
	var	 audioElement= document.createElement('audio');
			
	audioElement.setAttribute('src', '../audios/win.mp3');
		//audi();
		function audi(){
		audioElement.play();
		}
		
	////////////////////////AJAX///////////////////////////
	/*
		var param ="win";
	
	
	var p_idioma=param;
	
	 var param = {
        "lang": p_idioma

};
	
	
	
	 $.ajax({
        data: param,
        url: '../ind.php',
        type: 'post',
        dataType: 'html',
        beforeSend: function (xhr) {

        

        },
        success: function (result, status, xhr) {
         //     console.log ("SERVIDOR DIJO" + result);
       
      
         


        },
        error: function (xhr) {

      //      var msgError = "Error al intetar cambiar idioma";
        //    $("#seccionPrincipal").html(msgError);
         //   console.log(msgError);

        }
    });
	
	
	*/
	
//	id_move=clearInterval(id_move);
	
	id_move_3=setInterval(fun_reload,3000);
	
	
}


function onResize(){ 
	if(tamanyo2<900){ 
	location.reload();
	}
	}

var timer;
$(window).bind('resize', function(){
	tamanyo2=$(window).width();
   timer && clearTimeout(timer);
   timer = setTimeout(onResize, 50);
});



$(".uno").mousedown(function() { //**
	id_global=$(this).attr("ID");
   
});

</script>

 </body>
</html>
