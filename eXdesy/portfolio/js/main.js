$(document).ready(function(){
	$('buttons .filter[category="all"]');
	$('.filter').click(function(){
		var categor = $(this).attr('category');
		console.log(categor);
		$('.card').css('scale(0)');
		function hideProduct(){
			$('.card').hide();
		} setTimeout(hideProduct,400);
		function showCategor  (){
			$('.card[category="'+categor+'"]').show();
			$('.card[category="'+categor+'"]').css('scale(1)');
		} setTimeout(showCategor,400);
	});
	$('.filter[category="all"]').click(function(){
		function showAll(){
			$('.card').show();
			$('.card').css('scale(1)');
		} setTimeout(showAll,400);
	});
});

let fondoCambiado = false;
let cambioFondo = document.querySelector('#tema');
cambioFondo.addEventListener('click', () => {
	if (!fondoCambiado) {
		document.body.style.backgroundImage = "url('../img/bgWhite.png')";
	} else {
		document.body.style.backgroundImage = "none";
	}
	fondoCambiado = !fondoCambiado;
});
