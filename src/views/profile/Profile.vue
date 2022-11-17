<template>
<v-container>
  <v-responsive class="d-flex align-center text-center fill-height" v-if="user">
    <h1>Account</h1>
    <v-avatar color="primary" size="130">
      <h1>{{ user.username.at(0) + user.username.at(user.username.length - 1) }}</h1>
    </v-avatar>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2>Benutzername</h2>
        <h4>{{ user.username }}</h4>
      </v-col>
      <v-col>
        <h2>Anzeigename</h2>
        <div v-if="editDisplayName">
          <v-text-field v-model="displayName" counter="30" required label="Name" variant="outlined" :rules="nameRules"></v-text-field>
          <div class="d-flex justify-end">
            <v-btn color="secondary" @click="editDisplayName = !editDisplayName">Abbrechen</v-btn>
            <v-btn color="primary" @click="changeDisplayName" class="ml-3">Speichern</v-btn>
          </div>
        </div>
        <div v-else>
          <h4 class="ma-auto">{{ user.displayName }} <v-icon @click="editDisplayName = !editDisplayName" size="18">mdi-pencil</v-icon></h4>
        </div>
      </v-col>
    </v-row>
  </v-responsive>
  <navigation />
</v-container>
</template>

<script>
import Navigation from "@/components/Navigation";
import userService from "@/services/user.service";

export default {
  name: "Profile",
  components: {Navigation},
  data() {
    return {
      user: undefined,
      displayName: undefined,
      editDisplayName: false,
      nameRules: [
        v => !!v || 'Bitte namen angeben!',
        v => v.length < 30 || 'Name zu lang!'
      ],
    }
  },
  async created() {
    this.user = await this.$store.getters.getProfile
    this.displayName = this.user.displayName
  },
  methods: {
    async changeDisplayName() {
      if (this.displayName) {
        const response = await userService.changeDisplayName(this.displayName)
        if (response?.data?.id) {
          this.user = response.data
          this.editDisplayName = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
