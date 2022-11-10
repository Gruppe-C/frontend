<template>
  <div v-for="group in list" :key="group.id">
    <h3 class="mb-5">{{ group.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "GroupList",
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
