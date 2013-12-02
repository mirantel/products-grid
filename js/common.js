$(document).ready(function() {

$('.radio_info').on('click', function(){
	$( ".grid-products" ).removeClass('grid-products_info-left grid-products_info-center grid-products_info-right')
	.addClass('grid-products_'+ this.value);
});

$('.fix-height').change( function(){
	$( ".grid-products" ).toggleClass("grid-products_fix-height", this.checked);
});

$('.grid-bg').change( function(){
	$( ".grid-products" ).toggleClass("grid-products_add-bg", this.checked);
});

$('.radio_grid-type').on('click', function(){
	$( ".grid-products" ).removeClass('grid-products_type-1 grid-products_type-2 grid-products_type-3 grid-products_type-4 grid-products_type-5 grid-products_type-6 grid-products_type-7 grid-products_type-8')
	.addClass('grid-products_'+ this.value);
});
});