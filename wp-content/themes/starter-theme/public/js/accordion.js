webpackJsonp([6],{kwL3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("J5u8"),i=r.n(a);console.log("accordion"),Array.prototype.slice.call(document.querySelectorAll(i.a.selectors.accordion)).forEach(function(e){e.classList.add("mystylenew2");for(var t=e.hasAttribute("data-allow-multiple"),r=t||e.hasAttribute("data-allow-toggle"),a=e.hasAttribute("data-first-open"),i=Array.prototype.slice.call(e.querySelectorAll(".accordion__trigger")),n=Array.prototype.slice.call(e.querySelectorAll(".accordion__panel")),o=0;o<n.length;o++)a&&0==o?(i[o].setAttribute("aria-expanded","true"),document.getElementById(i[o].getAttribute("aria-controls")).removeAttribute("hidden","")):(i[o].setAttribute("aria-expanded","false"),document.getElementById(i[o].getAttribute("aria-controls")).setAttribute("hidden",""));if(e.addEventListener("click",function(a){var i=a.target;if(i.classList.contains("accordion__trigger")){var n="true"==i.getAttribute("aria-expanded"),o=e.querySelector('[aria-expanded="true"]');!t&&o&&o!==i&&(o.setAttribute("aria-expanded","false"),document.getElementById(o.getAttribute("aria-controls")).setAttribute("hidden",""),r||o.removeAttribute("aria-disabled")),n?r&&n&&(i.setAttribute("aria-expanded","false"),document.getElementById(i.getAttribute("aria-controls")).setAttribute("hidden","")):(i.setAttribute("aria-expanded","true"),document.getElementById(i.getAttribute("aria-controls")).removeAttribute("hidden"),r||i.setAttribute("aria-disabled","true")),a.preventDefault()}}),e.addEventListener("keydown",function(e){var t=e.target,r=e.which.toString(),a=e.ctrlKey&&r.match(/33|34/);if(t.classList.contains("accordion__trigger")){if(r.match(/38|40/)||a){var o=i.indexOf(t),c=r.match(/34|40/)?1:-1,l=i.length;i[(o+l+c)%l].focus(),e.preventDefault()}else if(r.match(/35|36/)){switch(r){case"36":i[0].focus();break;case"35":i[i.length-1].focus()}e.preventDefault()}}else a&&n.forEach(function(r,a){r.contains(t)&&(i[a].focus(),e.preventDefault())})}),!r){var c=e.querySelector('[aria-expanded="true"]');c&&c.setAttribute("aria-disabled","true")}})}});