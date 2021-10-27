//var $ = jQuery;
$(function() {
    'use strict';
	
	var $body = $('body');
	$('.header-hamburger').on('click',function(){
		if($body.hasClass('menu-open')){
			$body.removeClass('menu-open');
		}else{
			$body.addClass('menu-open');
		}
	});
	$(window).on('resize', function(){
		$body.removeClass('menu-open');
	})
	
	var $header = $('.header-site,.header');
    $(window).scroll(function(){
        if($(document).scrollTop() >= 50) {
			$header.addClass('scrolled');
        }else{
            $header.removeClass('scrolled');
        }
    });
	if($(document).scrollTop() >= 50){
		$header.addClass('scrolled');
	}
	
	var $abasSlick = $('#h-abas .car-content-action')
	var $abasSlickNav = $('#h-abas .nav-item')
	$abasSlick.slick({
		infinite 		: false,
		draggable 		: false,
		slidesToShow 	: 1,
		slidesToScroll 	: 1,
		arrows 			: false
	});
	$abasSlickNav.on('click', function(e){
		e.preventDefault();
		let target = $(this).data('target')
		$abasSlickNav.removeClass('current')
		$(this).addClass('current')
		$abasSlick.slick('slickGoTo', target)
	})
	
	if($(window).width() < 992){
		$(document).on('click', '.menu-footer h5', function(e){
			e.preventDefault();
			let that = $(this)
			that.parent().find('.mob-colapsed').slideToggle(250);
		})
	}
	
	
	
})