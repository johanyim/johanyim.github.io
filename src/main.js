import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// composing a minimal configuration with only the necessary plugins
import Particles from "@tsparticles/vue3";
import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadExternalBubbleInteraction } from "@tsparticles/interaction-external-bubble";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

    
app.use(Particles, {
    init: async engine => {
        loadExternalBubbleInteraction(engine);
        loadParticlesLinksInteraction(engine);
        loadExternalPushInteraction(engine);
        await loadBasic(engine);
    },
})
app.mount('#app')

// app.mount('#app')
