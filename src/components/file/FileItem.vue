<template>
  <v-row>
    <v-col cols="1" style="margin: auto">
      <v-icon>mdi-file</v-icon>
    </v-col>
    <v-col style="margin: auto;text-overflow: ellipsis;overflow: hidden;">
      <a :href="file.media.url">
        <span class="file__name">{{ file.name }}</span>
      </a>
    </v-col>
    <v-col cols="1" style="margin: auto" align="right">
      <user-image :size="45" :user="file.owner" />
    </v-col>
    <v-col cols="4" style="margin: auto" align="right">
      <date :date="file.createdAt"/>
    </v-col>
  </v-row>
</template>

<script>
import Date from "@/components/Date";
import UserImage from "@/components/user/Image";

export default {
  name: "FileItem",
  components: {UserImage, Date},
  props: {
    file: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.file__name {
  font-size: 25px;
}
</style>
