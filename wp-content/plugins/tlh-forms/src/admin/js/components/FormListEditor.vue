<template lang="html">
<v-list subheader three-line>
  <v-subheader>Form Settings</v-subheader>
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

  <!-- <v-list-tile v-if="fieldVisibility.showForm">
    <v-list-tile-content>
      <v-switch label="Use Form" color="primary" attach class="input-show_form" name="show_form" v-model="updatedFormObject._show_form" true-value="yes" false-value="no">
      </v-switch>
    </v-list-tile-content>
  </v-list-tile> -->

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
<!-- <div>
  <v-list
    subheader
    three-line
  >
    <v-subheader>User Controls</v-subheader>

    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Content filtering</v-list-tile-title>
        <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Password</v-list-tile-title>
        <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>

  <v-divider></v-divider>

  <v-list
    subheader
    three-line
  >
    <v-subheader>General</v-subheader>
    <v-list-tile @click="">
      <v-list-tile-action>
        <v-checkbox
          v-model="notifications"
        ></v-checkbox>
      </v-list-tile-action>

      <v-list-tile-content @click.prevent="notifications = !notifications">
        <v-list-tile-title>Notifications</v-list-tile-title>
        <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile @click="">
      <v-list-tile-action>
        <v-checkbox
          v-model="sound"
        ></v-checkbox>
      </v-list-tile-action>

      <v-list-tile-content @click.prevent="sound = !sound">
        <v-list-tile-title>Sound</v-list-tile-title>
        <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile @click="">
      <v-list-tile-action>
        <v-checkbox
          v-model="widgets"
        ></v-checkbox>
      </v-list-tile-action>

      <v-list-tile-content @click.prevent="widgets = !widgets">
        <v-list-tile-title>Auto-add widgets</v-list-tile-title>
        <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</div> -->
</template>

<script>
export default {
  props: {
    fieldVisibility: {
      type: Object,
      default: function() {
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
      "tag_group_id"
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
