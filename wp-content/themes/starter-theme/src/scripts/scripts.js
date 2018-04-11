/* Regular Imports
*****************************/
import '@/scripts/helpers/utilities'
import '@/scripts/components/main-navigation'
import '@/scripts/components/social-share-buttons'



/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if ( document.querySelector(".accordion") !== null ) {
		return import(/* webpackChunkName: "accordion" */ '@/scripts/components/accordion')
		.then(initializeAccordions => {
			initializeAccordions.default();
		})
	}
}

function handleDegreeFiltering() {
	if ( document.querySelector(".mixitup") !== null ) {
		return import(/* webpackChunkName: "degree-filtering" */ '@/scripts/components/degree-filtering')
		.then(degreeFiltering => {
			console.log(degreeFiltering);
			// Do Nothing For Now
		})
	}
}


/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();
