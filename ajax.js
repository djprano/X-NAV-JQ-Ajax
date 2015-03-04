jQuery(document).ready(function(){
	$('#pulsador').click(function(){
		$.ajax({
			type: "GET",
			url: "ajax.txt",
			cache: false}).done(function(data){
				$('#contenido').html(data);
			});
		});
});

//python -m SimpleHTTPServer