<script setup>
    import starConfig from "../assets/star_config.json"
    import Particles from "@tsparticles/vue3";

    // composing a minimal configuration with only the necessary plugins
    // import { tsParticles } from "@tsparticles/engine";
    import { loadBasic } from "@tsparticles/basic";
    import { loadExternalBubbleInteraction } from "@tsparticles/interaction-external-bubble";
    import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
    import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

</script>

<template>
    <vue-particles id="stars"
        :options="starConfig"
        />
</template>

<script>
    export default {
        data() {
            return {
                options: {starConfig},
            };
        },
        methods: {
            async particlesInit(engine) {
                loadExternalBubbleInteraction(engine);
                loadParticlesLinksInteraction(engine);
                loadExternalPushInteraction(engine);
                await loadBasic(engine);
            }

        }
}
</script>
<style scoped lang='scss'>
#stars {
    position: absolute;
    z-index:-1;
    width: 100vw;
    height: 80vh;
}
</style>

<!---->
<!-- <script setup> -->
<!--      // import Particles from "@tsparticles/vue3" -->
<!--      // import { loadSlim } from "@tsparticles/slim" -->
<!--      // import { loadFull } from "tsparticles" -->
<!--      // import starConfig from "../assets/star_config.json" -->
<!-- </script> -->
<!---->
<!-- <template> -->
<!--     <!-- <vue-particles id="stars" --> -->
<!--     <!--     :options="starConfig" --> -->
<!--     <!--     :particlesInit="particlesInit"  --> -->
<!--     <!--     /> --> -->
<!-- </template> -->
<!---->
<!-- <!-- <script> --> -->
<!-- <!--     export default { --> -->
<!-- <!--         data() { --> -->
<!-- <!--             return { --> -->
<!-- <!--                 options: {starConfig}, --> -->
<!-- <!--             }; --> -->
<!-- <!--         }, --> -->
<!-- <!----> -->
<!-- <!--         methods: { --> -->
<!-- <!--             async particlesInit(engine) { --> -->
<!-- <!--                 await loadFull(engine); --> -->
<!-- <!--             } --> -->
<!-- <!----> -->
<!-- <!--         } --> -->
<!-- <!--     } --> -->
<!-- <!-- </script> --> -->
<!-- <style scoped lang='scss'> -->
<!-- #stars { -->
<!--     position: absolute; -->
<!--     z-index:-1; -->
<!--     width: 100vw; -->
<!--     height: 80vh; -->
<!-- } -->
<!-- </style> -->
<!---->
