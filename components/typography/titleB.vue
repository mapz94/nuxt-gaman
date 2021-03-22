
<!-- TitleB corresponde al titulo con dos colores en su tipografia 
y que contengan una cantidad de palabras pares como "Productos Destacados" -->


<template>
    <h1 class="title" :style="styleB">
        <slot/>
    </h1>    
</template>

<script>
export default {
    data() {
        return{
            styleA :"color: #D6BAEB",
            styleB :"color: #648465"
        }
    }
}
</script>

<style>

</style>