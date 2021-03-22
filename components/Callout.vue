<template>
  <v-card tile height="400" class="align-center" flat :img="calloutBackground">
    <v-row class="fill-height" justify="center" align="center">
      <v-card
        flat
        class="rounded-xl pa-5"
        :color="hextorgba(theme.accent, 0.35)"
      >
        <v-col cols="12">
          <h1 class="primary--text">
            {{ page.callout_content }}
          </h1>
        </v-col>
        <v-col class="text-center" cols="12">
          <v-btn color="secondary"> Boton </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
import hextorgba from 'hex-to-rgba'
export default {
  props: ['page'],
  computed: {
    calloutBackground() {
      return `https://directus.senlie.cl/assets/${this.page.callout_background}`
    },
    theme() {
      return this.$vuetify.theme.currentTheme
    },
  },
  created() {
    this.hextorgba = hextorgba
  },
}
</script>

<style></style>
