<template>
  <div>
    <Callout :page="page" />
    <Featured />
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    const response = await ctx.$directus.items('index_page').read()
    return { page: response.data }
  },
}
</script>
