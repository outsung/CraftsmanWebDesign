$.fn.skill = function() {

	mSkill = this;
  $(window).on('scroll', function() {

	mSkill.find('.skillBar').each(function() {

		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.90 &&!$(this).hasClass("sk-fired")) {


			$(this).addClass('sk-fired');
			var defaultPercentage = "50%";
			var color = $(this).attr('skill-color');
			var defaultColor = "white";

			if($(this).attr('skill-percentage')) {
				$(this).width($(this).attr('skill-percentage'));
			} else {
				$(this).width(defaultPercentage);
			}



			if(color) {
				$(this).css('background-color', color);
			} else {
				$(this).css('background-color',defaultColor);
			}

			$(this).parent().find(".skill-image").each(function() {
				var imagen = $(this);
				setInterval(function() {

					imagen.show().addClass("animated").addClass("bounceIn");
				}, 2000);

			});
			}
		});

}	);

     return mSkill;
}
