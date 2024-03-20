function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-Cdq_2cWg.js","assets/index-BFy5kMLQ.js","assets/index-DCFRHWZj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BFy5kMLQ.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-Cdq_2cWg.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
