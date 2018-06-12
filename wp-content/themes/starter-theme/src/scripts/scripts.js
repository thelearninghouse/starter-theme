import {hotHelper} from './helpers/hotHelper.js'
if (module.hot) { hotHelper(module); }


/* Browser support for older browsers (ie11, ect...)
*****************************/
import "babel-polyfill";


/* Get Theme Config File
*****************************/
import themeConfig from "themeConfig";


/* Regular Imports - Include accross all pages
*****************************/
import "@/scripts/helpers/utilities";
import "@/scripts/components/main-navigation";


/* Importing Vue Components
*****************************/
import initializeVlhLibrary from "@/scripts/VlhLibrary";
if (themeConfig.useVue) { initializeVlhLibrary(); }


/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(themeConfig.selectors.accordion) !== null) {
		return import(/* webpackChunkName: "accordion" */ "@/scripts/components/accordion");
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(themeConfig.selectors.mixItUp) !== null) {
		return import(/* webpackChunkName: "degree-filtering" */ "@/scripts/components/degree-filtering");
	}
}

function handleSocialShare() {
	if (document.querySelector(themeConfig.selectors.socialShare) !== null) {
		return import(/* webpackChunkName: "social-share" */ "@/scripts/components/social-share-buttons");
	}
}

function handleStickyElements() {
	if (document.querySelector(themeConfig.selectors.sticky) !== null) {
		return import(/* webpackChunkName: "sticky" */ "@/scripts/components/sticky");
	}
}

function handleSlider() {
	if (document.querySelector(themeConfig.selectors.slider) !== null) {
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
