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
      <h1 :style="'color: ' + subject.color">{{ subject.name }}</h1>
      <v-responsive class="d-flex align-center text-center fill-height mt-2">
        <div v-if="error">
          <v-alert type="error" density="compact" variant="outlined" class="mb-5">Fach nicht gefunden</v-alert>
        </div>
        <div v-if="fileError">
          <v-alert type="warning" density="compact" variant="outlined" class="mb-5">Noch keine Dateien vorhanden</v-alert>
        </div>
        <file-list :list="files" />
        <v-btn
          @click="chooseFiles"
          class="float"
          icon
          size="60"
          color="primary"
        >
          <v-icon size="30">mdi-plus</v-icon>
          <input id="fileUpload" type="file" @change="uploadFile" accept="*" hidden>
        </v-btn>
      </v-responsive>
    </div>

  </v-container>
</template>

<script>
import subjectService from "@/services/subject.service";
import fileService from "@/services/file.service";
import FileList from "@/components/file/FileList";

export default {
  name: "SubjectDetail",
  components: {FileList},
  data() {
    return {
      loading: true,
      error: true,
      fileError: false,
      subject: undefined,
      files: []
    }
  },
  async created() {
    const response = await subjectService.get(this.$route.params?.groupId, this.$route.params?.yearId, this.$route.params?.subjectId)
    if (response?.data?.id) {
      this.subject = response.data
      fileService.getList(this.$route.params?.groupId, this.$route.params?.yearId, this.subject.id).then(files => {
        if (files.data?.length) {
          this.files = files.data
        } else {
          this.fileError = true
        }
      })
      this.error = false
    } else {
      this.error = true
    }
    this.loading = false
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click()
    },
    uploadFile(event) {
      const files = event.target.files
      fileService.upload(this.$route.params?.groupId, this.subject.schoolYear.id, this.subject.id, files[0]).then(response => {
        if (response?.data?.id) {
          this.files.push(response.data)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
