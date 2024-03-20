// node_modules/@tsparticles/basic/browser/index.js
async function loadBasic(engine, refresh = true) {
  const { loadBaseMover } = await import("./browser-C2TABYLR.js"), { loadCircleShape } = await import("./browser-XYEY65GD.js"), { loadColorUpdater } = await import("./browser-XLRTH34A.js"), { loadOpacityUpdater } = await import("./browser-NMGC4K2N.js"), { loadOutModesUpdater } = await import("./browser-EO6OASHT.js"), { loadSizeUpdater } = await import("./browser-QMLUAJ4I.js");
  await loadBaseMover(engine, false);
  await loadCircleShape(engine, false);
  await loadColorUpdater(engine, false);
  await loadOpacityUpdater(engine, false);
  await loadOutModesUpdater(engine, false);
  await loadSizeUpdater(engine, false);
  await engine.refresh(refresh);
}
export {
  loadBasic
};
//# sourceMappingURL=@tsparticles_basic.js.map
