(function () {
	'use strict';

	//define variables
	var items = document.querySelectorAll('.tl-timeline li');

	//check if an element is in viewport
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <=
				(window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function callBackFunc() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add('in-view');
			}
		}
	}

	//Listen for events
	window.addEventListener('load', callBackFunc);
	window.addEventListener('resize', callBackFunc);
	document.addEventListener('scroll', callBackFunc);
	document.addEventListener('mousemove', callBackFunc);
	document.addEventListener('focus', callBackFunc);
})();

/* const element = document.querySelector('#scroll-box');
const output = document.querySelector('p #output');

element.onscroll = (event) => {
	output.innerHTML = 'Element scroll event fired!';
	setTimeout(() => {
		output.innerHTML = 'Waiting on scroll events...';
	}, 1000);
}; */
