/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// First button

var docStyle = document.documentElement.style;
var aElem = document.querySelector('.cta-main');

var FirstboundingClientRect = aElem.getBoundingClientRect();

aElem.onmousemove = function (e) {

  var x = e.clientX - FirstboundingClientRect.left;
  var y = e.clientY - FirstboundingClientRect.top;

  var xc = FirstboundingClientRect.width / 2;
  var yc = FirstboundingClientRect.height / 2;

  var dx = x - xc;
  var dy = y - yc;

  docStyle.setProperty('--rx', dy / -1 + 'deg');
  docStyle.setProperty('--ry', dx / 10 + 'deg');
};

aElem.onmouseleave = function (e) {
  docStyle.setProperty('--ty', '0');
  docStyle.setProperty('--rx', '0');
  docStyle.setProperty('--ry', '0');
};

aElem.onmousedown = function (e) {

  docStyle.setProperty('--tz', '-25px');
};

// Second button

var bElem = document.querySelector('.cta-blog');
var SecondboundingClientRect = bElem.getBoundingClientRect();

bElem.onmousemove = function (b) {

  var x1 = b.clientX - SecondboundingClientRect.left;
  var y1 = b.clientY - SecondboundingClientRect.top;

  var xc1 = SecondboundingClientRect.width / 2;
  var yc1 = SecondboundingClientRect.height / 2;

  var dx1 = x1 - xc1;
  var dy1 = y1 - yc1;

  docStyle.setProperty('--rxx', dy1 / -1 + 'deg');
  docStyle.setProperty('--ryy', dx1 / 10 + 'deg');
};

bElem.onmouseleave = function (b) {
  docStyle.setProperty('--tyy', '0');
  docStyle.setProperty('--rxx', '0');
  docStyle.setProperty('--ryy', '0');
};

bElem.onmousedown = function (b) {

  docStyle.setProperty('--tzz', '-25px');
};
bElem.onmouseup = function (b) {

  docStyle.setProperty('--tzz', '-10px');
};

document.body.onmouseup = function (b) {
  docStyle.setProperty('--tzz', '-12px');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var element = document.documentElement;

if (element.scrollHeight > element.clientHeight) {
  // Overflow detected; force scroll bar
  element.style.overflow = 'scrollbar';
} else {
  // No overflow detected; prevent scroll bar
  element.style.overflow = 'hidden';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(0);

/***/ })
/******/ ]);