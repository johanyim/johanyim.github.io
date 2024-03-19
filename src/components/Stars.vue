<script setup>
     // import Particles from "@tsparticles/vue3"
     // import { loadSlim } from "@tsparticles/slim"
     // import { loadFull } from "tsparticles"
     // import starConfig from "../assets/star_config.json"
</script>

<template>
    <!-- <vue-particles id="stars" -->
    <!--     :options="starConfig" -->
    <!--     :particlesInit="particlesInit"  -->
    <!--     /> -->
</template>

<!-- <script> -->
<!--     export default { -->
<!--         data() { -->
<!--             return { -->
<!--                 options: {starConfig}, -->
<!--             }; -->
<!--         }, -->
<!---->
<!--         methods: { -->
<!--             async particlesInit(engine) { -->
<!--                 await loadFull(engine); -->
<!--             } -->
<!---->
<!--         } -->
<!--     } -->
<!-- </script> -->
<style scoped lang='scss'>
#stars {
    position: absolute;
    z-index:-1;
    width: 100vw;
    height: 80vh;
}
</style>
