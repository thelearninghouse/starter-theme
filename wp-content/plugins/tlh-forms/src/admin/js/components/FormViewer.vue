<template>
  <div id="forms" class="formAdmin__viewer">

    <div class="templateController">
      <h2 class="formViewerHeading">Live Preview</h2>
      <div class="clearableSelect">
        <ui-select
          v-model="selectedOption"
          :options="templates"
          label="Form Template Options"
          placeholder="Select a Template"
          @change="loadTemplateSelected(selectedOption)"
          >
        </ui-select>
      </div>
    </div>
    <div id="preview">
      <!-- <h3 class="formViewerHeading" v-if="activeTemplate">{{activeTemplate.label}} Form</h3> -->
      <div id="tlh-form"></div>
    </div>
	</div>
</template>

<script>

const BaseURL = 'https://forms.learninghouse.com/embed'
const ScriptIdType = 'account_id'
const SingleProgramID = 'ad06d660-e719-459b-b950-bcacb1be5e3e'

export default {
  name: 'form-viewer',
  props: ['formData', 'templates'],
  data () {
    return {
      showTemplates: true,
      loadingForm: false,
      showForm: false,
      selectedOption: '',
      activeTemplate: '',
      showClear: false
    }
  },
  methods: {
    clearSelection () {
      this.activeTemplate = ''
    },

    loadTemplateSelected (selectedTemplate) {
      if (selectedTemplate == '') { return }
      // This event occurs onChange for the select menu. When loading the page, the select menu with emit this event. This if statement handles that scenario
      this.activeTemplate = selectedTemplate

      let schoolName = this.formData.school_name
      let schoolID = this.formData.school_form_id
      let templateURL = `${BaseURL}/${schoolName}/${selectedTemplate}?account_id=${schoolID}`

      this.showForm = false
      this.loadingForm = true
      fetchInject([
        templateURL,
      ]).then((data) => {
        this.loadingForm = false
        this.showForm = true
        console.log('Script Download Finished');
      })
    }
  }
}
</script>

<style lang="scss">
#preview {
  .formViewerHeading {
    text-align: center;
    font-size: 2em;
    margin-top: 2em;
  }
}
  button.ui-button.template-loader.ui-button--type-primary.ui-button--color-default.ui-button--icon-position-left.ui-button--size-normal.active {
      background: #2196f3;
      color: white;
  }

  .clearableSelect {
    position: relative;
    .clearSelectionIcon {
      z-index: 99;
      background: #ccc;
      border-radius: 50%;
      width: 20px;
      text-align: center;
      height: 20px;
      font-weight: 700;
      cursor: pointer;
      position: absolute;
      top: 25px;
      right: 0;
    }
    flex-basis: 68%;
  }
  .templateController {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1em;
  }
  #loadTemplateButton {
    flex: none;
    flex-basis: 130px;
  }
  #forms {
    padding: 1em 2em;
  }
  body {
    background: white;
  }
  #update-nag, .update-nag {
    display: none;
  }

  #preview {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
