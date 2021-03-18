<template>
  <v-btn v-bind="bind" :color="index % 2 == 0 ? 'secondary' : 'accent'">
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    index: {
      default: 0,
      type: Number,
    },
    bind: {
      default: () => {},
      type: Object,
      required: false,
    },
  },
}
</script>

<style></style>
