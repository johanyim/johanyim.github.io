import{_ as i}from"./index-C8gyyEjL.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-K57plaa3.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-K57plaa3.js","assets/index-C8gyyEjL.js","assets/index-DiF7J1F6.css","assets/ValueWithRandom-C6oOIMPM.js","assets/AnimationOptions-Ceq3X7hW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
