/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/form/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/form/style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `form {
	gap: 1.5rem;
	opacity: 0;
	transition: opacity .5s ease-in-out;
}

form.show {
	opacity: 1;
}

label, input {
	font-size: 3vh;
}

input {
	border-radius: 40px;
	padding: 20px;
	text-align: center;
	border-color: black
}

input:focus {
	box-shadow: 6px 6px 10px black;;
    transform: translate(-4px,-4px);
    transition: all .5s; 
}`, "",{"version":3,"sources":["webpack://./src/components/form/style.css"],"names":[],"mappings":"AAAA;CACC,WAAW;CACX,UAAU;CACV,mCAAmC;AACpC;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,kBAAkB;CAClB;AACD;;AAEA;CACC,8BAA8B;IAC3B,+BAA+B;IAC/B,mBAAmB;AACvB","sourcesContent":["form {\n\tgap: 1.5rem;\n\topacity: 0;\n\ttransition: opacity .5s ease-in-out;\n}\n\nform.show {\n\topacity: 1;\n}\n\nlabel, input {\n\tfont-size: 3vh;\n}\n\ninput {\n\tborder-radius: 40px;\n\tpadding: 20px;\n\ttext-align: center;\n\tborder-color: black\n}\n\ninput:focus {\n\tbox-shadow: 6px 6px 10px black;;\n    transform: translate(-4px,-4px);\n    transition: all .5s; \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/gameboards/style.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/gameboards/style.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#playerGameboard, #AIGameboard {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
}

.pgbc, .mgbc {
	width: 30px;
	height: 30px;
	border: 1px solid #000;
	position: relative;
}

.pgbc:hover, .mgbc:hover {
	background-color: black;
}

.attacked {
	background-color: brown;
	transition: background-color 1s ease;
}

.missed {
	pointer-events: none;
	background-color: rgb(50, 48, 48);
	transition: background-color 1s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/gameboards/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sCAAsC;AACvC;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;CACvB,oCAAoC;AACrC;;AAEA;CACC,oBAAoB;CACpB,iCAAiC;CACjC,oCAAoC;AACrC","sourcesContent":["#playerGameboard, #AIGameboard {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n}\n\n.pgbc, .mgbc {\n\twidth: 30px;\n\theight: 30px;\n\tborder: 1px solid #000;\n\tposition: relative;\n}\n\n.pgbc:hover, .mgbc:hover {\n\tbackground-color: black;\n}\n\n.attacked {\n\tbackground-color: brown;\n\ttransition: background-color 1s ease;\n}\n\n.missed {\n\tpointer-events: none;\n\tbackground-color: rgb(50, 48, 48);\n\ttransition: background-color 1s ease;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.randomlyPlacedShip {
    background-color: red;
    box-shadow: 6px 6px 6px black;
    border-radius: 50px;
    cursor: grab;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
}

.randomlyPlacedShip.show {
    opacity: 1;
    transition: opacity 1s ease-in-out;
}

#l6ship.vertical {
    height: 168px;
    width: 16px;
    top: 10px;
}

#l6ship.horizontal {
    height: 16px;
    width: 168px;
    left: 10px;
}

#l5ship.vertical {
    height: 140px;
    width: 16px;
    top: 10px;
}

#l5ship.horizontal {
    height: 16px;
    width: 140px;
    left: 10px;
}

#l4ship.vertical {
    height: 112px;
    width: 16px;
    top: 10px;
}

#l4ship.horizontal {
    height: 16px;
    width: 112px;
    left: 10px;
}

#l3ship.vertical {
    height: 84px;
    width: 16px;
    top: 5px;
}

#l3ship.horizontal {
    height: 16px;
    width: 84px;
    left: 5px;
}

#l2ship.vertical {
    height: 56px;
    width: 16px;
    top: 5px;
}

#l2ship.horizontal {
    height: 16px;
    width: 56px;
    left: 5px;
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;AACb","sourcesContent":[".randomlyPlacedShip {\n    background-color: red;\n    box-shadow: 6px 6px 6px black;\n    border-radius: 50px;\n    cursor: grab;\n    position: absolute;\n    z-index: 1;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.randomlyPlacedShip.show {\n    opacity: 1;\n    transition: opacity 1s ease-in-out;\n}\n\n#l6ship.vertical {\n    height: 168px;\n    width: 16px;\n    top: 10px;\n}\n\n#l6ship.horizontal {\n    height: 16px;\n    width: 168px;\n    left: 10px;\n}\n\n#l5ship.vertical {\n    height: 140px;\n    width: 16px;\n    top: 10px;\n}\n\n#l5ship.horizontal {\n    height: 16px;\n    width: 140px;\n    left: 10px;\n}\n\n#l4ship.vertical {\n    height: 112px;\n    width: 16px;\n    top: 10px;\n}\n\n#l4ship.horizontal {\n    height: 16px;\n    width: 112px;\n    left: 10px;\n}\n\n#l3ship.vertical {\n    height: 84px;\n    width: 16px;\n    top: 5px;\n}\n\n#l3ship.horizontal {\n    height: 16px;\n    width: 84px;\n    left: 5px;\n}\n\n#l2ship.vertical {\n    height: 56px;\n    width: 16px;\n    top: 5px;\n}\n\n#l2ship.horizontal {\n    height: 16px;\n    width: 56px;\n    left: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/style.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/style.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#pst > #legend {
	width: 280px;
}

#shipsContainer {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	height: 100px;
	width: 100vw;
	padding-bottom: 10px;
}

.pstRow{
	height: 35px;
	margin: 0;
}

.pstShip {
	background-color: red;
	box-shadow: 6px 6px 6px black;
	border-radius: 50px;
	cursor: grab;
	position: absolute;
	z-index: 1;
}

.pstShip.horizontal:hover {
    transform: translate(-4px,-4px);
    transition: all .5s;
}

#pShip6.horizontal {
	height: 16px;
	width: 168px;
}

#pShip5.horizontal {
	height: 16px;
	width: 140px;
	margin-right: 80px;
}

#pShip2.horizontal {
	height: 16px;
	width: 56px;
	margin-left: 160px;
}

#pShip4.horizontal {
	height: 16px;
	width: 112px;
	margin-right: 100px;
}

#pShip3.horizontal {
	height: 16px;
	width: 84px;
	margin-left: 140px;
}

.rotate {
	transform: rotate(90deg);
}

.rotate:hover {
    transform: translate(-4px,-4px) rotate(0deg);
	z-index: 2;
    transition: all .5s;
}

#pShip6.vertical {
	width: 16px;
	height: 168px;
}

#pShip5.vertical {
	width: 16px;
	height: 140px;
	margin-right: 80px;
}

#pShip2.vertical {
	width: 16px;
	height: 56px;
	margin-left: 160px;
}

#pShip4.vertical {
	width: 16px;
	height: 112px;
	margin-right: 100px;
}

#pShip3.vertical {
	width: 16px;
	height: 84px;
	margin-left: 140px;
}

.drag-over {
    background-color: grey
}

.hide {
	opacity: 0;
}

.placedShip {
	pointer-events: none;
	margin: 0;
}

.unavailableCell {
	background-color: rgb(227, 232, 236);
	pointer-events: none;
}

#btnContainer {
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

#pst > button {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 280px;
	height: 45px;
	font-size: 15px;
	padding-left: 40px;
	padding-right: 40px;
}

#pst > button:hover {
	cursor: pointer;
    box-shadow: 2px 2px 10px black;
    transform: translate(-4px,-4px);
    transition: all .5s;
}

#pst > button:active {
	background-color: rgb(113, 166, 32);
    transition: background-color .5s;
}

#pst > button:focus {
	cursor: pointer;
    box-shadow: 6px 6px 10px black;
	opacity: 1;
    transform: translate(0px,0px);
    transition: all .5s;
}

img{
	width: 30px;
	color: white;
	filter: invert(100%);
	border-radius: 40px;
	border: 2px solid black;
}

`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/placeShipsTool/style.css"],"names":[],"mappings":"AAAA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,qCAAqC;CACrC,aAAa;CACb,YAAY;CACZ,oBAAoB;AACrB;;AAEA;CACC,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,qBAAqB;CACrB,6BAA6B;CAC7B,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,UAAU;AACX;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;IACI,4CAA4C;CAC/C,UAAU;IACP,mBAAmB;AACvB;;AAEA;CACC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,WAAW;CACX,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;IACI;AACJ;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,oBAAoB;CACpB,SAAS;AACV;;AAEA;CACC,oCAAoC;CACpC,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,8BAA8B;CAC9B,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,mCAAmC;IAChC,gCAAgC;AACpC;;AAEA;CACC,eAAe;IACZ,8BAA8B;CACjC,UAAU;IACP,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,oBAAoB;CACpB,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["#pst > #legend {\n\twidth: 280px;\n}\n\n#shipsContainer {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(1, 1fr);\n\theight: 100px;\n\twidth: 100vw;\n\tpadding-bottom: 10px;\n}\n\n.pstRow{\n\theight: 35px;\n\tmargin: 0;\n}\n\n.pstShip {\n\tbackground-color: red;\n\tbox-shadow: 6px 6px 6px black;\n\tborder-radius: 50px;\n\tcursor: grab;\n\tposition: absolute;\n\tz-index: 1;\n}\n\n.pstShip.horizontal:hover {\n    transform: translate(-4px,-4px);\n    transition: all .5s;\n}\n\n#pShip6.horizontal {\n\theight: 16px;\n\twidth: 168px;\n}\n\n#pShip5.horizontal {\n\theight: 16px;\n\twidth: 140px;\n\tmargin-right: 80px;\n}\n\n#pShip2.horizontal {\n\theight: 16px;\n\twidth: 56px;\n\tmargin-left: 160px;\n}\n\n#pShip4.horizontal {\n\theight: 16px;\n\twidth: 112px;\n\tmargin-right: 100px;\n}\n\n#pShip3.horizontal {\n\theight: 16px;\n\twidth: 84px;\n\tmargin-left: 140px;\n}\n\n.rotate {\n\ttransform: rotate(90deg);\n}\n\n.rotate:hover {\n    transform: translate(-4px,-4px) rotate(0deg);\n\tz-index: 2;\n    transition: all .5s;\n}\n\n#pShip6.vertical {\n\twidth: 16px;\n\theight: 168px;\n}\n\n#pShip5.vertical {\n\twidth: 16px;\n\theight: 140px;\n\tmargin-right: 80px;\n}\n\n#pShip2.vertical {\n\twidth: 16px;\n\theight: 56px;\n\tmargin-left: 160px;\n}\n\n#pShip4.vertical {\n\twidth: 16px;\n\theight: 112px;\n\tmargin-right: 100px;\n}\n\n#pShip3.vertical {\n\twidth: 16px;\n\theight: 84px;\n\tmargin-left: 140px;\n}\n\n.drag-over {\n    background-color: grey\n}\n\n.hide {\n\topacity: 0;\n}\n\n.placedShip {\n\tpointer-events: none;\n\tmargin: 0;\n}\n\n.unavailableCell {\n\tbackground-color: rgb(227, 232, 236);\n\tpointer-events: none;\n}\n\n#btnContainer {\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n\n#pst > button {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\twidth: 280px;\n\theight: 45px;\n\tfont-size: 15px;\n\tpadding-left: 40px;\n\tpadding-right: 40px;\n}\n\n#pst > button:hover {\n\tcursor: pointer;\n    box-shadow: 2px 2px 10px black;\n    transform: translate(-4px,-4px);\n    transition: all .5s;\n}\n\n#pst > button:active {\n\tbackground-color: rgb(113, 166, 32);\n    transition: background-color .5s;\n}\n\n#pst > button:focus {\n\tcursor: pointer;\n    box-shadow: 6px 6px 10px black;\n\topacity: 1;\n    transform: translate(0px,0px);\n    transition: all .5s;\n}\n\nimg{\n\twidth: 30px;\n\tcolor: white;\n\tfilter: invert(100%);\n\tborder-radius: 40px;\n\tborder: 2px solid black;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/style.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/style.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#generalContainer {
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	opacity: 1;
	transition: 1s ease-in-out;
}

#generalContainer.hide {
	opacity: 0;
	transition: 1s ease-in-out;
}

#pst, #panel {
	gap: 10px;
	height: 200px;
}

#pst, #playerSection, #AIGameboard, #panel {
	opacity: 0;
	transition: opacity .5s ease-in-out;
}

#pst.show, #playerSection.show, #AIGameboard.show, #panel.show {
	opacity: 1;
}

#panel > p:nth-child(2) {
	font-size: 45px;
	font-weight: 900;
	color: brown;
	text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB,mBAAmB;CACnB,uBAAuB;CACvB,sBAAsB;CACtB,SAAS;CACT,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,SAAS;CACT,aAAa;AACd;;AAEA;CACC,UAAU;CACV,mCAAmC;AACpC;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,0BAA0B;AAC3B","sourcesContent":["#generalContainer {\n    display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tgap: 10px;\n\topacity: 1;\n\ttransition: 1s ease-in-out;\n}\n\n#generalContainer.hide {\n\topacity: 0;\n\ttransition: 1s ease-in-out;\n}\n\n#pst, #panel {\n\tgap: 10px;\n\theight: 200px;\n}\n\n#pst, #playerSection, #AIGameboard, #panel {\n\topacity: 0;\n\ttransition: opacity .5s ease-in-out;\n}\n\n#pst.show, #playerSection.show, #AIGameboard.show, #panel.show {\n\topacity: 1;\n}\n\n#panel > p:nth-child(2) {\n\tfont-size: 45px;\n\tfont-weight: 900;\n\tcolor: brown;\n\ttext-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

body {
	background-color: white;
	color: rgb(14, 15, 14);
	font-family: 'Cutive Mono', monospace;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items:center;
	text-align: center;
	width: 100vw;
}

input, button {
	font-family: 'Montserrat', sans-serif;
}

button {
	background-color: black;
	color: white;
    border-radius: 20px;
    border-style: none;
	box-shadow: 4px 4px 10px black;
	padding: 1rem;
	font-size: 5vh;
}

button:hover {
	cursor: pointer;
    box-shadow: 2px 2px 10px black;
    transform: translate(-4px,-4px);
    transition: all .5s; 
}

button:focus {
	cursor: pointer;
	background-color: rgb(113, 166, 32);
    box-shadow: 6px 6px 10px black;
    transform: translate(4px,4px);
 	opacity: 0;
    transition: background-color .5s, transform .5s, opacity 1s;
}

header {
	margin-top: 10vh;
	margin-bottom: 10vh;
	font-size: min(15vw, 80px);
}

footer {
	position:fixed;
	bottom: 2vh;
	font-size: 2vh;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;CACxB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,qCAAqC;CACrC,gBAAgB;CAChB,aAAa;CACb,uBAAuB;CACvB,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,uBAAuB;CACvB,YAAY;IACT,mBAAmB;IACnB,kBAAkB;CACrB,8BAA8B;CAC9B,aAAa;CACb,cAAc;AACf;;AAEA;CACC,eAAe;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,eAAe;CACf,mCAAmC;IAChC,8BAA8B;IAC9B,6BAA6B;EAC/B,UAAU;IACR,2DAA2D;AAC/D;;AAEA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,0BAA0B;AAC3B;;AAEA;CACC,cAAc;CACd,WAAW;CACX,cAAc;AACf","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n\nbody {\n\tbackground-color: white;\n\tcolor: rgb(14, 15, 14);\n\tfont-family: 'Cutive Mono', monospace;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items:center;\n\ttext-align: center;\n\twidth: 100vw;\n}\n\ninput, button {\n\tfont-family: 'Montserrat', sans-serif;\n}\n\nbutton {\n\tbackground-color: black;\n\tcolor: white;\n    border-radius: 20px;\n    border-style: none;\n\tbox-shadow: 4px 4px 10px black;\n\tpadding: 1rem;\n\tfont-size: 5vh;\n}\n\nbutton:hover {\n\tcursor: pointer;\n    box-shadow: 2px 2px 10px black;\n    transform: translate(-4px,-4px);\n    transition: all .5s; \n}\n\nbutton:focus {\n\tcursor: pointer;\n\tbackground-color: rgb(113, 166, 32);\n    box-shadow: 6px 6px 10px black;\n    transform: translate(4px,4px);\n \topacity: 0;\n    transition: background-color .5s, transform .5s, opacity 1s;\n}\n\nheader {\n\tmargin-top: 10vh;\n\tmargin-bottom: 10vh;\n\tfont-size: min(15vw, 80px);\n}\n\nfooter {\n\tposition:fixed;\n\tbottom: 2vh;\n\tfont-size: 2vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/form/style.css":
/*!***************************************!*\
  !*** ./src/components/form/style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/form/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/style.css":
/*!***************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/style.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/gameboards/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css":
/*!*******************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/style.css":
/*!*******************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/style.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/placeShipsTool/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/gameContainer/GUI/style.css":
/*!****************************************************!*\
  !*** ./src/components/gameContainer/GUI/style.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gameContainer/GUI/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/arrow.svg":
/*!**************************!*\
  !*** ./assets/arrow.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89240019a08c47cf02e4.svg";

/***/ }),

/***/ "./assets/checkmark-circle-outline.svg":
/*!*********************************************!*\
  !*** ./assets/checkmark-circle-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57e9c3d9891a0d7e5ea6.svg";

/***/ }),

/***/ "./assets/hand-right-outline.svg":
/*!***************************************!*\
  !*** ./assets/hand-right-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c947dcd20eb9c5d54575.svg";

/***/ }),

/***/ "./assets/repeat-outline.svg":
/*!***********************************!*\
  !*** ./assets/repeat-outline.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a699635207bef41d5cc1.svg";

/***/ }),

/***/ "./assets/shuffle-outline.svg":
/*!************************************!*\
  !*** ./assets/shuffle-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09a494a3231c4851974b.svg";

/***/ }),

/***/ "./src/components/form/setForm.js":
/*!****************************************!*\
  !*** ./src/components/form/setForm.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setForm)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _gameContainer_setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameContainer/setup.js */ "./src/components/gameContainer/setup.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/form/style.css");
// Throughout the entire project,
// createHtmlElement is used to efficiently add DOM elements


 // eslint-disable-line no-unused-vars

function setForm() {
  const generalContainer = document.getElementById('generalContainer');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(generalContainer, 'form');
  const form = document.querySelector('form');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, 'label', [], 'Enter your name:', 'nameLabel', [{
    attribute: 'for',
    value: 'playerName'
  }]);
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, 'input', [], '', 'playerName', [{
    attribute: 'type',
    value: 'text'
  }, {
    attribute: 'name',
    value: 'playerName'
  }, {
    attribute: 'placeholder',
    value: 'Enter name'
  }, {
    attribute: 'autocomplete',
    value: 'on'
  }]);
  const input = document.querySelector('input');
  input.required = true;
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, 'button', [], 'Start game', 'startBtn', [{
    attribute: 'type',
    value: 'button'
  }]);
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    (0,_gameContainer_setup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Once user enter their name, the game starts
  });
  setTimeout(() => {
    form.classList.add('show');
  }, 500);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/getCellId.js":
/*!******************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/getCellId.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCellId)
/* harmony export */ });
function getCellId(str, row, col) {
  let r = (() => {
    return row === 0 ? '' : row;
  })();
  return str + r + col;
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/getCoordinatesFromId.js":
/*!*****************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/getCoordinatesFromId.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoordinatesFromId)
/* harmony export */ });
function getCoordinatesFromId(cellId) {
  const cellNum = cellId.split('mgbc')[1];
  const rowNum = (() => {
    return cellNum.length === 1 ? 0 : cellNum[0];
  })();
  const colNum = (() => {
    return cellNum.length === 1 ? cellNum : cellNum[1];
  })();
  return [parseInt(rowNum), parseInt(colNum)];
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/machineAttack.js":
/*!**********************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/machineAttack.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ machineAttack)
/* harmony export */ });
/* harmony import */ var _machine_displayAndHideSections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./machine/displayAndHideSections.js */ "./src/components/gameContainer/GUI/gameboards/machine/displayAndHideSections.js");
/* harmony import */ var _machine_attack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine/attack.js */ "./src/components/gameContainer/GUI/gameboards/machine/attack.js");
/* harmony import */ var _playerAttack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerAttack.js */ "./src/components/gameContainer/GUI/gameboards/playerAttack.js");
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../end.js */ "./src/components/gameContainer/end.js");





function machineAttack() {
  setTimeout(() => {
    (0,_machine_displayAndHideSections_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }, 500);
  // Set machine and attack
  const attack = (0,_machine_attack_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Display html elements, styles and adnimations
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
    setTimeout(() => {
      if (attack.shipInCoordinates) {
        attack.cell.classList.remove('unavailableCell');
        attack.cell.classList.add('attacked');
      } else {
        attack.cell.classList.add('missed');
      }
      setTimeout(() => {
        const gameboard = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.getGameboard(1);
        const status = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.allShipsSunk(gameboard);
        generalContainer.classList.add('hide');
        setTimeout(() => {
          const legend = 'Machine wins :(';
          status === true ? (0,_end_js__WEBPACK_IMPORTED_MODULE_4__["default"])(legend) : (0,_playerAttack_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/machine/attack.js":
/*!***********************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/machine/attack.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attack)
/* harmony export */ });
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _game_setMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../game/setMachine.js */ "./src/game/setMachine.js");
/* harmony import */ var _getCellId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getCellId.js */ "./src/components/gameContainer/GUI/gameboards/getCellId.js");



function attack() {
  const gameboard = _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.getGameboard(1);
  const machine = (0,_game_setMachine_js__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboard);
  const attackCoordinates = machine.attack();
  const row = attackCoordinates[0];
  const col = attackCoordinates[1];
  const shipInCoordinates = (() => {
    return 'ship' in gameboard[row][col] ? true : false;
  })();
  const cell = document.getElementById((0,_getCellId_js__WEBPACK_IMPORTED_MODULE_2__["default"])('pgbc', row, col));
  return {
    shipInCoordinates,
    cell
  };
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/machine/displayAndHideSections.js":
/*!***************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/machine/displayAndHideSections.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAndHideSections)
/* harmony export */ });
function displayAndHideSections() {
  const generalContainer = document.getElementById('generalContainer');
  // Hide general container
  generalContainer.classList.add('hide');
  // Display player section and hide AI section
  setTimeout(() => {
    const basicOrientation = document.getElementById('basicOrientation');
    basicOrientation.textContent = 'Now is machine turn.';
    const animationText = document.getElementById('animationText');
    animationText.textContent = 'Watch out!';
    const playerSection = document.getElementById('playerSection');
    playerSection.style.display = 'flex';
    const AISection = document.getElementById('AISection');
    AISection.style.display = 'none';
  }, 1000);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/playerAttack.js":
/*!*********************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/playerAttack.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerAttack)
/* harmony export */ });
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../game/play.js */ "./src/game/play.js");

function playerAttack() {
  const basicOrientation = document.getElementById('basicOrientation');
  const playerName = _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.name;
  basicOrientation.textContent = `It's your turn ${playerName}:`;
  const animationText = document.getElementById('animationText');
  animationText.textContent = 'Attack!';
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'flex';
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/setMachineGameboard.js":
/*!****************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/setMachineGameboard.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMachineGameboard)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/gameContainer/GUI/gameboards/style.css");
/* harmony import */ var _getCoordinatesFromId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCoordinatesFromId.js */ "./src/components/gameContainer/GUI/gameboards/getCoordinatesFromId.js");
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _game_operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../game/operations/receiveAttack.js */ "./src/game/operations/receiveAttack.js");
/* harmony import */ var _machineAttack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machineAttack.js */ "./src/components/gameContainer/GUI/gameboards/machineAttack.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../end.js */ "./src/components/gameContainer/end.js");

 // eslint-disable-line no-unused-vars





