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

/***/ "./src/classes/pasta.js":
/*!******************************!*\
  !*** ./src/classes/pasta.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pasta = undefined;

var _recipe = __webpack_require__(/*! ./recipe.js */ "./src/classes/recipe.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pasta = exports.Pasta = function (_Recipe) {
    _inherits(Pasta, _Recipe);

    function Pasta(title, type, description, image) {
        _classCallCheck(this, Pasta);

        var _this = _possibleConstructorReturn(this, (Pasta.__proto__ || Object.getPrototypeOf(Pasta)).call(this, title, type, description, image));

        _this.pasta = null;
        return _this;
    }

    return Pasta;
}(_recipe.Recipe);

/***/ }),

/***/ "./src/classes/recipe.js":
/*!*******************************!*\
  !*** ./src/classes/recipe.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Recipe = exports.Recipe = function Recipe(title, type, description, image) {
    _classCallCheck(this, Recipe);

    this.title = title;
    this.type = type;
    this.description = description;
    this.image = image;
};

/***/ }),

/***/ "./src/classes/soup.js":
/*!*****************************!*\
  !*** ./src/classes/soup.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Soup = undefined;

var _recipe = __webpack_require__(/*! ./recipe.js */ "./src/classes/recipe.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Soup = exports.Soup = function (_Recipe) {
    _inherits(Soup, _Recipe);

    function Soup(title, type, description, image) {
        _classCallCheck(this, Soup);

        var _this = _possibleConstructorReturn(this, (Soup.__proto__ || Object.getPrototypeOf(Soup)).call(this, title, type, description, image));

        _this.stock = null;
        return _this;
    }

    return Soup;
}(_recipe.Recipe);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _recipeData = __webpack_require__(/*! ./recipe-data.js */ "./src/recipe-data.js");

var _recipeDataService = __webpack_require__(/*! ./services/recipe-data-service.js */ "./src/services/recipe-data-service.js");

var _recipeList = __webpack_require__(/*! ./ui/recipe-list.js */ "./src/ui/recipe-list.js");

var _button = __webpack_require__(/*! ./ui/button.js */ "./src/ui/button.js");

var _image = __webpack_require__(/*! ./ui/image.js */ "./src/ui/image.js");

var _titleBar = __webpack_require__(/*! ./ui/title-bar.js */ "./src/ui/title-bar.js");

var dataService = new _recipeDataService.RecipeDataService();
dataService.loadData(_recipeData.recipes);
console.log(_recipeData.recipes);

var l = new _recipeList.RecipeList('Recipe List');
l.addRecipe('Tofu Tods');
l.addRecipe('Rigatoni');
l.addRecipe('Caramel Apples');
l.appendEl(l.elem);

var tb = new _titleBar.TitleBar('Recipes!');
tb.appendEl(tb.elem);

var b = new _button.Button('More Recipes');
b.appendEl(b.elem);

var i = new _image.Image('lasagna');
i.appendEl(i.elem);

/***/ }),

/***/ "./src/recipe-data.js":
/*!****************************!*\
  !*** ./src/recipe-data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var recipes = exports.recipes = [{
  "title": "Lasagna",
  "type": "pasta",
  "pasta": "lasagna",
  "description": "Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
  "image": "lasagna.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Spaghetti with Meatballs",
  "type": "pasta",
  "pasta": "spaghetti",
  "description": "Spaghetti noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
  "image": "lasagna.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Ravioli",
  "type": "pasta",
  "pasta": "ravioli",
  "description": "Ravioli noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
  "image": "lasagna.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Penne a la Vodka",
  "type": "pasta",
  "pasta": "penne",
  "description": "Penne noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
  "image": "lasagna.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Pho-Chicken Noodle Soup",
  "type": "soup",
  "stock": "chicken",
  "description": "Pho (pronounced \"fuh\") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.",
  "image": "pho.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Chicken Noodle Soup",
  "type": "soup",
  "stock": "chicken",
  "description": "The best soup for colds, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.",
  "image": "pho.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Bean Soup",
  "type": "soup",
  "stock": "vegetarian",
  "description": "Pho (pronounced \"fuh\") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.",
  "image": "pho.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}, {
  "title": "Minestroni",
  "type": "soup",
  "stock": "beef",
  "description": "Minestroni is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.",
  "image": "pho.png",
  "ingredients": ["salt", "honey", "sugar", "rice", "walnuts", "lime juice"],
  "preparation": [{ "step": "Boil water" }, { "step": "Fry the eggs" }, { "step": "Serve hot" }]
}];

/***/ }),

