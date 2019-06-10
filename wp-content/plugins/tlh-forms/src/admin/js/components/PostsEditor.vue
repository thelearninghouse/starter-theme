// POSTSEDITOR
<template>
  <v-card>
    <div class="flex-wrapper">
      <v-flex xs12>
        <v-card-title primary-title>
          <div class="title">Post & Page Settings</div>

          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            id="table-search"
            @keydown.native.enter.prevent
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="editList = pages">Pages</v-btn>
          <v-btn color="primary" flat @click="editList = posts">Posts</v-btn>
          <div id="cpt-menu-wrapper">
            <v-menu attach :nudgeBottom="35" transition="slide-y-transition" bottom>
              <v-btn slot="activator" class="purple" color="primary" dark>Custom Posts</v-btn>
              <v-list>
                <v-list-tile
                  v-for="(postType, key) in customPostTypes"
                  :key="key"
                  @click="editList = customPostTypes[key]"
                >
                  <v-list-tile-title>{{ key}}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </v-card-title>
        <v-layout align-center justify-space-between row>
          <v-slide-x-transition>
            <v-btn color="secondary" v-if="selectedItems.length" depressed small @click="bulkEdit">
              Bulk Update
              <v-icon small right dark>edit</v-icon>
            </v-btn>
          </v-slide-x-transition>
        </v-layout>
      </v-flex>

      <v-dialog
        content-class="bulk-edit-dialog"
        v-model="bulkEditDialog"
        max-width="550px"
      >
        <bulk-edit-stepper
          @stepper-cancel="closeDialog('bulkEditDialog')"
          @stepper-save="bulkUpdate"
        >
          <v-list subheader slot="step1">
            <v-subheader>Which Form Settings Do You Want To Update?</v-subheader>

            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox v-model="bulkEditOptions.showForm"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content @click="bulkEditOptions.showForm = !bulkEditOptions.showForm">
                <v-list-tile-title>Form Visibility</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox v-model="bulkEditOptions.formName"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content @click="bulkEditOptions.formName = !bulkEditOptions.formName">
                <v-list-tile-title>Form Template</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox v-model="bulkEditOptions.scriptType"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content
                @click="bulkEditOptions.scriptType = !bulkEditOptions.scriptType"
              >
                <v-list-tile-title>Script Type</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <!-- <v-list-tile>
              <v-list-tile-action>
                <v-checkbox v-model="bulkEditOptions.partnershipId"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content
                @click="bulkEditOptions.partnershipId = !bulkEditOptions.partnershipId"
              >
                <v-list-tile-title>Partnership ID</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile> -->
          </v-list>

          <FormListEditor
            two-line
            subheader
            slot="step2"
            :fieldVisibility="bulkEditOptions"
            :updatedFormObject="bulkEditObject"
            v-if="bulkEditOptions.showForm || bulkEditOptions.formName"
          />
        </bulk-edit-stepper>
      </v-dialog>

      <v-dialog content-class="bulk-edit-dialog" scrollable v-model="dialog" max-width="550px">
        <v-card flat class="edit-card mt-0 mb-2">
          <FormListEditor
            @save-meta="savePostFormMeta"
            two-line
            subheader
            :updatedFormObject="postBeingEdited"
          />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="savePostFormMeta">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-data-table
        id="post-table"
        v-model="selectedItems"
        select-all
        :headers="headers"
        :items="editList"
        :rows-per-page-items="[25, 50, 100, { text: 'All', value: -1 }]"
        :search="search"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox primary hide-details v-model="props.selected"></v-checkbox>
          </td>
          <td v-html="props.item.title.rendered"></td>
          <td class="pl-5">{{ props.item._show_form }}</td>
          <td class="table-data-position-fix pl-4">{{ props.item._form_name }}</td>
          <td>
            <v-icon class="edit-icon mr-2" @click="editItem(props.item)">edit</v-icon>
          </td>
          <td>
            <a class="tabel-link" :href="props.item.link" target="_blank" rel="noreferrer">
              <v-icon class="link-icon mr-2">open_in_new</v-icon>
            </a>
          </td>
        </template>
      </v-data-table>
    </div>
    <v-snackbar v-model="updatedSnackbar" :bottom="true" :timeout="2000">Updated!</v-snackbar>
  </v-card>
</template>

<script>
import FormListEditor from "./FormListEditor";
import BulkEditStepper from "./BulkEditStepper";
import flatten from 'lodash/flatten'

