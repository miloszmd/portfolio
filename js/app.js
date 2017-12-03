$('.burger').click(function(){
	$('#menu .menu-box').slideToggle();
});

$('#menu .menu-box').click(function(){
	if($(window).width() < 768){
		$(this).slideToggle();
	}
});

$(window).resize(function(){
	if($(window).width() > 768){
		$('#menu .menu-box').show();	
	}else{
		$('#menu .menu-box').hide();
	}

	$('.pic').height($('.pic').width());
});


var menu = [
	welcome = {
		name : 'welcome',
	},
	about = {
		name : 'about',
	},
	education = {
		name : 'education',
	},
	skills = {
		name : 'skills',
	},
	portfolio = {
		name : 'portfolio',
	},
	contact = {
		name : 'contact',
	},
];

$.each(menu, function(menuItem, itemValue){
	$('.' + this.name).click(function(){
		$('.current').removeClass('current');
		$('.' + itemValue.name).addClass('current');

		$('html, body').animate({
	        scrollTop: $("#" + itemValue.name).offset().top - 90
	    }, 1000);
	});
});

$('.section').each( function(i){
    var top_of_object = $(this).offset().top - 100;
    var top_of_window = $(window).scrollTop();
    
    if( top_of_window > top_of_object){
        $('.current').removeClass('current');
        $('.' + this.id).addClass('current');
    }
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
	$(window).on('wheel', function(){
        $('.section').each( function(i){
            var top_of_object = $(this).offset().top - 100;
            var top_of_window = $(window).scrollTop();
            
            if( top_of_window > top_of_object){
                $('.current').removeClass('current');
                $('.' + this.id).addClass('current');
            }
        });
    });
});

$( window ).load(function() {
	var d = new Date();
	
	$('body').css('background-color', 'fff');
	$('body').css('color', '#1d1d1d');

	if(d.getHours() > 17 || d.getHours() < 7){
		$('body').css('background-color', '#1d1d1d');
		$('body').css('color', '#fff');
		$('#contact a').css('color', '#fff');

		$('#contact a').on('mouseover', function(){
			$(this).css('color', '#3498db');
		});

		$('#contact a').on('mouseout', function(){
			$(this).css('color', '#fff');
		});
	}

	$('.pic').height($('.pic').width());
});