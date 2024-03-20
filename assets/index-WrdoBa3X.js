function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CxxABOKA.js","assets/index-D3FRFp_t.js","assets/index-CK44u98c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D3FRFp_t.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CxxABOKA.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
