import Vue from 'vue';

export default () => {
	const VlhAppEl = document.getElementById('vlh-app');

	if (VlhAppEl) {
		var vlhApp = new Vue({
			el: VlhAppEl,
			data: {
				msg: 'A Message From Vue!',
				showModal: false
			}
		})
	}
}
