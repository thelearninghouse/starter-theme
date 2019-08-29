import Config from "themeConfig";
import Glide from "@glidejs/glide";

const Slider = new Glide(Config.selectors.slider, {
	type: "slider",
	focusAt: 0,
	perView: 4,
	gap: 60,
	breakpoints: {
		1440: {
			perView: 4,
			gap: 60
		},
		1024: {
			gap: 10,
			perView: 3
		},
		768: {
			gap: 10,
			perView: 2
		},
		481: {
			perView: 1,
			gap: 10
		}
	}
});

Slider.mount();
