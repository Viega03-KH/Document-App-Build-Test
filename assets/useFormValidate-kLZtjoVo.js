import{k as f,Z as u}from"./index-CDbZ6Fa9.js";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=f("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=f("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function h(c={},n={}){const r=u({...c}),t=u({});return{form:r,errors:t,validate:()=>{let e=!0;for(const s in n){const a=r[s],o=n[s];if(t[s]="",o.required&&(!a||a.toString().trim()==="")&&(t[s]=o.message||"Majburiy maydon",e=!1),o.custom&&typeof o.custom=="function"){const i=o.custom(a,r);i&&(t[s]=i,e=!1)}}return e},resetForm:()=>{Object.assign(r,c),Object.keys(t).forEach(e=>t[e]="")}}}export{y as P,p as X,h as u};
