<template>
  <v-hover v-slot="{ hover }">
    <v-card tile ripple>
      <v-carousel
        :cycle="hover"
        interval="1000"
        height="100%"
        hide-delimiters
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(image,i) in images" :key="i">
          <v-img
            class="fill-height"
            gradient="to top, rgba(0,0,0,.3), rgba(235,235,235,0.01)"
            contain
            height="100%"
            :src="image"
            alt="No hay imagen"
          >
            <v-row class="fill-height" justify="center" align="end">
              <v-col cols="11" class="white--text text-left">
                <h3 class="my-3">Nombre Producto</h3>
              </v-col>
            </v-row>
          </v-img>
        </v-carousel-item>
      </v-carousel>

      <v-card-actions class="mx-1">
        <h3>$45.000</h3>
        <v-spacer />
        <v-btn icon>
          <v-icon large> mdi-cart </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.ltwebstatic.com/images2_pi/2019/01/04/15465857944096448902_thumbnail_600x799.webp',
        'https://img.ltwebstatic.com/images2_pi/2019/01/04/15465857944096448902_thumbnail_600x799.webp',
        'https://img.ltwebstatic.com/images2_pi/2019/01/04/15465857944096448902_thumbnail_600x799.webp',
      ],
    }
  },
}
</script>

<style></style>
