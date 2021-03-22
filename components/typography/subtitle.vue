
<!-- Subtitle se refiere a los textos que entregan informacion
especifica tal como "ID producto"  -->

<template>
  <h6 class="title" :style="style">
      <slot/>
  </h6>
</template>

<script>
export default {
data() { 
    return {
        style: "color:#648465"
    }
    }
}
</script>

<style>

</style>