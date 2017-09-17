    $(document).ready(function(){
		    $('.single-item').slick({
      centerMode: true,
      slidesToShow: 5,
	  autoplay: true,
	  autoplaySpeed:1500,
    });
	});
	$(document).ready(function() {
	
	var header = $(".header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		if(scrolled > 50){
			header.css({
			"top": -55+ "px"
		});
		}else{
			header.css({
			"top": 0 + "px"
		});
		}
			
	});			
});
