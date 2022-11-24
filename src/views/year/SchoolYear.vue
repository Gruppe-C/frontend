<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
    <h1>Schuljahre</h1>
    <v-responsive class="d-flex align-center text-center fill-height mt-2">
      <div v-if="error">
        <v-alert type="error" density="compact" variant="outlined" class="mb-5">Noch kein Schuljahr angelegt</v-alert>
        <v-btn variant="outlined" color="success" @click="$router.push({ name: 'SchoolYearAdd', params: { groupId: $route.params.groupId}})">
          Hinzufügen
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
      <school-year-list v-else :list="schoolYears"></school-year-list>
    </v-responsive>
  </v-container>
</template>

<script>
import schoolYearService from "@/services/schoolyear.service";
import SchoolYearList from "@/components/year/SchoolYearList";

export default {
  name: "SchoolYear",
  components: {SchoolYearList},
  data() {
    return {
      schoolYears: [],
      loading: true,
      error: false
    }
  },
  async created() {
    const response = await schoolYearService.getList(this.$store.state.currentGroupId)
    if (response?.data?.length > 0) {
      this.schoolYears = response.data
      this.error = false
    } else {
      this.schoolYears = []
      this.error = true
    }
    this.loading = false
  }
}
</script>

<style scoped>

</style>