/***/ "./src/services/recipe-data-service.js":
/*!*********************************************!*\
  !*** ./src/services/recipe-data-service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecipeDataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pasta = __webpack_require__(/*! ../classes/pasta.js */ "./src/classes/pasta.js");

var _soup = __webpack_require__(/*! ../classes/soup.js */ "./src/classes/soup.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {DataError} from './data-error.js';

var RecipeDataService = exports.RecipeDataService = function () {
    function RecipeDataService() {
        _classCallCheck(this, RecipeDataService);

        this.pastas = [];
        this.soups = [];
        // this.errors = [];       
    }

    // getCarByLicense(license) {
    //     return this.cars.find(function(car) {
    //         return car.license === license;
    //     });
    // }

    // getCarsSortedByLicense() {
    //     return this.cars.sort(function(car1, car2) {
    //         if (car1.license < car2.license)
    //             return -1;
    //         if (car1.license > car2.license)
    //             return 1;
    //         return 0;
    //     });
    // }

    // filterCarsByMake(filter) {
    //     return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    // }

    _createClass(RecipeDataService, [{
        key: 'loadData',
        value: function loadData(recipes) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = recipes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var data = _step.value;

                    switch (data.type) {
                        case 'pasta':
                            // if (this.validatePastaData(data)) {
                            var pasta = this.loadPasta(data);
                            if (pasta) this.pastas.push(pasta);
                            // }
                            // else {
                            // let e = new DataError('invalid pasta data', data);
                            // this.errors.push(e);
                            // }
                            break;
                        case 'soup':
                            this.soups.push(data);
                            break;
                        // default:
                        //     let e = new DataError('Invalid recipe type', data);
                        //     this.errors.push(e);
                        //     break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'loadPasta',
        value: function loadPasta(pasta) {
            // try {
            var p = new _pasta.Pasta(pasta.title, pasta.type, pasta.desciption, pasta.image);
            p.pasta = pasta.pasta;
            // c.make = car.make;
            return p;
            // } catch(e) {
            //     this.errors.push(new DataError('error loading car', car));
            // }
            // return null;
        }

        // validateCarData(pasta) {
        //     let requiredProps = 'license model latLong miles make'.split(' ');
        //     let hasErrors = false;

        //     for (let field of requiredProps) {
        //         if (!car[field]) {
        //             this.errors.push(new DataError(`invalid field ${field}`, car));
        //             hasErrors = true;
        //         }
        //     }
        //     if (Number.isNaN(Number.parseFloat(car.miles))) {
        //         this.errors.push(new DataError('invalid milage', car));
        //         hasErrors = true;
        //     }
        //     return !hasErrors;
        // }

    }]);

    return RecipeDataService;
}();

/***/ }),

/***/ "./src/ui/base-element.js":
/*!********************************!*\
  !*** ./src/ui/base-element.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = exports.BaseElement = function () {
    function BaseElement() {
        _classCallCheck(this, BaseElement);

        this.el = null;
    }

    _createClass(BaseElement, [{
        key: 'appendEl',
        value: function appendEl() {
            var e = this.getElementString();
            var el = document.querySelector(this.elem);
            el.innerHTML = e;
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            throw 'Please override getElementString() in BaseElement';
        }
    }]);

    return BaseElement;
}();

/***/ }),