function setMachineGameboard() {
  /* User interactions take place on body => div#generalContainer */
  const generalContainer = document.getElementById('generalContainer');
  /* Gameboard is contained in a section element and is displayed
  in a grid of 10 x 10 */
  const gbClasses = ['gameboard', 'show']; // Shortcut for class name
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(generalContainer, 'section', gbClasses, '', 'AISection');
  const machineSection = document.getElementById('AISection');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(machineSection, 'div', gbClasses, '', 'AIGameboard');
  const machineGameboard = document.getElementById('AIGameboard');
  for (let i = 0; i <= 99; i++) {
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(machineGameboard, 'div', ['mgbc'], '', `mgbc${i}`);
  }
  const cells = document.querySelectorAll('.mgbc');
  const gameboard = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.getGameboard(2);
  // Add listeners to each cell
  cells.forEach(cell => {
    const attackFn = () => {
      const coordinates = (0,_getCoordinatesFromId_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cell.id);
      const attack = (0,_game_operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_4__["default"])(gameboard, coordinates);
      if (attack === true) cell.classList.add('attacked');else cell.classList.add('missed');
      cell.removeEventListener('click', attackFn);
      const status = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.allShipsSunk(gameboard);
      const legend = "You're a winner!";
      status === true ? (0,_end_js__WEBPACK_IMPORTED_MODULE_6__["default"])(legend) : (0,_machineAttack_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    };
    cell.addEventListener('click', attackFn);
  });
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/gameboards/setPlayerGameboard.js":
/*!***************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/gameboards/setPlayerGameboard.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPlayerGameboard)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/gameContainer/GUI/gameboards/style.css");

 // eslint-disable-line no-unused-vars

function setPlayerGameboard() {
  /* User interactions take place on body => div#generalContainer */
  const generalContainer = document.getElementById('generalContainer');
  /* Gameboard is contained in a section element and is displayed
  in a grid of 10 x 10 */
  const gb = 'gameboard'; // Shortcut for class name
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(generalContainer, 'section', [], '', 'playerSection');
  const playerSection = document.getElementById('playerSection');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerSection, 'div', [gb], '', 'playerGameboard');
  const playerGameboard = document.getElementById('playerGameboard');
  for (let i = 0; i <= 99; i++) {
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, 'div', ['pgbc'], '', `pgbc${i}`);
  }
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnd.js":
/*!********************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnd.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragEnd)
/* harmony export */ });
function dragEnd(e) {
  if (e.target.classList.contains('vertical')) {
    e.target.classList.add('rotate');
  }
  setTimeout(() => {
    e.target.classList.remove('hide');
  }, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnter.js":
/*!**********************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnter.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragEnter)
/* harmony export */ });
function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragLeave.js":
/*!**********************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragLeave.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragLeave)
/* harmony export */ });
function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragOver.js":
/*!*********************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragOver.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragOver)
/* harmony export */ });
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragStart.js":
/*!**********************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragStart.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragStart)
/* harmony export */ });
function dragStart(e) {
  e.target.classList.remove('rotate');
  let offsetX = e.clientX - e.target.getBoundingClientRect().left;
  let offsetY = e.clientY - e.target.getBoundingClientRect().top;
  e.dataTransfer.setData('application/json', JSON.stringify({
    offsetX,
    offsetY
  }));
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop.js":
/*!*****************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _drop_getDOMCoordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop/getDOMCoordinates.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getDOMCoordinates.js");
/* harmony import */ var _drop_setupShipStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop/setupShipStyle.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/setupShipStyle.js");
/* harmony import */ var _drop_getElementsOnShipArea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop/getElementsOnShipArea.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getElementsOnShipArea.js");
/* harmony import */ var _drop_linkShipWithCell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop/linkShipWithCell.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/linkShipWithCell.js");
/* harmony import */ var _drop_getGameCoordinates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop/getGameCoordinates.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getGameCoordinates.js");
/* harmony import */ var _setFinalButtons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setFinalButtons.js */ "./src/components/gameContainer/GUI/placeShipsTool/setFinalButtons.js");
/* harmony import */ var _setManually_confirmation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setManually/confirmation.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually/confirmation.js");
/* harmony import */ var _setManually_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setManually.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually.js");








function drop(e) {
  e.target.classList.remove('drag-over');
  // Get new container and coordinates relatives to viewport
  let {
    container,
    newX,
    newY
  } = (0,_drop_getDOMCoordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e);
  // Get ship element (draggable = ship)
  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);
  const shipLength = parseInt(draggableId.charAt(draggableId.length - 1), 10);
  // Get elements on ship area (draggable = ship)
  const elementsOnShipArea = (0,_drop_getElementsOnShipArea_js__WEBPACK_IMPORTED_MODULE_2__["default"])(draggable, container, newX, newY, shipLength);
  // Verify if dragAndDrop is a valid movement
  if (elementsOnShipArea.length !== shipLength) {
    e.preventDefault();
    if (e.target.classList.contains('vertical')) {
      e.target.classList.add('rotate');
    }
  } else {
    // Setup placed ship style propierties (draggable = ship)
    (0,_drop_setupShipStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(draggable, container, newX, newY);
    // Identify elements and change styles: Link the ship with valid cells
    elementsOnShipArea.forEach(element => (0,_drop_linkShipWithCell_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element, draggableId));
    // Get game coordinates for internal app purposes
    (0,_drop_getGameCoordinates_js__WEBPACK_IMPORTED_MODULE_4__["default"])(draggableId);
    // Check if PST container has available ships
    // If not, proceed by asking the user for placement confirmation
    const ships = document.querySelectorAll('.pstRow > div');
    if (ships.length === 0) {
      // Add confirmation and trya again buttons
      (0,_setFinalButtons_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_setManually_confirmation_js__WEBPACK_IMPORTED_MODULE_6__["default"].legend(), _setManually_confirmation_js__WEBPACK_IMPORTED_MODULE_6__["default"].fn, _setManually_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
    }
  }
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getDOMCoordinates.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getDOMCoordinates.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDOMCoordinates)
/* harmony export */ });
function getDOMCoordinates(e) {
  // Get dragStart coordinates to setup ship location
  let offsets = JSON.parse(e.dataTransfer.getData('application/json'));
  // Calculate drop coordinates relatives to dragStart location
  let newX = e.clientX - offsets.offsetX;
  let newY = e.clientY - offsets.offsetY;
  // Calculate drop coordinates relatives to e.tarjet (gameboard cell)
  const container = document.getElementById(e.target.id);
  const containerRect = container.getBoundingClientRect();
  newX = newX - containerRect.left - 7;
  newY = newY - containerRect.top - 7;
  return {
    container,
    newX,
    newY
  };
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getElementsOnShipArea.js":
/*!***************************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getElementsOnShipArea.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getElementsOnShipArea)
/* harmony export */ });
/* harmony import */ var _identifyElementsInArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identifyElementsInArea.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/identifyElementsInArea.js");

function getElementsOnShipArea(draggable, newContainer, newX, newY, shipLength) {
  const clone = draggable.cloneNode(false);
  if (clone.classList.contains('vertical')) {
    clone.style.height = shipLength * 28 + 'px';
    clone.style.width = 16 + 'px';
  } else if (clone.classList.contains('horizontal')) {
    clone.style.height = 16 + 'px';
    clone.style.width = shipLength * 28 + 'px';
  }
  clone.style.left = newX + 'px';
  clone.style.top = newY + 'px';
  clone.style.margin = 0;
  clone.setAttribute('id', 'clone');
  newContainer.appendChild(clone);
  const rect = clone.getBoundingClientRect();
  const topCoordinate = rect.top + window.scrollY;
  const bottomCoordinate = rect.bottom + window.scrollY;
  const leftCoordinate = rect.left + window.scrollX;
  const rightCoordinate = rect.right + window.scrollX;
  clone.remove();
  return (0,_identifyElementsInArea_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.pgbc', topCoordinate, bottomCoordinate, leftCoordinate, rightCoordinate, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getGameCoordinates.js":
/*!************************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/getGameCoordinates.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getGameCoordinates)
/* harmony export */ });
/* harmony import */ var _shipsCoordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shipsCoordinates.js */ "./src/components/gameContainer/GUI/placeShipsTool/shipsCoordinates.js");

function getGameCoordinates(shipId) {
  const cells = document.querySelectorAll(`.${shipId}`);
  const getCellNum = cell => {
    return cell.id.split('pgbc')[1];
  };
  const getCoordinates = cellNum => {
    if (cellNum.length === 1) return [0, parseInt(cellNum)];else if (cellNum.length === 2) {
      return [parseInt(cellNum[0]), parseInt(cellNum[1])];
    } else return new Error('Invalid coordinates');
  };
  const startCell = cells[0];
  const endCell = cells[cells.length - 1];
  const startCoordinates = getCoordinates(getCellNum(startCell));
  const endCoordinates = getCoordinates(getCellNum(endCell));
  _shipsCoordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"].push([startCoordinates, endCoordinates]);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/identifyElementsInArea.js":
/*!****************************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/identifyElementsInArea.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ identifyElementsInArea)
/* harmony export */ });
function identifyElementsInArea(elementsToSearch, top, bottom, left, right, margin) {
  const allElements = document.querySelectorAll(elementsToSearch);
  const elements = [];
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = rect.bottom + window.scrollY;
    const elementLeft = rect.left + window.scrollX;
    const elementRight = rect.right + window.scrollX;

    // Verifies  if each element overlaps the ship area
    if (elementTop <= bottom + margin && elementBottom >= top - margin && elementLeft <= right + margin && elementRight >= left - margin) {
      elements.push(element);
    }
  }
  return elements;
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/linkShipWithCell.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/linkShipWithCell.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ linkShipWithCell)
/* harmony export */ });
/* harmony import */ var _dragOver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dragOver.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragOver.js");
/* harmony import */ var _dragLeave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dragLeave.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragLeave.js");
/* harmony import */ var _dragEnter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragEnter.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnter.js");
/* harmony import */ var _drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drop.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop.js");




function linkShipWithCell(cell, id) {
  cell.removeEventListener('dragenter', _dragEnter_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  cell.removeEventListener('dragover', _dragOver_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  cell.removeEventListener('dragleave', _dragLeave_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  cell.removeEventListener('drop', _drop_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  cell.classList.add('unavailableCell');
  cell.classList.add(id);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/setupShipStyle.js":
/*!********************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop/setupShipStyle.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupShipStyle)
/* harmony export */ });
function setupShipStyle(draggable, newContainer, newX, newY) {
  newContainer.appendChild(draggable);
  draggable.style.transform = 'rotate(0deg)';
  draggable.style.left = newX + 'px';
  draggable.style.top = newY + 'px';
  draggable.style.margin = 0;
  draggable.classList.add('placedShip');
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setConfirmationBtn.js":
/*!*******************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setConfirmationBtn.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setConfirmationBtn)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _assets_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/checkmark-circle-outline.svg */ "./assets/checkmark-circle-outline.svg");
/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../start.js */ "./src/components/gameContainer/start.js");



function setConfirmationBtn(confirmationFn) {
  const pst = document.getElementById('pst');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'button', [], "Okay, let's play!", 'confirmationBtn', [{
    attribute: 'type',
    value: 'button'
  }]);
  const confirmationBtn = document.getElementById('confirmationBtn');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(confirmationBtn, 'img', [], '', 'approvalIcon', [{
    attribute: 'src',
    value: _assets_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__
  }, {
    attribute: 'alt',
    value: 'approval icon'
  }]);
  confirmationBtn.addEventListener('click', () => {
    confirmationFn();
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.add('hide');
    setTimeout(() => {
      pst.remove();
      (0,_start_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }, 1000);
  });
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setFinalButtons.js":
/*!****************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setFinalButtons.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setFinalButtons)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _setConfirmationBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setConfirmationBtn.js */ "./src/components/gameContainer/GUI/placeShipsTool/setConfirmationBtn.js");
/* harmony import */ var _setTryAgainBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setTryAgainBtn.js */ "./src/components/gameContainer/GUI/placeShipsTool/setTryAgainBtn.js");



function setFinalButtons(newLegend, confirmationFn, tryAgainFn) {
  const pst = document.getElementById('pst');
  // Hide temporary pst container
  pst.classList.remove('show');
  setTimeout(() => {
    // Remove unnecesary elements from previous step
    while (pst.firstChild) {
      pst.removeChild(pst.firstChild);
    }
    // Set new orientation to user
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'p', [], newLegend, 'legend');
    // Set confirmation button
    (0,_setConfirmationBtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(confirmationFn);
    // Set try again button
    (0,_setTryAgainBtn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tryAgainFn);
  }, 500);
  // Show pst container
  setTimeout(() => {
    pst.classList.add('show');
  }, 500);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually.js":
/*!************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setManually)
/* harmony export */ });
/* harmony import */ var _setManually_addElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setManually/addElements.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually/addElements.js");
/* harmony import */ var _setManually_setShipsOnPST_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setManually/setShipsOnPST.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually/setShipsOnPST.js");
/* harmony import */ var _setManually_setDragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setManually/setDragAndDrop.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually/setDragAndDrop.js");
/* harmony import */ var _setManually_changeDirection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setManually/changeDirection.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually/changeDirection.js");




function setManually() {
  // pst stands for place-ships tool
  const pst = document.getElementById('pst');
  // Hide temporary pst container
  pst.classList.remove('show');
  setTimeout(() => {
    // Delete html elements from previous step
    while (pst.firstChild) {
      pst.removeChild(pst.firstChild);
    }
    // Create user advice, change ships direction button and draggable ships container
    (0,_setManually_addElements_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst);
    // Set draggable ships on tool container
    (0,_setManually_setShipsOnPST_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    // Add functionality to button
    const directionBtn = document.getElementById('directionBtn');
    directionBtn.addEventListener('click', () => {
      (0,_setManually_changeDirection_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    // Set drag and drop functionalities to ships and gameboard
    (0,_setManually_setDragAndDrop_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }, 500);
  // Show pst container
  setTimeout(() => {
    pst.classList.add('show');
  }, 500);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually/addElements.js":
/*!************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually/addElements.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addElements)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../assets/arrow.svg */ "./assets/arrow.svg");


function addElements(pst) {
  // Create user advice
  const legend = 'For a better experience, please take ships by the center.';
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'p', [], legend, 'legend');
  // Create change ships direction button
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'button', [], 'Change direction', 'directionBtn', [{
    attribute: 'type',
    value: 'button'
  }]);
  const directionBtn = document.getElementById('directionBtn');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(directionBtn, 'img', [], '', 'directionIcon', [{
    attribute: 'src',
    value: _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1__
  }, {
    attribute: 'alt',
    value: 'directionIcon'
  }]);
  // create draggable ships container
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'div', [], '', 'shipsContainer');
  const shipsContainer = document.getElementById('shipsContainer');
  for (let i = 0; i < 3; i++) {
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shipsContainer, 'div', ['pstRow']);
  }
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually/changeDirection.js":
/*!****************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually/changeDirection.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeDirection)
/* harmony export */ });
function changeDirection() {
  const ships = document.querySelectorAll('.pstShip');
  let direction;
  ships.forEach(ship => {
    if (ship.classList.contains('placedShip') === false) {
      if (ship.classList.contains('vertical')) {
        direction = 'horizontal';
        ship.classList.remove('vertical', 'rotate');
        ship.classList.add('horizontal');
      } else {
        direction = 'vertical';
        ship.classList.remove('horizontal');
        ship.classList.add('vertical', 'rotate');
      }
    }
  });
  const icon = document.getElementById('directionIcon');
  if (direction === 'vertical') {
    icon.style.transform = 'rotate(0deg)';
    icon.style.transition = 'transform 0.2s ease-in-out';
  } else {
    icon.style.transform = 'rotate(-90deg)';
    icon.style.transition = 'transform 0.2s ease-in-out';
  }
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually/confirmation.js":
/*!*************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually/confirmation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _shipsCoordinates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipsCoordinates.js */ "./src/components/gameContainer/GUI/placeShipsTool/shipsCoordinates.js");
/* harmony import */ var _game_operations_placeShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../game/operations/placeShip.js */ "./src/game/operations/placeShip.js");



const playerName = () => {
  if ("game" in _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current) return _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.name;else return undefined;
};
const legend = () => {
  return `Good job ${playerName()}! Now please confirm your selection or try again.`;
};
const gameboard = () => {
  if ("game" in _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current) return _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.gameboard;else return undefined;
};
const fn = () => _shipsCoordinates_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(el => (0,_game_operations_placeShip_js__WEBPACK_IMPORTED_MODULE_2__["default"])(gameboard(), el));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  legend,
  fn
});

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually/setDragAndDrop.js":
/*!***************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually/setDragAndDrop.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setDragAndDrop)
/* harmony export */ });
/* harmony import */ var _dragAndDrop_dragStart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dragAndDrop/dragStart.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragStart.js");
/* harmony import */ var _dragAndDrop_dragOver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dragAndDrop/dragOver.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragOver.js");
/* harmony import */ var _dragAndDrop_dragLeave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragAndDrop/dragLeave.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragLeave.js");
/* harmony import */ var _dragAndDrop_dragEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dragAndDrop/dragEnd.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnd.js");
/* harmony import */ var _dragAndDrop_dragEnter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dragAndDrop/dragEnter.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/dragEnter.js");
/* harmony import */ var _dragAndDrop_drop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dragAndDrop/drop.js */ "./src/components/gameContainer/GUI/placeShipsTool/dragAndDrop/drop.js");






