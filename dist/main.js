/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./../pictures/background.jpg */ \"./src/pictures/background.jpg\"));\n// Module\nexports.push([module.i, \"body {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n  font-size: 20px;\\r\\n  font-family: \\\"Franklin Gothic Medium\\\", \\\"Arial Narrow\\\", Arial, sans-serif;\\r\\n  background-repeat: no-repeat;\\r\\n  background-attachment: fixed;\\r\\n  background-position: center;\\r\\n}\\r\\n.navbarZ {\\r\\n  margin-top: 5%;\\r\\n}\\r\\n.title {\\r\\n  display: inline-block;\\r\\n  text-align: right;\\r\\n  color: rgb(94, 0, 0);\\r\\n  font-style: italic;\\r\\n  font-weight: 100;\\r\\n  font: \\\"Lobster Two\\\", Helvetica, sans-serif;\\r\\n  margin-right: 10px;\\r\\n  padding-right:20px;\\r\\n}\\r\\n.logo {\\r\\n  vertical-align: middle;\\r\\n  display: inline;\\r\\n}\\r\\n.divtitle {\\r\\n  text-align: right;\\r\\n  padding-top:20px;\\r\\n  padding-left:20px;\\r\\n  padding-bottom:20px;\\r\\n  display: inline;\\r\\n  background: linear-gradient(\\r\\n    90deg,\\r\\n    rgba(255, 33, 33, 1) 0%,\\r\\n    rgba(149, 0, 0, 1) 31%,\\r\\n    rgba(231, 66, 58, 1) 68%\\r\\n  );\\r\\n  box-shadow: 10px 10px 5px rgb(75, 75, 75);\\r\\n\\r\\n}\\r\\n.options {\\r\\n  text-align: left;\\r\\n  display: inline-block;\\r\\n  margin-right: 35%;\\r\\n  color: rgb(94, 0, 0);\\r\\n  padding-left:20px;\\r\\n}\\r\\n\\r\\n.option:hover {\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.optionsMenu{\\r\\n    background: linear-gradient(\\r\\n    90deg,\\r\\n    rgba(255, 33, 33, 1) 0%,\\r\\n    rgba(149, 0, 0, 1) 31%,\\r\\n    rgba(231, 66, 58, 1) 68%\\r\\n  );\\r\\n  box-shadow: 10px 10px 5px rgb(75, 75, 75);\\r\\n    width: 75%;\\r\\n    margin:auto;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.food{\\r\\n    height: 200px;\\r\\n    width: 200px;\\r\\n    margin:10px;\\r\\n    padding:30px;\\r\\n    box-shadow: 10px 10px 5px rgb(75, 75, 75);\\r\\n    vertical-align: middle;\\r\\n    \\r\\n}\\r\\n\\r\\n.foodZ{\\r\\n    display:inline-block;\\r\\n    margin:auto;\\r\\n    text-align: center;\\r\\n    padding-top:20px;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n\r\nObject(_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n\nconst about = document.createElement('div');\nabout.classList.add('optionsMenu');\n\nabout.innerHTML = `\n<div class=\"about-container\" id=\"tab-info\"><br>\n<h1>About Us:</h1><br>\n<div id=\"LocationCopy\">\n        <p><strong>Downtown Indianapolis</strong><br>\n        11 W. Georgia St.<br>\n        Indianapolis, IN 46225</p>\n<p>Hours of Operation:<br>\n    Monday – Thursday 11am – 10pm<br>\n    Friday – Saturday 11am – 11pm<br>\n    Sunday 12pm – 9pm</p>\n    </div>\n        <br><br>\n  \n\n\n`;\n\n\n\n\n//# sourceURL=webpack:///./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n\nconst contact = document.createElement('div');\ncontact.classList.add('optionsMenu');\n\ncontact.innerHTML = `\n<div class=\"contact-container\" id=\"tab-info\"><br>\n<h1>Contact Us By:</h1><br>\n<a href='#'>Facebook</a><br>\n<a href='#'>Twitter</a><br>\n<span>Email: burgersalvation@lys.com </span><br>\n<span>Phone: +351/215-231 </span><br>\n<span>Mobile: +316 1231-13125-12341</span><br>\n</div><br><br>\n  \n\n\n`;\n\n\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pictures/logo.png */ \"./src/pictures/logo.png\");\n/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pictures_logo_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst header = document.createElement(\"div\");\r\nheader.classList.add(\"navbarZ\");\r\n\r\nheader.innerHTML = `\r\n<img class='logo' src=\"${_pictures_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a}\">\r\n<div class='divtitle'>\r\n    <div class=\"options\">\r\n        |<span id=\"menu\" class=\"menu option\">Menu</span>|\r\n        <span id=\"about\" class=\"about option\">About Us</span>|\r\n        <span id=\"contact\" class=\"contact option\">Contact Us</span>|\r\n    </div>\r\n<h1 class='title'>Bon Appetit  </h1>\r\n<div>\r\n`;\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _pictures_big_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pictures/big.jpg */ \"./src/pictures/big.jpg\");\n/* harmony import */ var _pictures_big_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pictures_big_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pictures_medium_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pictures/medium.jpg */ \"./src/pictures/medium.jpg\");\n/* harmony import */ var _pictures_medium_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pictures_medium_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pictures_steak_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pictures/steak.jpg */ \"./src/pictures/steak.jpg\");\n/* harmony import */ var _pictures_steak_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pictures_steak_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pictures_vegan_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pictures/vegan.jpg */ \"./src/pictures/vegan.jpg\");\n/* harmony import */ var _pictures_vegan_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pictures_vegan_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst menu = document.createElement('div');\nmenu.classList.add('optionsMenu');\n\nmenu.innerHTML = `\n<div class=\"row\">\n  <div class=\"col-sm\">\n    <div class=\"foodZ\"><span>Steak 5$</span>\n    <br><img class=\"food\" src=\"${_pictures_steak_jpg__WEBPACK_IMPORTED_MODULE_2___default.a}\"></div>\n    <div class=\"foodZ\"><span>Vegan 5$</span>\n    <br><img class=\"food\" src=\"${_pictures_vegan_jpg__WEBPACK_IMPORTED_MODULE_3___default.a}\"></div>\n  </div>\n  <div class=\"col-sm\">\n  <div class=\"foodZ\"><span>Medium 4$</span>\n  <br><img class=\"food\" src=\"${_pictures_medium_jpg__WEBPACK_IMPORTED_MODULE_1___default.a}\"></div>\n  <div class=\"foodZ\"><span>Big 7$</span>\n  <br><img class=\"food\" src=\"${_pictures_big_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}\"> </div>\n  </div>\n</div>\n<br><br>\n  \n\n\n`;\n\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/modules/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\n\n\n\nconst pageLoad = () => {\n  const body = document.getElementsByTagName('body')[0];\n  const container = document.createElement('div');\n  body.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__[\"header\"]);\n  body.appendChild(container);\n  container.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__[\"contact\"]);\n\n  document.getElementById('menu').addEventListener('click', (event) => {\n    menuAdd();\n  });\n\n  document.getElementById('contact').addEventListener('click', (event) => {\n    contactAdd();\n  });\n\n  document.getElementById('about').addEventListener('click', (event) => {\n    aboutAdd();\n  });\n  /**\n    Deletes content in container\n */\n  function deleteContent() {\n    let child = container.lastElementChild;\n    while (child) {\n      container.removeChild(child);\n      child = container.lastElementChild;\n    }\n  }\n\n  /**\n    Adds menu to container\n */\n  function menuAdd() {\n    deleteContent();\n    container.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menu\"]);\n  };\n\n  /**\n    Adds contact us to container\n */\n  function contactAdd() {\n    deleteContent();\n    container.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__[\"contact\"]);\n  };\n\n  /**\n    Adds about us to container\n  */\n  function aboutAdd() {\n    deleteContent();\n    container.appendChild(_about__WEBPACK_IMPORTED_MODULE_4__[\"about\"]);\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/pictures/background.jpg":
/*!*************************************!*\
  !*** ./src/pictures/background.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b5e37c7ce78eb1e521a3e5665921e0d0.jpg\";\n\n//# sourceURL=webpack:///./src/pictures/background.jpg?");

/***/ }),

