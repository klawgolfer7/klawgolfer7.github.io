$(document).ready(function() {
	// Get stellar going
	$.stellar();

	// Image Carousel click functions

		$('.entry').on('click', function(e) {

		var target = $(e.target)
		var src = target.attr('src')

		$('.lightbox img').attr('src', src);

		$('body').addClass('lightbox-active');
		$('.lightbox img').addClass('resize2');

	});
		$('.close').on('click', function() {
			$('body').removeClass('lightbox-active');
			$('.lightbox img').removeClass('resize2');
		});

	// change the speed of clicking on the nav bar to get to the section
	$('.nav-wrapper').onePageNav({
				scrollSpeed: 1000

			});

			var menu = $(".nav-wrapper nav");

			$("#menu-icon").click(function () {

				$(menu).slideToggle();

			});

			// fix bug where menu is still hidden when I make the page bigger
			$(window).resize(function () {
				var w = $(window).width();

				// width is greater than 768 and nav is hidden
				if (w > 768 && $(menu).is(":hidden")) {
					$(menu).removeAttr("style");
				}

			});



});












