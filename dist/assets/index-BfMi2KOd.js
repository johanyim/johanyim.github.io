import{_ as c}from"./index-C8gyyEjL.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DLMLKzF1.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DLMLKzF1.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-C8gyyEjL.js","assets/index-DiF7J1F6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
