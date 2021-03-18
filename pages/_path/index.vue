<template>
  <div>
    <LazyNuxtDynamic :name="getComponent">
      <div>
        {{ wpPage.slug }}
      </div>
      <pre>
        {{ this.$route.query }}
      </pre>
    </LazyNuxtDynamic>
  </div>
</template>

<script>
/* My comments on how this works:
  NuxtJs has an auto implement router system that imports all components inside the pages folder by default.
  This can be changed in nuxt-config however as well as the use of extending their properties.
  But nothing that cannot be managed directly on the component itself.

  The main gist of the current architecture design is that this is dynamically creating the routes as these
  were fetched from a wordpress site using the appropiate API on the first cycle using nuxtInitServe and they're
  committed to the state in the pages array.

  Since I made a file in pages that catches all routes that are not defined in the Nuxt routing system, I get
  to do with each param as I please as well as getting their queries that come along. I first created a folder
  called "_path" with an index file in it to catch all incoming params that do not match any other path that do actually exists. But the
  main purpose of this is of course is editing the slug from the wordpress site. There is also another file called "_.vue" which
  is simply to catch anything that goes beyond the current managed ammount of params.

  So when nuxt receives a param that does not match any other that prevously existed, it ends up on this file.
  I quickly mount the corresponding component by matching the requested param in the wordpress pages array and obtain the
  corresponding page object.

  Then a dynamic component is mounted by providing the matching page object slug with the param requested.
  vue_component is provided from the wordpress age object.

  Do note:
    Should query params be binded? or will they be accesible from the component from the global route variable?
    Should the wpPage also be provided given as to not search again the wpPage when the corresponding component is mounted?

    Miguel Pérez.

*/
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['pages']),
    wpPage() {
      return this.pages.find((page) => this.$route.params.path === page.slug)
    },
    getComponent() {
      return this.wpPage.meta.vue_component[0]
    },
  },
}
</script>

<style></style>
