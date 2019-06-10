import Vue from "vue";
import Vuetify from "vuetify";
import { VueAdminMixin, VueMetaMixin } from "vue-admin-mixins";
// import "vuetify/dist/vuetify.min.css";

import "@styles/vuetify.scss";
import "@styles/app.scss";

const AdminMetaEl = document.getElementById("form-app");
const AdminSettingsEl = document.getElementById("form-settings");

window.Vue = Vue;

// Vue.use(Vuetify);
Vue.use(Vuetify, {
  theme: false
})
if (AdminMetaEl) {
  var vueAdmin = new Vue({
    el: AdminMetaEl,
    mixins: [VueMetaMixin]
  });
}

if (AdminSettingsEl) {
  var vueAdmin = new Vue({
    el: AdminSettingsEl,
    mixins: [VueAdminMixin]
  });
}
// new Vue({
//   render: h => h(BaseVueWidget)
// }).$mount( staticWidgetElement );