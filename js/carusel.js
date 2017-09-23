    $(document).ready(function(){
		    $('.single-item').slick({
      centerMode: true,
      slidesToShow: 5,
	  autoplay: true,
	  autoplaySpeed:1500,
    });
	});
	$(document).ready(function() {
	var body = $('body');
	var searchSubmit = $(".search-submit");
	var searchText = $(".search-text"); 
	var header = $(".header");// Меню
	var headerBottomPanel = $('.header-bottom-panel');
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		
		if(scrolled > 50){
			header.css({
			"top": -25+ "px"
		});
		headerBottomPanel.css({
			"padding-top":0+"px",
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
			"right":25+"px"
		});
		searchSubmit.css({
			"background-color":"#5ecb32"
		});
});
body.click(function(e){
			if (!searchText.is(e.target) // если клик был не по нашему блоку
		    && searchText.has(e.target).length === 0 && !searchSubmit.is(e.target) // если клик был не по нашему блоку
		    && searchSubmit.has(e.target).length === 0) {				// и не по его дочерним элементам
			searchSubmit.css({
			"background-color":"transparent"
		});
					searchText.css({
			"width":0+"px",
			"z-index":"0",
			"cursor":"text",
			"background-color":"transparent",
			"right":0+"px"
		});
			}
})
	
	});

		