<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
    <v-responsive v-if="group">
      <h1>{{ group.name }}</h1>
      <div class="pl-1">
        <v-btn variant="text" color="info" class="pa-0" @click="changeGroup()">
          Wechseln
          <v-icon>mdi-swap-horizontal</v-icon>
        </v-btn>
        <div class="mt-3">
          <h3>{{ group.members.length }} {{ group.members.length > 1 ? 'Mitglieder' : 'Mitglied'}}</h3>
          <user-image class="mt-2 mr-2" v-for="member in group.members" :key="member.id" :user="member" />
          <v-btn class="mt-2" v-if="group.members.length === 0" variant="outlined" color="secondary">
            Freunde einladen
          </v-btn>
        </div>
        <div class="mt-3">
          <h3>Besitzer</h3>
          <user-image class="mt-2" :user="group.owner" />
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
import groupService from "@/services/group.service";
import UserImage from "@/components/user/Image";

export default {
  name: "GroupDetail",
  components: {UserImage},
  data() {
    return {
      group: undefined,
      loading: true
    }
  },
  async created() {
    const group = (await groupService.get(this.$route.params?.id)).data
    if (group?.id) {
      this.$store.dispatch('updateCurrentGroupId', group.id)
      this.group = group
      this.loading = false
    } else {
      // TODO: Send Notification
      this.$store.dispatch('updateCurrentGroupId', undefined)
      this.$router.push({name: 'Group'})
    }
  },
  methods: {
    changeGroup() {
      this.$store.dispatch('updateCurrentGroupId', undefined)
      this.$router.push({ name: 'Group'})
    }
  }
}
</script>

<style scoped>

</style>
