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
	margin-top: 5vh;
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

label {
	border-radius: 40px;
	padding: 10px;
	background-color: white;
	border: 2px solid black;
	box-shadow: 2px 2px 10px 2px black;
}

input {
	border-radius: 40px;
	padding: 20px;
	text-align: center;
	border-color: black;
	box-shadow: 2px 2px 10px 2px black;
}

input:focus {
	box-shadow: 6px 6px 10px black;;
    transform: translate(-4px,-4px);
    transition: all .5s; 
}`, "",{"version":3,"sources":["webpack://./src/components/form/style.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,WAAW;CACX,UAAU;CACV,mCAAmC;AACpC;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,uBAAuB;CACvB,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,kBAAkB;CAClB,mBAAmB;CACnB,kCAAkC;AACnC;;AAEA;CACC,8BAA8B;IAC3B,+BAA+B;IAC/B,mBAAmB;AACvB","sourcesContent":["form {\n\tmargin-top: 5vh;\n\tgap: 1.5rem;\n\topacity: 0;\n\ttransition: opacity .5s ease-in-out;\n}\n\nform.show {\n\topacity: 1;\n}\n\nlabel, input {\n\tfont-size: 3vh;\n}\n\nlabel {\n\tborder-radius: 40px;\n\tpadding: 10px;\n\tbackground-color: white;\n\tborder: 2px solid black;\n\tbox-shadow: 2px 2px 10px 2px black;\n}\n\ninput {\n\tborder-radius: 40px;\n\tpadding: 20px;\n\ttext-align: center;\n\tborder-color: black;\n\tbox-shadow: 2px 2px 10px 2px black;\n}\n\ninput:focus {\n\tbox-shadow: 6px 6px 10px black;;\n    transform: translate(-4px,-4px);\n    transition: all .5s; \n}"],"sourceRoot":""}]);
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
	background-color: white;
	box-shadow: 2px 2px 10px 2px black;
}

.pgbc, .mgbc {
	width: 30px;
	height: 30px;
	border: 1px solid #000;
	position: relative;
}

.pgbc:hover, .mgbc:hover {
	cursor: pointer;
}

.attacked {
	background-color: brown;
	transition: background-color 1s ease;
}

.missed {
	pointer-events: none;
	background-color: rgb(50, 48, 48);
	transition: background-color 1s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/gameboards/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sCAAsC;CACtC,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,uBAAuB;CACvB,oCAAoC;AACrC;;AAEA;CACC,oBAAoB;CACpB,iCAAiC;CACjC,oCAAoC;AACrC","sourcesContent":["#playerGameboard, #AIGameboard {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tbackground-color: white;\n\tbox-shadow: 2px 2px 10px 2px black;\n}\n\n.pgbc, .mgbc {\n\twidth: 30px;\n\theight: 30px;\n\tborder: 1px solid #000;\n\tposition: relative;\n}\n\n.pgbc:hover, .mgbc:hover {\n\tcursor: pointer;\n}\n\n.attacked {\n\tbackground-color: brown;\n\ttransition: background-color 1s ease;\n}\n\n.missed {\n\tpointer-events: none;\n\tbackground-color: rgb(50, 48, 48);\n\ttransition: background-color 1s ease;\n}"],"sourceRoot":""}]);
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

/* .randomlyPlacedShip.vertical {
    transform: translate(-2.5px, -2.5px);
    box-shadow: 2.5px 0px 0px 2px brown;
}

.randomlyPlacedShip.horizontal {
    transform: translate(0px, -2.5px);
    box-shadow: 0px 2.5px 0px 2px brown;
} */

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
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/placeShipsTool/setRandomly/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,kCAAkC;AACtC;;AAEA;;;;;;;;GAQG;;AAEH;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;AACb","sourcesContent":[".randomlyPlacedShip {\n    background-color: red;\n    box-shadow: 6px 6px 6px black;\n    border-radius: 50px;\n    cursor: grab;\n    position: absolute;\n    z-index: 1;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.randomlyPlacedShip.show {\n    opacity: 1;\n    transition: opacity 1s ease-in-out;\n}\n\n/* .randomlyPlacedShip.vertical {\n    transform: translate(-2.5px, -2.5px);\n    box-shadow: 2.5px 0px 0px 2px brown;\n}\n\n.randomlyPlacedShip.horizontal {\n    transform: translate(0px, -2.5px);\n    box-shadow: 0px 2.5px 0px 2px brown;\n} */\n\n#l6ship.vertical {\n    height: 168px;\n    width: 16px;\n    top: 10px;\n}\n\n#l6ship.horizontal {\n    height: 16px;\n    width: 168px;\n    left: 10px;\n}\n\n#l5ship.vertical {\n    height: 140px;\n    width: 16px;\n    top: 10px;\n}\n\n#l5ship.horizontal {\n    height: 16px;\n    width: 140px;\n    left: 10px;\n}\n\n#l4ship.vertical {\n    height: 112px;\n    width: 16px;\n    top: 10px;\n}\n\n#l4ship.horizontal {\n    height: 16px;\n    width: 112px;\n    left: 10px;\n}\n\n#l3ship.vertical {\n    height: 84px;\n    width: 16px;\n    top: 5px;\n}\n\n#l3ship.horizontal {\n    height: 16px;\n    width: 84px;\n    left: 5px;\n}\n\n#l2ship.vertical {\n    height: 56px;\n    width: 16px;\n    top: 5px;\n}\n\n#l2ship.horizontal {\n    height: 16px;\n    width: 56px;\n    left: 5px;\n}"],"sourceRoot":""}]);
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
	width: 100%;
}

.pstRow{
	height: 25px;
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

`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/placeShipsTool/style.css"],"names":[],"mappings":"AAAA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,qCAAqC;CACrC,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,qBAAqB;CACrB,6BAA6B;CAC7B,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,UAAU;AACX;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,YAAY;CACZ,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;IACI,4CAA4C;CAC/C,UAAU;IACP,mBAAmB;AACvB;;AAEA;CACC,WAAW;CACX,aAAa;AACd;;AAEA;CACC,WAAW;CACX,aAAa;CACb,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;AACnB;;AAEA;IACI;AACJ;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,oBAAoB;CACpB,SAAS;AACV;;AAEA;CACC,oCAAoC;CACpC,oBAAoB;AACrB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,8BAA8B;CAC9B,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,mCAAmC;IAChC,gCAAgC;AACpC;;AAEA;CACC,eAAe;IACZ,8BAA8B;CACjC,UAAU;IACP,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,oBAAoB;CACpB,mBAAmB;CACnB,uBAAuB;AACxB","sourcesContent":["#pst > #legend {\n\twidth: 280px;\n}\n\n#shipsContainer {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(1, 1fr);\n\theight: 100px;\n\twidth: 100%;\n}\n\n.pstRow{\n\theight: 25px;\n\tmargin: 0;\n}\n\n.pstShip {\n\tbackground-color: red;\n\tbox-shadow: 6px 6px 6px black;\n\tborder-radius: 50px;\n\tcursor: grab;\n\tposition: absolute;\n\tz-index: 1;\n}\n\n.pstShip.horizontal:hover {\n    transform: translate(-4px,-4px);\n    transition: all .5s;\n}\n\n#pShip6.horizontal {\n\theight: 16px;\n\twidth: 168px;\n}\n\n#pShip5.horizontal {\n\theight: 16px;\n\twidth: 140px;\n\tmargin-right: 80px;\n}\n\n#pShip2.horizontal {\n\theight: 16px;\n\twidth: 56px;\n\tmargin-left: 160px;\n}\n\n#pShip4.horizontal {\n\theight: 16px;\n\twidth: 112px;\n\tmargin-right: 100px;\n}\n\n#pShip3.horizontal {\n\theight: 16px;\n\twidth: 84px;\n\tmargin-left: 140px;\n}\n\n.rotate {\n\ttransform: rotate(90deg);\n}\n\n.rotate:hover {\n    transform: translate(-4px,-4px) rotate(0deg);\n\tz-index: 2;\n    transition: all .5s;\n}\n\n#pShip6.vertical {\n\twidth: 16px;\n\theight: 168px;\n}\n\n#pShip5.vertical {\n\twidth: 16px;\n\theight: 140px;\n\tmargin-right: 80px;\n}\n\n#pShip2.vertical {\n\twidth: 16px;\n\theight: 56px;\n\tmargin-left: 160px;\n}\n\n#pShip4.vertical {\n\twidth: 16px;\n\theight: 112px;\n\tmargin-right: 100px;\n}\n\n#pShip3.vertical {\n\twidth: 16px;\n\theight: 84px;\n\tmargin-left: 140px;\n}\n\n.drag-over {\n    background-color: grey\n}\n\n.hide {\n\topacity: 0;\n}\n\n.placedShip {\n\tpointer-events: none;\n\tmargin: 0;\n}\n\n.unavailableCell {\n\tbackground-color: rgb(227, 232, 236);\n\tpointer-events: none;\n}\n\n#btnContainer {\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n\n#pst > button {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\twidth: 280px;\n\theight: 45px;\n\tfont-size: 15px;\n\tpadding-left: 40px;\n\tpadding-right: 40px;\n}\n\n#pst > button:hover {\n\tcursor: pointer;\n    box-shadow: 2px 2px 10px black;\n    transform: translate(-4px,-4px);\n    transition: all .5s;\n}\n\n#pst > button:active {\n\tbackground-color: rgb(113, 166, 32);\n    transition: background-color .5s;\n}\n\n#pst > button:focus {\n\tcursor: pointer;\n    box-shadow: 6px 6px 10px black;\n\topacity: 1;\n    transform: translate(0px,0px);\n    transition: all .5s;\n}\n\nimg{\n\twidth: 30px;\n\tcolor: white;\n\tfilter: invert(100%);\n\tborder-radius: 40px;\n\tborder: 2px solid black;\n}\n\n"],"sourceRoot":""}]);
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

#generalContainer.hide, header.hide {
	opacity: 0;
	transition: 1s ease-in-out;
}

#pst, #panel {
	gap: 10px;
	height: 160px;
	margin-top: 4vh;
	margin-bottom: 2vh;
	border-radius: 20px;
	padding: 10px;
	background-color: white;
	border: 2px solid black;
	box-shadow: 2px 2px 10px 2px black;
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
	color: green;
	text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/components/gameContainer/GUI/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB,mBAAmB;CACnB,uBAAuB;CACvB,sBAAsB;CACtB,SAAS;CACT,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,SAAS;CACT,aAAa;CACb,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,aAAa;CACb,uBAAuB;CACvB,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,UAAU;CACV,mCAAmC;AACpC;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,0BAA0B;AAC3B","sourcesContent":["#generalContainer {\n    display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tgap: 10px;\n\topacity: 1;\n\ttransition: 1s ease-in-out;\n}\n\n#generalContainer.hide, header.hide {\n\topacity: 0;\n\ttransition: 1s ease-in-out;\n}\n\n#pst, #panel {\n\tgap: 10px;\n\theight: 160px;\n\tmargin-top: 4vh;\n\tmargin-bottom: 2vh;\n\tborder-radius: 20px;\n\tpadding: 10px;\n\tbackground-color: white;\n\tborder: 2px solid black;\n\tbox-shadow: 2px 2px 10px 2px black;\n}\n\n#pst, #playerSection, #AIGameboard, #panel {\n\topacity: 0;\n\ttransition: opacity .5s ease-in-out;\n}\n\n#pst.show, #playerSection.show, #AIGameboard.show, #panel.show {\n\topacity: 1;\n}\n\n#panel > p:nth-child(2) {\n\tfont-size: 45px;\n\tfont-weight: 900;\n\tcolor: green;\n\ttext-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/graphicalShips/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/graphicalShips/style.css ***!
  \***************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#graphicalShips {
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(5, 251, 255);
}

.shipContainer {
    position: relative;
    height: 20vh;
    width: 100vw;
    padding: 0;
    animation: moveWaves 4s ease infinite;
    animation-fill-mode: forwards;
}

.backgroundRow {
    height: 5.55vh;
    width: 100%;
    background-size: 5.55vh;
    background-repeat: repeat;
    background-color: aqua;
    box-shadow: 2px 2px 60px 2px rgb(0, 224, 253);
    animation-fill-mode: forwards;
    z-index: -2;
}

.backgroundRow1{
    animation: moveWaves1 4s ease infinite;
}

.backgroundRow2 {
    animation: moveWaves2 4s ease infinite;
    transform: translate(5px, 5px);
    z-index: -1;
}

.backgroundRow3 {
    animation: moveWaves3 4s ease infinite;
    transform: translate(-5px, -5px)
}

@keyframes moveWaves1 {
    0% {
        transform: translate(0px, 0px);
        }
    25% {
        transform: translate(5px, 5px);
    }
    50% {
        transform: translate(10px, 10px);
    }
    75% {
        transform: translate(5px, 5px);
    }

    95% {
        transform: translate(0px, 0px);
    }
}

@keyframes moveWaves2 {
    0% {
        transform: translate(5px, 5px);
    }

    25% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(-5px, -5px);
    }

    75% {
        transform: translate(0px, 0px);
    }
    
    95% {
        transform: translate(5px, 5px);
    }
}

@keyframes moveWaves3 {
0% {
        transform: translate(-5px, -5px);
    }

    25% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(5px, 5px);
    }

    75% {
        transform: translate(0px, 0px);
    }

    95% {
        transform: translate(-5px, -5px);
    }
}

.graphicalShip {
    position: absolute;
    background-color: gray;
    border-radius: 5px 5px 40px 40px;
    animation-fill-mode: forwards;
    opacity: 0;
    width: 12vh;
    height: 3vh;
}

.leftSail {
    position: absolute;
    border-left: 4vh solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 8vh solid gray;
    width: 0vw;
    height: 0vh;
    top: -8.5vh;
    left: 2vh;
    transform: rotate(0deg);
}

.rightSail {
    position: absolute;
    border-left: 0vh solid transparent;
    border-right: 6vh solid transparent;
    border-bottom: 10vh solid gray;
    width: 0;
    height: 0;
    top: -10.5vh;
    left: 6.4vh;
}

#graphicalShip1 {
    animation: moveShip 12s ease infinite;
}

#graphicalShip2 {
    animation: moveShip 8s ease infinite;
}

#graphicalShip3 {
    animation: moveShip 10s ease infinite;
}

#graphicalShip4 {
    animation: moveShip 6s ease infinite;
}

#graphicalShip5 {
    animation: moveShip 14s ease infinite;
}

#graphicalShip6 {
    animation: moveShip 9s ease infinite;
}

