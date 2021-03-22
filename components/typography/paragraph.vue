
<!-- Paragraph se refiere a los textos correspondientes a "input (en Mi cuenta y Finalizar compra)" 
"Condiciones (en Carro y Finalizar compra)" -->

<template>
  <h5 class="title" :style="style">
      <slot/>
  </h5>
</template>

<script>
export default {
data() { 
    return {
        style: "color:#060606"
        }
    }
}
</script>

<style>

</style>