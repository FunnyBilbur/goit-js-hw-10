import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as t}from"./assets/vendor-c2cf587c.js";const i=document.querySelector(".form"),n=document.querySelector(".input__delay"),c=document.querySelector(".input__fulfilled");i.addEventListener("submit",s=>{s.preventDefault();const o=n.value;console.log("Submitted"),c.checked?r({shouldResolve:!0,delay:o}).then(e=>console.log(e)).catch(e=>console.error(e)):r({shouldResolve:!1,delay:o}).then(e=>console.log(e)).catch(e=>console.error(e))});const r=({shouldResolve:s,delay:o})=>new Promise((e,l)=>{setTimeout(()=>{s?(e(`✅ Fulfilled promise in ${o}ms`),t.show({titleColor:"white",position:"topRight",message:`✅ Fulfilled promise in ${o}ms`,messageColor:"white",backgroundColor:"#59A10D",progressBarColor:"#B5EA7C"})):(l(`❌ Rejected promise in ${o}ms`),t.show({titleColor:"white",position:"topRight",message:`❌ Rejected promise in ${o}ms`,messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}))},o)});
//# sourceMappingURL=commonHelpers2.js.map