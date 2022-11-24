<template>
  <v-row>
    <v-col v-for="year in list" :key="year.id" cols="12" md="4" lg="3">
      <school-year-card :school-year="year"></school-year-card>
    </v-col>
  </v-row>
</template>

<script>
import SchoolYearCard from "@/components/year/SchoolYearCard";

export default {
  name: "SchoolYearList",
  components: {SchoolYearCard},

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
