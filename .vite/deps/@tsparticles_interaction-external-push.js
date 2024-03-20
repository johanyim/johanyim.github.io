import {
  Push
} from "./chunk-JHPJRO7G.js";
import "./chunk-26VV2B24.js";
import "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/interaction-external-push/browser/index.js
async function loadExternalPushInteraction(engine, refresh = true) {
  await engine.addInteractor("externalPush", async (container) => {
    const { Pusher } = await import("./Pusher-6A7YO6HP.js");
    return new Pusher(container);
  }, refresh);
}
export {
  Push,
  loadExternalPushInteraction
};
//# sourceMappingURL=@tsparticles_interaction-external-push.js.map
