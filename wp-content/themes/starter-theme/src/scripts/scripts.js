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



/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
