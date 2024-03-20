// node_modules/@tsparticles/updater-size/browser/index.js
async function loadSizeUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("size", async () => {
    const { SizeUpdater } = await import("./SizeUpdater-4235NBLD.js");
    return new SizeUpdater();
  }, refresh);
}
export {
  loadSizeUpdater
};
//# sourceMappingURL=browser-QMLUAJ4I.js.map
