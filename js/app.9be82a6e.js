(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},o={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5c383ff0":"195dd819"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-5c383ff0":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-5c383ff0":"e83b9262"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],f.parentNode.removeChild(f),n(r)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){s[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/questionnaire/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30db":function(t,e,n){"use strict";var a=n("a4c0"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("f5df");var a=n("a026"),s=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Mainpage")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._m(0),n("section",{staticClass:"page__content"},[n("Questionnaire")],1),t._m(1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page__header header"},[n("div",{staticClass:"header__logo container"},[n("img",{attrs:{src:"/questionnaire/images/opti-24-logo.svg"}}),n("img",{attrs:{src:"/questionnaire/images/gpn-logo.svg"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page__footer footer"},[n("div",{staticClass:"footer__logo container"},[n("img",{attrs:{src:"/questionnaire/images/opti-24-logo-new.svg"}}),n("img",{staticClass:"footer__logo-img _opacity_low",attrs:{src:"/questionnaire/images/gpn-logo.svg"}})])])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showForm?n("div",{staticClass:"questionnaire"},[n("div",{staticClass:"questionnaire__notify container"},[n("span",{staticClass:"questionnaire__notify-text"},[t._v("\n      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса. \n    ")]),n("span",{staticClass:"questionnaire__notify-button",on:{click:t.openModal}},[t._v("\n      Пройти опрос\n    ")]),n("input",{staticClass:"questionnaire__notify-close-button",attrs:{type:"button"},on:{click:t.hide}}),n("div",{staticClass:"questionnaire__notify-close"})]),t.showModal?n("Modal",{on:{close:t.closeModal}},[1===t.page?[n("h2",{attrs:{slot:"header"},slot:"header"},[t._v("Нам важно Ваше мнение!")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("h3",[t._v(t._s(t.questions.data.label))]),n("div",[t._v("\n          Для оценки используйте 10-балльную шкалу,\n          где 10 – точно готовы рекомендовать, 1 – точно не готовы рекомендовать.\n        ")]),n("div",{staticClass:"modal__scale"},[n("img",{attrs:{src:"/questionnaire/images/dislike-3-x.png"}}),n("div",{staticClass:"modal__scale-inner"},t._l(t.ratesTotal,function(e,a){return n("span",{key:a,staticClass:"modal__rate"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rate,expression:"rate"}],attrs:{id:"rate-"+(a+1),type:"radio"},domProps:{value:a+1,checked:t._q(t.rate,a+1)},on:{change:[function(e){t.rate=a+1},function(e){t.needRate=!1}]}}),n("label",{attrs:{for:"rate-"+(a+1)}},[t._v(t._s(a+1))])])}),0),n("img",{attrs:{src:"/questionnaire/images/like-3-x.png"}})])]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.needRate?n("div",{staticClass:"modal-footer__need-rate"},[t._v("\n            Выберите оценку от 1 до 10\n          ")]):t._e(),n("div",{staticClass:"modal-footer__buttons"},[n("input",{staticClass:"modal__button-send",attrs:{type:"submit",value:"Отправить"}}),n("input",{staticClass:"modal__button-noask",attrs:{type:"button",value:"Больше не спрашивать"},on:{click:t.hide}})])])])]:t._e(),2===t.page?[n("h2",{attrs:{slot:"header"},slot:"header"},[t._v("Почему Вы не поставили оценку 10?")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",[t._v("\n          Выберите не более 3-х ключевых причин.\n        ")]),n("div",{staticClass:"modal-body__reasons"},t._l(t.reasons,function(e){return n("div",{key:e.id,staticClass:"modal-body__reason"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedReasons,expression:"checkedReasons"}],attrs:{id:"reason-"+e.id,disabled:t.checkedReasons.length>2&&-1===t.checkedReasons.indexOf(e.id),type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.checkedReasons)?t._i(t.checkedReasons,e.id)>-1:t.checkedReasons},on:{change:function(n){var a=t.checkedReasons,s=n.target,o=!!s.checked;if(Array.isArray(a)){var r=e.id,i=t._i(a,r);s.checked?i<0&&(t.checkedReasons=a.concat([r])):i>-1&&(t.checkedReasons=a.slice(0,i).concat(a.slice(i+1)))}else t.checkedReasons=o}}}),n("label",{attrs:{for:"reason-"+e.id}},[t._v(t._s(e.label))])])}),0)]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"modal-footer__buttons"},[n("input",{staticClass:"modal__button-send",attrs:{type:"submit",value:"Отправить"}}),n("input",{staticClass:"modal__button-close",attrs:{type:"button",value:"Закрыть"},on:{click:t.closeModal}})])])])]:t._e(),3===t.page?[n("h2",{attrs:{slot:"header"},slot:"header"},[t._v("Багодарим за оценку!")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",[t._v("\n          Мы будем признательны, если Вы оставите отзыв или предложение по\n          улучшению работы «Газпромнефть-Корпоративные продажи».\n        ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textarea,expression:"textarea"}],staticClass:"modal-body__textarea",attrs:{maxlength:"512",name:"review",placeholder:"Ваш ответ..."},domProps:{value:t.textarea},on:{input:function(e){e.target.composing||(t.textarea=e.target.value)}}})]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"modal-footer__buttons"},[n("input",{staticClass:"modal__button-send",attrs:{type:"submit",value:"Отправить"}}),n("input",{staticClass:"modal__button-close",attrs:{type:"button",value:"Закрыть"},on:{click:t.closeModal}})])])])]:t._e()],2):t._e()],1):t._e()},u=[],d=(n("96cf"),n("3b8d")),f=n("bc3a"),h=n.n(f),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper",on:{click:t.onWrapperClick}},[n("div",{staticClass:"modal-container",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default header\n          ")])],2),n("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n            default footer\n            "),n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("\n              OK\n            ")])])],2)])])])])},m=[],v={name:"Modal",data:function(){return{}},methods:{onWrapperClick:function(){this.$emit("close")}}},_=v,g=(n("30db"),n("2877")),b=Object(g["a"])(_,p,m,!1,null,null,null),y=b.exports,k={name:"Questionnaire",components:{Modal:y},data:function(){return{checkedReasons:[],needRate:!1,notFinished:!1,page:1,questions:null,rate:null,showForm:!0,showModal:!1,textarea:""}},mounted:function(){var t=this;"false"===sessionStorage.getItem("showForm")&&(this.showForm=!1),h.a.get("questions.json").then(function(e){return t.questions=e.data})},computed:{ratesTotal:function(){return new Array(10)},reasons:function(){return this.questions.data.reasons}},methods:{submit:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={finish:!1,message:null,rate:this.rate,reasons:[]},3===this.page&&(this.notFinished||(e.finish=!0),e.message=this.textarea,e.reasons=this.checkedReasons,this.notFinished||this.hide()),2===this.page&&(e.reasons=this.checkedReasons,this.notFinished||(this.page=3)),1!==this.page||this.rate){t.next=6;break}return this.needRate=!0,t.abrupt("return");case 6:h.a.post("/",e),1===this.page&&10===this.rate&&(this.needRate=!1,this.page=3),1===this.page&&this.rate>1&&this.rate<=9&&(this.needRate=!1,this.page=2);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),closeModal:function(){this.showModal=!1,this.notFinished=!0,this.submit(),this.needRate=!1},openModal:function(){this.showModal=!0,this.notFinished=!1},hide:function(){this.showForm=!1,sessionStorage.setItem("showForm",!1),this.closeModal()}}},C=k,w=(n("e3c3"),Object(g["a"])(C,l,u,!1,null,null,null)),x=w.exports,R={name:"Mainpage",components:{Questionnaire:x},props:{},data:function(){return{}}},q=R,M=(n("c66e"),Object(g["a"])(q,i,c,!1,null,"4f44673e",null)),O=M.exports,j={name:"app",components:{Mainpage:O}},E=j,A=Object(g["a"])(E,o,r,!1,null,null,null),F=A.exports;n.e("chunk-5c383ff0").then(n.t.bind(null,"5903",7)),a["a"].use(s["a"]);var P=[{path:"/",component:O}],S=new s["a"]({routes:P,mode:"history"});a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:S,components:{App:F},template:"<App/>"})},a398:function(t,e,n){},a4c0:function(t,e,n){},c66e:function(t,e,n){"use strict";var a=n("fdf4"),s=n.n(a);s.a},e3c3:function(t,e,n){"use strict";var a=n("a398"),s=n.n(a);s.a},fdf4:function(t,e,n){}});
//# sourceMappingURL=app.9be82a6e.js.map