<template>
  <div>
    <v-carousel
      :height="$store.state.height"
      hide-delimiters
      :show-arrows="index.callouts_slider.length > 1"
    >
      <v-carousel-item
        v-for="callout in index.callouts_slider"
        :key="callout.callouts_id.id"
      >
        <Callout :callout="callout.callouts_id">
          <v-btn light large> Ver Productos </v-btn>
        </Callout>
      </v-carousel-item>
    </v-carousel>
    <Featured> Productos Recientes </Featured>
    <Callout :callout="index.subscribe_callout" justify="start">
      <v-row class="mb-5">
        <v-col cols="9">
          <v-card color="transparent" flat>
            <v-text-field v-model="subscribe.names" label="Nombres" />
            <v-text-field v-model="subscribe.email" label="E-mail" />
            <v-btn light> Enviar </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </Callout>
    <Featured> Productos Destacados </Featured>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    const response = await ctx.$directus
      .items('index_page')
      .read({ fields: 'callouts_slider.callouts_id.*,subscribe_callout.*' })
    return { index: response.data }
  },
  data() {
    return {
      subscribe: {
        names: '',
        email: '',
      },
    }
  },
}
</script>
