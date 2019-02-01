<template>
<div id="formMeta">
  <v-app id="meta">
    <v-content fluid fill-height>
      <v-layout id="first-layout" wrap align-center justify-center>
        <v-flex xs12>
          <v-switch label="Use Form" color="primary" id="show_form" name="show_form" v-model="formData._show_form" true-value="yes" false-value="no">
          </v-switch>
        </v-flex>

        <v-flex xs12 id="form-name-wrapper">
          <v-select id="form_name" name="form_name" attach :rules="[rules.required]" :items="templates" v-model="formData._form_name" label="Form Template"></v-select>
        </v-flex>

        <v-flex xs12 id="form-script-type-wrapper">
          <v-select id="script_type" name="script_type" attach content-class="v-content-class-test" :items="scriptTypesArray" v-model="formData._script_type" label="Script Type">
          </v-select>
        </v-flex>

        <v-flex id="form-script-id-wrapper" v-if="formData._script_type !== 'account_id'" xs12>
          <v-text-field id="script_id" name="script_id" v-model="formData._script_id" :rules="[rules.required]" label="Script ID"></v-text-field>
        </v-flex>

        <v-flex xs12 id="expansive-panels-wrapper">
          <v-expansion-panel popout>

            <v-expansion-panel-content color="primary">
              <div slot="header">Customize</div>
              <v-card>
                <v-flex xs12 id="theme-wrapper">
                  <v-select id="theme" name="theme" attach :items="themeOptions" v-model="formData.theme" label="Color Theme"></v-select>
                </v-flex>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content color="primary" class="mt-2">
              <div slot="header">Custom Tracking ID's</div>
              <v-card>
                <v-card-text>
                  <v-text-field label="Partnership ID" v-model="formData._partnership_id" name="partnership_id">
                  </v-text-field>

                  <v-text-field label="Promotion ID" v-model="formData._promotion_id" name="promotion_id">
                  </v-text-field>

                  <v-text-field label="Event ID" v-model="formData._event_id" name="event_id">
                  </v-text-field>
                </v-card-text>

              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>

      </v-layout>
    </v-content>
  </v-app>

  <v-dialog v-model="showConfirmModal" persistent max-width="450">
    <v-card id="confirm-modal">
      <v-card-title class="headline">Confirm Form Deactivation?</v-card-title>
      <v-card-text>Just double-checking that you want to not use the form for this post/page anymore.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="showConfirmModal = false">Cancel</v-btn>
        <v-btn type="submit" @mousedown="handleConfirmedDeactivations" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Not sure why I need these hidden inputs. Without them, it doesn't save -->
  <div style="display: none;">

    <input type="checkbox" v-model="formData._show_form" true-value="yes" false-value="no" name="show_form">
    <input v-model="formData._form_name" name="form_name"/>>
    <input v-model="formData._script_type" name="script_type"/>
    <input v-model="formData._script_id" name="script_id"/>
    <input v-model="formData.theme" name="theme"/>
    <input v-model="formData._promotion_id" name="promotion_id"/>
    <input v-model="formData._partnership_id" name="_partnership_id"/>
    <input v-model="formData._event_id" name="_event_id"/>
  </div>

</div>
</template>