function setDragAndDrop() {
  setTimeout(() => {
    const ships = document.querySelectorAll('.pstShip');
    ships.forEach(ship => {
      ship.addEventListener('dragstart', _dragAndDrop_dragStart_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      ship.addEventListener('dragend', _dragAndDrop_dragEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    });
    const cells = document.querySelectorAll('.pgbc');
    cells.forEach(cell => {
      cell.addEventListener('dragenter', _dragAndDrop_dragEnter_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      cell.addEventListener('dragover', _dragAndDrop_dragOver_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      cell.addEventListener('dragleave', _dragAndDrop_dragLeave_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      cell.addEventListener('drop', _dragAndDrop_drop_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    });
  }, 1000);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setManually/setShipsOnPST.js":
/*!**************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setManually/setShipsOnPST.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setShipsOnPST)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");

function setShipsOnPST() {
  const rows = document.querySelectorAll('.pstRow');
  // The ships' length was set up in the CSS file
  const classes = ['pstShip', 'vertical', 'rotate'];
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rows[0], 'div', classes, '', 'pShip6', [{
    attribute: 'draggable',
    value: 'true'
  }]); // Ship with 6 cells length
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rows[1], 'div', classes, '', 'pShip5', [{
    attribute: 'draggable',
    value: 'true'
  }]); // Ship with 5 cells length
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rows[1], 'div', classes, '', 'pShip2', [{
    attribute: 'draggable',
    value: 'true'
  }]); // Ship with 2 cells length
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rows[2], 'div', classes, '', 'pShip4', [{
    attribute: 'draggable',
    value: 'true'
  }]); // Ship with 4 cells length
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rows[2], 'div', classes, '', 'pShip3', [{
    attribute: 'draggable',
    value: 'true'
  }]); // Ship with 3 cells length
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly.js":
/*!************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setRandomly.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRandomly)
/* harmony export */ });
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _setFinalButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFinalButtons.js */ "./src/components/gameContainer/GUI/placeShipsTool/setFinalButtons.js");
/* harmony import */ var _setRandomly_confirmation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setRandomly/confirmation.js */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/confirmation.js");
/* harmony import */ var _setRandomly_getId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setRandomly/getId.js */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/getId.js");
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _setRandomly_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setRandomly/style.css */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css");





 // eslint-disable-line no-unused-vars

function setRandomly() {
  // Add confirmation and try again buttons
  const legend = _setRandomly_confirmation_js__WEBPACK_IMPORTED_MODULE_2__["default"].legend;
  (0,_setFinalButtons_js__WEBPACK_IMPORTED_MODULE_1__["default"])(legend, _setRandomly_confirmation_js__WEBPACK_IMPORTED_MODULE_2__["default"].fn, setRandomly);
  // Get ships coordinates
  const setPlayerShipsRandomly = _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.setPlayerShipsRandomly;
  const shipsCoordinates = setPlayerShipsRandomly(1);
  // Apply style to corresponding DOM cells
  shipsCoordinates.forEach(shipCoordinates => {
    const shipLength = shipCoordinates.length;
    const direction = (() => {
      return shipCoordinates[0][0] === shipCoordinates[1][0] ? 'horizontal' : 'vertical';
    })();
    const firstCell = document.getElementById((0,_setRandomly_getId_js__WEBPACK_IMPORTED_MODULE_3__["default"])(shipCoordinates[0][0], shipCoordinates[0][1]));
    const shipClasses = [direction, 'randomlyPlacedShip'];
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstCell, 'div', shipClasses, '', `l${shipLength}ship`);
    setTimeout(() => {
      for (let i = 0; i < shipLength; i++) {
        const row = shipCoordinates[i][0];
        const col = shipCoordinates[i][1];
        const id = (0,_setRandomly_getId_js__WEBPACK_IMPORTED_MODULE_3__["default"])(row, col);
        const cell = document.getElementById(id);
        cell.classList.add('unavailableCell');
      }
      const ships = document.querySelectorAll('.randomlyPlacedShip');
      ships.forEach(ship => {
        ship.classList.add('show');
      });
    }, 500);
  });
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/confirmation.js":
/*!*************************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setRandomly/confirmation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const legend = 'Confirm the ships placement or try again.';
const fn = () => {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  legend,
  fn
});

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly/getId.js":
/*!******************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setRandomly/getId.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getId)
/* harmony export */ });
function getId(row, col) {
  let r = (() => {
    return row === 0 ? '' : row;
  })();
  return 'pgbc' + r + col;
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/setTryAgainBtn.js":
/*!***************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/setTryAgainBtn.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTryAgainBtn)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameboards/setPlayerGameboard.js */ "./src/components/gameContainer/GUI/gameboards/setPlayerGameboard.js");
/* harmony import */ var _assets_repeat_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/repeat-outline.svg */ "./assets/repeat-outline.svg");



function setTryAgainBtn(tryAgainFn) {
  const pst = document.getElementById('pst');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pst, 'button', [], 'Let me try again', 'tryAgainBtn', [{
    attribute: 'type',
    value: 'button'
  }]);
  const tryAgainBtn = document.getElementById('tryAgainBtn');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tryAgainBtn, 'img', [], '', 'repeatIcon', [{
    attribute: 'src',
    value: _assets_repeat_outline_svg__WEBPACK_IMPORTED_MODULE_2__
  }, {
    attribute: 'alt',
    value: 'repeat icon'
  }]);
  tryAgainBtn.addEventListener('click', () => {
    pst.classList.remove('show');
    const playerSection = document.getElementById('playerSection');
    playerSection.classList.remove('show');
    setTimeout(() => {
      playerSection.remove();
      setTimeout(() => {
        (0,_gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      }, 250);
    }, 500);
    setTimeout(() => {
      tryAgainFn();
      setTimeout(() => {
        const newPlayerSection = document.getElementById('playerSection');
        newPlayerSection.classList.add('show');
      }, 500);
    }, 1000);
  });
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/placeShipsTool/shipsCoordinates.js":
/*!*****************************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/shipsCoordinates.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([]);

/***/ }),

/***/ "./src/components/gameContainer/GUI/setGameContainer.js":
/*!**************************************************************!*\
  !*** ./src/components/gameContainer/GUI/setGameContainer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGameContainer)
/* harmony export */ });
/* harmony import */ var _gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboards/setPlayerGameboard.js */ "./src/components/gameContainer/GUI/gameboards/setPlayerGameboard.js");
/* harmony import */ var _setPlaceShipsTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPlaceShipsTool.js */ "./src/components/gameContainer/GUI/setPlaceShipsTool.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/gameContainer/GUI/style.css");


 // eslint-disable-line no-unused-vars

function setGameContainer() {
  const form = document.querySelector('form');
  form.classList.remove('show');
  setTimeout(() => {
    document.querySelector('form').remove();
    (0,_setPlaceShipsTool_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }, 500);
  setTimeout(() => {
    const playerSection = document.getElementById('playerSection');
    const pst = document.getElementById('pst'); // pst stands for place ships tool
    playerSection.classList.add('show');
    pst.classList.add('show');
  }, 750);
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/setPanel.js":
/*!******************************************************!*\
  !*** ./src/components/gameContainer/GUI/setPanel.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPanel)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/play.js */ "./src/game/play.js");


function setPanel() {
  const generalContainer = document.getElementById('generalContainer');
  const playerSection = document.getElementById('playerSection');
  const panel = document.createElement('section');
  panel.setAttribute('id', 'panel');
  panel.classList.add('show');
  generalContainer.insertBefore(panel, playerSection);
  const playerName = _game_play_js__WEBPACK_IMPORTED_MODULE_1__["default"].current.game.player1.name;
  const legend = `It's your turn ${playerName}:`;
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(panel, 'p', [], legend, 'basicOrientation');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(panel, 'p', [], 'Attack!', 'animationText');
}

/***/ }),

/***/ "./src/components/gameContainer/GUI/setPlaceShipsTool.js":
/*!***************************************************************!*\
  !*** ./src/components/gameContainer/GUI/setPlaceShipsTool.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPlaceShipsTool)
/* harmony export */ });
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _placeShipsTool_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeShipsTool/style.css */ "./src/components/gameContainer/GUI/placeShipsTool/style.css");
/* harmony import */ var _assets_shuffle_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/shuffle-outline.svg */ "./assets/shuffle-outline.svg");
/* harmony import */ var _assets_hand_right_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/hand-right-outline.svg */ "./assets/hand-right-outline.svg");
/* harmony import */ var _placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeShipsTool/setRandomly.js */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly.js");
/* harmony import */ var _placeShipsTool_setManually_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placeShipsTool/setManually.js */ "./src/components/gameContainer/GUI/placeShipsTool/setManually.js");


 // eslint-disable-line no-unused-vars




function setPlaceShipsTool() {
  const generalContainer = document.getElementById('generalContainer');
  // Create pst container
  // pst stands for place-ships tool
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(generalContainer, 'div', [], '', 'pst');
  const pst = document.getElementById('pst');
  // Create user advice
  const playerName = _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.name;
  const legend = `Hi ${playerName}! Please select how you want to place your navy:`;
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pst, 'p', [], legend, 'legend');
  // Create set randomly button
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pst, 'button', [], 'Set randomly', 'randomlyBtn');
  const randomlyBtn = document.getElementById('randomlyBtn');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(randomlyBtn, 'img', [], '', 'randomIcon', [{
    attribute: 'src',
    value: _assets_shuffle_outline_svg__WEBPACK_IMPORTED_MODULE_3__
  }, {
    attribute: 'alt',
    value: 'random icon'
  }]);
  randomlyBtn.addEventListener('click', () => {
    (0,_placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
  // Create set manually button
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pst, 'button', [], 'Set manually', 'manuallyBtn');
  const manuallyBtn = document.getElementById('manuallyBtn');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(manuallyBtn, 'img', [], '', 'randomIcon', [{
    attribute: 'src',
    value: _assets_hand_right_outline_svg__WEBPACK_IMPORTED_MODULE_4__
  }, {
    attribute: 'alt',
    value: 'hand icon'
  }]);
  manuallyBtn.addEventListener('click', () => {
    (0,_placeShipsTool_setManually_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  });
}

/***/ }),

/***/ "./src/components/gameContainer/end.js":
/*!*********************************************!*\
  !*** ./src/components/gameContainer/end.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ end)
/* harmony export */ });
function end(legendWinner) {
  const basicOrientation = document.getElementById('basicOrientation');
  basicOrientation.textContent = 'Game over';
  const animationText = document.getElementById('animationText');
  animationText.textContent = legendWinner;
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'none';
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/setup.js":
/*!***********************************************!*\
  !*** ./src/components/gameContainer/setup.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _GUI_setGameContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUI/setGameContainer.js */ "./src/components/gameContainer/GUI/setGameContainer.js");
/* harmony import */ var _game_setGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/setGame.js */ "./src/game/setGame.js");
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/play.js */ "./src/game/play.js");



function setup() {
  // Start game and set up players name
  const playerName = document.querySelector('input').value;
  _game_play_js__WEBPACK_IMPORTED_MODULE_2__["default"].current = (0,_game_setGame_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _game_play_js__WEBPACK_IMPORTED_MODULE_2__["default"].current.setPlayerName(1, playerName);
  _game_play_js__WEBPACK_IMPORTED_MODULE_2__["default"].current.setPlayerName(2, 'Machine');
  // Place machine ships
  _game_play_js__WEBPACK_IMPORTED_MODULE_2__["default"].current.setPlayerShipsRandomly(2);
  // We proceed by removing the form and adding player gameboard to the DOM.
  (0,_GUI_setGameContainer_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/components/gameContainer/start.js":
/*!***********************************************!*\
  !*** ./src/components/gameContainer/start.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _GUI_setPanel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUI/setPanel.js */ "./src/components/gameContainer/GUI/setPanel.js");
/* harmony import */ var _GUI_gameboards_setMachineGameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI/gameboards/setMachineGameboard.js */ "./src/components/gameContainer/GUI/gameboards/setMachineGameboard.js");


function start() {
  const generalContainer = document.getElementById('generalContainer');
  (0,_GUI_setPanel_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  (0,_GUI_gameboards_setMachineGameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  setTimeout(() => {
    generalContainer.classList.remove('hide');
  }, 500);
}

/***/ }),

/***/ "./src/game/factories/setGameboard.js":
/*!********************************************!*\
  !*** ./src/game/factories/setGameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGameboard)
/* harmony export */ });
function setGameboard() {
  const gameboard = [];
  const cell = () => {
    return {
      attacked: false
    };
  };
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) row.push(cell());
    gameboard.push(row);
  }
  return gameboard;
}

/***/ }),

/***/ "./src/game/factories/setPlayers.js":
/*!******************************************!*\
  !*** ./src/game/factories/setPlayers.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPlayers)
/* harmony export */ });
/* harmony import */ var _setGameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGameboard.js */ "./src/game/factories/setGameboard.js");

function setPlayers() {
  return {
    player1: {
      name: undefined,
      gameboard: (0,_setGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      wins: 0,
      active: true
    },
    player2: {
      name: undefined,
      gameboard: (0,_setGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      wins: 0,
      active: false
    }
  };
}

/***/ }),

/***/ "./src/game/factories/setShip.js":
/*!***************************************!*\
  !*** ./src/game/factories/setShip.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setShip)
/* harmony export */ });
function setShip(length) {
  const ship = {
    length,
    hits: 0,
    isSunk: () => {
      return ship.hits === ship.length ? true : false;
    },
    hit: () => {
      ship.hits += 1;
    }
  };
  return ship;
}

/***/ }),

/***/ "./src/game/machine/attackHorizontal.js":
/*!**********************************************!*\
  !*** ./src/game/machine/attackHorizontal.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackHorizontal)
/* harmony export */ });
/* harmony import */ var _getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAttackCoordinates.js */ "./src/game/machine/getAttackCoordinates.js");

function attackHorizontal(playerGameboard, row, col) {
  if (col - 1 >= 0 && 'ship' in playerGameboard[row][col] && !playerGameboard[row][col - 1].attacked) {
    return [row, col - 1];
  } else {
    let idx = col + 1;
    while (playerGameboard[row][idx].attacked && 'ship' in playerGameboard[row][idx]) {
      idx++;
    }
    return idx <= 9 && !playerGameboard[row][idx].attacked ? [row, idx] : (0,_getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, row, col, undefined);
  }
}

/***/ }),

/***/ "./src/game/machine/attackRandomly.js":
/*!********************************************!*\
  !*** ./src/game/machine/attackRandomly.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackRandomly)
/* harmony export */ });
/* harmony import */ var _operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operations/receiveAttack.js */ "./src/game/operations/receiveAttack.js");

function attackRandomly(playerGameboard) {
  let validCoordinates = false;
  let coordinates;
  while (validCoordinates === false) {
    const randomCellNum = (() => {
      return Math.floor(Math.random() * 100);
    })();
    const row = (() => {
      return randomCellNum < 10 ? 0 : Math.floor(randomCellNum / 10);
    })();
    const col = (() => {
      return randomCellNum < 10 ? randomCellNum : randomCellNum % 10;
    })();
    if (!playerGameboard[row][col].attacked) {
      coordinates = [row, col];
      validCoordinates = true;
    }
  }
  (0,_operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, coordinates);
  return coordinates;
}

/***/ }),

/***/ "./src/game/machine/attackVertical.js":
/*!********************************************!*\
  !*** ./src/game/machine/attackVertical.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackVertical)
/* harmony export */ });
/* harmony import */ var _getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAttackCoordinates.js */ "./src/game/machine/getAttackCoordinates.js");

function attackVertical(playerGameboard, row, col) {
  if (row - 1 >= 0 && 'ship' in playerGameboard[row][col] && !playerGameboard[row - 1][col].attacked) {
    return [row - 1, col];
  } else {
    let idx = row + 1;
    while (playerGameboard[idx][col].attacked && 'ship' in playerGameboard[idx][col]) {
      ++idx;
    }
    return idx <= 9 && !playerGameboard[idx][col].attacked ? [idx, col] : (0,_getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, row, col, 'horizontal');
  }
}

/***/ }),

/***/ "./src/game/machine/attackWithUndefinedDirection.js":
/*!**********************************************************!*\
  !*** ./src/game/machine/attackWithUndefinedDirection.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackWithUndefinedDirection)
/* harmony export */ });
function attackWithUndefinedDirection(playerGameboard, row, col) {
  if (row - 1 >= 0 && !playerGameboard[row - 1][col].attacked) {
    return [row - 1, col];
  } else if (row + 1 <= 9 && !playerGameboard[row + 1][col].attacked) {
    return [row + 1, col];
  } else if (col - 1 >= 0 && !playerGameboard[row][col - 1].attacked) {
    return [row, col - 1];
  } else if (col + 1 <= 9 && !playerGameboard[row][col + 1].attacked) {
    return [row, col + 1];
  }
}

/***/ }),

/***/ "./src/game/machine/getAttackCoordinates.js":
/*!**************************************************!*\
  !*** ./src/game/machine/getAttackCoordinates.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAttackCoordinates)
/* harmony export */ });
/* harmony import */ var _attackVertical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attackVertical.js */ "./src/game/machine/attackVertical.js");
/* harmony import */ var _attackHorizontal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackHorizontal.js */ "./src/game/machine/attackHorizontal.js");
/* harmony import */ var _attackWithUndefinedDirection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackWithUndefinedDirection.js */ "./src/game/machine/attackWithUndefinedDirection.js");



function getAttackCoordinates(playerGameboard, row, col, direction) {
  console.log(direction);
  if (direction === 'vertical') {
    return (0,_attackVertical_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, row, col);
  } else if (direction === 'horizontal') {
    return (0,_attackHorizontal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(playerGameboard, row, col);
  } else if (direction === undefined) {
    return (0,_attackWithUndefinedDirection_js__WEBPACK_IMPORTED_MODULE_2__["default"])(playerGameboard, row, col);
  }
}

/***/ }),

/***/ "./src/game/machine/identifyDirection.js":
/*!***********************************************!*\
  !*** ./src/game/machine/identifyDirection.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ identifyDirection)
/* harmony export */ });
function identifyDirection(playerGameboard, row, col) {
  let direction = undefined;
  const top = (() => {
    return row - 1 >= 0 ? playerGameboard[row - 1][col] : false;
  })();
  const bottom = (() => {
    return row + 1 <= 9 ? playerGameboard[row + 1][col] : false;
  })();
  const left = (() => {
    return col - 1 >= 0 ? playerGameboard[row][col - 1] : false;
  })();
  const right = (() => {
    return col + 1 <= 9 ? playerGameboard[row][col + 1] : false;
  })();
  if (top && top.attacked && 'ship' in top) {
    direction = 'vertical';
  } else if (bottom && bottom.attacked && 'ship' in bottom) {
    direction = 'vertical';
  } else if (left && left.attacked && 'ship' in left) {
    direction = 'horizontal';
  } else if (right && right.attacked && 'ship' in right) {
    direction = 'horizontal';
  }
  return direction;
}

/***/ }),

/***/ "./src/game/operations/allShipsSunk.js":
/*!*********************************************!*\
  !*** ./src/game/operations/allShipsSunk.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allShipsSunk)
/* harmony export */ });
function allShipsSunk(gameboard) {
  let status = true;
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[i].length; j++) {
      const place = gameboard[i][j];
      if ('ship' in place && place.ship.isSunk() === false) {
        status = false;
      }
    }
  }
  return status;
}

/***/ }),

/***/ "./src/game/operations/placeShip.js":
/*!******************************************!*\
  !*** ./src/game/operations/placeShip.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeShip)
/* harmony export */ });
/* harmony import */ var _factories_setShip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/setShip.js */ "./src/game/factories/setShip.js");

