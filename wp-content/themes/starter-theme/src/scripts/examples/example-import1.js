function initExampleImport() {
	$(document).ready(function() {
		console.log("I am the initExampleImport!");
	});
}

export default initExampleImport;


/*
We will import this into another file with the following:

import initExampleImport from '@/scripts/examples/example-import1'

 */
