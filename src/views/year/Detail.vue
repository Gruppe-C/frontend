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
        <div v-if="subjectError">
          <v-alert type="error" :icon="false" density="compact" variant="outlined" class="mb-5">Noch keine Fächer
            angelegt
          </v-alert>
        </div>
        <div v-if="schoolYearError">
          <v-alert type="error" :icon="false" density="compact" variant="outlined" class="mb-5">Schuljahr nicht
            gefunden
          </v-alert>
        </div>
        <subject-list v-else :list="subjects"></subject-list>
        <v-btn
          @click="$router.push({ name: 'SubjectAdd', params: { groupId: $route.params.groupId, yearId: $route.params.yearId}})"
          class="float"
          icon
          size="60"
          color="primary"
        >
          <v-icon size="30">mdi-plus</v-icon>
        </v-btn>
      </v-responsive>
    </div>
  </v-container>
</template>

<script>
import subjectService from "@/services/subject.service";
import SubjectList from "@/components/subject/SubjectList";
import schoolYearService from "@/services/schoolyear.service";

export default {
  name: "SchoolYearDetail",
  components: {SubjectList},
  data() {
    return {
      subjects: [],
      schoolYear: undefined,
      loading: true,
      schoolYearError: false,
      subjectError: false
    }
  },
  async created() {
    const schoolYear = await schoolYearService.get(this.$store.state.currentGroupId, this.$route.params?.yearId)
    if (schoolYear?.data?.id) {
      this.schoolYear = schoolYear.data
      this.schoolYearError = false
    } else {
      this.schoolYear = undefined
      this.schoolYearError = true
    }

    const response = await subjectService.getList(this.$store.state.currentGroupId, this.$route.params.yearId)
    if (response?.data?.length > 0) {
      this.subjects = response.data
      this.subjectError = false
    } else {
      this.subjects = []
      this.subjectError = true
    }
    this.loading = false
  }
}
</script>

<style scoped>
.float {
  position: fixed;
  bottom: 70px;
  right: 10px;
  text-align: center;
}
</style>
