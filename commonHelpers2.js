import"./assets/styles-6191ac61.js";import{i as s}from"./assets/vendor-77e16229.js";const c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault();const o=parseInt(t.currentTarget.elements.delay.value),r=t.currentTarget.querySelector('input[name="state"]:checked'),i=r?r.value:null;new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(o):l(o)},o)}).then(e=>{s.success({title:"Success",color:"green",position:"topRight",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"Error",color:"red",position:"topRight",message:`Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
