// Enable HMR
if (module.hot) {
	require('@/styles/style.scss')
	module.hot.accept();
}

/* Get Theme Config File
*****************************/
import Config from "themeConfig";


/* ES6 import/export examples
*****************************/
import examples from "@/scripts/examples";
examples();


/* Regular Imports - Include accross all pages
*****************************/
import "@/scripts/helpers/utilities";
import "@/scripts/components/main-navigation";


/* Importing Vue Components
*****************************/
import initializeVlhLibrary from "@/scripts/VlhLibrary";

if (Config.useVue) {
	initializeVlhLibrary();
}


/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(Config.selectors.accordion) !== null) {
		return import(/* webpackChunkName: "accordion" */ "@/scripts/components/accordion");
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(Config.selectors.mixItUp) !== null) {
		return import(/* webpackChunkName: "degree-filtering" */ "@/scripts/components/degree-filtering");
	}
}

function handleSocialShare() {
	if (document.querySelector(Config.selectors.socialShare) !== null) {
		return import(/* webpackChunkName: "social-share" */ "@/scripts/components/social-share-buttons");
	}
}

function handleStickyElements() {
	if (document.querySelector(Config.selectors.sticky) !== null) {
		return import(/* webpackChunkName: "sticky" */ "@/scripts/components/sticky");
	}
}

function handleSlider() {
	if (document.querySelector(Config.selectors.slider) !== null) {
		return import(/* webpackChunkName: "slider" */ "@/scripts/components/slider");
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();
handleSocialShare();
handleStickyElements();
handleSlider();
