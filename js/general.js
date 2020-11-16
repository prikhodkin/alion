/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/general.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! exports provided: Popup, PopupThanks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupThanks", function() { return PopupThanks; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    _classCallCheck(this, Popup);

    this.popup = popup;
    this.name = this.popup.getAttribute('data-popup');
    this.open_btn = document.querySelectorAll('.get-popup[data-popup="' + this.name + '"]');
    this.popupClose = this.popup.querySelector('.popup__close');
    this.closer = this.popup.querySelector('.button--close');
    this.events();
  }

  _createClass(Popup, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.open_btn.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          evt.preventDefault();

          _this.openPopup();
        });
      });

      if (this.closer) {
        this.closer.addEventListener('click', function () {
          _this.hidePopup();
        });
      }

      document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__wrapper')) {
          _this.hidePopup();
        }
      });
      this.popupClose.addEventListener('click', function () {
        _this.hidePopup();
      });
      window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          _this.hidePopup();
        }
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      var prevPopup = document.querySelector('.popup.opened');

      if (prevPopup) {
        prevPopup.classList.remove('opened');
      }

      this.popup.classList.add('opened');
      document.body.classList.add('lock');
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.popup.classList.remove('opened');
      document.body.classList.remove('lock');
    }
  }]);

  return Popup;
}();

var PopupThanks = /*#__PURE__*/function (_Popup) {
  _inherits(PopupThanks, _Popup);

  var _super = _createSuper(PopupThanks);

  function PopupThanks(popup) {
    var _this2;

    _classCallCheck(this, PopupThanks);

    _this2 = _super.call(this, popup);
    _this2.isOpened = false;
    _this2.closer = _this2.popup.querySelector('.popup__close');
    return _this2;
  }

  _createClass(PopupThanks, [{
    key: "events",
    value: function events() {
      this.hidePopup();
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      _get(_getPrototypeOf(PopupThanks.prototype), "openPopup", this).call(this);

      this.isOpened = true;
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      _get(_getPrototypeOf(PopupThanks.prototype), "hidePopup", this).call(this);

      this.isOpened = false;
    }
  }]);

  return PopupThanks;
}(Popup);



/***/ }),

/***/ "./src/blocks/tabs/tabs.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs = /*#__PURE__*/function () {
  function Tabs(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Tabs);

    this._target = target;
    this.setOptions(options);
    this.init();
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.getTabs().forEach(function (item) {
        item.addEventListener("click", function () {
          _this.toggleTab(item);
        });
      });
    }
  }, {
    key: "setOptions",
    value: function setOptions(x) {
      return this.DEFAULT_OPTION = {
        DATA_TAB: x.dataTab && x.dataTab !== "" ? x.dataTab : "data-tab",
        DATA_CONTENT: x.dataContent && x.dataContent !== "" ? x.dataContent : "data-content",
        TAB_ACTIVE_CLASS: x.tabsItemActive && x.tabsItemActive !== "" ? x.tabsItemActive : "tabs__item--active",
        CONTENT_ACTIVE_CLASS: x.tabsContentActive && x.tabsContentActive !== "" ? x.tabsContentActive : "tabs__content--active"
      };
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this._target.querySelectorAll("[".concat(this.DEFAULT_OPTION.DATA_TAB, "]"));
    }
  }, {
    key: "toggleTab",
    value: function toggleTab(item) {
      var id = item.getAttribute(this.DEFAULT_OPTION.DATA_TAB);

      var content = this._target.querySelector("[".concat(this.DEFAULT_OPTION.DATA_CONTENT, "=\"").concat(id, "\"]"));

      var activeTab = this._target.querySelector(".".concat(this.DEFAULT_OPTION.TAB_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_TAB, "]"));

      var activeContent = this._target.querySelector(".".concat(this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS, "[").concat(this.DEFAULT_OPTION.DATA_CONTENT, "]"));

      this.toggleClass(activeTab, item, this.DEFAULT_OPTION.TAB_ACTIVE_CLASS);
      this.toggleClass(activeContent, content, this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(activeTarget, disableTarget, activeClass) {
      activeTarget.classList.remove(activeClass);
      disableTarget.classList.add(activeClass);
    }
  }]);

  return Tabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/tabs/tabs.js");
/* harmony import */ var wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wow.js/dist/wow.min */ "./node_modules/wow.js/dist/wow.min.js");
/* harmony import */ var wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modal/modal.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;
var popups = document.querySelectorAll(".popup");
var thx = document.querySelector(".popup--thx");
var toggleNav = document.querySelector(".header__toggle");
var header = document.querySelector(".header");
var tabArr = document.querySelectorAll("[data-tabs]");
var phones = document.querySelectorAll(".field__input--phone");
var maps = document.querySelector(".contact__map");
var phoneOption = {
  mask: '+{33} (0) 00-00-00-00'
}; // Инициализация библиотеки анимации

new wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default.a().init(); // Инициализация попапов

popups.forEach(function (popup) {
  new _modules_modal_modal__WEBPACK_IMPORTED_MODULE_4__["Popup"](popup);
}); // Меню

toggleNav.addEventListener("click", function () {
  header.classList.toggle("header--active");
}); // Инициализация табов

tabArr.forEach(function (item) {
  return new _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__["default"](item);
}); // Инициализация карты

function initMap() {
  var coordinates = {
    lat: 48.828250,
    lng: 2.370778
  },
      image = 'img/pointer-map.svg',
      map = new google.maps.Map(document.querySelector(".contact__map"), {
    center: {
      lat: 48.8282377,
      lng: 2.361531
    },
    zoom: 16,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]
  }),
      marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}

if (maps) {
  initMap();
} // Инициализация слайдера


var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
  effect: 'fade',
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '"><span class="bullet" ></span><span>' + "".concat(index < 9 ? '0' : '') + (index + 1) + '</span></div>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // Инициализация маски для телефона

phones.forEach(function (item) {
  return Object(imask__WEBPACK_IMPORTED_MODULE_3__["default"])(item, phoneOption);
}); // Ajax отправка формы

jquery__WEBPACK_IMPORTED_MODULE_5___default()(".form").submit(function () {
  //Change
  var th = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
    type: "POST",
    url: "vendor/mail.php",
    //Change
    data: th.serialize()
  }).done(function () {
    new _modules_modal_modal__WEBPACK_IMPORTED_MODULE_4__["PopupThanks"](thx).openPopup();
    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
}); // Плавная прокрутка до якоря

jquery__WEBPACK_IMPORTED_MODULE_5___default()("a[href^='#']").click(function () {
  var _href = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr("href");

  jquery__WEBPACK_IMPORTED_MODULE_5___default()("html, body").animate({
    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5___default()(_href).offset().top + "px"
  });
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=general.js.map