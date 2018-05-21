import Vue from 'vue'
import VlhLibrary, {degreeMixin} from 'vlh-library'
import VlhFiltering from './VlhFiltering'
import {buildDegreeList} from '@/scripts/helpers/buildDegreeList'
Vue.use(VlhLibrary)

const VlhAppEl = document.getElementById('vlh-filtering');

export default () => {
  if (VlhAppEl) {
  	var vlhApp = new Vue({
  		el: VlhAppEl,
      mixins: [degreeMixin],
      mounted() {
        this.degrees = buildDegreeList(wpData.degrees);
        this.degreeLevels = wpData.degreeLevels
        this.degreeAreas = wpData.degreeAreas
      }
  	})
  }
}

// export default () => {
//   if (VlhAppEl) {
//   	var VlhFilteringInstance = new Vue({
//   		el: VlhAppEl,
//       render: html => html(VlhFiltering)
//   	})
//   }
// }
