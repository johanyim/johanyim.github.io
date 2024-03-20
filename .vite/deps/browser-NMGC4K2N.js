// node_modules/@tsparticles/updater-opacity/browser/index.js
async function loadOpacityUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("opacity", async (container) => {
    const { OpacityUpdater } = await import("./OpacityUpdater-NMMIEL5T.js");
    return new OpacityUpdater(container);
  }, refresh);
}
export {
  loadOpacityUpdater
};
//# sourceMappingURL=browser-NMGC4K2N.js.map
