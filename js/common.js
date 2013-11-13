$(document).ready(function() {

$('.radio_col').on('click', function(){
	$( ".products" ).removeClass('products_col_1 products_col_2 products_col_3')
	.addClass('products_'+ this.value);
});

$('.radio_info').on('click', function(){
	$( ".products" ).removeClass('products_info_left products_info_center products_info_right')
	.addClass('products_'+ this.value);
});

$('.radio_info_vertical').on('click', function(){
	$( ".products" ).removeClass('products_info_above products_info_below')
	.addClass('products_'+ this.value);
});

});