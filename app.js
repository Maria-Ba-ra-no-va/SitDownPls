"use strict";new Swiper(".similar .swiper-container",{slidesPerView:4,spaceBetween:32,loop:!1,navigation:{nextEl:".similar .slider__next",prevEl:".similar .slider__prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:2,spaceBetween:32},1024:{slidesPerView:3,spaceBetween:32},1920:{slidesPerView:4,spaceBetween:32}}}),document.querySelector(".modal__buy .form");var e=document.querySelector(".modal__buy"),t=document.querySelector(".modal__thanks"),n=document.querySelector(".main-article .card-product__basic .btn-purple"),r=document.querySelector(".main-article .modal__buy .btn-close"),o=document.querySelector(".main-article .modal__thanks .btn-close"),i=(document.querySelector(".main-article .modal__buy .btn-purple"),document.querySelector(".main-article .modal"));document.getElementById("name-modal"),document.getElementById("tel-modal"),document.querySelector(".main-article .modal__buy .js-validate-error-field");if(n){n.addEventListener("click",(function(n){n.preventDefault(),t.style.display="none",i.style.display="flex",e.style.display="block"}));new window.JustValidate(".modal__buy .form",{rules:{name:{required:!0,minLength:2,maxLength:30},tel:{required:!0,function:function(e,t){var n=E.inputmask.unmaskedvalue();return Number(n)&&10===n.length}}},messages:{name:"Недопустимый формат",tel:"Недопустимый формат"},errorFieldCssClass:"is-invalid",successFieldCssClass:"is-valid",validateBeforeSubmitting:!1,submitHandler:function(n){i.style.display="flex",t.style.display="flex",e.style.display="none",document.getElementById("modal-form").reset()}});r.addEventListener("click",(function(){i.style.display="none",e.style.display="none",document.getElementById("modal-form").reset(),document.getElementById("modal-form").classList.remove("is-invalid")})),i.addEventListener("click",(function(n){n.target===i&&(i.style.display="none",t.style.display="none",e.style.display="none",document.getElementById("modal-form").reset())})),o.addEventListener("click",(function(){i.style.display="none",t.style.display="none"}))}var l=document.querySelector(".card-product .card-product__photo-main"),a=document.querySelector(".card-product .card-product__photo-coursework"),s=document.querySelector(".main-article .modal__photo .btn-close"),c=document.querySelector(".main-article .modal__photo");if(l){l.addEventListener("click",(function(e){e.preventDefault(),i.style.display="flex",c.style.display="flex"})),a.addEventListener("click",(function(e){e.preventDefault(),i.style.display="flex",c.style.display="flex"})),s.addEventListener("click",(function(){i.style.display="none",c.style.display="none"}));new Swiper(".modal__photo .swiper-container",{slidesPerView:"auto",spaceBetween:78,loop:!1,navigation:{nextEl:".modal__photo .slider__next",prevEl:".modal__photo .slider__prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerGroup:2},1024:{slidesPerGroup:3},1920:{slidesPerGroup:4}}})}var d=document.querySelector(".catalog-content .wrapper__slider"),u=[document.querySelector(".catalog-content .range-wrapper__field_first"),document.querySelector(".catalog-content .range-wrapper__field_second")];if(d){noUiSlider.create(d,{start:[2e3,15e4],connect:!0,step:1,range:{min:0,max:223e3}}),d.noUiSlider.on("update",(function(e,t){u[t].value=Math.round(e[t])}));u.forEach((function(e,t){e.addEventListener("change",(function(e){var n,r,o;n=t,r=e.currentTarget.value,(o=[null,null])[n]=r,d.noUiSlider.set(o)}))}))}new Swiper(".catalog-content__right .swiper-container",{slidesPerView:9,spaceBetween:32,loop:!1,slidesPerGroup:9,pagination:{el:".catalog-content__right .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},breakpoints:{320:{slidesPerView:6,slidesPerGroup:6,spaceBetween:16},400:{slidesPerView:9,slidesPerGroup:9,spaceBetween:16},643:{slidesPerView:12,slidesPerGroup:12,spaceBetween:16},768:{slidesPerView:6,slidesPerGroup:6,spaceBetween:32},1024:{slidesPerView:9,slidesPerGroup:9,spaceBetween:32}}});var m=document.querySelector(".select-catalog-category"),p=document.querySelector(".select-catalog-price"),y=document.querySelector(".select-catalog-discount"),f=document.querySelector(".select-catalog-color");if(m)new Choices(m,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"});if(p)new Choices(p,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"});if(y)new Choices(y,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"});if(f)new Choices(f,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"});function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function v(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=document.querySelectorAll(".category-a-title");if(window.matchMedia("(max-width: 767px)").matches){var _,S=w(g);try{for(S.s();!(_=S.n()).done;){var b=_.value,x=document.createElement("div");x.classList.add("arrow-right"),b.append(x)}}catch(e){S.e(e)}finally{S.f()}}var E=document.querySelector("Input[type='tel']");E&&new Inputmask("+7(999)999-99-99").mask(E);document.querySelector(".contacts form")&&new JustValidate(".contacts form",{rules:{name:{required:!0,minLength:2,maxLength:30},tel:{required:!0,function:function(e,t){var n=E.inputmask.unmaskedvalue();return Number(n)&&10===n.length}},email:{required:!0,email:!0}},messages:{name:"Недопустимый формат",email:"Недопустимый формат",tel:"Недопустимый формат"}}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".select-region"),t=(new Choices(e,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"}),document.querySelector(".select-category"));new Choices(t,{allowHTML:!0,searchEnabled:!1,itemSelectText:"",shouldSort:!1,position:"bottom"});document.querySelector(".burger").addEventListener("click",(function(){document.querySelector("header").classList.toggle("open")}))}));new Swiper(".hero .swiper-container",{slidesPerView:1,spaceBetween:50,loop:!1,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function v(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=document.querySelector(".rating .btn-purple"),P=document.querySelectorAll(".rating .card__item"),k=window.matchMedia("(min-width: 1290px)"),V=window.matchMedia("(max-width: 1289px)"),L=window.matchMedia("(max-width: 1023px)"),B=0,C=0,T=0;k.matches&&(B=8,C=8,T=4),V.matches&&(B=6,C=6,T=3),L.matches&&(B=6,C=6,T=2),q&&q.addEventListener("click",(function(){console.log(B,C,T);var e=0;if(C>=P.length){var t,n=w(P);try{for(n.s();!(t=n.n()).done;){var r=t.value;e>B-1&&(r.style.display="none"),e++}}catch(e){n.e(e)}finally{n.f()}C=T,q.textContent="Смотреть больше товаров"}C+=T;var o,i=w(P);try{for(i.s();!(o=i.n()).done;){var l=o.value;e<C&&(l.style.display="block",e++)}}catch(e){i.e(e)}finally{i.f()}C>=P.length&&(q.textContent="Скрыть часть товаров")}));new Swiper(".special-offers .swiper-container",{slidesPerView:"auto",spaceBetween:32,loop:!1,navigation:{nextEl:".special-offers .slider__next",prevEl:".special-offers .slider__prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3},1352:{slidesPerView:4},1920:{slidesPerView:"auto"}}}),new Swiper(".useful .swiper-container",{slidesPerView:2,spaceBetween:32,loop:!1,navigation:{nextEl:".useful .slider__next",prevEl:".useful .slider__prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3},1920:{slidesPerView:2}}});