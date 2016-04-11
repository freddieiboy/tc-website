module.exports =
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(25);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(9);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(12);
    }, '/500': function _() {
      return __webpack_require__(13);
    }, '/about': function about() {
      return __webpack_require__(14);
    }, '/blog': function blog() {
      return __webpack_require__(15);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(16);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(17);
    }, '/': function _() {
      return __webpack_require__(18);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var Frog = function Frog() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#ffdf99", d: "M2,38c0,14.281,18.666,19,30,19c11.333,0,30-4.719,30-19H2z" }),
      _react2["default"].createElement("path", { fill: "#83bf4f", d: "M62,38H2c0-26.947,13.334-23.816,30-23.882C48.667,14.053,62,10.949,62,38z" }),
      _react2["default"].createElement(
        "g",
        { fill: "#3e4347" },
        _react2["default"].createElement("path", { d: "m28 30c-1 0-3 3-3 3s2-1 3-1 3 1 3 1-2-3-3-3" }),
        _react2["default"].createElement("path", { d: "m36 30c-1 0-3 3-3 3s2-1 3-1 3 1 3 1-2-3-3-3" }),
        _react2["default"].createElement("path", { d: "m32 44c22 0 30-6 30-6h-60c0 0 8 6 30 6" })
      ),
      _react2["default"].createElement("circle", { fill: "#83bf4f", cx: "50", cy: "19", r: "12" }),
      _react2["default"].createElement("circle", { fill: "#3e4347", cx: "50", cy: "19", r: "10" }),
      _react2["default"].createElement("circle", { fill: "#ffe655", cx: "50", cy: "18.999", r: "8" }),
      _react2["default"].createElement("ellipse", { fill: "#3e4347", cx: "50", cy: "19.17", rx: "6", ry: "1.998" }),
      _react2["default"].createElement("circle", { fill: "#83bf4f", cx: "14", cy: "19", r: "12" }),
      _react2["default"].createElement("circle", { fill: "#3e4347", cx: "14", cy: "19", r: "10" }),
      _react2["default"].createElement("circle", { fill: "#ffe655", cx: "14", cy: "19", r: "8" }),
      _react2["default"].createElement("ellipse", { fill: "#3e4347", cx: "14", cy: "19.17", rx: "6", ry: "1.998" })
    );
  };

  var Bomb = function Bomb() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", enableBackground: "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#d3976e", d: "m13.805 22.549c-4.364-4.432-5.766-8.101-4.163-10.905 3.149-5.517 18.02-5.485 30.411-2.653l-.429 1.826c-11.626-2.655-25.763-2.743-28.328 1.748-1.418 2.483 1.321 6.088 3.869 8.676l-1.36 1.308" }),
      _react2["default"].createElement(
        "g",
        { fill: "#ffce31" },
        _react2["default"].createElement("path", { d: "m41.25 11.293c-.981.966-1.961 1.935-2.94 2.901-.862.852.475 2.172 1.336 1.32.981-.968 1.961-1.935 2.939-2.902.865-.852-.475-2.171-1.335-1.319" }),
        _react2["default"].createElement("path", { d: "m46.762 8.487c.97-.957 1.94-1.916 2.91-2.874.862-.852-.475-2.171-1.337-1.319-.971.958-1.941 1.916-2.911 2.873-.864.853.473 2.172 1.338 1.32" }),
        _react2["default"].createElement("path", { d: "m45.4 12.612c.981.968 1.961 1.935 2.94 2.901.862.853 2.199-.468 1.337-1.319-.981-.967-1.958-1.935-2.94-2.901-.86-.852-2.2.467-1.337 1.319" }),
        _react2["default"].createElement("path", { d: "m38.31 5.613c.971.958 1.941 1.917 2.91 2.874.865.852 2.203-.467 1.34-1.319-.971-.958-1.941-1.917-2.914-2.874-.862-.853-2.199.468-1.336 1.319" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#ed4c5c" },
        _react2["default"].createElement("path", { d: "m43.04 14.02c0 .962 0 1.926 0 2.889 0 1.203 1.893 1.203 1.893 0 0-.963 0-1.927 0-2.889 0-1.204-1.893-1.204-1.893 0" }),
        _react2["default"].createElement("path", { d: "m43.04 2.903c0 .949 0 1.899 0 2.848 0 1.204 1.893 1.204 1.893 0 0-.949 0-1.899 0-2.848 0-1.204-1.893-1.204-1.893 0" }),
        _react2["default"].createElement("path", { d: "m48.17 10.837c.969 0 1.936 0 2.905 0 1.22 0 1.22-1.867 0-1.867-.97 0-1.937 0-2.905 0-1.219.001-1.219 1.867 0 1.867" })
      ),
      _react2["default"].createElement("path", { fill: "#3e4347", d: "m10.663 24.16l6.01-5.929 3.777 3.731c3.535-2.356 7.796-3.731 12.383-3.731 12.247 0 22.17 9.797 22.17 21.884 0 12.09-9.922 21.886-22.17 21.886-12.243 0-22.17-9.8-22.17-21.886 0-4.528 1.396-8.733 3.779-12.225l-3.779-3.73" })
    );
  };

  var Dog = function Dog() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#f5d1ac", d: "m15.775 52.06c-6.748-4.386-9.438-21.414-7.238-29.17 1.638-5.771 7.832-14.276 13.393-16.495 4.678-1.867 15.462-1.867 20.14 0 5.563 2.218 11.755 10.724 13.393 16.495 2.203 7.754.513 24.783-6.238 29.17-14.233 9.249-19.217 9.25-33.45 0" }),
      _react2["default"].createElement("path", { fill: "#423223", d: "m5.072 24.651c3.614 7.906 4.5 8.216 7.912-1.182 1.819-5.02.545-8.01 2.66-11.25 1.178-1.806 3.906-4.758 3.906-4.758s-21.298 2.258-14.478 17.19" }),
      _react2["default"].createElement("path", { fill: "#947151", d: "m14.18 7.166c-5.378 3.464-16.901 2.09-10.08 17.02 3.614 7.907 4.5 8.216 7.912-1.182 1.819-5.02.545-8.01 2.66-11.25 1.178-1.806 4.879-4.296 4.879-4.296s-1.681-2.674-5.371-.295" }),
      _react2["default"].createElement("path", { fill: "#423223", d: "m58.929 24.646c-3.614 7.906-4.5 8.217-7.912-1.182-1.819-5.02-.545-8.01-2.66-11.25-1.178-1.806-3.906-4.758-3.906-4.758s21.298 2.258 14.478 17.19" }),
      _react2["default"].createElement("path", { fill: "#947151", d: "m49.821 7.161c5.378 3.465 16.9 2.091 10.08 17.02-3.614 7.906-4.5 8.216-7.912-1.182-1.819-5.02-.545-8.01-2.66-11.25-1.178-1.806-4.879-4.296-4.879-4.296s1.681-2.674 5.371-.295" }),
      _react2["default"].createElement("ellipse", { fill: "#fff", cx: "17.749", cy: "30.732", rx: "6", ry: "6.01" }),
      _react2["default"].createElement("ellipse", { fill: "#3e4347", cx: "16.249", cy: "30.732", rx: "4.5", ry: "4.509" }),
      _react2["default"].createElement("ellipse", { fill: "#fff", cx: "46.25", cy: "30.732", rx: "6", ry: "6.01" }),
      _react2["default"].createElement("ellipse", { fill: "#3e4347", cx: "47.751", cy: "30.732", rx: "4.5", ry: "4.509" }),
      _react2["default"].createElement("path", { fill: "#7d644b", d: "m21.689 48.804l4.65 4.869c2.796 2.914 8.525 2.916 11.317 0l4.652-4.869-4.78-5h-11.06l-4.781 5" }),
      _react2["default"].createElement("path", { fill: "#f15a61", d: "m32 39.604c0 0-4.861 6.954-4.281 10.328.818 4.774 7.744 4.774 8.563 0 .579-3.374-4.282-10.328-4.282-10.328" }),
      _react2["default"].createElement("path", { fill: "#ba454b", d: "m32 51.722l1.083-6.728h-2.166l1.083 6.728" }),
      _react2["default"].createElement("path", { fill: "#423223", d: "m26.986 41.515h10.03v4.564h-10.03z" }),
      _react2["default"].createElement("path", { fill: "#947151", d: "m47.835 42.603l-7.142-7.479c-4.295-4.475-13.09-4.479-17.382 0l-7.146 7.479c-2.027 2.121-2.027 5.561 0 7.684 2.024 2.116 5.314 2.116 7.342 0l7.148-7.477c.688-.722 2-.722 2.69 0l7.146 7.477c2.028 2.116 5.316 2.116 7.342 0 2.028-2.124 2.028-5.563.002-7.684" }),
      _react2["default"].createElement(
        "g",
        { fill: "#3e4347" },
        _react2["default"].createElement("path", { d: "m26.1 35.654c0-2.635 2.642-3.143 5.898-3.143 3.259 0 5.898.508 5.898 3.143 0 2.092-4.695 3.949-5.898 3.949-1.206.001-5.898-1.857-5.898-3.949" }),
        _react2["default"].createElement("path", { transform: "matrix(.7061-.7081.7081.7061-20.472 28.681)", d: "m23.605 38.3h1.416v1.415h-1.416z" }),
        _react2["default"].createElement("path", { transform: "matrix(.7061-.7081.7081.7061-23.12 27.805)", d: "m21.22 41.05h1.416v1.415h-1.416z" }),
        _react2["default"].createElement("path", { transform: "matrix(.7061-.7081.7081.7061-22.913 30.32)", d: "m24.355 42.05h1.416v1.415h-1.416z" }),
        _react2["default"].createElement("path", { transform: "matrix(-.7061-.7081.7081-.7061 40.09 94.64)", d: "m38.978 38.3h1.416v1.415h-1.416z" }),
        _react2["default"].createElement("path", { transform: "matrix(-.7061-.7081.7081-.7061 42.2 101.03)", d: "m41.36 41.05h1.416v1.415h-1.416z" }),
        _react2["default"].createElement("path", { transform: "matrix(-.7061-.7081.7081-.7061 36.15 100.52)", d: "m38.23 42.05h1.416v1.415h-1.416z" })
      )
    );
  };

  var HappyCatCrying = function HappyCatCrying() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#dadee0", d: "M60.861,2c1.797,13.431,1.51,24.233-1.166,31.132L34.888,14.677C39.815,9.584,49.818,3.459,60.861,2z" }),
      _react2["default"].createElement("path", { fill: "#f7a4a4", d: "m57.738 32.18l-10.255-13.253c0 0 1.938-7.285 11.616-12.438 2.901 11.656-1.361 25.691-1.361 25.691" }),
      _react2["default"].createElement("path", { fill: "#f78d8d", d: "m53.835 29.16l-6.352-8.209c0 0 2.574-5.02 8.568-8.216-3.497 7.563-2.216 16.425-2.216 16.425" }),
      _react2["default"].createElement("path", { fill: "#dadee0", d: "M3.139,2c-1.797,13.431-1.51,24.233,1.166,31.132l24.808-18.455C24.185,9.584,14.182,3.459,3.139,2z" }),
      _react2["default"].createElement("path", { fill: "#f7a4a4", d: "M6.262,32.177l10.255-13.253c0,0-1.938-7.285-11.616-12.438C2,18.142,6.262,32.177,6.262,32.177z" }),
      _react2["default"].createElement("path", { fill: "#f78d8d", d: "m10.165 29.16l6.352-8.209c0 0-2.574-5.02-8.568-8.216 3.497 7.563 2.216 16.425 2.216 16.425" }),
      _react2["default"].createElement("path", { fill: "#dadee0", d: "m58.2 50.754c.845-.881 1.415-1.633 1.661-2.162 1.63-2.643 2.144-5.342 2.144-5.342l-2 .424c0 0 2.318-2.463 1.691-7.793l-1.945 2.102c0 0 1.945-5.41.254-10.4l-2.152 1.588c0 0 .654-2.031.053-3.422l-.932.729c0 0 1.689-4.665.154-6.625-.855 2.827-1.871 2.784-1.871 2.784s1.242-2.116.273-3c-.986 1.594-1.807.558-1.768.079.055-.637-.193-1.534 2.703-1.957-2.314-1.414-5.05-.43-5.05-.43s.098-1.489 2.123-1.43c-1.871-1.593-4.48-.648-4.48-.648l.006.017c-4.111-3.11-9.646-4.902-17.05-4.902-7.408 0-12.942 1.792-17.05 4.902l.006-.017c0 0-2.609-.944-4.48.648 2.027-.06 2.125 1.43 2.125 1.43s-2.742-.984-5.057.43c2.898.423 2.65 1.32 2.703 1.957.039.479-.779 1.515-1.768-.079-.967.887.275 3 .275 3s-1.016.043-1.871-2.784c-1.537 1.96.154 6.625.154 6.625l-.932-.729c-.602 1.391.053 3.422.053 3.422l-2.154-1.588c-1.691 4.99.254 10.4.254 10.4l-1.945-2.102c-.625 5.33 1.691 7.793 1.691 7.793l-2-.424c0 0 .513 2.694 2.141 5.339.249.534.833 1.304 1.698 2.202.023.024.044.049.067.072v-.004c4.066 4.183 14.213 11.141 26.09 11.141 11.882 0 22.03-6.96 26.09-11.142v.005c.034-.036.065-.072.099-.109" }),
      _react2["default"].createElement(
        "g",
        { fill: "#94989b" },
        _react2["default"].createElement("path", { d: "m37.686 10.763c-1.762-.258-3.65-.401-5.686-.401s-3.926.144-5.689.401c.736 3.856 2.75 6.583 5.688 11.585 2.98-5.079 4.964-7.756 5.687-11.585" }),
        _react2["default"].createElement("path", { d: "m46.813 13.785c-1.908-1.092-4.072-1.944-6.523-2.523.59 2.29 1.857 3.921 3.627 6.935 1.237-2.111 2.216-2.663 2.896-4.412" }),
        _react2["default"].createElement("path", { d: "m23.709 11.263c-2.451.579-4.615 1.431-6.521 2.522.686 1.765 1.666 2.323 2.891 4.411 1.794-3.057 3.048-4.664 3.63-6.933" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#4c5359" },
        _react2["default"].createElement("path", { d: "m36.04 36.518c-.811-.946-3.299-1.018-4.04-1.018s-3.232.072-4.04 1.018c-.576.674-.131 2.344 1.404 3.785.971.91 1.897 1.197 2.639 1.197.744 0 1.67-.287 2.639-1.197 1.535-1.442 1.982-3.112 1.404-3.785" }),
        _react2["default"].createElement("path", { d: "m46.38 43.72c0 5.796-4.732 12.561-14.25 12.561-9.521 0-14.25-6.765-14.25-12.561 0 0 4.729 0 14.25 0 9.518 0 14.25 0 14.25 0" })
      ),
      _react2["default"].createElement("path", { fill: "#363b40", d: "m33.896 45c-.557-.013-1.41.463-1.098 1.73.158.639 1.141 1.409 1.141 2.44 0 2.095-3.62 2.095-3.62 0 0-1.031.982-1.802 1.141-2.44.313-1.268-.542-1.743-1.096-1.73-1.507.036-3.978 1.534-3.978 4.069 0 2.849 2.571 5.158 5.743 5.158s5.742-2.31 5.742-5.158c0-2.535-2.472-4.03-3.975-4.069" }),
      _react2["default"].createElement("path", { fill: "#ff717f", d: "m40 53.839c-2.083-1.74-4.695-2.839-7.872-2.839s-5.79 1.099-7.871 2.839c2.081 1.739 4.694 2.841 7.871 2.841s5.789-1.102 7.872-2.841" }),
      _react2["default"].createElement(
        "g",
        { fill: "#4c5359" },
        _react2["default"].createElement("path", { d: "m32.13 57c-9.743 0-15-6.843-15-13.28v-.72h30v.72c0 6.437-5.257 13.28-15 13.28m-13.476-12.561c.378 5.519 5.073 11.12 13.476 11.12s13.1-5.603 13.475-11.12h-26.951" }),
        _react2["default"].createElement("path", { d: "m49.24 29.467c-1.447-.465-3-.656-4.561-.529-.324.027-.646.078-.971.135.111-.061.219-.129.33-.188 1.189-.611 2.424-1.146 3.738-1.633 1.314-.498 2.699-.924 4.201-1.506-1.467-.668-3.064-.893-4.664-.807-1.6.092-3.203.527-4.654 1.283-1.451.75-2.742 1.818-3.729 3.102-.967 1.285-1.701 2.785-1.797 4.412 1.467-.496 2.74-.928 4.02-1.219 1.268-.299 2.51-.479 3.783-.592 1.271-.107 2.57-.141 3.922-.141 1.355-.004 2.74.025 4.279-.004-1.078-1.126-2.453-1.835-3.893-2.313" }),
        _react2["default"].createElement("path", { d: "m21.34 26.22c-1.449-.756-3.055-1.191-4.652-1.283-1.6-.086-3.199.139-4.664.807 1.5.582 2.887 1.01 4.199 1.506 1.316.486 2.549 1.021 3.738 1.633.111.059.219.127.33.188-.322-.057-.646-.107-.971-.135-1.557-.127-3.113.064-4.561.529-1.439.479-2.814 1.188-3.893 2.314 1.537.029 2.922 0 4.279.004 1.35 0 2.648.033 3.922.141 1.271.113 2.516.293 3.781.592 1.275.291 2.549.723 4.02 1.219-.096-1.627-.83-3.127-1.799-4.412-.985-1.285-2.276-2.353-3.727-3.103" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#65b1ef" },
        _react2["default"].createElement("path", { d: "m59.44 37.873c7.307 7.68-2.621 18.12-9.93 10.438-5.336-5.611-5.578-16.301-5.578-16.301s10.174.256 15.508 5.863" }),
        _react2["default"].createElement("path", { d: "m14.487 48.31c-7.304 7.679-17.236-2.758-9.927-10.438 5.336-5.607 15.508-5.863 15.508-5.863s-.245 10.693-5.581 16.301" })
      )
    );
  };

  var HappyCatHeart = function HappyCatHeart() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#dadee0", d: "M60.861,2c1.797,13.431,1.51,24.233-1.166,31.132L34.888,14.677C39.815,9.584,49.818,3.459,60.861,2z" }),
      _react2["default"].createElement("path", { fill: "#f7a4a4", d: "m57.738 32.18l-10.255-13.253c0 0 1.938-7.285 11.616-12.438 2.901 11.656-1.361 25.691-1.361 25.691" }),
      _react2["default"].createElement("path", { fill: "#f78d8d", d: "m53.835 29.16l-6.352-8.209c0 0 2.574-5.02 8.568-8.216-3.497 7.563-2.216 16.425-2.216 16.425" }),
      _react2["default"].createElement("path", { fill: "#dadee0", d: "M3.139,2c-1.797,13.431-1.51,24.233,1.166,31.132l24.808-18.455C24.185,9.584,14.182,3.459,3.139,2z" }),
      _react2["default"].createElement("path", { fill: "#f7a4a4", d: "M6.262,32.177l10.255-13.253c0,0-1.938-7.285-11.616-12.438C2,18.142,6.262,32.177,6.262,32.177z" }),
      _react2["default"].createElement("path", { fill: "#f78d8d", d: "m10.165 29.16l6.352-8.209c0 0-2.574-5.02-8.568-8.216 3.497 7.563 2.216 16.425 2.216 16.425" }),
      _react2["default"].createElement("path", { fill: "#dadee0", d: "m58.2 50.754c.845-.881 1.415-1.633 1.661-2.162 1.63-2.643 2.144-5.342 2.144-5.342l-2 .424c0 0 2.318-2.463 1.691-7.793l-1.945 2.102c0 0 1.945-5.41.254-10.4l-2.152 1.588c0 0 .654-2.031.053-3.422l-.932.729c0 0 1.689-4.665.154-6.625-.855 2.827-1.871 2.784-1.871 2.784s1.242-2.116.273-3c-.986 1.594-1.807.558-1.768.079.055-.637-.193-1.534 2.703-1.957-2.314-1.414-5.05-.43-5.05-.43s.098-1.489 2.123-1.43c-1.871-1.593-4.48-.648-4.48-.648l.006.017c-4.111-3.11-9.646-4.902-17.05-4.902-7.408 0-12.942 1.792-17.05 4.902l.006-.017c0 0-2.609-.944-4.48.648 2.027-.06 2.125 1.43 2.125 1.43s-2.742-.984-5.057.43c2.898.423 2.65 1.32 2.703 1.957.039.479-.779 1.515-1.768-.079-.967.887.275 3 .275 3s-1.016.043-1.871-2.784c-1.537 1.96.154 6.625.154 6.625l-.932-.729c-.602 1.391.053 3.422.053 3.422l-2.154-1.588c-1.691 4.99.254 10.4.254 10.4l-1.945-2.102c-.625 5.33 1.691 7.793 1.691 7.793l-2-.424c0 0 .513 2.694 2.141 5.339.249.534.833 1.304 1.698 2.202.023.024.044.049.067.072v-.004c4.066 4.183 14.213 11.141 26.09 11.141 11.882 0 22.03-6.96 26.09-11.142v.005c.034-.036.065-.072.099-.109" }),
      _react2["default"].createElement(
        "g",
        { fill: "#4c5359" },
        _react2["default"].createElement("path", { d: "m36.04 38.767c-.811-.945-3.299-1.018-4.04-1.018-.742 0-3.232.072-4.04 1.018-.576.674-.131 2.344 1.406 3.785.969.91 1.895 1.197 2.637 1.197.744 0 1.67-.287 2.639-1.197 1.535-1.442 1.982-3.112 1.404-3.785" }),
        _react2["default"].createElement("path", { d: "m43.743 45.861c0 4.74-3.9 10.275-11.743 10.275-7.845 0-11.743-5.535-11.743-10.275 0 0 3.898 0 11.743 0 7.843 0 11.743 0 11.743 0" })
      ),
      _react2["default"].createElement("path", { fill: "#ff717f", d: "m32 51.38c-4.539 0-5.834 3.345-5.834 3.345.688 1.49 10.98 1.489 11.666 0 0 0-1.295-3.345-5.832-3.345" }),
      _react2["default"].createElement("path", { fill: "#4c5359", d: "m32 56.87c-8.104 0-12.477-5.671-12.477-11.01v-.733h24.953v.733c.001 5.338-4.372 11.01-12.476 11.01m-10.978-10.275c.385 4.396 4.205 8.808 10.978 8.808s10.592-4.412 10.977-8.808h-21.955" }),
      _react2["default"].createElement(
        "g",
        { fill: "#94989b" },
        _react2["default"].createElement("path", { d: "m37.686 10.763c-1.762-.258-3.65-.401-5.686-.401s-3.926.144-5.689.401c.736 3.856 2.75 6.583 5.688 11.585 2.98-5.079 4.964-7.756 5.687-11.585" }),
        _react2["default"].createElement("path", { d: "m46.813 13.785c-1.908-1.092-4.072-1.944-6.523-2.523.59 2.29 1.857 3.921 3.627 6.935 1.237-2.111 2.216-2.663 2.896-4.412" }),
        _react2["default"].createElement("path", { d: "m23.709 11.263c-2.451.579-4.615 1.431-6.521 2.522.686 1.765 1.666 2.323 2.891 4.411 1.794-3.057 3.048-4.664 3.63-6.933" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#f46767" },
        _react2["default"].createElement("path", { d: "m60.864 25.976c-.416-2.124-1.821-3.911-4-4.443-2.381-.581-4.557.255-6.668 2.163-1.185-2.904-2.993-5.061-5.846-6.166-2.923-1.139-5.763-.371-7.555 1.648-1.862 2.104-2.603 5.342-.609 9.58 1.867 3.967 10.233 12.01 10.474 12.242.326-.181 9.643-5.375 11.923-7.928 2.233-2.496 2.696-4.98 2.283-7.096" }),
        _react2["default"].createElement("path", { d: "m27.21 19.18c-1.79-2.02-4.632-2.787-7.554-1.648-2.854 1.105-4.663 3.262-5.849 6.166-2.112-1.91-4.289-2.743-6.668-2.162-2.179.531-3.587 2.318-4 4.442-.412 2.114.051 4.601 2.281 7.098 2.284 2.55 11.602 7.745 11.927 7.926.24-.232 8.606-8.275 10.474-12.242 1.992-4.237 1.25-7.477-.61-9.58" })
      )
    );
  };

  var HappyHeart = function HappyHeart() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("circle", { fill: "#ffdd67", cx: "32", cy: "31.999", r: "30" }),
      _react2["default"].createElement("path", { fill: "#664e27", d: "m48 37.499c0 6.461-5.314 14-15.998 14-10.689 0-16-7.539-16-14 0 0 5.311 0 16 0 10.684 0 15.998 0 15.998 0" }),
      _react2["default"].createElement("path", { fill: "#fff", d: "m16.92 37.499h30.16v5.6h-30.16z" }),
      _react2["default"].createElement("path", { fill: "#664e27", d: "m32 52.5c-11.04 0-17-7.729-17-15v-1h33.998v1c0 7.272-5.957 15-16.998 15m-14.955-14c.523 5.99 5.727 12 14.955 12 9.227 0 14.432-6.01 14.955-12h-29.91" }),
      _react2["default"].createElement(
        "g",
        { fill: "#f46767" },
        _react2["default"].createElement("path", { d: "m61.848 13.22c-.463-2.655-2.031-4.89-4.463-5.553-2.654-.728-5.082.315-7.438 2.703-1.32-3.63-3.338-6.326-6.52-7.708-3.259-1.424-6.427-.466-8.425 2.061-2.076 2.628-2.902 6.677-.68 11.974 2.082 4.959 11.412 15.01 11.682 15.303.363-.226 10.754-6.72 13.299-9.909 2.49-3.12 3.01-6.227 2.545-8.871" }),
        _react2["default"].createElement("path", { d: "m29 4.723c-1.996-2.526-5.166-3.484-8.426-2.062-3.184 1.382-5.201 4.078-6.523 7.708-2.355-2.387-4.783-3.43-7.438-2.703-2.43.663-4 2.898-4.463 5.553-.459 2.644.057 5.751 2.545 8.872 2.547 3.189 12.94 9.683 13.303 9.909.268-.291 9.6-10.344 11.682-15.303 2.222-5.297 1.396-9.346-.68-11.974" })
      )
    );
  };

  var Happy = function Happy() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("circle", { fill: "#ffdd67", cx: "32", cy: "32", r: "30" }),
      _react2["default"].createElement("path", { fill: "#664e27", d: "m51 33.32c0 8.05-6.311 17.445-19 17.445-12.695 0-19-9.395-19-17.445 0 0 6.305 0 19 0 12.689 0 19 0 19 0" }),
      _react2["default"].createElement("path", { fill: "#4c3526", d: "m34.1 38.805c-.66-.016-1.676.574-1.303 2.143.186.791 1.355 1.746 1.355 3.02 0 2.594-4.305 2.594-4.305 0 0-1.277 1.17-2.232 1.357-3.02.371-1.568-.645-2.158-1.305-2.143-1.791.045-4.729 1.9-4.729 5.04 0 3.527 3.059 6.389 6.828 6.389s6.828-2.861 6.828-6.389c.002-3.139-2.937-4.994-4.726-5.04" }),
      _react2["default"].createElement("path", { fill: "#ff717f", d: "m41.1 49.02c-2.406-1.408-5.43-2.297-9.104-2.297s-6.697.889-9.105 2.297c2.408 1.41 5.432 2.301 9.105 2.301s6.697-.891 9.104-2.301" }),
      _react2["default"].createElement("path", { fill: "#fff", d: "m13 33h38v5h-38z" }),
      _react2["default"].createElement(
        "g",
        { fill: "#664e27" },
        _react2["default"].createElement("path", { d: "m32 51.764c-12.992 0-20-9.504-20-18.445v-1h40v1c0 8.941-7.01 18.445-20 18.445m-17.969-17.446c.504 7.664 6.766 15.446 17.969 15.446s17.463-7.781 17.967-15.445h-35.936z" }),
        _react2["default"].createElement("path", { d: "m48.24 22.14c-1.447-.465-3-.657-4.561-.529-.324.026-.646.077-.971.133.111-.06.219-.128.33-.186 1.189-.611 2.424-1.147 3.738-1.633 1.314-.499 2.699-.925 4.201-1.506-1.467-.668-3.064-.893-4.664-.807-1.6.092-3.203.527-4.654 1.282-1.451.751-2.742 1.818-3.729 3.103-.967 1.285-1.701 2.785-1.797 4.412 1.467-.496 2.74-.929 4.02-1.219 1.268-.299 2.51-.479 3.783-.592 1.271-.107 2.57-.141 3.922-.141 1.355-.004 2.74.025 4.279-.004-1.078-1.126-2.453-1.835-3.893-2.313" }),
        _react2["default"].createElement("path", { d: "m22.34 18.893c-1.449-.755-3.055-1.19-4.652-1.282-1.6-.086-3.199.139-4.664.807 1.5.581 2.887 1.01 4.199 1.506 1.316.485 2.549 1.021 3.738 1.633.111.058.219.126.33.186-.322-.057-.646-.107-.971-.133-1.557-.128-3.113.064-4.561.529-1.439.479-2.814 1.188-3.893 2.314 1.537.029 2.922 0 4.279.004 1.35 0 2.648.033 3.922.141 1.271.112 2.516.293 3.781.592 1.275.29 2.549.723 4.02 1.219-.096-1.627-.83-3.127-1.799-4.412-.985-1.286-2.276-2.353-3.727-3.104" })
      )
    );
  };

  var HeartSparkle = function HeartSparkle() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#ff4085", d: "m61.07 18.16c-6.396-16.918-27.15-9.328-29.07-.879-2.642-9-22.89-15.72-29.07.891-6.881 18.502 26.67 35.11 29.07 37.828 2.397-2.162 35.952-19.639 29.07-37.84" }),
      _react2["default"].createElement(
        "g",
        { fill: "#fff" },
        _react2["default"].createElement("path", { d: "m53.831 13.275l-2.641-5.275-2.635 5.275-5.275 2.637 5.275 2.636 2.635 5.276 2.641-5.276 5.269-2.636z" }),
        _react2["default"].createElement("path", { d: "m16.252 26.753l-3.562-7.128-3.566 7.128-7.124 3.557 7.124 3.567 3.566 7.133 3.562-7.133 7.127-3.567z" }),
        _react2["default"].createElement("path", { d: "m48.725 42.44l-2.873-5.752-2.877 5.752-5.745 2.87 5.745 2.87 2.877 5.752 2.873-5.752 5.745-2.87z" }),
        _react2["default"].createElement("path", { transform: "matrix(.7071-.7071.7071.7071-8.196 21.52)", d: "m19.758 18.532h4.243v4.243h-4.243z" }),
        _react2["default"].createElement("path", { transform: "matrix(.7071-.7071.7071.7071-21.807 30.472)", d: "m24.11 39.792h3.536v3.536h-3.536z" }),
        _react2["default"].createElement("path", { transform: "matrix(.7071-.7071.7071.7071-6.931 37.899)", d: "m40.16 25.19h4.243v4.243h-4.243z" })
      )
    );
  };

  var Heart = function Heart() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#C9E9EF", d: "m61.07 18.16c-6.395-16.918-27.15-9.328-29.07-.879-2.64-9-22.89-15.721-29.07.891-6.881 18.502 26.67 35.11 29.07 37.828 2.397-2.162 35.952-19.639 29.07-37.84" })
    );
  };

  var Kiss = function Kiss() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("circle", { fill: "#ffdd67", cx: "32", cy: "32", r: "29.999" }),
      _react2["default"].createElement(
        "g",
        { fill: "#664e27" },
        _react2["default"].createElement("path", { d: "m37.803 39.4c-1.192-1.047-5.803 1.886-5.803 5.101s4.611 6.148 5.803 5.101c.968-.851-1.803-1.887-1.803-5.101s2.771-4.25 1.803-5.101" }),
        _react2["default"].createElement("path", { d: "m37.832 40.25c-.029-.247-.11-.462-.23-.571-.123-.104-.247-.139-.419-.163-.325-.064-.744-.056-1.161-.071-.844-.022-1.75-.068-2.66-.249-.908-.177-1.834-.487-2.67-1-.824-.517-1.576-1.252-1.895-2.192.918.343 1.703.57 2.512.747.802.182 1.606.32 2.441.487.833.169 1.693.345 2.592.676.447.173.912.384 1.354.774.206.203.419.502.43.826.02.319-.132.566-.294.739" }),
        _react2["default"].createElement("path", { d: "m37.832 48.75c.162.173.313.42.294.739-.011.324-.224.623-.43.826-.442.391-.907.602-1.354.774-.898.331-1.759.507-2.592.676-.835.167-1.64.306-2.441.487-.809.178-1.594.405-2.512.748.318-.94 1.07-1.676 1.895-2.192.836-.516 1.762-.826 2.67-1 .91-.181 1.816-.227 2.66-.249.417-.016.836-.007 1.161-.071.172-.024.296-.06.419-.163.12-.11.201-.325.23-.572" }),
        _react2["default"].createElement("path", { d: "m35 29.8c0 0 7.914 1.603 14 4.2 0 0-4.67-9.189-14-4.2" }),
        _react2["default"].createElement("path", { d: "m35 29.8c0 0 7.914-4.328 14-6.925 0 0-3.457 9.08-14 6.925" }),
        _react2["default"].createElement("circle", { cx: "22.252", cy: "28.592", r: "4.5" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#f46767" },
        _react2["default"].createElement("path", { d: "m50.854 57.998l.007.001-.006-.004-.005.005z" }),
        _react2["default"].createElement("path", { d: "m61.37 42.568c-.908-1.805-2.732-2.988-4.986-2.834-2.332.161-4.117 1.413-5.586 3.47-1.484-2.043-3.281-3.284-5.613-3.423-2.254-.138-4.068 1.063-4.963 2.876-.902 1.836-.943 4.239.91 6.968 1.822 2.685 9.482 8.193 9.727 8.37.244-.18 7.859-5.755 9.66-8.449 1.832-2.741 1.771-5.148.851-6.978" })
      ),
      _react2["default"].createElement(
        "g",
        { fill: "#917524" },
        _react2["default"].createElement("path", { d: "m51.2 21.708c-3.234-2.732-7.523-3.881-11.691-3.133-.58.113-1.09-2.02-.387-2.156 4.811-.863 9.758.461 13.492 3.615.541.468-.969 2.06-1.414 1.674" }),
        _react2["default"].createElement("path", { d: "m24.488 13.708c-4.168-.748-8.455.4-11.691 3.133-.443.389-1.955-1.205-1.412-1.674 3.732-3.152 8.68-4.479 13.492-3.615.703.135.191 2.27-.389 2.156" })
      )
    );
  };

  var Lips = function Lips() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#ed4c5c", d: "m32 22.519c-6.312 0-30 10.183-30 10.183 5.631 6.885 3.646 16.798 30 16.798 23.688 0 23.18-8.456 30-16.799 0 0-23.688-10.182-30-10.182" }),
      _react2["default"].createElement("path", { fill: "#60452b", d: "M32,20.627L5.857,31.174C12.654,39.485,20.352,36.29,32,36.29c11.609,0,19.213,3.148,26.143-5.116 L32,20.627z" }),
      _react2["default"].createElement("path", { fill: "#fff", d: "m58.47 30.959c0-1.719-11.191-9.924-26.466-9.924s-26.466 8.205-26.466 9.924h52.932" }),
      _react2["default"].createElement("path", { fill: "#ed4c5c", d: "m44.38 14.871c-2.529-.767-6.226-.398-11.11 1.602-.418.154-.845.319-1.271.5-.427-.181-.854-.346-1.271-.5-4.884-2-8.58-2.368-11.11-1.602-7.421 2.204-17.621 17.83-17.621 17.83 6.272.751 14.51-8.531 30-8.531s23.728 9.282 30 8.531c0 0-10.2-15.626-17.619-17.83" })
    );
  };

  var Nuclear = function Nuclear() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement(
        "g",
        { fill: "#eda454" },
        _react2["default"].createElement("path", { d: "m38.431 25.25c1.253-.941 2.299-2.149 3.057-3.543-2.688-1.888-5.959-2.997-9.487-2.997s-6.8 1.108-9.488 2.997c.758 1.394 1.805 2.602 3.057 3.543 1.857-1.194 4.063-1.889 6.432-1.889s4.572.695 6.429 1.889" }),
        _react2["default"].createElement("path", { d: "m48.535 34.11c-1.587-.01-3.154.326-4.587.979.002.096.007.191.007.289 0 4.568-2.535 8.539-6.269 10.572.15 1.572.639 3.105 1.436 4.482 5.594-2.678 9.461-8.412 9.461-15.05 0-.425-.017-.849-.048-1.267" }),
        _react2["default"].createElement("path", { d: "m20.05 35.38c0-.111.005-.221.008-.332-1.437-.637-3-.959-4.589-.936-.031.418-.047.842-.047 1.268 0 6.672 3.9 12.426 9.534 15.09.801-1.373 1.294-2.902 1.451-4.473-3.781-2.02-6.357-6.01-6.357-10.617" }),
        _react2["default"].createElement("path", { d: "m8.815 34.03c5.918-3.435 13.38-1.702 17.13 3.82l2.31-1.342c-.107-.357-.166-.738-.166-1.133 0-1.871 1.303-3.438 3.046-3.834v-2.645c-6.675-.453-11.951-6.1-11.953-13 .001-5.297 3.11-9.855 7.574-11.894-.012.004-.022.008-.034.012.011-.004.022-.01.034-.015-6.701 2.214-11.54 8.554-11.54 16.03 0 0 0 .001 0 .002 0 0 0 .001 0 .001 0 2.256.441 4.409 1.241 6.376-2.076.292-4.132.981-6.06 2.099-6.442 3.741-9.485 11.12-8.04 18.06-.476-4.906 1.898-9.89 6.462-12.539" }),
        _react2["default"].createElement("path", { d: "m61.999 43.3c.058-5.889-2.959-11.636-8.395-14.792-1.927-1.117-3.982-1.807-6.06-2.099.8-1.967 1.241-4.12 1.241-6.376 0 0 0-.001 0-.001 0-.001 0-.002 0-.002 0-7.477-4.839-13.816-11.54-16.03.011.005.022.011.034.016-.012-.003-.023-.008-.034-.012 4.464 2.038 7.573 6.597 7.573 11.894-.001 6.9-5.277 12.547-11.953 13v2.645c1.744.396 3.046 1.963 3.046 3.834 0 .416-.064.816-.183 1.191l2.296 1.332c3.737-5.555 11.224-7.309 17.16-3.865 4.137 2.4 6.474 6.719 6.521 11.158.005.459-.015.918-.059 1.377 0-.002 0-.002 0-.004 0 .002 0 .006 0 .008.228-1.087.343-2.182.354-3.274" }),
        _react2["default"].createElement("path", { d: "m42.36 56.35c-4.167-2.418-6.509-6.783-6.523-11.256-.006-1.924.419-3.867 1.313-5.684l-2.304-1.336c-.714.762-1.726 1.238-2.85 1.238-1.146 0-2.176-.494-2.892-1.283l-2.287 1.328c3.01 6.05.791 13.525-5.186 16.992-4.564 2.65-10.05 2.223-14.04-.645 5.259 4.727 13.14 5.768 19.583 2.029 1.915-1.111 3.529-2.545 4.815-4.193 1.287 1.65 2.902 3.086 4.819 4.199 6.441 3.736 14.324 2.695 19.583-2.031-.009.008-.018.012-.025.018.008-.006.017-.014.025-.021-3.987 2.867-9.469 3.295-14.04.645" })
      )
    );
  };

  var Poop = function Poop() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#89664c", d: "M32.206,36.887C15.146,36.887,2,29.789,2,45.728C2,58.456,18.892,62,31.789,62 C46.773,62,62,58.456,62,45.728C62,29.789,49.839,36.887,32.206,36.887z" }),
      _react2["default"].createElement("path", { fill: "#9b7861", d: "m31.729 20.879c-9.553 0-24.502 1.116-24.502 12.621 0 16.826 49.545 16.826 49.545 0 0-11.505-14.888-12.621-25.04-12.621" }),
      _react2["default"].createElement("path", { fill: "#a88673", d: "m49.01 16.7c-4.658-10.34-26.367.306-22.638-12.226.562-1.888.539-2.713-.896-2.414-7.812 1.621-13.437 9.666-11.457 16.319 6.376 21.433 41.28 12.273 34.991-1.679" }),
      _react2["default"].createElement("path", { fill: "#fff", d: "m28.847 34.32c0 3.98-3.226 7.205-7.202 7.205-3.979 0-7.205-3.225-7.205-7.205 0-3.974 3.226-7.202 7.205-7.202 3.976 0 7.202 3.229 7.202 7.202" }),
      _react2["default"].createElement("circle", { cx: "23.633", cy: "34.32", r: "3.604" }),
      _react2["default"].createElement("path", { fill: "#fff", d: "m49.562 34.32c0 3.98-3.229 7.205-7.204 7.205-3.98 0-7.203-3.225-7.203-7.205 0-3.974 3.223-7.202 7.203-7.202 3.975 0 7.204 3.229 7.204 7.202" }),
      _react2["default"].createElement("circle", { cx: "40.37", cy: "34.32", r: "3.603" }),
      _react2["default"].createElement("path", { d: "m38 50.632c0 3.316-2.688 6-5.999 6-3.316 0-6-2.684-6-6 0-3.311 2.685-6 6-6 3.312 0 5.999 2.689 5.999 6" })
    );
  };

  var Smile = function Smile() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("circle", { fill: "#ffdd67", cx: "32", cy: "32", r: "30" }),
      _react2["default"].createElement(
        "g",
        { fill: "#664e27" },
        _react2["default"].createElement("path", { d: "m17.316 40.949c2.475 1.455 4.865 2.338 7.314 2.924 2.439.586 4.9.836 7.369.84 2.471-.01 4.93-.26 7.367-.846 2.449-.586 4.838-1.467 7.316-2.918-1.061 2.717-3.416 4.854-6.04 6.221-2.654 1.379-5.662 2.043-8.641 2.041-2.979-.004-5.984-.668-8.637-2.047-2.625-1.367-4.98-3.502-6.05-6.215" }),
        _react2["default"].createElement("circle", { cx: "20.502", cy: "26.592", r: "4.5" }),
        _react2["default"].createElement("circle", { cx: "43.502", cy: "26.592", r: "4.5" })
      )
    );
  };

  var Star = function Star() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#ffce31", d: "M61.998,25.154H39.08L31.998,3l-7.082,22.154H1.998l18.541,13.693L13.457,61l18.541-13.691L50.539,61 l-7.082-22.152L61.998,25.154z" })
    );
  };

  var VideoGames = function VideoGames() {
    return _react2["default"].createElement(
      "svg",
      { viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64" },
      _react2["default"].createElement("path", { fill: "#242a33", d: "m56.933 48.14c-.711-3.02-3.235-9.02-4.797-11.799-2.293-4.083-37.983-4.081-40.28 0-1.561 2.779-4.087 8.784-4.797 11.799-.381 1.617 1.109 9.305 1.109 9.305.418 2.508 2.845 4.561 5.393 4.561h36.84c2.548 0 4.975-2.053 5.394-4.561-.001-.001 1.537-7.59 1.134-9.305" }),
      _react2["default"].createElement("path", { fill: "#a1acb3", d: "m56.13 46.41c-.475.82-1.234 1.548-2.231 1.98-.495.219-1.052.342-1.616.374l-1.563.085c-2.081.094-4.163.182-6.244.235-4.163.131-8.327.165-12.489.183-4.163-.016-8.326-.05-12.488-.18-2.082-.055-4.164-.143-6.245-.236l-1.571-.086c-.543-.031-1.119-.155-1.608-.373-.997-.434-1.756-1.162-2.23-1.982.636.727 1.493 1.293 2.424 1.562.475.13.937.187 1.436.161l1.551-.084c2.081-.095 4.163-.183 6.245-.237 4.163-.13 8.326-.165 12.488-.179 4.162.017 8.326.051 12.489.182 2.081.055 4.163.143 6.244.236l1.559.083c.477.026.959-.031 1.428-.161.928-.27 1.786-.835 2.421-1.563" }),
      _react2["default"].createElement("path", { fill: "#6b7278", d: "m7.841 53.43c.476-.82 1.235-1.547 2.231-1.979.496-.219 1.051-.343 1.616-.374l1.563-.084c2.082-.094 4.163-.182 6.245-.236 4.162-.131 8.326-.166 12.488-.182 4.164.014 8.326.049 12.489.18 2.081.055 4.163.142 6.245.235l1.571.085c.542.031 1.119.156 1.607.375.996.433 1.756 1.16 2.23 1.98-.636-.727-1.494-1.291-2.424-1.561-.475-.129-.938-.188-1.435-.16l-1.551.084c-2.082.094-4.164.182-6.245.236-4.163.13-8.325.164-12.489.179-4.163-.017-8.326-.051-12.488-.181-2.082-.055-4.163-.144-6.245-.237l-1.559-.083c-.477-.027-.958.031-1.427.16-.929.27-1.786.836-2.422 1.563" }),
      _react2["default"].createElement("ellipse", { fill: "#53585b", cx: "36.02", cy: "40.896", rx: "11.888", ry: "4.484" }),
      _react2["default"].createElement("ellipse", { fill: "#676e72", cx: "36.02", cy: "37.907", rx: "10.637", ry: "3.539" }),
      _react2["default"].createElement("ellipse", { fill: "#53585b", cx: "36.02", cy: "35.47", rx: "9.386", ry: "3.067" }),
      _react2["default"].createElement("path", { fill: "#d2cfcf", d: "m39.764 17.13h-7.608v16.946c0 1.855 7.608 1.855 7.608 0v-16.946" }),
      _react2["default"].createElement("ellipse", { fill: "#ed4c5c", cx: "35.959", cy: "12.394", rx: "10.486", ry: "10.393" }),
      _react2["default"].createElement("path", { fill: "#a5000c", d: "m24.13 35.07h-10.17v2.246c1.798 2.184 8.373 2.184 10.17 0v-2.246" }),
      _react2["default"].createElement("ellipse", { fill: "#ed4c5c", cx: "19.05", cy: "35.07", rx: "5.085", ry: "2.246" })
    );
  };

  var EmojiContainer = [_react2["default"].createElement(Heart, null), _react2["default"].createElement(Happy, null), _react2["default"].createElement(Frog, null), _react2["default"].createElement(Bomb, null), _react2["default"].createElement(Dog, null), _react2["default"].createElement(HappyCatCrying, null), _react2["default"].createElement(HappyCatHeart, null), _react2["default"].createElement(HappyHeart, null), _react2["default"].createElement(HeartSparkle, null), _react2["default"].createElement(Kiss, null), _react2["default"].createElement(Lips, null), _react2["default"].createElement(Nuclear, null), _react2["default"].createElement(Poop, null), _react2["default"].createElement(Smile, null), _react2["default"].createElement(Star, null), _react2["default"].createElement(VideoGames, null)];

  exports.EmojiContainer = EmojiContainer;
  var randomEmojiNumber = function randomEmojiNumber() {
    return Math.floor(Math.random() * EmojiContainer.length);
  };
  exports.randomEmojiNumber = randomEmojiNumber;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _historyLibCreateBrowserHistory = __webpack_require__(22);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(23);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(24);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // import * as crateActions from '../../redux/modules/crates';
  // import {pop1, pop2} from './CrateUtils';

  var _reactHammerjs = __webpack_require__(26);

  var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

  var _utilities = __webpack_require__(8);

  var _Emojis = __webpack_require__(3);

  // <CrateTemplate color={'empty'} crateSize={80} cratePreview={Emojis[store.emoji]} pop={true}/>

  var CrateTemplate = (function (_Component) {
    _inherits(CrateTemplate, _Component);

    function CrateTemplate(props) {
      var _this = this;

      _classCallCheck(this, CrateTemplate);

      _get(Object.getPrototypeOf(CrateTemplate.prototype), 'constructor', this).call(this, props);

      this.pressCrate = function () {
        _this.setState({ isPressed: true });
      };

      this.setupPop = function () {
        //TODO: let dev select what type of pop to use
        _this.setState({ isPressed: false });
        // if(this.state.isPressed && this.props.pop === true) {
        //   pop2(this.refs.thisEmptyCrate, eval(this.props.color), this.refs.thisCratePreview);
        // }
      };

      this.state = {
        isPressed: false
      };
    }

    _createClass(CrateTemplate, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var crateSize = _props.crateSize;
        var color = _props.color;
        var cratePreview = _props.cratePreview;
        var crateType = _props.crateType;

        var styles = {
          crateSize: {
            width: crateSize
          },
          cratePreview: {
            height: crateSize / 1.7,
            width: crateSize / 1.7,
            borderRadius: '50%',
            background: 'url(' + this.props.cratePreview + ') center',
            backgroundSize: 'cover'

          },
          image: {
            top: crateSize / 3,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: crateSize / 1.7,
            width: crateSize / 1.7,
            padding: '4px',
            borderRadius: '50%',
            position: 'absolute'
          },
          imagePressed: {
            top: crateSize / 1.7,
            transform: 'scale(1, .8) translate(-50%, -50%)'
          },
          shadow: {
            height: crateSize / 1.5,
            borderRadius: crateSize / 5,
            boxShadow: '0px 12px 10px 0px rgba(5,156,150,0.34)',
            position: 'absolute',
            width: '100%',
            top: '31%',
            zIndex: -1
          },
          shadowPressed: {
            height: crateSize / 2.1,
            borderRadius: '50%',
            boxShadow: '0px 11px 10px 0px rgba(5,156,150,0.34)',
            position: 'absolute',
            width: '100%',
            top: '50%',
            zIndex: -1
          },
          pressedMargin: {
            marginTop: crateSize / 3
          }
        };
        return _react2['default'].createElement(
          'div',
          { className: 'CrateTemplate' },
          _react2['default'].createElement(
            'div',
            { className: 'crateImage noTouch', style: (0, _utilities.ifStyle)(styles.image, this.state.isPressed && styles.imagePressed), ref: 'thisEmptyImage' },
            _react2['default'].createElement(
              'div',
              { className: 'cratePreview', ref: 'thisCratePreview' },
              crateType === 'empty' ? _Emojis.EmojiContainer[this.props.emoji] : _react2['default'].createElement('div', { style: styles.cratePreview })
            )
          ),
          _react2['default'].createElement(
            'div',
            { style: styles.crateSize,
              ref: 'thisEmptyCrate',
              className: 'thisEmptyCrate',
              onMouseDown: this.pressCrate,
              onMouseUp: this.setupPop,
              onTouchStart: this.pressCrate,
              onTouchEnd: this.setupPop },
            _react2['default'].createElement(
              'div',
              { className: 'noTouch' },
              this.state.isPressed ? _react2['default'].createElement(
                'div',
                { className: 'crate1' },
                _react2['default'].createElement(
                  'svg',
                  { viewBox: '0 0 156 128', version: '1.1', style: styles.pressedMargin },
                  _react2['default'].createElement(
                    'g',
                    { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                    _react2['default'].createElement('path', { id: 'crate-bottom-pressed', fill: eval(color).darkColor, d: 'M0.0387363138,53.1420234 C0.0387363138,33.0095093 4.40172453,23.7783713 4.40172453,23.7783713 C8.3778203,9.54136997 22.420139,3.1744319 35.8499801,9.33898447 C35.8499801,9.33898447 65.5461533,24.5105362 78.306673,24.5105362 C92.7046443,24.5105362 122.360906,9.28610109 122.360906,9.28610109 C135.76712,3.05295957 149.523301,9.63873233 152.692555,24.0832809 C152.692555,24.0832809 156.57461,35.2669851 156.574609,53.1420234 C156.574607,71.0170617 154.896172,90.5357711 154.896172,90.5357711 C153.873561,105.286307 141.319279,119.781221 126.806179,122.523472 C126.806179,122.523472 109.207247,127.643024 78.306673,127.643024 C47.4060993,127.643024 29.5884618,122.504433 29.5884618,122.504433 C15.0956454,119.599165 2.50140433,105.279136 1.55847323,90.5253465 C1.55847323,90.5253465 0.0387363138,73.2745376 0.0387363138,53.1420234 Z' }),
                    _react2['default'].createElement('path', { id: 'crate-top-pressed', fill: eval(color).lightColor, d: 'M4.7744506,46.1259538 C4.7744506,39.0444277 5.96801792,24.8770004 5.96801792,24.8770004 C7.04101595,10.1321596 19.8689786,-0.901461016 34.6155842,0.179360544 C34.6155842,0.179360544 63.691099,2.60355121 78.1957364,2.60355121 C92.7003738,2.60355121 121.798558,0.177746943 121.798558,0.177746943 C136.534654,-0.926072811 149.657527,10.1009533 150.981888,24.8428406 C150.981888,24.8428406 152.274144,34.7384112 152.274144,46.1259534 C152.274144,57.5134956 150.979238,67.4430821 150.979238,67.4430821 C149.59929,82.1540258 136.650418,96.0498289 122.02826,98.1680952 C122.02826,98.1680952 106.576587,101.73023 78.1957385,101.730231 C49.8148903,101.730232 34.3632146,98.1680957 34.3632146,98.1680957 C19.7539785,95.910083 6.89580173,82.1363981 5.78409212,67.3988071 C5.78409212,67.3988071 4.7744506,59.4351654 4.7744506,46.1259538 Z' })
                  )
                ),
                _react2['default'].createElement('div', { className: 'shadow', style: styles.shadowPressed })
              ) : _react2['default'].createElement(
                'div',
                { className: 'crate0' },
                _react2['default'].createElement(
                  'svg',
                  { viewBox: '0 0 157 164', version: '1.1' },
                  _react2['default'].createElement(
                    'g',
                    { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                    _react2['default'].createElement('rect', { id: 'crate-bottom', fill: eval(color).darkColor, x: '0', y: '36.2828685', width: '157', height: '126.717131', rx: '26' }),
                    _react2['default'].createElement('rect', { id: 'crate-top', fill: eval(color).lightColor, x: '0', y: '0', width: '157', height: '107.641434', rx: '26' })
                  )
                ),
                _react2['default'].createElement('div', { className: 'shadow', style: styles.shadow })
              )
            )
          )
        );
      }
    }]);

    return CrateTemplate;
  })(_react.Component);

  var green = {
    lightColor: '#49FFCC',
    darkColor: '#1ADEDB'
  };
  var yellow = {
    lightColor: '#FCE973',
    darkColor: '#FFC868'
  };
  var orange = {
    lightColor: '#FD9C44',
    darkColor: '#F67A1B'
  };
  var blue = {
    lightColor: '#57E3FD',
    darkColor: '#2BBFD9'
  };
  var pink = {
    lightColor: '#FB70AF',
    darkColor: '#EE3B76'
  };
  var purple = {
    lightColor: '#FF5DFA',
    darkColor: '#C746E9'
  };
  var empty = {
    lightColor: '#E9FAFD',
    darkColor: '#CBEBF0'
  };
  var emptyAlt = {
    lightColor: '#CBEBF0'
  };
  var productHunt = {
    lightColor: '#DA552F',
    darkColor: '#CC4124'
  };

  exports['default'] = CrateTemplate;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Emojis = __webpack_require__(3);

  var _CrateTemplate = __webpack_require__(6);

  var _CrateTemplate2 = _interopRequireDefault(_CrateTemplate);

  var Empty = (function (_Component) {
    _inherits(Empty, _Component);

    function Empty(props) {
      var _this = this;

      _classCallCheck(this, Empty);

      _get(Object.getPrototypeOf(Empty.prototype), 'constructor', this).call(this, props);

      this.addEmojiNumber = function () {
        _this.setState({ emojiNumber: (0, _Emojis.randomEmojiNumber)() });
      };

      this.state = {
        emojiNumber: 0
      };
    }

    _createClass(Empty, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'empty', style: { height: '100%', position: 'relative' } },
          _react2['default'].createElement(
            'div',
            { className: 'emptyCrate',
              style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
              onMouseUp: this.addEmojiNumber,
              onTouchEnd: this.addEmojiNumber },
            _react2['default'].createElement(_CrateTemplate2['default'], { color: 'empty', crateSize: 80, cratePreview: 'NOTHING_YET', pop: true, crateType: 'empty', emoji: this.state.emojiNumber })
          )
        );
      }
    }]);

    return Empty;
  })(_react.Component);

  exports['default'] = Empty;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  //UTILITIES!

  // 1. ifStyle(styles)
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.ifStyle = ifStyle;

  function ifStyle() {
    var res = {};
    for (var i = 0; i < arguments.length; ++i) {
      if (arguments[i]) {
        Object.assign(res, arguments[i]);
      }
    }
    return res;
  }

  /* Use this function for if/else style classes. The style objects will combine if conditions are met. Use this instead of having multiple .classes

  Example:
  const styles = {
    baseStyle: {
      backgroundColor: red
    }
    ifSelected: {
      border: '1px solid blue'
    }
  }

  <div className="component" style={ifStyle(
    styles.baseStyle,
    this.state.isSelected && styles.ifSelected
  )}

  IF this.state.isSelected === true, DOM shows:
  component {
    background-color: red;
    border: 1px solid blue;
  }
  ELSE
  component {
    background-color: red;
  }

  */

  // 2. flattenObject(object)
  var flattenObject = function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] == 'object') {
        var flatObject = flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };

  exports.flattenObject = flattenObject;
  /* Use this function to flatten an object into a flat 1lvl hierarchy.

  Example:
  var one = {
    0: {
      id: 1,
      color: red
    }
  }

  const flatOne = flattenObject(one);

  console.log(flatOne);

  Object {
    id: 1,
    color: red
  }

  */

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  var _Navigation = __webpack_require__(11);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var _Link = __webpack_require__(10);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'ul',
      { className: 'Navigation', role: 'menu' },
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/', onClick: _Link2['default'].handleClick },
          'Home'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
          'About'
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Tinycrate is a loot messenger.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'It\'s going to change your life.'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'p',
            null,
            'Contact us: tinycratehq@gmail.com'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsEmptyEmpty = __webpack_require__(7);

  var _componentsEmptyEmpty2 = _interopRequireDefault(_componentsEmptyEmpty);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var empty = _react2['default'].createElement(_componentsEmptyEmpty2['default'], null);

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { style: { textAlign: 'center' } },
            _react2['default'].createElement(
              'h1',
              null,
              'Tinycrate is coming soon.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'theseCratesYo', style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } },
            empty
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #FEFDFA;\n  color: #333;\n  font-family: 'Varela','Helvetica',sans-serif;\n}\n\nhtml .logoType, body .logoType {\n  color: #CFDBDC;\n  display: inline;\n}\n\nhtml // Use this to center and div within a div\n  .actionButton, body // Use this to center and div within a div\n  .actionButton {\n  // position: relative;\n  height: 100%;\n  position: absolute;\n  top: -2em;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  background-color: #fff;\n  -webkit-box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.21);\n          box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.21);\n}\n\nhtml // Use this to center and div within a div\n  .actionButton .actionIcon, body // Use this to center and div within a div\n  .actionButton .actionIcon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nhtml .Absolute-Center, body .Absolute-Center {\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n  width: 200px;\n  height: 300px;\n  text-align: center;\n}\n\nhtml .container-fluid, body .container-fluid {}\n\nhtml .container-fluid.body-content, body .container-fluid.body-content {\n  position: absolute;\n  top: 200px;\n  bottom: 50px;\n  right: 0;\n  left: 0;\n  overflow-y: auto;\n  background-color: $backgroundWhite;\n}\n\nhtml .container-fluid.body-content-home, body .container-fluid.body-content-home {\n  position: absolute;\n  top: 65px;\n  bottom: 50px;\n  right: 0;\n  left: 0;\n  overflow-y: auto;\n  background-color: $backgroundWhite;\n}\n\nhtml .container-fluid.body-content-create, body .container-fluid.body-content-create {\n  position: absolute;\n  top: 115px;\n  bottom: 50px;\n  right: 0;\n  left: 0;\n  overflow-y: auto;\n  background-color: $backgroundWhite;\n}\n\nhtml header, body header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: #293640;\n  height: 200px;\n}\n\nhtml footer, body footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #46535d;\n  height: 100px;\n}\n\nhtml .downArrow, body .downArrow {\n  width: 25px;\n}\n\nhtml .pulse, body .pulse {\n  -webkit-animation-name: pulse;\n  -o-animation-name: pulse;\n     animation-name: pulse;\n}\n\nhtml .outerEmpty, body .outerEmpty {\n  position: relative;\n  height: 100%;\n}\n\nhtml .outerEmpty .innerEmpty, body .outerEmpty .innerEmpty {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nhtml .outerEmpty .innerEmpty .emptystate, body .outerEmpty .innerEmpty .emptystate {\n  height: 150px;\n}\n\nhtml .createHeader, body .createHeader {\n  padding: 0;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\nhtml input[role=\"combobox\"], body input[role=\"combobox\"]{\n  background-color: transparent;\n  border: 0.1rem solid #d1d1d1;\n  border-radius: 0.4rem;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  height: 3.8rem;\n  padding: 0.6rem 1rem;\n  width: 100%;\n  float:left;\n}\n\nhtml .labelInput, body .labelInput {\n  padding: 20px 0 0;\n}\n\nhtml .footerCreate, body .footerCreate {\n  margin-bottom: 15px;\n}\n\nhtml .toForm, body .toForm {\n  padding-left: 10px;\n  margin-bottom: 50px !important;\n}\n\nhtml .createContainerImg, body .createContainerImg {\n  height: 50% !important;\n}\n\nhtml .preview-img, body .preview-img {\n  height: 50px;\n}\n\nhtml .crate-holder, body .crate-holder {\n  width: 80px;\n  height: 100%;\n}\n\nhtml .hide, body .hide {\n  visibility: hidden;\n}\n\nhtml .noTouch, body .noTouch {\n  pointer-events: none;\n}\n\nhtml .emojiPressed, body .emojiPressed {\n  margin-top: 23px;\n  -webkit-transform:  scale(1, .8) translate(-50%, -50%) !important;\n      -ms-transform:  scale(1, .8) translate(-50%, -50%) !important;\n       -o-transform:  scale(1, .8) translate(-50%, -50%) !important;\n          transform:  scale(1, .8) translate(-50%, -50%) !important;\n}\n\nhtml .scroll, body .scroll {\n  overflow-y: scroll;\n  overflow-x: none;\n  // z-index: 11;\n  // width: 100%;\n  // position: absolute;\n  -webkit-overflow-scrolling: touch;\n  max-height: 400px;\n  // margin-bottom: -1px;\n  // margin-top: -1px;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Navigation-item {\n  padding: 0 2em;\n}\n\n.Navigation-link {\n  padding: 0.5em 1em;\n  color: #cfdbdc;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #cfdbdc;\n  color: #333;\n}\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("react-hammerjs");

/***/ }
/******/ ]);