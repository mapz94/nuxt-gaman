<!-- TitleB corresponde al titulo con dos colores en su tipografia 
y que contengan una cantidad de palabras pares como "Productos Destacados" -->

<!-- no se puede usar slot con varias string-->

<template>
  <v-row justify="center">
    <div v-for="(text, i) in texts" :key="i" class="mx-1">
      <h1 v-if="i % 2 === 0" class="secondary--text">
        {{ text }}
      </h1>
      <h1 v-else class="primary--text">
        {{ text }}
      </h1>
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
