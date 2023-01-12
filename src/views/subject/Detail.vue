<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
    <div v-if="subject">
      <h1>{{ subject.name }}</h1>
      <v-responsive class="d-flex align-center text-center fill-height mt-2">
        <div v-if="error">
          <v-alert type="error" density="compact" variant="outlined" class="mb-5">Fach nicht gefunden</v-alert>
        </div>
      </v-responsive>
    </div>

  </v-container>
</template>

<script>
import subjectService from "@/services/subject.service";

export default {
  name: "SubjectDetail",
  data() {
    return {
      loading: true,
      error: true,
      subject: undefined
    }
  },
  async created() {
    const response = await subjectService.get(this.$route.params?.groupId, this.$route.params?.yearId, this.$route.params?.subjectId)
    if (response?.data?.id) {
      this.subject = response.data
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