@keyframes moveShip {
    0% {
        opacity: 0;
        transform: translate(-50vw, 0) rotate(0deg);
    }

    10% {
        opacity: 1;
        transform: translate(-40vw, 0) rotate(-25deg);
    }

    20% {
        opacity: 1;
        transform: translate(-30vw, 0) rotate(0deg);
    }

    30% {
        opacity: 1;
        transform: translate(-20vw, 0) rotate(25deg);
    }

    40% {
        opacity: 1;
        transform: translate(-10vw, 0) rotate(0deg);
    }

    50% {
        opacity: 1;
        transform: translate(0vw, 0) rotate(-25deg);
    }

    60% {
        opacity: 1;
        transform: translate(10vw, 0) rotate(0deg);
    }

    70% {
        opacity: 1;
        transform: translate(20vw, 0) rotate(25deg);
    }

    80% {
        opacity: 1;
        transform: translate(30vw, 0) rotate(0deg);
    }

    90% {
        opacity: 1;
        transform: translate(40vw, 0) rotate(-25deg);
    }

    100% {
        transform: translate(50vw, 0) rotate(0deg);
        opacity: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/components/graphicalShips/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,qCAAqC;IACrC,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,WAAW;IACX,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;IACtB,6CAA6C;IAC7C,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,sCAAsC;IACtC;AACJ;;AAEA;IACI;QACI,8BAA8B;QAC9B;IACJ;QACI,8BAA8B;IAClC;IACA;QACI,gCAAgC;IACpC;IACA;QACI,8BAA8B;IAClC;;IAEA;QACI,8BAA8B;IAClC;AACJ;;AAEA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,gCAAgC;IACpC;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,8BAA8B;IAClC;AACJ;;AAEA;AACA;QACQ,gCAAgC;IACpC;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,gCAAgC;IACpC;AACJ;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,gCAAgC;IAChC,6BAA6B;IAC7B,UAAU;IACV,WAAW;IACX,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;IAClC,iCAAiC;IACjC,6BAA6B;IAC7B,UAAU;IACV,WAAW;IACX,WAAW;IACX,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;IAClC,mCAAmC;IACnC,8BAA8B;IAC9B,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;QACI,UAAU;QACV,2CAA2C;IAC/C;;IAEA;QACI,UAAU;QACV,6CAA6C;IACjD;;IAEA;QACI,UAAU;QACV,2CAA2C;IAC/C;;IAEA;QACI,UAAU;QACV,4CAA4C;IAChD;;IAEA;QACI,UAAU;QACV,2CAA2C;IAC/C;;IAEA;QACI,UAAU;QACV,2CAA2C;IAC/C;;IAEA;QACI,UAAU;QACV,0CAA0C;IAC9C;;IAEA;QACI,UAAU;QACV,2CAA2C;IAC/C;;IAEA;QACI,UAAU;QACV,0CAA0C;IAC9C;;IAEA;QACI,UAAU;QACV,4CAA4C;IAChD;;IAEA;QACI,0CAA0C;QAC1C,UAAU;IACd;AACJ","sourcesContent":["#graphicalShips {\n    position: fixed;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(5, 251, 255);\n}\n\n.shipContainer {\n    position: relative;\n    height: 20vh;\n    width: 100vw;\n    padding: 0;\n    animation: moveWaves 4s ease infinite;\n    animation-fill-mode: forwards;\n}\n\n.backgroundRow {\n    height: 5.55vh;\n    width: 100%;\n    background-size: 5.55vh;\n    background-repeat: repeat;\n    background-color: aqua;\n    box-shadow: 2px 2px 60px 2px rgb(0, 224, 253);\n    animation-fill-mode: forwards;\n    z-index: -2;\n}\n\n.backgroundRow1{\n    animation: moveWaves1 4s ease infinite;\n}\n\n.backgroundRow2 {\n    animation: moveWaves2 4s ease infinite;\n    transform: translate(5px, 5px);\n    z-index: -1;\n}\n\n.backgroundRow3 {\n    animation: moveWaves3 4s ease infinite;\n    transform: translate(-5px, -5px)\n}\n\n@keyframes moveWaves1 {\n    0% {\n        transform: translate(0px, 0px);\n        }\n    25% {\n        transform: translate(5px, 5px);\n    }\n    50% {\n        transform: translate(10px, 10px);\n    }\n    75% {\n        transform: translate(5px, 5px);\n    }\n\n    95% {\n        transform: translate(0px, 0px);\n    }\n}\n\n@keyframes moveWaves2 {\n    0% {\n        transform: translate(5px, 5px);\n    }\n\n    25% {\n        transform: translate(0px, 0px);\n    }\n\n    50% {\n        transform: translate(-5px, -5px);\n    }\n\n    75% {\n        transform: translate(0px, 0px);\n    }\n    \n    95% {\n        transform: translate(5px, 5px);\n    }\n}\n\n@keyframes moveWaves3 {\n0% {\n        transform: translate(-5px, -5px);\n    }\n\n    25% {\n        transform: translate(0px, 0px);\n    }\n\n    50% {\n        transform: translate(5px, 5px);\n    }\n\n    75% {\n        transform: translate(0px, 0px);\n    }\n\n    95% {\n        transform: translate(-5px, -5px);\n    }\n}\n\n.graphicalShip {\n    position: absolute;\n    background-color: gray;\n    border-radius: 5px 5px 40px 40px;\n    animation-fill-mode: forwards;\n    opacity: 0;\n    width: 12vh;\n    height: 3vh;\n}\n\n.leftSail {\n    position: absolute;\n    border-left: 4vh solid transparent;\n    border-right: 0 solid transparent;\n    border-bottom: 8vh solid gray;\n    width: 0vw;\n    height: 0vh;\n    top: -8.5vh;\n    left: 2vh;\n    transform: rotate(0deg);\n}\n\n.rightSail {\n    position: absolute;\n    border-left: 0vh solid transparent;\n    border-right: 6vh solid transparent;\n    border-bottom: 10vh solid gray;\n    width: 0;\n    height: 0;\n    top: -10.5vh;\n    left: 6.4vh;\n}\n\n#graphicalShip1 {\n    animation: moveShip 12s ease infinite;\n}\n\n#graphicalShip2 {\n    animation: moveShip 8s ease infinite;\n}\n\n#graphicalShip3 {\n    animation: moveShip 10s ease infinite;\n}\n\n#graphicalShip4 {\n    animation: moveShip 6s ease infinite;\n}\n\n#graphicalShip5 {\n    animation: moveShip 14s ease infinite;\n}\n\n#graphicalShip6 {\n    animation: moveShip 9s ease infinite;\n}\n\n@keyframes moveShip {\n    0% {\n        opacity: 0;\n        transform: translate(-50vw, 0) rotate(0deg);\n    }\n\n    10% {\n        opacity: 1;\n        transform: translate(-40vw, 0) rotate(-25deg);\n    }\n\n    20% {\n        opacity: 1;\n        transform: translate(-30vw, 0) rotate(0deg);\n    }\n\n    30% {\n        opacity: 1;\n        transform: translate(-20vw, 0) rotate(25deg);\n    }\n\n    40% {\n        opacity: 1;\n        transform: translate(-10vw, 0) rotate(0deg);\n    }\n\n    50% {\n        opacity: 1;\n        transform: translate(0vw, 0) rotate(-25deg);\n    }\n\n    60% {\n        opacity: 1;\n        transform: translate(10vw, 0) rotate(0deg);\n    }\n\n    70% {\n        opacity: 1;\n        transform: translate(20vw, 0) rotate(25deg);\n    }\n\n    80% {\n        opacity: 1;\n        transform: translate(30vw, 0) rotate(0deg);\n    }\n\n    90% {\n        opacity: 1;\n        transform: translate(40vw, 0) rotate(-25deg);\n    }\n\n    100% {\n        transform: translate(50vw, 0) rotate(0deg);\n        opacity: 0;\n    }\n}"],"sourceRoot":""}]);
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

#playBtn {
	margin-top: 25vh;;
}

button {
	background-color: black;
	color: white;
    border-radius: 20px;
    border-style: none;
	box-shadow: 4px 4px 10px black;
	padding: 1rem;
	font-size: 5vh;
	z-index: 2;
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
	margin-top: 2vh;
	font-size: min(15vw, 80px);
	z-index: 1;
}

footer {
	position:fixed;
	bottom: 2vh;
	font-size: 2vh;
}

header, footer{
	border-radius: 60px;
	background-color: white;
	padding: 15px;
	border: 2px solid black;
	box-shadow: 6px 6px 20px black;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;CACxB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,qCAAqC;CACrC,gBAAgB;CAChB,aAAa;CACb,uBAAuB;CACvB,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,uBAAuB;CACvB,YAAY;IACT,mBAAmB;IACnB,kBAAkB;CACrB,8BAA8B;CAC9B,aAAa;CACb,cAAc;CACd,UAAU;AACX;;AAEA;CACC,eAAe;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;CACC,eAAe;CACf,mCAAmC;IAChC,8BAA8B;IAC9B,6BAA6B;EAC/B,UAAU;IACR,2DAA2D;AAC/D;;AAEA;CACC,eAAe;CACf,0BAA0B;CAC1B,UAAU;AACX;;AAEA;CACC,cAAc;CACd,WAAW;CACX,cAAc;AACf;;AAEA;CACC,mBAAmB;CACnB,uBAAuB;CACvB,aAAa;CACb,uBAAuB;CACvB,8BAA8B;AAC/B","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n\nbody {\n\tbackground-color: white;\n\tcolor: rgb(14, 15, 14);\n\tfont-family: 'Cutive Mono', monospace;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items:center;\n\ttext-align: center;\n\twidth: 100vw;\n}\n\ninput, button {\n\tfont-family: 'Montserrat', sans-serif;\n}\n\n#playBtn {\n\tmargin-top: 25vh;;\n}\n\nbutton {\n\tbackground-color: black;\n\tcolor: white;\n    border-radius: 20px;\n    border-style: none;\n\tbox-shadow: 4px 4px 10px black;\n\tpadding: 1rem;\n\tfont-size: 5vh;\n\tz-index: 2;\n}\n\nbutton:hover {\n\tcursor: pointer;\n    box-shadow: 2px 2px 10px black;\n    transform: translate(-4px,-4px);\n    transition: all .5s; \n}\n\nbutton:focus {\n\tcursor: pointer;\n\tbackground-color: rgb(113, 166, 32);\n    box-shadow: 6px 6px 10px black;\n    transform: translate(4px,4px);\n \topacity: 0;\n    transition: background-color .5s, transform .5s, opacity 1s;\n}\n\nheader {\n\tmargin-top: 2vh;\n\tfont-size: min(15vw, 80px);\n\tz-index: 1;\n}\n\nfooter {\n\tposition:fixed;\n\tbottom: 2vh;\n\tfont-size: 2vh;\n}\n\nheader, footer{\n\tborder-radius: 60px;\n\tbackground-color: white;\n\tpadding: 15px;\n\tborder: 2px solid black;\n\tbox-shadow: 6px 6px 20px black;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/graphicalShips/style.css":
/*!*************************************************!*\
  !*** ./src/components/graphicalShips/style.css ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/graphicalShips/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./assets/waves.svg":
/*!**************************!*\
  !*** ./assets/waves.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3f138e493425d0d3d1c.svg";

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
    animationText.style.color = 'brown';
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
  _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.active = true;
  const basicOrientation = document.getElementById('basicOrientation');
  const playerName = _game_play_js__WEBPACK_IMPORTED_MODULE_0__["default"].current.game.player1.name;
  basicOrientation.textContent = `It's your turn ${playerName}:`;
  const animationText = document.getElementById('animationText');
  animationText.textContent = 'Attack!';
  animationText.style.color = 'green';
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
    cell.addEventListener('click', () => {
      const activePlayer = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.game.player1.active;
      activePlayer ? attackFn() : () => {};
      _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.game.player1.active = false;
    });
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

/***/ "./src/components/gameContainer/GUI/placeShipsTool/createPST.js":
/*!**********************************************************************!*\
  !*** ./src/components/gameContainer/GUI/placeShipsTool/createPST.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const generalContainer = document.getElementById('generalContainer');
  const playerSection = document.getElementById('playerSection');
  // Create pst container
  // pst stands for place-ships tool
  const pst = document.createElement('div');
  pst.setAttribute('id', 'pst');
  generalContainer.insertBefore(pst, playerSection);
  return pst;
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
/* harmony import */ var _createPST_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPST.js */ "./src/components/gameContainer/GUI/placeShipsTool/createPST.js");




function setFinalButtons(newLegend, confirmationFn, tryAgainFn) {
  const pst = (() => {
    return document.querySelectorAll('#pst').length === 0 ? (0,_createPST_js__WEBPACK_IMPORTED_MODULE_3__["default"])() : document.getElementById('pst');
  })();
  // Hide temporary pst container
  if (pst.classList.contains('show')) pst.classList.remove('show');
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
  }, 1000);
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
  const legend = 'Place your ships!';
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
/* harmony import */ var _placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeShipsTool/setRandomly.js */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly.js");


 // eslint-disable-line no-unused-vars

function setGameContainer() {
  const form = document.querySelector('form');
  form.classList.remove('show');
  const header = document.querySelector('header');
  header.classList.add('hide');
  const footer = document.querySelector('footer');
  footer.classList.add('hide');
  setTimeout(() => {
    header.remove();
    footer.remove();
    document.querySelector('form').remove();
    const isMovile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    (0,_gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    isMovile === false ? (0,_setPlaceShipsTool_js__WEBPACK_IMPORTED_MODULE_1__["default"])() : (0,_placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    setTimeout(() => {
      const playerSection = document.getElementById('playerSection');
      const pst = document.getElementById('pst'); // pst stands for place ships tool
      playerSection.classList.add('show');
      pst.classList.add('show');
    }, 500);
  }, 500);
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
/* harmony import */ var _placeShipsTool_createPST_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placeShipsTool/createPST.js */ "./src/components/gameContainer/GUI/placeShipsTool/createPST.js");


 // eslint-disable-line no-unused-vars





function setPlaceShipsTool() {
  // Create pst container
  // pst stands for place-ships tool
  const pst = (0,_placeShipsTool_createPST_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
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
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _restart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restart.js */ "./src/components/gameContainer/restart.js");


function end(legendWinner) {
  const basicOrientation = document.getElementById('basicOrientation');
  basicOrientation.textContent = 'Game over';
  const animationText = document.getElementById('animationText');
  animationText.textContent = legendWinner;
  const playerSection = document.getElementById('playerSection');
  playerSection.style.display = 'none';
  const AISection = document.getElementById('AISection');
  AISection.style.display = 'none';
  const generalContainer = document.getElementById('generalContainer');
  (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(generalContainer, 'button', [], 'Play again', 'playAgainBtn', [{
    attribute: 'type',
    value: 'button'
  }]);
  const playAgainBtn = document.getElementById('playAgainBtn');
  playAgainBtn.addEventListener('click', _restart_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  setTimeout(() => {
    const generalContainer = document.getElementById('generalContainer');
    generalContainer.classList.remove('hide');
  }, 0);
}

/***/ }),

/***/ "./src/components/gameContainer/restart.js":
/*!*************************************************!*\
  !*** ./src/components/gameContainer/restart.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUI_gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUI/gameboards/setPlayerGameboard.js */ "./src/components/gameContainer/GUI/gameboards/setPlayerGameboard.js");
/* harmony import */ var _GUI_setPlaceShipsTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI/setPlaceShipsTool.js */ "./src/components/gameContainer/GUI/setPlaceShipsTool.js");
/* harmony import */ var _GUI_placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUI/placeShipsTool/setRandomly.js */ "./src/components/gameContainer/GUI/placeShipsTool/setRandomly.js");
/* harmony import */ var _game_play_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game/play.js */ "./src/game/play.js");
/* harmony import */ var _game_setGame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../game/setGame.js */ "./src/game/setGame.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const generalContainer = document.getElementById('generalContainer');
  generalContainer.classList.add('hide');
  let playerName = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.game.player.name;
  _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current = (0,_game_setGame_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.setPlayerName(1, playerName);
  _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.setPlayerName(2, 'Machine');
  // Place machine ships
  _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.setPlayerShipsRandomly(2);
  setTimeout(() => {
    while (generalContainer.firstChild) generalContainer.firstChild.remove();
    const isMovile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    (0,_GUI_gameboards_setPlayerGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    isMovile === false ? (0,_GUI_setPlaceShipsTool_js__WEBPACK_IMPORTED_MODULE_1__["default"])() : (0,_GUI_placeShipsTool_setRandomly_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    setTimeout(() => {
      const playerSection = document.getElementById('playerSection');
      const pst = document.getElementById('pst'); // pst stands for place ships tool
      playerSection.classList.add('show');
      pst.classList.add('show');
    }, 500);
  }, 500);
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

/***/ "./src/components/graphicalShips/setGraphicalShips.js":
/*!************************************************************!*\
  !*** ./src/components/graphicalShips/setGraphicalShips.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/createHtmlElement.js */ "./src/services/createHtmlElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/graphicalShips/style.css");
/* harmony import */ var _assets_waves_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/waves.svg */ "./assets/waves.svg");

 // eslint-disable-line no-unused-vars

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const container = document.getElementById('graphicalShips');
  for (let i = 1; i <= 6; i++) {
    const str1 = 'shipContainer';
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(container, 'div', [str1], '', `${str1}${i}`);
    const shipContainer = document.getElementById(`${str1}${i}`);
    const str2 = 'graphicalShip';
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shipContainer, 'div', [str2], '', `${str2}${i}`);
    const ship = document.getElementById(`${str2}${i}`);
    ship.style.backgroundImage = ` url(${_assets_waves_svg__WEBPACK_IMPORTED_MODULE_2__})`;
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ship, 'div', ['leftSail']);
    (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ship, 'div', ['rightSail']);
    for (let j = 1; j <= 3; j++) {
      (0,_services_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shipContainer, 'div', ['backgroundRow', `${'backgroundRow'}${j}`], '', `${'backgroundRow'}-${i}-${j}`);
      const row = document.getElementById(`${'backgroundRow'}-${i}-${j}`);
      const url = ` url(${_assets_waves_svg__WEBPACK_IMPORTED_MODULE_2__})`;
      row.style.backgroundImage = url;
    }
  }
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
      wins: 0
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
/* harmony import */ var _components_graphicalShips_setGraphicalShips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/graphicalShips/setGraphicalShips.js */ "./src/components/graphicalShips/setGraphicalShips.js");



const playBtn = document.getElementById('playBtn');

