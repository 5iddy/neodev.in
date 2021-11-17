/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_js/utils.js":
/*!**********************!*\
  !*** ./_js/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyToClipboard": () => (/* binding */ copyToClipboard)
/* harmony export */ });
function copyToClipboard(element) {
  if (element.textContent.startsWith("$ ")) {
    var textToCopy = element.textContent.substr(2);
  } else {
    var textToCopy = element.textContent;
  }

  navigator.clipboard.writeText(textToCopy.substr(0, textToCopy.length - 1));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./_js/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./_js/utils.js");
 // Get all "navbar-burger" elements

var navbarBurgers = document.querySelectorAll('.navbar-burger'); // Add a click event on each of them

navbarBurgers.forEach(function (el) {
  el.addEventListener('click', function () {
    // Get the target from the "data-target" attribute
    var target = document.getElementById(el.dataset.target); // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"

    el.classList.toggle('is-active');
    target.classList.toggle('is-active');
  });
});
var codeBlocks = document.querySelectorAll("pre.highlight");
codeBlocks.forEach(function (el) {
  var button = document.createElement('button');
  button.classList.add('button', 'is-info', 'is-outlined', 'is-small', 'bd-copy');
  button.type = 'button'; // button.innerText = 'Copy'

  var span = document.createElement("span");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-clipboard");
  span.classList.add("icon");
  span.appendChild(icon);
  button.appendChild(span);
  button.addEventListener('click', function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyToClipboard)(el);
    button.blur();
    button.innerText = 'Copied!';
    button.disabled = true;
    button.classList.add('is-success');
    setTimeout(function () {
      button.innerText = '';
      button.appendChild(span);
      button.disabled = false;
      button.classList.remove('is-success');
    }, 2000);
  }); // end of addEventListener

  el.parentElement.appendChild(button);
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map