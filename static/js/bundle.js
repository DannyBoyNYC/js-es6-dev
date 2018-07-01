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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// // 1: EXTENDING A CLASS
var Recipe = function Recipe() {
    _classCallCheck(this, Recipe);
};

var Lasagna = function (_Recipe) {
    _inherits(Lasagna, _Recipe);

    function Lasagna() {
        _classCallCheck(this, Lasagna);

        return _possibleConstructorReturn(this, (Lasagna.__proto__ || Object.getPrototypeOf(Lasagna)).apply(this, arguments));
    }

    return Lasagna;
}(Recipe);

var Pho = function (_Recipe2) {
    _inherits(Pho, _Recipe2);

    function Pho() {
        _classCallCheck(this, Pho);

        return _possibleConstructorReturn(this, (Pho.__proto__ || Object.getPrototypeOf(Pho)).apply(this, arguments));
    }

    return Pho;
}(Recipe);

var c = new Lasagna();
var d = new Pho();

console.log(c);
console.log(d);

// // 2: INHERITING CONSTRUCTORS
// class Recipe {
//   constructor(cookTime) {
//     this.cookTime = cookTime;
//   }
// }

// class Lasagna extends Recipe {

// }

// class Pho extends Recipe {
//   constructor(cookTime) {
//     super(cookTime)
//   }
// }

// let c = new Pho(120);

// console.log(c.cookTime);


// // 3: INHERITING PROPERTIES
// class Recipe {
//   constructor() {
//       this.soup = false;
//   }
// }

// class Lasagna extends Recipe {

// }

// class Pho extends Recipe {
//   constructor() {
//       super();
//       this.soup = true;
//   }
// }

// let c = new Pho();
// console.log(c.soup);


// // 4: INHERITING METHODS
// class Recipes {
//   start() {
//       console.log('starting Recipes');
//   }
//   static getRegion() {
//       console.log('My Region');
//   }
// }

// class Lasagna extends Recipes {
//   start() {
//       super.start();
//       console.log('starting Lasagna');
//   }
//   static getRegion() {
//       super.getRegion();
//       console.log('My other Region');
//   }
// }

// let c = new Lasagna();
// // Lasagna.getRegion();


// // 5: SEPARATING CLASSES
// import {Lasagna} from './classes/lasagna.js';
// import {Pho} from './classes/pho.js';

// let c = new Lasagna();
// let d = new Pho();

// console.log(c);
// console.log(d);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map