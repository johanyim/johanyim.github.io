import {
  Bubble,
  BubbleBase,
  BubbleDiv
} from "./chunk-6FBSUO7S.js";
import "./chunk-26VV2B24.js";
import "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/interaction-external-bubble/browser/index.js
async function loadExternalBubbleInteraction(engine, refresh = true) {
  await engine.addInteractor("externalBubble", async (container) => {
    const { Bubbler } = await import("./Bubbler-2Z3YT45X.js");
    return new Bubbler(container);
  }, refresh);
}
export {
  Bubble,
  BubbleBase,
  BubbleDiv,
  loadExternalBubbleInteraction
};
//# sourceMappingURL=@tsparticles_interaction-external-bubble.js.map
