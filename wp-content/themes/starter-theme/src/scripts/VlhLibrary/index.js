import Vue from 'vue'

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})



const VlhAppEl = document.getElementById('vlh-app');

if (VlhAppEl) {
	var vlhApp = new Vue({
		el: VlhAppEl,
		data: {
			msg: 'A Message New 5',
			showModal: false
		},
		components: {
			AsyncComponent: () => import('@/scripts/VlhLibrary/AsyncComponent.vue'),
	    Modal: () => import('@/scripts/VlhLibrary/Modal.vue')
	  }
	})
}
