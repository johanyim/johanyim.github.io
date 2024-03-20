import {
  Links,
  LinksShadow,
  LinksTriangle
} from "./chunk-3ZZHAQH5.js";
import "./chunk-26VV2B24.js";
import "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/interaction-particles-links/browser/index.js
async function loadParticlesLinksInteraction(engine, refresh = true) {
  const { loadLinksInteraction } = await import("./interaction-7T23QHG5.js"), { loadLinksPlugin } = await import("./plugin-IOEXOVN2.js");
  await loadLinksInteraction(engine, refresh);
  await loadLinksPlugin(engine, refresh);
}
export {
  Links,
  LinksShadow,
  LinksTriangle,
  loadParticlesLinksInteraction
};
//# sourceMappingURL=@tsparticles_interaction-particles-links.js.map
