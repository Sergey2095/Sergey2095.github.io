    $(document).ready(function(){
		    $('.single-item').slick({
      centerMode: true,
      slidesToShow: 5,
	  autoplay: true,
	  autoplaySpeed:1500,
    });
	});
	$(document).ready(function() {
	var searchSubmit = $(".search-submit");
	var searchText = $(".search-text"); 
	var header = $(".header");// Меню
	var headerBottomPanel = $('.header-bottom-panel');
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		
		if(scrolled > 50){
			header.css({
			"top": -80+ "px"
		});
		headerBottomPanel.css({
			"padding-top":+20+"px",
			"background-color":"#005A69"
		});
		}else{
			header.css({
			"top": 0 + "px"
		});
		headerBottomPanel.css({
			"padding-top":0+"px",
			"background":"transparent"
		});
		}
			
	});	
searchSubmit.click(function(){
			searchText.css({
			"width":200+"px",
			"z-index":"1",
			"cursor":"text",
			"background-color":"#fff",
			"right":30+"px"
		});
})
	
	});

		