webpackJsonp([1],{"syD+":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("J5u8"),n=e.n(i);function o(t,s){var e=void 0!==s?s:{};this.version="3.2.3",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:e.customStickyChangeNumber||null,noStyles:e.noStyles||!1,stickyBitStickyOffset:e.stickyBitStickyOffset||0,parentClass:e.parentClass||"js-stickybit-parent",scrollEl:document.querySelector(e.scrollEl)||window,stickyClass:e.stickyClass||"js-is-sticky",stuckClass:e.stuckClass||"js-is-stuck",stickyChangeClass:e.stickyChangeClass||"js-is-sticky--change",useStickyClasses:e.useStickyClasses||!1,verticalPosition:e.verticalPosition||"top"};var i=this.props;i.positionVal=this.definePosition()||"fixed";var n=i.verticalPosition,o=i.noStyles,a=i.positionVal;this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]),this.instances=[];for(var r=0;r<this.els.length;r+=1){var l=this.els[r],c=l.style;if(c[n]="top"!==n||o?"":i.stickyBitStickyOffset+"px",c.position="fixed"!==a?a:"","fixed"===a||i.useStickyClasses){var p=this.addInstance(l,i);this.instances.push(p)}}return this}o.prototype.definePosition=function(){for(var t=["","-o-","-webkit-","-moz-","-ms-"],s=document.head.style,e=0;e<t.length;e+=1)s.position=t[e]+"sticky";var i=s.position?s.position:"fixed";return s.position="",i},o.prototype.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);return this.computeScrollOffsets(i),i.parent.className+=" "+s.parentClass,i.state="default",i.stateContainer=function(){return e.manageState(i)},n.addEventListener("scroll",i.stateContainer),i},o.prototype.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},o.prototype.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.el,n=s.parent,o=!this.isWin&&"fixed"===e.positionVal,a="bottom"!==e.verticalPosition,r=o?e.scrollEl.getBoundingClientRect().top:0,l=o?n.getBoundingClientRect().top-r:n.getBoundingClientRect().top,c=null!==e.customStickyChangeNumber?e.customStickyChangeNumber:i.offsetHeight;return s.offset=r+e.stickyBitStickyOffset,s.stickyStart=a?l-s.offset:0,s.stickyChange=s.stickyStart+c,s.stickyStop=a?l+n.offsetHeight-(s.el.offsetHeight+s.offset):l+n.offsetHeight,s},o.prototype.toggleClasses=function(t,s,e){var i=t,n=i.className.split(" ");e&&-1===n.indexOf(e)&&n.push(e);var o=n.indexOf(s);-1!==o&&n.splice(o,1),i.className=n.join(" ")},o.prototype.manageState=function(t){var s=t,e=s.el,i=s.props,n=s.state,o=s.stickyStart,a=s.stickyChange,r=s.stickyStop,l=e.style,c=i.noStyles,p=i.positionVal,u=i.scrollEl,f=i.stickyClass,y=i.stickyChangeClass,h=i.stuckClass,k=i.verticalPosition,d=function(t){t()},g=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||d,m=this.toggleClasses,C=this.isWin?window.scrollY||window.pageYOffset:u.scrollTop,v=C<=o&&"sticky"===n,S=C>=r&&"sticky"===n;C>o&&C<r&&("default"===n||"stuck"===n)?(s.state="sticky",g(function(){m(e,h,f),l.position=p,c||(l.bottom="",l[k]=i.stickyBitStickyOffset+"px")})):v?(s.state="default",g(function(){m(e,f),"fixed"===p&&(l.position="")})):S&&(s.state="stuck",g(function(){m(e,f,h),"fixed"!==p||c||(l.top="",l.bottom="0",l.position="absolute")}));var w=C>=a&&C<=r;return C<a||C>r?g(function(){m(e,y)}):w&&g(function(){m(e,"stub",y)}),s},o.prototype.removeInstance=function(t){var s=t.el,e=t.props,i=this.toggleClasses;s.style.position="",s.style[e.verticalPosition]="",i(s,e.stickyClass),i(s,e.stuckClass),i(s.parentNode,e.parentClass)},o.prototype.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]};(function(t,s){new o(t,s)})(n.a.selectors.sticky,{stickyBitStickyOffset:0})}});