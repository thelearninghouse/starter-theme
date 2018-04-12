import mixitup from 'mixitup'
const Container = $('.mixitup')

const mixer = mixitup(Container, {
	callbacks: {
		onMixStart: function(state, futureState) {},
		onMixEnd: function(mixEvent) {
			// Focus code still doesn't seem to work
			/* JUST HAD A THOUGHT: You might need to wait with timeout for DOM */
			Container
				.find('.card:visible:first')
				.focus();
		}
	}
});
handleUrlFilters();


function handleUrlFilters() {
	if (location.hash) {
		const FilterID = location.hash.replace('#', '.')
		const NewActive = $("button[data-filter='" + FilterID + "']");
		NewActive.trigger('click')
	}
}
