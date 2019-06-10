<template lang="html">
  <form @submit.prevent="$emit('save-meta')" @keyup.enter.prevent="$emit('save-meta')">
    <v-list two-line subheader @submit.prevent="$emit('save-meta')">
      <v-subheader >Form Settings For:</v-subheader>
      <v-list-tile v-if="fieldVisibility.showForm" @click="" >
        <v-list-tile-action>
          <v-switch color="primary" attach class="input-show_form" name="show_form" v-model="updatedFormObject._show_form" true-value="yes" false-value="no">
          </v-switch>
        </v-list-tile-action>

        <v-list-tile-content @click.prevent="updatedFormObject._show_form = !updatedFormObject._show_form">
          <v-list-tile-title>Use Form</v-list-tile-title>
          <v-list-tile-sub-title>Set whether the form should be active for this post/page</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.formName">
        <v-list-tile-content class="select-wrapper">
          <v-select id="form_name" name="form_name" attach :items="$root.schoolFormData.formTemplates" v-model="updatedFormObject._form_name" label="Form Template"/>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.scriptType">
        <v-list-tile-content class="select-wrapper">
          <v-select id="script_type" name="script_type" attach content-class="v-content-class-test" :items="scriptTypesArray" v-model="updatedFormObject._script_type" label="Script Type"/>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.scriptId">
        <v-list-tile-content>
          <v-text-field label="Script ID" v-model="updatedFormObject._script_id" name="script_id">
          </v-text-field>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.partnershipId">
        <v-list-tile-content>
          <v-text-field label="Partnership ID" v-model="updatedFormObject._partnership_id" name="partnership_id">
          </v-text-field>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.promotionId">
        <v-list-tile-content>
          <v-text-field label="Promotion ID" v-model="updatedFormObject._promotion_id" name="promotion_id"/>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="fieldVisibility.eventId">
        <v-list-tile-content>
          <v-text-field label="Event ID" v-model="updatedFormObject._event_id" name="event_id"/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>    
  </form>
</template>

<script>
export default {
  props: {
    fieldVisibility: {
      type: Object,
      default: function () {
        return {
          showForm: true,
          formName: true,
          scriptId: true,
          scriptType: true,
          partnershipId: true,
          promotionId: true,
          eventId: true
        };
      }
    },

    updatedFormObject: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
    rules: {
      required: value => !!value || "Required."
    },
    themeOptions: ["default", "dark", "light"],
    scriptTypesArray: [
      "account_id",
      "program_id",
      "program_group_id",
      "program_tag_id"
    ]
  })
};
</script>

<style lang="scss">
.select-wrapper {
  width: 100% !important;
  overflow: visible !important;
}

.edit-card {
  .list__tile {
    // margin-top: 1em;
  }
  & > .list {
    div.list__tile {
      margin-top: 1.5em;
      margin-bottom: 1.5em;

      &__content {
        overflow: visible !important;
      }
    }
  }
}
.stepper .liste__tile__content {
  overflow: visible !important;
}
</style>