function placeShip(gameboard, coordinates) {
  const start = coordinates[0];
  const end = coordinates[1];
  const cells = [];
  const axis = (() => {
    const x = (() => {
      return start[0] === end[0] ? true : false;
    })();
    const length = (() => {
      return x === true ? end[1] - start[1] + 1 : end[0] - start[0] + 1;
    })();
    return {
      x,
      length
    };
  })();
  if (axis.x === true) {
    for (let i = 0; i < axis.length; i++) {
      cells.push([start[0], start[1] + i]);
    }
  } else {
    for (let i = 0; i < axis.length; i++) {
      cells.push([start[0] + i, start[1]]);
    }
  }
  const ship = (0,_factories_setShip_js__WEBPACK_IMPORTED_MODULE_0__["default"])(axis.length);
  cells.forEach(cell => {
    const place = gameboard[cell[0]][cell[1]];
    if ('ship' in place) return new Error('Ship in place');else gameboard[cell[0]][cell[1]].ship = ship;
  });
}

/***/ }),

/***/ "./src/game/operations/receiveAttack.js":
/*!**********************************************!*\
  !*** ./src/game/operations/receiveAttack.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ receiveAttack)
/* harmony export */ });
function receiveAttack(gameboard, coordinates) {
  const row = coordinates[0];
  const col = coordinates[1];
  const place = gameboard[row][col];
  if (place.attacked === true) return new Error('Place already attacked.');
  place.attacked = true;
  if ('ship' in place) {
    place.ship.hit();
    return true;
  } else return false;
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates.js":
/*!************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setShipsOnRandomCoordinates)
/* harmony export */ });
/* harmony import */ var _setShipsOnRandomCoordinates_getRandomShipCoordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setShipsOnRandomCoordinates/getRandomShipCoordinates.js */ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates.js");
/* harmony import */ var _setShipsOnRandomCoordinates_validateCoordinates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setShipsOnRandomCoordinates/validateCoordinates.js */ "./src/game/operations/setShipsOnRandomCoordinates/validateCoordinates.js");
/* harmony import */ var _placeShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeShip.js */ "./src/game/operations/placeShip.js");



function setShipsOnRandomCoordinates(gameboard) {
  const shipsLenghts = [6, 5, 4, 3, 2];
  const allShipsCoordinates = [];
  shipsLenghts.forEach(shipLength => {
    let placedShip = false;
    while (placedShip === false) {
      const coordinates = (0,_setShipsOnRandomCoordinates_getRandomShipCoordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
      const validation = (0,_setShipsOnRandomCoordinates_validateCoordinates_js__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, gameboard);
      if (validation === true) {
        const startCoordinates = [coordinates[0][0], coordinates[0][1]];
        const idx = coordinates.length - 1;
        const endCoordinates = [coordinates[idx][0], coordinates[idx][1]];
        const shipCoordinates = [startCoordinates, endCoordinates];
        (0,_placeShip_js__WEBPACK_IMPORTED_MODULE_2__["default"])(gameboard, shipCoordinates);
        allShipsCoordinates.push(coordinates);
        placedShip = true;
      }
    }
  });
  return allShipsCoordinates;
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates.js":
/*!*************************************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRandomShipCoordinates)
/* harmony export */ });
/* harmony import */ var _getRandomShipCoordinates_getRandomCellNum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomShipCoordinates/getRandomCellNum.js */ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomCellNum.js");
/* harmony import */ var _getRandomShipCoordinates_getRandomDirection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomShipCoordinates/getRandomDirection.js */ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomDirection.js");
/* harmony import */ var _getRandomShipCoordinates_getCoordinates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRandomShipCoordinates/getCoordinates.js */ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getCoordinates.js");



function getRandomShipCoordinates(shipLength) {
  const startCellNum = (0,_getRandomShipCoordinates_getRandomCellNum_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const direction = (0,_getRandomShipCoordinates_getRandomDirection_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const coordinates = (0,_getRandomShipCoordinates_getCoordinates_js__WEBPACK_IMPORTED_MODULE_2__["default"])(direction, startCellNum, shipLength);
  return coordinates;
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getCoordinates.js":
/*!****************************************************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getCoordinates.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCoordinates)
/* harmony export */ });
function getCoordinates(direction, startCellNum, shipLength) {
  const coordinates = [];
  const row = (() => {
    return startCellNum < 10 ? 0 : Math.floor(startCellNum / 10);
  })();
  const col = (() => {
    return startCellNum < 10 ? startCellNum : startCellNum % 10;
  })();
  if (direction === 'vertical') {
    if (9 - (shipLength - 1) >= row) {
      for (let i = row; i < row + shipLength; i++) {
        coordinates.push([i, col]);
      }
    } else if (row - (shipLength - 1) >= 0) {
      for (let i = row; i > row - shipLength; i--) {
        coordinates.push([i, col]);
      }
    }
  } else if (direction === 'horizontal') {
    if (9 - (shipLength - 1) >= col) {
      for (let i = col; i < col + shipLength; i++) {
        coordinates.push([row, i]);
      }
    } else if (col - (shipLength - 1) >= 0) {
      for (let i = col; i > col - shipLength; i--) {
        coordinates.push([row, i]);
      }
    }
  }
  return coordinates.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomCellNum.js":
/*!******************************************************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomCellNum.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRandomCellNum)
/* harmony export */ });
function getRandomCellNum() {
  return Math.floor(Math.random() * 100);
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomDirection.js":
/*!********************************************************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates/getRandomShipCoordinates/getRandomDirection.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRandomDirection)
/* harmony export */ });
function getRandomDirection() {
  return Math.round(Math.random()) === 0 ? 'horizontal' : 'vertical';
}

/***/ }),

/***/ "./src/game/operations/setShipsOnRandomCoordinates/validateCoordinates.js":
/*!********************************************************************************!*\
  !*** ./src/game/operations/setShipsOnRandomCoordinates/validateCoordinates.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateCoordinates)
/* harmony export */ });
function validateCoordinates(coordinates, gameboard) {
  for (let i = 0; i < coordinates.length; i++) {
    const row = coordinates[i][0];
    const col = coordinates[i][1];
    const place = gameboard[row][col];
    if ('ship' in place) return false;
  }
  return true;
}

/***/ }),

/***/ "./src/game/play.js":
/*!**************************!*\
  !*** ./src/game/play.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  current: null
});

/***/ }),

/***/ "./src/game/setGame.js":
/*!*****************************!*\
  !*** ./src/game/setGame.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGame)
/* harmony export */ });
/* harmony import */ var _factories_setPlayers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/setPlayers.js */ "./src/game/factories/setPlayers.js");
/* harmony import */ var _operations_placeShip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/placeShip.js */ "./src/game/operations/placeShip.js");
/* harmony import */ var _operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/receiveAttack.js */ "./src/game/operations/receiveAttack.js");
/* harmony import */ var _operations_allShipsSunk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/allShipsSunk.js */ "./src/game/operations/allShipsSunk.js");
/* harmony import */ var _factories_setGameboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/setGameboard.js */ "./src/game/factories/setGameboard.js");
/* harmony import */ var _operations_setShipsOnRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations/setShipsOnRandomCoordinates.js */ "./src/game/operations/setShipsOnRandomCoordinates.js");






function setGame() {
  const game = (0,_factories_setPlayers_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const getGameboard = playerId => {
    return game[`player${playerId}`].gameboard;
  };
  const setPlayerName = (id, name) => {
    game[`player${id}`].name = name;
  };
  const setPlayerShips = (playerId, ships) => {
    const gameboard = getGameboard(playerId);
    ships.forEach(ship => {
      (0,_operations_placeShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboard, ship);
    });
  };
  const restoreGameboard = playerId => {
    return game[`player${playerId}`].gameboard = (0,_factories_setGameboard_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  };
  const setPlayerShipsRandomly = playerId => {
    restoreGameboard(playerId);
    let gameboard = getGameboard(playerId);
    const randomCoordinates = (0,_operations_setShipsOnRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_5__["default"])(gameboard);
    return randomCoordinates;
  };
  return {
    game,
    getGameboard,
    setPlayerName,
    setPlayerShips,
    setPlayerShipsRandomly,
    receiveAttack: _operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    allShipsSunk: _operations_allShipsSunk_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
}

/***/ }),

/***/ "./src/game/setMachine.js":
/*!********************************!*\
  !*** ./src/game/setMachine.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ machine)
/* harmony export */ });
/* harmony import */ var _machine_identifyDirection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./machine/identifyDirection.js */ "./src/game/machine/identifyDirection.js");
/* harmony import */ var _machine_getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine/getAttackCoordinates.js */ "./src/game/machine/getAttackCoordinates.js");
/* harmony import */ var _machine_attackRandomly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./machine/attackRandomly.js */ "./src/game/machine/attackRandomly.js");
/* harmony import */ var _operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/receiveAttack.js */ "./src/game/operations/receiveAttack.js");




function machine(gameboard) {
  const playerGameboard = gameboard;
  const activeTarget = () => {
    for (let i = 0; i < playerGameboard.length; i++) {
      for (let j = 0; j < playerGameboard[i].length; j++) {
        const place = playerGameboard[i][j];
        if (place.attacked) {
          if ('ship' in place && !place.ship.isSunk()) {
            const direction = (0,_machine_identifyDirection_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerGameboard, i, j);
            return (0,_machine_getAttackCoordinates_js__WEBPACK_IMPORTED_MODULE_1__["default"])(playerGameboard, i, j, direction);
          }
        }
      }
    }
    return [];
  };
  const attack = () => {
    const target = activeTarget();
    if (target.length === 0) {
      return (0,_machine_attackRandomly_js__WEBPACK_IMPORTED_MODULE_2__["default"])(playerGameboard);
    } else {
      (0,_operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_3__["default"])(playerGameboard, target);
      console.log(target);
      return target;
    }
  };
  return {
    attack
  };
}

/***/ }),

/***/ "./src/services/createHtmlElement.js":
/*!*******************************************!*\
  !*** ./src/services/createHtmlElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHtmlElement)
/* harmony export */ });
function createHtmlElement(parent, type, arrayOfClasses, textContent, id, arrayOfAttributes) {
  const element = document.createElement(type);
  if (arrayOfClasses !== undefined && arrayOfClasses.length !== 0) {
    arrayOfClasses.forEach(className => {
      element.classList.add(className);
    });
  }
  if (textContent !== undefined) element.textContent = textContent;
  if (id !== undefined) element.id = id;
  if (arrayOfAttributes !== undefined && arrayOfAttributes.length !== 0) {
    arrayOfAttributes.forEach(obj => {
      element.setAttribute(obj.attribute, obj.value);
    });
  }
  parent.appendChild(element);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_form_setForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form/setForm.js */ "./src/components/form/setForm.js");


const playBtn = document.getElementById('playBtn');

