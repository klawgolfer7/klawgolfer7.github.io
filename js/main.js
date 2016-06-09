$(document).ready(function() {
	// Get stellar going
	$.stellar();

	// change the speed of clicking on the nav bar to get to the section
	$('.nav-wrapper').onePageNav({
				scrollSpeed: 1000

			});

			var menu = $(".nav-wrapper nav");

			$("#menu-icon").click(function () {

				$(menu).slideToggle();

			});

			// fix bug where menu is still hidden when we make our page bigger
			$(window).resize(function () {
				var w = $(window).width();

				// width is greater than 768 and nav is hidden
				if (w > 768 && $(menu).is(":hidden")) {
					$(menu).removeAttr("style");
				}

			});


});