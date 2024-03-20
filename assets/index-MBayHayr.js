function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-BMWv1PJD.js","assets/index-D3FRFp_t.js","assets/index-CK44u98c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D3FRFp_t.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BMWv1PJD.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
