function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D99w8_fd.js","assets/index-D3FRFp_t.js","assets/index-CK44u98c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D3FRFp_t.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D99w8_fd.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
