<template>
  <v-row class="py-16" justify="center" align="center">
    <v-col cols="11" class="text-left">
      <v-row class="fill-height" justify="center" align="center">
        <v-col cols="12">
          <h1>
            <slot />
          </h1>
        </v-col>
        <v-col v-for="i in 8" :key="i" cols="9" sm="5" md="3" lg="2" xl="1">
          <Product></Product>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
