// node_modules/@tsparticles/updater-color/browser/index.js
async function loadColorUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("color", async (container) => {
    const { ColorUpdater } = await import("./ColorUpdater-QCG23P5L.js");
    return new ColorUpdater(container);
  }, refresh);
}
export {
  loadColorUpdater
};
//# sourceMappingURL=browser-XLRTH34A.js.map
