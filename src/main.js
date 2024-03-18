import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; 

createApp(App)
    .use(Particles, {
            init: async engine => {
                await loadFull(engine);
            },
        })
    .mount('#app');
