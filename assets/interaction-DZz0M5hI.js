function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-D2Nz51s1.js","assets/OptionsColor-1sAB8_Ot.js","assets/index-D3FRFp_t.js","assets/index-CK44u98c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D3FRFp_t.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-D2Nz51s1.js"),__vite__mapDeps([0,1,2,3]));return new n(a)},r)}export{o as loadLinksInteraction};
