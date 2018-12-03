export const VueMetaMixin = {
  components: {
    FormMeta: () => import('components/FormMeta.vue'),    
  },
  data: () => ({
    formData: CurrentFormData
  }),
  methods: {
    validationChecker(event) {
      console.log("from validationChecker");
      if (this._show_form != "" && this._form_name === "") {
        console.log("Need form template");
        event.preventDefault();
      } else {
        console.log("We're good to go!");
      }
    }
  }
};

export const VueAdminMixin = {
  components: {
    FormSettings: () => import('components/FormSettings.vue'),
    FormViewer: () => import('components/FormViewer.vue')
  },
  data: () => ({
    schoolFormData: SchoolFormData,
  })
};