// setTimeout is used to display DOM animations
playBtn.addEventListener('click', () => {
  setTimeout(() => {
    playBtn.remove();
  }, 500);
  setTimeout(() => {
    (0,_components_form_setForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // The game starts requesting the player's name
  }, 500);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnR0FBZ0csVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGdDQUFnQyxnQkFBZ0IsZUFBZSx3Q0FBd0MsR0FBRyxlQUFlLGVBQWUsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcsV0FBVyx3QkFBd0Isa0JBQWtCLHVCQUF1QiwwQkFBMEIsaUJBQWlCLG9DQUFvQyxzQ0FBc0MsMkJBQTJCLEdBQUcsbUJBQW1CO0FBQzdyQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3SEFBd0gsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLDBEQUEwRCxrQkFBa0IsMkNBQTJDLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsMkJBQTJCLHVCQUF1QixHQUFHLDhCQUE4Qiw0QkFBNEIsR0FBRyxlQUFlLDRCQUE0Qix5Q0FBeUMsR0FBRyxhQUFhLHlCQUF5QixzQ0FBc0MseUNBQXlDLEdBQUcsbUJBQW1CO0FBQy96QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QztBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0lBQXdJLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSw4Q0FBOEMsNEJBQTRCLG9DQUFvQywwQkFBMEIsbUJBQW1CLHlCQUF5QixpQkFBaUIsMkJBQTJCLGlCQUFpQixHQUFHLDhCQUE4QixpQkFBaUIseUNBQXlDLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLEdBQUcsd0JBQXdCLG1CQUFtQixtQkFBbUIsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLEdBQUcsd0JBQXdCLG1CQUFtQixtQkFBbUIsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLEdBQUcsd0JBQXdCLG1CQUFtQixtQkFBbUIsaUJBQWlCLEdBQUcsc0JBQXNCLG1CQUFtQixrQkFBa0IsZUFBZSxHQUFHLHdCQUF3QixtQkFBbUIsa0JBQWtCLGdCQUFnQixHQUFHLHNCQUFzQixtQkFBbUIsa0JBQWtCLGVBQWUsR0FBRyx3QkFBd0IsbUJBQW1CLGtCQUFrQixnQkFBZ0IsR0FBRyxtQkFBbUI7QUFDMXlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLDRIQUE0SCxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFFbkQsTUFBTWtKLE9BQU8sR0FBRy9QLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQzs7QUFFbEQ7QUFDQThQLE9BQU8sQ0FBQ3RQLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3RDQyxVQUFVLENBQUMsTUFBTTtJQUNmcVAsT0FBTyxDQUFDOU4sTUFBTSxDQUFDLENBQUM7RUFDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNQdkIsVUFBVSxDQUFDLE1BQU07SUFDZlosdUVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDVCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9mb3JtL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9mb3JtL3N0eWxlLmNzcz81YjI4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3N0eWxlLmNzcz83YWQxIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9zdHlsZS5jc3M/OGE3NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc3R5bGUuY3NzPzdlZTIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3N0eWxlLmNzcz8yMWYxIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9zZXRGb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL2dldENlbGxJZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9nZXRDb29yZGluYXRlc0Zyb21JZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9tYWNoaW5lQXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL21hY2hpbmUvYXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL21hY2hpbmUvZGlzcGxheUFuZEhpZGVTZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9wbGF5ZXJBdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvc2V0TWFjaGluZUdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9zZXRQbGF5ZXJHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdFbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdFbnRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJhZ0xlYXZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcmFnT3Zlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJhZ1N0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL2dldERPTUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL2dldEVsZW1lbnRzT25TaGlwQXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9nZXRHYW1lQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2Ryb3AvaWRlbnRpZnlFbGVtZW50c0luQXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9saW5rU2hpcFdpdGhDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL3NldHVwU2hpcFN0eWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRDb25maXJtYXRpb25CdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldEZpbmFsQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L2FkZEVsZW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRNYW51YWxseS9jaGFuZ2VEaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L2NvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkvc2V0RHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L3NldFNoaXBzT25QU1QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9jb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5L2dldElkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRUcnlBZ2FpbkJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2hpcHNDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvc2V0R2FtZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvc2V0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3NldFBsYWNlU2hpcHNUb29sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL2VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9zZXR1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9zdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZmFjdG9yaWVzL3NldEdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZmFjdG9yaWVzL3NldFBsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2ZhY3Rvcmllcy9zZXRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9tYWNoaW5lL2F0dGFja0hvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrUmFuZG9tbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvbWFjaGluZS9nZXRBdHRhY2tDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvbWFjaGluZS9pZGVudGlmeURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9hbGxTaGlwc1N1bmsuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvcGxhY2VTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3JlY2VpdmVBdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzL2dldFJhbmRvbUNlbGxOdW0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRSYW5kb21EaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL3ZhbGlkYXRlQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NldEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NldE1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb3JtIHtcblx0Z2FwOiAxLjVyZW07XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5mb3JtLnNob3cge1xuXHRvcGFjaXR5OiAxO1xufVxuXG5sYWJlbCwgaW5wdXQge1xuXHRmb250LXNpemU6IDN2aDtcbn1cblxuaW5wdXQge1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1jb2xvcjogYmxhY2tcbn1cblxuaW5wdXQ6Zm9jdXMge1xuXHRib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb3JtL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDLDhCQUE4QjtJQUMzQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvcm0ge1xcblxcdGdhcDogMS41cmVtO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvcm0uc2hvdyB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxubGFiZWwsIGlucHV0IHtcXG5cXHRmb250LXNpemU6IDN2aDtcXG59XFxuXFxuaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWNvbG9yOiBibGFja1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogNnB4IDZweCAxMHB4IGJsYWNrOztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3BsYXllckdhbWVib2FyZCwgI0FJR2FtZWJvYXJkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5wZ2JjLCAubWdiYyB7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBnYmM6aG92ZXIsIC5tZ2JjOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5hdHRhY2tlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG59XG5cbi5taXNzZWQge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA0OCwgNDgpO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlDQUFpQztDQUNqQyxvQ0FBb0M7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BsYXllckdhbWVib2FyZCwgI0FJR2FtZWJvYXJkIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ucGdiYywgLm1nYmMge1xcblxcdHdpZHRoOiAzMHB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBnYmM6aG92ZXIsIC5tZ2JjOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmF0dGFja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxufVxcblxcbi5taXNzZWQge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNDgsIDQ4KTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnJhbmRvbWx5UGxhY2VkU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY3Vyc29yOiBncmFiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5yYW5kb21seVBsYWNlZFNoaXAuc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4jbDZzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDE2OHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogMTBweDtcbn1cblxuI2w2c2hpcC5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbiNsNXNoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4jbDVzaGlwLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuI2w0c2hpcC52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAxMTJweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbiNsNHNoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxMTJweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4jbDNzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiA1cHg7XG59XG5cbiNsM3NoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiA4NHB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuI2wyc2hpcC52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogNXB4O1xufVxuXG4jbDJzaGlwLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBsZWZ0OiA1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yYW5kb21seVBsYWNlZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yYW5kb21seVBsYWNlZFNoaXAuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNsNnNoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDE2OHB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiAxMHB4O1xcbn1cXG5cXG4jbDZzaGlwLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNjhweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuI2w1c2hpcC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbiNsNXNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbDRzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTJweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHRvcDogMTBweDtcXG59XFxuXFxuI2w0c2hpcC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTEycHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbiNsM3NoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDg0cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICB0b3A6IDVweDtcXG59XFxuXFxuI2wzc2hpcC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogODRweDtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4jbDJzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiA1cHg7XFxufVxcblxcbiNsMnNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcHN0ID4gI2xlZ2VuZCB7XG5cdHdpZHRoOiAyODBweDtcbn1cblxuI3NoaXBzQ29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMHZ3O1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBzdFJvd3tcblx0aGVpZ2h0OiAzNXB4O1xuXHRtYXJnaW46IDA7XG59XG5cbi5wc3RTaGlwIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRib3gtc2hhZG93OiA2cHggNnB4IDZweCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Y3Vyc29yOiBncmFiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5wc3RTaGlwLmhvcml6b250YWw6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuI3BTaGlwNi5ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxNnB4O1xuXHR3aWR0aDogMTY4cHg7XG59XG5cbiNwU2hpcDUuaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDE0MHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cbiNwU2hpcDIuaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDU2cHg7XG5cdG1hcmdpbi1sZWZ0OiAxNjBweDtcbn1cblxuI3BTaGlwNC5ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxNnB4O1xuXHR3aWR0aDogMTEycHg7XG5cdG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbiNwU2hpcDMuaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDg0cHg7XG5cdG1hcmdpbi1sZWZ0OiAxNDBweDtcbn1cblxuLnJvdGF0ZSB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnJvdGF0ZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KSByb3RhdGUoMGRlZyk7XG5cdHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuI3BTaGlwNi52ZXJ0aWNhbCB7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDE2OHB4O1xufVxuXG4jcFNoaXA1LnZlcnRpY2FsIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTQwcHg7XG5cdG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuI3BTaGlwMi52ZXJ0aWNhbCB7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDU2cHg7XG5cdG1hcmdpbi1sZWZ0OiAxNjBweDtcbn1cblxuI3BTaGlwNC52ZXJ0aWNhbCB7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDExMnB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4jcFNoaXAzLnZlcnRpY2FsIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogODRweDtcblx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xufVxuXG4uZHJhZy1vdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XG59XG5cbi5oaWRlIHtcblx0b3BhY2l0eTogMDtcbn1cblxuLnBsYWNlZFNoaXAge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0bWFyZ2luOiAwO1xufVxuXG4udW5hdmFpbGFibGVDZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjMyLCAyMzYpO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2J0bkNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMTBweDtcbn1cblxuI3BzdCA+IGJ1dHRvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDI4MHB4O1xuXHRoZWlnaHQ6IDQ1cHg7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0cGFkZGluZy1sZWZ0OiA0MHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4jcHN0ID4gYnV0dG9uOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbiNwc3QgPiBidXR0b246YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTY2LCAzMik7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXM7XG59XG5cbiNwc3QgPiBidXR0b246Zm9jdXMge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IGJsYWNrO1xuXHRvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbmltZ3tcblx0d2lkdGg6IDMwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0ZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsYUFBYTtDQUNiLFlBQVk7Q0FDWixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksNENBQTRDO0NBQy9DLFVBQVU7SUFDUCxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxtQ0FBbUM7SUFDaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0NBQ0MsZUFBZTtJQUNaLDhCQUE4QjtDQUNqQyxVQUFVO0lBQ1AsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BzdCA+ICNsZWdlbmQge1xcblxcdHdpZHRoOiAyODBweDtcXG59XFxuXFxuI3NoaXBzQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wc3RSb3d7XFxuXFx0aGVpZ2h0OiAzNXB4O1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnBzdFNoaXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRib3gtc2hhZG93OiA2cHggNnB4IDZweCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdGN1cnNvcjogZ3JhYjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuLnBzdFNoaXAuaG9yaXpvbnRhbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbiNwU2hpcDYuaG9yaXpvbnRhbCB7XFxuXFx0aGVpZ2h0OiAxNnB4O1xcblxcdHdpZHRoOiAxNjhweDtcXG59XFxuXFxuI3BTaGlwNS5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDE0MHB4O1xcblxcdG1hcmdpbi1yaWdodDogODBweDtcXG59XFxuXFxuI3BTaGlwMi5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDU2cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2MHB4O1xcbn1cXG5cXG4jcFNoaXA0Lmhvcml6b250YWwge1xcblxcdGhlaWdodDogMTZweDtcXG5cXHR3aWR0aDogMTEycHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3BTaGlwMy5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDg0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xcbn1cXG5cXG4ucm90YXRlIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yb3RhdGU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpIHJvdGF0ZSgwZGVnKTtcXG5cXHR6LWluZGV4OiAyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4jcFNoaXA2LnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDE2OHB4O1xcbn1cXG5cXG4jcFNoaXA1LnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDE0MHB4O1xcblxcdG1hcmdpbi1yaWdodDogODBweDtcXG59XFxuXFxuI3BTaGlwMi52ZXJ0aWNhbCB7XFxuXFx0d2lkdGg6IDE2cHg7XFxuXFx0aGVpZ2h0OiA1NnB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxNjBweDtcXG59XFxuXFxuI3BTaGlwNC52ZXJ0aWNhbCB7XFxuXFx0d2lkdGg6IDE2cHg7XFxuXFx0aGVpZ2h0OiAxMTJweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jcFNoaXAzLnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDg0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xcbn1cXG5cXG4uZHJhZy1vdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleVxcbn1cXG5cXG4uaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnBsYWNlZFNoaXAge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnVuYXZhaWxhYmxlQ2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjMyLCAyMzYpO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYnRuQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAyODBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jcHN0ID4gYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cztcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbjpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7XFxuXFx0b3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbmltZ3tcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNDBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZ2VuZXJhbENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcblx0b3BhY2l0eTogMTtcblx0dHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNnZW5lcmFsQ29udGFpbmVyLmhpZGUge1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbn1cblxuI3BzdCwgI3BhbmVsIHtcblx0Z2FwOiAxMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xufVxuXG4jcHN0LCAjcGxheWVyU2VjdGlvbiwgI0FJR2FtZWJvYXJkLCAjcGFuZWwge1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcbn1cblxuI3BzdC5zaG93LCAjcGxheWVyU2VjdGlvbi5zaG93LCAjQUlHYW1lYm9hcmQuc2hvdywgI3BhbmVsLnNob3cge1xuXHRvcGFjaXR5OiAxO1xufVxuXG4jcGFuZWwgPiBwOm50aC1jaGlsZCgyKSB7XG5cdGZvbnQtc2l6ZTogNDVweDtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0Y29sb3I6IGJyb3duO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7Q0FDaEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7Q0FDViwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsU0FBUztDQUNULGFBQWE7QUFDZDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2dlbmVyYWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2dlbmVyYWxDb250YWluZXIuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BzdCwgI3BhbmVsIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0aGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI3BzdCwgI3BsYXllclNlY3Rpb24sICNBSUdhbWVib2FyZCwgI3BhbmVsIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcHN0LnNob3csICNwbGF5ZXJTZWN0aW9uLnNob3csICNBSUdhbWVib2FyZC5zaG93LCAjcGFuZWwuc2hvdyB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuI3BhbmVsID4gcDpudGgtY2hpbGQoMikge1xcblxcdGZvbnQtc2l6ZTogNDVweDtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGNvbG9yOiBicm93bjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiByZ2IoMTQsIDE1LCAxNCk7XG5cdGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMHZ3O1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcblx0Ym94LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsYWNrO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRmb250LXNpemU6IDV2aDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IFxufVxuXG5idXR0b246Zm9jdXMge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsNHB4KTtcbiBcdG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMsIHRyYW5zZm9ybSAuNXMsIG9wYWNpdHkgMXM7XG59XG5cbmhlYWRlciB7XG5cdG1hcmdpbi10b3A6IDEwdmg7XG5cdG1hcmdpbi1ib3R0b206IDEwdmg7XG5cdGZvbnQtc2l6ZTogbWluKDE1dncsIDgwcHgpO1xufVxuXG5mb290ZXIge1xuXHRwb3NpdGlvbjpmaXhlZDtcblx0Ym90dG9tOiAydmg7XG5cdGZvbnQtc2l6ZTogMnZoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIscUNBQXFDO0NBQ3JDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2IsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1DQUFtQztJQUNoQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CLFVBQVU7SUFDUiwyREFBMkQ7QUFDL0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsY0FBYztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Y29sb3I6IHJnYigxNCwgMTUsIDE0KTtcXG5cXHRmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRmb250LXNpemU6IDV2aDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCw0cHgpO1xcbiBcXHRvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cywgdHJhbnNmb3JtIC41cywgb3BhY2l0eSAxcztcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMHZoO1xcblxcdG1hcmdpbi1ib3R0b206IDEwdmg7XFxuXFx0Zm9udC1zaXplOiBtaW4oMTV2dywgODBweCk7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0cG9zaXRpb246Zml4ZWQ7XFxuXFx0Ym90dG9tOiAydmg7XFxuXFx0Zm9udC1zaXplOiAydmg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaHJvdWdob3V0IHRoZSBlbnRpcmUgcHJvamVjdCxcbi8vIGNyZWF0ZUh0bWxFbGVtZW50IGlzIHVzZWQgdG8gZWZmaWNpZW50bHkgYWRkIERPTSBlbGVtZW50c1xuaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzZXR1cCBmcm9tICcuLi9nYW1lQ29udGFpbmVyL3NldHVwLmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Rm9ybSgpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGdlbmVyYWxDb250YWluZXIsICdmb3JtJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGZvcm0sICdsYWJlbCcsIFtdLCAnRW50ZXIgeW91ciBuYW1lOicsICduYW1lTGFiZWwnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdmb3InLCB2YWx1ZTogJ3BsYXllck5hbWUnIH0sXG4gIF0pO1xuICBjcmVhdGVIdG1sRWxlbWVudChmb3JtLCAnaW5wdXQnLCBbXSwgJycsICdwbGF5ZXJOYW1lJywgW1xuICAgIHsgYXR0cmlidXRlOiAndHlwZScsIHZhbHVlOiAndGV4dCcgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ25hbWUnLCB2YWx1ZTogJ3BsYXllck5hbWUnIH0sXG4gICAgeyBhdHRyaWJ1dGU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnRW50ZXIgbmFtZScgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2F1dG9jb21wbGV0ZScsIHZhbHVlOiAnb24nIH0sXG4gIF0pO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZm9ybSwgJ2J1dHRvbicsIFtdLCAnU3RhcnQgZ2FtZScsICdzdGFydEJ0bicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3R5cGUnLCB2YWx1ZTogJ2J1dHRvbicgfSxcbiAgXSk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0dXAoKTsgLy8gT25jZSB1c2VyIGVudGVyIHRoZWlyIG5hbWUsIHRoZSBnYW1lIHN0YXJ0c1xuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0sIDUwMCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDZWxsSWQoc3RyLCByb3csIGNvbCkge1xuICBsZXQgciA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gMCA/ICcnIDogcm93O1xuICB9KSgpO1xuICByZXR1cm4gc3RyICsgciArIGNvbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzRnJvbUlkKGNlbGxJZCkge1xuICBjb25zdCBjZWxsTnVtID0gY2VsbElkLnNwbGl0KCdtZ2JjJylbMV07XG4gIGNvbnN0IHJvd051bSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIGNlbGxOdW0ubGVuZ3RoID09PSAxID8gMCA6IGNlbGxOdW1bMF07XG4gIH0pKCk7XG4gIGNvbnN0IGNvbE51bSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIGNlbGxOdW0ubGVuZ3RoID09PSAxID8gY2VsbE51bSA6IGNlbGxOdW1bMV07XG4gIH0pKCk7XG4gIHJldHVybiBbcGFyc2VJbnQocm93TnVtKSwgcGFyc2VJbnQoY29sTnVtKV07XG59XG4iLCJpbXBvcnQgZGlzcGxheUFuZEhpZGVTZWN0aW9ucyBmcm9tICcuL21hY2hpbmUvZGlzcGxheUFuZEhpZGVTZWN0aW9ucy5qcyc7XG5pbXBvcnQgQXR0YWNrIGZyb20gJy4vbWFjaGluZS9hdHRhY2suanMnO1xuaW1wb3J0IHBsYXllckF0dGFjayBmcm9tICcuL3BsYXllckF0dGFjay5qcyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IGVuZCBmcm9tICcuLi8uLi9lbmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWNoaW5lQXR0YWNrKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXNwbGF5QW5kSGlkZVNlY3Rpb25zKCk7XG4gIH0sIDUwMCk7XG4gIC8vIFNldCBtYWNoaW5lIGFuZCBhdHRhY2tcbiAgY29uc3QgYXR0YWNrID0gQXR0YWNrKCk7XG4gIC8vIERpc3BsYXkgaHRtbCBlbGVtZW50cywgc3R5bGVzIGFuZCBhZG5pbWF0aW9uc1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChhdHRhY2suc2hpcEluQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgYXR0YWNrLmNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndW5hdmFpbGFibGVDZWxsJyk7XG4gICAgICAgIGF0dGFjay5jZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2suY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5LmN1cnJlbnQuZ2V0R2FtZWJvYXJkKDEpO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBwbGF5LmN1cnJlbnQuYWxsU2hpcHNTdW5rKGdhbWVib2FyZCk7XG4gICAgICAgIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBsZWdlbmQgPSAnTWFjaGluZSB3aW5zIDooJztcbiAgICAgICAgICBzdGF0dXMgPT09IHRydWUgPyBlbmQobGVnZW5kKSA6IHBsYXllckF0dGFjaygpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICB9LCAyMDAwKTtcbn1cbiIsImltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgc2V0TWFjaGluZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9nYW1lL3NldE1hY2hpbmUuanMnO1xuaW1wb3J0IGdldENlbGxJZCBmcm9tICcuLi9nZXRDZWxsSWQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdHRhY2soKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXkuY3VycmVudC5nZXRHYW1lYm9hcmQoMSk7XG4gIGNvbnN0IG1hY2hpbmUgPSBzZXRNYWNoaW5lKGdhbWVib2FyZCk7XG4gIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGVzID0gbWFjaGluZS5hdHRhY2soKTtcbiAgY29uc3Qgcm93ID0gYXR0YWNrQ29vcmRpbmF0ZXNbMF07XG4gIGNvbnN0IGNvbCA9IGF0dGFja0Nvb3JkaW5hdGVzWzFdO1xuICBjb25zdCBzaGlwSW5Db29yZGluYXRlcyA9ICgoKSA9PiB7XG4gICAgcmV0dXJuICdzaGlwJyBpbiBnYW1lYm9hcmRbcm93XVtjb2xdID8gdHJ1ZSA6IGZhbHNlO1xuICB9KSgpO1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0Q2VsbElkKCdwZ2JjJywgcm93LCBjb2wpKTtcbiAgcmV0dXJuIHsgc2hpcEluQ29vcmRpbmF0ZXMsIGNlbGwgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlBbmRIaWRlU2VjdGlvbnMoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAvLyBIaWRlIGdlbmVyYWwgY29udGFpbmVyXG4gIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAvLyBEaXNwbGF5IHBsYXllciBzZWN0aW9uIGFuZCBoaWRlIEFJIHNlY3Rpb25cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgYmFzaWNPcmllbnRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpY09yaWVudGF0aW9uJyk7XG4gICAgYmFzaWNPcmllbnRhdGlvbi50ZXh0Q29udGVudCA9ICdOb3cgaXMgbWFjaGluZSB0dXJuLic7XG4gICAgY29uc3QgYW5pbWF0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25UZXh0Jyk7XG4gICAgYW5pbWF0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdXYXRjaCBvdXQhJztcbiAgICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgICBwbGF5ZXJTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY29uc3QgQUlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJU2VjdGlvbicpO1xuICAgIEFJU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LCAxMDAwKTtcbn1cbiIsImltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllckF0dGFjaygpIHtcbiAgY29uc3QgYmFzaWNPcmllbnRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpY09yaWVudGF0aW9uJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGJhc2ljT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSBgSXQncyB5b3VyIHR1cm4gJHtwbGF5ZXJOYW1lfTpgO1xuICBjb25zdCBhbmltYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hdGlvblRleHQnKTtcbiAgYW5pbWF0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdBdHRhY2shJztcbiAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gIHBsYXllclNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgQUlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJU2VjdGlvbicpO1xuICBBSVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDApO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBnZXRDb29yZGluYXRlc0Zyb21JZCBmcm9tICcuL2dldENvb3JkaW5hdGVzRnJvbUlkLmpzJztcbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgcmVjZWl2ZUF0dGFjayBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5pbXBvcnQgbWFjaGluZUF0dGFjayBmcm9tICcuL21hY2hpbmVBdHRhY2suanMnO1xuaW1wb3J0IGVuZCBmcm9tICcuLi8uLi9lbmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRNYWNoaW5lR2FtZWJvYXJkKCkge1xuICAvKiBVc2VyIGludGVyYWN0aW9ucyB0YWtlIHBsYWNlIG9uIGJvZHkgPT4gZGl2I2dlbmVyYWxDb250YWluZXIgKi9cbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIC8qIEdhbWVib2FyZCBpcyBjb250YWluZWQgaW4gYSBzZWN0aW9uIGVsZW1lbnQgYW5kIGlzIGRpc3BsYXllZFxuICBpbiBhIGdyaWQgb2YgMTAgeCAxMCAqL1xuICBjb25zdCBnYkNsYXNzZXMgPSBbJ2dhbWVib2FyZCcsICdzaG93J107IC8vIFNob3J0Y3V0IGZvciBjbGFzcyBuYW1lXG4gIGNyZWF0ZUh0bWxFbGVtZW50KGdlbmVyYWxDb250YWluZXIsICdzZWN0aW9uJywgZ2JDbGFzc2VzLCAnJywgJ0FJU2VjdGlvbicpO1xuICBjb25zdCBtYWNoaW5lU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSVNlY3Rpb24nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQobWFjaGluZVNlY3Rpb24sICdkaXYnLCBnYkNsYXNzZXMsICcnLCAnQUlHYW1lYm9hcmQnKTtcbiAgY29uc3QgbWFjaGluZUdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUdhbWVib2FyZCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk5OyBpKyspIHtcbiAgICBjcmVhdGVIdG1sRWxlbWVudChtYWNoaW5lR2FtZWJvYXJkLCAnZGl2JywgWydtZ2JjJ10sICcnLCBgbWdiYyR7aX1gKTtcbiAgfVxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZ2JjJyk7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXkuY3VycmVudC5nZXRHYW1lYm9hcmQoMik7XG4gIC8vIEFkZCBsaXN0ZW5lcnMgdG8gZWFjaCBjZWxsXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBhdHRhY2tGbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNGcm9tSWQoY2VsbC5pZCk7XG4gICAgICBjb25zdCBhdHRhY2sgPSByZWNlaXZlQXR0YWNrKGdhbWVib2FyZCwgY29vcmRpbmF0ZXMpO1xuICAgICAgaWYgKGF0dGFjayA9PT0gdHJ1ZSkgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0ZuKTtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXkuY3VycmVudC5hbGxTaGlwc1N1bmsoZ2FtZWJvYXJkKTtcbiAgICAgIGNvbnN0IGxlZ2VuZCA9IFwiWW91J3JlIGEgd2lubmVyIVwiO1xuICAgICAgc3RhdHVzID09PSB0cnVlID8gZW5kKGxlZ2VuZCkgOiBtYWNoaW5lQXR0YWNrKCk7XG4gICAgfTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrRm4pO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBsYXllckdhbWVib2FyZCgpIHtcbiAgLyogVXNlciBpbnRlcmFjdGlvbnMgdGFrZSBwbGFjZSBvbiBib2R5ID0+IGRpdiNnZW5lcmFsQ29udGFpbmVyICovXG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAvKiBHYW1lYm9hcmQgaXMgY29udGFpbmVkIGluIGEgc2VjdGlvbiBlbGVtZW50IGFuZCBpcyBkaXNwbGF5ZWRcbiAgaW4gYSBncmlkIG9mIDEwIHggMTAgKi9cbiAgY29uc3QgZ2IgPSAnZ2FtZWJvYXJkJzsgLy8gU2hvcnRjdXQgZm9yIGNsYXNzIG5hbWVcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZ2VuZXJhbENvbnRhaW5lciwgJ3NlY3Rpb24nLCBbXSwgJycsICdwbGF5ZXJTZWN0aW9uJyk7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChwbGF5ZXJTZWN0aW9uLCAnZGl2JywgW2diXSwgJycsICdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckdhbWVib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OTsgaSsrKSB7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQocGxheWVyR2FtZWJvYXJkLCAnZGl2JywgWydwZ2JjJ10sICcnLCBgcGdiYyR7aX1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgbGV0IG9mZnNldFggPSBlLmNsaWVudFggLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBsZXQgb2Zmc2V0WSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgSlNPTi5zdHJpbmdpZnkoeyBvZmZzZXRYLCBvZmZzZXRZIH0pXG4gICk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5pZCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSwgMCk7XG59XG4iLCJpbXBvcnQgZ2V0RE9NQ29vcmRpbmF0ZXMgZnJvbSAnLi9kcm9wL2dldERPTUNvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBzZXR1cFNoaXBTdHlsZSBmcm9tICcuL2Ryb3Avc2V0dXBTaGlwU3R5bGUuanMnO1xuaW1wb3J0IGdldEVsZW1lbnRzT25TaGlwQXJlYSBmcm9tICcuL2Ryb3AvZ2V0RWxlbWVudHNPblNoaXBBcmVhLmpzJztcbmltcG9ydCBsaW5rU2hpcFdpdGhDZWxsIGZyb20gJy4vZHJvcC9saW5rU2hpcFdpdGhDZWxsLmpzJztcbmltcG9ydCBnZXRHYW1lQ29vcmRpbmF0ZXMgZnJvbSAnLi9kcm9wL2dldEdhbWVDb29yZGluYXRlcy5qcyc7XG5pbXBvcnQgc2V0RmluYWxCdXR0b25zIGZyb20gJy4uL3NldEZpbmFsQnV0dG9ucy5qcyc7XG5pbXBvcnQgY29uZmlybWF0aW9uIGZyb20gJy4uL3NldE1hbnVhbGx5L2NvbmZpcm1hdGlvbi5qcyc7XG5pbXBvcnQgdHJ5QWdhaW5GbiBmcm9tICcuLi9zZXRNYW51YWxseS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyb3AoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgLy8gR2V0IG5ldyBjb250YWluZXIgYW5kIGNvb3JkaW5hdGVzIHJlbGF0aXZlcyB0byB2aWV3cG9ydFxuICBsZXQgeyBjb250YWluZXIsIG5ld1gsIG5ld1kgfSA9IGdldERPTUNvb3JkaW5hdGVzKGUpO1xuICAvLyBHZXQgc2hpcCBlbGVtZW50IChkcmFnZ2FibGUgPSBzaGlwKVxuICBjb25zdCBkcmFnZ2FibGVJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dhYmxlSWQpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZHJhZ2dhYmxlSWQuY2hhckF0KGRyYWdnYWJsZUlkLmxlbmd0aCAtIDEpLCAxMCk7XG4gIC8vIEdldCBlbGVtZW50cyBvbiBzaGlwIGFyZWEgKGRyYWdnYWJsZSA9IHNoaXApXG4gIGNvbnN0IGVsZW1lbnRzT25TaGlwQXJlYSA9IGdldEVsZW1lbnRzT25TaGlwQXJlYShcbiAgICBkcmFnZ2FibGUsXG4gICAgY29udGFpbmVyLFxuICAgIG5ld1gsXG4gICAgbmV3WSxcbiAgICBzaGlwTGVuZ3RoXG4gICk7XG4gIC8vIFZlcmlmeSBpZiBkcmFnQW5kRHJvcCBpcyBhIHZhbGlkIG1vdmVtZW50XG4gIGlmIChlbGVtZW50c09uU2hpcEFyZWEubGVuZ3RoICE9PSBzaGlwTGVuZ3RoKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTZXR1cCBwbGFjZWQgc2hpcCBzdHlsZSBwcm9waWVydGllcyAoZHJhZ2dhYmxlID0gc2hpcClcbiAgICBzZXR1cFNoaXBTdHlsZShkcmFnZ2FibGUsIGNvbnRhaW5lciwgbmV3WCwgbmV3WSk7XG4gICAgLy8gSWRlbnRpZnkgZWxlbWVudHMgYW5kIGNoYW5nZSBzdHlsZXM6IExpbmsgdGhlIHNoaXAgd2l0aCB2YWxpZCBjZWxsc1xuICAgIGVsZW1lbnRzT25TaGlwQXJlYS5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgbGlua1NoaXBXaXRoQ2VsbChlbGVtZW50LCBkcmFnZ2FibGVJZClcbiAgICApO1xuICAgIC8vIEdldCBnYW1lIGNvb3JkaW5hdGVzIGZvciBpbnRlcm5hbCBhcHAgcHVycG9zZXNcbiAgICBnZXRHYW1lQ29vcmRpbmF0ZXMoZHJhZ2dhYmxlSWQpO1xuICAgIC8vIENoZWNrIGlmIFBTVCBjb250YWluZXIgaGFzIGF2YWlsYWJsZSBzaGlwc1xuICAgIC8vIElmIG5vdCwgcHJvY2VlZCBieSBhc2tpbmcgdGhlIHVzZXIgZm9yIHBsYWNlbWVudCBjb25maXJtYXRpb25cbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3RSb3cgPiBkaXYnKTtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBZGQgY29uZmlybWF0aW9uIGFuZCB0cnlhIGFnYWluIGJ1dHRvbnNcbiAgICAgIHNldEZpbmFsQnV0dG9ucyhjb25maXJtYXRpb24ubGVnZW5kKCksIGNvbmZpcm1hdGlvbi5mbiwgdHJ5QWdhaW5Gbik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRET01Db29yZGluYXRlcyhlKSB7XG4gIC8vIEdldCBkcmFnU3RhcnQgY29vcmRpbmF0ZXMgdG8gc2V0dXAgc2hpcCBsb2NhdGlvblxuICBsZXQgb2Zmc2V0cyA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYXBwbGljYXRpb24vanNvbicpKTtcbiAgLy8gQ2FsY3VsYXRlIGRyb3AgY29vcmRpbmF0ZXMgcmVsYXRpdmVzIHRvIGRyYWdTdGFydCBsb2NhdGlvblxuICBsZXQgbmV3WCA9IGUuY2xpZW50WCAtIG9mZnNldHMub2Zmc2V0WDtcbiAgbGV0IG5ld1kgPSBlLmNsaWVudFkgLSBvZmZzZXRzLm9mZnNldFk7XG4gIC8vIENhbGN1bGF0ZSBkcm9wIGNvb3JkaW5hdGVzIHJlbGF0aXZlcyB0byBlLnRhcmpldCAoZ2FtZWJvYXJkIGNlbGwpXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKTtcbiAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbmV3WCA9IG5ld1ggLSBjb250YWluZXJSZWN0LmxlZnQgLSA3O1xuICBuZXdZID0gbmV3WSAtIGNvbnRhaW5lclJlY3QudG9wIC0gNztcbiAgcmV0dXJuIHsgY29udGFpbmVyLCBuZXdYLCBuZXdZIH07XG59XG4iLCJpbXBvcnQgaWRlbnRpZnlFbGVtZW50c0luQXJlYSBmcm9tICcuL2lkZW50aWZ5RWxlbWVudHNJbkFyZWEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFbGVtZW50c09uU2hpcEFyZWEoXG4gIGRyYWdnYWJsZSxcbiAgbmV3Q29udGFpbmVyLFxuICBuZXdYLFxuICBuZXdZLFxuICBzaGlwTGVuZ3RoXG4pIHtcbiAgY29uc3QgY2xvbmUgPSBkcmFnZ2FibGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgaWYgKGNsb25lLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgIGNsb25lLnN0eWxlLmhlaWdodCA9IHNoaXBMZW5ndGggKiAyOCArICdweCc7XG4gICAgY2xvbmUuc3R5bGUud2lkdGggPSAxNiArICdweCc7XG4gIH0gZWxzZSBpZiAoY2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICBjbG9uZS5zdHlsZS5oZWlnaHQgPSAxNiArICdweCc7XG4gICAgY2xvbmUuc3R5bGUud2lkdGggPSBzaGlwTGVuZ3RoICogMjggKyAncHgnO1xuICB9XG4gIGNsb25lLnN0eWxlLmxlZnQgPSBuZXdYICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUudG9wID0gbmV3WSArICdweCc7XG4gIGNsb25lLnN0eWxlLm1hcmdpbiA9IDA7XG4gIGNsb25lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvbmUnKTtcbiAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgY29uc3QgcmVjdCA9IGNsb25lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB0b3BDb29yZGluYXRlID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgY29uc3QgYm90dG9tQ29vcmRpbmF0ZSA9IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFk7XG4gIGNvbnN0IGxlZnRDb29yZGluYXRlID0gcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gIGNvbnN0IHJpZ2h0Q29vcmRpbmF0ZSA9IHJlY3QucmlnaHQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgY2xvbmUucmVtb3ZlKCk7XG4gIHJldHVybiBpZGVudGlmeUVsZW1lbnRzSW5BcmVhKFxuICAgICcucGdiYycsXG4gICAgdG9wQ29vcmRpbmF0ZSxcbiAgICBib3R0b21Db29yZGluYXRlLFxuICAgIGxlZnRDb29yZGluYXRlLFxuICAgIHJpZ2h0Q29vcmRpbmF0ZSxcbiAgICAwXG4gICk7XG59XG4iLCJpbXBvcnQgc2hpcHNDb29yZGluYXRlcyBmcm9tICcuLi8uLi9zaGlwc0Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R2FtZUNvb3JkaW5hdGVzKHNoaXBJZCkge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3NoaXBJZH1gKTtcbiAgY29uc3QgZ2V0Q2VsbE51bSA9IChjZWxsKSA9PiB7XG4gICAgcmV0dXJuIGNlbGwuaWQuc3BsaXQoJ3BnYmMnKVsxXTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY2VsbE51bSkgPT4ge1xuICAgIGlmIChjZWxsTnVtLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFswLCBwYXJzZUludChjZWxsTnVtKV07XG4gICAgZWxzZSBpZiAoY2VsbE51bS5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiBbcGFyc2VJbnQoY2VsbE51bVswXSksIHBhcnNlSW50KGNlbGxOdW1bMV0pXTtcbiAgICB9IGVsc2UgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBjb29yZGluYXRlcycpO1xuICB9O1xuICBjb25zdCBzdGFydENlbGwgPSBjZWxsc1swXTtcbiAgY29uc3QgZW5kQ2VsbCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzdGFydENvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZ2V0Q2VsbE51bShzdGFydENlbGwpKTtcbiAgY29uc3QgZW5kQ29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhnZXRDZWxsTnVtKGVuZENlbGwpKTtcbiAgc2hpcHNDb29yZGluYXRlcy5wdXNoKFtzdGFydENvb3JkaW5hdGVzLCBlbmRDb29yZGluYXRlc10pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpZnlFbGVtZW50c0luQXJlYShcbiAgZWxlbWVudHNUb1NlYXJjaCxcbiAgdG9wLFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHJpZ2h0LFxuICBtYXJnaW5cbikge1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHNUb1NlYXJjaCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxFbGVtZW50c1tpXTtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50VG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBlbGVtZW50TGVmdCA9IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgIGNvbnN0IGVsZW1lbnRSaWdodCA9IHJlY3QucmlnaHQgKyB3aW5kb3cuc2Nyb2xsWDtcblxuICAgIC8vIFZlcmlmaWVzICBpZiBlYWNoIGVsZW1lbnQgb3ZlcmxhcHMgdGhlIHNoaXAgYXJlYVxuICAgIGlmIChcbiAgICAgIGVsZW1lbnRUb3AgPD0gYm90dG9tICsgbWFyZ2luICYmXG4gICAgICBlbGVtZW50Qm90dG9tID49IHRvcCAtIG1hcmdpbiAmJlxuICAgICAgZWxlbWVudExlZnQgPD0gcmlnaHQgKyBtYXJnaW4gJiZcbiAgICAgIGVsZW1lbnRSaWdodCA+PSBsZWZ0IC0gbWFyZ2luXG4gICAgKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCJpbXBvcnQgZHJhZ092ZXIgZnJvbSAnLi4vZHJhZ092ZXIuanMnO1xuaW1wb3J0IGRyYWdMZWF2ZSBmcm9tICcuLi9kcmFnTGVhdmUuanMnO1xuaW1wb3J0IGRyYWdFbnRlciBmcm9tICcuLi9kcmFnRW50ZXIuanMnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi4vZHJvcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmtTaGlwV2l0aENlbGwoY2VsbCwgaWQpIHtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3VuYXZhaWxhYmxlQ2VsbCcpO1xuICBjZWxsLmNsYXNzTGlzdC5hZGQoaWQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBTaGlwU3R5bGUoZHJhZ2dhYmxlLCBuZXdDb250YWluZXIsIG5ld1gsIG5ld1kpIHtcbiAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIGRyYWdnYWJsZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBuZXdYICsgJ3B4JztcbiAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IG5ld1kgKyAncHgnO1xuICBkcmFnZ2FibGUuc3R5bGUubWFyZ2luID0gMDtcbiAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZFNoaXAnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgY2hlY2ttYXJrIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jaGVja21hcmstY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBzdGFydCBmcm9tICcuLi8uLi9zdGFydC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENvbmZpcm1hdGlvbkJ0bihjb25maXJtYXRpb25Gbikge1xuICBjb25zdCBwc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHN0Jyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ2J1dHRvbicsIFtdLCBcIk9rYXksIGxldCdzIHBsYXkhXCIsICdjb25maXJtYXRpb25CdG4nLCBbXG4gICAge1xuICAgICAgYXR0cmlidXRlOiAndHlwZScsXG4gICAgICB2YWx1ZTogJ2J1dHRvbicsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IGNvbmZpcm1hdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtYXRpb25CdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoY29uZmlybWF0aW9uQnRuLCAnaW1nJywgW10sICcnLCAnYXBwcm92YWxJY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IGNoZWNrbWFyayB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdhcHByb3ZhbCBpY29uJyB9LFxuICBdKTtcbiAgY29uZmlybWF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbmZpcm1hdGlvbkZuKCk7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwc3QucmVtb3ZlKCk7XG4gICAgICBzdGFydCgpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc2V0Q29uZmlybWF0aW9uQnRuIGZyb20gJy4vc2V0Q29uZmlybWF0aW9uQnRuLmpzJztcbmltcG9ydCBzZXRUcnlBZ2FpbkJ0biBmcm9tICcuL3NldFRyeUFnYWluQnRuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RmluYWxCdXR0b25zKG5ld0xlZ2VuZCwgY29uZmlybWF0aW9uRm4sIHRyeUFnYWluRm4pIHtcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpO1xuICAvLyBIaWRlIHRlbXBvcmFyeSBwc3QgY29udGFpbmVyXG4gIHBzdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIFJlbW92ZSB1bm5lY2VzYXJ5IGVsZW1lbnRzIGZyb20gcHJldmlvdXMgc3RlcFxuICAgIHdoaWxlIChwc3QuZmlyc3RDaGlsZCkge1xuICAgICAgcHN0LnJlbW92ZUNoaWxkKHBzdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gU2V0IG5ldyBvcmllbnRhdGlvbiB0byB1c2VyXG4gICAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAncCcsIFtdLCBuZXdMZWdlbmQsICdsZWdlbmQnKTtcbiAgICAvLyBTZXQgY29uZmlybWF0aW9uIGJ1dHRvblxuICAgIHNldENvbmZpcm1hdGlvbkJ0bihjb25maXJtYXRpb25Gbik7XG4gICAgLy8gU2V0IHRyeSBhZ2FpbiBidXR0b25cbiAgICBzZXRUcnlBZ2FpbkJ0bih0cnlBZ2FpbkZuKTtcbiAgfSwgNTAwKTtcbiAgLy8gU2hvdyBwc3QgY29udGFpbmVyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0sIDUwMCk7XG59XG4iLCJpbXBvcnQgYWRkRWxlbWVudHMgZnJvbSAnLi9zZXRNYW51YWxseS9hZGRFbGVtZW50cy5qcyc7XG5pbXBvcnQgc2V0U2hpcHNPblBTVCBmcm9tICcuL3NldE1hbnVhbGx5L3NldFNoaXBzT25QU1QuanMnO1xuaW1wb3J0IHNldERyYWdBbmREcm9wIGZyb20gJy4vc2V0TWFudWFsbHkvc2V0RHJhZ0FuZERyb3AuanMnO1xuaW1wb3J0IGNoYW5nZURpcmVjdGlvbiBmcm9tICcuL3NldE1hbnVhbGx5L2NoYW5nZURpcmVjdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE1hbnVhbGx5KCkge1xuICAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZS1zaGlwcyB0b29sXG4gIGNvbnN0IHBzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTtcbiAgLy8gSGlkZSB0ZW1wb3JhcnkgcHN0IGNvbnRhaW5lclxuICBwc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBEZWxldGUgaHRtbCBlbGVtZW50cyBmcm9tIHByZXZpb3VzIHN0ZXBcbiAgICB3aGlsZSAocHN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBzdC5yZW1vdmVDaGlsZChwc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSB1c2VyIGFkdmljZSwgY2hhbmdlIHNoaXBzIGRpcmVjdGlvbiBidXR0b24gYW5kIGRyYWdnYWJsZSBzaGlwcyBjb250YWluZXJcbiAgICBhZGRFbGVtZW50cyhwc3QpO1xuICAgIC8vIFNldCBkcmFnZ2FibGUgc2hpcHMgb24gdG9vbCBjb250YWluZXJcbiAgICBzZXRTaGlwc09uUFNUKCk7XG4gICAgLy8gQWRkIGZ1bmN0aW9uYWxpdHkgdG8gYnV0dG9uXG4gICAgY29uc3QgZGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbkJ0bicpO1xuICAgIGRpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoYW5nZURpcmVjdGlvbigpO1xuICAgIH0pO1xuICAgIC8vIFNldCBkcmFnIGFuZCBkcm9wIGZ1bmN0aW9uYWxpdGllcyB0byBzaGlwcyBhbmQgZ2FtZWJvYXJkXG4gICAgc2V0RHJhZ0FuZERyb3AoKTtcbiAgfSwgNTAwKTtcbiAgLy8gU2hvdyBwc3QgY29udGFpbmVyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0sIDUwMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IGFycm93IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hcnJvdy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGVtZW50cyhwc3QpIHtcbiAgLy8gQ3JlYXRlIHVzZXIgYWR2aWNlXG4gIGNvbnN0IGxlZ2VuZCA9ICdGb3IgYSBiZXR0ZXIgZXhwZXJpZW5jZSwgcGxlYXNlIHRha2Ugc2hpcHMgYnkgdGhlIGNlbnRlci4nO1xuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdwJywgW10sIGxlZ2VuZCwgJ2xlZ2VuZCcpO1xuICAvLyBDcmVhdGUgY2hhbmdlIHNoaXBzIGRpcmVjdGlvbiBidXR0b25cbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAnYnV0dG9uJywgW10sICdDaGFuZ2UgZGlyZWN0aW9uJywgJ2RpcmVjdGlvbkJ0bicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3R5cGUnLCB2YWx1ZTogJ2J1dHRvbicgfSxcbiAgXSk7XG4gIGNvbnN0IGRpcmVjdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25CdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZGlyZWN0aW9uQnRuLCAnaW1nJywgW10sICcnLCAnZGlyZWN0aW9uSWNvbicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3NyYycsIHZhbHVlOiBhcnJvdyB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdkaXJlY3Rpb25JY29uJyB9LFxuICBdKTtcbiAgLy8gY3JlYXRlIGRyYWdnYWJsZSBzaGlwcyBjb250YWluZXJcbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAnZGl2JywgW10sICcnLCAnc2hpcHNDb250YWluZXInKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHNDb250YWluZXInKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjcmVhdGVIdG1sRWxlbWVudChzaGlwc0NvbnRhaW5lciwgJ2RpdicsIFsncHN0Um93J10pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oKSB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzdFNoaXAnKTtcbiAgbGV0IGRpcmVjdGlvbjtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkU2hpcCcpID09PSBmYWxzZSkge1xuICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcsICdyb3RhdGUnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcsICdyb3RhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbkljb24nKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0JztcbiAgfSBlbHNlIHtcbiAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG4gICAgaWNvbi5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0JztcbiAgfVxufVxuIiwiaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCBzaGlwc0Nvb3JkaW5hdGVzIGZyb20gJy4uL3NoaXBzQ29vcmRpbmF0ZXMuanMnO1xuaW1wb3J0IHBsYWNlU2hpcCBmcm9tICcuLi8uLi8uLi8uLi8uLi9nYW1lL29wZXJhdGlvbnMvcGxhY2VTaGlwLmpzJztcblxuY29uc3QgcGxheWVyTmFtZSA9ICgpID0+IHtcbiAgaWYgKCdnYW1lJyBpbiBwbGF5LmN1cnJlbnQpIHJldHVybiBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCBsZWdlbmQgPSAoKSA9PiB7XG4gIHJldHVybiBgR29vZCBqb2IgJHtwbGF5ZXJOYW1lKCl9ISBOb3cgcGxlYXNlIGNvbmZpcm0geW91ciBzZWxlY3Rpb24gb3IgdHJ5IGFnYWluLmA7XG59O1xuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBpZiAoJ2dhbWUnIGluIHBsYXkuY3VycmVudCkgcmV0dXJuIHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEuZ2FtZWJvYXJkO1xuICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgZm4gPSAoKSA9PiBzaGlwc0Nvb3JkaW5hdGVzLmZvckVhY2goKGVsKSA9PiBwbGFjZVNoaXAoZ2FtZWJvYXJkKCksIGVsKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGVnZW5kLFxuICBmbixcbn07XG4iLCJpbXBvcnQgZHJhZ1N0YXJ0IGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdTdGFydC5qcyc7XG5pbXBvcnQgZHJhZ092ZXIgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJhZ092ZXIuanMnO1xuaW1wb3J0IGRyYWdMZWF2ZSBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnTGVhdmUuanMnO1xuaW1wb3J0IGRyYWdFbmQgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJhZ0VuZC5qcyc7XG5pbXBvcnQgZHJhZ0VudGVyIGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdFbnRlci5qcyc7XG5pbXBvcnQgZHJvcCBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcm9wLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RHJhZ0FuZERyb3AoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzdFNoaXAnKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcbiAgICB9KTtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZ2JjJyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuICAgIH0pO1xuICB9LCAxMDAwKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNoaXBzT25QU1QoKSB7XG4gIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN0Um93Jyk7XG4gIC8vIFRoZSBzaGlwcycgbGVuZ3RoIHdhcyBzZXQgdXAgaW4gdGhlIENTUyBmaWxlXG4gIGNvbnN0IGNsYXNzZXMgPSBbJ3BzdFNoaXAnLCAndmVydGljYWwnLCAncm90YXRlJ107XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHJvd3NbMF0sICdkaXYnLCBjbGFzc2VzLCAnJywgJ3BTaGlwNicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2RyYWdnYWJsZScsIHZhbHVlOiAndHJ1ZScgfSxcbiAgXSk7IC8vIFNoaXAgd2l0aCA2IGNlbGxzIGxlbmd0aFxuICBjcmVhdGVIdG1sRWxlbWVudChyb3dzWzFdLCAnZGl2JywgY2xhc3NlcywgJycsICdwU2hpcDUnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdkcmFnZ2FibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gIF0pOyAvLyBTaGlwIHdpdGggNSBjZWxscyBsZW5ndGhcbiAgY3JlYXRlSHRtbEVsZW1lbnQocm93c1sxXSwgJ2RpdicsIGNsYXNzZXMsICcnLCAncFNoaXAyJywgW1xuICAgIHsgYXR0cmlidXRlOiAnZHJhZ2dhYmxlJywgdmFsdWU6ICd0cnVlJyB9LFxuICBdKTsgLy8gU2hpcCB3aXRoIDIgY2VsbHMgbGVuZ3RoXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHJvd3NbMl0sICdkaXYnLCBjbGFzc2VzLCAnJywgJ3BTaGlwNCcsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2RyYWdnYWJsZScsIHZhbHVlOiAndHJ1ZScgfSxcbiAgXSk7IC8vIFNoaXAgd2l0aCA0IGNlbGxzIGxlbmd0aFxuICBjcmVhdGVIdG1sRWxlbWVudChyb3dzWzJdLCAnZGl2JywgY2xhc3NlcywgJycsICdwU2hpcDMnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdkcmFnZ2FibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gIF0pOyAvLyBTaGlwIHdpdGggMyBjZWxscyBsZW5ndGhcbn1cbiIsImltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgc2V0RmluYWxCdXR0b25zIGZyb20gJy4vc2V0RmluYWxCdXR0b25zLmpzJztcbmltcG9ydCBjb25maXJtYXRpb24gZnJvbSAnLi9zZXRSYW5kb21seS9jb25maXJtYXRpb24uanMnO1xuaW1wb3J0IGdldElkIGZyb20gJy4vc2V0UmFuZG9tbHkvZ2V0SWQuanMnO1xuaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3NldFJhbmRvbWx5L3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UmFuZG9tbHkoKSB7XG4gIC8vIEFkZCBjb25maXJtYXRpb24gYW5kIHRyeSBhZ2FpbiBidXR0b25zXG4gIGNvbnN0IGxlZ2VuZCA9IGNvbmZpcm1hdGlvbi5sZWdlbmQ7XG4gIHNldEZpbmFsQnV0dG9ucyhsZWdlbmQsIGNvbmZpcm1hdGlvbi5mbiwgc2V0UmFuZG9tbHkpO1xuICAvLyBHZXQgc2hpcHMgY29vcmRpbmF0ZXNcbiAgY29uc3Qgc2V0UGxheWVyU2hpcHNSYW5kb21seSA9IHBsYXkuY3VycmVudC5zZXRQbGF5ZXJTaGlwc1JhbmRvbWx5O1xuICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzID0gc2V0UGxheWVyU2hpcHNSYW5kb21seSgxKTtcbiAgLy8gQXBwbHkgc3R5bGUgdG8gY29ycmVzcG9uZGluZyBET00gY2VsbHNcbiAgc2hpcHNDb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXBDb29yZGluYXRlc1swXVswXSA9PT0gc2hpcENvb3JkaW5hdGVzWzFdWzBdXG4gICAgICAgID8gJ2hvcml6b250YWwnXG4gICAgICAgIDogJ3ZlcnRpY2FsJztcbiAgICB9KSgpO1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgZ2V0SWQoc2hpcENvb3JkaW5hdGVzWzBdWzBdLCBzaGlwQ29vcmRpbmF0ZXNbMF1bMV0pXG4gICAgKTtcbiAgICBjb25zdCBzaGlwQ2xhc3NlcyA9IFtkaXJlY3Rpb24sICdyYW5kb21seVBsYWNlZFNoaXAnXTtcbiAgICBjcmVhdGVIdG1sRWxlbWVudChmaXJzdENlbGwsICdkaXYnLCBzaGlwQ2xhc3NlcywgJycsIGBsJHtzaGlwTGVuZ3RofXNoaXBgKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHNoaXBDb29yZGluYXRlc1tpXVswXTtcbiAgICAgICAgY29uc3QgY29sID0gc2hpcENvb3JkaW5hdGVzW2ldWzFdO1xuICAgICAgICBjb25zdCBpZCA9IGdldElkKHJvdywgY29sKTtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd1bmF2YWlsYWJsZUNlbGwnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmRvbWx5UGxhY2VkU2hpcCcpO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xufVxuIiwiY29uc3QgbGVnZW5kID0gJ0NvbmZpcm0gdGhlIHNoaXBzIHBsYWNlbWVudCBvciB0cnkgYWdhaW4uJztcbmNvbnN0IGZuID0gKCkgPT4ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGVnZW5kLFxuICBmbixcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJZChyb3csIGNvbCkge1xuICBsZXQgciA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyA9PT0gMCA/ICcnIDogcm93O1xuICB9KSgpO1xuICByZXR1cm4gJ3BnYmMnICsgciArIGNvbDtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc2V0UGxheWVyR2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZHMvc2V0UGxheWVyR2FtZWJvYXJkLmpzJztcbmltcG9ydCByZXBlYXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3JlcGVhdC1vdXRsaW5lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyeUFnYWluQnRuKHRyeUFnYWluRm4pIHtcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpO1xuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ0xldCBtZSB0cnkgYWdhaW4nLCAndHJ5QWdhaW5CdG4nLCBbXG4gICAge1xuICAgICAgYXR0cmlidXRlOiAndHlwZScsXG4gICAgICB2YWx1ZTogJ2J1dHRvbicsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IHRyeUFnYWluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyeUFnYWluQnRuJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHRyeUFnYWluQnRuLCAnaW1nJywgW10sICcnLCAncmVwZWF0SWNvbicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3NyYycsIHZhbHVlOiByZXBlYXQgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2FsdCcsIHZhbHVlOiAncmVwZWF0IGljb24nIH0sXG4gIF0pO1xuICB0cnlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGxheWVyU2VjdGlvbi5yZW1vdmUoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRQbGF5ZXJHYW1lYm9hcmQoKTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSwgNTAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeUFnYWluRm4oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgICAgICAgbmV3UGxheWVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICB9LCA1MDApO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFtdO1xuIiwiaW1wb3J0IHNldFBsYXllckdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZHMvc2V0UGxheWVyR2FtZWJvYXJkLmpzJztcbmltcG9ydCBzZXRQbGFjZVNoaXBzVG9vbCBmcm9tICcuL3NldFBsYWNlU2hpcHNUb29sLmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R2FtZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZW1vdmUoKTtcbiAgICBzZXRQbGFjZVNoaXBzVG9vbCgpO1xuICAgIHNldFBsYXllckdhbWVib2FyZCgpO1xuICB9LCA1MDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgIGNvbnN0IHBzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTsgLy8gcHN0IHN0YW5kcyBmb3IgcGxhY2Ugc2hpcHMgdG9vbFxuICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0sIDc1MCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UGFuZWwoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHBhbmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFuZWwnKTtcbiAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBnZW5lcmFsQ29udGFpbmVyLmluc2VydEJlZm9yZShwYW5lbCwgcGxheWVyU2VjdGlvbik7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGNvbnN0IGxlZ2VuZCA9IGBJdCdzIHlvdXIgdHVybiAke3BsYXllck5hbWV9OmA7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBhbmVsLCAncCcsIFtdLCBsZWdlbmQsICdiYXNpY09yaWVudGF0aW9uJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBhbmVsLCAncCcsIFtdLCAnQXR0YWNrIScsICdhbmltYXRpb25UZXh0Jyk7XG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBzaHVmZmxlIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9zaHVmZmxlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBoYW5kIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9oYW5kLXJpZ2h0LW91dGxpbmUuc3ZnJztcbmltcG9ydCBzZXRSYW5kb21seSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5LmpzJztcbmltcG9ydCBzZXRNYW51YWxseSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UGxhY2VTaGlwc1Rvb2woKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAvLyBDcmVhdGUgcHN0IGNvbnRhaW5lclxuICAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZS1zaGlwcyB0b29sXG4gIGNyZWF0ZUh0bWxFbGVtZW50KGdlbmVyYWxDb250YWluZXIsICdkaXYnLCBbXSwgJycsICdwc3QnKTtcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpO1xuICAvLyBDcmVhdGUgdXNlciBhZHZpY2VcbiAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEubmFtZTtcbiAgY29uc3QgbGVnZW5kID0gYEhpICR7cGxheWVyTmFtZX0hIFBsZWFzZSBzZWxlY3QgaG93IHlvdSB3YW50IHRvIHBsYWNlIHlvdXIgbmF2eTpgO1xuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdwJywgW10sIGxlZ2VuZCwgJ2xlZ2VuZCcpO1xuICAvLyBDcmVhdGUgc2V0IHJhbmRvbWx5IGJ1dHRvblxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ1NldCByYW5kb21seScsICdyYW5kb21seUJ0bicpO1xuICBjb25zdCByYW5kb21seUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21seUJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChyYW5kb21seUJ0biwgJ2ltZycsIFtdLCAnJywgJ3JhbmRvbUljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogc2h1ZmZsZSB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdyYW5kb20gaWNvbicgfSxcbiAgXSk7XG4gIHJhbmRvbWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldFJhbmRvbWx5KCk7XG4gIH0pO1xuICAvLyBDcmVhdGUgc2V0IG1hbnVhbGx5IGJ1dHRvblxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ1NldCBtYW51YWxseScsICdtYW51YWxseUJ0bicpO1xuICBjb25zdCBtYW51YWxseUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW51YWxseUJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChtYW51YWxseUJ0biwgJ2ltZycsIFtdLCAnJywgJ3JhbmRvbUljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogaGFuZCB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdoYW5kIGljb24nIH0sXG4gIF0pO1xuICBtYW51YWxseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNYW51YWxseSgpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZChsZWdlbmRXaW5uZXIpIHtcbiAgY29uc3QgYmFzaWNPcmllbnRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpY09yaWVudGF0aW9uJyk7XG4gIGJhc2ljT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSAnR2FtZSBvdmVyJztcbiAgY29uc3QgYW5pbWF0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25UZXh0Jyk7XG4gIGFuaW1hdGlvblRleHQudGV4dENvbnRlbnQgPSBsZWdlbmRXaW5uZXI7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBwbGF5ZXJTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IEFJU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSVNlY3Rpb24nKTtcbiAgQUlTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAgIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LCAwKTtcbn1cbiIsImltcG9ydCBzZXRHYW1lQ29udGFpbmVyIGZyb20gJy4vR1VJL3NldEdhbWVDb250YWluZXIuanMnO1xuaW1wb3J0IHNldEdhbWUgZnJvbSAnLi4vLi4vZ2FtZS9zZXRHYW1lLmpzJztcbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uL2dhbWUvcGxheS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBTdGFydCBnYW1lIGFuZCBzZXQgdXAgcGxheWVycyBuYW1lXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICBwbGF5LmN1cnJlbnQgPSBzZXRHYW1lKCk7XG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJOYW1lKDEsIHBsYXllck5hbWUpO1xuICBwbGF5LmN1cnJlbnQuc2V0UGxheWVyTmFtZSgyLCAnTWFjaGluZScpO1xuICAvLyBQbGFjZSBtYWNoaW5lIHNoaXBzXG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJTaGlwc1JhbmRvbWx5KDIpO1xuICAvLyBXZSBwcm9jZWVkIGJ5IHJlbW92aW5nIHRoZSBmb3JtIGFuZCBhZGRpbmcgcGxheWVyIGdhbWVib2FyZCB0byB0aGUgRE9NLlxuICBzZXRHYW1lQ29udGFpbmVyKCk7XG59XG4iLCJpbXBvcnQgc2V0UGFuZWwgZnJvbSAnLi9HVUkvc2V0UGFuZWwuanMnO1xuaW1wb3J0IHNldE1hY2hpbmVHYW1lYm9hcmQgZnJvbSAnLi9HVUkvZ2FtZWJvYXJkcy9zZXRNYWNoaW5lR2FtZWJvYXJkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBzZXRQYW5lbCgpO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgcGxheWVyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBzZXRNYWNoaW5lR2FtZWJvYXJkKCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDUwMCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IFtdO1xuICBjb25zdCBjZWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB7IGF0dGFja2VkOiBmYWxzZSB9O1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHJvdy5wdXNoKGNlbGwoKSk7XG4gICAgZ2FtZWJvYXJkLnB1c2gocm93KTtcbiAgfVxuICByZXR1cm4gZ2FtZWJvYXJkO1xufVxuIiwiaW1wb3J0IHNldEdhbWVib2FyZCBmcm9tICcuL3NldEdhbWVib2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBsYXllcnMoKSB7XG4gIHJldHVybiB7XG4gICAgcGxheWVyMToge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgZ2FtZWJvYXJkOiBzZXRHYW1lYm9hcmQoKSxcbiAgICAgIHdpbnM6IDAsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgfSxcbiAgICBwbGF5ZXIyOiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICBnYW1lYm9hcmQ6IHNldEdhbWVib2FyZCgpLFxuICAgICAgd2luczogMCxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNoaXAobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgaXNTdW5rOiAoKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5oaXRzID09PSBzaGlwLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIGhpdDogKCkgPT4ge1xuICAgICAgc2hpcC5oaXRzICs9IDE7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIHNoaXA7XG59XG4iLCJpbXBvcnQgZ2V0QXR0YWNrQ29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRBdHRhY2tDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja0hvcml6b250YWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCkge1xuICBpZiAoXG4gICAgY29sIC0gMSA+PSAwICYmXG4gICAgJ3NoaXAnIGluIHBsYXllckdhbWVib2FyZFtyb3ddW2NvbF0gJiZcbiAgICAhcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sIC0gMV0uYXR0YWNrZWRcbiAgKSB7XG4gICAgcmV0dXJuIFtyb3csIGNvbCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIGxldCBpZHggPSBjb2wgKyAxO1xuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckdhbWVib2FyZFtyb3ddW2lkeF0uYXR0YWNrZWQgJiZcbiAgICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbcm93XVtpZHhdXG4gICAgKSB7XG4gICAgICBpZHgrKztcbiAgICB9XG4gICAgcmV0dXJuIGlkeCA8PSA5ICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93XVtpZHhdLmF0dGFja2VkXG4gICAgICA/IFtyb3csIGlkeF1cbiAgICAgIDogZ2V0QXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCwgdW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHJlY2VpdmVBdHRhY2sgZnJvbSAnLi4vb3BlcmF0aW9ucy9yZWNlaXZlQXR0YWNrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrUmFuZG9tbHkocGxheWVyR2FtZWJvYXJkKSB7XG4gIGxldCB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2U7XG4gIGxldCBjb29yZGluYXRlcztcbiAgd2hpbGUgKHZhbGlkQ29vcmRpbmF0ZXMgPT09IGZhbHNlKSB7XG4gICAgY29uc3QgcmFuZG9tQ2VsbE51bSA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IHJvdyA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gcmFuZG9tQ2VsbE51bSA8IDEwID8gMCA6IE1hdGguZmxvb3IocmFuZG9tQ2VsbE51bSAvIDEwKTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNvbCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gcmFuZG9tQ2VsbE51bSA8IDEwID8gcmFuZG9tQ2VsbE51bSA6IHJhbmRvbUNlbGxOdW0gJSAxMDtcbiAgICB9KSgpO1xuICAgIGlmICghcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sXS5hdHRhY2tlZCkge1xuICAgICAgY29vcmRpbmF0ZXMgPSBbcm93LCBjb2xdO1xuICAgICAgdmFsaWRDb29yZGluYXRlcyA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2socGxheWVyR2FtZWJvYXJkLCBjb29yZGluYXRlcyk7XG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cbiIsImltcG9ydCBnZXRBdHRhY2tDb29yZGluYXRlcyBmcm9tICcuL2dldEF0dGFja0Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrVmVydGljYWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCkge1xuICBpZiAoXG4gICAgcm93IC0gMSA+PSAwICYmXG4gICAgJ3NoaXAnIGluIHBsYXllckdhbWVib2FyZFtyb3ddW2NvbF0gJiZcbiAgICAhcGxheWVyR2FtZWJvYXJkW3JvdyAtIDFdW2NvbF0uYXR0YWNrZWRcbiAgKSB7XG4gICAgcmV0dXJuIFtyb3cgLSAxLCBjb2xdO1xuICB9IGVsc2Uge1xuICAgIGxldCBpZHggPSByb3cgKyAxO1xuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckdhbWVib2FyZFtpZHhdW2NvbF0uYXR0YWNrZWQgJiZcbiAgICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbaWR4XVtjb2xdXG4gICAgKSB7XG4gICAgICArK2lkeDtcbiAgICB9XG4gICAgcmV0dXJuIGlkeCA8PSA5ICYmICFwbGF5ZXJHYW1lYm9hcmRbaWR4XVtjb2xdLmF0dGFja2VkXG4gICAgICA/IFtpZHgsIGNvbF1cbiAgICAgIDogZ2V0QXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCwgJ2hvcml6b250YWwnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbihcbiAgcGxheWVyR2FtZWJvYXJkLFxuICByb3csXG4gIGNvbFxuKSB7XG4gIGlmIChyb3cgLSAxID49IDAgJiYgIXBsYXllckdhbWVib2FyZFtyb3cgLSAxXVtjb2xdLmF0dGFja2VkKSB7XG4gICAgcmV0dXJuIFtyb3cgLSAxLCBjb2xdO1xuICB9IGVsc2UgaWYgKHJvdyArIDEgPD0gOSAmJiAhcGxheWVyR2FtZWJvYXJkW3JvdyArIDFdW2NvbF0uYXR0YWNrZWQpIHtcbiAgICByZXR1cm4gW3JvdyArIDEsIGNvbF07XG4gIH0gZWxzZSBpZiAoY29sIC0gMSA+PSAwICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgLSAxXS5hdHRhY2tlZCkge1xuICAgIHJldHVybiBbcm93LCBjb2wgLSAxXTtcbiAgfSBlbHNlIGlmIChjb2wgKyAxIDw9IDkgJiYgIXBsYXllckdhbWVib2FyZFtyb3ddW2NvbCArIDFdLmF0dGFja2VkKSB7XG4gICAgcmV0dXJuIFtyb3csIGNvbCArIDFdO1xuICB9XG59XG4iLCJpbXBvcnQgYXR0YWNrVmVydGljYWwgZnJvbSAnLi9hdHRhY2tWZXJ0aWNhbC5qcyc7XG5pbXBvcnQgYXR0YWNrSG9yaXpvbnRhbCBmcm9tICcuL2F0dGFja0hvcml6b250YWwuanMnO1xuaW1wb3J0IGF0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24gZnJvbSAnLi9hdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXR0YWNrQ29vcmRpbmF0ZXMoXG4gIHBsYXllckdhbWVib2FyZCxcbiAgcm93LFxuICBjb2wsXG4gIGRpcmVjdGlvblxuKSB7XG4gIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICByZXR1cm4gYXR0YWNrVmVydGljYWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICByZXR1cm4gYXR0YWNrSG9yaXpvbnRhbChwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sKTtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGlmeURpcmVjdGlvbihwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sKSB7XG4gIGxldCBkaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGNvbnN0IHRvcCA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyAtIDEgPj0gMCA/IHBsYXllckdhbWVib2FyZFtyb3cgLSAxXVtjb2xdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGNvbnN0IGJvdHRvbSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyArIDEgPD0gOSA/IHBsYXllckdhbWVib2FyZFtyb3cgKyAxXVtjb2xdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGNvbnN0IGxlZnQgPSAoKCkgPT4ge1xuICAgIHJldHVybiBjb2wgLSAxID49IDAgPyBwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgLSAxXSA6IGZhbHNlO1xuICB9KSgpO1xuICBjb25zdCByaWdodCA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIGNvbCArIDEgPD0gOSA/IHBsYXllckdhbWVib2FyZFtyb3ddW2NvbCArIDFdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGlmICh0b3AgJiYgdG9wLmF0dGFja2VkICYmICdzaGlwJyBpbiB0b3ApIHtcbiAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2UgaWYgKGJvdHRvbSAmJiBib3R0b20uYXR0YWNrZWQgJiYgJ3NoaXAnIGluIGJvdHRvbSkge1xuICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH0gZWxzZSBpZiAobGVmdCAmJiBsZWZ0LmF0dGFja2VkICYmICdzaGlwJyBpbiBsZWZ0KSB7XG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICB9IGVsc2UgaWYgKHJpZ2h0ICYmIHJpZ2h0LmF0dGFja2VkICYmICdzaGlwJyBpbiByaWdodCkge1xuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKGdhbWVib2FyZCkge1xuICBsZXQgc3RhdHVzID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbaV1bal07XG4gICAgICBpZiAoJ3NoaXAnIGluIHBsYWNlICYmIHBsYWNlLnNoaXAuaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdHVzO1xufVxuIiwiaW1wb3J0IHNldFNoaXAgZnJvbSAnLi4vZmFjdG9yaWVzL3NldFNoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVNoaXAoZ2FtZWJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBzdGFydCA9IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBlbmQgPSBjb29yZGluYXRlc1sxXTtcbiAgY29uc3QgY2VsbHMgPSBbXTtcbiAgY29uc3QgYXhpcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgeCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gc3RhcnRbMF0gPT09IGVuZFswXSA/IHRydWUgOiBmYWxzZTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGxlbmd0aCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4geCA9PT0gdHJ1ZSA/IGVuZFsxXSAtIHN0YXJ0WzFdICsgMSA6IGVuZFswXSAtIHN0YXJ0WzBdICsgMTtcbiAgICB9KSgpO1xuICAgIHJldHVybiB7IHgsIGxlbmd0aCB9O1xuICB9KSgpO1xuICBpZiAoYXhpcy54ID09PSB0cnVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBheGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjZWxscy5wdXNoKFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2VsbHMucHVzaChbc3RhcnRbMF0gKyBpLCBzdGFydFsxXV0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwID0gc2V0U2hpcChheGlzLmxlbmd0aCk7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBwbGFjZSA9IGdhbWVib2FyZFtjZWxsWzBdXVtjZWxsWzFdXTtcbiAgICBpZiAoJ3NoaXAnIGluIHBsYWNlKSByZXR1cm4gbmV3IEVycm9yKCdTaGlwIGluIHBsYWNlJyk7XG4gICAgZWxzZSBnYW1lYm9hcmRbY2VsbFswXV1bY2VsbFsxXV0uc2hpcCA9IHNoaXA7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhnYW1lYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBjb2wgPSBjb29yZGluYXRlc1sxXTtcbiAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbcm93XVtjb2xdO1xuICBpZiAocGxhY2UuYXR0YWNrZWQgPT09IHRydWUpIHJldHVybiBuZXcgRXJyb3IoJ1BsYWNlIGFscmVhZHkgYXR0YWNrZWQuJyk7XG4gIHBsYWNlLmF0dGFja2VkID0gdHJ1ZTtcbiAgaWYgKCdzaGlwJyBpbiBwbGFjZSkge1xuICAgIHBsYWNlLnNoaXAuaGl0KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZ2V0Q29vcmRpbmF0ZXMgZnJvbSAnLi9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzLmpzJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy92YWxpZGF0ZUNvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi9wbGFjZVNoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMoZ2FtZWJvYXJkKSB7XG4gIGNvbnN0IHNoaXBzTGVuZ2h0cyA9IFs2LCA1LCA0LCAzLCAyXTtcbiAgY29uc3QgYWxsU2hpcHNDb29yZGluYXRlcyA9IFtdO1xuICBzaGlwc0xlbmdodHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gICAgd2hpbGUgKHBsYWNlZFNoaXAgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKHNoaXBMZW5ndGgpO1xuICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpO1xuICAgICAgaWYgKHZhbGlkYXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXVswXSwgY29vcmRpbmF0ZXNbMF1bMV1dO1xuICAgICAgICBjb25zdCBpZHggPSBjb29yZGluYXRlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBlbmRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1tpZHhdWzBdLCBjb29yZGluYXRlc1tpZHhdWzFdXTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW3N0YXJ0Q29vcmRpbmF0ZXMsIGVuZENvb3JkaW5hdGVzXTtcbiAgICAgICAgcGxhY2VTaGlwKGdhbWVib2FyZCwgc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgICAgYWxsU2hpcHNDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcGxhY2VkU2hpcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFsbFNoaXBzQ29vcmRpbmF0ZXM7XG59XG4iLCJpbXBvcnQgZ2V0UmFuZG9tQ2VsbE51bSBmcm9tICcuL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRSYW5kb21DZWxsTnVtLmpzJztcbmltcG9ydCBnZXRSYW5kb21EaXJlY3Rpb24gZnJvbSAnLi9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tRGlyZWN0aW9uLmpzJztcbmltcG9ydCBnZXRDb29yZGluYXRlcyBmcm9tICcuL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbVNoaXBDb29yZGluYXRlcyhzaGlwTGVuZ3RoKSB7XG4gIGNvbnN0IHN0YXJ0Q2VsbE51bSA9IGdldFJhbmRvbUNlbGxOdW0oKTtcbiAgY29uc3QgZGlyZWN0aW9uID0gZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZGlyZWN0aW9uLCBzdGFydENlbGxOdW0sIHNoaXBMZW5ndGgpO1xuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhkaXJlY3Rpb24sIHN0YXJ0Q2VsbE51bSwgc2hpcExlbmd0aCkge1xuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCByb3cgPSAoKCkgPT4ge1xuICAgIHJldHVybiBzdGFydENlbGxOdW0gPCAxMCA/IDAgOiBNYXRoLmZsb29yKHN0YXJ0Q2VsbE51bSAvIDEwKTtcbiAgfSkoKTtcbiAgY29uc3QgY29sID0gKCgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRDZWxsTnVtIDwgMTAgPyBzdGFydENlbGxOdW0gOiBzdGFydENlbGxOdW0gJSAxMDtcbiAgfSkoKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGlmICg5IC0gKHNoaXBMZW5ndGggLSAxKSA+PSByb3cpIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaSwgY29sXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyb3cgLSAoc2hpcExlbmd0aCAtIDEpID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPiByb3cgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaSwgY29sXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgaWYgKDkgLSAoc2hpcExlbmd0aCAtIDEpID49IGNvbCkge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtyb3csIGldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbCAtIChzaGlwTGVuZ3RoIC0gMSkgPj0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA+IGNvbCAtIHNoaXBMZW5ndGg7IGktLSkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtyb3csIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3JkaW5hdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVswXSA9PT0gYlswXSA/IGFbMV0gLSBiWzFdIDogYVswXSAtIGJbMF07XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmFuZG9tQ2VsbE51bSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbaV1bMF07XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbaV1bMV07XG4gICAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbcm93XVtjb2xdO1xuICAgIGlmICgnc2hpcCcgaW4gcGxhY2UpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY3VycmVudDogbnVsbCxcbn07XG4iLCJpbXBvcnQgc2V0UGxheWVycyBmcm9tICcuL2ZhY3Rvcmllcy9zZXRQbGF5ZXJzLmpzJztcbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi9vcGVyYXRpb25zL3BsYWNlU2hpcC5qcyc7XG5pbXBvcnQgcmVjZWl2ZUF0dGFjayBmcm9tICcuL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5pbXBvcnQgYWxsU2hpcHNTdW5rIGZyb20gJy4vb3BlcmF0aW9ucy9hbGxTaGlwc1N1bmsuanMnO1xuaW1wb3J0IHNldEdhbWVib2FyZCBmcm9tICcuL2ZhY3Rvcmllcy9zZXRHYW1lYm9hcmQuanMnO1xuaW1wb3J0IHNldFNoaXBzT25SYW5kb21Db29yZGluYXRlcyBmcm9tICcuL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R2FtZSgpIHtcbiAgY29uc3QgZ2FtZSA9IHNldFBsYXllcnMoKTtcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKHBsYXllcklkKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVbYHBsYXllciR7cGxheWVySWR9YF0uZ2FtZWJvYXJkO1xuICB9O1xuICBjb25zdCBzZXRQbGF5ZXJOYW1lID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgZ2FtZVtgcGxheWVyJHtpZH1gXS5uYW1lID0gbmFtZTtcbiAgfTtcbiAgY29uc3Qgc2V0UGxheWVyU2hpcHMgPSAocGxheWVySWQsIHNoaXBzKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZ2V0R2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBwbGFjZVNoaXAoZ2FtZWJvYXJkLCBzaGlwKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVzdG9yZUdhbWVib2FyZCA9IChwbGF5ZXJJZCkgPT4ge1xuICAgIHJldHVybiAoZ2FtZVtgcGxheWVyJHtwbGF5ZXJJZH1gXS5nYW1lYm9hcmQgPSBzZXRHYW1lYm9hcmQoKSk7XG4gIH07XG4gIGNvbnN0IHNldFBsYXllclNoaXBzUmFuZG9tbHkgPSAocGxheWVySWQpID0+IHtcbiAgICByZXN0b3JlR2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBsZXQgZ2FtZWJvYXJkID0gZ2V0R2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlcyA9IHNldFNoaXBzT25SYW5kb21Db29yZGluYXRlcyhnYW1lYm9hcmQpO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnYW1lLFxuICAgIGdldEdhbWVib2FyZCxcbiAgICBzZXRQbGF5ZXJOYW1lLFxuICAgIHNldFBsYXllclNoaXBzLFxuICAgIHNldFBsYXllclNoaXBzUmFuZG9tbHksXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59XG4iLCJpbXBvcnQgaWRlbnRpZnlEaXJlY3Rpb24gZnJvbSAnLi9tYWNoaW5lL2lkZW50aWZ5RGlyZWN0aW9uLmpzJztcbmltcG9ydCBnZXRBdHRhY2tDb29yZGluYXRlcyBmcm9tICcuL21hY2hpbmUvZ2V0QXR0YWNrQ29vcmRpbmF0ZXMuanMnO1xuaW1wb3J0IGF0dGFja1JhbmRvbWx5IGZyb20gJy4vbWFjaGluZS9hdHRhY2tSYW5kb21seS5qcyc7XG5pbXBvcnQgcmVjZWl2ZUF0dGFjayBmcm9tICcuL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hY2hpbmUoZ2FtZWJvYXJkKSB7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgY29uc3QgYWN0aXZlVGFyZ2V0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyR2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBwbGFjZSA9IHBsYXllckdhbWVib2FyZFtpXVtqXTtcbiAgICAgICAgaWYgKHBsYWNlLmF0dGFja2VkKSB7XG4gICAgICAgICAgaWYgKCdzaGlwJyBpbiBwbGFjZSAmJiAhcGxhY2Uuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gaWRlbnRpZnlEaXJlY3Rpb24ocGxheWVyR2FtZWJvYXJkLCBpLCBqKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRhY2tDb29yZGluYXRlcyhwbGF5ZXJHYW1lYm9hcmQsIGksIGosIGRpcmVjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcbiAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGFjdGl2ZVRhcmdldCgpO1xuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkocGxheWVyR2FtZWJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIHRhcmdldCk7XG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGF0dGFjayB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQoXG4gIHBhcmVudCxcbiAgdHlwZSxcbiAgYXJyYXlPZkNsYXNzZXMsXG4gIHRleHRDb250ZW50LFxuICBpZCxcbiAgYXJyYXlPZkF0dHJpYnV0ZXNcbikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGFycmF5T2ZDbGFzc2VzICE9PSB1bmRlZmluZWQgJiYgYXJyYXlPZkNsYXNzZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgYXJyYXlPZkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaWQgIT09IHVuZGVmaW5lZCkgZWxlbWVudC5pZCA9IGlkO1xuICBpZiAoYXJyYXlPZkF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCAmJiBhcnJheU9mQXR0cmlidXRlcy5sZW5ndGggIT09IDApIHtcbiAgICBhcnJheU9mQXR0cmlidXRlcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG9iai5hdHRyaWJ1dGUsIG9iai52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzZXRGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3NldEZvcm0uanMnO1xuXG5jb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlCdG4nKTtcblxuLy8gc2V0VGltZW91dCBpcyB1c2VkIHRvIGRpc3BsYXkgRE9NIGFuaW1hdGlvbnNcbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBsYXlCdG4ucmVtb3ZlKCk7XG4gIH0sIDUwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldEZvcm0oKTsgLy8gVGhlIGdhbWUgc3RhcnRzIHJlcXVlc3RpbmcgdGhlIHBsYXllcidzIG5hbWVcbiAgfSwgNTAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUh0bWxFbGVtZW50Iiwic2V0dXAiLCJzdHlsZSIsInNldEZvcm0iLCJnZW5lcmFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiYXR0cmlidXRlIiwidmFsdWUiLCJpbnB1dCIsInJlcXVpcmVkIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRDZWxsSWQiLCJzdHIiLCJyb3ciLCJjb2wiLCJyIiwiZ2V0Q29vcmRpbmF0ZXNGcm9tSWQiLCJjZWxsSWQiLCJjZWxsTnVtIiwic3BsaXQiLCJyb3dOdW0iLCJsZW5ndGgiLCJjb2xOdW0iLCJwYXJzZUludCIsImRpc3BsYXlBbmRIaWRlU2VjdGlvbnMiLCJBdHRhY2siLCJwbGF5ZXJBdHRhY2siLCJwbGF5IiwiZW5kIiwibWFjaGluZUF0dGFjayIsImF0dGFjayIsInJlbW92ZSIsInNoaXBJbkNvb3JkaW5hdGVzIiwiY2VsbCIsImdhbWVib2FyZCIsImN1cnJlbnQiLCJnZXRHYW1lYm9hcmQiLCJzdGF0dXMiLCJhbGxTaGlwc1N1bmsiLCJsZWdlbmQiLCJzZXRNYWNoaW5lIiwibWFjaGluZSIsImF0dGFja0Nvb3JkaW5hdGVzIiwiYmFzaWNPcmllbnRhdGlvbiIsInRleHRDb250ZW50IiwiYW5pbWF0aW9uVGV4dCIsInBsYXllclNlY3Rpb24iLCJkaXNwbGF5IiwiQUlTZWN0aW9uIiwicGxheWVyTmFtZSIsImdhbWUiLCJwbGF5ZXIxIiwibmFtZSIsInJlY2VpdmVBdHRhY2siLCJzZXRNYWNoaW5lR2FtZWJvYXJkIiwiZ2JDbGFzc2VzIiwibWFjaGluZVNlY3Rpb24iLCJtYWNoaW5lR2FtZWJvYXJkIiwiaSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhdHRhY2tGbiIsImNvb3JkaW5hdGVzIiwiaWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0UGxheWVyR2FtZWJvYXJkIiwiZ2IiLCJwbGF5ZXJHYW1lYm9hcmQiLCJkcmFnRW5kIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiZHJhZ0VudGVyIiwicHJldmVudERlZmF1bHQiLCJkcmFnTGVhdmUiLCJkcmFnT3ZlciIsImRyYWdTdGFydCIsIm9mZnNldFgiLCJjbGllbnRYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9mZnNldFkiLCJjbGllbnRZIiwidG9wIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRET01Db29yZGluYXRlcyIsInNldHVwU2hpcFN0eWxlIiwiZ2V0RWxlbWVudHNPblNoaXBBcmVhIiwibGlua1NoaXBXaXRoQ2VsbCIsImdldEdhbWVDb29yZGluYXRlcyIsInNldEZpbmFsQnV0dG9ucyIsImNvbmZpcm1hdGlvbiIsInRyeUFnYWluRm4iLCJkcm9wIiwiY29udGFpbmVyIiwibmV3WCIsIm5ld1kiLCJkcmFnZ2FibGVJZCIsImdldERhdGEiLCJkcmFnZ2FibGUiLCJzaGlwTGVuZ3RoIiwiY2hhckF0IiwiZWxlbWVudHNPblNoaXBBcmVhIiwiZWxlbWVudCIsInNoaXBzIiwiZm4iLCJvZmZzZXRzIiwicGFyc2UiLCJjb250YWluZXJSZWN0IiwiaWRlbnRpZnlFbGVtZW50c0luQXJlYSIsIm5ld0NvbnRhaW5lciIsImNsb25lIiwiY2xvbmVOb2RlIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInJlY3QiLCJ0b3BDb29yZGluYXRlIiwid2luZG93Iiwic2Nyb2xsWSIsImJvdHRvbUNvb3JkaW5hdGUiLCJib3R0b20iLCJsZWZ0Q29vcmRpbmF0ZSIsInNjcm9sbFgiLCJyaWdodENvb3JkaW5hdGUiLCJyaWdodCIsInNoaXBzQ29vcmRpbmF0ZXMiLCJzaGlwSWQiLCJnZXRDZWxsTnVtIiwiZ2V0Q29vcmRpbmF0ZXMiLCJFcnJvciIsInN0YXJ0Q2VsbCIsImVuZENlbGwiLCJzdGFydENvb3JkaW5hdGVzIiwiZW5kQ29vcmRpbmF0ZXMiLCJwdXNoIiwiZWxlbWVudHNUb1NlYXJjaCIsImFsbEVsZW1lbnRzIiwiZWxlbWVudHMiLCJlbGVtZW50VG9wIiwiZWxlbWVudEJvdHRvbSIsImVsZW1lbnRMZWZ0IiwiZWxlbWVudFJpZ2h0IiwidHJhbnNmb3JtIiwiY2hlY2ttYXJrIiwic3RhcnQiLCJzZXRDb25maXJtYXRpb25CdG4iLCJjb25maXJtYXRpb25GbiIsInBzdCIsImNvbmZpcm1hdGlvbkJ0biIsInNldFRyeUFnYWluQnRuIiwibmV3TGVnZW5kIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYWRkRWxlbWVudHMiLCJzZXRTaGlwc09uUFNUIiwic2V0RHJhZ0FuZERyb3AiLCJjaGFuZ2VEaXJlY3Rpb24iLCJzZXRNYW51YWxseSIsImRpcmVjdGlvbkJ0biIsImFycm93Iiwic2hpcHNDb250YWluZXIiLCJkaXJlY3Rpb24iLCJzaGlwIiwiaWNvbiIsInRyYW5zaXRpb24iLCJwbGFjZVNoaXAiLCJ1bmRlZmluZWQiLCJlbCIsInJvd3MiLCJjbGFzc2VzIiwiZ2V0SWQiLCJzZXRSYW5kb21seSIsInNldFBsYXllclNoaXBzUmFuZG9tbHkiLCJzaGlwQ29vcmRpbmF0ZXMiLCJmaXJzdENlbGwiLCJzaGlwQ2xhc3NlcyIsInJlcGVhdCIsInRyeUFnYWluQnRuIiwibmV3UGxheWVyU2VjdGlvbiIsInNldFBsYWNlU2hpcHNUb29sIiwic2V0R2FtZUNvbnRhaW5lciIsInNldFBhbmVsIiwicGFuZWwiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwic2h1ZmZsZSIsImhhbmQiLCJyYW5kb21seUJ0biIsIm1hbnVhbGx5QnRuIiwibGVnZW5kV2lubmVyIiwic2V0R2FtZSIsInNldFBsYXllck5hbWUiLCJzZXRHYW1lYm9hcmQiLCJhdHRhY2tlZCIsImoiLCJzZXRQbGF5ZXJzIiwid2lucyIsImFjdGl2ZSIsInBsYXllcjIiLCJzZXRTaGlwIiwiaGl0cyIsImlzU3VuayIsImhpdCIsImdldEF0dGFja0Nvb3JkaW5hdGVzIiwiYXR0YWNrSG9yaXpvbnRhbCIsImlkeCIsImF0dGFja1JhbmRvbWx5IiwidmFsaWRDb29yZGluYXRlcyIsInJhbmRvbUNlbGxOdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhdHRhY2tWZXJ0aWNhbCIsImF0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaWRlbnRpZnlEaXJlY3Rpb24iLCJwbGFjZSIsImF4aXMiLCJ4IiwidmFsaWRhdGUiLCJzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMiLCJzaGlwc0xlbmdodHMiLCJhbGxTaGlwc0Nvb3JkaW5hdGVzIiwicGxhY2VkU2hpcCIsInZhbGlkYXRpb24iLCJnZXRSYW5kb21DZWxsTnVtIiwiZ2V0UmFuZG9tRGlyZWN0aW9uIiwiZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzIiwic3RhcnRDZWxsTnVtIiwic29ydCIsImEiLCJiIiwicm91bmQiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwicGxheWVySWQiLCJzZXRQbGF5ZXJTaGlwcyIsInJlc3RvcmVHYW1lYm9hcmQiLCJyYW5kb21Db29yZGluYXRlcyIsImFjdGl2ZVRhcmdldCIsInBhcmVudCIsInR5cGUiLCJhcnJheU9mQ2xhc3NlcyIsImFycmF5T2ZBdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwib2JqIiwicGxheUJ0biJdLCJzb3VyY2VSb290IjoiIn0=