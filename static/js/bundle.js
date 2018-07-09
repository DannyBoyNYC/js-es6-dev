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

/***/ "./src/framework/application-base.js":
/*!*******************************************!*\
  !*** ./src/framework/application-base.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _titleBar = __webpack_require__(/*! ../ui/title-bar.js */ "./src/ui/title-bar.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationBase = exports.ApplicationBase = function () {
  function ApplicationBase(title) {
    _classCallCheck(this, ApplicationBase);

    this.title = title;
    this.titleBar = new _titleBar.TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }

  _createClass(ApplicationBase, [{
    key: 'activateRoute',
    value: function activateRoute(route) {
      // let markup = this.titleBar.getElementString();
      var markup = document.querySelector('page-content');
      console.log(markup);
      // let content = markup.querySelector('page-content');
      // let content = this.titleBar.element.find('page-content');
      // content.empty;
      // this.routeMap[route].appendToElement(content);
    }
  }, {
    key: 'addRoute',
    value: function addRoute(id, pageObject) {
      var defaultRoute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.titleBar.addLink(id, '');

      this.routeMap[id] = pageObject;

      if (defaultRoute) {
        this.defaultRoute = id;
      }
    }
  }, {
    key: 'show',
    value: function show(element) {
      this.titleBar.appendEl();

      // this.titleBar.element.find('.mdl-navigation__link').click((event) => {
      //   let route = event.target.innerHTML;
      //   this.activateRoute(route.trim());
      // });

      if (this.defaultRoute) {
        this.activateRoute(this.defaultRoute);
      }
    }
  }]);

  return ApplicationBase;
}();

/***/ }),

/***/ "./src/framework/page.js":
/*!*******************************!*\
  !*** ./src/framework/page.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page = undefined;

var _baseElement = __webpack_require__(/*! ../ui/base-element.js */ "./src/ui/base-element.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = exports.Page = function (_BaseElement) {
    _inherits(Page, _BaseElement);

    function Page(pageTitle) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

        _this.pageTitle = pageTitle;
        return _this;
    }

    return Page;
}(_baseElement.BaseElement);

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _page = __webpack_require__(/*! ./framework/page.js */ "./src/framework/page.js");

var _image = __webpack_require__(/*! ./ui/image.js */ "./src/ui/image.js");

var _button = __webpack_require__(/*! ./ui/button.js */ "./src/ui/button.js");

var _index = __webpack_require__(/*! ./index.js */ "./src/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = exports.HomePage = function (_Page) {
    _inherits(HomePage, _Page);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, 'Home'));
    }

    _createClass(HomePage, [{
        key: 'createElement',
        value: function createElement() {
            _get(HomePage.prototype.__proto__ || Object.getPrototypeOf(HomePage.prototype), 'createElement', this).call(this);

            var i = new _image.Image('../images/drone.jpg');
            i.appendToElement(this.element);

            var styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
            var b = new _button.Button('Self Driving Cars');
            b.setStyleString(styleString);
            b.appendToElement(this.element);
            b.element.click(function () {
                return _index.application.activateRoute('Cars');
            });

            b = new _button.Button('Drones');
            b.setStyleString(styleString);
            b.appendToElement(this.element);
            b.element.click(function () {
                return _index.application.activateRoute('Drones');
            });
        }
    }, {
        key: 'getElementString',
        value: function getElementString() {
            return '<div style="text-align: center;"></div>';
        }
    }]);

    return HomePage;
}(_page.Page);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _recipeData = __webpack_require__(/*! ./recipe-data.js */ "./src/recipe-data.js");

var _recipeDataService = __webpack_require__(/*! ./services/recipe-data-service.js */ "./src/services/recipe-data-service.js");

var _applicationBase = __webpack_require__(/*! ./framework/application-base.js */ "./src/framework/application-base.js");

var _homePage = __webpack_require__(/*! ./home-page.js */ "./src/home-page.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_ApplicationBase) {
  _inherits(App, _ApplicationBase);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, 'Recipes!'));

    _this.dataService = new _recipeDataService.RecipeDataService();
    _this.dataService.loadData(_recipeData.recipes);

    _this.addRoute('Home', new _homePage.HomePage(), true);
    _this.addRoute('Pastas', null);
    _this.addRoute('Soups', null);
    return _this;
  }

  return App;
}(_applicationBase.ApplicationBase);

var application = new App();
application.show();

// import { RecipeList } from './ui/recipe-list.js';
// import { Button } from './ui/button.js';
// import { Image } from './ui/image.js';
// import { TitleBar } from './ui/title-bar.js';

// let dataService = new RecipeDataService();
// dataService.loadData(recipes);
// console.log(recipes)


// let l = new RecipeList('Recipe List');
// l.addRecipe('Tofu Tods');
// l.addRecipe('Rigatoni');
// l.addRecipe('Caramel Apples');
// l.appendEl(l.elem);

// let tb = new TitleBar('Recipes!');
// tb.appendEl(tb.elem);

// let b = new Button('More Recipes');
// b.appendEl(b.elem)

// let i = new Image('lasagna')
// i.appendEl(i.elem)

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

var RecipeDataService = exports.RecipeDataService = function () {
    function RecipeDataService() {
        _classCallCheck(this, RecipeDataService);

        this.pastas = [];
        this.soups = [];
    }

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
                            var pasta = this.loadPasta(data);
                            if (pasta) this.pastas.push(pasta);
                            break;
                        case 'soup':
                            this.soups.push(data);
                            break;
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
            var p = new _pasta.Pasta(pasta.title, pasta.type, pasta.desciption, pasta.image);
            p.pasta = pasta.pasta;
            return p;
        }
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

                    links += '\n            <li>\n                <a class="" href="#">' + link.title + '</a>\n            </li>';
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

            return '\n            <div class="">\n                <header class="">\n                    <div class="">\n                        <!-- Title -->\n                        <h1>' + this.title + '</h1>\n                        <nav>\n                            <ul>\n                            ' + links + '\n                            </ul>\n                        </nav>\n                    </div>\n                </header>\n\n                <main class="">\n                    <div class="page-content">\n                        <!-- Your content goes here -->\n                    </div>\n                </main>\n                </div>\n        ';
        }
    }]);

    return TitleBar;
}(_baseElement.BaseElement);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map