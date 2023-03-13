$('document').ready(function() {

	$('.popupHead a').click(function(e) {
		e.preventDefault();
		$('.popup').hide();
	});

	$('button:contains("+ Создать свой магазин")').click(function(e) {
		e.preventDefault();
		$('.popup').show();
	});

});