if (document.getElementById("form-settings")) {
  var WPAPI = require("wpapi");
  var wp = new WPAPI({
    endpoint: window.SchoolFormData.root,
    nonce: window.SchoolFormData.nonce
  });
}

function getAll (request) {
  return request.then(function (response) {
    if (!response._paging || !response._paging.next) {
      return response;
    }
    // Request the next page and return both responses as one collection
    return Promise.all([
      response,
      getAll(response._paging.next)
    ]).then(function (responses) {
      return flatten(responses);
    });
  });
}


function registerCustomPostTypeRoute (postType) {
  wp[postType] = wp.registerRoute("wp/v2", `/${[postType]}/(?P<id>\\d+)`);
}

if (window.SchoolFormData && window.SchoolFormData.customPostTypes) {
  for (const postType of window.SchoolFormData.customPostTypes) {
    registerCustomPostTypeRoute(postType);
  }
}

export default {
  name: "posts-editor",
  props: ["wp-data", "loadAllData"],
  components: {
    FormListEditor,
    BulkEditStepper
  },
  data () {
    return {

      search: '',
      formTemplates: window.SchoolFormData.formTemplates,
      dialog: false,
      bulkEditOptions: {
        showForm: false,
        formName: false,
        scriptId: false,
        scriptType: false,
        partnershipId: false,
        promotionId: false,
        eventId: false
      },
      bulkEditDialog: false,
      updatedSnackbar: false,
      loading: true,
      indexOfPostBeingEdited: -1,
      editedItem: {},
      bulkEditObject: {
        _show_form: null,
        _form_name: null,
        _script_type: null,
        _script_id: null,
        _partnership_id: null,
        _promotion_id: null,
        _event_id: null
      },
      posts: [],
      pages: [],
      customPostTypesArray: window.SchoolFormData.customPostTypes,
      customPostTypes: {},
      editList: [],
      postBeingEdited: {},
      indexOfPostBeingEdited: null,
      selectedItems: [],
      headers: [
        {
          text: "Page",
          align: "left",
          sortable: true,
          value: "title.rendered"
        },
        {
          text: "Using Form",
          value: "_show_form"
        },
        {
          text: "Form Template",
          value: "_form_name"
        },

        {
          text: "Edit",
          value: "name",
          sortable: false
        },
        {
          text: "View",
          value: "name",
          sortable: false
        }
      ]
    };
  },

  async created () {
    const pages = await getAll(wp.pages().perPage(100))
    this.pages = pages
    this.editList = [...pages]
  },
  mounted () {
    /**
     * Add this and then load resources
     * getPostTypes() 
     */

    // this.getResources();
    // const pages = await getAll(wp.pages().perPage(100))
    // this.pages = pages
    // this.editList = [...pages]
  },

  watch: {
    loadAllData (shouldLoadData) {
      if (shouldLoadData) {
        this.getResources()
      }
    },
    "bulkEditOptions.showForm": function (newValue) {
      if (newValue === true) this.bulkEditObject._show_form = "no";
      else this.bulkEditObject._show_form = null;
    },
    dialog (val) {
      if (val) {
        document.addEventListener("keyup", this.escapeListener);
      } else {
        document.removeEventListener("keyup", this.escapeListener);
      }
      val || this.close();
    }
  },

  methods: {
    escapeListener (e) {
      if (e.keyCode === 27) this.close();
    },

    bulkEdit (item) {
      this.bulkEditDialog = true;
    },

    resetBulkEdit () {
      for (let key in this.bulkEditObject) {
        this.bulkEditObject[key] = null;
      }
      for (let key in this.bulkEditOptions) {
        this.bulkEditOptions[key] = false;
      }
    },

    async bulkUpdate () {
      this.closeDialog("bulkEditDialog");
      let updateObject = {};

      for (let key in this.bulkEditObject) {
        if (this.bulkEditObject[key]) {
          updateObject[key] = this.bulkEditObject[key];
        }
      }

      for (const post of this.selectedItems) {
        let postType;
        Object.assign(post, updateObject);
        if (post.type === "page") postType = wp.pages();
        else if (post.type === "post") postType = wp.posts();
        else postType = wp[post.type]();
        await postType.id(post.id).update(updateObject);
      }
      this.updatedSnackbar = true;
      this.resetBulkEdit();
    },

    editItem (item) {
      this.indexOfPostBeingEdited = this.editList.indexOf(item);
      this.postBeingEdited = Object.assign({}, item);
      this.dialog = true;
    },

    closeDialog (dialogToCLose) {
      this[dialogToCLose] = false;
    },

    close () {
      this.dialog = false;
      setTimeout(() => {
        this.postBeingEdited = Object.assign({}, {});
        this.indexOfPostBeingEdited = -1;
      }, 300);
    },

    async savePostFormMeta () {
      this.updatePost(this.postBeingEdited);
      Object.assign(
        this.editList[this.indexOfPostBeingEdited],
        this.postBeingEdited
      );
      this.close();
    },

    save () {
      if (this.indexOfPostBeingEdited > -1) {
        Object.assign(
          this.editList[this.indexOfPostBeingEdited],
          this.postBeingEdited
        );
      } else {
        this.editList.push(this.postBeingEdited);
      }
      this.close();
    },

    toggleAll () {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
    },

    getResources () {
      // this.getPages();
      this.getPosts();
      this.getCustomPostType();
    },

    async getPosts () {
      const posts = await wp.posts().perPage(100);
      this.posts = posts;
      this.loading = false;
    },

    async getPages () {
      this.pages = await getAll(wp.pages().perPage(100))
      this.loading = false;
    },

    async getCustomPostType (postType) {
      for (const postType of this.customPostTypesArray) {
        let posts = await wp[postType]().perPage(100);
        if (posts.length) this.$set(this.customPostTypes, postType, posts);
      }
    },

    async updatePost (post) {
      let dataForUpdate = {
        _show_form: post._show_form,
        _form_name: post._form_name,
        _script_type: post._script_type,
        _script_id: post._script_id,
        _partnership_id: post._partnership_id,
        _promotion_id: post._promotion_id,
        _event_id: post._event_id
      };

      let postType;
      if (post.type === "page") postType = wp.pages();
      else if (post.type === "post") postType = wp.posts();
      else postType = wp[post.type]();
      await postType.id(post.id).update(dataForUpdate);
      this.updatedSnackbar = true;
    }
  }
};
</script>

