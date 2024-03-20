function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-B9t0Dt48.js","assets/index-D3FRFp_t.js","assets/index-CK44u98c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D3FRFp_t.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-B9t0Dt48.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
