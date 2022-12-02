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
      <h1>Fach erstellen</h1>
      <v-form class="mt-md-2" v-model="valid" ref="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="pb-0 pa-3">
            <v-text-field v-model="subject.name" counter="50" required label="Name" variant="outlined" :rules="nameRules"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="pa-0">
            <v-color-picker
              v-model="subject.color"
              :swatches="swatches"
              elevation="0"
              show-swatches
              hide-canvas
              hide-inputs
              hide-sliders
              width="100%"
            ></v-color-picker>
          </v-col>
        </v-row>
        <v-alert v-if="error" type="error" density="compact" variant="outlined" class="mb-5"> {{ error }}</v-alert>
        <div class="d-flex justify-end mt-5">
          <v-btn color="secondary" @click="$router.back()">Abbrechen</v-btn>
          <v-btn color="primary" type="submit" class="ml-3">Erstellen</v-btn>
        </div>
      </v-form>
    </v-responsive>
    <navigation />
  </v-container>
</template>

<script>
import groupService from "@/services/group.service";
import Navigation from "@/components/Navigation";
import subjectService from "@/services/subject.service";

export default {
  name: "SubjectAdd",
  components: {Navigation},
  data() {
    return {
      subject: {
        name: undefined,
        color: undefined
      },
      valid: false,
      loading: false,
      error: '',
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
        ['#FFA500', '#FF8C00', '#FF5400'],
        ['#000000', '#696969'],
        ['#00BFFF', '#800080']
      ],
      nameRules: [
        v => !!v || 'Bitte namen angeben!',
        v => v.length < 50 || 'Name zu lang!'
      ],
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const response = await subjectService.create(this.$route.params.groupId, this.$route.params.yearId, this.subject)
        if (response?.data?.id) {
          this.$router.push({name: 'SubjectDetail', params: {groupId: response.data.id, yearId: this.$route.params.yearId, subjectId: response.data.id}})
        } else {
          this.error = response.data.message
        }
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>
