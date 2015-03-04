jQuery(document).ready(function(){
	$('#pulsador').click(function(){
		$.ajax({
			type: "GET",
			url: "ajax.txt",
			cache: false})
		.done(function(data){
			$('#contenido').html(data);})
		.fail(function(){
			$('#contenido').html('<p>fallo la conexión</p>');
		});
	});
});

//python -m SimpleHTTPServer