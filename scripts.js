$(document).ready(function() {
	console.log('i love cats!');
    $('#catPic').attr('src', 'http://www.thecatapi.com/api/images/get');
	$.get('http://www.thecatapi.com/api/images/get').done(function(data){
		console.log(data) ;
	});
});
