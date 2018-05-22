// Enable HMR
if (module.hot) {
  require('@/styles/lp-style.scss')
	module.hot.accept();
}

/* Get Theme Config File
*****************************/
import Config from "themeConfig";


/* Regular Imports - Include accross all pages
*****************************/
import "@/scripts/helpers/utilities";


/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(Config.selectors.accordion) !== null) {
		return import(/* webpackChunkName: "accordion" */ "@/scripts/components/accordion");
	}
}

function handleStickyElements() {
	if (document.querySelector(Config.selectors.sticky) !== null) {
		return import(/* webpackChunkName: "sticky" */ "@/scripts/components/sticky");
	}
}


/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleStickyElements();
