/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n    const content = document.getElementById('content');\n    const image = document.createElement('img');\n    const headline = document.createElement('p');\n    const copy = document.createElement('p');\n  \n    // image.src = \"../images/donuts.jpg\";\n    headline.innerHTML = 'Contact';\n    copy.innerHTML = 'Contact us!';\n  \n    content.appendChild(image);\n    content.appendChild(headline);\n    content.appendChild(copy);\n  \n    document.body.appendChild(content);\n  }\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/donuts.jpg":
/*!************************!*\
  !*** ./src/donuts.jpg ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://odin-restaurant-page/./src/donuts.jpg?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n// import Donuts from './donuts.jpg';\n\nfunction loadHomePage() {\n  const content = document.getElementById('content');\n  // const image = document.createElement('img');\n  const image = new Image();\n  const headline = document.createElement('p');\n  const copy = document.createElement('p');\n\n  // image.src = Donuts;\n  headline.innerHTML = 'Headline';\n  copy.innerHTML = 'Copy goes here';\n\n  // content.appendChild(image);\n  content.appendChild(headline);\n  content.appendChild(copy);\n\n  document.body.appendChild(content);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _donuts_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donuts.jpg */ \"./src/donuts.jpg\");\n/* harmony import */ var _donuts_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_donuts_jpg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst image = new Image();\nimage.src = (_donuts_jpg__WEBPACK_IMPORTED_MODULE_4___default());\n\nconst body = document.querySelector('body');\nconst header = document.createElement('header');\nconst nav = document.createElement('ul');\nconst homeNav = document.createElement('button');\nconst menuNav = document.createElement('button');\nconst contactNav = document.createElement('button');\nconst content = document.getElementById('content');\n\nhomeNav.textContent = \"Home\";\nmenuNav.textContent = \"Menu\";\ncontactNav.textContent = \"Contact\";\nnav.appendChild(homeNav);\nnav.appendChild(menuNav);\nnav.appendChild(contactNav);\nnav.classList.add('nav');\nheader.appendChild(nav);\nbody.appendChild(header);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction clearContents() {\n    Array.from(content.children).forEach(element => {\n        content.removeChild(element);\n    });\n}\n\nfunction switchToHomePage() {\n    clearContents();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction switchToMenuPage() {\n    clearContents();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\nfunction switchToContactPage() {\n    clearContents();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\nhomeNav.addEventListener('click', switchToHomePage);\nmenuNav.addEventListener('click', switchToMenuPage);\ncontactNav.addEventListener('click', switchToContactPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n    const content = document.getElementById('content');\n    const image = document.createElement('img');\n    const headline = document.createElement('p');\n    const copy = document.createElement('p');\n  \n    // image.src = \"../images/donuts.jpg\";\n    headline.innerHTML = 'Menu';\n    copy.innerHTML = 'This is the menu';\n  \n    content.appendChild(image);\n    content.appendChild(headline);\n    content.appendChild(copy);\n  \n    document.body.appendChild(content);\n  }\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|     background-color: #e2e8f0;\\n|     margin: 0;\");\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;