function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-D9iHfOe7.js","assets/OptionsColor-YDRyoCkN.js","assets/index-BFy5kMLQ.js","assets/index-DCFRHWZj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BFy5kMLQ.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-D9iHfOe7.js"),__vite__mapDeps([0,1,2,3]));return new n(a)},r)}export{o as loadLinksInteraction};
