(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/magicTools/css/Game.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/magicTools/css/Game.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ol, ul {\n  padding-left: 30px;\n}\n\n\n\n.status {\n  margin-bottom: 10px;\n}\n\n.square {\n  border: 1px solid #999;\n  font-weight: bold;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  height: calc(12.5% - 1px);\n}\n\n.board-row {\n  flex: 8 1;\n}\n\n.square:focus {\n  outline: none;\n}\n\n.kbd-navigation .square:focus {\n  background: #ddd;\n}\n\n.game {\n  display: flex;\n}\n\n.chess-board {\n  height: 100%;\n  width: 100%;\n  right: 0;\n  top: 0;\n  display: flex;\n}\n\n.game-info {\n  margin-left: 20px;\n}\n\n.stretchy {\n  display:block; \n  float:left; \n  position:relative; \n  overflow:hidden;\n  max-width:160px;\n}\n.stretchy .spacer {\n  width: 100%; \n  height: auto;\n}\n.stretchy .no-limit {\n  max-width: none;\n}\n.stretchy .sprite {position:absolute; top:0; left:0; max-width:none; height: 220%;}\n.stretchy .sprite .s2 {left:-100%;}", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _magicTools_Game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magicTools/Game */ "./src/magicTools/Game.js");





var _jsxFileName = "/home/katzenmaul/Desktop/mbds/chess/src/App.js";




var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_magicTools_Game__WEBPACK_IMPORTED_MODULE_7__["Game"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/katzenmaul/Desktop/mbds/chess/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/lpieces.png":
/*!*************************!*\
  !*** ./src/lpieces.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lpieces.18873273.png";

/***/ }),

/***/ "./src/magicTools/Board.js":
/*!*********************************!*\
  !*** ./src/magicTools/Board.js ***!
  \*********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Square */ "./src/magicTools/Square.js");





var _jsxFileName = "/home/katzenmaul/Desktop/mbds/chess/src/magicTools/Board.js";


var Board =
/*#__PURE__*/
function (_Component) {
  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Board, _Component);

  function Board(props) {
    var _this;

    Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Board);

    _this = Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Board).call(this, props));
    _this.state = {
      board: []
    };
    return _this;
  }

  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Board, [{
    key: "renderSquare",
    value: function renderSquare(i, key) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Square__WEBPACK_IMPORTED_MODULE_6__["Square"], {
        key: key,
        value: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    }
  }, {
    key: "renderBoard",
    value: function renderBoard() {
      var table = [];
      var key = 1;

      for (var i = 1; i < 9; i++) {
        var children = [];

        for (var j = 1; j < 9; j++) {
          children.push(this.renderSquare(i + 10 * j, key++));
        }

        table.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "board-row",
          key: key++,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, children));
      }

      this.setState({
        board: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "chess-board",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, " ", table, " ")
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderBoard();
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.board;
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/magicTools/Game.js":
/*!********************************!*\
  !*** ./src/magicTools/Game.js ***!
  \********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Board */ "./src/magicTools/Board.js");
/* harmony import */ var _css_Game_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/Game.css */ "./src/magicTools/css/Game.css");
/* harmony import */ var _css_Game_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Game_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/katzenmaul/Desktop/mbds/chess/src/magicTools/Game.js";



var Game =
/*#__PURE__*/
function (_Component) {
  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Game, _Component);

  function Game(props) {
    var _this;

    Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);

    _this = Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Game).call(this, props));
    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "updateDimentions",
    value: function updateDimentions() {
      this.setState({
        width: window.innerWidth - 8,
        height: window.innerHeight - 8
      });
      console.log("updating dimensions...");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimentions();
      window.addEventListener("resize", this.updateDimentions.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimentions.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var size = Math.min(this.state.width, this.state.height);
      var divStyle = {
        width: size,
        height: size
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "game-board",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_6__["Board"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "game-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/magicTools/Square.js":
/*!**********************************!*\
  !*** ./src/magicTools/Square.js ***!
  \**********************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lpieces_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lpieces.png */ "./src/lpieces.png");
/* harmony import */ var _lpieces_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lpieces_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _spacer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spacer.png */ "./src/spacer.png");
/* harmony import */ var _spacer_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_spacer_png__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/katzenmaul/Desktop/mbds/chess/src/magicTools/Square.js";



var Square =
/*#__PURE__*/
function (_Component) {
  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Square, _Component);

  function Square(props) {
    var _this;

    Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Square);

    _this = Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Square).call(this, props));
    _this.state = {
      value: props.value,
      x: props.value % 10,
      y: (props.value - props.value % 10) / 10
    };
    return _this;
  }

  Object(_home_katzenmaul_Desktop_mbds_chess_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Square, [{
    key: "logCoords",
    value: function logCoords() {
      console.log(this.state.x + "|" + this.state.y);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var divStyle = {
        background: (this.state.x + this.state.y) % 2 === 0 ? "#7d8796" : "#e8ebef"
      };
      var divInDivStyle = {
        background: "url(" + _lpieces_png__WEBPACK_IMPORTED_MODULE_6___default.a + ") 0 0",
        width: 28,
        height: 54,
        "max-width": ""
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "square",
        style: divStyle,
        onClick: function onClick() {
          return _this2.logCoords();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "stretchy no-limit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "spacer",
        alt: "icon",
        src: _spacer_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "sprite s2",
        alt: "",
        src: _lpieces_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })));
    }
  }]);

  return Square;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/magicTools/css/Game.css":
/*!*************************************!*\
  !*** ./src/magicTools/css/Game.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Game.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/magicTools/css/Game.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Game.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/magicTools/css/Game.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Game.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/magicTools/css/Game.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/spacer.png":
/*!************************!*\
  !*** ./src/spacer.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/katzenmaul/Desktop/mbds/chess/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/katzenmaul/Desktop/mbds/chess/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map