// node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js
var LinksPlugin = class {
  constructor() {
    this.id = "links";
  }
  async getPlugin(container) {
    const { LinkInstance } = await import("./LinkInstance-BNYKULCS.js");
    return new LinkInstance(container);
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
};
export {
  LinksPlugin
};
//# sourceMappingURL=LinksPlugin-ASTPRN5W.js.map
