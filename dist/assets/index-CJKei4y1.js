import{_ as e}from"./index-C8gyyEjL.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DS_Zu9O_.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-DS_Zu9O_.js","assets/index-C8gyyEjL.js","assets/index-DiF7J1F6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
