webpackJsonp([6],{kwL3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("J5u8"),i=r.n(a);Array.prototype.slice.call(document.querySelectorAll(i.a.selectors.accordion)).forEach(function(t){for(var e=t.hasAttribute("data-allow-multiple"),r=e||t.hasAttribute("data-allow-toggle"),a=t.hasAttribute("data-first-open"),i=Array.prototype.slice.call(t.querySelectorAll(".accordion__trigger")),n=Array.prototype.slice.call(t.querySelectorAll(".accordion__panel")),o=0;o<n.length;o++)a&&0==o?(i[o].setAttribute("aria-expanded","true"),document.getElementById(i[o].getAttribute("aria-controls")).removeAttribute("hidden","")):(i[o].setAttribute("aria-expanded","false"),document.getElementById(i[o].getAttribute("aria-controls")).setAttribute("hidden",""));if(t.addEventListener("click",function(a){var i=a.target;if(i.classList.contains("accordion__trigger")){var n="true"==i.getAttribute("aria-expanded"),o=t.querySelector('[aria-expanded="true"]');!e&&o&&o!==i&&(o.setAttribute("aria-expanded","false"),document.getElementById(o.getAttribute("aria-controls")).setAttribute("hidden",""),r||o.removeAttribute("aria-disabled")),n?r&&n&&(i.setAttribute("aria-expanded","false"),document.getElementById(i.getAttribute("aria-controls")).setAttribute("hidden","")):(i.setAttribute("aria-expanded","true"),document.getElementById(i.getAttribute("aria-controls")).removeAttribute("hidden"),r||i.setAttribute("aria-disabled","true")),a.preventDefault()}}),t.addEventListener("keydown",function(t){var e=t.target,r=t.which.toString(),a=t.ctrlKey&&r.match(/33|34/);if(e.classList.contains("accordion__trigger")){if(r.match(/38|40/)||a){var o=i.indexOf(e),c=r.match(/34|40/)?1:-1,l=i.length;i[(o+l+c)%l].focus(),t.preventDefault()}else if(r.match(/35|36/)){switch(r){case"36":i[0].focus();break;case"35":i[i.length-1].focus()}t.preventDefault()}}else a&&n.forEach(function(r,a){r.contains(e)&&(i[a].focus(),t.preventDefault())})}),!r){var c=t.querySelector('[aria-expanded="true"]');c&&c.setAttribute("aria-disabled","true")}})}});