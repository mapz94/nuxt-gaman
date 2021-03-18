/* eslint-disable vue/no-v-html */
<template>
  <v-img :src="FeaturedImage(Page)">
    <v-row class="fill-height" justify="center" align="center">
      <v-col v-if="Title && Content" cols="11">
        <div class="title" v-html="Title" />
        <div v-html="Content" />
      </v-col>
      <v-col v-for="post in Posts" :key="post.id" cols="11">
        <LazyNuxtDynamic :name="getComponent(post)" :post="post" />
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch() {
    // This runs before reaching the client.
    // await this.getPages()
  },
  computed: {
    ...mapState(['pages', 'posts']),
    Page() {
      // Returns the current page object.
      return this.pages.find((page) => page.slug === 'inicio')
    },
    Content() {
      // Returns the page's content.
      return this.Page.content.rendered
    },
    Title() {
      // Returns the pages's title
      return this.Page.title.rendered
    },
    Posts() {
      // Find posts that match the category in the page object.
      return this.posts.filter((post) =>
        post.categories.includes(parseInt(this.Page.meta.post_category))
      )
    },
  },
  methods: {
    FeaturedImage(WPPage) {
      if (
        Object.keys(WPPage._embedded).find(
          (key) => key === 'wp:featuredmedia'
        ) != null
      ) {
        return WPPage._embedded['wp:featuredmedia'][0].source_url
      } else {
        return ''
      }
    },
    getComponent(Post) {
      return Post.meta.vue_component[0]
    },
  },
}
</script>
