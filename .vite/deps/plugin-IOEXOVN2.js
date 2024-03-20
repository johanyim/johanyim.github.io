// node_modules/@tsparticles/interaction-particles-links/browser/plugin.js
async function loadLinksPlugin(engine, refresh = true) {
  const { LinksPlugin } = await import("./LinksPlugin-ASTPRN5W.js"), plugin = new LinksPlugin();
  await engine.addPlugin(plugin, refresh);
}
export {
  loadLinksPlugin
};
//# sourceMappingURL=plugin-IOEXOVN2.js.map
