// FORMSETTINGS
<template lang="html">
  <div id="formSettings">

    <v-app id="admin">
       <v-toolbar color="primary" dark tabs>
         <v-toolbar-title>Tlh-Forms</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-tabs
           v-model="tabs"
           slider-color="white"
           color="transparent"
           right
         >
           <v-tab @click.native="editorTabActive = false" key="settings">Global Settings</v-tab>
           <v-tab @click.native.once="editorTabActive = true" key="editor">Post & Page Settings</v-tab>
           <v-tab @click.native="editorTabActive = false" key="preview">Form Previewer</v-tab>
         </v-tabs>
       </v-toolbar>

       <v-tabs-items class="elevation-2" v-model="tabs">
          <v-tab-item class="settings-tab-content" key="settings">

            <v-card>
              <v-card-title primary-title>
                <div class="title">Global Settings</div>
              </v-card-title>
              <v-card-text>
            
              <div class="subheading mb-2 fw-600">Developer Settings</div>  
                <v-checkbox
                  class="my-2"
                  hide-details
                  label="Include Vue library"              
                  v-model="includeVueLibrary"              
                  true-value="true"
                  false-value="false"
                ></v-checkbox>
                <input type="hidden" v-model="includeVueLibrary" name="include_vue_library" id="include_vue_library">
                
                <v-checkbox
                  class="my-2 mb-3"
                  hide-details
                  label="Include Polyfill"
                  v-model="includePolyfill"
                  true-value="true"
                  false-value="false"                  
                ></v-checkbox>
                <input type="hidden" v-model="includePolyfill" name="include_polyfill" id="include_polyfill">

                <div @click.prevent.self="handlePrivateKeyEdit"
                  class="mt-3 github-api-key" :class="{masked: maskGithubKey, editing: editingPrivateKey === true}">
                  <v-btn id="privateKey-doneButton" v-if="editingPrivateKey" flat color="primary" @click.prevent="editingPrivateKey = false">Done</v-btn>
                  <v-text-field
                      multi-line
                      label="Github Private Key"
                      help="For Form Legal Text"
                      v-model="settings.private_key"
                      name="private_key"
                      id="private_key"
                      ref="privateKey"
                  ></v-text-field>
                </div>
              <v-divider class="hidden-divider my-3"></v-divider>

              <div class="subheading mb-2 fw-600">School Settings</div>  
                <v-text-field
                    label="Github Directory"
                    v-model="settings.school_name"
                    name="school_name"
                    id="school_name"
                ></v-text-field>

                <v-text-field
                    label="School Account ID"
                    v-model="settings.school_form_id"
                    name="school_form_id"
                    id="school_form_id"
                    required
                ></v-text-field>

                <v-text-field
                    label="Affiliate ID"
                    type="number"
                    v-model="settings.affiliate_id"
                    name="affiliate_id"
                    id="affiliate_id"
                ></v-text-field>

                <v-text-field
                    label="Custom Dimension - Client ID Index"
                    type="number"
                    v-model="settings.client_id_index"
                    name="client_id_index"
                    id="client_id_index"
                ></v-text-field>

                <v-text-field
                    label="Display Name"
                    help="For Form Legal Text"
                    v-model="settings.school_display_name"
                    name="school_display_name"
                    id="school_display_name"
                ></v-text-field>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>

          <v-tab-item key="editor" class="editor-tab-content">
            <posts-editor :load-all-data="editorTabActive"></posts-editor>
          </v-tab-item>
         <v-tab-item key="preview" class="previewer-tab-content">
           <v-card>
            <div class="flex-wrapper">
              <v-flex xs12 sm6>
                <v-card-title primary-title>
                  <div class="title">Live Preview</div>
                  <div>
                    <strong>Please Note:</strong>
                    There is currently an issue when choosing a program from the select menu.
                    This is only due to the Admin environment and doesn't apply in the live public environment.
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex id="template-selector-wrapper" xs12 sm6>
                <v-select
                  :items="templates"
                  attach
                  v-model="selectedTemplate"
                  label="Select Template"
                  clearable
                   @input="loadTemplateSelected(selectedTemplate)"
                ></v-select>
              </v-flex>
            </div>
             <v-card-text>
               <div id="tlh-form"></div>
             </v-card-text>
           </v-card>
         </v-tab-item>
       </v-tabs-items>
     </v-app>
  </div>

</template>

<script>
import PostsEditor from "./PostsEditor";
const BaseURL = "https://forms.learninghouse.com/embed";
const ScriptIdType = "account_id";
const SingleProgramID = "ad06d660-e719-459b-b950-bcacb1be5e3e";

