import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Particles  from "@tsparticles/vue3";

// composing a minimal configuration with only the necessary plugins
// import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadExternalBubbleInteraction } from "@tsparticles/interaction-external-bubble";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

createApp(App)
    .use(Particles, {
            init: async engine => {
                loadExternalBubbleInteraction(engine);
                loadParticlesLinksInteraction(engine);
                loadExternalPushInteraction(engine);
                await loadBasic(engine);
            },
        })
    .mount('#app');
