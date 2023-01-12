<template>
  <span v-if="date">{{ format }}</span>
</template>

<script>
export default {
  name: 'Date',
  props: {
    date: {
      required: true
    }
  },
  computed: {
    format () {
      const date = Date.parse(this.date)
      const formatter = new Intl.DateTimeFormat('de', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: true,
        timeZone: 'UTC'
      })
      return formatter.format(date)
    }
  }
}
</script>
