import{V as w}from"./ValueWithRandom-C6oOIMPM.js";import{s as a,G as l,F as f,o as d,H as c}from"./index-C8gyyEjL.js";import"./AnimationOptions-Ceq3X7hW.js";class R extends w{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class L extends w{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class V{constructor(){this.count=0,this.delay=new R,this.duration=new L}load(e){e&&(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}const u=0,F=-1,y=0,m=0;function x(i,e,t){if(!i.life)return;const n=i.life;let s=!1;if(i.spawning)if(n.delayTime+=e.value,n.delayTime>=i.life.delay)s=!0,i.spawning=!1,n.delayTime=u,n.time=u;else return;if(n.duration===F||i.spawning||(s?n.time=u:n.time+=e.value,n.time<n.duration))return;if(n.time=u,i.life.count>y&&i.life.count--,i.life.count===y){i.destroy();return}const T=a(m,t.width),v=a(m,t.width);i.position.x=l(T),i.position.y=l(v),i.spawning=!0,n.delayTime=u,n.time=u,i.reset();const r=i.options.life;r&&(n.delay=f(r.delay.value)*d,n.duration=f(r.duration.value)*d)}const o=0,h=1,g=-1;class E{constructor(e){this.container=e}init(e){const t=this.container,n=e.options,s=n.life;s&&(e.life={delay:t.retina.reduceFactor?f(s.delay.value)*(s.delay.sync?h:c())/t.retina.reduceFactor*d:o,delayTime:o,duration:t.retina.reduceFactor?f(s.duration.value)*(s.duration.sync?h:c())/t.retina.reduceFactor*d:o,time:o,count:s.count},e.life.duration<=o&&(e.life.duration=g),e.life.count<=o&&(e.life.count=g),e.life&&(e.spawning=e.life.delay>o))}isEnabled(e){return!e.destroyed}loadOptions(e,...t){e.life||(e.life=new V);for(const n of t)e.life.load(n==null?void 0:n.life)}update(e,t){!this.isEnabled(e)||!e.life||x(e,t,this.container.canvas.size)}}export{E as LifeUpdater};
