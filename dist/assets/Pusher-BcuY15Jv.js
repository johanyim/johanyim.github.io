import{s as p,p as f,q as c}from"./index-BFy5kMLQ.js";import{E as d}from"./ExternalInteractorBase-CIi3zRdK.js";class h{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(e=>e)),this.groups.length||(this.default=!0);const s=t.quantity;s!==void 0&&(this.quantity=p(s))}}const l="push",g=0;class q extends d{constructor(t){super(t),this.handleClickMode=s=>{if(s!==l)return;const e=this.container,o=e.actualOptions,i=o.interactivity.modes.push;if(!i)return;const u=f(i.quantity);if(u<=g)return;const n=c([void 0,...i.groups]),a=n!==void 0?e.actualOptions.particles.groups[n]:void 0;e.particles.push(u,e.interactivity.mouse,a,n)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(t,...s){t.push||(t.push=new h);for(const e of s)t.push.load(e==null?void 0:e.push)}reset(){}}export{q as Pusher};
