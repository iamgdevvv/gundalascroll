/*
 Version: 0.0.1
  Author: Grafis Nuresa
 Website: http://iamgdevvv.github.io/gundalascroll
    Docs: http://iamgdevvv.github.io/gundalascroll
    Repo: https://github.com/iamgdevvv/gundalascroll
  Issues: https://github.com/iamgdevvv/gundalascroll/issues
 */
  "use strict";var GScroll={elHtml:document.getElementsByTagName("html")[0],scrollPosition:0,defaultClass:"gs-prevent",extraClass:"",preventScroll:function(s){var t=this.elHtml;if(t.classList.contains(this.defaultClass))return!1;var l=parseFloat(getComputedStyle(t,null).width.replace("px",""));this.scrollPosition=window.pageYOffset,t.style.overflow="hidden",t.style.position="fixed",t.style.top=-1*this.scrollPosition+"px",t.style.width=l+"px",t.classList.add(this.defaultClass),null==s?s={}:""!==s||(void 0!==s.class&&null!==s.class&&(this.extraClass=s.class,t.classList.add(this.extraClass)),"function"==typeof s.init&&s.init());var e=new Event("gscroll-prevent");window.dispatchEvent(e)},activeScroll:function(){var s=this.elHtml;s.classList.contains(this.defaultClass)||(this.scrollPosition=window.pageYOffset),s.removeAttribute("style"),s.classList.remove(this.defaultClass),""!==this.extraClass&&s.classList.remove(this.extraClass),window.scrollTo(0,this.scrollPosition);var t=new Event("gscroll-active");window.dispatchEvent(t)},toggleScroll:function(){this.elHtml.classList.contains(this.defaultClass)?this.activeScroll():this.preventScroll()}};