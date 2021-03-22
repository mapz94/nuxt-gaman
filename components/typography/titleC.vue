
<!-- TitleC corresponde a titulos como "Nombre de productos" 
"Elementos (en Appbar)" 
"Categorias (en carrito)" "Mi cuenta (en mi cuenta)" 
"Datos del comprador y Metodos de pago (en finalizar compra)"  -->

<template>
    <h5 class="title" :style="style">
        <slot/>
    </h5>
</template>

<script>
export default {
    data() { 
        return {
            style: "color:#D6BAEB"
        }
    }
}
</script>

<style>

</style>