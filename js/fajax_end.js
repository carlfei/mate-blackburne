function fun_ajax_end(dato2){
	
	
	
		var param =dato2;
	
	
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
              console.log ("SERVIDOR DIJO" + result);
       
      
         


        },
        error: function (xhr) {

            var msgError = "Error al intetar cambiar idioma";
            $("#seccionPrincipal").html(msgError);
            console.log(msgError);

        }
    });
	
	
	
	
}