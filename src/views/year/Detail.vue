<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
    <div v-if="schoolYear">
      <h1>{{ schoolYear.startYear }}/{{ schoolYear.endYear }}</h1>
      <v-responsive class="d-flex align-center text-center fill-height mt-2">
        <div v-if="error">
          <v-alert type="error" density="compact" variant="outlined" class="mb-5">Schuljahr nicht gefunden</v-alert>
        </div>
      </v-responsive>
    </div>

  </v-container>
</template>

<script>
import schoolYearService from "@/services/schoolyear.service";

export default {
  name: "SchoolYearDetail",
  data() {
    return {
      loading: true,
      error: true,
      schoolYear: undefined
    }
  },
  async created() {
    const response = await schoolYearService.get(this.$route.params?.groupId, this.$route.params?.yearId)
    if (response?.data?.id) {
      this.schoolYear = response.data
      this.error = false
    } else {
      this.error = true
    }
    this.loading = false
  }
}
</script>

<style scoped>

</style>
