(window.webpackJsonp=window.webpackJsonp||[]).push([[35,3,14],{249:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("c498b754",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){var l=n(94)((function(i){return i[1]}));l.push([t.i,'/*purgecss start ignore*/\n.my-bg[data-v-954b7462]:after{\n  position:fixed;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:#fff;\n  opacity:.9;\n  content:"";\n  display:block\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},254:function(t,e,n){"use strict";n.r(e);n(252);var l=n(45),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-bg fixed"},[e("img",{attrs:{src:"img/bg-1.jpg"}})])}],!1,null,"954b7462",null);e.default=component.exports},285:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("0118f2f6",content,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";n(285)},312:function(t,e,n){var l=n(94)((function(i){return i[1]}));l.push([t.i,'/*purgecss start ignore*/\n.my-bg[data-v-23da14db]:after{\n  position:fixed;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  content:"";\n  display:block\n}\n.active-slider[data-v-23da14db]{\n  opacity:1;\n  visibility:visible\n}\n.transition-set[data-v-23da14db]{\n  transition:1s\n}\n.opacity-0 img[data-v-23da14db]{\n  opacity:0\n}\n.opacity-0.active-slider img[data-v-23da14db]{\n  opacity:1\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},319:function(t,e,n){"use strict";n.r(e);var l;n(67);clearTimeout(l);var r={head:function(){return{title:"Registration Page"}},methods:{nextSlideFunction:function(t,data){var e=t.target,n=e.parentElement.parentElement.parentElement.parentElement.querySelectorAll("#"+data),l=e.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".active-slider");if(n.length>0){var r=n[0].querySelectorAll(".active-nav"),o=n[0].querySelectorAll("."+data);r>0&&r[0].classList.remove("bg-gray-700","active-nav"),o.length>0&&o[0].classList.add("bg-gray-700","active-nav")}l.length>0&&(l[0].classList.remove("active-slider"),l[0].classList.add("opacity-0")),n.length>0&&(n[0].classList.add("active-slider"),n[0].classList.remove("opacity-0"))},autoSliderFunctionLoad1:function(t){var e=this;l=setTimeout((function(){var t=document.querySelectorAll(".active-slider .active-nav")[0].nextElementSibling;null==t?(document.querySelectorAll(".active-slider .slider-nav")[0].click(),e.autoSliderFunctionLoad1()):(t.click(),e.autoSliderFunctionLoad1())}),5e3)}},mounted:function(){this.autoSliderFunctionLoad1(this)}},o=(n(311),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative overflow-hidden"},[t._m(0),t._v(" "),n("div",{staticClass:"flex h-screen bg-white bg-opacity-90 relative"},[n("div",{staticClass:"w-full max-w-6xl m-auto bg-indigo-100 rounded flex overflow-hidden"},[n("div",{staticClass:"w-6/12 p-10"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("form",{staticClass:"w-4/5 m-auto"},[t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",[n("NuxtLink",{staticClass:"cursor-pointer w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 mb-6 rounded w-full block text-center",attrs:{to:"/dashboard"}},[t._v("\n                          Sign In\n                      ")])],1)]),t._v(" "),n("div",{staticClass:"w-4/5 m-auto"},[n("div",{staticClass:"flex w-full m-auto text-center mt-3 content-center justify-center"},[n("p",{staticClass:"font-bold text-gray-500 text-sm mr-1"},[t._v("Need Account? ")]),t._v(" "),n("NuxtLink",{staticClass:"font-bold text-red-700 hover:text-red-900 text-sm ",attrs:{to:"/register"}},[t._v("\n                          Sign Up\n                      ")])],1),t._v(" "),n("div",{staticClass:"flex justify-center mt-3"},[n("NuxtLink",{staticClass:"font-bold text-red-700 hover:text-red-900 text-sm",attrs:{to:"/forgot-password"}},[t._v("\n                          Forgot Password?\n                      ")])],1)])]),t._v(" "),n("div",{staticClass:"w-6/12 p-5 bg-red-800 relative overflow-hidden",attrs:{id:"slider-login-1"}},[t._m(5),t._v(" "),n("div",{staticClass:"relative flex justify-center align-center content-end h-full"},[n("div",{staticClass:"absolute h-full w-full flex justify-center align-center opacity-0 invisible active-slider",attrs:{id:"slider-1"}},[n("div",{staticClass:"h-auto m-auto"},[n("img",{staticClass:"relative transition-set w-5/5 h-auto object-contain bottom-5",attrs:{src:"img/login-layout-2-1.png"}}),t._v(" "),n("div",{staticClass:"relative flex justify-center -mt-5"},[n("p",{staticClass:"slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1 bg-gray-700 active-nav",on:{click:function(e){return t.nextSlideFunction(e,"slider-1")}}}),t._v(" "),n("p",{staticClass:"slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-2")}}}),t._v(" "),n("p",{staticClass:"slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-3")}}})])])]),t._v(" "),n("div",{staticClass:"absolute h-full w-full flex justify-center align-center opacity-0 invisible",attrs:{id:"slider-2"}},[n("div",{staticClass:"h-auto m-auto"},[n("img",{staticClass:"relative transition-set w-5/5 h-auto object-contain bottom-5",attrs:{src:"img/login-layout-2-2.png"}}),t._v(" "),n("div",{staticClass:"relative flex justify-center -mt-5"},[n("p",{staticClass:"slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-1")}}}),t._v(" "),n("p",{staticClass:"slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-2")}}}),t._v(" "),n("p",{staticClass:"slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-3")}}})])])]),t._v(" "),n("div",{staticClass:"absolute h-full w-full flex justify-center align-center opacity-0 invisible",attrs:{id:"slider-3"}},[n("div",{staticClass:"h-auto m-auto"},[n("img",{staticClass:"relative transition-set w-5/5 h-auto object-contain bottom-5",attrs:{src:"img/login-layout-2-3.png"}}),t._v(" "),n("div",{staticClass:"relative flex justify-center -mt-5"},[n("p",{staticClass:"slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-1")}}}),t._v(" "),n("p",{staticClass:"slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-2")}}}),t._v(" "),n("p",{staticClass:"slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1",on:{click:function(e){return t.nextSlideFunction(e,"slider-3")}}})])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-bg fixed"},[e("img",{staticClass:"fixed top-0 left-0 w-full",attrs:{src:"img/png-bg-2.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"w-20 mx-auto mb-5 ml-0",attrs:{src:"img/logo.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center mb-5"},[n("h1",{staticClass:"text-3xl font-bold text-red-800"},[t._v("Login")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"block mb-2 text-red-800 font-bold",attrs:{for:"username"}},[t._v("Username")]),t._v(" "),n("input",{staticClass:"w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300",attrs:{type:"text",name:"username"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"block mb-2 text-red-800 font-bold",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{staticClass:"w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300",attrs:{type:"password",name:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"absolute top-0 left-0 h-full w-full object-cover",attrs:{src:"img/png-bg-1.png"}})])}],!1,null,"23da14db",null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);var l={},r=n(45),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative overflow-hidden"},[n("Background"),t._v(" "),n("Login",{staticClass:"relative"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Background:n(254).default,Login:n(319).default})}}]);