// node_modules/@tsparticles/move-base/browser/index.js
async function loadBaseMover(engine, refresh = true) {
  await engine.addMover("base", async () => {
    const { BaseMover } = await import("./BaseMover-S5SZFDO2.js");
    return new BaseMover();
  }, refresh);
}
export {
  loadBaseMover
};
//# sourceMappingURL=browser-C2TABYLR.js.map
