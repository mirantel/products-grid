$(document).ready(function() {

$('.class-num').click(function(){
	$( ".products" ).addClass('products_'+ $(this).val())
});

});