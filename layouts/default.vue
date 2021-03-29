<template>
  <v-app>
    <Appbar />
    <v-main class="pa-0">
      <v-container class="fill-height pa-0" fluid>
        <v-row justify="center">
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>Gaman Digital &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.$store.state.height = window.innerHeight
    },
  },
}
</script>
