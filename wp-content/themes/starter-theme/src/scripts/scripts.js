/* Get Theme Config File
*****************************/
import Config from "themeConfig";

/* Regular Imports
*****************************/
import "@/scripts/helpers/utilities";
import "@/scripts/components/main-navigation";
import "@/scripts/components/social-share-buttons";

/* Importing Vue Components
*****************************/
import initializeVlhLibrary from "@/scripts/VlhLibrary";

if (Config.useVue) {
	initializeVlhLibrary();
}

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(".accordion") !== null) {
		return import(/* webpackChunkName: "accordion" */ "@/scripts/components/accordion").then(
			initializeAccordions => {
				initializeAccordions.default();
			}
		);
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(Config.mixItUpSelector) !== null) {
		return import(/* webpackChunkName: "degree-filtering" */ "@/scripts/components/degree-filtering");
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();
