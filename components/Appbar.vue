<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-img contain max-height="64" :src="logoFull" />
      <v-list> </v-list>
    </v-navigation-drawer>
    <v-app-bar
      elevate-on-scroll
      app
      :color="`${scroll > 20 ? 'primary' : 'transparent'}`"
    >
      <v-btn icon large :dark="!(scroll > 20)" @click.stop="drawer = !drawer">
        <v-icon> mdi-menu </v-icon>
      </v-btn>
      <v-img
        max-height="32"
        contain
        :src="logo"
        :class="{ 'img-color': scroll > 20 }"
      />
      <v-spacer />
      <v-btn
        icon
        large
        :dark="!(scroll > 20)"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon> mdi-menu </v-icon>
      </v-btn>
    </v-app-bar>
    <div style="position: absolute; z-index: 999; text-align: right !important">Hello</div>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      scroll: 0,

      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'mdi-apps', title: 'Welcome', to: '/' },
        { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    ...mapState(['appbar']),
    logo() {
      return `https://directus.senlie.cl/assets/${this.appbar.logo}`
    },
    logoFull() {
      return `https://directus.senlie.cl/assets/${this.appbar.full_logo}`
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scroll = window.scrollY
    },
  },
}
</script>

<style scoped>
.img-color {
  filter: grayscale(1);
  transition: filter 0.6s ease-in-out;
}
</style>
