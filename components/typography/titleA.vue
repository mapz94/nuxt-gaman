<!-- TitleA corresponde al llamado de atencion o callout -->

<template>
  <h1 class="title" :style="style">
    <slot />
  </h1>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$vuetify.theme.currentTheme
    },
    style() {
      return `color:${this.theme.primary}`
    },
  },
  created() {
    console.log(this.$vuetify.theme.currentTheme)
  },
}
</script>

<style></style>
