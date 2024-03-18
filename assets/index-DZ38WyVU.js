import{_ as n}from"./index-C8gyyEjL.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Dmay_0Sb.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-P7gIeBqL.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Dmay_0Sb.js","assets/PolygonDrawerBase-CCQwWuaL.js","assets/index-C8gyyEjL.js","assets/index-DiF7J1F6.css","assets/TriangleDrawer-P7gIeBqL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