<style lang="scss">
body {
  background: #fff !important;
}
#showFormSwitch {
  border: none;
}
#update-postData {
  margin-top: 2em;
}
.post {
  width: 700px;
  display: block;
  border-bottom: 2px solid #808080;
  padding: 1.5em 0.25em;
}
.form-data {
  width: 300px;
  margin-left: 1.5em;
  margin-left: 1.5em;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

#post-table {
  width: 100%;
}
</style>

<style lang="scss">
// New Wider Screen
#formSettings {
  // max-width: 100% !important;

  .edit-icon {
    cursor: pointer;
  }
}
.editor-tab-content .card {
  width: 100% !important;
}
.tabel-link {
  text-decoration: none;

  &:focus {
    box-shadow: none;
  }
}
#formSettings .snack__content {
  font-size: 1.15em;
  letter-spacing: 1px;
  justify-content: center;
}

.bulk-edit {
  &-dialog {
    z-index: 999999;
    // min-height: 600px;
  }
  &-card {
    max-width: 100%;
    height: 100%;
    margin-top: 0;
    min-height: 550px;

    .card__actions,
    .card__title {
      flex: 0 1 auto !important;
    }

    .card__text {
      flex: 1 1 auto;
    }
  }
  &-title {
    font-weight: 600;
    font-size: 2.25em !important;
  }
}

.input {
  &-show_form {
    label {
      align-self: center;
    }
    .input-group__details {
      display: none;
    }
  }
}
.select-wrapper.list__tile__content {
  overflow: visible;
}
.dialog--scrollable {
  // min-height: 650px;
}
#cpt-menu-wrapper .menu {
  padding-top: 0;
}
#bulk-select-wrapper {
  width: 100%;
}
.bulk-edit-dialog {
  // overflow: visible !important;
  overflow: scroll !important;
}
.stepper {
  .list__tile__content {
    cursor: pointer;
  }
  // &__wrapper {
  //     overflow: visible !important;
  // }
}
.table-data-position-fix {
  position: relative;
  // left: -10px;
}
.edit-card {
  height: 100% !important;
  border: none;
  // min-height: 225px;
  min-height: 325px !important;
}

#table-search {
  padding: 0;
}

.stepper__wrapper {
  overflow-y: visible
}
</style>
