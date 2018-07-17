$(document).ready(function(){
	//Efecto del menu
	$('.menu a').each(function(index, elemento){
	   $(this).css({
	   	  'top' : '-200px' 
	   });

	   $(this).animate({
	   	   top: '0'
	   }, 2000 + (index * 500));		

	});

	//Efecto del header
	if( $(window).width() > 800 ){
		$('header .textos').css({
			opacity : 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity : 1,
			marginTop: '-52px'
		}, 1500);
	}
    
    //Efecto Parallax
    $(window).scroll(function(){
		  var windowWidth = $(window).width();

		  if(windowWidth > 800){
		  	var scroll = $(window).scrollTop();

		  	$('header .textos').css({
		  		'transform' : 'translate(0px, ' + scroll / 2 + '%)'
		  	});

		  	$('.acerca-de article').css({
		  		'transform' : 'translate(0px, -' + scroll / 4 + '%)'
		  	});
		  }
	});

	//Restablecemos valores, antes de hacer el efecto
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800){
			$('.acerca-de article').css({
		  		'transform' : 'translate(0px, 0px)'
		  	});
		}
	});

	//Restablecimiento de textos
	$(window).resize(function(){

	});

	
});