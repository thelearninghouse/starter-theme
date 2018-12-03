import Vue from "vue";
import Vuetify from "vuetify";
import { VueAdminMixin, VueMetaMixin } from "vue-admin-mixins";
import "vuetify/dist/vuetify.min.css";

const AdminMetaEl = document.getElementById("form-app");
const AdminSettingsEl = document.getElementById("form-settings");

window.Vue = Vue;

Vue.use(Vuetify);
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
