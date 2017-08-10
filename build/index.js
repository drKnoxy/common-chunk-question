webpackJsonp([2],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = one;
/* harmony export (immutable) */ __webpack_exports__["c"] = two;
/* harmony export (immutable) */ __webpack_exports__["b"] = three;
function one() {
  return 'function one included';
}

function two() {
  return 'function two included';
}

function three() {
  return 'function three included';
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(0);


function doCode() {
  Promise.all([
    __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 3)),
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 4))
  ]).then(function(l) { console.log('done', l)});
  Object(__WEBPACK_IMPORTED_MODULE_0__shared__["b" /* three */])();
}

doCode();

/***/ })
],[1]);
//# sourceMappingURL=index.js.map