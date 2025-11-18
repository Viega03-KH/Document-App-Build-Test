import{a as c,r as u,e as f,o as g,f as a,h as i,t as s,i as n,j as l,g as d}from"./index-DCLUjSd_.js";import{C as b}from"./chevron-right-DAGNtmL3.js";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=c("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=c("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),y={class:"flex items-center w-full px-2 py-4 justify-between border-t-2 dark:border-zinc-600 dark:shadow-black"},h={class:"text-dark text-lg font-medium"},v={class:"text-blue-500 font-extrabold"},k={class:"flex items-center"},p={class:"px-4 py-2 text-sm font-medium text-gray-700"},N={__name:"UPagination",props:{currentPage:{type:Number},lastPage:{type:Number},total:{type:Number}},setup(e){return(r,t)=>{const o=u("UButton");return g(),f("div",y,[a("div",h,[t[2]||(t[2]=i("Mavjud barcha ma’lumotlar ro‘yxati ",-1)),a("span",v,s(e.total),1),t[3]||(t[3]=i(" ta ",-1))]),a("div",k,[n(o,{variant:"primary",disabled:e.currentPage===1,onClick:t[0]||(t[0]=m=>r.$emit("change",e.currentPage-1))},{default:l(()=>[n(d(x),{class:"w-4 h-4"})]),_:1},8,["disabled"]),a("span",p,s(e.currentPage)+" / "+s(e.lastPage),1),n(o,{variant:"primary",disabled:e.currentPage===e.lastPage,onClick:t[1]||(t[1]=m=>r.$emit("change",e.currentPage+1))},{default:l(()=>[n(d(b),{class:"w-4 h-4"})]),_:1},8,["disabled"])])])}}};export{C as X,N as _};
