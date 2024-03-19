function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-CktrOvzo.js","assets/OptionsColor-CMqUFD6Z.js","assets/index-b2LIg75-.js","assets/index-RRWjUmfX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-b2LIg75-.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CktrOvzo.js"),__vite__mapDeps([0,1,2,3]));return new n(a)},r)}export{o as loadLinksInteraction};
