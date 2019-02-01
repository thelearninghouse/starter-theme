<template>
<v-stepper v-model="activeStep">
  <v-stepper-header>
    <v-stepper-step :complete="activeStep > 1" step="1">Select Fields</v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="activeStep > 2" step="2">Update Fields</v-stepper-step>
    <v-btn @click="handleCancel" flat icon color="secondary">
      <v-icon>close</v-icon>
    </v-btn>
    <v-divider></v-divider>

  </v-stepper-header>

  <v-stepper-items>
    <v-stepper-content step="1">
      <v-card flat class="mt-0 mb-2">
        <slot name="step1" />
      </v-card>
      <v-btn color="primary" @click="activeStep = 2">
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-content step="2">
      <v-card flat class="mt-0 mb-2">
        <slot name="step2" />
      </v-card>
      <v-btn icon flat @click="activeStep = 1">
        <v-icon dark left>arrow_back</v-icon>
      </v-btn>
      <v-btn color="primary" @click="handleSave">Save</v-btn>
    </v-stepper-content>

  </v-stepper-items>
</v-stepper>
</template>

<script>
export default {
  name: "BulkEditStepper",
  data() {
    return {
      activeStep: 1
    }
  },
  methods: {
    delay(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    },
    handleCancel() {
      this.$emit('stepper-cancel')
      this.delay(2000).then(() => {
        this.$nextTick(() => {
          this.activeStep = 1
        })
      });
    },
    handleSave() {
      this.$emit('stepper-save')
      this.delay(2000).then(() => {
        this.$nextTick(() => {
          this.activeStep = 1
        })
      });
    }
  }
}
</script>

<style lang="scss">
.stepper {
    width: 100%;
    // overflow: visible;
    overflow-y: visible;
    overflow-x: hidden;
    height: 100%;
    &__header {
        .btn {
            position: absolute;
            right: 0px;
            background: blue;
            // background-color: #565656 !important;
            background-color: #717171 !important;
            color: #fff !important;
            z-index: 9999999999;
            top: 0px;
            width: 42px;
            height: 42px;

            &__content {
                box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important;
            }
        }
    }
    &__wrapper {
        .card {
            height: 100% !important;
            border: none;
            // min-height: 225px;
            min-height: 325px !important;
        }
    }
}
</style>
