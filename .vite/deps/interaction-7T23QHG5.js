// node_modules/@tsparticles/interaction-particles-links/browser/interaction.js
async function loadLinksInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesLinks", async (container) => {
    const { Linker } = await import("./Linker-5L5S2F3W.js");
    return new Linker(container);
  }, refresh);
}
export {
  loadLinksInteraction
};
//# sourceMappingURL=interaction-7T23QHG5.js.map
