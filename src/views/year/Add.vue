<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1>Neues Schuljahr</h1>
      <v-form class="mt-md-2" v-model="valid" ref="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="pb-0 pa-3">
            <date-picker v-model:value="schoolYear.startYear" type="year" placeholder="Start Jahr"></date-picker>
          </v-col>
          <v-col cols="12" md="6" class="pa-0 mt-2 mt-lg-0">
            <date-picker v-model:value="schoolYear.endYear" type="year" placeholder="End Jahr"></date-picker>
          </v-col>
        </v-row>
        <v-alert v-if="error" type="error" density="compact" variant="outlined" class="mb-5 mt-8"> {{ error }}</v-alert>
        <div class="d-flex justify-end mt-10">
          <v-btn color="secondary" @click="$router.back()">Abbrechen</v-btn>
          <v-btn color="primary" type="submit" class="ml-3">Erstellen</v-btn>
        </div>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import schoolyearService from "@/services/schoolyear.service";

export default {
  name: "SchoolYearAdd",
  components: {DatePicker},
  data() {
    return {
      schoolYear: {
        startYear: undefined,
        endYear: undefined
      },
      valid: false,
      loading: false,
      error: '',
      yearRules: [
        v => !!v || 'Bitte Jahr angeben!'
      ],
    }
  },
  methods: {
    async submit() {
      if (this.schoolYear.startYear && this.schoolYear.endYear) {
        this.loading = true
        this.schoolYear.startYear = this.schoolYear.startYear.getFullYear()
        this.schoolYear.endYear = this.schoolYear.endYear.getFullYear()
        const response = await schoolyearService.create(this.$route.params.groupId, this.schoolYear)
        if (response?.data?.id) {
          this.$router.push({name: 'SchoolYearDetail', params: {groupId: this.$route.params.groupId, yearId: response.data.id}})
        } else {
          this.error = response.data.message
        }
        this.loading = false
      }
    }
  }
}
</script>

<style>
.mx-datepicker {
  width: 100%;
}
</style>