<script>
export default {
  props: ["formData", "templates"],
  name: "form-meta",
  data: function() {
    return {
      showConfirmModal: false,
      showFormValidationAlert: false,
      testSelect: "",
      visible: false,
      form_name: "",
      script_id: "",
      formDeactivationConfirmed: false,
      switch1: true,
      confirmResult: "",
      selectedOption: "",
      defaultFormTemplate: "",
      defaultScriptType: "account_id",
      rules: {
        required: value => !!value || "Required."
      },
      themeOptions: ["default", "dark", "light"],
      scriptTypesArray: [
        "account_id",
        "program_id",
        "program_group_id",
        "program_tag_id"
      ],
      originalShowFormValue: CurrentFormData._show_form
    };
  },

  computed: {
    selectedScriptTypeValue() {},
    invalidScriptID() {
      return (
        this.formData._script_type !== "account_id" &&
        this.formData._script_id === ""
      );
    },

    invalidForm() {
      return (
        this.formData._show_form === "yes" && this.formData._form_name === ""
      );
    },

    scriptType() {
      return this.formData._script_type;
    }
  },
  watch: {
    scriptType: {
      handler: "handleScriptTypeSelection",
      deep: true
    }
  },

  methods: {
    handleScriptTypeSelection(newValue, oldValue) {
      if (newValue === "account_id") {
        this.formData._script_id = this.formData.schoolFormId;
      }

      if (oldValue === "account_id") {
        this.formData._script_id = "";
      }
    },

    handleConfirmedDeactivations() {
      this.formDeactivationConfirmed = true;
      this.showConfirmModal = false;
    },

    checkForValidation($event) {
      let usingCustomScriptTypeWithoutIdSet =
        this.formData._script_type !== "account_id" &&
        this.formData._script_id === "";

      if (this.invalidForm || usingCustomScriptTypeWithoutIdSet) {
        $event.preventDefault();
      }
    },

    setDefaultFormTemplate() {
      this.formData._form_name = this.formData._form_name || "online-programs";
    },

    setDefaultScriptType() {
      this.formData._script_type = this.formData._script_type || "account_id";
    },

    updateSelectedScriptType(selectedTemplate) {
      if (selectedTemplate == "") {
        return;
      }
      this.formData._form_name = selectedTemplate.value;
    },

    updateSelectedTemplate(selectedTemplate) {
      if (selectedTemplate == "") {
        return;
      }
      this.formData._form_name = selectedTemplate.value;
    },

    showConfirm(ref) {
      this.$refs[ref].open();
    },

    hideConfirm(ref) {
      this.$refs[ref].close();
    },

    handleHeight(ref) {
      this.$refs[ref].refreshHeight();
    },

    onConfirm() {
      this.confirmResult = "You confirmed the request.";
    },

    onDeny() {
      this.confirmResult = "You denied the request.";
    },

    handlePublishConfirmation() {
      var vm = this;
      var PublishButton = document.getElementById("publish");

      PublishButton.addEventListener("click", function(clickEvent) {
        console.log("Inside Click Listerner for PublishButton");
        if (
          vm.originalShowFormValue === "yes" &&
          vm.formData._show_form === "no" &&
          vm.formDeactivationConfirmed === false
        ) {
          clickEvent.preventDefault();
          vm.showConfirmModal = true;
        }

        if (vm.invalidForm || vm.invalidScriptID) {
          clickEvent.preventDefault();
          vm.showFormValidationAlert = true;
          // alert('You have invalid required fields...')
        }
      });
    }
  },

  mounted() {
    this.handlePublishConfirmation();
    this.setDefaultScriptType();
  }
};
</script>
<style lang="scss">
.spacer {
  margin: 1.5em 0;
  opacity: 0;
}
.application--wrap {
  min-height: 100% !important;
}

.flex,
h3 {
  margin-right: auto;
  padding-left: 0.5em;
}
.expansion-panel {
  &__header {
    padding: 12px;
    background: #eee;
  }
  &__container {
    cursor: pointer;
  }

  &__body {
    .card {
      padding-left: 0.5em;
      padding-right: 0.5em;
      border-top: none;
      margin-top: 0;
    }
  }
}
#expansive-panels-wrapper {
  padding-left: 0;
}

#first-layout {
  margin-right: 0.25em;
}
.application--wrap label {
  font-size: 14px;
}

#wp-content-wrap {
  z-index: 1;
}
#confirm-modal {
  .card {
    &__title {
      font-weight: 500;
    }
    &__text {
      padding-top: 0;
      font-size: 1.25em;
    }
  }
}
</style>
