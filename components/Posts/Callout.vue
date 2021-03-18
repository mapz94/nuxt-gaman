<template>
  <v-card
    :height="400"
    :img="FeaturedImage(post)"
    color="transparent"
    tile
    flat
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="11">
        <v-card
          :height="height / 2"
          class="rounded-xl"
          :color="hexRgba(Theme.accent, 0.3)"
          flat
        >
          <v-row dense class="fill-height" justify="center" align="center">
            <v-col cols="11">
              <div
                v-if="Title"
                class="text-center text-h4 font-weight-bold primary--text"
              >
                {{ Title }}
              </div>
              <div v-if="Content" class="text-center" v-html="Content" />
            </v-col>
            <v-col class="text-center">
              <LazyNuxtDynamic
                v-for="(element, i) in Elements"
                :key="i"
                :name="element.Component"
                :bind="element.bind"
              >
                {{ element.value }}
              </LazyNuxtDynamic>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import hexToRgba from 'hex-to-rgba'
export default {
  props: ['post'],
  data() {
    return {
      height: 400,
    }
  },
  computed: {
    Content() {
      // Returns the page's content.
      return this.post.content.rendered
    },
    Title() {
      // Returns the pages's title
      return this.post.title.rendered
    },
    Theme() {
      return this.$vuetify.theme.isDark
        ? this.$vuetify.theme.themes.dark
        : this.$vuetify.theme.themes.light
    },
    Elements() {
      return JSON.parse(this.post.meta.elements[0])
    },
  },
  methods: {
    FeaturedImage(WPObject) {
      if (
        Object.keys(WPObject._embedded).find(
          (key) => key === 'wp:featuredmedia'
        ) != null
      ) {
        return WPObject._embedded['wp:featuredmedia'][0].source_url
      } else {
        return ''
      }
    },
    hexRgba(hex, op) {
      return hexToRgba(hex, op)
    },
  },
}
</script>

<style></style>
