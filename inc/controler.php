

<?php
session_start();

$p_lang = isset ($_POST["lang"])?$_POST["lang"]:null;

if ($p_lang!=null){
	
	if($p_lang=="tonto"){
	
	// echo "he cambiado el idioma a ".$p_lang;
    $_SESSION ["tonto"] = $p_lang;
	
	
	
	
	
//	header( 'Location: http://www.yoursite.com/new_page.html' );

	//header("access-control-allow-origin: *");
//require_once 'http://tuweb.com/pagina.html';
	
	
	
//	header("Location: http://tuweb.com/pagina.html");

/*
	 header('Access-Control-Allow-Methods: GET, POST, DELETE');
    // Indica los encabezados permitidos.
    header('Access-Control-Allow-Headers: Authorization');
	header('Status: 301 Moved Permanently', false, 301);
	header('Location: http://tuweb.com/pagina.html');

	*/
	//echo "<script>change_page();</script>";
	//header('Location: http://tuweb.com/pagina.html');
	
	//target.window.location='locationpage.html';
//top.window.location='mypage2.html';
	
    
   
}else{

$_SESSION ["tonto"] =0;
}
}
else{
    
    echo "Algo raro ha pasado al intentar cambiar el idioma a ".$p_lang;   
}
?>









