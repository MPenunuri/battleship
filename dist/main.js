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
      const activePlayer = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.game.player1.active;
      if (activePlayer) {
        const coordinates = (0,_getCoordinatesFromId_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cell.id);
        const attack = (0,_game_operations_receiveAttack_js__WEBPACK_IMPORTED_MODULE_4__["default"])(gameboard, coordinates);
        if (attack === true) cell.classList.add('attacked');else cell.classList.add('missed');
        cell.removeEventListener('click', attackFn);
        const status = _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.allShipsSunk(gameboard);
        const legend = "You're a winner!";
        status === true ? (0,_end_js__WEBPACK_IMPORTED_MODULE_6__["default"])(legend) : (0,_machineAttack_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      }
      _game_play_js__WEBPACK_IMPORTED_MODULE_3__["default"].current.game.player1.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sNEhBQTRILFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLDBDQUEwQyxpQkFBaUIsR0FBRyxxQkFBcUIsa0JBQWtCLDBDQUEwQyxrQkFBa0IsZ0JBQWdCLEdBQUcsWUFBWSxpQkFBaUIsY0FBYyxHQUFHLGNBQWMsMEJBQTBCLGtDQUFrQyx3QkFBd0IsaUJBQWlCLHVCQUF1QixlQUFlLEdBQUcsK0JBQStCLHNDQUFzQywwQkFBMEIsR0FBRyx3QkFBd0IsaUJBQWlCLGlCQUFpQixHQUFHLHdCQUF3QixpQkFBaUIsaUJBQWlCLHVCQUF1QixHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHVCQUF1QixHQUFHLHdCQUF3QixpQkFBaUIsaUJBQWlCLHdCQUF3QixHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHVCQUF1QixHQUFHLGFBQWEsNkJBQTZCLEdBQUcsbUJBQW1CLG1EQUFtRCxlQUFlLDBCQUEwQixHQUFHLHNCQUFzQixnQkFBZ0Isa0JBQWtCLEdBQUcsc0JBQXNCLGdCQUFnQixrQkFBa0IsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixrQkFBa0Isd0JBQXdCLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLCtCQUErQixXQUFXLGVBQWUsR0FBRyxpQkFBaUIseUJBQXlCLGNBQWMsR0FBRyxzQkFBc0IseUNBQXlDLHlCQUF5QixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLHdCQUF3QixtQ0FBbUMsaUJBQWlCLGlCQUFpQixvQkFBb0IsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IscUNBQXFDLHNDQUFzQywwQkFBMEIsR0FBRywwQkFBMEIsd0NBQXdDLHVDQUF1QyxHQUFHLHlCQUF5QixvQkFBb0IscUNBQXFDLGVBQWUsb0NBQW9DLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQix5QkFBeUIsd0JBQXdCLDRCQUE0QixHQUFHLHVCQUF1QjtBQUNoMkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDZHQUE2RyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksNkNBQTZDLG9CQUFvQix3QkFBd0IsNEJBQTRCLDJCQUEyQixjQUFjLGVBQWUsK0JBQStCLEdBQUcseUNBQXlDLGVBQWUsK0JBQStCLEdBQUcsa0JBQWtCLGNBQWMsa0JBQWtCLG9CQUFvQix1QkFBdUIsd0JBQXdCLGtCQUFrQiw0QkFBNEIsNEJBQTRCLHVDQUF1QyxHQUFHLGdEQUFnRCxlQUFlLHdDQUF3QyxHQUFHLG9FQUFvRSxlQUFlLEdBQUcsNkJBQTZCLG9CQUFvQixxQkFBcUIsaUJBQWlCLCtCQUErQixHQUFHLG1CQUFtQjtBQUMzeUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwR0FBMEcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxV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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM4QjtBQUM4QjtBQUVqRixNQUFNOEosT0FBTyxHQUFHbFIsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDOztBQUVsRDtBQUNBZ1IsMkZBQWlCLENBQUMsQ0FBQzs7QUFFbkI7QUFDQUMsT0FBTyxDQUFDelEsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDdENDLFVBQVUsQ0FBQyxNQUFNO0lBQ2Z3USxPQUFPLENBQUNqUCxNQUFNLENBQUMsQ0FBQztFQUNsQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1B2QixVQUFVLENBQUMsTUFBTTtJQUNmWix1RUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNULENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Zvcm0vc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGhpY2FsU2hpcHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9zdHlsZS5jc3M/NWIyOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9zdHlsZS5jc3M/N2FkMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkvc3R5bGUuY3NzPzhhNzYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3N0eWxlLmNzcz83ZWUyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9zdHlsZS5jc3M/MjFmMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGhpY2FsU2hpcHMvc3R5bGUuY3NzPzEwM2IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9mb3JtL3NldEZvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvZ2V0Q2VsbElkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL2dldENvb3JkaW5hdGVzRnJvbUlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL21hY2hpbmVBdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvbWFjaGluZS9hdHRhY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL2dhbWVib2FyZHMvbWFjaGluZS9kaXNwbGF5QW5kSGlkZVNlY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3BsYXllckF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvZ2FtZWJvYXJkcy9zZXRNYWNoaW5lR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3NldFBsYXllckdhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvY3JlYXRlUFNULmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcmFnRW5kLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcmFnRW50ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdMZWF2ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJhZ092ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2RyYWdTdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9nZXRET01Db29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9nZXRFbGVtZW50c09uU2hpcEFyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2Ryb3AvZ2V0R2FtZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9kcmFnQW5kRHJvcC9kcm9wL2lkZW50aWZ5RWxlbWVudHNJbkFyZWEuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL2RyYWdBbmREcm9wL2Ryb3AvbGlua1NoaXBXaXRoQ2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvZHJhZ0FuZERyb3AvZHJvcC9zZXR1cFNoaXBTdHlsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0Q29uZmlybWF0aW9uQnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRGaW5hbEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRNYW51YWxseS9hZGRFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkvY2hhbmdlRGlyZWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRNYW51YWxseS9jb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NldE1hbnVhbGx5L3NldERyYWdBbmREcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRNYW51YWxseS9zZXRTaGlwc09uUFNULmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkvY29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9nZXRJZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0VHJ5QWdhaW5CdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3BsYWNlU2hpcHNUb29sL3NoaXBzQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3NldEdhbWVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvR1VJL3NldFBhbmVsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9zZXRQbGFjZVNoaXBzVG9vbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9lbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVDb250YWluZXIvcmVzdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9zZXR1cC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9zdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGhpY2FsU2hpcHMvc2V0R3JhcGhpY2FsU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2ZhY3Rvcmllcy9zZXRHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2ZhY3Rvcmllcy9zZXRQbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9mYWN0b3JpZXMvc2V0U2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvbWFjaGluZS9hdHRhY2tIb3Jpem9udGFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9tYWNoaW5lL2F0dGFja1JhbmRvbWx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9tYWNoaW5lL2F0dGFja1ZlcnRpY2FsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9tYWNoaW5lL2F0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvZ2V0QXR0YWNrQ29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL21hY2hpbmUvaWRlbnRpZnlEaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvYWxsU2hpcHNTdW5rLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3BsYWNlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9yZWNlaXZlQXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvb3BlcmF0aW9ucy9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0Q29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRSYW5kb21DZWxsTnVtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tRGlyZWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9vcGVyYXRpb25zL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy92YWxpZGF0ZUNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9zZXRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9zZXRNYWNoaW5lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9ybSB7XG5cdG1hcmdpbi10b3A6IDV2aDtcblx0Z2FwOiAxLjVyZW07XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5mb3JtLnNob3cge1xuXHRvcGFjaXR5OiAxO1xufVxuXG5sYWJlbCwgaW5wdXQge1xuXHRmb250LXNpemU6IDN2aDtcbn1cblxubGFiZWwge1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggYmxhY2s7XG59XG5cbmlucHV0IHtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0cGFkZGluZzogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItY29sb3I6IGJsYWNrO1xuXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGJsYWNrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG5cdGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjazs7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzOyBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvcm0vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyw4QkFBOEI7SUFDM0IsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb3JtIHtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Z2FwOiAxLjVyZW07XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9ybS5zaG93IHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG5sYWJlbCwgaW5wdXQge1xcblxcdGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG5sYWJlbCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNDBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggYmxhY2s7XFxufVxcblxcbmlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiA0MHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1jb2xvcjogYmxhY2s7XFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcblxcdGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjazs7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNwbGF5ZXJHYW1lYm9hcmQsICNBSUdhbWVib2FyZCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcbn1cblxuLnBnYmMsIC5tZ2JjIHtcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMzBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGdiYzpob3ZlciwgLm1nYmM6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hdHRhY2tlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG59XG5cbi5taXNzZWQge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA0OCwgNDgpO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9nYW1lYm9hcmRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsdUJBQXVCO0NBQ3ZCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlDQUFpQztDQUNqQyxvQ0FBb0M7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BsYXllckdhbWVib2FyZCwgI0FJR2FtZWJvYXJkIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggYmxhY2s7XFxufVxcblxcbi5wZ2JjLCAubWdiYyB7XFxuXFx0d2lkdGg6IDMwcHg7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGdiYzpob3ZlciwgLm1nYmM6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmF0dGFja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxufVxcblxcbi5taXNzZWQge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNDgsIDQ4KTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnJhbmRvbWx5UGxhY2VkU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY3Vyc29yOiBncmFiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5yYW5kb21seVBsYWNlZFNoaXAuc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiAucmFuZG9tbHlQbGFjZWRTaGlwLnZlcnRpY2FsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41cHgsIC0yLjVweCk7XG4gICAgYm94LXNoYWRvdzogMi41cHggMHB4IDBweCAycHggYnJvd247XG59XG5cbi5yYW5kb21seVBsYWNlZFNoaXAuaG9yaXpvbnRhbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMi41cHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAyLjVweCAwcHggMnB4IGJyb3duO1xufSAqL1xuXG4jbDZzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDE2OHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogMTBweDtcbn1cblxuI2w2c2hpcC5ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbiNsNXNoaXAudmVydGljYWwge1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4jbDVzaGlwLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuI2w0c2hpcC52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAxMTJweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbiNsNHNoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxMTJweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4jbDNzaGlwLnZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgdG9wOiA1cHg7XG59XG5cbiNsM3NoaXAuaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiA4NHB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuI2wyc2hpcC52ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogNXB4O1xufVxuXG4jbDJzaGlwLmhvcml6b250YWwge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBsZWZ0OiA1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yYW5kb21seVBsYWNlZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yYW5kb21seVBsYWNlZFNoaXAuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIC5yYW5kb21seVBsYWNlZFNoaXAudmVydGljYWwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41cHgsIC0yLjVweCk7XFxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDBweCAwcHggMnB4IGJyb3duO1xcbn1cXG5cXG4ucmFuZG9tbHlQbGFjZWRTaGlwLmhvcml6b250YWwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yLjVweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAyLjVweCAwcHggMnB4IGJyb3duO1xcbn0gKi9cXG5cXG4jbDZzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiAxNjhweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHRvcDogMTBweDtcXG59XFxuXFxuI2w2c2hpcC5ob3Jpem9udGFsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTY4cHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbiNsNXNoaXAudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiAxMHB4O1xcbn1cXG5cXG4jbDVzaGlwLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuI2w0c2hpcC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogMTEycHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbiNsNHNoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDExMnB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4jbDNzaGlwLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiA4NHB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgdG9wOiA1cHg7XFxufVxcblxcbiNsM3NoaXAuaG9yaXpvbnRhbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgd2lkdGg6IDg0cHg7XFxuICAgIGxlZnQ6IDVweDtcXG59XFxuXFxuI2wyc2hpcC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIHRvcDogNXB4O1xcbn1cXG5cXG4jbDJzaGlwLmhvcml6b250YWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiA1NnB4O1xcbiAgICBsZWZ0OiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3BzdCA+ICNsZWdlbmQge1xuXHR3aWR0aDogMjgwcHg7XG59XG5cbiNzaGlwc0NvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG5cdGhlaWdodDogMTAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ucHN0Um93e1xuXHRoZWlnaHQ6IDI1cHg7XG5cdG1hcmdpbjogMDtcbn1cblxuLnBzdFNoaXAge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdGJveC1zaGFkb3c6IDZweCA2cHggNnB4IGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRjdXJzb3I6IGdyYWI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcbn1cblxuLnBzdFNoaXAuaG9yaXpvbnRhbDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jcFNoaXA2Lmhvcml6b250YWwge1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiAxNjhweDtcbn1cblxuI3BTaGlwNS5ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxNnB4O1xuXHR3aWR0aDogMTQwcHg7XG5cdG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuI3BTaGlwMi5ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxNnB4O1xuXHR3aWR0aDogNTZweDtcblx0bWFyZ2luLWxlZnQ6IDE2MHB4O1xufVxuXG4jcFNoaXA0Lmhvcml6b250YWwge1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiAxMTJweDtcblx0bWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuI3BTaGlwMy5ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxNnB4O1xuXHR3aWR0aDogODRweDtcblx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xufVxuXG4ucm90YXRlIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ucm90YXRlOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpIHJvdGF0ZSgwZGVnKTtcblx0ei1pbmRleDogMjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jcFNoaXA2LnZlcnRpY2FsIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTY4cHg7XG59XG5cbiNwU2hpcDUudmVydGljYWwge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiAxNDBweDtcblx0bWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuXG4jcFNoaXAyLnZlcnRpY2FsIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogNTZweDtcblx0bWFyZ2luLWxlZnQ6IDE2MHB4O1xufVxuXG4jcFNoaXA0LnZlcnRpY2FsIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTEycHg7XG5cdG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbiNwU2hpcDMudmVydGljYWwge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiA4NHB4O1xuXHRtYXJnaW4tbGVmdDogMTQwcHg7XG59XG5cbi5kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXlcbn1cblxuLmhpZGUge1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucGxhY2VkU2hpcCB7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRtYXJnaW46IDA7XG59XG5cbi51bmF2YWlsYWJsZUNlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzIsIDIzNik7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jYnRuQ29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxMHB4O1xufVxuXG4jcHN0ID4gYnV0dG9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMjgwcHg7XG5cdGhlaWdodDogNDVweDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbiNwc3QgPiBidXR0b246aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuI3BzdCA+IGJ1dHRvbjphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAxNjYsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cztcbn1cblxuI3BzdCA+IGJ1dHRvbjpmb2N1cyB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7XG5cdG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuaW1ne1xuXHR3aWR0aDogMzBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmaWx0ZXI6IGludmVydCgxMDAlKTtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lci9HVUkvcGxhY2VTaGlwc1Rvb2wvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2IsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLDRDQUE0QztDQUMvQyxVQUFVO0lBQ1AsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsbUNBQW1DO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtDQUNDLGVBQWU7SUFDWiw4QkFBOEI7Q0FDakMsVUFBVTtJQUNQLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwc3QgPiAjbGVnZW5kIHtcXG5cXHR3aWR0aDogMjgwcHg7XFxufVxcblxcbiNzaGlwc0NvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5wc3RSb3d7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnBzdFNoaXAge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRib3gtc2hhZG93OiA2cHggNnB4IDZweCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdGN1cnNvcjogZ3JhYjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuLnBzdFNoaXAuaG9yaXpvbnRhbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTRweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbiNwU2hpcDYuaG9yaXpvbnRhbCB7XFxuXFx0aGVpZ2h0OiAxNnB4O1xcblxcdHdpZHRoOiAxNjhweDtcXG59XFxuXFxuI3BTaGlwNS5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDE0MHB4O1xcblxcdG1hcmdpbi1yaWdodDogODBweDtcXG59XFxuXFxuI3BTaGlwMi5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDU2cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE2MHB4O1xcbn1cXG5cXG4jcFNoaXA0Lmhvcml6b250YWwge1xcblxcdGhlaWdodDogMTZweDtcXG5cXHR3aWR0aDogMTEycHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3BTaGlwMy5ob3Jpem9udGFsIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDg0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xcbn1cXG5cXG4ucm90YXRlIHtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yb3RhdGU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpIHJvdGF0ZSgwZGVnKTtcXG5cXHR6LWluZGV4OiAyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4jcFNoaXA2LnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDE2OHB4O1xcbn1cXG5cXG4jcFNoaXA1LnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDE0MHB4O1xcblxcdG1hcmdpbi1yaWdodDogODBweDtcXG59XFxuXFxuI3BTaGlwMi52ZXJ0aWNhbCB7XFxuXFx0d2lkdGg6IDE2cHg7XFxuXFx0aGVpZ2h0OiA1NnB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxNjBweDtcXG59XFxuXFxuI3BTaGlwNC52ZXJ0aWNhbCB7XFxuXFx0d2lkdGg6IDE2cHg7XFxuXFx0aGVpZ2h0OiAxMTJweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jcFNoaXAzLnZlcnRpY2FsIHtcXG5cXHR3aWR0aDogMTZweDtcXG5cXHRoZWlnaHQ6IDg0cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDE0MHB4O1xcbn1cXG5cXG4uZHJhZy1vdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleVxcbn1cXG5cXG4uaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnBsYWNlZFNoaXAge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnVuYXZhaWxhYmxlQ2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjMyLCAyMzYpO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYnRuQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAyODBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jcHN0ID4gYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cztcXG59XFxuXFxuI3BzdCA+IGJ1dHRvbjpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7XFxuXFx0b3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XFxufVxcblxcbmltZ3tcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNDBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZ2VuZXJhbENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcblx0b3BhY2l0eTogMTtcblx0dHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNnZW5lcmFsQ29udGFpbmVyLmhpZGUsIGhlYWRlci5oaWRlIHtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNwc3QsICNwYW5lbCB7XG5cdGdhcDogMTBweDtcblx0aGVpZ2h0OiAxNjBweDtcblx0bWFyZ2luLXRvcDogNHZoO1xuXHRtYXJnaW4tYm90dG9tOiAydmg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCBibGFjaztcbn1cblxuI3BzdCwgI3BsYXllclNlY3Rpb24sICNBSUdhbWVib2FyZCwgI3BhbmVsIHtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNwc3Quc2hvdywgI3BsYXllclNlY3Rpb24uc2hvdywgI0FJR2FtZWJvYXJkLnNob3csICNwYW5lbC5zaG93IHtcblx0b3BhY2l0eTogMTtcbn1cblxuI3BhbmVsID4gcDpudGgtY2hpbGQoMikge1xuXHRmb250LXNpemU6IDQ1cHg7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGNvbG9yOiBncmVlbjtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyL0dVSS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0NBQ2hCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDBCQUEwQjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ2VuZXJhbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTBweDtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jZ2VuZXJhbENvbnRhaW5lci5oaWRlLCBoZWFkZXIuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BzdCwgI3BhbmVsIHtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0aGVpZ2h0OiAxNjBweDtcXG5cXHRtYXJnaW4tdG9wOiA0dmg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4jcHN0LCAjcGxheWVyU2VjdGlvbiwgI0FJR2FtZWJvYXJkLCAjcGFuZWwge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwc3Quc2hvdywgI3BsYXllclNlY3Rpb24uc2hvdywgI0FJR2FtZWJvYXJkLnNob3csICNwYW5lbC5zaG93IHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4jcGFuZWwgPiBwOm50aC1jaGlsZCgyKSB7XFxuXFx0Zm9udC1zaXplOiA0NXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Y29sb3I6IGdyZWVuO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNncmFwaGljYWxTaGlwcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMjUxLCAyNTUpO1xufVxuXG4uc2hpcENvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMDtcbiAgICBhbmltYXRpb246IG1vdmVXYXZlcyA0cyBlYXNlIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uYmFja2dyb3VuZFJvdyB7XG4gICAgaGVpZ2h0OiA1LjU1dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1LjU1dmg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNjBweCAycHggcmdiKDAsIDIyNCwgMjUzKTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICB6LWluZGV4OiAtMjtcbn1cblxuLmJhY2tncm91bmRSb3cxe1xuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzMSA0cyBlYXNlIGluZmluaXRlO1xufVxuXG4uYmFja2dyb3VuZFJvdzIge1xuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzMiA0cyBlYXNlIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmJhY2tncm91bmRSb3czIHtcbiAgICBhbmltYXRpb246IG1vdmVXYXZlczMgNHMgZWFzZSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVXYXZlczEge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgICAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAxMHB4KTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgIH1cblxuICAgIDk1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZVdhdmVzMiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XG4gICAgfVxuXG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB9XG4gICAgXG4gICAgOTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlV2F2ZXMzIHtcbjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XG4gICAgfVxuXG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgICB9XG5cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgfVxuXG4gICAgOTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XG4gICAgfVxufVxuXG4uZ3JhcGhpY2FsU2hpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA0MHB4IDQwcHg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTJ2aDtcbiAgICBoZWlnaHQ6IDN2aDtcbn1cblxuLmxlZnRTYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLWxlZnQ6IDR2aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogOHZoIHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDB2dztcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICB0b3A6IC04LjV2aDtcbiAgICBsZWZ0OiAydmg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5yaWdodFNhaWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItbGVmdDogMHZoIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNnZoIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDEwdmggc29saWQgZ3JheTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiAtMTAuNXZoO1xuICAgIGxlZnQ6IDYuNHZoO1xufVxuXG4jZ3JhcGhpY2FsU2hpcDEge1xuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgMTJzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNncmFwaGljYWxTaGlwMiB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCA4cyBlYXNlIGluZmluaXRlO1xufVxuXG4jZ3JhcGhpY2FsU2hpcDMge1xuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgMTBzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNncmFwaGljYWxTaGlwNCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCA2cyBlYXNlIGluZmluaXRlO1xufVxuXG4jZ3JhcGhpY2FsU2hpcDUge1xuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgMTRzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNncmFwaGljYWxTaGlwNiB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCA5cyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVTaGlwIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHZ3LCAwKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgMTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwdncsIDApIHJvdGF0ZSgtMjVkZWcpO1xuICAgIH1cblxuICAgIDIwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHZ3LCAwKSByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwdncsIDApIHJvdGF0ZSgyNWRlZyk7XG4gICAgfVxuXG4gICAgNDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwdncsIDApIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIDApIHJvdGF0ZSgtMjVkZWcpO1xuICAgIH1cblxuICAgIDYwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwdncsIDApIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHZ3LCAwKSByb3RhdGUoMjVkZWcpO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwdncsIDApIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICA5MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHZ3LCAwKSByb3RhdGUoLTI1ZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTB2dywgMCkgcm90YXRlKDBkZWcpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dyYXBoaWNhbFNoaXBzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLHFDQUFxQztJQUNyQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDZDQUE2QztJQUM3Qyw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCO0lBQ0o7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0FBQ0E7UUFDUSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLFVBQVU7UUFDViw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMkNBQTJDO0lBQy9DOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDBDQUEwQztJQUM5Qzs7SUFFQTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMENBQTBDO0lBQzlDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLDBDQUEwQztRQUMxQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ3JhcGhpY2FsU2hpcHMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDI1MSwgMjU1KTtcXG59XFxuXFxuLnNoaXBDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBhbmltYXRpb246IG1vdmVXYXZlcyA0cyBlYXNlIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmJhY2tncm91bmRSb3cge1xcbiAgICBoZWlnaHQ6IDUuNTV2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNS41NXZoO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDYwcHggMnB4IHJnYigwLCAyMjQsIDI1Myk7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB6LWluZGV4OiAtMjtcXG59XFxuXFxuLmJhY2tncm91bmRSb3cxe1xcbiAgICBhbmltYXRpb246IG1vdmVXYXZlczEgNHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmJhY2tncm91bmRSb3cyIHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlV2F2ZXMyIDRzIGVhc2UgaW5maW5pdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5iYWNrZ3JvdW5kUm93MyB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVdhdmVzMyA0cyBlYXNlIGluZmluaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVXYXZlczEge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgICAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XFxuICAgIH1cXG5cXG4gICAgOTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVXYXZlczIge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XFxuICAgIH1cXG5cXG4gICAgMjUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxuICAgIH1cXG5cXG4gICAgNzUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgfVxcbiAgICBcXG4gICAgOTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVXYXZlczMge1xcbjAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xcbiAgICB9XFxuXFxuICAgIDI1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcXG4gICAgfVxcblxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICB9XFxuXFxuICAgIDk1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXG4gICAgfVxcbn1cXG5cXG4uZ3JhcGhpY2FsU2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA0MHB4IDQwcHg7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMTJ2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxufVxcblxcbi5sZWZ0U2FpbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDR2aCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA4dmggc29saWQgZ3JheTtcXG4gICAgd2lkdGg6IDB2dztcXG4gICAgaGVpZ2h0OiAwdmg7XFxuICAgIHRvcDogLTguNXZoO1xcbiAgICBsZWZ0OiAydmg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG4ucmlnaHRTYWlsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItbGVmdDogMHZoIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZ2aCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTB2aCBzb2xpZCBncmF5O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB0b3A6IC0xMC41dmg7XFxuICAgIGxlZnQ6IDYuNHZoO1xcbn1cXG5cXG4jZ3JhcGhpY2FsU2hpcDEge1xcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDEycyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4jZ3JhcGhpY2FsU2hpcDIge1xcbiAgICBhbmltYXRpb246IG1vdmVTaGlwIDhzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbiNncmFwaGljYWxTaGlwMyB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgMTBzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbiNncmFwaGljYWxTaGlwNCB7XFxuICAgIGFuaW1hdGlvbjogbW92ZVNoaXAgNnMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuI2dyYXBoaWNhbFNoaXA1IHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCAxNHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuI2dyYXBoaWNhbFNoaXA2IHtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlU2hpcCA5cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVTaGlwIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHZ3LCAwKSByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgMTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDB2dywgMCkgcm90YXRlKC0yNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgMjAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzB2dywgMCkgcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwdncsIDApIHJvdGF0ZSgyNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgNDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTB2dywgMCkgcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwKSByb3RhdGUoLTI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICA2MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwdncsIDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcblxcbiAgICA3MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwdncsIDApIHJvdGF0ZSgyNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgODAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHZ3LCAwKSByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgOTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHZ3LCAwKSByb3RhdGUoLTI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwdncsIDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiByZ2IoMTQsIDE1LCAxNCk7XG5cdGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMHZ3O1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuI3BsYXlCdG4ge1xuXHRtYXJnaW4tdG9wOiAyNXZoOztcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcblx0Ym94LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsYWNrO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRmb250LXNpemU6IDV2aDtcblx0ei1pbmRleDogMjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LC00cHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IFxufVxuXG5idXR0b246Zm9jdXMge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsNHB4KTtcbiBcdG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMsIHRyYW5zZm9ybSAuNXMsIG9wYWNpdHkgMXM7XG59XG5cbmhlYWRlciB7XG5cdG1hcmdpbi10b3A6IDJ2aDtcblx0Zm9udC1zaXplOiBtaW4oMTV2dywgODBweCk7XG5cdHotaW5kZXg6IDE7XG59XG5cbmZvb3RlciB7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHRib3R0b206IDJ2aDtcblx0Zm9udC1zaXplOiAydmg7XG59XG5cbmhlYWRlciwgZm9vdGVye1xuXHRib3JkZXItcmFkaXVzOiA2MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMTVweDtcblx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cdGJveC1zaGFkb3c6IDZweCA2cHggMjBweCBibGFjaztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIscUNBQXFDO0NBQ3JDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2IsY0FBYztDQUNkLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGVBQWU7SUFDWiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQ0FBbUM7SUFDaEMsOEJBQThCO0lBQzlCLDZCQUE2QjtFQUMvQixVQUFVO0lBQ1IsMkRBQTJEO0FBQy9EOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qiw4QkFBOEI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRjb2xvcjogcmdiKDE0LCAxNSwgMTQpO1xcblxcdGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jcGxheUJ0biB7XFxuXFx0bWFyZ2luLXRvcDogMjV2aDs7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsYWNrO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Zm9udC1zaXplOiA1dmg7XFxuXFx0ei1pbmRleDogMjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwtNHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41czsgXFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDE2NiwgMzIpO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCw0cHgpO1xcbiBcXHRvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cywgdHJhbnNmb3JtIC41cywgb3BhY2l0eSAxcztcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRtYXJnaW4tdG9wOiAydmg7XFxuXFx0Zm9udC1zaXplOiBtaW4oMTV2dywgODBweCk7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRwb3NpdGlvbjpmaXhlZDtcXG5cXHRib3R0b206IDJ2aDtcXG5cXHRmb250LXNpemU6IDJ2aDtcXG59XFxuXFxuaGVhZGVyLCBmb290ZXJ7XFxuXFx0Ym9yZGVyLXJhZGl1czogNjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxNXB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdGJveC1zaGFkb3c6IDZweCA2cHggMjBweCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRocm91Z2hvdXQgdGhlIGVudGlyZSBwcm9qZWN0LFxuLy8gY3JlYXRlSHRtbEVsZW1lbnQgaXMgdXNlZCB0byBlZmZpY2llbnRseSBhZGQgRE9NIGVsZW1lbnRzXG5pbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4uL2dhbWVDb250YWluZXIvc2V0dXAuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRGb3JtKCkge1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZ2VuZXJhbENvbnRhaW5lciwgJ2Zvcm0nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZm9ybSwgJ2xhYmVsJywgW10sICdFbnRlciB5b3VyIG5hbWU6JywgJ25hbWVMYWJlbCcsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2ZvcicsIHZhbHVlOiAncGxheWVyTmFtZScgfSxcbiAgXSk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGZvcm0sICdpbnB1dCcsIFtdLCAnJywgJ3BsYXllck5hbWUnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICd0eXBlJywgdmFsdWU6ICd0ZXh0JyB9LFxuICAgIHsgYXR0cmlidXRlOiAnbmFtZScsIHZhbHVlOiAncGxheWVyTmFtZScgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ3BsYWNlaG9sZGVyJywgdmFsdWU6ICdFbnRlciBuYW1lJyB9LFxuICAgIHsgYXR0cmlidXRlOiAnYXV0b2NvbXBsZXRlJywgdmFsdWU6ICdvbicgfSxcbiAgXSk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBjcmVhdGVIdG1sRWxlbWVudChmb3JtLCAnYnV0dG9uJywgW10sICdTdGFydCBnYW1lJywgJ3N0YXJ0QnRuJywgW1xuICAgIHsgYXR0cmlidXRlOiAndHlwZScsIHZhbHVlOiAnYnV0dG9uJyB9LFxuICBdKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXR1cCgpOyAvLyBPbmNlIHVzZXIgZW50ZXIgdGhlaXIgbmFtZSwgdGhlIGdhbWUgc3RhcnRzXG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfSwgNTAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENlbGxJZChzdHIsIHJvdywgY29sKSB7XG4gIGxldCByID0gKCgpID0+IHtcbiAgICByZXR1cm4gcm93ID09PSAwID8gJycgOiByb3c7XG4gIH0pKCk7XG4gIHJldHVybiBzdHIgKyByICsgY29sO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNGcm9tSWQoY2VsbElkKSB7XG4gIGNvbnN0IGNlbGxOdW0gPSBjZWxsSWQuc3BsaXQoJ21nYmMnKVsxXTtcbiAgY29uc3Qgcm93TnVtID0gKCgpID0+IHtcbiAgICByZXR1cm4gY2VsbE51bS5sZW5ndGggPT09IDEgPyAwIDogY2VsbE51bVswXTtcbiAgfSkoKTtcbiAgY29uc3QgY29sTnVtID0gKCgpID0+IHtcbiAgICByZXR1cm4gY2VsbE51bS5sZW5ndGggPT09IDEgPyBjZWxsTnVtIDogY2VsbE51bVsxXTtcbiAgfSkoKTtcbiAgcmV0dXJuIFtwYXJzZUludChyb3dOdW0pLCBwYXJzZUludChjb2xOdW0pXTtcbn1cbiIsImltcG9ydCBkaXNwbGF5QW5kSGlkZVNlY3Rpb25zIGZyb20gJy4vbWFjaGluZS9kaXNwbGF5QW5kSGlkZVNlY3Rpb25zLmpzJztcbmltcG9ydCBBdHRhY2sgZnJvbSAnLi9tYWNoaW5lL2F0dGFjay5qcyc7XG5pbXBvcnQgcGxheWVyQXR0YWNrIGZyb20gJy4vcGxheWVyQXR0YWNrLmpzJztcbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgZW5kIGZyb20gJy4uLy4uL2VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hY2hpbmVBdHRhY2soKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRpc3BsYXlBbmRIaWRlU2VjdGlvbnMoKTtcbiAgfSwgNTAwKTtcbiAgLy8gU2V0IG1hY2hpbmUgYW5kIGF0dGFja1xuICBjb25zdCBhdHRhY2sgPSBBdHRhY2soKTtcbiAgLy8gRGlzcGxheSBodG1sIGVsZW1lbnRzLCBzdHlsZXMgYW5kIGFkbmltYXRpb25zXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAgIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGF0dGFjay5zaGlwSW5Db29yZGluYXRlcykge1xuICAgICAgICBhdHRhY2suY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd1bmF2YWlsYWJsZUNlbGwnKTtcbiAgICAgICAgYXR0YWNrLmNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFjay5jZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IHBsYXkuY3VycmVudC5nZXRHYW1lYm9hcmQoMSk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXkuY3VycmVudC5hbGxTaGlwc1N1bmsoZ2FtZWJvYXJkKTtcbiAgICAgICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZ2VuZCA9ICdNYWNoaW5lIHdpbnMgOignO1xuICAgICAgICAgIHN0YXR1cyA9PT0gdHJ1ZSA/IGVuZChsZWdlbmQpIDogcGxheWVyQXR0YWNrKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIDIwMDApO1xufVxuIiwiaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCBzZXRNYWNoaW5lIGZyb20gJy4uLy4uLy4uLy4uLy4uL2dhbWUvc2V0TWFjaGluZS5qcyc7XG5pbXBvcnQgZ2V0Q2VsbElkIGZyb20gJy4uL2dldENlbGxJZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheS5jdXJyZW50LmdldEdhbWVib2FyZCgxKTtcbiAgY29uc3QgbWFjaGluZSA9IHNldE1hY2hpbmUoZ2FtZWJvYXJkKTtcbiAgY29uc3QgYXR0YWNrQ29vcmRpbmF0ZXMgPSBtYWNoaW5lLmF0dGFjaygpO1xuICBjb25zdCByb3cgPSBhdHRhY2tDb29yZGluYXRlc1swXTtcbiAgY29uc3QgY29sID0gYXR0YWNrQ29vcmRpbmF0ZXNbMV07XG4gIGNvbnN0IHNoaXBJbkNvb3JkaW5hdGVzID0gKCgpID0+IHtcbiAgICByZXR1cm4gJ3NoaXAnIGluIGdhbWVib2FyZFtyb3ddW2NvbF0gPyB0cnVlIDogZmFsc2U7XG4gIH0pKCk7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRDZWxsSWQoJ3BnYmMnLCByb3csIGNvbCkpO1xuICByZXR1cm4geyBzaGlwSW5Db29yZGluYXRlcywgY2VsbCB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFuZEhpZGVTZWN0aW9ucygpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIC8vIEhpZGUgZ2VuZXJhbCBjb250YWluZXJcbiAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIC8vIERpc3BsYXkgcGxheWVyIHNlY3Rpb24gYW5kIGhpZGUgQUkgc2VjdGlvblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBiYXNpY09yaWVudGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljT3JpZW50YXRpb24nKTtcbiAgICBiYXNpY09yaWVudGF0aW9uLnRleHRDb250ZW50ID0gJ05vdyBpcyBtYWNoaW5lIHR1cm4uJztcbiAgICBjb25zdCBhbmltYXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hdGlvblRleHQnKTtcbiAgICBhbmltYXRpb25UZXh0LnRleHRDb250ZW50ID0gJ1dhdGNoIG91dCEnO1xuICAgIGFuaW1hdGlvblRleHQuc3R5bGUuY29sb3IgPSAnYnJvd24nO1xuICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgIHBsYXllclNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb25zdCBBSVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlTZWN0aW9uJyk7XG4gICAgQUlTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sIDEwMDApO1xufVxuIiwiaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyQXR0YWNrKCkge1xuICBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLmFjdGl2ZSA9IHRydWU7XG4gIGNvbnN0IGJhc2ljT3JpZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzaWNPcmllbnRhdGlvbicpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheS5jdXJyZW50LmdhbWUucGxheWVyMS5uYW1lO1xuICBiYXNpY09yaWVudGF0aW9uLnRleHRDb250ZW50ID0gYEl0J3MgeW91ciB0dXJuICR7cGxheWVyTmFtZX06YDtcbiAgY29uc3QgYW5pbWF0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25UZXh0Jyk7XG4gIGFuaW1hdGlvblRleHQudGV4dENvbnRlbnQgPSAnQXR0YWNrISc7XG4gIGFuaW1hdGlvblRleHQuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgcGxheWVyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCBBSVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlTZWN0aW9uJyk7XG4gIEFJU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSwgMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGdldENvb3JkaW5hdGVzRnJvbUlkIGZyb20gJy4vZ2V0Q29vcmRpbmF0ZXNGcm9tSWQuanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCByZWNlaXZlQXR0YWNrIGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvb3BlcmF0aW9ucy9yZWNlaXZlQXR0YWNrLmpzJztcbmltcG9ydCBtYWNoaW5lQXR0YWNrIGZyb20gJy4vbWFjaGluZUF0dGFjay5qcyc7XG5pbXBvcnQgZW5kIGZyb20gJy4uLy4uL2VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE1hY2hpbmVHYW1lYm9hcmQoKSB7XG4gIC8qIFVzZXIgaW50ZXJhY3Rpb25zIHRha2UgcGxhY2Ugb24gYm9keSA9PiBkaXYjZ2VuZXJhbENvbnRhaW5lciAqL1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgLyogR2FtZWJvYXJkIGlzIGNvbnRhaW5lZCBpbiBhIHNlY3Rpb24gZWxlbWVudCBhbmQgaXMgZGlzcGxheWVkXG4gIGluIGEgZ3JpZCBvZiAxMCB4IDEwICovXG4gIGNvbnN0IGdiQ2xhc3NlcyA9IFsnZ2FtZWJvYXJkJywgJ3Nob3cnXTsgLy8gU2hvcnRjdXQgZm9yIGNsYXNzIG5hbWVcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZ2VuZXJhbENvbnRhaW5lciwgJ3NlY3Rpb24nLCBnYkNsYXNzZXMsICcnLCAnQUlTZWN0aW9uJyk7XG4gIGNvbnN0IG1hY2hpbmVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJU2VjdGlvbicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChtYWNoaW5lU2VjdGlvbiwgJ2RpdicsIGdiQ2xhc3NlcywgJycsICdBSUdhbWVib2FyZCcpO1xuICBjb25zdCBtYWNoaW5lR2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJR2FtZWJvYXJkJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTk7IGkrKykge1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50KG1hY2hpbmVHYW1lYm9hcmQsICdkaXYnLCBbJ21nYmMnXSwgJycsIGBtZ2JjJHtpfWApO1xuICB9XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1nYmMnKTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gcGxheS5jdXJyZW50LmdldEdhbWVib2FyZCgyKTtcbiAgLy8gQWRkIGxpc3RlbmVycyB0byBlYWNoIGNlbGxcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IGF0dGFja0ZuID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gcGxheS5jdXJyZW50LmdhbWUucGxheWVyMS5hY3RpdmU7XG4gICAgICBpZiAoYWN0aXZlUGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNGcm9tSWQoY2VsbC5pZCk7XG4gICAgICAgIGNvbnN0IGF0dGFjayA9IHJlY2VpdmVBdHRhY2soZ2FtZWJvYXJkLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChhdHRhY2sgPT09IHRydWUpIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrRm4pO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBwbGF5LmN1cnJlbnQuYWxsU2hpcHNTdW5rKGdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IFwiWW91J3JlIGEgd2lubmVyIVwiO1xuICAgICAgICBzdGF0dXMgPT09IHRydWUgPyBlbmQobGVnZW5kKSA6IG1hY2hpbmVBdHRhY2soKTtcbiAgICAgIH1cbiAgICAgIHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEuYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrRm4pO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBsYXllckdhbWVib2FyZCgpIHtcbiAgLyogVXNlciBpbnRlcmFjdGlvbnMgdGFrZSBwbGFjZSBvbiBib2R5ID0+IGRpdiNnZW5lcmFsQ29udGFpbmVyICovXG4gIGNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbENvbnRhaW5lcicpO1xuICAvKiBHYW1lYm9hcmQgaXMgY29udGFpbmVkIGluIGEgc2VjdGlvbiBlbGVtZW50IGFuZCBpcyBkaXNwbGF5ZWRcbiAgaW4gYSBncmlkIG9mIDEwIHggMTAgKi9cbiAgY29uc3QgZ2IgPSAnZ2FtZWJvYXJkJzsgLy8gU2hvcnRjdXQgZm9yIGNsYXNzIG5hbWVcbiAgY3JlYXRlSHRtbEVsZW1lbnQoZ2VuZXJhbENvbnRhaW5lciwgJ3NlY3Rpb24nLCBbXSwgJycsICdwbGF5ZXJTZWN0aW9uJyk7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChwbGF5ZXJTZWN0aW9uLCAnZGl2JywgW2diXSwgJycsICdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckdhbWVib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OTsgaSsrKSB7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQocGxheWVyR2FtZWJvYXJkLCAnZGl2JywgWydwZ2JjJ10sICcnLCBgcGdiYyR7aX1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gIC8vIENyZWF0ZSBwc3QgY29udGFpbmVyXG4gIC8vIHBzdCBzdGFuZHMgZm9yIHBsYWNlLXNoaXBzIHRvb2xcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BzdCcpO1xuICBnZW5lcmFsQ29udGFpbmVyLmluc2VydEJlZm9yZShwc3QsIHBsYXllclNlY3Rpb24pO1xuICByZXR1cm4gcHN0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ0VuZChlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgbGV0IG9mZnNldFggPSBlLmNsaWVudFggLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBsZXQgb2Zmc2V0WSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgSlNPTi5zdHJpbmdpZnkoeyBvZmZzZXRYLCBvZmZzZXRZIH0pXG4gICk7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5pZCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSwgMCk7XG59XG4iLCJpbXBvcnQgZ2V0RE9NQ29vcmRpbmF0ZXMgZnJvbSAnLi9kcm9wL2dldERPTUNvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBzZXR1cFNoaXBTdHlsZSBmcm9tICcuL2Ryb3Avc2V0dXBTaGlwU3R5bGUuanMnO1xuaW1wb3J0IGdldEVsZW1lbnRzT25TaGlwQXJlYSBmcm9tICcuL2Ryb3AvZ2V0RWxlbWVudHNPblNoaXBBcmVhLmpzJztcbmltcG9ydCBsaW5rU2hpcFdpdGhDZWxsIGZyb20gJy4vZHJvcC9saW5rU2hpcFdpdGhDZWxsLmpzJztcbmltcG9ydCBnZXRHYW1lQ29vcmRpbmF0ZXMgZnJvbSAnLi9kcm9wL2dldEdhbWVDb29yZGluYXRlcy5qcyc7XG5pbXBvcnQgc2V0RmluYWxCdXR0b25zIGZyb20gJy4uL3NldEZpbmFsQnV0dG9ucy5qcyc7XG5pbXBvcnQgY29uZmlybWF0aW9uIGZyb20gJy4uL3NldE1hbnVhbGx5L2NvbmZpcm1hdGlvbi5qcyc7XG5pbXBvcnQgdHJ5QWdhaW5GbiBmcm9tICcuLi9zZXRNYW51YWxseS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyb3AoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgLy8gR2V0IG5ldyBjb250YWluZXIgYW5kIGNvb3JkaW5hdGVzIHJlbGF0aXZlcyB0byB2aWV3cG9ydFxuICBsZXQgeyBjb250YWluZXIsIG5ld1gsIG5ld1kgfSA9IGdldERPTUNvb3JkaW5hdGVzKGUpO1xuICAvLyBHZXQgc2hpcCBlbGVtZW50IChkcmFnZ2FibGUgPSBzaGlwKVxuICBjb25zdCBkcmFnZ2FibGVJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJhZ2dhYmxlSWQpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoZHJhZ2dhYmxlSWQuY2hhckF0KGRyYWdnYWJsZUlkLmxlbmd0aCAtIDEpLCAxMCk7XG4gIC8vIEdldCBlbGVtZW50cyBvbiBzaGlwIGFyZWEgKGRyYWdnYWJsZSA9IHNoaXApXG4gIGNvbnN0IGVsZW1lbnRzT25TaGlwQXJlYSA9IGdldEVsZW1lbnRzT25TaGlwQXJlYShcbiAgICBkcmFnZ2FibGUsXG4gICAgY29udGFpbmVyLFxuICAgIG5ld1gsXG4gICAgbmV3WSxcbiAgICBzaGlwTGVuZ3RoXG4gICk7XG4gIC8vIFZlcmlmeSBpZiBkcmFnQW5kRHJvcCBpcyBhIHZhbGlkIG1vdmVtZW50XG4gIGlmIChlbGVtZW50c09uU2hpcEFyZWEubGVuZ3RoICE9PSBzaGlwTGVuZ3RoKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTZXR1cCBwbGFjZWQgc2hpcCBzdHlsZSBwcm9waWVydGllcyAoZHJhZ2dhYmxlID0gc2hpcClcbiAgICBzZXR1cFNoaXBTdHlsZShkcmFnZ2FibGUsIGNvbnRhaW5lciwgbmV3WCwgbmV3WSk7XG4gICAgLy8gSWRlbnRpZnkgZWxlbWVudHMgYW5kIGNoYW5nZSBzdHlsZXM6IExpbmsgdGhlIHNoaXAgd2l0aCB2YWxpZCBjZWxsc1xuICAgIGVsZW1lbnRzT25TaGlwQXJlYS5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgbGlua1NoaXBXaXRoQ2VsbChlbGVtZW50LCBkcmFnZ2FibGVJZClcbiAgICApO1xuICAgIC8vIEdldCBnYW1lIGNvb3JkaW5hdGVzIGZvciBpbnRlcm5hbCBhcHAgcHVycG9zZXNcbiAgICBnZXRHYW1lQ29vcmRpbmF0ZXMoZHJhZ2dhYmxlSWQpO1xuICAgIC8vIENoZWNrIGlmIFBTVCBjb250YWluZXIgaGFzIGF2YWlsYWJsZSBzaGlwc1xuICAgIC8vIElmIG5vdCwgcHJvY2VlZCBieSBhc2tpbmcgdGhlIHVzZXIgZm9yIHBsYWNlbWVudCBjb25maXJtYXRpb25cbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3RSb3cgPiBkaXYnKTtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBZGQgY29uZmlybWF0aW9uIGFuZCB0cnlhIGFnYWluIGJ1dHRvbnNcbiAgICAgIHNldEZpbmFsQnV0dG9ucyhjb25maXJtYXRpb24ubGVnZW5kKCksIGNvbmZpcm1hdGlvbi5mbiwgdHJ5QWdhaW5Gbik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRET01Db29yZGluYXRlcyhlKSB7XG4gIC8vIEdldCBkcmFnU3RhcnQgY29vcmRpbmF0ZXMgdG8gc2V0dXAgc2hpcCBsb2NhdGlvblxuICBsZXQgb2Zmc2V0cyA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYXBwbGljYXRpb24vanNvbicpKTtcbiAgLy8gQ2FsY3VsYXRlIGRyb3AgY29vcmRpbmF0ZXMgcmVsYXRpdmVzIHRvIGRyYWdTdGFydCBsb2NhdGlvblxuICBsZXQgbmV3WCA9IGUuY2xpZW50WCAtIG9mZnNldHMub2Zmc2V0WDtcbiAgbGV0IG5ld1kgPSBlLmNsaWVudFkgLSBvZmZzZXRzLm9mZnNldFk7XG4gIC8vIENhbGN1bGF0ZSBkcm9wIGNvb3JkaW5hdGVzIHJlbGF0aXZlcyB0byBlLnRhcmpldCAoZ2FtZWJvYXJkIGNlbGwpXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUudGFyZ2V0LmlkKTtcbiAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbmV3WCA9IG5ld1ggLSBjb250YWluZXJSZWN0LmxlZnQgLSA3O1xuICBuZXdZID0gbmV3WSAtIGNvbnRhaW5lclJlY3QudG9wIC0gNztcbiAgcmV0dXJuIHsgY29udGFpbmVyLCBuZXdYLCBuZXdZIH07XG59XG4iLCJpbXBvcnQgaWRlbnRpZnlFbGVtZW50c0luQXJlYSBmcm9tICcuL2lkZW50aWZ5RWxlbWVudHNJbkFyZWEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFbGVtZW50c09uU2hpcEFyZWEoXG4gIGRyYWdnYWJsZSxcbiAgbmV3Q29udGFpbmVyLFxuICBuZXdYLFxuICBuZXdZLFxuICBzaGlwTGVuZ3RoXG4pIHtcbiAgY29uc3QgY2xvbmUgPSBkcmFnZ2FibGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgaWYgKGNsb25lLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgIGNsb25lLnN0eWxlLmhlaWdodCA9IHNoaXBMZW5ndGggKiAyOCArICdweCc7XG4gICAgY2xvbmUuc3R5bGUud2lkdGggPSAxNiArICdweCc7XG4gIH0gZWxzZSBpZiAoY2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICBjbG9uZS5zdHlsZS5oZWlnaHQgPSAxNiArICdweCc7XG4gICAgY2xvbmUuc3R5bGUud2lkdGggPSBzaGlwTGVuZ3RoICogMjggKyAncHgnO1xuICB9XG4gIGNsb25lLnN0eWxlLmxlZnQgPSBuZXdYICsgJ3B4JztcbiAgY2xvbmUuc3R5bGUudG9wID0gbmV3WSArICdweCc7XG4gIGNsb25lLnN0eWxlLm1hcmdpbiA9IDA7XG4gIGNsb25lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvbmUnKTtcbiAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgY29uc3QgcmVjdCA9IGNsb25lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB0b3BDb29yZGluYXRlID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgY29uc3QgYm90dG9tQ29vcmRpbmF0ZSA9IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFk7XG4gIGNvbnN0IGxlZnRDb29yZGluYXRlID0gcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gIGNvbnN0IHJpZ2h0Q29vcmRpbmF0ZSA9IHJlY3QucmlnaHQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgY2xvbmUucmVtb3ZlKCk7XG4gIHJldHVybiBpZGVudGlmeUVsZW1lbnRzSW5BcmVhKFxuICAgICcucGdiYycsXG4gICAgdG9wQ29vcmRpbmF0ZSxcbiAgICBib3R0b21Db29yZGluYXRlLFxuICAgIGxlZnRDb29yZGluYXRlLFxuICAgIHJpZ2h0Q29vcmRpbmF0ZSxcbiAgICAwXG4gICk7XG59XG4iLCJpbXBvcnQgc2hpcHNDb29yZGluYXRlcyBmcm9tICcuLi8uLi9zaGlwc0Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R2FtZUNvb3JkaW5hdGVzKHNoaXBJZCkge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3NoaXBJZH1gKTtcbiAgY29uc3QgZ2V0Q2VsbE51bSA9IChjZWxsKSA9PiB7XG4gICAgcmV0dXJuIGNlbGwuaWQuc3BsaXQoJ3BnYmMnKVsxXTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoY2VsbE51bSkgPT4ge1xuICAgIGlmIChjZWxsTnVtLmxlbmd0aCA9PT0gMSkgcmV0dXJuIFswLCBwYXJzZUludChjZWxsTnVtKV07XG4gICAgZWxzZSBpZiAoY2VsbE51bS5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiBbcGFyc2VJbnQoY2VsbE51bVswXSksIHBhcnNlSW50KGNlbGxOdW1bMV0pXTtcbiAgICB9IGVsc2UgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBjb29yZGluYXRlcycpO1xuICB9O1xuICBjb25zdCBzdGFydENlbGwgPSBjZWxsc1swXTtcbiAgY29uc3QgZW5kQ2VsbCA9IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzdGFydENvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZ2V0Q2VsbE51bShzdGFydENlbGwpKTtcbiAgY29uc3QgZW5kQ29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhnZXRDZWxsTnVtKGVuZENlbGwpKTtcbiAgc2hpcHNDb29yZGluYXRlcy5wdXNoKFtzdGFydENvb3JkaW5hdGVzLCBlbmRDb29yZGluYXRlc10pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpZnlFbGVtZW50c0luQXJlYShcbiAgZWxlbWVudHNUb1NlYXJjaCxcbiAgdG9wLFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHJpZ2h0LFxuICBtYXJnaW5cbikge1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHNUb1NlYXJjaCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxFbGVtZW50c1tpXTtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50VG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBlbGVtZW50TGVmdCA9IHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgIGNvbnN0IGVsZW1lbnRSaWdodCA9IHJlY3QucmlnaHQgKyB3aW5kb3cuc2Nyb2xsWDtcblxuICAgIC8vIFZlcmlmaWVzICBpZiBlYWNoIGVsZW1lbnQgb3ZlcmxhcHMgdGhlIHNoaXAgYXJlYVxuICAgIGlmIChcbiAgICAgIGVsZW1lbnRUb3AgPD0gYm90dG9tICsgbWFyZ2luICYmXG4gICAgICBlbGVtZW50Qm90dG9tID49IHRvcCAtIG1hcmdpbiAmJlxuICAgICAgZWxlbWVudExlZnQgPD0gcmlnaHQgKyBtYXJnaW4gJiZcbiAgICAgIGVsZW1lbnRSaWdodCA+PSBsZWZ0IC0gbWFyZ2luXG4gICAgKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCJpbXBvcnQgZHJhZ092ZXIgZnJvbSAnLi4vZHJhZ092ZXIuanMnO1xuaW1wb3J0IGRyYWdMZWF2ZSBmcm9tICcuLi9kcmFnTGVhdmUuanMnO1xuaW1wb3J0IGRyYWdFbnRlciBmcm9tICcuLi9kcmFnRW50ZXIuanMnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi4vZHJvcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmtTaGlwV2l0aENlbGwoY2VsbCwgaWQpIHtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3VuYXZhaWxhYmxlQ2VsbCcpO1xuICBjZWxsLmNsYXNzTGlzdC5hZGQoaWQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBTaGlwU3R5bGUoZHJhZ2dhYmxlLCBuZXdDb250YWluZXIsIG5ld1gsIG5ld1kpIHtcbiAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIGRyYWdnYWJsZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBuZXdYICsgJ3B4JztcbiAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IG5ld1kgKyAncHgnO1xuICBkcmFnZ2FibGUuc3R5bGUubWFyZ2luID0gMDtcbiAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZFNoaXAnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgY2hlY2ttYXJrIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jaGVja21hcmstY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBzdGFydCBmcm9tICcuLi8uLi9zdGFydC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENvbmZpcm1hdGlvbkJ0bihjb25maXJtYXRpb25Gbikge1xuICBjb25zdCBwc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHN0Jyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ2J1dHRvbicsIFtdLCBcIk9rYXksIGxldCdzIHBsYXkhXCIsICdjb25maXJtYXRpb25CdG4nLCBbXG4gICAge1xuICAgICAgYXR0cmlidXRlOiAndHlwZScsXG4gICAgICB2YWx1ZTogJ2J1dHRvbicsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IGNvbmZpcm1hdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtYXRpb25CdG4nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoY29uZmlybWF0aW9uQnRuLCAnaW1nJywgW10sICcnLCAnYXBwcm92YWxJY29uJywgW1xuICAgIHsgYXR0cmlidXRlOiAnc3JjJywgdmFsdWU6IGNoZWNrbWFyayB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdhcHByb3ZhbCBpY29uJyB9LFxuICBdKTtcbiAgY29uZmlybWF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbmZpcm1hdGlvbkZuKCk7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gICAgZ2VuZXJhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwc3QucmVtb3ZlKCk7XG4gICAgICBzdGFydCgpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc2V0Q29uZmlybWF0aW9uQnRuIGZyb20gJy4vc2V0Q29uZmlybWF0aW9uQnRuLmpzJztcbmltcG9ydCBzZXRUcnlBZ2FpbkJ0biBmcm9tICcuL3NldFRyeUFnYWluQnRuLmpzJztcbmltcG9ydCBjcmVhdGVQU1QgZnJvbSAnLi9jcmVhdGVQU1QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRGaW5hbEJ1dHRvbnMobmV3TGVnZW5kLCBjb25maXJtYXRpb25GbiwgdHJ5QWdhaW5Gbikge1xuICBjb25zdCBwc3QgPSAoKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHN0JykubGVuZ3RoID09PSAwXG4gICAgICA/IGNyZWF0ZVBTVCgpXG4gICAgICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTtcbiAgfSkoKTtcbiAgLy8gSGlkZSB0ZW1wb3JhcnkgcHN0IGNvbnRhaW5lclxuICBpZiAocHN0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSBwc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdW5uZWNlc2FyeSBlbGVtZW50cyBmcm9tIHByZXZpb3VzIHN0ZXBcbiAgICB3aGlsZSAocHN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBzdC5yZW1vdmVDaGlsZChwc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIFNldCBuZXcgb3JpZW50YXRpb24gdG8gdXNlclxuICAgIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ3AnLCBbXSwgbmV3TGVnZW5kLCAnbGVnZW5kJyk7XG4gICAgLy8gU2V0IGNvbmZpcm1hdGlvbiBidXR0b25cbiAgICBzZXRDb25maXJtYXRpb25CdG4oY29uZmlybWF0aW9uRm4pO1xuICAgIC8vIFNldCB0cnkgYWdhaW4gYnV0dG9uXG4gICAgc2V0VHJ5QWdhaW5CdG4odHJ5QWdhaW5Gbik7XG4gIH0sIDUwMCk7XG4gIC8vIFNob3cgcHN0IGNvbnRhaW5lclxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwc3QuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9LCAxMDAwKTtcbn1cbiIsImltcG9ydCBhZGRFbGVtZW50cyBmcm9tICcuL3NldE1hbnVhbGx5L2FkZEVsZW1lbnRzLmpzJztcbmltcG9ydCBzZXRTaGlwc09uUFNUIGZyb20gJy4vc2V0TWFudWFsbHkvc2V0U2hpcHNPblBTVC5qcyc7XG5pbXBvcnQgc2V0RHJhZ0FuZERyb3AgZnJvbSAnLi9zZXRNYW51YWxseS9zZXREcmFnQW5kRHJvcC5qcyc7XG5pbXBvcnQgY2hhbmdlRGlyZWN0aW9uIGZyb20gJy4vc2V0TWFudWFsbHkvY2hhbmdlRGlyZWN0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TWFudWFsbHkoKSB7XG4gIC8vIHBzdCBzdGFuZHMgZm9yIHBsYWNlLXNoaXBzIHRvb2xcbiAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpO1xuICAvLyBIaWRlIHRlbXBvcmFyeSBwc3QgY29udGFpbmVyXG4gIHBzdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIERlbGV0ZSBodG1sIGVsZW1lbnRzIGZyb20gcHJldmlvdXMgc3RlcFxuICAgIHdoaWxlIChwc3QuZmlyc3RDaGlsZCkge1xuICAgICAgcHN0LnJlbW92ZUNoaWxkKHBzdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIHVzZXIgYWR2aWNlLCBjaGFuZ2Ugc2hpcHMgZGlyZWN0aW9uIGJ1dHRvbiBhbmQgZHJhZ2dhYmxlIHNoaXBzIGNvbnRhaW5lclxuICAgIGFkZEVsZW1lbnRzKHBzdCk7XG4gICAgLy8gU2V0IGRyYWdnYWJsZSBzaGlwcyBvbiB0b29sIGNvbnRhaW5lclxuICAgIHNldFNoaXBzT25QU1QoKTtcbiAgICAvLyBBZGQgZnVuY3Rpb25hbGl0eSB0byBidXR0b25cbiAgICBjb25zdCBkaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uQnRuJyk7XG4gICAgZGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgfSk7XG4gICAgLy8gU2V0IGRyYWcgYW5kIGRyb3AgZnVuY3Rpb25hbGl0aWVzIHRvIHNoaXBzIGFuZCBnYW1lYm9hcmRcbiAgICBzZXREcmFnQW5kRHJvcCgpO1xuICB9LCA1MDApO1xuICAvLyBTaG93IHBzdCBjb250YWluZXJcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHN0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfSwgNTAwKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgYXJyb3cgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2Fycm93LnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKHBzdCkge1xuICAvLyBDcmVhdGUgdXNlciBhZHZpY2VcbiAgY29uc3QgbGVnZW5kID0gJ1BsYWNlIHlvdXIgc2hpcHMhJztcbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAncCcsIFtdLCBsZWdlbmQsICdsZWdlbmQnKTtcbiAgLy8gQ3JlYXRlIGNoYW5nZSBzaGlwcyBkaXJlY3Rpb24gYnV0dG9uXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ2J1dHRvbicsIFtdLCAnQ2hhbmdlIGRpcmVjdGlvbicsICdkaXJlY3Rpb25CdG4nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICd0eXBlJywgdmFsdWU6ICdidXR0b24nIH0sXG4gIF0pO1xuICBjb25zdCBkaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uQnRuJyk7XG4gIGNyZWF0ZUh0bWxFbGVtZW50KGRpcmVjdGlvbkJ0biwgJ2ltZycsIFtdLCAnJywgJ2RpcmVjdGlvbkljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogYXJyb3cgfSxcbiAgICB7IGF0dHJpYnV0ZTogJ2FsdCcsIHZhbHVlOiAnZGlyZWN0aW9uSWNvbicgfSxcbiAgXSk7XG4gIC8vIGNyZWF0ZSBkcmFnZ2FibGUgc2hpcHMgY29udGFpbmVyXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHBzdCwgJ2RpdicsIFtdLCAnJywgJ3NoaXBzQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzQ29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoc2hpcHNDb250YWluZXIsICdkaXYnLCBbJ3BzdFJvdyddKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uKCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3RTaGlwJyk7XG4gIGxldCBkaXJlY3Rpb247XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZFNoaXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnLCAncm90YXRlJyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnLCAncm90YXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb25JY29uJyk7XG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC05MGRlZyknO1xuICAgIGljb24uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCc7XG4gIH1cbn1cbiIsImltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgc2hpcHNDb29yZGluYXRlcyBmcm9tICcuLi9zaGlwc0Nvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ2FtZS9vcGVyYXRpb25zL3BsYWNlU2hpcC5qcyc7XG5cbmNvbnN0IHBsYXllck5hbWUgPSAoKSA9PiB7XG4gIGlmICgnZ2FtZScgaW4gcGxheS5jdXJyZW50KSByZXR1cm4gcGxheS5jdXJyZW50LmdhbWUucGxheWVyMS5uYW1lO1xuICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgbGVnZW5kID0gKCkgPT4ge1xuICByZXR1cm4gYEdvb2Qgam9iICR7cGxheWVyTmFtZSgpfSEgTm93IHBsZWFzZSBjb25maXJtIHlvdXIgc2VsZWN0aW9uIG9yIHRyeSBhZ2Fpbi5gO1xufTtcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgaWYgKCdnYW1lJyBpbiBwbGF5LmN1cnJlbnQpIHJldHVybiBwbGF5LmN1cnJlbnQuZ2FtZS5wbGF5ZXIxLmdhbWVib2FyZDtcbiAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IGZuID0gKCkgPT4gc2hpcHNDb29yZGluYXRlcy5mb3JFYWNoKChlbCkgPT4gcGxhY2VTaGlwKGdhbWVib2FyZCgpLCBlbCkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxlZ2VuZCxcbiAgZm4sXG59O1xuIiwiaW1wb3J0IGRyYWdTdGFydCBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnU3RhcnQuanMnO1xuaW1wb3J0IGRyYWdPdmVyIGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdPdmVyLmpzJztcbmltcG9ydCBkcmFnTGVhdmUgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJhZ0xlYXZlLmpzJztcbmltcG9ydCBkcmFnRW5kIGZyb20gJy4uL2RyYWdBbmREcm9wL2RyYWdFbmQuanMnO1xuaW1wb3J0IGRyYWdFbnRlciBmcm9tICcuLi9kcmFnQW5kRHJvcC9kcmFnRW50ZXIuanMnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi4vZHJhZ0FuZERyb3AvZHJvcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldERyYWdBbmREcm9wKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3RTaGlwJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgfSk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGdiYycpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgICB9KTtcbiAgfSwgMTAwMCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaGlwc09uUFNUKCkge1xuICBjb25zdCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzdFJvdycpO1xuICAvLyBUaGUgc2hpcHMnIGxlbmd0aCB3YXMgc2V0IHVwIGluIHRoZSBDU1MgZmlsZVxuICBjb25zdCBjbGFzc2VzID0gWydwc3RTaGlwJywgJ3ZlcnRpY2FsJywgJ3JvdGF0ZSddO1xuICBjcmVhdGVIdG1sRWxlbWVudChyb3dzWzBdLCAnZGl2JywgY2xhc3NlcywgJycsICdwU2hpcDYnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdkcmFnZ2FibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gIF0pOyAvLyBTaGlwIHdpdGggNiBjZWxscyBsZW5ndGhcbiAgY3JlYXRlSHRtbEVsZW1lbnQocm93c1sxXSwgJ2RpdicsIGNsYXNzZXMsICcnLCAncFNoaXA1JywgW1xuICAgIHsgYXR0cmlidXRlOiAnZHJhZ2dhYmxlJywgdmFsdWU6ICd0cnVlJyB9LFxuICBdKTsgLy8gU2hpcCB3aXRoIDUgY2VsbHMgbGVuZ3RoXG4gIGNyZWF0ZUh0bWxFbGVtZW50KHJvd3NbMV0sICdkaXYnLCBjbGFzc2VzLCAnJywgJ3BTaGlwMicsIFtcbiAgICB7IGF0dHJpYnV0ZTogJ2RyYWdnYWJsZScsIHZhbHVlOiAndHJ1ZScgfSxcbiAgXSk7IC8vIFNoaXAgd2l0aCAyIGNlbGxzIGxlbmd0aFxuICBjcmVhdGVIdG1sRWxlbWVudChyb3dzWzJdLCAnZGl2JywgY2xhc3NlcywgJycsICdwU2hpcDQnLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdkcmFnZ2FibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gIF0pOyAvLyBTaGlwIHdpdGggNCBjZWxscyBsZW5ndGhcbiAgY3JlYXRlSHRtbEVsZW1lbnQocm93c1syXSwgJ2RpdicsIGNsYXNzZXMsICcnLCAncFNoaXAzJywgW1xuICAgIHsgYXR0cmlidXRlOiAnZHJhZ2dhYmxlJywgdmFsdWU6ICd0cnVlJyB9LFxuICBdKTsgLy8gU2hpcCB3aXRoIDMgY2VsbHMgbGVuZ3RoXG59XG4iLCJpbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuaW1wb3J0IHNldEZpbmFsQnV0dG9ucyBmcm9tICcuL3NldEZpbmFsQnV0dG9ucy5qcyc7XG5pbXBvcnQgY29uZmlybWF0aW9uIGZyb20gJy4vc2V0UmFuZG9tbHkvY29uZmlybWF0aW9uLmpzJztcbmltcG9ydCBnZXRJZCBmcm9tICcuL3NldFJhbmRvbWx5L2dldElkLmpzJztcbmltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zZXRSYW5kb21seS9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFJhbmRvbWx5KCkge1xuICAvLyBBZGQgY29uZmlybWF0aW9uIGFuZCB0cnkgYWdhaW4gYnV0dG9uc1xuICBjb25zdCBsZWdlbmQgPSBjb25maXJtYXRpb24ubGVnZW5kO1xuICBzZXRGaW5hbEJ1dHRvbnMobGVnZW5kLCBjb25maXJtYXRpb24uZm4sIHNldFJhbmRvbWx5KTtcbiAgLy8gR2V0IHNoaXBzIGNvb3JkaW5hdGVzXG4gIGNvbnN0IHNldFBsYXllclNoaXBzUmFuZG9tbHkgPSBwbGF5LmN1cnJlbnQuc2V0UGxheWVyU2hpcHNSYW5kb21seTtcbiAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IHNldFBsYXllclNoaXBzUmFuZG9tbHkoMSk7XG4gIC8vIEFwcGx5IHN0eWxlIHRvIGNvcnJlc3BvbmRpbmcgRE9NIGNlbGxzXG4gIHNoaXBzQ29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gKCgpID0+IHtcbiAgICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXNbMF1bMF0gPT09IHNoaXBDb29yZGluYXRlc1sxXVswXVxuICAgICAgICA/ICdob3Jpem9udGFsJ1xuICAgICAgICA6ICd2ZXJ0aWNhbCc7XG4gICAgfSkoKTtcbiAgICBjb25zdCBmaXJzdENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGdldElkKHNoaXBDb29yZGluYXRlc1swXVswXSwgc2hpcENvb3JkaW5hdGVzWzBdWzFdKVxuICAgICk7XG4gICAgY29uc3Qgc2hpcENsYXNzZXMgPSBbZGlyZWN0aW9uLCAncmFuZG9tbHlQbGFjZWRTaGlwJ107XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoZmlyc3RDZWxsLCAnZGl2Jywgc2hpcENsYXNzZXMsICcnLCBgbCR7c2hpcExlbmd0aH1zaGlwYCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBzaGlwQ29vcmRpbmF0ZXNbaV1bMF07XG4gICAgICAgIGNvbnN0IGNvbCA9IHNoaXBDb29yZGluYXRlc1tpXVsxXTtcbiAgICAgICAgY29uc3QgaWQgPSBnZXRJZChyb3csIGNvbCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgndW5hdmFpbGFibGVDZWxsJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5kb21seVBsYWNlZFNoaXAnKTtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICB9KTtcbiAgICB9LCA1MDApO1xuICB9KTtcbn1cbiIsImNvbnN0IGxlZ2VuZCA9ICdDb25maXJtIHRoZSBzaGlwcyBwbGFjZW1lbnQgb3IgdHJ5IGFnYWluLic7XG5jb25zdCBmbiA9ICgpID0+IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxlZ2VuZCxcbiAgZm4sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SWQocm93LCBjb2wpIHtcbiAgbGV0IHIgPSAoKCkgPT4ge1xuICAgIHJldHVybiByb3cgPT09IDAgPyAnJyA6IHJvdztcbiAgfSkoKTtcbiAgcmV0dXJuICdwZ2JjJyArIHIgKyBjb2w7XG59XG4iLCJpbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHNldFBsYXllckdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmRzL3NldFBsYXllckdhbWVib2FyZC5qcyc7XG5pbXBvcnQgcmVwZWF0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXBlYXQtb3V0bGluZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcnlBZ2FpbkJ0bih0cnlBZ2FpbkZuKSB7XG4gIGNvbnN0IHBzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwc3QnKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocHN0LCAnYnV0dG9uJywgW10sICdMZXQgbWUgdHJ5IGFnYWluJywgJ3RyeUFnYWluQnRuJywgW1xuICAgIHtcbiAgICAgIGF0dHJpYnV0ZTogJ3R5cGUnLFxuICAgICAgdmFsdWU6ICdidXR0b24nLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCB0cnlBZ2FpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cnlBZ2FpbkJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudCh0cnlBZ2FpbkJ0biwgJ2ltZycsIFtdLCAnJywgJ3JlcGVhdEljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogcmVwZWF0IH0sXG4gICAgeyBhdHRyaWJ1dGU6ICdhbHQnLCB2YWx1ZTogJ3JlcGVhdCBpY29uJyB9LFxuICBdKTtcbiAgdHJ5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgICBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllclNlY3Rpb24ucmVtb3ZlKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UGxheWVyR2FtZWJvYXJkKCk7XG4gICAgICB9LCAyNTApO1xuICAgIH0sIDUwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnlBZ2FpbkZuKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gICAgICAgIG5ld1BsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBbXTtcbiIsImltcG9ydCBzZXRQbGF5ZXJHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmRzL3NldFBsYXllckdhbWVib2FyZC5qcyc7XG5pbXBvcnQgc2V0UGxhY2VTaGlwc1Rvb2wgZnJvbSAnLi9zZXRQbGFjZVNoaXBzVG9vbC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgc2V0UmFuZG9tbHkgZnJvbSAnLi9wbGFjZVNoaXBzVG9vbC9zZXRSYW5kb21seS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEdhbWVDb250YWluZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGhlYWRlci5yZW1vdmUoKTtcbiAgICBmb290ZXIucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IGlzTW92aWxlID1cbiAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgKTtcbiAgICBzZXRQbGF5ZXJHYW1lYm9hcmQoKTtcbiAgICBpc01vdmlsZSA9PT0gZmFsc2UgPyBzZXRQbGFjZVNoaXBzVG9vbCgpIDogc2V0UmFuZG9tbHkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICAgICAgY29uc3QgcHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BzdCcpOyAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZSBzaGlwcyB0b29sXG4gICAgICBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIHBzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfSwgNTAwKTtcbiAgfSwgNTAwKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi9nYW1lL3BsYXkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQYW5lbCgpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgcGFuZWwuc2V0QXR0cmlidXRlKCdpZCcsICdwYW5lbCcpO1xuICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGdlbmVyYWxDb250YWluZXIuaW5zZXJ0QmVmb3JlKHBhbmVsLCBwbGF5ZXJTZWN0aW9uKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEubmFtZTtcbiAgY29uc3QgbGVnZW5kID0gYEl0J3MgeW91ciB0dXJuICR7cGxheWVyTmFtZX06YDtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocGFuZWwsICdwJywgW10sIGxlZ2VuZCwgJ2Jhc2ljT3JpZW50YXRpb24nKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQocGFuZWwsICdwJywgW10sICdBdHRhY2shJywgJ2FuaW1hdGlvblRleHQnKTtcbn1cbiIsImltcG9ydCBwbGF5IGZyb20gJy4uLy4uLy4uL2dhbWUvcGxheS5qcyc7XG5pbXBvcnQgY3JlYXRlSHRtbEVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY3JlYXRlSHRtbEVsZW1lbnQuanMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcGxhY2VTaGlwc1Rvb2wvc3R5bGUuY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHNodWZmbGUgZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL3NodWZmbGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IGhhbmQgZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2hhbmQtcmlnaHQtb3V0bGluZS5zdmcnO1xuaW1wb3J0IHNldFJhbmRvbWx5IGZyb20gJy4vcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkuanMnO1xuaW1wb3J0IHNldE1hbnVhbGx5IGZyb20gJy4vcGxhY2VTaGlwc1Rvb2wvc2V0TWFudWFsbHkuanMnO1xuaW1wb3J0IGNyZWF0ZVBTVCBmcm9tICcuL3BsYWNlU2hpcHNUb29sL2NyZWF0ZVBTVC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBsYWNlU2hpcHNUb29sKCkge1xuICAvLyBDcmVhdGUgcHN0IGNvbnRhaW5lclxuICAvLyBwc3Qgc3RhbmRzIGZvciBwbGFjZS1zaGlwcyB0b29sXG4gIGNvbnN0IHBzdCA9IGNyZWF0ZVBTVCgpO1xuICAvLyBDcmVhdGUgdXNlciBhZHZpY2VcbiAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXkuY3VycmVudC5nYW1lLnBsYXllcjEubmFtZTtcbiAgY29uc3QgbGVnZW5kID0gYEhpICR7cGxheWVyTmFtZX0hIFBsZWFzZSBzZWxlY3QgaG93IHlvdSB3YW50IHRvIHBsYWNlIHlvdXIgbmF2eTpgO1xuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdwJywgW10sIGxlZ2VuZCwgJ2xlZ2VuZCcpO1xuICAvLyBDcmVhdGUgc2V0IHJhbmRvbWx5IGJ1dHRvblxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ1NldCByYW5kb21seScsICdyYW5kb21seUJ0bicpO1xuICBjb25zdCByYW5kb21seUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21seUJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChyYW5kb21seUJ0biwgJ2ltZycsIFtdLCAnJywgJ3JhbmRvbUljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogc2h1ZmZsZSB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdyYW5kb20gaWNvbicgfSxcbiAgXSk7XG4gIHJhbmRvbWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldFJhbmRvbWx5KCk7XG4gIH0pO1xuICAvLyBDcmVhdGUgc2V0IG1hbnVhbGx5IGJ1dHRvblxuICBjcmVhdGVIdG1sRWxlbWVudChwc3QsICdidXR0b24nLCBbXSwgJ1NldCBtYW51YWxseScsICdtYW51YWxseUJ0bicpO1xuICBjb25zdCBtYW51YWxseUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW51YWxseUJ0bicpO1xuICBjcmVhdGVIdG1sRWxlbWVudChtYW51YWxseUJ0biwgJ2ltZycsIFtdLCAnJywgJ3JhbmRvbUljb24nLCBbXG4gICAgeyBhdHRyaWJ1dGU6ICdzcmMnLCB2YWx1ZTogaGFuZCB9LFxuICAgIHsgYXR0cmlidXRlOiAnYWx0JywgdmFsdWU6ICdoYW5kIGljb24nIH0sXG4gIF0pO1xuICBtYW51YWxseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRNYW51YWxseSgpO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgcmVzdGFydCBmcm9tICcuL3Jlc3RhcnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmQobGVnZW5kV2lubmVyKSB7XG4gIGNvbnN0IGJhc2ljT3JpZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzaWNPcmllbnRhdGlvbicpO1xuICBiYXNpY09yaWVudGF0aW9uLnRleHRDb250ZW50ID0gJ0dhbWUgb3Zlcic7XG4gIGNvbnN0IGFuaW1hdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5pbWF0aW9uVGV4dCcpO1xuICBhbmltYXRpb25UZXh0LnRleHRDb250ZW50ID0gbGVnZW5kV2lubmVyO1xuICBjb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclNlY3Rpb24nKTtcbiAgcGxheWVyU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCBBSVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlTZWN0aW9uJyk7XG4gIEFJU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgZ2VuZXJhbENvbnRhaW5lcixcbiAgICAnYnV0dG9uJyxcbiAgICBbXSxcbiAgICAnUGxheSBhZ2FpbicsXG4gICAgJ3BsYXlBZ2FpbkJ0bicsXG4gICAgW3sgYXR0cmlidXRlOiAndHlwZScsIHZhbHVlOiAnYnV0dG9uJyB9XVxuICApO1xuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUFnYWluQnRuJyk7XG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnQpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxDb250YWluZXInKTtcbiAgICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSwgMCk7XG59XG4iLCJpbXBvcnQgc2V0UGxheWVyR2FtZWJvYXJkIGZyb20gJy4vR1VJL2dhbWVib2FyZHMvc2V0UGxheWVyR2FtZWJvYXJkLmpzJztcbmltcG9ydCBzZXRQbGFjZVNoaXBzVG9vbCBmcm9tICcuL0dVSS9zZXRQbGFjZVNoaXBzVG9vbC5qcyc7XG5pbXBvcnQgc2V0UmFuZG9tbHkgZnJvbSAnLi9HVUkvcGxhY2VTaGlwc1Rvb2wvc2V0UmFuZG9tbHkuanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vZ2FtZS9wbGF5LmpzJztcbmltcG9ydCBzZXRHYW1lIGZyb20gJy4uLy4uL2dhbWUvc2V0R2FtZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIGdlbmVyYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBsZXQgcGxheWVyTmFtZSA9IHBsYXkuY3VycmVudC5nYW1lLnBsYXllci5uYW1lO1xuICBwbGF5LmN1cnJlbnQgPSBzZXRHYW1lKCk7XG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJOYW1lKDEsIHBsYXllck5hbWUpO1xuICBwbGF5LmN1cnJlbnQuc2V0UGxheWVyTmFtZSgyLCAnTWFjaGluZScpO1xuICAvLyBQbGFjZSBtYWNoaW5lIHNoaXBzXG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJTaGlwc1JhbmRvbWx5KDIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aGlsZSAoZ2VuZXJhbENvbnRhaW5lci5maXJzdENoaWxkKSBnZW5lcmFsQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgY29uc3QgaXNNb3ZpbGUgPVxuICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgIHNldFBsYXllckdhbWVib2FyZCgpO1xuICAgIGlzTW92aWxlID09PSBmYWxzZSA/IHNldFBsYWNlU2hpcHNUb29sKCkgOiBzZXRSYW5kb21seSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJTZWN0aW9uJyk7XG4gICAgICBjb25zdCBwc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHN0Jyk7IC8vIHBzdCBzdGFuZHMgZm9yIHBsYWNlIHNoaXBzIHRvb2xcbiAgICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgcHN0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9LCA1MDApO1xuICB9LCA1MDApO1xufVxuIiwiaW1wb3J0IHNldEdhbWVDb250YWluZXIgZnJvbSAnLi9HVUkvc2V0R2FtZUNvbnRhaW5lci5qcyc7XG5pbXBvcnQgc2V0R2FtZSBmcm9tICcuLi8uLi9nYW1lL3NldEdhbWUuanMnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vZ2FtZS9wbGF5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIFN0YXJ0IGdhbWUgYW5kIHNldCB1cCBwbGF5ZXJzIG5hbWVcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG4gIHBsYXkuY3VycmVudCA9IHNldEdhbWUoKTtcbiAgcGxheS5jdXJyZW50LnNldFBsYXllck5hbWUoMSwgcGxheWVyTmFtZSk7XG4gIHBsYXkuY3VycmVudC5zZXRQbGF5ZXJOYW1lKDIsICdNYWNoaW5lJyk7XG4gIC8vIFBsYWNlIG1hY2hpbmUgc2hpcHNcbiAgcGxheS5jdXJyZW50LnNldFBsYXllclNoaXBzUmFuZG9tbHkoMik7XG4gIC8vIFdlIHByb2NlZWQgYnkgcmVtb3ZpbmcgdGhlIGZvcm0gYW5kIGFkZGluZyBwbGF5ZXIgZ2FtZWJvYXJkIHRvIHRoZSBET00uXG4gIHNldEdhbWVDb250YWluZXIoKTtcbn1cbiIsImltcG9ydCBzZXRQYW5lbCBmcm9tICcuL0dVSS9zZXRQYW5lbC5qcyc7XG5pbXBvcnQgc2V0TWFjaGluZUdhbWVib2FyZCBmcm9tICcuL0dVSS9nYW1lYm9hcmRzL3NldE1hY2hpbmVHYW1lYm9hcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydCgpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQ29udGFpbmVyJyk7XG4gIHNldFBhbmVsKCk7XG4gIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyU2VjdGlvbicpO1xuICBwbGF5ZXJTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNldE1hY2hpbmVHYW1lYm9hcmQoKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBnZW5lcmFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSwgNTAwKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIdG1sRWxlbWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jcmVhdGVIdG1sRWxlbWVudC5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgd2F2ZXMgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3dhdmVzLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYXBoaWNhbFNoaXBzJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgIGNvbnN0IHN0cjEgPSAnc2hpcENvbnRhaW5lcic7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoY29udGFpbmVyLCAnZGl2JywgW3N0cjFdLCAnJywgYCR7c3RyMX0ke2l9YCk7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3N0cjF9JHtpfWApO1xuICAgIGNvbnN0IHN0cjIgPSAnZ3JhcGhpY2FsU2hpcCc7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoc2hpcENvbnRhaW5lciwgJ2RpdicsIFtzdHIyXSwgJycsIGAke3N0cjJ9JHtpfWApO1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzdHIyfSR7aX1gKTtcbiAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGAgdXJsKCR7d2F2ZXN9KWA7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoc2hpcCwgJ2RpdicsIFsnbGVmdFNhaWwnXSk7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQoc2hpcCwgJ2RpdicsIFsncmlnaHRTYWlsJ10pO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDM7IGorKykge1xuICAgICAgY3JlYXRlSHRtbEVsZW1lbnQoXG4gICAgICAgIHNoaXBDb250YWluZXIsXG4gICAgICAgICdkaXYnLFxuICAgICAgICBbJ2JhY2tncm91bmRSb3cnLCBgJHsnYmFja2dyb3VuZFJvdyd9JHtqfWBdLFxuICAgICAgICAnJyxcbiAgICAgICAgYCR7J2JhY2tncm91bmRSb3cnfS0ke2l9LSR7an1gXG4gICAgICApO1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7J2JhY2tncm91bmRSb3cnfS0ke2l9LSR7an1gKTtcbiAgICAgIGNvbnN0IHVybCA9IGAgdXJsKCR7d2F2ZXN9KWA7XG4gICAgICByb3cuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R2FtZWJvYXJkKCkge1xuICBjb25zdCBnYW1lYm9hcmQgPSBbXTtcbiAgY29uc3QgY2VsbCA9ICgpID0+IHtcbiAgICByZXR1cm4geyBhdHRhY2tlZDogZmFsc2UgfTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSByb3cucHVzaChjZWxsKCkpO1xuICAgIGdhbWVib2FyZC5wdXNoKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdhbWVib2FyZDtcbn1cbiIsImltcG9ydCBzZXRHYW1lYm9hcmQgZnJvbSAnLi9zZXRHYW1lYm9hcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQbGF5ZXJzKCkge1xuICByZXR1cm4ge1xuICAgIHBsYXllcjE6IHtcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGdhbWVib2FyZDogc2V0R2FtZWJvYXJkKCksXG4gICAgICB3aW5zOiAwLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0sXG4gICAgcGxheWVyMjoge1xuICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgZ2FtZWJvYXJkOiBzZXRHYW1lYm9hcmQoKSxcbiAgICAgIHdpbnM6IDAsXG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNoaXAobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgaXNTdW5rOiAoKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5oaXRzID09PSBzaGlwLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIGhpdDogKCkgPT4ge1xuICAgICAgc2hpcC5oaXRzICs9IDE7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIHNoaXA7XG59XG4iLCJpbXBvcnQgZ2V0QXR0YWNrQ29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRBdHRhY2tDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF0dGFja0hvcml6b250YWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCkge1xuICBpZiAoXG4gICAgY29sIC0gMSA+PSAwICYmXG4gICAgJ3NoaXAnIGluIHBsYXllckdhbWVib2FyZFtyb3ddW2NvbF0gJiZcbiAgICAhcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sIC0gMV0uYXR0YWNrZWRcbiAgKSB7XG4gICAgcmV0dXJuIFtyb3csIGNvbCAtIDFdO1xuICB9IGVsc2Uge1xuICAgIGxldCBpZHggPSBjb2wgKyAxO1xuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckdhbWVib2FyZFtyb3ddW2lkeF0uYXR0YWNrZWQgJiZcbiAgICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbcm93XVtpZHhdXG4gICAgKSB7XG4gICAgICBpZHgrKztcbiAgICB9XG4gICAgcmV0dXJuIGlkeCA8PSA5ICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93XVtpZHhdLmF0dGFja2VkXG4gICAgICA/IFtyb3csIGlkeF1cbiAgICAgIDogZ2V0QXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCwgdW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHJlY2VpdmVBdHRhY2sgZnJvbSAnLi4vb3BlcmF0aW9ucy9yZWNlaXZlQXR0YWNrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrUmFuZG9tbHkocGxheWVyR2FtZWJvYXJkKSB7XG4gIGxldCB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2U7XG4gIGxldCBjb29yZGluYXRlcztcbiAgd2hpbGUgKHZhbGlkQ29vcmRpbmF0ZXMgPT09IGZhbHNlKSB7XG4gICAgY29uc3QgcmFuZG9tQ2VsbE51bSA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IHJvdyA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gcmFuZG9tQ2VsbE51bSA8IDEwID8gMCA6IE1hdGguZmxvb3IocmFuZG9tQ2VsbE51bSAvIDEwKTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNvbCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gcmFuZG9tQ2VsbE51bSA8IDEwID8gcmFuZG9tQ2VsbE51bSA6IHJhbmRvbUNlbGxOdW0gJSAxMDtcbiAgICB9KSgpO1xuICAgIGlmICghcGxheWVyR2FtZWJvYXJkW3Jvd11bY29sXS5hdHRhY2tlZCkge1xuICAgICAgY29vcmRpbmF0ZXMgPSBbcm93LCBjb2xdO1xuICAgICAgdmFsaWRDb29yZGluYXRlcyA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2socGxheWVyR2FtZWJvYXJkLCBjb29yZGluYXRlcyk7XG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cbiIsImltcG9ydCBnZXRBdHRhY2tDb29yZGluYXRlcyBmcm9tICcuL2dldEF0dGFja0Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrVmVydGljYWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCkge1xuICBpZiAoXG4gICAgcm93IC0gMSA+PSAwICYmXG4gICAgJ3NoaXAnIGluIHBsYXllckdhbWVib2FyZFtyb3ddW2NvbF0gJiZcbiAgICAhcGxheWVyR2FtZWJvYXJkW3JvdyAtIDFdW2NvbF0uYXR0YWNrZWRcbiAgKSB7XG4gICAgcmV0dXJuIFtyb3cgLSAxLCBjb2xdO1xuICB9IGVsc2Uge1xuICAgIGxldCBpZHggPSByb3cgKyAxO1xuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckdhbWVib2FyZFtpZHhdW2NvbF0uYXR0YWNrZWQgJiZcbiAgICAgICdzaGlwJyBpbiBwbGF5ZXJHYW1lYm9hcmRbaWR4XVtjb2xdXG4gICAgKSB7XG4gICAgICArK2lkeDtcbiAgICB9XG4gICAgcmV0dXJuIGlkeCA8PSA5ICYmICFwbGF5ZXJHYW1lYm9hcmRbaWR4XVtjb2xdLmF0dGFja2VkXG4gICAgICA/IFtpZHgsIGNvbF1cbiAgICAgIDogZ2V0QXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCwgJ2hvcml6b250YWwnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNrV2l0aFVuZGVmaW5lZERpcmVjdGlvbihcbiAgcGxheWVyR2FtZWJvYXJkLFxuICByb3csXG4gIGNvbFxuKSB7XG4gIGlmIChyb3cgLSAxID49IDAgJiYgIXBsYXllckdhbWVib2FyZFtyb3cgLSAxXVtjb2xdLmF0dGFja2VkKSB7XG4gICAgcmV0dXJuIFtyb3cgLSAxLCBjb2xdO1xuICB9IGVsc2UgaWYgKHJvdyArIDEgPD0gOSAmJiAhcGxheWVyR2FtZWJvYXJkW3JvdyArIDFdW2NvbF0uYXR0YWNrZWQpIHtcbiAgICByZXR1cm4gW3JvdyArIDEsIGNvbF07XG4gIH0gZWxzZSBpZiAoY29sIC0gMSA+PSAwICYmICFwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgLSAxXS5hdHRhY2tlZCkge1xuICAgIHJldHVybiBbcm93LCBjb2wgLSAxXTtcbiAgfSBlbHNlIGlmIChjb2wgKyAxIDw9IDkgJiYgIXBsYXllckdhbWVib2FyZFtyb3ddW2NvbCArIDFdLmF0dGFja2VkKSB7XG4gICAgcmV0dXJuIFtyb3csIGNvbCArIDFdO1xuICB9XG59XG4iLCJpbXBvcnQgYXR0YWNrVmVydGljYWwgZnJvbSAnLi9hdHRhY2tWZXJ0aWNhbC5qcyc7XG5pbXBvcnQgYXR0YWNrSG9yaXpvbnRhbCBmcm9tICcuL2F0dGFja0hvcml6b250YWwuanMnO1xuaW1wb3J0IGF0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24gZnJvbSAnLi9hdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXR0YWNrQ29vcmRpbmF0ZXMoXG4gIHBsYXllckdhbWVib2FyZCxcbiAgcm93LFxuICBjb2wsXG4gIGRpcmVjdGlvblxuKSB7XG4gIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XG4gIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICByZXR1cm4gYXR0YWNrVmVydGljYWwocGxheWVyR2FtZWJvYXJkLCByb3csIGNvbCk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICByZXR1cm4gYXR0YWNrSG9yaXpvbnRhbChwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sKTtcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhdHRhY2tXaXRoVW5kZWZpbmVkRGlyZWN0aW9uKHBsYXllckdhbWVib2FyZCwgcm93LCBjb2wpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGlmeURpcmVjdGlvbihwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sKSB7XG4gIGxldCBkaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGNvbnN0IHRvcCA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyAtIDEgPj0gMCA/IHBsYXllckdhbWVib2FyZFtyb3cgLSAxXVtjb2xdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGNvbnN0IGJvdHRvbSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHJvdyArIDEgPD0gOSA/IHBsYXllckdhbWVib2FyZFtyb3cgKyAxXVtjb2xdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGNvbnN0IGxlZnQgPSAoKCkgPT4ge1xuICAgIHJldHVybiBjb2wgLSAxID49IDAgPyBwbGF5ZXJHYW1lYm9hcmRbcm93XVtjb2wgLSAxXSA6IGZhbHNlO1xuICB9KSgpO1xuICBjb25zdCByaWdodCA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIGNvbCArIDEgPD0gOSA/IHBsYXllckdhbWVib2FyZFtyb3ddW2NvbCArIDFdIDogZmFsc2U7XG4gIH0pKCk7XG4gIGlmICh0b3AgJiYgdG9wLmF0dGFja2VkICYmICdzaGlwJyBpbiB0b3ApIHtcbiAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2UgaWYgKGJvdHRvbSAmJiBib3R0b20uYXR0YWNrZWQgJiYgJ3NoaXAnIGluIGJvdHRvbSkge1xuICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH0gZWxzZSBpZiAobGVmdCAmJiBsZWZ0LmF0dGFja2VkICYmICdzaGlwJyBpbiBsZWZ0KSB7XG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICB9IGVsc2UgaWYgKHJpZ2h0ICYmIHJpZ2h0LmF0dGFja2VkICYmICdzaGlwJyBpbiByaWdodCkge1xuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKGdhbWVib2FyZCkge1xuICBsZXQgc3RhdHVzID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbaV1bal07XG4gICAgICBpZiAoJ3NoaXAnIGluIHBsYWNlICYmIHBsYWNlLnNoaXAuaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdHVzO1xufVxuIiwiaW1wb3J0IHNldFNoaXAgZnJvbSAnLi4vZmFjdG9yaWVzL3NldFNoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVNoaXAoZ2FtZWJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBzdGFydCA9IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBlbmQgPSBjb29yZGluYXRlc1sxXTtcbiAgY29uc3QgY2VsbHMgPSBbXTtcbiAgY29uc3QgYXhpcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgeCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4gc3RhcnRbMF0gPT09IGVuZFswXSA/IHRydWUgOiBmYWxzZTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGxlbmd0aCA9ICgoKSA9PiB7XG4gICAgICByZXR1cm4geCA9PT0gdHJ1ZSA/IGVuZFsxXSAtIHN0YXJ0WzFdICsgMSA6IGVuZFswXSAtIHN0YXJ0WzBdICsgMTtcbiAgICB9KSgpO1xuICAgIHJldHVybiB7IHgsIGxlbmd0aCB9O1xuICB9KSgpO1xuICBpZiAoYXhpcy54ID09PSB0cnVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBheGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjZWxscy5wdXNoKFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2VsbHMucHVzaChbc3RhcnRbMF0gKyBpLCBzdGFydFsxXV0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwID0gc2V0U2hpcChheGlzLmxlbmd0aCk7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBwbGFjZSA9IGdhbWVib2FyZFtjZWxsWzBdXVtjZWxsWzFdXTtcbiAgICBpZiAoJ3NoaXAnIGluIHBsYWNlKSByZXR1cm4gbmV3IEVycm9yKCdTaGlwIGluIHBsYWNlJyk7XG4gICAgZWxzZSBnYW1lYm9hcmRbY2VsbFswXV1bY2VsbFsxXV0uc2hpcCA9IHNoaXA7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhnYW1lYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBjb2wgPSBjb29yZGluYXRlc1sxXTtcbiAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbcm93XVtjb2xdO1xuICBpZiAocGxhY2UuYXR0YWNrZWQgPT09IHRydWUpIHJldHVybiBuZXcgRXJyb3IoJ1BsYWNlIGFscmVhZHkgYXR0YWNrZWQuJyk7XG4gIHBsYWNlLmF0dGFja2VkID0gdHJ1ZTtcbiAgaWYgKCdzaGlwJyBpbiBwbGFjZSkge1xuICAgIHBsYWNlLnNoaXAuaGl0KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZ2V0Q29vcmRpbmF0ZXMgZnJvbSAnLi9zZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzLmpzJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3NldFNoaXBzT25SYW5kb21Db29yZGluYXRlcy92YWxpZGF0ZUNvb3JkaW5hdGVzLmpzJztcbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi9wbGFjZVNoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMoZ2FtZWJvYXJkKSB7XG4gIGNvbnN0IHNoaXBzTGVuZ2h0cyA9IFs2LCA1LCA0LCAzLCAyXTtcbiAgY29uc3QgYWxsU2hpcHNDb29yZGluYXRlcyA9IFtdO1xuICBzaGlwc0xlbmdodHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgIGxldCBwbGFjZWRTaGlwID0gZmFsc2U7XG4gICAgd2hpbGUgKHBsYWNlZFNoaXAgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKHNoaXBMZW5ndGgpO1xuICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpO1xuICAgICAgaWYgKHZhbGlkYXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1swXVswXSwgY29vcmRpbmF0ZXNbMF1bMV1dO1xuICAgICAgICBjb25zdCBpZHggPSBjb29yZGluYXRlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBlbmRDb29yZGluYXRlcyA9IFtjb29yZGluYXRlc1tpZHhdWzBdLCBjb29yZGluYXRlc1tpZHhdWzFdXTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW3N0YXJ0Q29vcmRpbmF0ZXMsIGVuZENvb3JkaW5hdGVzXTtcbiAgICAgICAgcGxhY2VTaGlwKGdhbWVib2FyZCwgc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgICAgYWxsU2hpcHNDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcGxhY2VkU2hpcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFsbFNoaXBzQ29vcmRpbmF0ZXM7XG59XG4iLCJpbXBvcnQgZ2V0UmFuZG9tQ2VsbE51bSBmcm9tICcuL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRSYW5kb21DZWxsTnVtLmpzJztcbmltcG9ydCBnZXRSYW5kb21EaXJlY3Rpb24gZnJvbSAnLi9nZXRSYW5kb21TaGlwQ29vcmRpbmF0ZXMvZ2V0UmFuZG9tRGlyZWN0aW9uLmpzJztcbmltcG9ydCBnZXRDb29yZGluYXRlcyBmcm9tICcuL2dldFJhbmRvbVNoaXBDb29yZGluYXRlcy9nZXRDb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbVNoaXBDb29yZGluYXRlcyhzaGlwTGVuZ3RoKSB7XG4gIGNvbnN0IHN0YXJ0Q2VsbE51bSA9IGdldFJhbmRvbUNlbGxOdW0oKTtcbiAgY29uc3QgZGlyZWN0aW9uID0gZ2V0UmFuZG9tRGlyZWN0aW9uKCk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZGlyZWN0aW9uLCBzdGFydENlbGxOdW0sIHNoaXBMZW5ndGgpO1xuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhkaXJlY3Rpb24sIHN0YXJ0Q2VsbE51bSwgc2hpcExlbmd0aCkge1xuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCByb3cgPSAoKCkgPT4ge1xuICAgIHJldHVybiBzdGFydENlbGxOdW0gPCAxMCA/IDAgOiBNYXRoLmZsb29yKHN0YXJ0Q2VsbE51bSAvIDEwKTtcbiAgfSkoKTtcbiAgY29uc3QgY29sID0gKCgpID0+IHtcbiAgICByZXR1cm4gc3RhcnRDZWxsTnVtIDwgMTAgPyBzdGFydENlbGxOdW0gOiBzdGFydENlbGxOdW0gJSAxMDtcbiAgfSkoKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGlmICg5IC0gKHNoaXBMZW5ndGggLSAxKSA+PSByb3cpIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaSwgY29sXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyb3cgLSAoc2hpcExlbmd0aCAtIDEpID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPiByb3cgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbaSwgY29sXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgaWYgKDkgLSAoc2hpcExlbmd0aCAtIDEpID49IGNvbCkge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtyb3csIGldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbCAtIChzaGlwTGVuZ3RoIC0gMSkgPj0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA+IGNvbCAtIHNoaXBMZW5ndGg7IGktLSkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtyb3csIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3JkaW5hdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVswXSA9PT0gYlswXSA/IGFbMV0gLSBiWzFdIDogYVswXSAtIGJbMF07XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmFuZG9tQ2VsbE51bSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21EaXJlY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbaV1bMF07XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbaV1bMV07XG4gICAgY29uc3QgcGxhY2UgPSBnYW1lYm9hcmRbcm93XVtjb2xdO1xuICAgIGlmICgnc2hpcCcgaW4gcGxhY2UpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY3VycmVudDogbnVsbCxcbn07XG4iLCJpbXBvcnQgc2V0UGxheWVycyBmcm9tICcuL2ZhY3Rvcmllcy9zZXRQbGF5ZXJzLmpzJztcbmltcG9ydCBwbGFjZVNoaXAgZnJvbSAnLi9vcGVyYXRpb25zL3BsYWNlU2hpcC5qcyc7XG5pbXBvcnQgcmVjZWl2ZUF0dGFjayBmcm9tICcuL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5pbXBvcnQgYWxsU2hpcHNTdW5rIGZyb20gJy4vb3BlcmF0aW9ucy9hbGxTaGlwc1N1bmsuanMnO1xuaW1wb3J0IHNldEdhbWVib2FyZCBmcm9tICcuL2ZhY3Rvcmllcy9zZXRHYW1lYm9hcmQuanMnO1xuaW1wb3J0IHNldFNoaXBzT25SYW5kb21Db29yZGluYXRlcyBmcm9tICcuL29wZXJhdGlvbnMvc2V0U2hpcHNPblJhbmRvbUNvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R2FtZSgpIHtcbiAgY29uc3QgZ2FtZSA9IHNldFBsYXllcnMoKTtcbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKHBsYXllcklkKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVbYHBsYXllciR7cGxheWVySWR9YF0uZ2FtZWJvYXJkO1xuICB9O1xuICBjb25zdCBzZXRQbGF5ZXJOYW1lID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgZ2FtZVtgcGxheWVyJHtpZH1gXS5uYW1lID0gbmFtZTtcbiAgfTtcbiAgY29uc3Qgc2V0UGxheWVyU2hpcHMgPSAocGxheWVySWQsIHNoaXBzKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZ2V0R2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBwbGFjZVNoaXAoZ2FtZWJvYXJkLCBzaGlwKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVzdG9yZUdhbWVib2FyZCA9IChwbGF5ZXJJZCkgPT4ge1xuICAgIHJldHVybiAoZ2FtZVtgcGxheWVyJHtwbGF5ZXJJZH1gXS5nYW1lYm9hcmQgPSBzZXRHYW1lYm9hcmQoKSk7XG4gIH07XG4gIGNvbnN0IHNldFBsYXllclNoaXBzUmFuZG9tbHkgPSAocGxheWVySWQpID0+IHtcbiAgICByZXN0b3JlR2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBsZXQgZ2FtZWJvYXJkID0gZ2V0R2FtZWJvYXJkKHBsYXllcklkKTtcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlcyA9IHNldFNoaXBzT25SYW5kb21Db29yZGluYXRlcyhnYW1lYm9hcmQpO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnYW1lLFxuICAgIGdldEdhbWVib2FyZCxcbiAgICBzZXRQbGF5ZXJOYW1lLFxuICAgIHNldFBsYXllclNoaXBzLFxuICAgIHNldFBsYXllclNoaXBzUmFuZG9tbHksXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59XG4iLCJpbXBvcnQgaWRlbnRpZnlEaXJlY3Rpb24gZnJvbSAnLi9tYWNoaW5lL2lkZW50aWZ5RGlyZWN0aW9uLmpzJztcbmltcG9ydCBnZXRBdHRhY2tDb29yZGluYXRlcyBmcm9tICcuL21hY2hpbmUvZ2V0QXR0YWNrQ29vcmRpbmF0ZXMuanMnO1xuaW1wb3J0IGF0dGFja1JhbmRvbWx5IGZyb20gJy4vbWFjaGluZS9hdHRhY2tSYW5kb21seS5qcyc7XG5pbXBvcnQgcmVjZWl2ZUF0dGFjayBmcm9tICcuL29wZXJhdGlvbnMvcmVjZWl2ZUF0dGFjay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hY2hpbmUoZ2FtZWJvYXJkKSB7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgY29uc3QgYWN0aXZlVGFyZ2V0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyR2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckdhbWVib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBwbGFjZSA9IHBsYXllckdhbWVib2FyZFtpXVtqXTtcbiAgICAgICAgaWYgKHBsYWNlLmF0dGFja2VkKSB7XG4gICAgICAgICAgaWYgKCdzaGlwJyBpbiBwbGFjZSAmJiAhcGxhY2Uuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gaWRlbnRpZnlEaXJlY3Rpb24ocGxheWVyR2FtZWJvYXJkLCBpLCBqKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRhY2tDb29yZGluYXRlcyhwbGF5ZXJHYW1lYm9hcmQsIGksIGosIGRpcmVjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcbiAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGFjdGl2ZVRhcmdldCgpO1xuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkocGxheWVyR2FtZWJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQsIHRhcmdldCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgYXR0YWNrIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudChcbiAgcGFyZW50LFxuICB0eXBlLFxuICBhcnJheU9mQ2xhc3NlcyxcbiAgdGV4dENvbnRlbnQsXG4gIGlkLFxuICBhcnJheU9mQXR0cmlidXRlc1xuKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoYXJyYXlPZkNsYXNzZXMgIT09IHVuZGVmaW5lZCAmJiBhcnJheU9mQ2xhc3Nlcy5sZW5ndGggIT09IDApIHtcbiAgICBhcnJheU9mQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChpZCAhPT0gdW5kZWZpbmVkKSBlbGVtZW50LmlkID0gaWQ7XG4gIGlmIChhcnJheU9mQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkICYmIGFycmF5T2ZBdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMCkge1xuICAgIGFycmF5T2ZBdHRyaWJ1dGVzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUob2JqLmF0dHJpYnV0ZSwgb2JqLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNldEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vc2V0Rm9ybS5qcyc7XG5pbXBvcnQgc2V0R3JhcGhpY2FsU2hpcHMgZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoaWNhbFNoaXBzL3NldEdyYXBoaWNhbFNoaXBzLmpzJztcblxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5QnRuJyk7XG5cbi8vIFNoaXBzIGZvciB2aXN1YWwgcHVycG9zZXNcbnNldEdyYXBoaWNhbFNoaXBzKCk7XG5cbi8vIHNldFRpbWVvdXQgaXMgdXNlZCB0byBkaXNwbGF5IERPTSBhbmltYXRpb25zXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwbGF5QnRuLnJlbW92ZSgpO1xuICB9LCA1MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRGb3JtKCk7IC8vIFRoZSBnYW1lIHN0YXJ0cyByZXF1ZXN0aW5nIHRoZSBwbGF5ZXIncyBuYW1lXG4gIH0sIDUwMCk7XG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVIdG1sRWxlbWVudCIsInNldHVwIiwic3R5bGUiLCJzZXRGb3JtIiwiZ2VuZXJhbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImF0dHJpYnV0ZSIsInZhbHVlIiwiaW5wdXQiLCJyZXF1aXJlZCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0Q2VsbElkIiwic3RyIiwicm93IiwiY29sIiwiciIsImdldENvb3JkaW5hdGVzRnJvbUlkIiwiY2VsbElkIiwiY2VsbE51bSIsInNwbGl0Iiwicm93TnVtIiwibGVuZ3RoIiwiY29sTnVtIiwicGFyc2VJbnQiLCJkaXNwbGF5QW5kSGlkZVNlY3Rpb25zIiwiQXR0YWNrIiwicGxheWVyQXR0YWNrIiwicGxheSIsImVuZCIsIm1hY2hpbmVBdHRhY2siLCJhdHRhY2siLCJyZW1vdmUiLCJzaGlwSW5Db29yZGluYXRlcyIsImNlbGwiLCJnYW1lYm9hcmQiLCJjdXJyZW50IiwiZ2V0R2FtZWJvYXJkIiwic3RhdHVzIiwiYWxsU2hpcHNTdW5rIiwibGVnZW5kIiwic2V0TWFjaGluZSIsIm1hY2hpbmUiLCJhdHRhY2tDb29yZGluYXRlcyIsImJhc2ljT3JpZW50YXRpb24iLCJ0ZXh0Q29udGVudCIsImFuaW1hdGlvblRleHQiLCJjb2xvciIsInBsYXllclNlY3Rpb24iLCJkaXNwbGF5IiwiQUlTZWN0aW9uIiwiZ2FtZSIsInBsYXllcjEiLCJhY3RpdmUiLCJwbGF5ZXJOYW1lIiwibmFtZSIsInJlY2VpdmVBdHRhY2siLCJzZXRNYWNoaW5lR2FtZWJvYXJkIiwiZ2JDbGFzc2VzIiwibWFjaGluZVNlY3Rpb24iLCJtYWNoaW5lR2FtZWJvYXJkIiwiaSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhdHRhY2tGbiIsImFjdGl2ZVBsYXllciIsImNvb3JkaW5hdGVzIiwiaWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0UGxheWVyR2FtZWJvYXJkIiwiZ2IiLCJwbGF5ZXJHYW1lYm9hcmQiLCJwc3QiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0QmVmb3JlIiwiZHJhZ0VuZCIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwiZHJhZ0xlYXZlIiwiZHJhZ092ZXIiLCJkcmFnU3RhcnQiLCJvZmZzZXRYIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJvZmZzZXRZIiwiY2xpZW50WSIsInRvcCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0RE9NQ29vcmRpbmF0ZXMiLCJzZXR1cFNoaXBTdHlsZSIsImdldEVsZW1lbnRzT25TaGlwQXJlYSIsImxpbmtTaGlwV2l0aENlbGwiLCJnZXRHYW1lQ29vcmRpbmF0ZXMiLCJzZXRGaW5hbEJ1dHRvbnMiLCJjb25maXJtYXRpb24iLCJ0cnlBZ2FpbkZuIiwiZHJvcCIsImNvbnRhaW5lciIsIm5ld1giLCJuZXdZIiwiZHJhZ2dhYmxlSWQiLCJnZXREYXRhIiwiZHJhZ2dhYmxlIiwic2hpcExlbmd0aCIsImNoYXJBdCIsImVsZW1lbnRzT25TaGlwQXJlYSIsImVsZW1lbnQiLCJzaGlwcyIsImZuIiwib2Zmc2V0cyIsInBhcnNlIiwiY29udGFpbmVyUmVjdCIsImlkZW50aWZ5RWxlbWVudHNJbkFyZWEiLCJuZXdDb250YWluZXIiLCJjbG9uZSIsImNsb25lTm9kZSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiYXBwZW5kQ2hpbGQiLCJyZWN0IiwidG9wQ29vcmRpbmF0ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJib3R0b21Db29yZGluYXRlIiwiYm90dG9tIiwibGVmdENvb3JkaW5hdGUiLCJzY3JvbGxYIiwicmlnaHRDb29yZGluYXRlIiwicmlnaHQiLCJzaGlwc0Nvb3JkaW5hdGVzIiwic2hpcElkIiwiZ2V0Q2VsbE51bSIsImdldENvb3JkaW5hdGVzIiwiRXJyb3IiLCJzdGFydENlbGwiLCJlbmRDZWxsIiwic3RhcnRDb29yZGluYXRlcyIsImVuZENvb3JkaW5hdGVzIiwicHVzaCIsImVsZW1lbnRzVG9TZWFyY2giLCJhbGxFbGVtZW50cyIsImVsZW1lbnRzIiwiZWxlbWVudFRvcCIsImVsZW1lbnRCb3R0b20iLCJlbGVtZW50TGVmdCIsImVsZW1lbnRSaWdodCIsInRyYW5zZm9ybSIsImNoZWNrbWFyayIsInN0YXJ0Iiwic2V0Q29uZmlybWF0aW9uQnRuIiwiY29uZmlybWF0aW9uRm4iLCJjb25maXJtYXRpb25CdG4iLCJzZXRUcnlBZ2FpbkJ0biIsImNyZWF0ZVBTVCIsIm5ld0xlZ2VuZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFkZEVsZW1lbnRzIiwic2V0U2hpcHNPblBTVCIsInNldERyYWdBbmREcm9wIiwiY2hhbmdlRGlyZWN0aW9uIiwic2V0TWFudWFsbHkiLCJkaXJlY3Rpb25CdG4iLCJhcnJvdyIsInNoaXBzQ29udGFpbmVyIiwiZGlyZWN0aW9uIiwic2hpcCIsImljb24iLCJ0cmFuc2l0aW9uIiwicGxhY2VTaGlwIiwidW5kZWZpbmVkIiwiZWwiLCJyb3dzIiwiY2xhc3NlcyIsImdldElkIiwic2V0UmFuZG9tbHkiLCJzZXRQbGF5ZXJTaGlwc1JhbmRvbWx5Iiwic2hpcENvb3JkaW5hdGVzIiwiZmlyc3RDZWxsIiwic2hpcENsYXNzZXMiLCJyZXBlYXQiLCJ0cnlBZ2FpbkJ0biIsIm5ld1BsYXllclNlY3Rpb24iLCJzZXRQbGFjZVNoaXBzVG9vbCIsInNldEdhbWVDb250YWluZXIiLCJoZWFkZXIiLCJmb290ZXIiLCJpc01vdmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzZXRQYW5lbCIsInBhbmVsIiwic2h1ZmZsZSIsImhhbmQiLCJyYW5kb21seUJ0biIsIm1hbnVhbGx5QnRuIiwicmVzdGFydCIsImxlZ2VuZFdpbm5lciIsInBsYXlBZ2FpbkJ0biIsInNldEdhbWUiLCJwbGF5ZXIiLCJzZXRQbGF5ZXJOYW1lIiwid2F2ZXMiLCJzdHIxIiwic2hpcENvbnRhaW5lciIsInN0cjIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJqIiwidXJsIiwic2V0R2FtZWJvYXJkIiwiYXR0YWNrZWQiLCJzZXRQbGF5ZXJzIiwid2lucyIsInBsYXllcjIiLCJzZXRTaGlwIiwiaGl0cyIsImlzU3VuayIsImhpdCIsImdldEF0dGFja0Nvb3JkaW5hdGVzIiwiYXR0YWNrSG9yaXpvbnRhbCIsImlkeCIsImF0dGFja1JhbmRvbWx5IiwidmFsaWRDb29yZGluYXRlcyIsInJhbmRvbUNlbGxOdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhdHRhY2tWZXJ0aWNhbCIsImF0dGFja1dpdGhVbmRlZmluZWREaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaWRlbnRpZnlEaXJlY3Rpb24iLCJwbGFjZSIsImF4aXMiLCJ4IiwidmFsaWRhdGUiLCJzZXRTaGlwc09uUmFuZG9tQ29vcmRpbmF0ZXMiLCJzaGlwc0xlbmdodHMiLCJhbGxTaGlwc0Nvb3JkaW5hdGVzIiwicGxhY2VkU2hpcCIsInZhbGlkYXRpb24iLCJnZXRSYW5kb21DZWxsTnVtIiwiZ2V0UmFuZG9tRGlyZWN0aW9uIiwiZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzIiwic3RhcnRDZWxsTnVtIiwic29ydCIsImEiLCJiIiwicm91bmQiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwicGxheWVySWQiLCJzZXRQbGF5ZXJTaGlwcyIsInJlc3RvcmVHYW1lYm9hcmQiLCJyYW5kb21Db29yZGluYXRlcyIsImFjdGl2ZVRhcmdldCIsInBhcmVudCIsInR5cGUiLCJhcnJheU9mQ2xhc3NlcyIsImFycmF5T2ZBdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwib2JqIiwic2V0R3JhcGhpY2FsU2hpcHMiLCJwbGF5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==