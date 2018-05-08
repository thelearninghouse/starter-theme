import Vue from 'vue'
import ButtonCounter from './ButtonCounter'

export default () => {

  // Global Components
  Vue.component('button-counter', ButtonCounter)


  const VlhAppEl = document.getElementById('vlh-app');

  if (VlhAppEl) {
  	var vlhApp = new Vue({
  		el: VlhAppEl,
  		data: {
  			msg: 'A Message New 5',
  			showModal: false
  		},
  		components: {
  			AsyncComponent: () => import(/* webpackChunkName: "async-component" */ '@/scripts/VlhLibrary/AsyncComponent.vue'),
  	    Modal: () => import(/* webpackChunkName: "modal" */ '@/scripts/VlhLibrary/Modal.vue')
  	  }
  	})
  }
}