export default {
  name: "form-settings",
  props: ["settings", "templates"],
  components: {
    PostsEditor
    // PostsEditor: () => import('./PostsEditor.vue'),
  },
  data () {
    return {
      /** 
       * These first 2 properties help set the checkbox to a true state
       * if there is no set value for these settings from wp_options yet.
       * 
       * This handles the case of when the plugin is first setup and prevents a case of forms not working due to
       * the Vue library and/or Babel Polyfills being needed but not included/loaded.
      */
      includeVueLibrary: this.settings.include_vue_library === '' ? 'true' : this.settings.include_vue_library,
      includePolyfill: this.settings.include_polyfill === '' ? 'true' : this.settings.include_polyfill,
      editorTabActive: false,
      token: "",
      tabs: null,
      activeTemplate: "",
      editingPrivateKey: false,
      selectedTemplate: "",
      loadingForm: false,
      privateKeyIsEditable: true
    };
  },
  computed: {
    privateKeyBtnText () {
      if (this.privateKeyIsEditable === true) {
        return "Done";
      } else {
        return "Edit";
      }
    },

    privateKeyBtnIcon () {
      if (this.privateKeyIsEditable === true) {
        return "check";
      } else {
        return "edit";
      }
    },
    maskGithubKey () {
      return this.settings.private_key !== "" ? true : false;
    }
  },

  mounted () {
    if (this.settings.private_key !== "") {
      this.privateKeyIsEditable = false;
    }
  },
  methods: {
    handlePrivateKeyEdit () {
      this.editingPrivateKey = !this.editingPrivateKey;
      this.$nextTick(function () {
        console.log(this.$refs.privateKey);
        this.$refs.privateKey.focus();
      });
    },
    loadTemplateSelected (selectedTemplate) {
      if (selectedTemplate == "") {
        return;
      }
      this.activeTemplate = selectedTemplate;

      let schoolName = this.settings.school_name;
      let schoolID = this.settings.school_form_id;
      let templateURL = `${BaseURL}/${schoolName}/${selectedTemplate}?account_id=${schoolID}`;

      this.showForm = false;
      this.loadingForm = true;
      fetchInject([templateURL]).then(data => {
        this.loadingForm = false;
        this.showForm = true;
        console.log("Script Download Finished");
      });
    }
  }
};
</script>

<style lang="scss">
.fw-600 {
  font-weight: 600;
  font-size: 18px !important;
  text-decoration: underline;
}
.hidden-divider {
  background: none !important;
}
#formSettings {
  nav.toolbar.theme--dark.primary {
    background-color: #1565c0 !important;
    border-color: #1565c0 !important;
  }
  .application .theme--light.card,
  .theme--light .card {
    color: rgba(29, 29, 29, 0.8);
  }
  .formDivider {
    margin-left: 0;
  }
  #formWrapper {
    padding-top: 1em;
    // background: #fdfdfd;
  }
  .hideKey textarea {
    overflow: hidden;
    word-wrap: break-word;
    resize: none;
    height: 40px !important;
    background: lightgray;
    opacity: 0.5;
  }
  textarea[name="private_key"] {
    max-height: 200px !important;
    overflow-y: auto;
    margin-top: 10px;
  }
  .toplevel_page_form-settings .ui-select__label-text {
    color: #5f5f56 !important;
  }
  #githubKeyWrapper {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin-right: auto;
  }
  #githubKeyToggler {
    position: absolute;
    right: 8px;
    top: 25px;
    font-size: 0.9em;
    z-index: 999;
  }
}
.ui-icon {
  font-size: 1rem;
  height: 0.9em;

  &.check {
    font-size: 1.2rem;
  }
}

#admin {
  width: 100%;
}
form.formAdmin__settingsForm {
  flex-basis: 100% !important;
}

#formSettings {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

input {
  border: none !important;

  &:focus {
    box-shadow: none !important;
  }
}

.tabs__content > .card {
  margin: 4em auto 6em;
}

.application--wrap {
  min-height: 70vh !important;
}

.editor-tab-content > .card,
.previewer-tab-content > .card,
.settings-tab-content > .card {
  max-width: 94%;
  width: 800px;
  min-height: 280px;
  max-width: 94%;
  width: 680px;
  min-height: 280px;
  margin-top: 4em;
  padding-top: 1em;
  padding-bottom: 2.5em;
}
.flex-wrapper {
  display: flex;
  flex-flow: row wrap;
}
.tabs__items {
  overflow: visible !important;
  overflow-x: hidden !important;
  overflow-y: visible !important;
  min-height: 63vh;
}
.input-group {
  label {
    font-size: 15px !important;
  }
}

.github-api-key {
  position: relative;

  &.masked:not(.editing) {
    textarea {
      height: 45px;
      overflow-y: hidden;
      opacity: 0;
    }
    &:after {
      content: "Active - Click To Edit";
      background: rgba(216, 216, 216, 0.5);
      z-index: 9999;
      position: absolute;
      width: 100%;
      height: 45px;
      font-style: italic;
      display: flex;
      align-items: center;
      padding-left: 0.75em;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
      bottom: 25px;
      cursor: pointer;
    }
  }
}
#privateKey-doneButton {
  position: absolute;
  right: -1em;
  top: -1em;
  z-index: 99999;
}
.toolbar__title {
  width: 150px;
}
.tabs__container {
  flex: 1 0 65%;
}
.toolbar__content,
.toolbar__extension {
  margin: 0 1em !important;
  height: 70px !important;
}

.tabs__content {
  .card {
    .title {
      line-height: 1 !important;
      letter-spacing: 0.01em !important;
      font-weight: 900;
      font-size: 2em !important;
      // margin-bottom: 1em;
      margin-right: 1em;
      margin-top: 0.5em;
    }
  }
}
.tabs__wrapper {
  a:active,
  a:hover {
    color: #3f51b4;
    background: white;
  }
}
.tabs__container--right {
  justify-content: flex-end;
}
.tabs__div {
  margin-right: 0.75em !important;
  margin-left: 0.75em !important;
}

#tlh-form {
  font-size: 1.1em;

  .form-item {
    margin: 0.85em auto;
    input {
      border: 1px solid grey !important;
      &.invalid {
        border: 2px solid #ca0000 !important;
      }
    }
  }

  .form-submit {
    margin-top: 2.25em;

    &-button {
      background: lightgrey;
      font-weight: 600;
      font-size: 1.35em !important;
      padding: 0.7em 0.5em;
    }
  }
}
</style>

<style :src="require('@styles/admin-tlh-form.scsss')"></style>
