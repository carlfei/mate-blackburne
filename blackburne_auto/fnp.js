








var arr_posi_blancas2=[];
var arr_posi_negras2=[];
var figura_incial="";


/*

function reload_js_2(){

var arr_posi_blancas2=[];
var arr_posi_negras2=[];
var figura_incial="";


	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	var existe_n=0;
	var neg=0;
	var rep=0;
	




}
*/


function carga(arr_bla, arr_neg){
	
	
	arr_posi_blancas2=[];
	arr_posi_negras2=[];
	
	
	for(i=0; i<arr_neg.length; i++){
	arr_posi_negras2[i]=saber_coordenada(arr_neg[i][1]);
			}
		
		
		for(i=1; i<arr_bla.length; i++){  //i=1  para que no añada la pieza protagonista
		arr_posi_blancas2[i-1]=saber_coordenada(arr_bla[i][1]);
		}
			
}



/*
function negras(pie_negr){
	var poxit=[]; var con_t=0;
	for(i=0; i<arr_posi_negras2.length; i++){
	
	for(h=0; h<pie_negr.length; h++){
				if(arr_posi_negras2[i]==pie_negr[h]){
					poxit[con_t]=arr_posi_negras2[i];
					con_t++;
					}
		}
	
	
	}
	return poxit;
	
}


function blancas(pie_blanc){
	var poxit2=[]; var con_t=0;
	for(i=0; i<arr_posi_blancas2.length; i++){
		
	for(h=0; h<pie_blanc.length; h++){
				if(arr_posi_blancas2[i]==pie_blanc[h]){
					poxit2[con_t]=arr_posi_blancas2[i];
					con_t++;
					}
		}
	
	
	}
	return poxit2;
			
	
}

*/
 function peon(xx, yy,rr){
 
 
	   if(figura_incial==""){
		 figura_incial=rr;
		 }
	 var yy2=yy;
	var xx2=xx;
	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	var existe_n=0;
	var neg=0;
	var rep=0;
	repit();
	function repit(){
	if(xx2<=6){
	  yy2=yy2; xx2=++xx2;
	  
	 
	  
	  casty=yy2+""+xx2;
			
			
			
					if(existe_n==0){
				//	existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					existe_n=esta_negra(casty);  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
				//comprobar lateral
				
				
				
				
			}
	  
	 
	  
	}
	
	
	  if((rr=="a2" || rr=="b2" || rr=="c2" || rr=="d2" || rr=="e2" || rr=="f2" || rr=="g2" ||rr=="h2") && rep==0){
		  
		  rep=1; repit();
		  }
 }
 
 
 
 if(rep==0){ //para marcar posiciones de comer lateral del peon
 	yy2++;
					casty=yy2+""+xx2;
					existe_n=esta_negra(casty);
					if(existe_n==1) {
				arr_coor_rey[cont_num]=casty;
				cont_num++; 
				existe_n=0;
				
					}
 
	yy2=yy;
	
	yy2--;
					casty=yy2+""+xx2;
					existe_n=esta_negra(casty);
					if(existe_n==1) {
				arr_coor_rey[cont_num]=casty;
				cont_num++; 
				existe_n=0;
				
					}
 }
	
 
 
 

	 return arr_coor_rey;
	
 }


 function rey(xx, yy, rr){
	  if(figura_incial==""){
		 figura_incial=rr;
		 }
	 var yy2=yy;
	var xx2=xx;
	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	var existe_n=0;
	var neg=0;
	
	if(yy2<=6){
	  yy2=++yy2; xx2=xx2;
	  
	  casty=yy2+""+xx2;
			
			
			
					if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	  
	  
	  
	}
	
	
	
	
	if(yy>=1){
	
	existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=--yy2; xx2=xx2;
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
					if(existe_n==0){
						existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	}
	
	if(xx<=6){
	existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=yy2; xx2=++xx2;
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	}
	 
	 if(xx>=1){
	 existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=yy2; xx2=--xx2;
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
					if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0  || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	 }
	 
	 if(xx<=6 && yy<=6){
	 existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=++yy2; xx2=++xx2;
	 
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0  || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	 }
	 
	 if(xx>=1 && yy<=6){
	 existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=++yy2; xx2=--xx2;
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0  || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	 }
	 
	 if(xx<=6 && yy>=1){
	 existe_n=0; neg=0;
	 yy2=yy; xx2=xx; yy2=--yy2; xx2=++xx2;
	 
	 casty=yy2+""+xx2;
			
			
			
					if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0  || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	 }
	
	if(xx>=1 && yy>=1){
	existe_n=0; neg=0;
	  yy2=yy; xx2=xx; yy2=--yy2; xx2=--xx2;
	  
	  	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	  
	}
	 
	 
	 return arr_coor_rey;
	
 }
	 
	 
 function torre(xx, yy, rr){
	  if(figura_incial==""){
		 figura_incial=rr;
		 }
	 var yy2=yy;
	var xx2=xx;
	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	
	var existe_n=0;
	
	var neg=0;
	
	if(xx<=7){  //---->x derecha
			existe_n=0; neg=0;
		for(i=xx; i<=7; i++){
			xx2=i;
			casty=yy+""+xx2;
			
			
			
					if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
		
			}
		}
		
		if(xx>=0){
		existe_n=0; neg=0;
		for(i=xx; i>=0; i--){   //        hacia x izquierda<----
			xx2=i;
			
			casty=yy+""+xx2;
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
					
			
			if(existe_n==0 || neg==1){
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
					}
			}
		}
	
	if(yy<=7){
			existe_n=0; neg=0;
		for(i=yy; i<=7; i++){
			yy2=i;
			casty=yy2+""+xx;
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
					if(existe_n==0 || neg==1){
				arr_coor_rey[cont_num]=casty;    //haica arriba y
				cont_num++;  neg=0;
			}
		}
	}
		
		if(yy>=0){
		existe_n=0; neg=0;
		for(i=yy; i>=0; i--){
			yy2=i;
			casty=yy2+""+xx;
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
					
					if(existe_n==0 || neg==1){		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
				
					}
				
				
			}
		}
		
	return arr_coor_rey;
	
 }
	 
	  
 function alfil(xx, yy,rr){
	  if(figura_incial==""){
		 figura_incial=rr;
		 }
	var yy2=yy;
	var xx2=xx;
	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	var existe_n=0;
	var neg=0;
	if(xx<=7 && yy<=7){
	xx2=xx; yy2=yy;
		for(i=xx; xx2<=7 && yy2<=7; i++){
			
			xx2+=1; yy2+=1;
			if(xx2<=7 && yy2<=7){
			
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
			}
			}
		}
		
		if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=xx; xx2>=0 && yy2>=0; i--){
			
			xx2-=1; yy2-=1;
			if(xx2>=0 && yy2>=0)	{
			
			
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
			
			}
			}
		}
	
	
	if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=7; xx2<=7 && yy2>=0; i--){
			//xx2=i; yy2=i;
			xx2+=1; yy2-=1;
			if(xx2<=7 && yy2>=0)	{
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
		
					}
			}
		}
	
	
	if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=7; xx2>=0 && yy2<=7; i--){
			//xx2=i; yy2=i;
			xx2-=1; yy2+=1;
			if(xx2>=0 && yy2>=0)	{
			
			
				
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
			
					}
			}
		}
	
	
	
	
	
	
	
	return arr_coor_rey;
	
 }
 
  
 function reina(xx, yy, rr){
	 if(figura_incial==""){
		 figura_incial=rr;
		 }
	 
	var yy2=yy;
	var xx2=xx;
	var cont_num=0;
	var arr_coor_rey=[];
	var casty=0;
	var existe_n=0;
	var neg=0;
	if(xx<=7){
	
		for(i=xx; i<=7; i++){
			xx2=i;
				
			casty=yy+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			}
		}
		
		if(xx>=0){
		existe_n=0; neg=0;
		for(i=xx; i>=0; i--){
			xx2=i;
			casty=yy+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			}
		}
	
	if(yy<=7){
		existe_n=0; neg=0;casty=0;
		for(i=yy; i<=7; i++){
			yy2=i;
			casty=yy2+""+xx;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			}
		}
		
		
		if(yy>=0){
		casty=0; existe_n=0; neg=0;
		for(i=yy; i>=0; i--){
			yy2=i;
			casty=yy2+""+xx;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			}
		}
	
	
	
	//////////////////////////////fin torre
	
if(xx<=7 && yy<=7){
	xx2=xx; yy2=yy;
	existe_n=0; neg=0;
		for(i=xx; xx2<=7 && yy2<=7; i++){
			
			xx2+=1; yy2+=1;
			if(xx2<=7 && yy2<=7){
			
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
					existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
	
				arr_coor_rey[cont_num]=casty;
			
				cont_num++;  neg=0;
			}
			
			}
			}
		}
		
		if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=xx; xx2>=0 && yy2>=0; i--){
			
			xx2-=1; yy2-=1;
			if(xx2>=0 && yy2>=0)	{
			
			
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
			
			}
			}
		}
	
	
	if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=yy; xx2<=7 && yy2>=0; i--){
			//xx2=i; yy2=i;
			xx2+=1; yy2-=1;
			if(xx2<=7 && yy2>=0)	{
			
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
					existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
		
				arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
		
					}
			}
		}
	
	
	if(xx>=0 && yy>=0){
		xx2=xx; yy2=yy;
		existe_n=0; neg=0;
		for(i=xx; xx2>=0 && yy2<=7; i--){
			//xx2=i; yy2=i;
			xx2-=1; yy2+=1;
			if(xx2>=0 && yy2<=7)	{
			
			
				
			casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
			
			
					}
			}
		}
	
	
	
	
	
	
	
	return arr_coor_rey;
	
 }
 
 
 
 
  function caballo(xx, yy,rr){
	  if(figura_incial==""){
		 figura_incial=rr;
		 }
	var yy2=yy;
	var xx2=xx;
	var arr_coor_rey=[];
	var cont_num=0;
	var casty=0;
	var existe_n=0;
	var neg=0;
	
	yy2=yy+2;
	xx2=xx+1;  //arriba derecha
	
	 if(xx<=6 && yy<=5){
	 
	 
	 
	 	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	 
	 
	 }
	 
	yy2=yy+2;
	xx2=xx-1;  //arriba izquierda
	existe_n=0; neg=0;
	if(xx>=1 && yy<=5){
	
	
	
		casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	
	}
	  
	yy2=yy+1;
	xx2=xx+2;  //medio arriba derecha
	  existe_n=0; neg=0;
	if(xx<=5 && yy<=6){
	
	
		casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	
	}
	 
	yy2=yy+1;
	xx2=xx-2;  //medio arriba izquierda
	existe_n=0; neg=0;
	if(xx>=2 && yy<=6){
	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	}
	
	yy2=yy-2;
	xx2=xx+1;  //abajo derecha 
existe_n=0; neg=0;
	 
	if(xx<=6 && yy>=2){
	 	casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	}
	 
	yy2=yy-2;
	xx2=xx-1;  //abajo izquierda 

	existe_n=0; neg=0;
	if(xx>=1 && yy>=2){
		casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	}
	 
	yy2=yy-1;
	xx2=xx+2;  //medio abajo derecha
	existe_n=0; neg=0;
	if(xx<=5 && yy>=1){ 
		casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	}
	
	yy2=yy-1;
	xx2=xx-2;  //medio abajo izquierda
	existe_n=0; neg=0;
	
	if(xx>=2 && yy>=1){ 
		casty=yy2+""+xx2;
			
			
			
			if(existe_n==0){
				existe_n=esta_negra(casty);    if(existe_n==1)  neg=1;  
					}
					
					if(existe_n==0 && casty!=figura_incial){
						existe_n=esta_blanca(casty);
					}
		
	
			if(existe_n==0 || neg==1){
			
			arr_coor_rey[cont_num]=casty;
				cont_num++;  neg=0;
			}
	}
	 
	 return arr_coor_rey;
	
 }
	
 