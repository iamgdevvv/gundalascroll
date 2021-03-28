/*
 Version: 0.0.1
  Author: Grafis Nuresa
 Website: http://iamgdevvv.github.io/gundalascroll
    Docs: http://iamgdevvv.github.io/gundalascroll
    Repo: https://github.com/iamgdevvv/gundalascroll
  Issues: https://github.com/iamgdevvv/gundalascroll/issues
 */

'use strict';

var GScroll = {
	elHtml: document.getElementsByTagName("html")[0],
	scrollPosition: 0,
	defaultClass: "gs-prevent",
	extraClass: "",
	preventScroll: function (args) {
		var _elHtml = this.elHtml;

		if (_elHtml.classList.contains(this.defaultClass)) {
			return false;
		}

		var oldWidth = parseFloat(getComputedStyle(_elHtml, null).width.replace("px", ""));

		this.scrollPosition = window.pageYOffset;

		_elHtml.style.overflow = "hidden";
		_elHtml.style.position = "fixed";
		_elHtml.style.top = (this.scrollPosition * -1) + "px";
		_elHtml.style.width = oldWidth + "px";

		_elHtml.classList.add(this.defaultClass);

		if (args === undefined || args === null) {
			args = {};
		} else if (args === "object") {
			console.warn("There is no action for " + args);
		} else {
			if (args.class !== undefined && args.class !== null) {
				this.extraClass = args.class;
				_elHtml.classList.add(this.extraClass);
			}

			if (typeof args.init === "function") {
				args.init();
			}
		}

		var EGprevent = new Event('gscroll-prevent');
		window.dispatchEvent(EGprevent);
	},
	activeScroll: function () {
		var _elHtml = this.elHtml;

		if (!_elHtml.classList.contains(this.defaultClass)) {
			this.scrollPosition = window.pageYOffset;
		}

		_elHtml.removeAttribute("style");

		_elHtml.classList.remove(this.defaultClass);

		if (this.extraClass !== "") {
			_elHtml.classList.remove(this.extraClass);
		}

		window.scrollTo(0, this.scrollPosition);

		var EGactive = new Event('gscroll-active');
		window.dispatchEvent(EGactive);
	},
	toggleScroll: function (args) {
		if (!this.elHtml.classList.contains(this.defaultClass)) {
			this.preventScroll(args);
		} else {
			this.activeScroll();
		}
	}
}