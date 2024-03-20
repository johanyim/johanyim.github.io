import {
  createElementBlock,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  openBlock
} from "./chunk-GU3YDFVY.js";
import {
  tsParticles
} from "./chunk-26VV2B24.js";
import "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/vue3/dist/particles.es.js
var _ = ["id"];
var w = defineComponent({
  __name: "vue-particles",
  props: {
    id: {},
    options: {},
    url: {}
  },
  emits: ["particlesLoaded"],
  setup(r, { emit: e }) {
    let t, i;
    const n = r, c = e;
    addEventListener("particlesInit", (s) => {
      i = s.detail, a();
    });
    const a = async () => {
      i || (i = tsParticles), t = await i.load({
        id: n.id,
        url: n.url,
        options: n.options
      }), c("particlesLoaded", t);
    };
    return onMounted(() => {
      nextTick(() => {
        if (!n.id)
          throw new Error("Prop 'id' is required!");
        a();
      });
    }), onUnmounted(() => {
      t && (t.destroy(), t = void 0);
    }), (s, d) => (openBlock(), createElementBlock("div", { id: s.id }, null, 8, _));
  }
});
var P = (r, e) => {
  r.component("vue-particles", w), (async () => (tsParticles.init(), e.init && await e.init(tsParticles), dispatchEvent(new CustomEvent("particlesInit", { detail: tsParticles }))))();
};
export {
  P as default
};
//# sourceMappingURL=@tsparticles_vue3.js.map
