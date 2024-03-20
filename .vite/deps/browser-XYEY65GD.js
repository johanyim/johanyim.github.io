// node_modules/@tsparticles/shape-circle/browser/index.js
async function loadCircleShape(engine, refresh = true) {
  const { CircleDrawer } = await import("./CircleDrawer-ICMSTY6J.js");
  await engine.addShape("circle", new CircleDrawer(), refresh);
}
export {
  loadCircleShape
};
//# sourceMappingURL=browser-XYEY65GD.js.map