/***/ "./src/ui/button.js":
/*!**************************!*\
  !*** ./src/ui/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(/*! ./base-element.js */ "./src/ui/base-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_BaseElement) {
    _inherits(Button, _BaseElement);

    function Button(title) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this.elem = 'btn';
        _this.title = title;
        _this.styleString = '';
        return _this;
    }

    _createClass(Button, [{
        key: 'getElementString',
        value: function getElementString() {
            return '\n        <button class=""\n        style="' + this.styleString + '">\n            ' + this.title + '\n        </button>\n        ';
        }
    }, {
        key: 'setStyleString',
        value: function setStyleString(style) {
            this.styleString = style;
        }
    }]);

    return Button;
}(_baseElement.BaseElement);

/***/ }),

/***/ "./src/ui/image.js":
/*!*************************!*\
  !*** ./src/ui/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(/*! ./base-element.js */ "./src/ui/base-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = exports.Image = function (_BaseElement) {
    _inherits(Image, _BaseElement);

    function Image(fileName) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

        _this.elem = 'imagen';
        _this.fileName = fileName;
        return _this;
    }

    _createClass(Image, [{
        key: 'getElementString',
        value: function getElementString() {
            return '\n            <img src="/img/recipes/' + this.fileName + '.png" style="width: 100%;" />\n        ';
        }
    }]);

    return Image;
}(_baseElement.BaseElement);

/***/ }),

/***/ "./src/ui/recipe-list.js":
/*!*******************************!*\
  !*** ./src/ui/recipe-list.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecipeList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(/*! ./base-element.js */ "./src/ui/base-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeList = exports.RecipeList = function (_BaseElement) {
  _inherits(RecipeList, _BaseElement);

  function RecipeList(title) {
    _classCallCheck(this, RecipeList);

    var _this = _possibleConstructorReturn(this, (RecipeList.__proto__ || Object.getPrototypeOf(RecipeList)).call(this));

    _this.elem = 'list';
    _this.title = title;
    _this.recipes = [];
    return _this;
  }

  _createClass(RecipeList, [{
    key: 'addRecipe',
    value: function addRecipe(name) {
      this.recipes.push({
        name: name
      });
    }
  }, {
    key: 'getElementString',
    value: function getElementString() {

      var markup = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.recipes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var recipe = _step.value;

          markup += '<li class="woo">' + recipe.name + '</li>';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '\n    <div class="wrap">\n      <h1>' + this.title + '</h1>\n      <ul>\n        ' + markup + '\n      </ul>\n    </div>\n    ';
    }
  }]);

  return RecipeList;
}(_baseElement.BaseElement);

/***/ }),

/***/ "./src/ui/title-bar.js":
/*!*****************************!*\
  !*** ./src/ui/title-bar.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TitleBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(/*! ./base-element.js */ "./src/ui/base-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = exports.TitleBar = function (_BaseElement) {
    _inherits(TitleBar, _BaseElement);

    function TitleBar(title) {
        _classCallCheck(this, TitleBar);

        var _this = _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).call(this));

        _this.elem = 'titlebar';
        _this.title = title;
        _this.links = [];
        return _this;
    }

    _createClass(TitleBar, [{
        key: 'addLink',
        value: function addLink(title, href) {
            this.links.push({
                title: title,
                href: href
            });
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            var links = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var link = _step.value;

                    links += '<a class="">\n                        ' + link.title + '\n                      </a>\n';
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return '\n            <div class="">\n                <header class="">\n                    <div class="">\n                        <!-- Title -->\n                        <h1 class="">' + this.title + '</h1>\n\n                        <nav class="">\n                            ' + links + '\n                        </nav>\n                    </div>\n                </header>\n\n                <main class="">\n                    <div class="page-content"><!-- Your content goes here --></div>\n                </main>\n                </div>\n        ';
        }
    }]);

    return TitleBar;
}(_baseElement.BaseElement);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map