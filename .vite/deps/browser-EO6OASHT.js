// node_modules/@tsparticles/updater-out-modes/browser/index.js
async function loadOutModesUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("outModes", async (container) => {
    const { OutOfCanvasUpdater } = await import("./OutOfCanvasUpdater-DJOKGT6L.js");
    return new OutOfCanvasUpdater(container);
  }, refresh);
}
export {
  loadOutModesUpdater
};
//# sourceMappingURL=browser-EO6OASHT.js.map
