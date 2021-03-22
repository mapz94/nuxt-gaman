
<!-- TitleD corresponde a "elementos (en Foter)"
 y "Descripcion (en carro y finalizar compra)" -->

<template>
  <h5 class="title" :style="style">
      <slot/>
  </h5>
</template>

<script>
export default {
data() { 
    return {
        style: "color:#ffffff"
        }
    }
}
</script>

<style>

</style>