import Vue from 'vue'
import VlhLibrary from 'vlh-library'

Vue.use(VlhLibrary)

const VlhAppEl = document.getElementById('vlh-filtering');

export default () => {
  if (VlhAppEl) {
  	var vlhApp = new Vue({
  		el: VlhAppEl,
  		data: {
        currentSearchFIlter: 'Start...',
        ...wpData
  		}
  	})
  }
}
