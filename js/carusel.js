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
	var headerBottomPanel = $('.header-bottom-panel');
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		
		if(scrolled > 50){
			header.css({
			"top": -50+ "px"
		});
		headerBottomPanel.css({
			"padding-top":+20+"px"
		});
		}else{
			header.css({
			"top": 0 + "px"
		});
		headerBottomPanel.css({
			"padding-top":0+"px"
		});
		}
			
	});				
	});

		function search() {
        $('#searchform').submit(function(){
            if( !$('#s').hasClass('hide') && $('#s').val() == '') {
                return false;
            }

            if($('#s').hasClass('hide')){
                $('#s').clearQueue().animate({
                    width: '100%',
                    padding: '0 46px 0 10px'
                }, 200);

                $('#s').focus();
                $('#s').removeClass('hide');
                $('#searchsubmit').addClass('opening');
                return false;
            }
        });
        $('body').on('click', function(){
            if((!$('#s').hasClass('hide')) && (!$('#s').is(":focus")) && ($('#s').val() == '')){

                $('#s').animate({
                    width: '0',
                    padding: '0'
                }, 200);
                $('#s').addClass('hide');
                $('#searchsubmit').removeClass('opening');
            }
        });
    } search();