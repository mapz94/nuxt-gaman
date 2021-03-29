<template>
  <v-hover v-slot="{ hover }">
    <v-img
      class="fill-height"
      height="100%"
      gradient="to bottom, rgba(0,0,0,.4), rgba(255,255,255,0)"
      dark
      tile
      :src="calloutBackground"
    >
      <v-row class="fill-height" :justify="justify" align="stretch">
        <v-col
          class="filtered transition-fast-in-fast-out"
          :sm="hover ? 11 : 6"
          cols="11"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="11">
              <h2>
                {{ callout.title }}
              </h2>
              <br />
              <p>
                {{ callout.text }}
              </p>
              <br />
              <slot />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
  </v-hover>
</template>

<script>
import hextorgba from 'hex-to-rgba'
export default {
  props: {
    callout: {
      type: Object,
      default: () => {},
    },
    justify: {
      type: String,
      default: 'end',
    },
  },
  computed: {
    calloutBackground() {
      return `https://directus.senlie.cl/assets/${this.callout.background}`
    },
  },
  created() {
    this.hextorgba = hextorgba
  },
}
</script>

<style scoped>
.filtered {
  background-color: rgba(16, 16, 16, 0.5);
  opacity: 1;
}
</style>
