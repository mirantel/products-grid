$(document).ready(function() {

$('.radio_info').on('click', function(){
	$( ".products" ).removeClass('products_info_left products_info_center products_info_right')
	.addClass('products_'+ this.value);
});

$('.fix-height').change( function(){
	$( ".products" ).toggleClass("products_fix_height", this.checked);
});

$('.radio_grid_type').on('click', function(){
	$( ".products" ).removeClass('products_grid_1 products_grid_2 products_grid_3 products_grid_4 products_grid_5 products_grid_6 products_grid_7 products_grid_8')
	.addClass('products_'+ this.value);
});
});