import{_ as i}from"./index-C8gyyEjL.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DHrG-13c.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DHrG-13c.js","assets/ValueWithRandom-C6oOIMPM.js","assets/AnimationOptions-Ceq3X7hW.js","assets/index-C8gyyEjL.js","assets/index-DiF7J1F6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
