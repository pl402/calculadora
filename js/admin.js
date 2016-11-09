$(document).ready(function(){



	$('#somesetting').blur(function(event){
		event.preventDefault();
		var post = $( "#somesetting" ).serialize();
		$.post( OC.filePath('calculadora', 'ajax', 'seturl.php') , post, function(data){
			$('#calculadora .msg').text('Finished saving: ' + data);
		});
	});



});
