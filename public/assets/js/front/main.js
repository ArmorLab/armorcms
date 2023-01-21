$(document).ready(function(){
//    if ($('#homepage-popup').length) {
//        $('.popup-button').click(function(e){
//            $('#homepage-popup').hide();
//            // e.preventDefault();
//            // e.stopPropagation();
//        });
//    }

    //scrollable menu
    if ($('.header').length) {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down');
                }
            }

            lastScrollTop = st;
        }
    }

    if ($('.write').length) {
        setTimeout(
        function()
        {
            $('.write').each(function() {
                var writeIndex = $(this).data('write');

                if (writeIndex == 'phone') {
                    $(this).html('tel. 600-230-325');
                }

                if (writeIndex == 'mail') {
                    $(this).html('e-mail: biuro@armorlab.pl');
                }
            });
        }, 300);
    }

    if ($('.msg-close').length) {
        $('.msg-close').click(function() {
            $(this).parent().slideUp();
        });
    }

    $('#menu-bar').click(function(){
        $('#menu').slideToggle('slow');
    });

    if ($('#cookie-policy-accept').length) {
        $('#cookie-policy-accept').click(function(e){
            var ajaxUrl = $(this).data('url');

            $.ajax({
                url: ajaxUrl,
                type: 'POST',
                dataType: 'json',
                async: true,

                success: function (data, status) {
                    //var cookiePopup = document.querySelector('#cookie-policy-accept');
                    //cookiePopup.parentNode.removeChild(cookiePopup);
                    $('#cookie-policy').hide();
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                    console.log(textStatus);
                }
            });

             e.preventDefault();
             e.stopPropagation();
        });
    }

    if ($('#copyright-policy-accept').length) {
        $('#copyright-policy-accept').click(function(e){
            var ajaxUrl = $(this).data('url');

            $.ajax({
                url: ajaxUrl,
                type: 'POST',
                dataType: 'json',
                async: true,

                success: function (data, status) {
                    //var copyrightPopup = document.querySelector('#copyright-policy-accept');
                    //copyrightPopup.parentNode.removeChild(copyrightPopup);
                    $('#copyright-policy').hide();
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                    console.log(textStatus);
                }
            });

             e.preventDefault();
             e.stopPropagation();
        });
    }
    
    if ($('.tooltip').length) {
        tippy('.tooltip', {
            interactive: true,
            trigger: 'click',
            content: 'Mimo prób nie udało się ustalić autorki/autora. Bardzo prosimy autorkę/autora lub osoby mające informację o autorce/autorze o kontakt.'
        });
    }

    $(document).keydown(function(e) {
    	if ($('.next-document').length || $('.prev-document').length) {
	    	var event = window.event ? window.event : e;

	    	var nextPage = $(".next-document");
	        var prevPage = $(".prev-document");

	        var nextUrl = nextPage.attr("href");
	        var prevUrl = prevPage.attr("href");

            var key = event.keyCode;

	        if (key == 39) {
	            window.location = nextUrl;
	        } else if (key == 37) {
	            window.location = prevUrl;
	        }
    	}
	});
});