/***/ "./src/pictures/big.jpg":
/*!******************************!*\
  !*** ./src/pictures/big.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e80ce60897dfea140dcc02691adcdfd0.jpg\";\n\n//# sourceURL=webpack:///./src/pictures/big.jpg?");

/***/ }),

/***/ "./src/pictures/logo.png":
/*!*******************************!*\
  !*** ./src/pictures/logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c14b4d7518b3b1702b88a586255c3ee9.png\";\n\n//# sourceURL=webpack:///./src/pictures/logo.png?");

/***/ }),

/***/ "./src/pictures/medium.jpg":
/*!*********************************!*\
  !*** ./src/pictures/medium.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"095ad7c52fc0558ad0c2e5b573d2d955.jpg\";\n\n//# sourceURL=webpack:///./src/pictures/medium.jpg?");

/***/ }),

/***/ "./src/pictures/steak.jpg":
/*!********************************!*\
  !*** ./src/pictures/steak.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"60cb4e1d3d319fb04752949dc918683c.jpg\";\n\n//# sourceURL=webpack:///./src/pictures/steak.jpg?");

/***/ }),

/***/ "./src/pictures/vegan.jpg":
/*!********************************!*\
  !*** ./src/pictures/vegan.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c3bc06b544d2de6ad10b6921693f5dd4.jpg\";\n\n//# sourceURL=webpack:///./src/pictures/vegan.jpg?");

/***/ })

/******/ });