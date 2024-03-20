import {
  addColorManager,
  errorPrefix,
  executeOnSingleOrMultiple,
  generatedAttribute,
  getLogger,
  getRandom,
  getRangeValue,
  hslToRgb,
  hslaToRgba,
  isSsr,
  itemFromSingleOrMultiple,
  parseAlpha
} from "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js
var ExternalInteractorBase = class {
  constructor(container) {
    this.type = "external";
    this.container = container;
  }
};

// node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js
var ParticlesInteractorBase = class {
  constructor(container) {
    this.type = "particles";
    this.container = container;
  }
};

// node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
var EventDispatcher = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this._listeners.get(type);
    if (!arr) {
      arr = [];
      this._listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this._listeners.get(type);
    listeners == null ? void 0 : listeners.forEach((handler) => handler(args));
  }
  hasEventListener(type) {
    return !!this._listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = /* @__PURE__ */ new Map();
    } else {
      this._listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this._listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener), minIndex = 0;
    if (idx < minIndex) {
      return;
    }
    const deleteCount = 1;
    if (length === deleteCount) {
      this._listeners.delete(type);
    } else {
      arr.splice(idx, deleteCount);
    }
  }
};

// node_modules/@tsparticles/engine/browser/Core/Engine.js
async function getItemsFromInitializer(container, map, initializers, force = false) {
  let res = map.get(container);
  if (!res || force) {
    res = await Promise.all([...initializers.values()].map((t) => t(container)));
    map.set(container, res);
  }
  return res;
}
async function getDataFromUrl(data) {
  const url = itemFromSingleOrMultiple(data.url, data.index);
  if (!url) {
    return data.fallback;
  }
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
  return data.fallback;
}
var Engine = class {
  constructor() {
    this._configs = /* @__PURE__ */ new Map();
    this._domArray = [];
    this._eventDispatcher = new EventDispatcher();
    this._initialized = false;
    this.plugins = [];
    this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    };
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.effectDrawers = /* @__PURE__ */ new Map();
    this.shapeDrawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  get configs() {
    const res = {};
    for (const [name, config] of this._configs) {
      res[name] = config;
    }
    return res;
  }
  get version() {
    return "3.3.0";
  }
  addConfig(config) {
    const key = config.key ?? config.name ?? "default";
    this._configs.set(key, config);
    this._eventDispatcher.dispatchEvent("configAdded", { data: { name: key, config } });
  }
  async addEffect(effect, drawer, refresh = true) {
    executeOnSingleOrMultiple(effect, (type) => {
      if (!this.getEffectDrawer(type)) {
        this.effectDrawers.set(type, drawer);
      }
    });
    await this.refresh(refresh);
  }
  addEventListener(type, listener) {
    this._eventDispatcher.addEventListener(type, listener);
  }
  async addInteractor(name, interactorInitializer, refresh = true) {
    this._initializers.interactors.set(name, interactorInitializer);
    await this.refresh(refresh);
  }
  async addMover(name, moverInitializer, refresh = true) {
    this._initializers.movers.set(name, moverInitializer);
    await this.refresh(refresh);
  }
  async addParticleUpdater(name, updaterInitializer, refresh = true) {
    this._initializers.updaters.set(name, updaterInitializer);
    await this.refresh(refresh);
  }
  async addPathGenerator(name, generator, refresh = true) {
    if (!this.getPathGenerator(name)) {
      this.pathGenerators.set(name, generator);
    }
    await this.refresh(refresh);
  }
  async addPlugin(plugin, refresh = true) {
    if (!this.getPlugin(plugin.id)) {
      this.plugins.push(plugin);
    }
    await this.refresh(refresh);
  }
  async addPreset(preset, options, override = false, refresh = true) {
    if (override || !this.getPreset(preset)) {
      this.presets.set(preset, options);
    }
    await this.refresh(refresh);
  }
  async addShape(shape, drawer, refresh = true) {
    executeOnSingleOrMultiple(shape, (type) => {
      if (!this.getShapeDrawer(type)) {
        this.shapeDrawers.set(type, drawer);
      }
    });
    await this.refresh(refresh);
  }
  clearPlugins(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
  dispatchEvent(type, args) {
    this._eventDispatcher.dispatchEvent(type, args);
  }
  dom() {
    return this._domArray;
  }
  domItem(index) {
    const dom = this.dom(), item = dom[index];
    if (!item || item.destroyed) {
      const deleteCount = 1;
      dom.splice(index, deleteCount);
      return;
    }
    return item;
  }
  async getAvailablePlugins(container) {
    const res = /* @__PURE__ */ new Map();
    for (const plugin of this.plugins) {
      if (plugin.needsPlugin(container.actualOptions)) {
        res.set(plugin.id, await plugin.getPlugin(container));
      }
    }
    return res;
  }
  getEffectDrawer(type) {
    return this.effectDrawers.get(type);
  }
  async getInteractors(container, force = false) {
    return await getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
  }
  async getMovers(container, force = false) {
    return await getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawer(type) {
    return this.shapeDrawers.get(type);
  }
  getSupportedEffects() {
    return this.effectDrawers.keys();
  }
  getSupportedShapes() {
    return this.shapeDrawers.keys();
  }
  async getUpdaters(container, force = false) {
    return await getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
  }
  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
  }
  async load(params) {
    var _a;
    const randomFactor = 1e4, id = params.id ?? ((_a = params.element) == null ? void 0 : _a.id) ?? `tsparticles${Math.floor(getRandom() * randomFactor)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
    let domContainer = params.element ?? document.getElementById(id);
    if (!domContainer) {
      domContainer = document.createElement("div");
      domContainer.id = id;
      document.body.append(domContainer);
    }
    const currentOptions = itemFromSingleOrMultiple(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id.description === id), minIndex = 0;
    if (oldIndex >= minIndex) {
      const old = this.domItem(oldIndex);
      if (old && !old.destroyed) {
        old.destroy();
        const deleteCount = 1;
        dom.splice(oldIndex, deleteCount);
      }
    }
    let canvasEl;
    if (domContainer.tagName.toLowerCase() === "canvas") {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] = "false";
    } else {
      const existingCanvases = domContainer.getElementsByTagName("canvas");
      if (existingCanvases.length) {
        const firstIndex = 0;
        canvasEl = existingCanvases[firstIndex];
        canvasEl.dataset[generatedAttribute] = "false";
      } else {
        canvasEl = document.createElement("canvas");
        canvasEl.dataset[generatedAttribute] = "true";
        domContainer.appendChild(canvasEl);
      }
    }
    if (!canvasEl.style.width) {
      canvasEl.style.width = "100%";
    }
    if (!canvasEl.style.height) {
      canvasEl.style.height = "100%";
    }
    const { Container } = await import("./Container-M22BWEQO.js"), newItem = new Container(this, id, currentOptions);
    if (oldIndex >= minIndex) {
      const deleteCount = 0;
      dom.splice(oldIndex, deleteCount, newItem);
    } else {
      dom.push(newItem);
    }
    newItem.canvas.loadCanvas(canvasEl);
    await newItem.start();
    return newItem;
  }
  loadOptions(options, sourceOptions) {
    for (const plugin of this.plugins) {
      plugin.loadOptions(options, sourceOptions);
    }
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    var _a;
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    for (const updater of updaters) {
      (_a = updater.loadOptions) == null ? void 0 : _a.call(updater, options, ...sourceOptions);
    }
  }
  async refresh(refresh = true) {
    if (!refresh) {
      return;
    }
    await Promise.all(this.dom().map((t) => t.refresh()));
  }
  removeEventListener(type, listener) {
    this._eventDispatcher.removeEventListener(type, listener);
  }
  setOnClickHandler(callback) {
    const dom = this.dom();
    if (!dom.length) {
      throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
    }
    for (const domItem of dom) {
      domItem.addClickHandler(callback);
    }
  }
};

// node_modules/@tsparticles/engine/browser/Utils/HslColorManager.js
var HslColorManager = class {
  constructor() {
    this.key = "hsl";
    this.stringPrefix = "hsl";
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
      return hslToRgb(hslColor);
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.l !== void 0) {
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
  }
  parseString(input) {
    if (!input.startsWith("hsl")) {
      return;
    }
    const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
    return result ? hslaToRgba({
      a: result.length > minLength ? parseAlpha(result[5]) : defaultAlpha,
      h: parseInt(result[1], radix),
      l: parseInt(result[3], radix),
      s: parseInt(result[2], radix)
    }) : void 0;
  }
};

// node_modules/@tsparticles/engine/browser/Utils/RgbColorManager.js
var RgbColorManager = class {
  constructor() {
    this.key = "rgb";
    this.stringPrefix = "rgb";
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return rgbColor;
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
  }
  parseString(input) {
    if (!input.startsWith(this.stringPrefix)) {
      return;
    }
    const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha = 1;
    return result ? {
      a: result.length > minLength ? parseAlpha(result[5]) : defaultAlpha,
      b: parseInt(result[3], radix),
      g: parseInt(result[2], radix),
      r: parseInt(result[1], radix)
    } : void 0;
  }
};

// node_modules/@tsparticles/engine/browser/init.js
function init() {
  const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
  addColorManager(rgbColorManager);
  addColorManager(hslColorManager);
  const engine = new Engine();
  engine.init();
  return engine;
}

// node_modules/@tsparticles/engine/browser/index.js
var tsParticles = init();
if (!isSsr()) {
  window.tsParticles = tsParticles;
}

export {
  ExternalInteractorBase,
  ParticlesInteractorBase,
  tsParticles
};
//# sourceMappingURL=chunk-26VV2B24.js.map
