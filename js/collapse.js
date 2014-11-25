$('.collapse').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

$('.social a').on('click',function(e){
	e.stopImmediatePropagation();
});