// Ships for visual purposes
(0,_components_graphicalShips_setGraphicalShips_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sNEhBQTRILFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxV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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwR0FBMEcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxV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YTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhCO0FBQzhCO0FBRWpGLE1BQU04SixPQUFPLEdBQUdsUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7O0FBRWxEO0FBQ0FnUiwyRkFBaUIsQ0FBQyxDQUFDOztBQUVuQjtBQUNBQyxPQUFPLENBQUN6USxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtFQUN0Q0MsVUFBVSxDQUFDLE1BQU07SUFDZndRLE9BQU8sQ0FBQ2pQLE1BQU0sQ0FBQyxDQUFDO0VBQ2xCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDUHZCLFVBQVUsQ0FBQyxNQUFNO0lBQ2ZaLHVFQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ1QsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ncmFwaGljYWxTaGlwcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9mb3JtL3N0eWxlLmNzcz81YjI4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3N0eWxlLmNzcz83YWQxIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9zdHlsZS5jc3M/OGE3NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc3R5bGUuY3NzPzdlZTIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3N0eWxlLmNzcz8yMWYxIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ncmFwaGljYWxTaGlwcy9zdHlsZS5jc3M/MTAzYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Zvcm0vc2V0Rm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9nZXRDZWxsSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvZ2V0Q29vcmRpbmF0ZXNGcm9tSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvbWFjaGluZUF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9tYWNoaW5lL2F0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9tYWNoaW5lL2Rpc3BsYXlBbmRIaWRlU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvcGxheWVyQXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3NldE1hY2hpbmVHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvc2V0UGxheWVyR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9jcmVhdGVQU1QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdFbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdFbnRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJhZ0xlYXZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcmFnT3Zlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJhZ1N0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL2dldERPTUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL2dldEVsZW1lbnRzT25TaGlwQXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9nZXRHYW1lQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2Ryb3AvaWRlbnRpZnlFbGVtZW50c0luQXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9saW5rU2hpcFdpdGhDZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL3NldHVwU2hpcFN0eWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRDb25maXJtYXRpb25CdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldEZpbmFsQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L2FkZEVsZW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRNYW51YWxseS9jaGFuZ2VEaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L2NvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkvc2V0RHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L3NldFNoaXBzT25QU1QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9jb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5L2dldElkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRUcnlBZ2FpbkJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2hpcHNDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvc2V0R2FtZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvc2V0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3NldFBsYWNlU2hpcHNUb29sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL2VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9yZXN0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL3N0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9ncmFwaGljYWxTaGlwcy9zZXRHcmFwaGljYWxTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZmFjdG9yaWVzL3NldEdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZmFjdG9yaWVzL3NldFBsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2ZhY3Rvcmllcy9zZXRTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9tYWNoaW5lL2F0dGFja0hvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrUmFuZG9tbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrVmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvbWFjaGluZS9nZXRBdHRhY2tDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvbWFjaGluZS9pZGVudGlmeURpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9hbGxTaGlwc1N1bmsuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvcGxhY2VTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3JlY2VpdmVBdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRDb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzL2dldFJhbmRvbUNlbGxOdW0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRSYW5kb21EaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL3ZhbGlkYXRlQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NldEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NldE1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb3JtIHtcblx0bWFyZ2luLXRvcDogNXZoO1xuXHRnYXA6IDEuNXJlbTtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmZvcm0uc2hvdyB7XG5cdG9wYWNpdHk6IDE7XG59XG5cbmxhYmVsLCBpbnB1dCB7XG5cdGZvbnQtc2l6ZTogM3ZoO1xufVxuXG5sYWJlbCB7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcbn1cblxuaW5wdXQge1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1jb2xvcjogYmxhY2s7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggYmxhY2s7XG59XG5cbmlucHV0OmZvY3VzIHtcblx0Ym94LXNoYWRvdzogNnB4IDZweCAxMHB4IGJsYWNrOztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLFVBQVU7Q0FDVixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLDhCQUE4QjtJQUMzQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvcm0ge1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG5cXHRnYXA6IDEuNXJlbTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb3JtLnNob3cge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbmxhYmVsLCBpbnB1dCB7XFxuXFx0Zm9udC1zaXplOiAzdmg7XFxufVxcblxcbmxhYmVsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA0MHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcXG59XFxuXFxuaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWNvbG9yOiBibGFjaztcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGJsYWNrO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogNnB4IDZweCAxMHB4IGJsYWNrOztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3BsYXllckdhbWVib2FyZCwgI0FJR2FtZWJvYXJkIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGJsYWNrO1xufVxuXG4ucGdiYywgLm1nYmMge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wZ2JjOmhvdmVyLCAubWdiYzpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF0dGFja2VkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYnJvd247XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbn1cblxuLm1pc3NlZCB7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDQ4LCA0OCk7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNDQUFzQztDQUN0Qyx1QkFBdUI7Q0FDdkIsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLG9DQUFvQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGxheWVyR2FtZWJvYXJkLCAjQUlHYW1lYm9hcmQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcXG59XFxuXFxuLnBnYmMsIC5tZ2JjIHtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wZ2JjOmhvdmVyLCAubWdiYzpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG59XFxuXFxuLm1pc3NlZCB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA0OCwgNDgpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucmFuZG9tbHlQbGFjZWRTaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCA2cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnJhbmRvbWx5UGxhY2VkU2hpcC5zaG93IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIC5yYW5kb21seVBsYWNlZFNoaXAudmVydGljYWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjVweCwgLTIuNXB4KTtcbiAgICBib3gtc2hhZG93OiAyLjVweCAwcHggMHB4IDJweCBicm93bjtcbn1cblxuLnJhbmRvbWx5UGxhY2VkU2hpcC5ob3Jpem9udGFsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yLjVweCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDIuNXB4IDBweCAycHggYnJvd247XG59ICovXG5cbiNsNnNoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogMTY4cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4jbDZzaGlwLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTY4cHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuI2w1c2hpcC52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbiNsNXNoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4jbDRzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDExMnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogMTBweDtcbn1cblxuI2w0c2hpcC5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDExMnB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbiNsM3NoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogODRweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDVweDtcbn1cblxuI2wzc2hpcC5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDg0cHg7XG4gICAgbGVmdDogNXB4O1xufVxuXG4jbDJzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiA1cHg7XG59XG5cbiNsMnNoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGxlZnQ6IDVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJhbmRvbWx5UGxhY2VkU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCA2cHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnJhbmRvbWx5UGxhY2VkU2hpcC5zaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogLnJhbmRvbWx5UGxhY2VkU2hpcC52ZXJ0aWNhbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjVweCwgLTIuNXB4KTtcXG4gICAgYm94LXNoYWRvdzogMi41cHggMHB4IDBweCAycHggYnJvd247XFxufVxcblxcbi5yYW5kb21seVBsYWNlZFNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIuNXB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDIuNXB4IDBweCAycHggYnJvd247XFxufSAqL1xcblxcbiNsNnNoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDE2OHB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiAxMHB4O1xcbn1cXG5cXG4jbDZzaGlwLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNjhweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuI2w1c2hpcC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbiNsNXNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbDRzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxMTJweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHRvcDogMTBweDtcXG59XFxuXFxuI2w0c2hpcC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTEycHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbiNsM3NoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDg0cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICB0b3A6IDVweDtcXG59XFxuXFxuI2wzc2hpcC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogODRweDtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4jbDJzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiA1cHg7XFxufVxcblxcbiNsMnNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcHN0ID4gI2xlZ2VuZCB7XG5cdHdpZHRoOiAyODBweDtcbn1cblxuI3NoaXBzQ29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5wc3RSb3d7XG5cdGhlaWdodDogMjVweDtcblx0bWFyZ2luOiAwO1xufVxuXG4ucHN0U2hpcCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0Ym94LXNoYWRvdzogNnB4IDZweCA2cHggYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdGN1cnNvcjogZ3JhYjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xufVxuXG4ucHN0U2hpcC5ob3Jpem9udGFsOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbiNwU2hpcDYuaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDE2OHB4O1xufVxuXG4jcFNoaXA1Lmhvcml6b250YWwge1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiAxNDBweDtcblx0bWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuXG4jcFNoaXAyLmhvcml6b250YWwge1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiA1NnB4O1xuXHRtYXJnaW4tbGVmdDogMTYwcHg7XG59XG5cbiNwU2hpcDQuaG9yaXpvbnRhbCB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDExMnB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4jcFNoaXAzLmhvcml6b250YWwge1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiA4NHB4O1xuXHRtYXJnaW4tbGVmdDogMTQwcHg7XG59XG5cbi5yb3RhdGUge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5yb3RhdGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCkgcm90YXRlKDBkZWcpO1xuXHR6LWluZGV4OiAyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbiNwU2hpcDYudmVydGljYWwge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiAxNjhweDtcbn1cblxuI3BTaGlwNS52ZXJ0aWNhbCB7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDE0MHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cbiNwU2hpcDIudmVydGljYWwge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiA1NnB4O1xuXHRtYXJnaW4tbGVmdDogMTYwcHg7XG59XG5cbiNwU2hpcDQudmVydGljYWwge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiAxMTJweDtcblx0bWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuI3BTaGlwMy52ZXJ0aWNhbCB7XG5cdHdpZHRoOiAxNnB4O1xuXHRoZWlnaHQ6IDg0cHg7XG5cdG1hcmdpbi1sZWZ0OiAxNDBweDtcbn1cblxuLmRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleVxufVxuXG4uaGlkZSB7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5wbGFjZWRTaGlwIHtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdG1hcmdpbjogMDtcbn1cblxuLnVuYXZhaWxhYmxlQ2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDIzMiwgMjM2KTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNidG5Db250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG59XG5cbiNwc3QgPiBidXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAyODBweDtcblx0aGVpZ2h0OiA0NXB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHBhZGRpbmctbGVmdDogNDBweDtcblx0cGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuI3BzdCA+IGJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jcHN0ID4gYnV0dG9uOmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xufVxuXG4jcHN0ID4gYnV0dG9uOmZvY3VzIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjaztcblx0b3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG5pbWd7XG5cdHdpZHRoOiAzMHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGFBQWE7Q0FDYixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksNENBQTRDO0NBQy9DLFVBQVU7SUFDUCxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxtQ0FBbUM7SUFDaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0NBQ0MsZUFBZTtJQUNaLDhCQUE4QjtDQUNqQyxVQUFVO0lBQ1AsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BzdCA+ICNsZWdlbmQge1xcblxcdHdpZHRoOiAyODBweDtcXG59XFxuXFxuI3NoaXBzQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBzdFJvd3tcXG5cXHRoZWlnaHQ6IDI1cHg7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ucHN0U2hpcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcdGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFx0Y3Vyc29yOiBncmFiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4ucHN0U2hpcC5ob3Jpem9udGFsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuXFxuI3BTaGlwNi5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDE2OHB4O1xcbn1cXG5cXG4jcFNoaXA1Lmhvcml6b250YWwge1xcblxcdGhlaWdodDogMTZweDtcXG5cXHR3aWR0aDogMTQwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jcFNoaXAyLmhvcml6b250YWwge1xcblxcdGhlaWdodDogMTZweDtcXG5cXHR3aWR0aDogNTZweDtcXG5cXHRtYXJnaW4tbGVmdDogMTYwcHg7XFxufVxcblxcbiNwU2hpcDQuaG9yaXpvbnRhbCB7XFxuXFx0aGVpZ2h0OiAxNnB4O1xcblxcdHdpZHRoOiAxMTJweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jcFNoaXAzLmhvcml6b250YWwge1xcblxcdGhlaWdodDogMTZweDtcXG5cXHR3aWR0aDogODRweDtcXG5cXHRtYXJnaW4tbGVmdDogMTQwcHg7XFxufVxcblxcbi5yb3RhdGUge1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCkgcm90YXRlKDBkZWcpO1xcblxcdHotaW5kZXg6IDI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbiNwU2hpcDYudmVydGljYWwge1xcblxcdHdpZHRoOiAxNnB4O1xcblxcdGhlaWdodDogMTY4cHg7XFxufVxcblxcbiNwU2hpcDUudmVydGljYWwge1xcblxcdHdpZHRoOiAxNnB4O1xcblxcdGhlaWdodDogMTQwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jcFNoaXAyLnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDU2cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2MHB4O1xcbn1cXG5cXG4jcFNoaXA0LnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDExMnB4O1xcblxcdG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbiNwU2hpcDMudmVydGljYWwge1xcblxcdHdpZHRoOiAxNnB4O1xcblxcdGhlaWdodDogODRweDtcXG5cXHRtYXJnaW4tbGVmdDogMTQwcHg7XFxufVxcblxcbi5kcmFnLW92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5XFxufVxcblxcbi5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucGxhY2VkU2hpcCB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udW5hdmFpbGFibGVDZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzIsIDIzNik7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNidG5Db250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5cXG4jcHN0ID4gYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0d2lkdGg6IDI4MHB4O1xcblxcdGhlaWdodDogNDVweDtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbiNwc3QgPiBidXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4jcHN0ID4gYnV0dG9uOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTY2LCAzMik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xcbn1cXG5cXG4jcHN0ID4gYnV0dG9uOmZvY3VzIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjaztcXG5cXHRvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuXFxuaW1ne1xcblxcdHdpZHRoOiAzMHB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmaWx0ZXI6IGludmVydCgxMDAlKTtcXG5cXHRib3JkZXItcmFkaXVzOiA0MHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNnZW5lcmFsQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxMHB4O1xuXHRvcGFjaXR5OiAxO1xuXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbn1cblxuI2dlbmVyYWxDb250YWluZXIuaGlkZSwgaGVhZGVyLmhpZGUge1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbn1cblxuI3BzdCwgI3BhbmVsIHtcblx0Z2FwOiAxMHB4O1xuXHRoZWlnaHQ6IDE2MHB4O1xuXHRtYXJnaW4tdG9wOiA0dmg7XG5cdG1hcmdpbi1ib3R0b206IDJ2aDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGJsYWNrO1xufVxuXG4jcHN0LCAjcGxheWVyU2VjdGlvbiwgI0FJR2FtZWJvYXJkLCAjcGFuZWwge1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcbn1cblxuI3BzdC5zaG93LCAjcGxheWVyU2VjdGlvbi5zaG93LCAjQUlHYW1lYm9hcmQuc2hvdywgI3BhbmVsLnNob3cge1xuXHRvcGFjaXR5OiAxO1xufVxuXG4jcGFuZWwgPiBwOm50aC1jaGlsZCgyKSB7XG5cdGZvbnQtc2l6ZTogNDVweDtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0Y29sb3I6IGdyZWVuO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7Q0FDaEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7Q0FDViwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsU0FBUztDQUNULGFBQWE7Q0FDYixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osMEJBQTBCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNnZW5lcmFsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMHB4O1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0dHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNnZW5lcmFsQ29udGFpbmVyLmhpZGUsIGhlYWRlci5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcHN0LCAjcGFuZWwge1xcblxcdGdhcDogMTBweDtcXG5cXHRoZWlnaHQ6IDE2MHB4O1xcblxcdG1hcmdpbi10b3A6IDR2aDtcXG5cXHRtYXJnaW4tYm90dG9tOiAydmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggYmxhY2s7XFxufVxcblxcbiNwc3QsICNwbGF5ZXJTZWN0aW9uLCAjQUlHYW1lYm9hcmQsICNwYW5lbCB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BzdC5zaG93LCAjcGxheWVyU2VjdGlvbi5zaG93LCAjQUlHYW1lYm9hcmQuc2hvdywgI3BhbmVsLnNob3cge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbiNwYW5lbCA+IHA6bnRoLWNoaWxkKDIpIHtcXG5cXHRmb250LXNpemU6IDQ1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRjb2xvcjogZ3JlZW47XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2dyYXBoaWNhbFNoaXBzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTE7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAyNTEsIDI1NSk7XG59XG5cbi5zaGlwQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzIDRzIGVhc2UgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5iYWNrZ3JvdW5kUm93IHtcbiAgICBoZWlnaHQ6IDUuNTV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUuNTV2aDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2MHB4IDJweCByZ2IoMCwgMjI0LCAyNTMpO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIHotaW5kZXg6IC0yO1xufVxuXG4uYmFja2dyb3VuZFJvdzF7XG4gICAgYW5pbWF0aW9uOiBtb3ZlV2F2ZXMxIDRzIGVhc2UgaW5maW5pdGU7XG59XG5cbi5iYWNrZ3JvdW5kUm93MiB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlV2F2ZXMyIDRzIGVhc2UgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uYmFja2dyb3VuZFJvdzMge1xuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzMyA0cyBlYXNlIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpXG59XG5cbkBrZXlmcmFtZXMgbW92ZVdhdmVzMSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gICAgfVxuXG4gICAgOTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlV2F2ZXMyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgICB9XG5cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XG4gICAgfVxuXG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIH1cbiAgICBcbiAgICA5NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVXYXZlczMge1xuMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcbiAgICB9XG5cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB9XG5cbiAgICA5NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcbiAgICB9XG59XG5cbi5ncmFwaGljYWxTaGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDQwcHggNDBweDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMnZoO1xuICAgIGhlaWdodDogM3ZoO1xufVxuXG4ubGVmdFNhaWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItbGVmdDogNHZoIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA4dmggc29saWQgZ3JheTtcbiAgICB3aWR0aDogMHZ3O1xuICAgIGhlaWdodDogMHZoO1xuICAgIHRvcDogLTguNXZoO1xuICAgIGxlZnQ6IDJ2aDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnJpZ2h0U2FpbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1sZWZ0OiAwdmggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2dmggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTB2aCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IC0xMC41dmg7XG4gICAgbGVmdDogNi40dmg7XG59XG5cbiNncmFwaGljYWxTaGlwMSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCAxMnMgZWFzZSBpbmZpbml0ZTtcbn1cblxuI2dyYXBoaWNhbFNoaXAyIHtcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDhzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNncmFwaGljYWxTaGlwMyB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCAxMHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuI2dyYXBoaWNhbFNoaXA0IHtcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDZzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNncmFwaGljYWxTaGlwNSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCAxNHMgZWFzZSBpbmZpbml0ZTtcbn1cblxuI2dyYXBoaWNhbFNoaXA2IHtcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDlzIGVhc2UgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbW92ZVNoaXAge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwdncsIDApIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAxMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDB2dywgMCkgcm90YXRlKC0yNWRlZyk7XG4gICAgfVxuXG4gICAgMjAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwdncsIDApIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAzMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjB2dywgMCkgcm90YXRlKDI1ZGVnKTtcbiAgICB9XG5cbiAgICA0MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTB2dywgMCkgcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMCkgcm90YXRlKC0yNWRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTB2dywgMCkgcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDcwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwdncsIDApIHJvdGF0ZSgyNWRlZyk7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzB2dywgMCkgcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIDkwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwdncsIDApIHJvdGF0ZSgtMjVkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHZ3LCAwKSByb3RhdGUoMGRlZyk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGhpY2FsU2hpcHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNkNBQTZDO0lBQzdDLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUI7SUFDSjtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7QUFDQTtRQUNRLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGdDQUFnQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDZDQUE2QztJQUNqRDs7SUFFQTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMENBQTBDO0lBQzlDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLFVBQVU7UUFDViwwQ0FBMEM7SUFDOUM7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksMENBQTBDO1FBQzFDLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNncmFwaGljYWxTaGlwcyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMjUxLCAyNTUpO1xcbn1cXG5cXG4uc2hpcENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzIDRzIGVhc2UgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uYmFja2dyb3VuZFJvdyB7XFxuICAgIGhlaWdodDogNS41NXZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1LjU1dmg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNjBweCAycHggcmdiKDAsIDIyNCwgMjUzKTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG4uYmFja2dyb3VuZFJvdzF7XFxuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzMSA0cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uYmFja2dyb3VuZFJvdzIge1xcbiAgICBhbmltYXRpb246IG1vdmVXYXZlczIgNHMgZWFzZSBpbmZpbml0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmJhY2tncm91bmRSb3czIHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlV2F2ZXMzIDRzIGVhc2UgaW5maW5pdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpXFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVdhdmVzMSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMTBweCk7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgfVxcblxcbiAgICA5NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVdhdmVzMiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgfVxcblxcbiAgICAyNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXG4gICAgfVxcblxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICB9XFxuICAgIFxcbiAgICA5NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVdhdmVzMyB7XFxuMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxuICAgIH1cXG5cXG4gICAgMjUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcbiAgICB9XFxuXFxuICAgIDc1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgIH1cXG5cXG4gICAgOTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xcbiAgICB9XFxufVxcblxcbi5ncmFwaGljYWxTaGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDQwcHggNDBweDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMnZoO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuLmxlZnRTYWlsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItbGVmdDogNHZoIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDh2aCBzb2xpZCBncmF5O1xcbiAgICB3aWR0aDogMHZ3O1xcbiAgICBoZWlnaHQ6IDB2aDtcXG4gICAgdG9wOiAtOC41dmg7XFxuICAgIGxlZnQ6IDJ2aDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcblxcbi5yaWdodFNhaWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1sZWZ0OiAwdmggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNnZoIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAxMHZoIHNvbGlkIGdyYXk7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHRvcDogLTEwLjV2aDtcXG4gICAgbGVmdDogNi40dmg7XFxufVxcblxcbiNncmFwaGljYWxTaGlwMSB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgMTJzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbiNncmFwaGljYWxTaGlwMiB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgOHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuI2dyYXBoaWNhbFNoaXAzIHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCAxMHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuI2dyYXBoaWNhbFNoaXA0IHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCA2cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4jZ3JhcGhpY2FsU2hpcDUge1xcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDE0cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4jZ3JhcGhpY2FsU2hpcDYge1xcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDlzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVNoaXAge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwdncsIDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAxMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHZ3LCAwKSByb3RhdGUoLTI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAyMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHZ3LCAwKSByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjB2dywgMCkgcm90YXRlKDI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICA0MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHZ3LCAwKSByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIDApIHJvdGF0ZSgtMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgIDYwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTB2dywgMCkgcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDcwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjB2dywgMCkgcm90YXRlKDI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICA4MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwdncsIDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcblxcbiAgICA5MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwdncsIDApIHJvdGF0ZSgtMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTB2dywgMCkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Y29sb3I6IHJnYigxNCwgMTUsIDE0KTtcblx0Zm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwdnc7XG59XG5cbmlucHV0LCBidXR0b24ge1xuXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4jcGxheUJ0biB7XG5cdG1hcmdpbi10b3A6IDI1dmg7O1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0Y29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuXHRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGZvbnQtc2l6ZTogNXZoO1xuXHR6LWluZGV4OiAyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXG59XG5cbmJ1dHRvbjpmb2N1cyB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTY2LCAzMik7XG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCw0cHgpO1xuIFx0b3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cywgdHJhbnNmb3JtIC41cywgb3BhY2l0eSAxcztcbn1cblxuaGVhZGVyIHtcblx0bWFyZ2luLXRvcDogMnZoO1xuXHRmb250LXNpemU6IG1pbigxNXZ3LCA4MHB4KTtcblx0ei1pbmRleDogMTtcbn1cblxuZm9vdGVyIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGJvdHRvbTogMnZoO1xuXHRmb250LXNpemU6IDJ2aDtcbn1cblxuaGVhZGVyLCBmb290ZXJ7XG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogNnB4IDZweCAyMHB4IGJsYWNrO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixxQ0FBcUM7Q0FDckMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckIsOEJBQThCO0NBQzlCLGFBQWE7Q0FDYixjQUFjO0NBQ2QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1DQUFtQztJQUNoQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CLFVBQVU7SUFDUiwyREFBMkQ7QUFDL0Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLDhCQUE4QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGNvbG9yOiByZ2IoMTQsIDE1LCAxNCk7XFxuXFx0Zm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwbGF5QnRuIHtcXG5cXHRtYXJnaW4tdG9wOiAyNXZoOztcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRmb250LXNpemU6IDV2aDtcXG5cXHR6LWluZGV4OiAyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzOyBcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTY2LCAzMik7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LDRweCk7XFxuIFxcdG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzLCB0cmFuc2Zvcm0gLjVzLCBvcGFjaXR5IDFzO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdG1hcmdpbi10b3A6IDJ2aDtcXG5cXHRmb250LXNpemU6IG1pbigxNXZ3LCA4MHB4KTtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdHBvc2l0aW9uOmZpeGVkO1xcblxcdGJvdHRvbTogMnZoO1xcblxcdGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5cXG5oZWFkZXIsIGZvb3RlcntcXG5cXHRib3JkZXItcmFkaXVzOiA2MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0Ym94LXNoYWRvdzogNnB4IDZweCAyMHB4IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhyb3VnaG91dCB0aGUgZW50aXJlIHByb2plY3QsXG4vLyBjcmVhdGVIdG1sRWxlbWVudCBpcyB1c2VkIHRvIGVmZmljaWVudGx5IGFkZCBET00gZWxlbWVudHNcbmltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc2V0dXAgZnJvbSAnLi4vZ2FtZUNvbnRhaW5lci9zZXR1cC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEZvcm0oKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChnZW5lcmFsQ29udGFpbmVyLCAnZm9ybScpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjcmVhdGVIdG1sRWxlbWVudChmb3JtLCAnbGFiZWwnLCBbXSwgJ0VudGVyIHlvdXIgbmFtZTonLCAnbmFtZUxhYmVsJywgW1xuICAgIHsgYXR0cmlidXRlOiAnZm9yJywgdmFsdWU6ICdwbGF5ZXJOYW1lJyB9LFxuICBdKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZm9ybSwgJ2lucHV0JywgW10sICcnLCAncGxheWVyTmFtZScsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3R5cGUnLCB2YWx1ZTogJ3RleHQnIH0sXG4gICAgeyBhdHRyaWJ1dGU6ICduYW1lJywgdmFsdWU6ICdwbGF5ZXJOYW1lJyB9LFxuICAgIHsgYXR0cmlidXRlOiAncGxhY2Vob2xkZXInLCB2YWx1ZTogJ0VudGVyIG5hbWUnIH0sXG4gICAgeyBhdHRyaWJ1dGU6ICdhdXRvY29tcGxldGUnLCB2YWx1ZTogJ29uJyB9LFxuICBdKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGZvcm0sICdidXR0b24nLCBbXSwgJ1N0YXJ0IGdhbWUnLCAnc3RhcnRCdG4nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICd0eXBlJywgdmFsdWU6ICdidXR0b24nIH0sXG4gIF0pO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldHVwKCk7IC8vIE9uY2UgdXNlciBlbnRlciB0aGVpciBuYW1lLCB0aGUgZ2FtZSBzdGFydHNcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9LCA1MDApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2VsbElkKHN0ciwgcm93LCBjb2wpIHtcbiAgbGV0IHIgPSAoKCkgPT4ge1xuICAgIHJldHVybiByb3cgPT09IDAgPyAnJyA6IHJvdztcbiAgfSkoKTtcbiAgcmV0dXJuIHN0ciArIHIgKyBjb2w7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21JZChjZWxsSWQpIHtcbiAgY29uc3QgY2VsbE51bSA9IGNlbGxJZC5zcGxpdCgnbWdiYycpWzFdO1xuICBjb25zdCByb3dOdW0gPSAoKCkgPT4ge1xuICAgIHJldHVybiBjZWxsTnVtLmxlbmd0aCA9PT0gMSA/IDAgOiBjZWxsTnVtWzBdO1xuICB9KSgpO1xuICBjb25zdCBjb2xOdW0gPSAoKCkgPT4ge1xuICAgIHJldHVybiBjZWxsTnVtLmxlbmd0aCA9PT0gMSA/IGNlbGxOdW0gOiBjZWxsTnVtWzFdO1xuICB9KSgpO1xuICByZXR1cm4gW3BhcnNlSW50KHJvd051bSksIHBhcnNlSW50KGNvbE51bSldO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlBbmRIaWRlU2VjdGlvbnMgZnJvbSAnLi9tYWNoaW5lL2Rpc3BsYXlBbmRIaWRlU2VjdGlvbnMuanMnO1xuaW1wb3J0IEF0dGFjayBmcm9tICcuL21hY2hpbmUvYXR0YWNrLmpzJztcbmltcG9ydCBwbGF5ZXJBdHRhY2sgZnJvbSAnLi9wbGF5ZXJBdHRhY2suanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCBlbmQgZnJvbSAnLi4vLi4vZW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFjaGluZUF0dGFjaygpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlzcGxheUFuZEhpZGVTZWN0aW9ucygpO1xuICB9LCA1MDApO1xuICAvLyBTZXQgbWFjaGluZSBhbmQgYXR0YWNrXG4gIGNvbnN0IGF0dGFjayA9IEF0dGFjaygpO1xuICAvLyBEaXNwbGF5IGh0bWwgZWxlbWVudHMsIHN0eWxlcyBhbmQgYWRuaW1hdGlvbnNcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYXR0YWNrLnNoaXBJbkNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGF0dGFjay5jZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3VuYXZhaWxhYmxlQ2VsbCcpO1xuICAgICAgICBhdHRhY2suY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNrLmNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gcGxheS5jdXJyZW50LmdldEdhbWVib2FyZCgxKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcGxheS5jdXJyZW50LmFsbFNoaXBzU3VuayhnYW1lYm9hcmQpO1xuICAgICAgICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGVnZW5kID0gJ01hY2hpbmUgd2lucyA6KCc7XG4gICAgICAgICAgc3RhdHVzID09PSB0cnVlID8gZW5kKGxlZ2VuZCkgOiBwbGF5ZXJBdHRhY2soKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LCAxMDAwKTtcbiAgfSwgMjAwMCk7XG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IHNldE1hY2hpbmUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ2FtZS9zZXRNYWNoaW5lLmpzJztcbmltcG9ydCBnZXRDZWxsSWQgZnJvbSAnLi4vZ2V0Q2VsbElkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5LmN1cnJlbnQuZ2V0R2FtZWJvYXJkKDEpO1xuICBjb25zdCBtYWNoaW5lID0gc2V0TWFjaGluZShnYW1lYm9hcmQpO1xuICBjb25zdCBhdHRhY2tDb29yZGluYXRlcyA9IG1hY2hpbmUuYXR0YWNrKCk7XG4gIGNvbnN0IHJvdyA9IGF0dGFja0Nvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBjb2wgPSBhdHRhY2tDb29yZGluYXRlc1sxXTtcbiAgY29uc3Qgc2hpcEluQ29vcmRpbmF0ZXMgPSAoKCkgPT4ge1xuICAgIHJldHVybiAnc2hpcCcgaW4gZ2FtZWJvYXJkW3Jvd11bY29sXSA/IHRydWUgOiBmYWxzZTtcbiAgfSkoKTtcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldENlbGxJZCgncGdiYycsIHJvdywgY29sKSk7XG4gIHJldHVybiB7IHNoaXBJbkNvb3JkaW5hdGVzLCBjZWxsIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QW5kSGlkZVNlY3Rpb25zKCkge1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgLy8gSGlkZSBnZW5lcmFsIGNvbnRhaW5lclxuICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgLy8gRGlzcGxheSBwbGF5ZXIgc2VjdGlvbiBhbmQgaGlkZSBBSSBzZWN0aW9uXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGJhc2ljT3JpZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzaWNPcmllbnRhdGlvbicpO1xuICAgIGJhc2ljT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSAnTm93IGlzIG1hY2hpbmUgdHVybi4nO1xuICAgIGNvbnN0IGFuaW1hdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWF0aW9uVGV4dCcpO1xuICAgIGFuaW1hdGlvblRleHQudGV4dENvbnRlbnQgPSAnV2F0Y2ggb3V0ISc7XG4gICAgYW5pbWF0aW9uVGV4dC5zdHlsZS5jb2xvciA9ICdicm93bic7XG4gICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gICAgcGxheWVyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnN0IEFJU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSVNlY3Rpb24nKTtcbiAgICBBSVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSwgMTAwMCk7XG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXJBdHRhY2soKSB7XG4gIHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEuYWN0aXZlID0gdHJ1ZTtcbiAgY29uc3QgYmFzaWNPcmllbnRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpY09yaWVudGF0aW9uJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGJhc2ljT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSBgSXQncyB5b3VyIHR1cm4gJHtwbGF5ZXJOYW1lfTpgO1xuICBjb25zdCBhbmltYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hdGlvblRleHQnKTtcbiAgYW5pbWF0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdBdHRhY2shJztcbiAgYW5pbWF0aW9uVGV4dC5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBwbGF5ZXJTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IEFJU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSVNlY3Rpb24nKTtcbiAgQUlTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAgIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LCAwKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgZ2V0Q29vcmRpbmF0ZXNGcm9tSWQgZnJvbSAnLi9nZXRDb29yZGluYXRlc0Zyb21JZC5qcyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IHJlY2VpdmVBdHRhY2sgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9vcGVyYXRpb25zL3JlY2VpdmVBdHRhY2suanMnO1xuaW1wb3J0IG1hY2hpbmVBdHRhY2sgZnJvbSAnLi9tYWNoaW5lQXR0YWNrLmpzJztcbmltcG9ydCBlbmQgZnJvbSAnLi4vLi4vZW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TWFjaGluZUdhbWVib2FyZCgpIHtcbiAgLyogVXNlciBpbnRlcmFjdGlvbnMgdGFrZSBwbGFjZSBvbiBib2R5ID0+IGRpdiNnZW5lcmFsQ29udGFpbmVyICovXG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAvKiBHYW1lYm9hcmQgaXMgY29udGFpbmVkIGluIGEgc2VjdGlvbiBlbGVtZW50IGFuZCBpcyBkaXNwbGF5ZWRcbiAgaW4gYSBncmlkIG9mIDEwIHggMTAgKi9cbiAgY29uc3QgZ2JDbGFzc2VzID0gWydnYW1lYm9hcmQnLCAnc2hvdyddOyAvLyBTaG9ydGN1dCBmb3IgY2xhc3MgbmFtZVxuICBjcmVhdGVIdG1sRWxlbWVudChnZW5lcmFsQ29udGFpbmVyLCAnc2VjdGlvbicsIGdiQ2xhc3NlcywgJycsICdBSVNlY3Rpb24nKTtcbiAgY29uc3QgbWFjaGluZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlTZWN0aW9uJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KG1hY2hpbmVTZWN0aW9uLCAnZGl2JywgZ2JDbGFzc2VzLCAnJywgJ0FJR2FtZWJvYXJkJyk7XG4gIGNvbnN0IG1hY2hpbmVHYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlHYW1lYm9hcmQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OTsgaSsrKSB7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQobWFjaGluZUdhbWVib2FyZCwgJ2RpdicsIFsnbWdiYyddLCAnJywgYG1nYmMke2l9YCk7XG4gIH1cbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWdiYycpO1xuICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5LmN1cnJlbnQuZ2V0R2FtZWJvYXJkKDIpO1xuICAvLyBBZGQgbGlzdGVuZXJzIHRvIGVhY2ggY2VsbFxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrRm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzRnJvbUlkKGNlbGwuaWQpO1xuICAgICAgY29uc3QgYXR0YWNrID0gcmVjZWl2ZUF0dGFjayhnYW1lYm9hcmQsIGNvb3JkaW5hdGVzKTtcbiAgICAgIGlmIChhdHRhY2sgPT09IHRydWUpIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tGbik7XG4gICAgICBjb25zdCBzdGF0dXMgPSBwbGF5LmN1cnJlbnQuYWxsU2hpcHNTdW5rKGdhbWVib2FyZCk7XG4gICAgICBjb25zdCBsZWdlbmQgPSBcIllvdSdyZSBhIHdpbm5lciFcIjtcbiAgICAgIHN0YXR1cyA9PT0gdHJ1ZSA/IGVuZChsZWdlbmQpIDogbWFjaGluZUF0dGFjaygpO1xuICAgIH07XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEuYWN0aXZlO1xuICAgICAgYWN0aXZlUGxheWVyID8gYXR0YWNrRm4oKSA6ICgpID0+IHt9O1xuICAgICAgcGxheS5jdXJyZW50LmdhbWUucGxheWVyMS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQbGF5ZXJHYW1lYm9hcmQoKSB7XG4gIC8qIFVzZXIgaW50ZXJhY3Rpb25zIHRha2UgcGxhY2Ugb24gYm9keSA9PiBkaXYjZ2VuZXJhbENvbnRhaW5lciAqL1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgLyogR2FtZWJvYXJkIGlzIGNvbnRhaW5lZCBpbiBhIHNlY3Rpb24gZWxlbWVudCBhbmQgaXMgZGlzcGxheWVkXG4gIGluIGEgZ3JpZCBvZiAxMCB4IDEwICovXG4gIGNvbnN0IGdiID0gJ2dhbWVib2FyZCc7IC8vIFNob3J0Y3V0IGZvciBjbGFzcyBuYW1lXG4gIGNyZWF0ZUh0bWxFbGVtZW50KGdlbmVyYWxDb250YWluZXIsICdzZWN0aW9uJywgW10sICcnLCAncGxheWVyU2VjdGlvbicpO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocGxheWVyU2VjdGlvbiwgJ2RpdicsIFtnYl0sICcnLCAncGxheWVyR2FtZWJvYXJkJyk7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTk7IGkrKykge1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHBsYXllckdhbWVib2FyZCwgJ2RpdicsIFsncGdiYyddLCAnJywgYHBnYmMke2l9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAvLyBDcmVhdGUgcHN0IGNvbnRhaW5lclxuICAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZS1zaGlwcyB0b29sXG4gIGNvbnN0IHBzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwc3QnKTtcbiAgZ2VuZXJhbENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHN0LCBwbGF5ZXJTZWN0aW9uKTtcbiAgcmV0dXJuIHBzdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdFbmQoZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LCAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIGxldCBvZmZzZXRYID0gZS5jbGllbnRYIC0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgbGV0IG9mZnNldFkgPSBlLmNsaWVudFkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIEpTT04uc3RyaW5naWZ5KHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KVxuICApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0sIDApO1xufVxuIiwiaW1wb3J0IGdldERPTUNvb3JkaW5hdGVzIGZyb20gJy4vZHJvcC9nZXRET01Db29yZGluYXRlcy5qcyc7XG5pbXBvcnQgc2V0dXBTaGlwU3R5bGUgZnJvbSAnLi9kcm9wL3NldHVwU2hpcFN0eWxlLmpzJztcbmltcG9ydCBnZXRFbGVtZW50c09uU2hpcEFyZWEgZnJvbSAnLi9kcm9wL2dldEVsZW1lbnRzT25TaGlwQXJlYS5qcyc7XG5pbXBvcnQgbGlua1NoaXBXaXRoQ2VsbCBmcm9tICcuL2Ryb3AvbGlua1NoaXBXaXRoQ2VsbC5qcyc7XG5pbXBvcnQgZ2V0R2FtZUNvb3JkaW5hdGVzIGZyb20gJy4vZHJvcC9nZXRHYW1lQ29vcmRpbmF0ZXMuanMnO1xuaW1wb3J0IHNldEZpbmFsQnV0dG9ucyBmcm9tICcuLi9zZXRGaW5hbEJ1dHRvbnMuanMnO1xuaW1wb3J0IGNvbmZpcm1hdGlvbiBmcm9tICcuLi9zZXRNYW51YWxseS9jb25maXJtYXRpb24uanMnO1xuaW1wb3J0IHRyeUFnYWluRm4gZnJvbSAnLi4vc2V0TWFudWFsbHkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gIC8vIEdldCBuZXcgY29udGFpbmVyIGFuZCBjb29yZGluYXRlcyByZWxhdGl2ZXMgdG8gdmlld3BvcnRcbiAgbGV0IHsgY29udGFpbmVyLCBuZXdYLCBuZXdZIH0gPSBnZXRET01Db29yZGluYXRlcyhlKTtcbiAgLy8gR2V0IHNoaXAgZWxlbWVudCAoZHJhZ2dhYmxlID0gc2hpcClcbiAgY29uc3QgZHJhZ2dhYmxlSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRyYWdnYWJsZUlkKTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHBhcnNlSW50KGRyYWdnYWJsZUlkLmNoYXJBdChkcmFnZ2FibGVJZC5sZW5ndGggLSAxKSwgMTApO1xuICAvLyBHZXQgZWxlbWVudHMgb24gc2hpcCBhcmVhIChkcmFnZ2FibGUgPSBzaGlwKVxuICBjb25zdCBlbGVtZW50c09uU2hpcEFyZWEgPSBnZXRFbGVtZW50c09uU2hpcEFyZWEoXG4gICAgZHJhZ2dhYmxlLFxuICAgIGNvbnRhaW5lcixcbiAgICBuZXdYLFxuICAgIG5ld1ksXG4gICAgc2hpcExlbmd0aFxuICApO1xuICAvLyBWZXJpZnkgaWYgZHJhZ0FuZERyb3AgaXMgYSB2YWxpZCBtb3ZlbWVudFxuICBpZiAoZWxlbWVudHNPblNoaXBBcmVhLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2V0dXAgcGxhY2VkIHNoaXAgc3R5bGUgcHJvcGllcnRpZXMgKGRyYWdnYWJsZSA9IHNoaXApXG4gICAgc2V0dXBTaGlwU3R5bGUoZHJhZ2dhYmxlLCBjb250YWluZXIsIG5ld1gsIG5ld1kpO1xuICAgIC8vIElkZW50aWZ5IGVsZW1lbnRzIGFuZCBjaGFuZ2Ugc3R5bGVzOiBMaW5rIHRoZSBzaGlwIHdpdGggdmFsaWQgY2VsbHNcbiAgICBlbGVtZW50c09uU2hpcEFyZWEuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgIGxpbmtTaGlwV2l0aENlbGwoZWxlbWVudCwgZHJhZ2dhYmxlSWQpXG4gICAgKTtcbiAgICAvLyBHZXQgZ2FtZSBjb29yZGluYXRlcyBmb3IgaW50ZXJuYWwgYXBwIHB1cnBvc2VzXG4gICAgZ2V0R2FtZUNvb3JkaW5hdGVzKGRyYWdnYWJsZUlkKTtcbiAgICAvLyBDaGVjayBpZiBQU1QgY29udGFpbmVyIGhhcyBhdmFpbGFibGUgc2hpcHNcbiAgICAvLyBJZiBub3QsIHByb2NlZWQgYnkgYXNraW5nIHRoZSB1c2VyIGZvciBwbGFjZW1lbnQgY29uZmlybWF0aW9uXG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN0Um93ID4gZGl2Jyk7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gQWRkIGNvbmZpcm1hdGlvbiBhbmQgdHJ5YSBhZ2FpbiBidXR0b25zXG4gICAgICBzZXRGaW5hbEJ1dHRvbnMoY29uZmlybWF0aW9uLmxlZ2VuZCgpLCBjb25maXJtYXRpb24uZm4sIHRyeUFnYWluRm4pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RE9NQ29vcmRpbmF0ZXMoZSkge1xuICAvLyBHZXQgZHJhZ1N0YXJ0IGNvb3JkaW5hdGVzIHRvIHNldHVwIHNoaXAgbG9jYXRpb25cbiAgbGV0IG9mZnNldHMgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2FwcGxpY2F0aW9uL2pzb24nKSk7XG4gIC8vIENhbGN1bGF0ZSBkcm9wIGNvb3JkaW5hdGVzIHJlbGF0aXZlcyB0byBkcmFnU3RhcnQgbG9jYXRpb25cbiAgbGV0IG5ld1ggPSBlLmNsaWVudFggLSBvZmZzZXRzLm9mZnNldFg7XG4gIGxldCBuZXdZID0gZS5jbGllbnRZIC0gb2Zmc2V0cy5vZmZzZXRZO1xuICAvLyBDYWxjdWxhdGUgZHJvcCBjb29yZGluYXRlcyByZWxhdGl2ZXMgdG8gZS50YXJqZXQgKGdhbWVib2FyZCBjZWxsKVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5pZCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIG5ld1ggPSBuZXdYIC0gY29udGFpbmVyUmVjdC5sZWZ0IC0gNztcbiAgbmV3WSA9IG5ld1kgLSBjb250YWluZXJSZWN0LnRvcCAtIDc7XG4gIHJldHVybiB7IGNvbnRhaW5lciwgbmV3WCwgbmV3WSB9O1xufVxuIiwiaW1wb3J0IGlkZW50aWZ5RWxlbWVudHNJbkFyZWEgZnJvbSAnLi9pZGVudGlmeUVsZW1lbnRzSW5BcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RWxlbWVudHNPblNoaXBBcmVhKFxuICBkcmFnZ2FibGUsXG4gIG5ld0NvbnRhaW5lcixcbiAgbmV3WCxcbiAgbmV3WSxcbiAgc2hpcExlbmd0aFxuKSB7XG4gIGNvbnN0IGNsb25lID0gZHJhZ2dhYmxlLmNsb25lTm9kZShmYWxzZSk7XG4gIGlmIChjbG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICBjbG9uZS5zdHlsZS5oZWlnaHQgPSBzaGlwTGVuZ3RoICogMjggKyAncHgnO1xuICAgIGNsb25lLnN0eWxlLndpZHRoID0gMTYgKyAncHgnO1xuICB9IGVsc2UgaWYgKGNsb25lLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gMTYgKyAncHgnO1xuICAgIGNsb25lLnN0eWxlLndpZHRoID0gc2hpcExlbmd0aCAqIDI4ICsgJ3B4JztcbiAgfVxuICBjbG9uZS5zdHlsZS5sZWZ0ID0gbmV3WCArICdweCc7XG4gIGNsb25lLnN0eWxlLnRvcCA9IG5ld1kgKyAncHgnO1xuICBjbG9uZS5zdHlsZS5tYXJnaW4gPSAwO1xuICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb25lJyk7XG4gIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gIGNvbnN0IHJlY3QgPSBjbG9uZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgdG9wQ29vcmRpbmF0ZSA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gIGNvbnN0IGJvdHRvbUNvb3JkaW5hdGUgPSByZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZO1xuICBjb25zdCBsZWZ0Q29vcmRpbmF0ZSA9IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICBjb25zdCByaWdodENvb3JkaW5hdGUgPSByZWN0LnJpZ2h0ICsgd2luZG93LnNjcm9sbFg7XG4gIGNsb25lLnJlbW92ZSgpO1xuICByZXR1cm4gaWRlbnRpZnlFbGVtZW50c0luQXJlYShcbiAgICAnLnBnYmMnLFxuICAgIHRvcENvb3JkaW5hdGUsXG4gICAgYm90dG9tQ29vcmRpbmF0ZSxcbiAgICBsZWZ0Q29vcmRpbmF0ZSxcbiAgICByaWdodENvb3JkaW5hdGUsXG4gICAgMFxuICApO1xufVxuIiwiaW1wb3J0IHNoaXBzQ29vcmRpbmF0ZXMgZnJvbSAnLi4vLi4vc2hpcHNDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdhbWVDb29yZGluYXRlcyhzaGlwSWQpIHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzaGlwSWR9YCk7XG4gIGNvbnN0IGdldENlbGxOdW0gPSAoY2VsbCkgPT4ge1xuICAgIHJldHVybiBjZWxsLmlkLnNwbGl0KCdwZ2JjJylbMV07XG4gIH07XG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKGNlbGxOdW0pID0+IHtcbiAgICBpZiAoY2VsbE51bS5sZW5ndGggPT09IDEpIHJldHVybiBbMCwgcGFyc2VJbnQoY2VsbE51bSldO1xuICAgIGVsc2UgaWYgKGNlbGxOdW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gW3BhcnNlSW50KGNlbGxOdW1bMF0pLCBwYXJzZUludChjZWxsTnVtWzFdKV07XG4gICAgfSBlbHNlIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgY29vcmRpbmF0ZXMnKTtcbiAgfTtcbiAgY29uc3Qgc3RhcnRDZWxsID0gY2VsbHNbMF07XG4gIGNvbnN0IGVuZENlbGwgPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcbiAgY29uc3Qgc3RhcnRDb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKGdldENlbGxOdW0oc3RhcnRDZWxsKSk7XG4gIGNvbnN0IGVuZENvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZ2V0Q2VsbE51bShlbmRDZWxsKSk7XG4gIHNoaXBzQ29vcmRpbmF0ZXMucHVzaChbc3RhcnRDb29yZGluYXRlcywgZW5kQ29vcmRpbmF0ZXNdKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aWZ5RWxlbWVudHNJbkFyZWEoXG4gIGVsZW1lbnRzVG9TZWFyY2gsXG4gIHRvcCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICByaWdodCxcbiAgbWFyZ2luXG4pIHtcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzVG9TZWFyY2gpO1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYWxsRWxlbWVudHNbaV07XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbWVudFRvcCA9IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3QgZWxlbWVudExlZnQgPSByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICBjb25zdCBlbGVtZW50UmlnaHQgPSByZWN0LnJpZ2h0ICsgd2luZG93LnNjcm9sbFg7XG5cbiAgICAvLyBWZXJpZmllcyAgaWYgZWFjaCBlbGVtZW50IG92ZXJsYXBzIHRoZSBzaGlwIGFyZWFcbiAgICBpZiAoXG4gICAgICBlbGVtZW50VG9wIDw9IGJvdHRvbSArIG1hcmdpbiAmJlxuICAgICAgZWxlbWVudEJvdHRvbSA+PSB0b3AgLSBtYXJnaW4gJiZcbiAgICAgIGVsZW1lbnRMZWZ0IDw9IHJpZ2h0ICsgbWFyZ2luICYmXG4gICAgICBlbGVtZW50UmlnaHQgPj0gbGVmdCAtIG1hcmdpblxuICAgICkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwiaW1wb3J0IGRyYWdPdmVyIGZyb20gJy4uL2RyYWdPdmVyLmpzJztcbmltcG9ydCBkcmFnTGVhdmUgZnJvbSAnLi4vZHJhZ0xlYXZlLmpzJztcbmltcG9ydCBkcmFnRW50ZXIgZnJvbSAnLi4vZHJhZ0VudGVyLmpzJztcbmltcG9ydCBkcm9wIGZyb20gJy4uL2Ryb3AuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rU2hpcFdpdGhDZWxsKGNlbGwsIGlkKSB7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCd1bmF2YWlsYWJsZUNlbGwnKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKGlkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwU2hpcFN0eWxlKGRyYWdnYWJsZSwgbmV3Q29udGFpbmVyLCBuZXdYLCBuZXdZKSB7XG4gIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICBkcmFnZ2FibGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gIGRyYWdnYWJsZS5zdHlsZS5sZWZ0ID0gbmV3WCArICdweCc7XG4gIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBuZXdZICsgJ3B4JztcbiAgZHJhZ2dhYmxlLnN0eWxlLm1hcmdpbiA9IDA7XG4gIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdwbGFjZWRTaGlwJyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IGNoZWNrbWFyayBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvY2hlY2ttYXJrLWNpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgc3RhcnQgZnJvbSAnLi4vLi4vc3RhcnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRDb25maXJtYXRpb25CdG4oY29uZmlybWF0aW9uRm4pIHtcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpO1xuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgXCJPa2F5LCBsZXQncyBwbGF5IVwiLCAnY29uZmlybWF0aW9uQnRuJywgW1xuICAgIHtcbiAgICAgIGF0dHJpYnV0ZTogJ3R5cGUnLFxuICAgICAgdmFsdWU6ICdidXR0b24nLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCBjb25maXJtYXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybWF0aW9uQnRuJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGNvbmZpcm1hdGlvbkJ0biwgJ2ltZycsIFtdLCAnJywgJ2FwcHJvdmFsSWNvbicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ3NyYycsIHZhbHVlOiBjaGVja21hcmsgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2FsdCcsIHZhbHVlOiAnYXBwcm92YWwgaWNvbicgfSxcbiAgXSk7XG4gIGNvbmZpcm1hdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25maXJtYXRpb25GbigpO1xuICAgIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAgIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHN0LnJlbW92ZSgpO1xuICAgICAgc3RhcnQoKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHNldENvbmZpcm1hdGlvbkJ0biBmcm9tICcuL3NldENvbmZpcm1hdGlvbkJ0bi5qcyc7XG5pbXBvcnQgc2V0VHJ5QWdhaW5CdG4gZnJvbSAnLi9zZXRUcnlBZ2FpbkJ0bi5qcyc7XG5pbXBvcnQgY3JlYXRlUFNUIGZyb20gJy4vY3JlYXRlUFNULmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RmluYWxCdXR0b25zKG5ld0xlZ2VuZCwgY29uZmlybWF0aW9uRm4sIHRyeUFnYWluRm4pIHtcbiAgY29uc3QgcHN0ID0gKCgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BzdCcpLmxlbmd0aCA9PT0gMFxuICAgICAgPyBjcmVhdGVQU1QoKVxuICAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHN0Jyk7XG4gIH0pKCk7XG4gIC8vIEhpZGUgdGVtcG9yYXJ5IHBzdCBjb250YWluZXJcbiAgaWYgKHBzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkgcHN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHVubmVjZXNhcnkgZWxlbWVudHMgZnJvbSBwcmV2aW91cyBzdGVwXG4gICAgd2hpbGUgKHBzdC5maXJzdENoaWxkKSB7XG4gICAgICBwc3QucmVtb3ZlQ2hpbGQocHN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBTZXQgbmV3IG9yaWVudGF0aW9uIHRvIHVzZXJcbiAgICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdwJywgW10sIG5ld0xlZ2VuZCwgJ2xlZ2VuZCcpO1xuICAgIC8vIFNldCBjb25maXJtYXRpb24gYnV0dG9uXG4gICAgc2V0Q29uZmlybWF0aW9uQnRuKGNvbmZpcm1hdGlvbkZuKTtcbiAgICAvLyBTZXQgdHJ5IGFnYWluIGJ1dHRvblxuICAgIHNldFRyeUFnYWluQnRuKHRyeUFnYWluRm4pO1xuICB9LCA1MDApO1xuICAvLyBTaG93IHBzdCBjb250YWluZXJcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHN0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfSwgMTAwMCk7XG59XG4iLCJpbXBvcnQgYWRkRWxlbWVudHMgZnJvbSAnLi9zZXRNYW51YWxseS9hZGRFbGVtZW50cy5qcyc7XG5pbXBvcnQgc2V0U2hpcHNPblBTVCBmcm9tICcuL3NldE1hbnVhbGx5L3NldFNoaXBzT25QU1QuanMnO1xuaW1wb3J0IHNldERyYWdBbmREcm9wIGZyb20gJy4vc2V0TWFudWFsbHkvc2V0RHJhZ0FuZERyb3AuanMnO1xuaW1wb3J0IGNoYW5nZURpcmVjdGlvbiBmcm9tICcuL3NldE1hbnVhbGx5L2NoYW5nZURpcmVjdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE1hbnVhbGx5KCkge1xuICAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZS1zaGlwcyB0b29sXG4gIGNvbnN0IHBzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTtcbiAgLy8gSGlkZSB0ZW1wb3JhcnkgcHN0IGNvbnRhaW5lclxuICBwc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBEZWxldGUgaHRtbCBlbGVtZW50cyBmcm9tIHByZXZpb3VzIHN0ZXBcbiAgICB3aGlsZSAocHN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBzdC5yZW1vdmVDaGlsZChwc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSB1c2VyIGFkdmljZSwgY2hhbmdlIHNoaXBzIGRpcmVjdGlvbiBidXR0b24gYW5kIGRyYWdnYWJsZSBzaGlwcyBjb250YWluZXJcbiAgICBhZGRFbGVtZW50cyhwc3QpO1xuICAgIC8vIFNldCBkcmFnZ2FibGUgc2hpcHMgb24gdG9vbCBjb250YWluZXJcbiAgICBzZXRTaGlwc09uUFNUKCk7XG4gICAgLy8gQWRkIGZ1bmN0aW9uYWxpdHkgdG8gYnV0dG9uXG4gICAgY29uc3QgZGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbkJ0bicpO1xuICAgIGRpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoYW5nZURpcmVjdGlvbigpO1xuICAgIH0pO1xuICAgIC8vIFNldCBkcmFnIGFuZCBkcm9wIGZ1bmN0aW9uYWxpdGllcyB0byBzaGlwcyBhbmQgZ2FtZWJvYXJkXG4gICAgc2V0RHJhZ0FuZERyb3AoKTtcbiAgfSwgNTAwKTtcbiAgLy8gU2hvdyBwc3QgY29udGFpbmVyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0sIDUwMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IGFycm93IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hcnJvdy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGVtZW50cyhwc3QpIHtcbiAgLy8gQ3JlYXRlIHVzZXIgYWR2aWNlXG4gIGNvbnN0IGxlZ2VuZCA9ICdQbGFjZSB5b3VyIHNoaXBzISc7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ3AnLCBbXSwgbGVnZW5kLCAnbGVnZW5kJyk7XG4gIC8vIENyZWF0ZSBjaGFuZ2Ugc2hpcHMgZGlyZWN0aW9uIGJ1dHRvblxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ0NoYW5nZSBkaXJlY3Rpb24nLCAnZGlyZWN0aW9uQnRuJywgW1xuICAgIHsgYXR0cmlidXRlOiAndHlwZScsIHZhbHVlOiAnYnV0dG9uJyB9LFxuICBdKTtcbiAgY29uc3QgZGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbkJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChkaXJlY3Rpb25CdG4sICdpbWcnLCBbXSwgJycsICdkaXJlY3Rpb25JY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IGFycm93IH0sXG4gICAgeyBhdHRyaWJ1dGU6ICdhbHQnLCB2YWx1ZTogJ2RpcmVjdGlvbkljb24nIH0sXG4gIF0pO1xuICAvLyBjcmVhdGUgZHJhZ2dhYmxlIHNoaXBzIGNvbnRhaW5lclxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdkaXYnLCBbXSwgJycsICdzaGlwc0NvbnRhaW5lcicpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwc0NvbnRhaW5lcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHNoaXBzQ29udGFpbmVyLCAnZGl2JywgWydwc3RSb3cnXSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN0U2hpcCcpO1xuICBsZXQgZGlyZWN0aW9uO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWRTaGlwJykgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJywgJ3JvdGF0ZScpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJywgJ3JvdGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uSWNvbicpO1xuICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICBpY29uLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQnO1xuICB9IGVsc2Uge1xuICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtOTBkZWcpJztcbiAgICBpY29uLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQnO1xuICB9XG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IHNoaXBzQ29vcmRpbmF0ZXMgZnJvbSAnLi4vc2hpcHNDb29yZGluYXRlcy5qcyc7XG5pbXBvcnQgcGxhY2VTaGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL2dhbWUvb3BlcmF0aW9ucy9wbGFjZVNoaXAuanMnO1xuXG5jb25zdCBwbGF5ZXJOYW1lID0gKCkgPT4ge1xuICBpZiAoJ2dhbWUnIGluIHBsYXkuY3VycmVudCkgcmV0dXJuIHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEubmFtZTtcbiAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IGxlZ2VuZCA9ICgpID0+IHtcbiAgcmV0dXJuIGBHb29kIGpvYiAke3BsYXllck5hbWUoKX0hIE5vdyBwbGVhc2UgY29uZmlybSB5b3VyIHNlbGVjdGlvbiBvciB0cnkgYWdhaW4uYDtcbn07XG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGlmICgnZ2FtZScgaW4gcGxheS5jdXJyZW50KSByZXR1cm4gcGxheS5jdXJyZW50LmdhbWUucGxheWVyMS5nYW1lYm9hcmQ7XG4gIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCBmbiA9ICgpID0+IHNoaXBzQ29vcmRpbmF0ZXMuZm9yRWFjaCgoZWwpID0+IHBsYWNlU2hpcChnYW1lYm9hcmQoKSwgZWwpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsZWdlbmQsXG4gIGZuLFxufTtcbiIsImltcG9ydCBkcmFnU3RhcnQgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJhZ1N0YXJ0LmpzJztcbmltcG9ydCBkcmFnT3ZlciBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnT3Zlci5qcyc7XG5pbXBvcnQgZHJhZ0xlYXZlIGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdMZWF2ZS5qcyc7XG5pbXBvcnQgZHJhZ0VuZCBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnRW5kLmpzJztcbmltcG9ydCBkcmFnRW50ZXIgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJhZ0VudGVyLmpzJztcbmltcG9ydCBkcm9wIGZyb20gJy4uL2RyYWdBbmREcm9wL2Ryb3AuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXREcmFnQW5kRHJvcCgpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN0U2hpcCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBnYmMnKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgfSk7XG4gIH0sIDEwMDApO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2hpcHNPblBTVCgpIHtcbiAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3RSb3cnKTtcbiAgLy8gVGhlIHNoaXBzJyBsZW5ndGggd2FzIHNldCB1cCBpbiB0aGUgQ1NTIGZpbGVcbiAgY29uc3QgY2xhc3NlcyA9IFsncHN0U2hpcCcsICd2ZXJ0aWNhbCcsICdyb3RhdGUnXTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocm93c1swXSwgJ2RpdicsIGNsYXNzZXMsICcnLCAncFNoaXA2JywgW1xuICAgIHsgYXR0cmlidXRlOiAnZHJhZ2dhYmxlJywgdmFsdWU6ICd0cnVlJyB9LFxuICBdKTsgLy8gU2hpcCB3aXRoIDYgY2VsbHMgbGVuZ3RoXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHJvd3NbMV0sICdkaXYnLCBjbGFzc2VzLCAnJywgJ3BTaGlwNScsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2RyYWdnYWJsZScsIHZhbHVlOiAndHJ1ZScgfSxcbiAgXSk7IC8vIFNoaXAgd2l0aCA1IGNlbGxzIGxlbmd0aFxuICBjcmVhdGVIdG1sRWxlbWVudChyb3dzWzFdLCAnZGl2JywgY2xhc3NlcywgJycsICdwU2hpcDInLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdkcmFnZ2FibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gIF0pOyAvLyBTaGlwIHdpdGggMiBjZWxscyBsZW5ndGhcbiAgY3JlYXRlSHRtbEVsZW1lbnQocm93c1syXSwgJ2RpdicsIGNsYXNzZXMsICcnLCAncFNoaXA0JywgW1xuICAgIHsgYXR0cmlidXRlOiAnZHJhZ2dhYmxlJywgdmFsdWU6ICd0cnVlJyB9LFxuICBdKTsgLy8gU2hpcCB3aXRoIDQgY2VsbHMgbGVuZ3RoXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHJvd3NbMl0sICdkaXYnLCBjbGFzc2VzLCAnJywgJ3BTaGlwMycsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2RyYWdnYWJsZScsIHZhbHVlOiAndHJ1ZScgfSxcbiAgXSk7IC8vIFNoaXAgd2l0aCAzIGNlbGxzIGxlbmd0aFxufVxuIiwiaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCBzZXRGaW5hbEJ1dHRvbnMgZnJvbSAnLi9zZXRGaW5hbEJ1dHRvbnMuanMnO1xuaW1wb3J0IGNvbmZpcm1hdGlvbiBmcm9tICcuL3NldFJhbmRvbWx5L2NvbmZpcm1hdGlvbi5qcyc7XG5pbXBvcnQgZ2V0SWQgZnJvbSAnLi9zZXRSYW5kb21seS9nZXRJZC5qcyc7XG5pbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc2V0UmFuZG9tbHkvc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRSYW5kb21seSgpIHtcbiAgLy8gQWRkIGNvbmZpcm1hdGlvbiBhbmQgdHJ5IGFnYWluIGJ1dHRvbnNcbiAgY29uc3QgbGVnZW5kID0gY29uZmlybWF0aW9uLmxlZ2VuZDtcbiAgc2V0RmluYWxCdXR0b25zKGxlZ2VuZCwgY29uZmlybWF0aW9uLmZuLCBzZXRSYW5kb21seSk7XG4gIC8vIEdldCBzaGlwcyBjb29yZGluYXRlc1xuICBjb25zdCBzZXRQbGF5ZXJTaGlwc1JhbmRvbWx5ID0gcGxheS5jdXJyZW50LnNldFBsYXllclNoaXBzUmFuZG9tbHk7XG4gIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXMgPSBzZXRQbGF5ZXJTaGlwc1JhbmRvbWx5KDEpO1xuICAvLyBBcHBseSBzdHlsZSB0byBjb3JyZXNwb25kaW5nIERPTSBjZWxsc1xuICBzaGlwc0Nvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwQ29vcmRpbmF0ZXNbMV1bMF1cbiAgICAgICAgPyAnaG9yaXpvbnRhbCdcbiAgICAgICAgOiAndmVydGljYWwnO1xuICAgIH0pKCk7XG4gICAgY29uc3QgZmlyc3RDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBnZXRJZChzaGlwQ29vcmRpbmF0ZXNbMF1bMF0sIHNoaXBDb29yZGluYXRlc1swXVsxXSlcbiAgICApO1xuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0gW2RpcmVjdGlvbiwgJ3JhbmRvbWx5UGxhY2VkU2hpcCddO1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KGZpcnN0Q2VsbCwgJ2RpdicsIHNoaXBDbGFzc2VzLCAnJywgYGwke3NoaXBMZW5ndGh9c2hpcGApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gc2hpcENvb3JkaW5hdGVzW2ldWzBdO1xuICAgICAgICBjb25zdCBjb2wgPSBzaGlwQ29vcmRpbmF0ZXNbaV1bMV07XG4gICAgICAgIGNvbnN0IGlkID0gZ2V0SWQocm93LCBjb2wpO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3VuYXZhaWxhYmxlQ2VsbCcpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZG9tbHlQbGFjZWRTaGlwJyk7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgfSk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG59XG4iLCJjb25zdCBsZWdlbmQgPSAnQ29uZmlybSB0aGUgc2hpcHMgcGxhY2VtZW50IG9yIHRyeSBhZ2Fpbi4nO1xuY29uc3QgZm4gPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsZWdlbmQsXG4gIGZuLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldElkKHJvdywgY29sKSB7XG4gIGxldCByID0gKCgpID0+IHtcbiAgICByZXR1cm4gcm93ID09PSAwID8gJycgOiByb3c7XG4gIH0pKCk7XG4gIHJldHVybiAncGdiYycgKyByICsgY29sO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzZXRQbGF5ZXJHYW1lYm9hcmQgZnJvbSAnLi4vZ2FtZWJvYXJkcy9zZXRQbGF5ZXJHYW1lYm9hcmQuanMnO1xuaW1wb3J0IHJlcGVhdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvcmVwZWF0LW91dGxpbmUuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VHJ5QWdhaW5CdG4odHJ5QWdhaW5Gbikge1xuICBjb25zdCBwc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHN0Jyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ2J1dHRvbicsIFtdLCAnTGV0IG1lIHRyeSBhZ2FpbicsICd0cnlBZ2FpbkJ0bicsIFtcbiAgICB7XG4gICAgICBhdHRyaWJ1dGU6ICd0eXBlJyxcbiAgICAgIHZhbHVlOiAnYnV0dG9uJyxcbiAgICB9LFxuICBdKTtcbiAgY29uc3QgdHJ5QWdhaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJ5QWdhaW5CdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQodHJ5QWdhaW5CdG4sICdpbWcnLCBbXSwgJycsICdyZXBlYXRJY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IHJlcGVhdCB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdyZXBlYXQgaWNvbicgfSxcbiAgXSk7XG4gIHRyeUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBzdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gICAgcGxheWVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXJTZWN0aW9uLnJlbW92ZSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFBsYXllckdhbWVib2FyZCgpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9LCA1MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJ5QWdhaW5GbigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgICAgICBuZXdQbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW107XG4iLCJpbXBvcnQgc2V0UGxheWVyR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkcy9zZXRQbGF5ZXJHYW1lYm9hcmQuanMnO1xuaW1wb3J0IHNldFBsYWNlU2hpcHNUb29sIGZyb20gJy4vc2V0UGxhY2VTaGlwc1Rvb2wuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHNldFJhbmRvbWx5IGZyb20gJy4vcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHYW1lQ29udGFpbmVyKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBoZWFkZXIucmVtb3ZlKCk7XG4gICAgZm9vdGVyLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZW1vdmUoKTtcbiAgICBjb25zdCBpc01vdmlsZSA9XG4gICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICk7XG4gICAgc2V0UGxheWVyR2FtZWJvYXJkKCk7XG4gICAgaXNNb3ZpbGUgPT09IGZhbHNlID8gc2V0UGxhY2VTaGlwc1Rvb2woKSA6IHNldFJhbmRvbWx5KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgICAgIGNvbnN0IHBzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTsgLy8gcHN0IHN0YW5kcyBmb3IgcGxhY2Ugc2hpcHMgdG9vbFxuICAgICAgcGxheWVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICBwc3QuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIH0sIDUwMCk7XG4gIH0sIDUwMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UGFuZWwoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHBhbmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFuZWwnKTtcbiAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBnZW5lcmFsQ29udGFpbmVyLmluc2VydEJlZm9yZShwYW5lbCwgcGxheWVyU2VjdGlvbik7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGNvbnN0IGxlZ2VuZCA9IGBJdCdzIHlvdXIgdHVybiAke3BsYXllck5hbWV9OmA7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBhbmVsLCAncCcsIFtdLCBsZWdlbmQsICdiYXNpY09yaWVudGF0aW9uJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBhbmVsLCAncCcsIFtdLCAnQXR0YWNrIScsICdhbmltYXRpb25UZXh0Jyk7XG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IGNyZWF0ZUh0bWxFbGVtZW50IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2NyZWF0ZUh0bWxFbGVtZW50LmpzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3N0eWxlLmNzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBzaHVmZmxlIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9zaHVmZmxlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBoYW5kIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9oYW5kLXJpZ2h0LW91dGxpbmUuc3ZnJztcbmltcG9ydCBzZXRSYW5kb21seSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5LmpzJztcbmltcG9ydCBzZXRNYW51YWxseSBmcm9tICcuL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5LmpzJztcbmltcG9ydCBjcmVhdGVQU1QgZnJvbSAnLi9wbGFjZVNoaXBzVG9vbC9jcmVhdGVQU1QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQbGFjZVNoaXBzVG9vbCgpIHtcbiAgLy8gQ3JlYXRlIHBzdCBjb250YWluZXJcbiAgLy8gcHN0IHN0YW5kcyBmb3IgcGxhY2Utc2hpcHMgdG9vbFxuICBjb25zdCBwc3QgPSBjcmVhdGVQU1QoKTtcbiAgLy8gQ3JlYXRlIHVzZXIgYWR2aWNlXG4gIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLm5hbWU7XG4gIGNvbnN0IGxlZ2VuZCA9IGBIaSAke3BsYXllck5hbWV9ISBQbGVhc2Ugc2VsZWN0IGhvdyB5b3Ugd2FudCB0byBwbGFjZSB5b3VyIG5hdnk6YDtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAncCcsIFtdLCBsZWdlbmQsICdsZWdlbmQnKTtcbiAgLy8gQ3JlYXRlIHNldCByYW5kb21seSBidXR0b25cbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAnYnV0dG9uJywgW10sICdTZXQgcmFuZG9tbHknLCAncmFuZG9tbHlCdG4nKTtcbiAgY29uc3QgcmFuZG9tbHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tbHlCdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocmFuZG9tbHlCdG4sICdpbWcnLCBbXSwgJycsICdyYW5kb21JY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IHNodWZmbGUgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2FsdCcsIHZhbHVlOiAncmFuZG9tIGljb24nIH0sXG4gIF0pO1xuICByYW5kb21seUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRSYW5kb21seSgpO1xuICB9KTtcbiAgLy8gQ3JlYXRlIHNldCBtYW51YWxseSBidXR0b25cbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAnYnV0dG9uJywgW10sICdTZXQgbWFudWFsbHknLCAnbWFudWFsbHlCdG4nKTtcbiAgY29uc3QgbWFudWFsbHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFudWFsbHlCdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQobWFudWFsbHlCdG4sICdpbWcnLCBbXSwgJycsICdyYW5kb21JY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IGhhbmQgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2FsdCcsIHZhbHVlOiAnaGFuZCBpY29uJyB9LFxuICBdKTtcbiAgbWFudWFsbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0TWFudWFsbHkoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHJlc3RhcnQgZnJvbSAnLi9yZXN0YXJ0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kKGxlZ2VuZFdpbm5lcikge1xuICBjb25zdCBiYXNpY09yaWVudGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljT3JpZW50YXRpb24nKTtcbiAgYmFzaWNPcmllbnRhdGlvbi50ZXh0Q29udGVudCA9ICdHYW1lIG92ZXInO1xuICBjb25zdCBhbmltYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hdGlvblRleHQnKTtcbiAgYW5pbWF0aW9uVGV4dC50ZXh0Q29udGVudCA9IGxlZ2VuZFdpbm5lcjtcbiAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gIHBsYXllclNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgQUlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJU2VjdGlvbicpO1xuICBBSVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIGdlbmVyYWxDb250YWluZXIsXG4gICAgJ2J1dHRvbicsXG4gICAgW10sXG4gICAgJ1BsYXkgYWdhaW4nLFxuICAgICdwbGF5QWdhaW5CdG4nLFxuICAgIFt7IGF0dHJpYnV0ZTogJ3R5cGUnLCB2YWx1ZTogJ2J1dHRvbicgfV1cbiAgKTtcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlBZ2FpbkJ0bicpO1xuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDApO1xufVxuIiwiaW1wb3J0IHNldFBsYXllckdhbWVib2FyZCBmcm9tICcuL0dVSS9nYW1lYm9hcmRzL3NldFBsYXllckdhbWVib2FyZC5qcyc7XG5pbXBvcnQgc2V0UGxhY2VTaGlwc1Rvb2wgZnJvbSAnLi9HVUkvc2V0UGxhY2VTaGlwc1Rvb2wuanMnO1xuaW1wb3J0IHNldFJhbmRvbWx5IGZyb20gJy4vR1VJL3BsYWNlU2hpcHNUb29sL3NldFJhbmRvbWx5LmpzJztcbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgc2V0R2FtZSBmcm9tICcuLi8uLi9nYW1lL3NldEdhbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgbGV0IHBsYXllck5hbWUgPSBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIubmFtZTtcbiAgcGxheS5jdXJyZW50ID0gc2V0R2FtZSgpO1xuICBwbGF5LmN1cnJlbnQuc2V0UGxheWVyTmFtZSgxLCBwbGF5ZXJOYW1lKTtcbiAgcGxheS5jdXJyZW50LnNldFBsYXllck5hbWUoMiwgJ01hY2hpbmUnKTtcbiAgLy8gUGxhY2UgbWFjaGluZSBzaGlwc1xuICBwbGF5LmN1cnJlbnQuc2V0UGxheWVyU2hpcHNSYW5kb21seSgyKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hpbGUgKGdlbmVyYWxDb250YWluZXIuZmlyc3RDaGlsZCkgZ2VuZXJhbENvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIGNvbnN0IGlzTW92aWxlID1cbiAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgKTtcbiAgICBzZXRQbGF5ZXJHYW1lYm9hcmQoKTtcbiAgICBpc01vdmlsZSA9PT0gZmFsc2UgPyBzZXRQbGFjZVNoaXBzVG9vbCgpIDogc2V0UmFuZG9tbHkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgICAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpOyAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZSBzaGlwcyB0b29sXG4gICAgICBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfSwgNTAwKTtcbiAgfSwgNTAwKTtcbn1cbiIsImltcG9ydCBzZXRHYW1lQ29udGFpbmVyIGZyb20gJy4vR1VJL3NldEdhbWVDb250YWluZXIuanMnO1xuaW1wb3J0IHNldEdhbWUgZnJvbSAnLi4vLi4vZ2FtZS9zZXRHYW1lLmpzJztcbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uL2dhbWUvcGxheS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBTdGFydCBnYW1lIGFuZCBzZXQgdXAgcGxheWVycyBuYW1lXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICBwbGF5LmN1cnJlbnQgPSBzZXRHYW1lKCk7XG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJOYW1lKDEsIHBsYXllck5hbWUpO1xuICBwbGF5LmN1cnJlbnQuc2V0UGxheWVyTmFtZSgyLCAnTWFjaGluZScpO1xuICAvLyBQbGFjZSBtYWNoaW5lIHNoaXBzXG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJTaGlwc1JhbmRvbWx5KDIpO1xuICAvLyBXZSBwcm9jZWVkIGJ5IHJlbW92aW5nIHRoZSBmb3JtIGFuZCBhZGRpbmcgcGxheWVyIGdhbWVib2FyZCB0byB0aGUgRE9NLlxuICBzZXRHYW1lQ29udGFpbmVyKCk7XG59XG4iLCJpbXBvcnQgc2V0UGFuZWwgZnJvbSAnLi9HVUkvc2V0UGFuZWwuanMnO1xuaW1wb3J0IHNldE1hY2hpbmVHYW1lYm9hcmQgZnJvbSAnLi9HVUkvZ2FtZWJvYXJkcy9zZXRNYWNoaW5lR2FtZWJvYXJkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICBzZXRQYW5lbCgpO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgcGxheWVyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBzZXRNYWNoaW5lR2FtZWJvYXJkKCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDUwMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHdhdmVzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy93YXZlcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmFwaGljYWxTaGlwcycpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICBjb25zdCBzdHIxID0gJ3NoaXBDb250YWluZXInO1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KGNvbnRhaW5lciwgJ2RpdicsIFtzdHIxXSwgJycsIGAke3N0cjF9JHtpfWApO1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzdHIxfSR7aX1gKTtcbiAgICBjb25zdCBzdHIyID0gJ2dyYXBoaWNhbFNoaXAnO1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHNoaXBDb250YWluZXIsICdkaXYnLCBbc3RyMl0sICcnLCBgJHtzdHIyfSR7aX1gKTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c3RyMn0ke2l9YCk7XG4gICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgIHVybCgke3dhdmVzfSlgO1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHNoaXAsICdkaXYnLCBbJ2xlZnRTYWlsJ10pO1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHNoaXAsICdkaXYnLCBbJ3JpZ2h0U2FpbCddKTtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAzOyBqKyspIHtcbiAgICAgIGNyZWF0ZUh0bWxFbGVtZW50KFxuICAgICAgICBzaGlwQ29udGFpbmVyLFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgWydiYWNrZ3JvdW5kUm93JywgYCR7J2JhY2tncm91bmRSb3cnfSR7an1gXSxcbiAgICAgICAgJycsXG4gICAgICAgIGAkeydiYWNrZ3JvdW5kUm93J30tJHtpfS0ke2p9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeydiYWNrZ3JvdW5kUm93J30tJHtpfS0ke2p9YCk7XG4gICAgICBjb25zdCB1cmwgPSBgIHVybCgke3dhdmVzfSlgO1xuICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEdhbWVib2FyZCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gW107XG4gIGNvbnN0IGNlbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgYXR0YWNrZWQ6IGZhbHNlIH07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykgcm93LnB1c2goY2VsbCgpKTtcbiAgICBnYW1lYm9hcmQucHVzaChyb3cpO1xuICB9XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59XG4iLCJpbXBvcnQgc2V0R2FtZWJvYXJkIGZyb20gJy4vc2V0R2FtZWJvYXJkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UGxheWVycygpIHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIxOiB7XG4gICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICBnYW1lYm9hcmQ6IHNldEdhbWVib2FyZCgpLFxuICAgICAgd2luczogMCxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9LFxuICAgIHBsYXllcjI6IHtcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGdhbWVib2FyZDogc2V0R2FtZWJvYXJkKCksXG4gICAgICB3aW5zOiAwLFxuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaGlwKGxlbmd0aCkge1xuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIGlzU3VuazogKCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAuaGl0cyA9PT0gc2hpcC5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBoaXQ6ICgpID0+IHtcbiAgICAgIHNoaXAuaGl0cyArPSAxO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBzaGlwO1xufVxuIiwiaW1wb3J0IGdldEF0dGFja0Nvb3JkaW5hdGVzIGZyb20gJy4vZ2V0QXR0YWNrQ29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdHRhY2tIb3Jpem9udGFsKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wpIHtcbiAgaWYgKFxuICAgIGNvbCAtIDEgPj0gMCAmJlxuICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2xdICYmXG4gICAgIXBsYXllckdhbWVib2FyZFtyb3ddW2NvbCAtIDFdLmF0dGFja2VkXG4gICkge1xuICAgIHJldHVybiBbcm93LCBjb2wgLSAxXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaWR4ID0gY29sICsgMTtcbiAgICB3aGlsZSAoXG4gICAgICBwbGF5ZXJHYW1lYm9hcmRbcm93XVtpZHhdLmF0dGFja2VkICYmXG4gICAgICAnc2hpcCcgaW4gcGxheWVyR2FtZWJvYXJkW3Jvd11baWR4XVxuICAgICkge1xuICAgICAgaWR4Kys7XG4gICAgfVxuICAgIHJldHVybiBpZHggPD0gOSAmJiAhcGxheWVyR2FtZWJvYXJkW3Jvd11baWR4XS5hdHRhY2tlZFxuICAgICAgPyBbcm93LCBpZHhdXG4gICAgICA6IGdldEF0dGFja0Nvb3JkaW5hdGVzKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wsIHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCByZWNlaXZlQXR0YWNrIGZyb20gJy4uL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja1JhbmRvbWx5KHBsYXllckdhbWVib2FyZCkge1xuICBsZXQgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlO1xuICBsZXQgY29vcmRpbmF0ZXM7XG4gIHdoaWxlICh2YWxpZENvb3JkaW5hdGVzID09PSBmYWxzZSkge1xuICAgIGNvbnN0IHJhbmRvbUNlbGxOdW0gPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfSkoKTtcbiAgICBjb25zdCByb3cgPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHJhbmRvbUNlbGxOdW0gPCAxMCA/IDAgOiBNYXRoLmZsb29yKHJhbmRvbUNlbGxOdW0gLyAxMCk7XG4gICAgfSkoKTtcbiAgICBjb25zdCBjb2wgPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHJhbmRvbUNlbGxOdW0gPCAxMCA/IHJhbmRvbUNlbGxOdW0gOiByYW5kb21DZWxsTnVtICUgMTA7XG4gICAgfSkoKTtcbiAgICBpZiAoIXBsYXllckdhbWVib2FyZFtyb3ddW2NvbF0uYXR0YWNrZWQpIHtcbiAgICAgIGNvb3JkaW5hdGVzID0gW3JvdywgY29sXTtcbiAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHBsYXllckdhbWVib2FyZCwgY29vcmRpbmF0ZXMpO1xuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG4iLCJpbXBvcnQgZ2V0QXR0YWNrQ29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRBdHRhY2tDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja1ZlcnRpY2FsKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wpIHtcbiAgaWYgKFxuICAgIHJvdyAtIDEgPj0gMCAmJlxuICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2xdICYmXG4gICAgIXBsYXllckdhbWVib2FyZFtyb3cgLSAxXVtjb2xdLmF0dGFja2VkXG4gICkge1xuICAgIHJldHVybiBbcm93IC0gMSwgY29sXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaWR4ID0gcm93ICsgMTtcbiAgICB3aGlsZSAoXG4gICAgICBwbGF5ZXJHYW1lYm9hcmRbaWR4XVtjb2xdLmF0dGFja2VkICYmXG4gICAgICAnc2hpcCcgaW4gcGxheWVyR2FtZWJvYXJkW2lkeF1bY29sXVxuICAgICkge1xuICAgICAgKytpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHggPD0gOSAmJiAhcGxheWVyR2FtZWJvYXJkW2lkeF1bY29sXS5hdHRhY2tlZFxuICAgICAgPyBbaWR4LCBjb2xdXG4gICAgICA6IGdldEF0dGFja0Nvb3JkaW5hdGVzKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wsICdob3Jpem9udGFsJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24oXG4gIHBsYXllckdhbWVib2FyZCxcbiAgcm93LFxuICBjb2xcbikge1xuICBpZiAocm93IC0gMSA+PSAwICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93IC0gMV1bY29sXS5hdHRhY2tlZCkge1xuICAgIHJldHVybiBbcm93IC0gMSwgY29sXTtcbiAgfSBlbHNlIGlmIChyb3cgKyAxIDw9IDkgJiYgIXBsYXllckdhbWVib2FyZFtyb3cgKyAxXVtjb2xdLmF0dGFja2VkKSB7XG4gICAgcmV0dXJuIFtyb3cgKyAxLCBjb2xdO1xuICB9IGVsc2UgaWYgKGNvbCAtIDEgPj0gMCAmJiAhcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sIC0gMV0uYXR0YWNrZWQpIHtcbiAgICByZXR1cm4gW3JvdywgY29sIC0gMV07XG4gIH0gZWxzZSBpZiAoY29sICsgMSA8PSA5ICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgKyAxXS5hdHRhY2tlZCkge1xuICAgIHJldHVybiBbcm93LCBjb2wgKyAxXTtcbiAgfVxufVxuIiwiaW1wb3J0IGF0dGFja1ZlcnRpY2FsIGZyb20gJy4vYXR0YWNrVmVydGljYWwuanMnO1xuaW1wb3J0IGF0dGFja0hvcml6b250YWwgZnJvbSAnLi9hdHRhY2tIb3Jpem9udGFsLmpzJztcbmltcG9ydCBhdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uIGZyb20gJy4vYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEF0dGFja0Nvb3JkaW5hdGVzKFxuICBwbGF5ZXJHYW1lYm9hcmQsXG4gIHJvdyxcbiAgY29sLFxuICBkaXJlY3Rpb25cbikge1xuICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xuICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgcmV0dXJuIGF0dGFja1ZlcnRpY2FsKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wpO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgcmV0dXJuIGF0dGFja0hvcml6b250YWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbihwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpZnlEaXJlY3Rpb24ocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCkge1xuICBsZXQgZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBjb25zdCB0b3AgPSAoKCkgPT4ge1xuICAgIHJldHVybiByb3cgLSAxID49IDAgPyBwbGF5ZXJHYW1lYm9hcmRbcm93IC0gMV1bY29sXSA6IGZhbHNlO1xuICB9KSgpO1xuICBjb25zdCBib3R0b20gPSAoKCkgPT4ge1xuICAgIHJldHVybiByb3cgKyAxIDw9IDkgPyBwbGF5ZXJHYW1lYm9hcmRbcm93ICsgMV1bY29sXSA6IGZhbHNlO1xuICB9KSgpO1xuICBjb25zdCBsZWZ0ID0gKCgpID0+IHtcbiAgICByZXR1cm4gY29sIC0gMSA+PSAwID8gcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sIC0gMV0gOiBmYWxzZTtcbiAgfSkoKTtcbiAgY29uc3QgcmlnaHQgPSAoKCkgPT4ge1xuICAgIHJldHVybiBjb2wgKyAxIDw9IDkgPyBwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgKyAxXSA6IGZhbHNlO1xuICB9KSgpO1xuICBpZiAodG9wICYmIHRvcC5hdHRhY2tlZCAmJiAnc2hpcCcgaW4gdG9wKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfSBlbHNlIGlmIChib3R0b20gJiYgYm90dG9tLmF0dGFja2VkICYmICdzaGlwJyBpbiBib3R0b20pIHtcbiAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2UgaWYgKGxlZnQgJiYgbGVmdC5hdHRhY2tlZCAmJiAnc2hpcCcgaW4gbGVmdCkge1xuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfSBlbHNlIGlmIChyaWdodCAmJiByaWdodC5hdHRhY2tlZCAmJiAnc2hpcCcgaW4gcmlnaHQpIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbFNoaXBzU3VuayhnYW1lYm9hcmQpIHtcbiAgbGV0IHN0YXR1cyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHBsYWNlID0gZ2FtZWJvYXJkW2ldW2pdO1xuICAgICAgaWYgKCdzaGlwJyBpbiBwbGFjZSAmJiBwbGFjZS5zaGlwLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICBzdGF0dXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXR1cztcbn1cbiIsImltcG9ydCBzZXRTaGlwIGZyb20gJy4uL2ZhY3Rvcmllcy9zZXRTaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VTaGlwKGdhbWVib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3Qgc3RhcnQgPSBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgZW5kID0gY29vcmRpbmF0ZXNbMV07XG4gIGNvbnN0IGNlbGxzID0gW107XG4gIGNvbnN0IGF4aXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHggPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXJ0WzBdID09PSBlbmRbMF0gPyB0cnVlIDogZmFsc2U7XG4gICAgfSkoKTtcbiAgICBjb25zdCBsZW5ndGggPSAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHggPT09IHRydWUgPyBlbmRbMV0gLSBzdGFydFsxXSArIDEgOiBlbmRbMF0gLSBzdGFydFswXSArIDE7XG4gICAgfSkoKTtcbiAgICByZXR1cm4geyB4LCBsZW5ndGggfTtcbiAgfSkoKTtcbiAgaWYgKGF4aXMueCA9PT0gdHJ1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2VsbHMucHVzaChbc3RhcnRbMF0sIHN0YXJ0WzFdICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF4aXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNlbGxzLnB1c2goW3N0YXJ0WzBdICsgaSwgc3RhcnRbMV1dKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hpcCA9IHNldFNoaXAoYXhpcy5sZW5ndGgpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbY2VsbFswXV1bY2VsbFsxXV07XG4gICAgaWYgKCdzaGlwJyBpbiBwbGFjZSkgcmV0dXJuIG5ldyBFcnJvcignU2hpcCBpbiBwbGFjZScpO1xuICAgIGVsc2UgZ2FtZWJvYXJkW2NlbGxbMF1dW2NlbGxbMV1dLnNoaXAgPSBzaGlwO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soZ2FtZWJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV07XG4gIGNvbnN0IHBsYWNlID0gZ2FtZWJvYXJkW3Jvd11bY29sXTtcbiAgaWYgKHBsYWNlLmF0dGFja2VkID09PSB0cnVlKSByZXR1cm4gbmV3IEVycm9yKCdQbGFjZSBhbHJlYWR5IGF0dGFja2VkLicpO1xuICBwbGFjZS5hdHRhY2tlZCA9IHRydWU7XG4gIGlmICgnc2hpcCcgaW4gcGxhY2UpIHtcbiAgICBwbGFjZS5zaGlwLmhpdCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldENvb3JkaW5hdGVzIGZyb20gJy4vc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy5qcyc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvdmFsaWRhdGVDb29yZGluYXRlcy5qcyc7XG5pbXBvcnQgcGxhY2VTaGlwIGZyb20gJy4vcGxhY2VTaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzKGdhbWVib2FyZCkge1xuICBjb25zdCBzaGlwc0xlbmdodHMgPSBbNiwgNSwgNCwgMywgMl07XG4gIGNvbnN0IGFsbFNoaXBzQ29vcmRpbmF0ZXMgPSBbXTtcbiAgc2hpcHNMZW5naHRzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcbiAgICBsZXQgcGxhY2VkU2hpcCA9IGZhbHNlO1xuICAgIHdoaWxlIChwbGFjZWRTaGlwID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhzaGlwTGVuZ3RoKTtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZShjb29yZGluYXRlcywgZ2FtZWJvYXJkKTtcbiAgICAgIGlmICh2YWxpZGF0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZXNbMF1bMF0sIGNvb3JkaW5hdGVzWzBdWzFdXTtcbiAgICAgICAgY29uc3QgaWR4ID0gY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgZW5kQ29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZXNbaWR4XVswXSwgY29vcmRpbmF0ZXNbaWR4XVsxXV07XG4gICAgICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtzdGFydENvb3JkaW5hdGVzLCBlbmRDb29yZGluYXRlc107XG4gICAgICAgIHBsYWNlU2hpcChnYW1lYm9hcmQsIHNoaXBDb29yZGluYXRlcyk7XG4gICAgICAgIGFsbFNoaXBzQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIHBsYWNlZFNoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhbGxTaGlwc0Nvb3JkaW5hdGVzO1xufVxuIiwiaW1wb3J0IGdldFJhbmRvbUNlbGxOdW0gZnJvbSAnLi9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tQ2VsbE51bS5qcyc7XG5pbXBvcnQgZ2V0UmFuZG9tRGlyZWN0aW9uIGZyb20gJy4vZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzL2dldFJhbmRvbURpcmVjdGlvbi5qcyc7XG5pbXBvcnQgZ2V0Q29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0Q29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMoc2hpcExlbmd0aCkge1xuICBjb25zdCBzdGFydENlbGxOdW0gPSBnZXRSYW5kb21DZWxsTnVtKCk7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGdldFJhbmRvbURpcmVjdGlvbigpO1xuICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKGRpcmVjdGlvbiwgc3RhcnRDZWxsTnVtLCBzaGlwTGVuZ3RoKTtcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoZGlyZWN0aW9uLCBzdGFydENlbGxOdW0sIHNoaXBMZW5ndGgpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3Qgcm93ID0gKCgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRDZWxsTnVtIDwgMTAgPyAwIDogTWF0aC5mbG9vcihzdGFydENlbGxOdW0gLyAxMCk7XG4gIH0pKCk7XG4gIGNvbnN0IGNvbCA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXJ0Q2VsbE51bSA8IDEwID8gc3RhcnRDZWxsTnVtIDogc3RhcnRDZWxsTnVtICUgMTA7XG4gIH0pKCk7XG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBpZiAoOSAtIChzaGlwTGVuZ3RoIC0gMSkgPj0gcm93KSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ksIGNvbF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm93IC0gKHNoaXBMZW5ndGggLSAxKSA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpID4gcm93IC0gc2hpcExlbmd0aDsgaS0tKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW2ksIGNvbF0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGlmICg5IC0gKHNoaXBMZW5ndGggLSAxKSA+PSBjb2wpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2wgLSAoc2hpcExlbmd0aCAtIDEpID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPiBjb2wgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCBpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb29yZGluYXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gPyBhWzFdIC0gYlsxXSA6IGFbMF0gLSBiWzBdO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbUNlbGxOdW0oKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmFuZG9tRGlyZWN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA9PT0gMCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzW2ldWzBdO1xuICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGVzW2ldWzFdO1xuICAgIGNvbnN0IHBsYWNlID0gZ2FtZWJvYXJkW3Jvd11bY29sXTtcbiAgICBpZiAoJ3NoaXAnIGluIHBsYWNlKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGN1cnJlbnQ6IG51bGwsXG59O1xuIiwiaW1wb3J0IHNldFBsYXllcnMgZnJvbSAnLi9mYWN0b3JpZXMvc2V0UGxheWVycy5qcyc7XG5pbXBvcnQgcGxhY2VTaGlwIGZyb20gJy4vb3BlcmF0aW9ucy9wbGFjZVNoaXAuanMnO1xuaW1wb3J0IHJlY2VpdmVBdHRhY2sgZnJvbSAnLi9vcGVyYXRpb25zL3JlY2VpdmVBdHRhY2suanMnO1xuaW1wb3J0IGFsbFNoaXBzU3VuayBmcm9tICcuL29wZXJhdGlvbnMvYWxsU2hpcHNTdW5rLmpzJztcbmltcG9ydCBzZXRHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3JpZXMvc2V0R2FtZWJvYXJkLmpzJztcbmltcG9ydCBzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMgZnJvbSAnLi9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEdhbWUoKSB7XG4gIGNvbnN0IGdhbWUgPSBzZXRQbGF5ZXJzKCk7XG4gIGNvbnN0IGdldEdhbWVib2FyZCA9IChwbGF5ZXJJZCkgPT4ge1xuICAgIHJldHVybiBnYW1lW2BwbGF5ZXIke3BsYXllcklkfWBdLmdhbWVib2FyZDtcbiAgfTtcbiAgY29uc3Qgc2V0UGxheWVyTmFtZSA9IChpZCwgbmFtZSkgPT4ge1xuICAgIGdhbWVbYHBsYXllciR7aWR9YF0ubmFtZSA9IG5hbWU7XG4gIH07XG4gIGNvbnN0IHNldFBsYXllclNoaXBzID0gKHBsYXllcklkLCBzaGlwcykgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGdldEdhbWVib2FyZChwbGF5ZXJJZCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgcGxhY2VTaGlwKGdhbWVib2FyZCwgc2hpcCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlc3RvcmVHYW1lYm9hcmQgPSAocGxheWVySWQpID0+IHtcbiAgICByZXR1cm4gKGdhbWVbYHBsYXllciR7cGxheWVySWR9YF0uZ2FtZWJvYXJkID0gc2V0R2FtZWJvYXJkKCkpO1xuICB9O1xuICBjb25zdCBzZXRQbGF5ZXJTaGlwc1JhbmRvbWx5ID0gKHBsYXllcklkKSA9PiB7XG4gICAgcmVzdG9yZUdhbWVib2FyZChwbGF5ZXJJZCk7XG4gICAgbGV0IGdhbWVib2FyZCA9IGdldEdhbWVib2FyZChwbGF5ZXJJZCk7XG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSBzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMoZ2FtZWJvYXJkKTtcbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2FtZSxcbiAgICBnZXRHYW1lYm9hcmQsXG4gICAgc2V0UGxheWVyTmFtZSxcbiAgICBzZXRQbGF5ZXJTaGlwcyxcbiAgICBzZXRQbGF5ZXJTaGlwc1JhbmRvbWx5LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICB9O1xufVxuIiwiaW1wb3J0IGlkZW50aWZ5RGlyZWN0aW9uIGZyb20gJy4vbWFjaGluZS9pZGVudGlmeURpcmVjdGlvbi5qcyc7XG5pbXBvcnQgZ2V0QXR0YWNrQ29vcmRpbmF0ZXMgZnJvbSAnLi9tYWNoaW5lL2dldEF0dGFja0Nvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBhdHRhY2tSYW5kb21seSBmcm9tICcuL21hY2hpbmUvYXR0YWNrUmFuZG9tbHkuanMnO1xuaW1wb3J0IHJlY2VpdmVBdHRhY2sgZnJvbSAnLi9vcGVyYXRpb25zL3JlY2VpdmVBdHRhY2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWNoaW5lKGdhbWVib2FyZCkge1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gIGNvbnN0IGFjdGl2ZVRhcmdldCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJHYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgcGxhY2UgPSBwbGF5ZXJHYW1lYm9hcmRbaV1bal07XG4gICAgICAgIGlmIChwbGFjZS5hdHRhY2tlZCkge1xuICAgICAgICAgIGlmICgnc2hpcCcgaW4gcGxhY2UgJiYgIXBsYWNlLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGlkZW50aWZ5RGlyZWN0aW9uKHBsYXllckdhbWVib2FyZCwgaSwgaik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyR2FtZWJvYXJkLCBpLCBqLCBkaXJlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG4gIGNvbnN0IGF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBhY3RpdmVUYXJnZXQoKTtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGF0dGFja1JhbmRvbWx5KHBsYXllckdhbWVib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY2VpdmVBdHRhY2socGxheWVyR2FtZWJvYXJkLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGF0dGFjayB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQoXG4gIHBhcmVudCxcbiAgdHlwZSxcbiAgYXJyYXlPZkNsYXNzZXMsXG4gIHRleHRDb250ZW50LFxuICBpZCxcbiAgYXJyYXlPZkF0dHJpYnV0ZXNcbikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGFycmF5T2ZDbGFzc2VzICE9PSB1bmRlZmluZWQgJiYgYXJyYXlPZkNsYXNzZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgYXJyYXlPZkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaWQgIT09IHVuZGVmaW5lZCkgZWxlbWVudC5pZCA9IGlkO1xuICBpZiAoYXJyYXlPZkF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCAmJiBhcnJheU9mQXR0cmlidXRlcy5sZW5ndGggIT09IDApIHtcbiAgICBhcnJheU9mQXR0cmlidXRlcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG9iai5hdHRyaWJ1dGUsIG9iai52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzZXRGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3NldEZvcm0uanMnO1xuaW1wb3J0IHNldEdyYXBoaWNhbFNoaXBzIGZyb20gJy4vY29tcG9uZW50cy9ncmFwaGljYWxTaGlwcy9zZXRHcmFwaGljYWxTaGlwcy5qcyc7XG5cbmNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUJ0bicpO1xuXG4vLyBTaGlwcyBmb3IgdmlzdWFsIHB1cnBvc2VzXG5zZXRHcmFwaGljYWxTaGlwcygpO1xuXG4vLyBzZXRUaW1lb3V0IGlzIHVzZWQgdG8gZGlzcGxheSBET00gYW5pbWF0aW9uc1xucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcGxheUJ0bi5yZW1vdmUoKTtcbiAgfSwgNTAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0Rm9ybSgpOyAvLyBUaGUgZ2FtZSBzdGFydHMgcmVxdWVzdGluZyB0aGUgcGxheWVyJ3MgbmFtZVxuICB9LCA1MDApO1xufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlSHRtbEVsZW1lbnQiLCJzZXR1cCIsInN0eWxlIiwic2V0Rm9ybSIsImdlbmVyYWxDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsImlucHV0IiwicmVxdWlyZWQiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImdldENlbGxJZCIsInN0ciIsInJvdyIsImNvbCIsInIiLCJnZXRDb29yZGluYXRlc0Zyb21JZCIsImNlbGxJZCIsImNlbGxOdW0iLCJzcGxpdCIsInJvd051bSIsImxlbmd0aCIsImNvbE51bSIsInBhcnNlSW50IiwiZGlzcGxheUFuZEhpZGVTZWN0aW9ucyIsIkF0dGFjayIsInBsYXllckF0dGFjayIsInBsYXkiLCJlbmQiLCJtYWNoaW5lQXR0YWNrIiwiYXR0YWNrIiwicmVtb3ZlIiwic2hpcEluQ29vcmRpbmF0ZXMiLCJjZWxsIiwiZ2FtZWJvYXJkIiwiY3VycmVudCIsImdldEdhbWVib2FyZCIsInN0YXR1cyIsImFsbFNoaXBzU3VuayIsImxlZ2VuZCIsInNldE1hY2hpbmUiLCJtYWNoaW5lIiwiYXR0YWNrQ29vcmRpbmF0ZXMiLCJiYXNpY09yaWVudGF0aW9uIiwidGV4dENvbnRlbnQiLCJhbmltYXRpb25UZXh0IiwiY29sb3IiLCJwbGF5ZXJTZWN0aW9uIiwiZGlzcGxheSIsIkFJU2VjdGlvbiIsImdhbWUiLCJwbGF5ZXIxIiwiYWN0aXZlIiwicGxheWVyTmFtZSIsIm5hbWUiLCJyZWNlaXZlQXR0YWNrIiwic2V0TWFjaGluZUdhbWVib2FyZCIsImdiQ2xhc3NlcyIsIm1hY2hpbmVTZWN0aW9uIiwibWFjaGluZUdhbWVib2FyZCIsImkiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYXR0YWNrRm4iLCJjb29yZGluYXRlcyIsImlkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZVBsYXllciIsInNldFBsYXllckdhbWVib2FyZCIsImdiIiwicGxheWVyR2FtZWJvYXJkIiwicHN0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluc2VydEJlZm9yZSIsImRyYWdFbmQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJkcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdMZWF2ZSIsImRyYWdPdmVyIiwiZHJhZ1N0YXJ0Iiwib2Zmc2V0WCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwib2Zmc2V0WSIsImNsaWVudFkiLCJ0b3AiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldERPTUNvb3JkaW5hdGVzIiwic2V0dXBTaGlwU3R5bGUiLCJnZXRFbGVtZW50c09uU2hpcEFyZWEiLCJsaW5rU2hpcFdpdGhDZWxsIiwiZ2V0R2FtZUNvb3JkaW5hdGVzIiwic2V0RmluYWxCdXR0b25zIiwiY29uZmlybWF0aW9uIiwidHJ5QWdhaW5GbiIsImRyb3AiLCJjb250YWluZXIiLCJuZXdYIiwibmV3WSIsImRyYWdnYWJsZUlkIiwiZ2V0RGF0YSIsImRyYWdnYWJsZSIsInNoaXBMZW5ndGgiLCJjaGFyQXQiLCJlbGVtZW50c09uU2hpcEFyZWEiLCJlbGVtZW50Iiwic2hpcHMiLCJmbiIsIm9mZnNldHMiLCJwYXJzZSIsImNvbnRhaW5lclJlY3QiLCJpZGVudGlmeUVsZW1lbnRzSW5BcmVhIiwibmV3Q29udGFpbmVyIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImFwcGVuZENoaWxkIiwicmVjdCIsInRvcENvb3JkaW5hdGUiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYm90dG9tQ29vcmRpbmF0ZSIsImJvdHRvbSIsImxlZnRDb29yZGluYXRlIiwic2Nyb2xsWCIsInJpZ2h0Q29vcmRpbmF0ZSIsInJpZ2h0Iiwic2hpcHNDb29yZGluYXRlcyIsInNoaXBJZCIsImdldENlbGxOdW0iLCJnZXRDb29yZGluYXRlcyIsIkVycm9yIiwic3RhcnRDZWxsIiwiZW5kQ2VsbCIsInN0YXJ0Q29vcmRpbmF0ZXMiLCJlbmRDb29yZGluYXRlcyIsInB1c2giLCJlbGVtZW50c1RvU2VhcmNoIiwiYWxsRWxlbWVudHMiLCJlbGVtZW50cyIsImVsZW1lbnRUb3AiLCJlbGVtZW50Qm90dG9tIiwiZWxlbWVudExlZnQiLCJlbGVtZW50UmlnaHQiLCJ0cmFuc2Zvcm0iLCJjaGVja21hcmsiLCJzdGFydCIsInNldENvbmZpcm1hdGlvbkJ0biIsImNvbmZpcm1hdGlvbkZuIiwiY29uZmlybWF0aW9uQnRuIiwic2V0VHJ5QWdhaW5CdG4iLCJjcmVhdGVQU1QiLCJuZXdMZWdlbmQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhZGRFbGVtZW50cyIsInNldFNoaXBzT25QU1QiLCJzZXREcmFnQW5kRHJvcCIsImNoYW5nZURpcmVjdGlvbiIsInNldE1hbnVhbGx5IiwiZGlyZWN0aW9uQnRuIiwiYXJyb3ciLCJzaGlwc0NvbnRhaW5lciIsImRpcmVjdGlvbiIsInNoaXAiLCJpY29uIiwidHJhbnNpdGlvbiIsInBsYWNlU2hpcCIsInVuZGVmaW5lZCIsImVsIiwicm93cyIsImNsYXNzZXMiLCJnZXRJZCIsInNldFJhbmRvbWx5Iiwic2V0UGxheWVyU2hpcHNSYW5kb21seSIsInNoaXBDb29yZGluYXRlcyIsImZpcnN0Q2VsbCIsInNoaXBDbGFzc2VzIiwicmVwZWF0IiwidHJ5QWdhaW5CdG4iLCJuZXdQbGF5ZXJTZWN0aW9uIiwic2V0UGxhY2VTaGlwc1Rvb2wiLCJzZXRHYW1lQ29udGFpbmVyIiwiaGVhZGVyIiwiZm9vdGVyIiwiaXNNb3ZpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic2V0UGFuZWwiLCJwYW5lbCIsInNodWZmbGUiLCJoYW5kIiwicmFuZG9tbHlCdG4iLCJtYW51YWxseUJ0biIsInJlc3RhcnQiLCJsZWdlbmRXaW5uZXIiLCJwbGF5QWdhaW5CdG4iLCJzZXRHYW1lIiwicGxheWVyIiwic2V0UGxheWVyTmFtZSIsIndhdmVzIiwic3RyMSIsInNoaXBDb250YWluZXIiLCJzdHIyIiwiYmFja2dyb3VuZEltYWdlIiwiaiIsInVybCIsInNldEdhbWVib2FyZCIsImF0dGFja2VkIiwic2V0UGxheWVycyIsIndpbnMiLCJwbGF5ZXIyIiwic2V0U2hpcCIsImhpdHMiLCJpc1N1bmsiLCJoaXQiLCJnZXRBdHRhY2tDb29yZGluYXRlcyIsImF0dGFja0hvcml6b250YWwiLCJpZHgiLCJhdHRhY2tSYW5kb21seSIsInZhbGlkQ29vcmRpbmF0ZXMiLCJyYW5kb21DZWxsTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXR0YWNrVmVydGljYWwiLCJhdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImlkZW50aWZ5RGlyZWN0aW9uIiwicGxhY2UiLCJheGlzIiwieCIsInZhbGlkYXRlIiwic2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzIiwic2hpcHNMZW5naHRzIiwiYWxsU2hpcHNDb29yZGluYXRlcyIsInBsYWNlZFNoaXAiLCJ2YWxpZGF0aW9uIiwiZ2V0UmFuZG9tQ2VsbE51bSIsImdldFJhbmRvbURpcmVjdGlvbiIsImdldFJhbmRvbVNoaXBDb29yZGluYXRlcyIsInN0YXJ0Q2VsbE51bSIsInNvcnQiLCJhIiwiYiIsInJvdW5kIiwidmFsaWRhdGVDb29yZGluYXRlcyIsInBsYXllcklkIiwic2V0UGxheWVyU2hpcHMiLCJyZXN0b3JlR2FtZWJvYXJkIiwicmFuZG9tQ29vcmRpbmF0ZXMiLCJhY3RpdmVUYXJnZXQiLCJwYXJlbnQiLCJ0eXBlIiwiYXJyYXlPZkNsYXNzZXMiLCJhcnJheU9mQXR0cmlidXRlcyIsImNsYXNzTmFtZSIsIm9iaiIsInNldEdyYXBoaWNhbFNoaXBzIiwicGxheUJ0biJdLCJzb3VyY2VSb290IjoiIn0=