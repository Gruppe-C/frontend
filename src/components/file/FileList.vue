<template>
  <v-row>
    <v-col v-for="file in list" :key="file.id" cols="12" md="4" lg="3" align="left">
      <file-item class="mb-1" :file="file"></file-item>
    </v-col>
  </v-row>
</template>

<script>
import FileItem from "@/components/file/FileItem";
export default {
  name: "FileList",
  components: {FileItem},
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
