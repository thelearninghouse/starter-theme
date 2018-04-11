import mixitup from 'mixitup'

var mixer = mixitup('.mixitup');

if ($('.mixitup')) {
	var container = $('.mixitup')
	var mixer = mixitup(container, {
		callbacks: {
			onMixStart: function(state, futureState) {},
			onMixEnd: function() {
				container
					.find('.card:visible:first')
					.focus();
			}
		},
		"animation": {
			"duration": 133,
			"nudge": false,
			"reverseOut": false,
			"effects": "fade stagger(30ms)"
		}
	});
	if (location.hash) {
		var hash = location.hash.replace('#', '.')
		var oldBtn = $('button.selected');
		var newBtn = $("button").find("[data-filter='" + hash + "']");
		mixer.filter(hash)
		oldBtn.removeClass('selected');
		newBtn.addClass('selected');
	}
}
