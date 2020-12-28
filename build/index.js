(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ISO6391"] = factory();
	else
		root["ISO6391"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/values.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__("./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./src/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LANGUAGES_LIST = {
  aa: {
    nameTH: 'รอ',
    nameEN: 'Afar',
    nativeName: 'Afaraf'
  },
  ab: {
    nameTH: 'รอ',
    nameEN: 'Abkhaz',
    nativeName: 'аҧсуа бызшәа'
  },
  ae: {
    nameTH: 'รอ',
    nameEN: 'Avestan',
    nativeName: 'avesta'
  },
  af: {
    nameTH: 'รอ',
    nameEN: 'Afrikaans',
    nativeName: 'Afrikaans'
  },
  ak: {
    nameTH: 'รอ',
    nameEN: 'Akan',
    nativeName: 'Akan'
  },
  am: {
    nameTH: 'รอ',
    nameEN: 'Amharic',
    nativeName: 'አማርኛ'
  },
  an: {
    nameTH: 'รอ',
    nameEN: 'Aragonese',
    nativeName: 'aragonés'
  },
  ar: {
    nameTH: 'อาหรับ',
    nameEN: 'Arabic',
    nativeName: 'اللغة العربية'
  },
  as: {
    nameTH: 'รอ',
    nameEN: 'Assamese',
    nativeName: 'অসমীয়া'
  },
  av: {
    nameTH: 'รอ',
    nameEN: 'Avaric',
    nativeName: 'авар мацӀ'
  },
  ay: {
    nameTH: 'รอ',
    nameEN: 'Aymara',
    nativeName: 'aymar aru'
  },
  az: {
    nameTH: 'รอ',
    nameEN: 'Azerbaijani',
    nativeName: 'azərbaycan dili'
  },
  ba: {
    nameTH: 'รอ',
    nameEN: 'Bashkir',
    nativeName: 'башҡорт теле'
  },
  be: {
    nameTH: 'รอ',
    nameEN: 'Belarusian',
    nativeName: 'беларуская мова'
  },
  bg: {
    nameTH: 'รอ',
    nameEN: 'Bulgarian',
    nativeName: 'български език'
  },
  bh: {
    nameTH: 'รอ',
    nameEN: 'Bihari',
    nativeName: 'भोजपुरी'
  },
  bi: {
    nameTH: 'รอ',
    nameEN: 'Bislama',
    nativeName: 'Bislama'
  },
  bm: {
    nameTH: 'รอ',
    nameEN: 'Bambara',
    nativeName: 'bamanankan'
  },
  bn: {
    nameTH: 'รอ',
    nameEN: 'Bengali',
    nativeName: 'বাংলা'
  },
  bo: {
    nameTH: 'รอ',
    nameEN: 'Tibetan Standard',
    nativeName: 'བོད་ཡིག'
  },
  br: {
    nameTH: 'รอ',
    nameEN: 'Breton',
    nativeName: 'brezhoneg'
  },
  bs: {
    nameTH: 'รอ',
    nameEN: 'Bosnian',
    nativeName: 'bosanski jezik'
  },
  ca: {
    nameTH: 'รอ',
    nameEN: 'Catalan',
    nativeName: 'Català'
  },
  ce: {
    nameTH: 'รอ',
    nameEN: 'Chechen',
    nativeName: 'нохчийн мотт'
  },
  ch: {
    nameTH: 'รอ',
    nameEN: 'Chamorro',
    nativeName: 'Chamoru'
  },
  co: {
    nameTH: 'รอ',
    nameEN: 'Corsican',
    nativeName: 'corsu'
  },
  cr: {
    nameTH: 'รอ',
    nameEN: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
  },
  cs: {
    nameTH: 'เช็ก',
    nameEN: 'Czech',
    nativeName: 'čeština'
  },
  cu: {
    nameTH: 'รอ',
    nameEN: 'Old Church Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ'
  },
  cv: {
    nameTH: 'รอ',
    nameEN: 'Chuvash',
    nativeName: 'чӑваш чӗлхи'
  },
  cy: {
    nameTH: 'รอ',
    nameEN: 'Welsh',
    nativeName: 'Cymraeg'
  },
  da: {
    nameTH: 'เดนมาร์ก',
    nameEN: 'Danish',
    nativeName: 'dansk'
  },
  de: {
    nameTH: 'เยอรมัน',
    nameEN: 'German',
    nativeName: 'Deutsch'
  },
  dv: {
    nameTH: 'รอ',
    nameEN: 'Divehi',
    nativeName: 'Dhivehi'
  },
  dz: {
    nameTH: 'รอ',
    nameEN: 'Dzongkha',
    nativeName: 'རྫོང་ཁ'
  },
  ee: {
    nameTH: 'รอ',
    nameEN: 'Ewe',
    nativeName: 'Eʋegbe'
  },
  el: {
    nameTH: 'กรีก',
    nameEN: 'Greek',
    nativeName: 'Ελληνικά'
  },
  en: {
    nameTH: 'อังกฤษ',
    nameEN: 'English',
    nativeName: 'English'
  },
  eo: {
    nameTH: 'รอ',
    nameEN: 'Esperanto',
    nativeName: 'Esperanto'
  },
  es: {
    nameTH: 'สเปน',
    nameEN: 'Spanish',
    nativeName: 'Español'
  },
  et: {
    nameTH: 'รอ',
    nameEN: 'Estonian',
    nativeName: 'eesti'
  },
  eu: {
    nameTH: 'รอ',
    nameEN: 'Basque',
    nativeName: 'euskara'
  },
  fa: {
    nameTH: 'รอ',
    nameEN: 'Persian',
    nativeName: 'فارسی'
  },
  ff: {
    nameTH: 'รอ',
    nameEN: 'Fula',
    nativeName: 'Fulfulde'
  },
  fi: {
    nameTH: 'ฟินแลนด์',
    nameEN: 'Finnish',
    nativeName: 'suomi'
  },
  fj: {
    nameTH: 'รอ',
    nameEN: 'Fijian',
    nativeName: 'Vakaviti'
  },
  fo: {
    nameTH: 'รอ',
    nameEN: 'Faroese',
    nativeName: 'føroyskt'
  },
  fr: {
    nameTH: 'ฝรั่งเศส',
    nameEN: 'French',
    nativeName: 'Français'
  },
  fy: {
    nameTH: 'รอ',
    nameEN: 'Western Frisian',
    nativeName: 'Frysk'
  },
  ga: {
    nameTH: 'รอ',
    nameEN: 'Irish',
    nativeName: 'Gaeilge'
  },
  gd: {
    nameTH: 'รอ',
    nameEN: 'Scottish Gaelic',
    nativeName: 'Gàidhlig'
  },
  gl: {
    nameTH: 'รอ',
    nameEN: 'Galician',
    nativeName: 'galego'
  },
  gn: {
    nameTH: 'รอ',
    nameEN: 'Guaraní',
    nativeName: "Avañe'ẽ"
  },
  gu: {
    nameTH: 'รอ',
    nameEN: 'Gujarati',
    nativeName: 'ગુજરાતી'
  },
  gv: {
    nameTH: 'รอ',
    nameEN: 'Manx',
    nativeName: 'Gaelg'
  },
  ha: {
    nameTH: 'รอ',
    nameEN: 'Hausa',
    nativeName: 'هَوُسَ'
  },
  he: {
    nameTH: 'ฮีบรู',
    nameEN: 'Hebrew',
    nativeName: 'עברית'
  },
  hi: {
    nameTH: 'รอ',
    nameEN: 'Hindi',
    nativeName: 'हिन्दी'
  },
  ho: {
    nameTH: 'รอ',
    nameEN: 'Hiri Motu',
    nativeName: 'Hiri Motu'
  },
  hr: {
    nameTH: 'รอ',
    nameEN: 'Croatian',
    nativeName: 'hrvatski jezik'
  },
  ht: {
    nameTH: 'รอ',
    nameEN: 'Haitian',
    nativeName: 'Kreyòl ayisyen'
  },
  hu: {
    nameTH: 'ฮังการี',
    nameEN: 'Hungarian',
    nativeName: 'Magyar'
  },
  hy: {
    nameTH: 'รอ',
    nameEN: 'Armenian',
    nativeName: 'Հայերեն'
  },
  hz: {
    nameTH: 'รอ',
    nameEN: 'Herero',
    nativeName: 'Otjiherero'
  },
  ia: {
    nameTH: 'รอ',
    nameEN: 'Interlingua',
    nativeName: 'Interlingua'
  },
  id: {
    nameTH: 'อินโดนีเซีย',
    nameEN: 'Indonesian',
    nativeName: 'Bahasa Indonesia'
  },
  ie: {
    nameTH: 'รอ',
    nameEN: 'Interlingue',
    nativeName: 'Interlingue'
  },
  ig: {
    nameTH: 'รอ',
    nameEN: 'Igbo',
    nativeName: 'Asụsụ Igbo'
  },
  ii: {
    nameTH: 'รอ',
    nameEN: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop'
  },
  ik: {
    nameTH: 'รอ',
    nameEN: 'Inupiaq',
    nativeName: 'Iñupiaq'
  },
  io: {
    nameTH: 'รอ',
    nameEN: 'Ido',
    nativeName: 'Ido'
  },
  is: {
    nameTH: 'รอ',
    nameEN: 'Icelandic',
    nativeName: 'Íslenska'
  },
  it: {
    nameTH: 'อิตาลี',
    nameEN: 'Italian',
    nativeName: 'Italiano'
  },
  iu: {
    nameTH: 'รอ',
    nameEN: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    nameTH: 'ญี่ปุ่น',
    nameEN: 'Japanese',
    nativeName: '日本語'
  },
  jv: {
    nameTH: 'รอ',
    nameEN: 'Javanese',
    nativeName: 'basa Jawa'
  },
  ka: {
    nameTH: 'รอ',
    nameEN: 'Georgian',
    nativeName: 'ქართული'
  },
  kg: {
    nameTH: 'รอ',
    nameEN: 'Kongo',
    nativeName: 'Kikongo'
  },
  ki: {
    nameTH: 'รอ',
    nameEN: 'Kikuyu',
    nativeName: 'Gĩkũyũ'
  },
  kj: {
    nameTH: 'รอ',
    nameEN: 'Kwanyama',
    nativeName: 'Kuanyama'
  },
  kk: {
    nameTH: 'รอ',
    nameEN: 'Kazakh',
    nativeName: 'қазақ тілі'
  },
  kl: {
    nameTH: 'รอ',
    nameEN: 'Kalaallisut',
    nativeName: 'kalaallisut'
  },
  km: {
    nameTH: 'เขมร',
    nameEN: 'Khmer',
    nativeName: 'ខេមរភាសា'
  },
  kn: {
    nameTH: 'รอ',
    nameEN: 'Kannada',
    nativeName: 'ಕನ್ನಡ'
  },
  ko: {
    nameTH: 'เกาหลี',
    nameEN: 'Korean',
    nativeName: '한국어'
  },
  kr: {
    nameTH: 'รอ',
    nameEN: 'Kanuri',
    nativeName: 'Kanuri'
  },
  ks: {
    nameTH: 'รอ',
    nameEN: 'Kashmiri',
    nativeName: 'कश्मीरी'
  },
  ku: {
    nameTH: 'รอ',
    nameEN: 'Kurdish',
    nativeName: 'Kurdî'
  },
  kv: {
    nameTH: 'รอ',
    nameEN: 'Komi',
    nativeName: 'коми кыв'
  },
  kw: {
    nameTH: 'รอ',
    nameEN: 'Cornish',
    nativeName: 'Kernewek'
  },
  ky: {
    nameTH: 'รอ',
    nameEN: 'Kyrgyz',
    nativeName: 'Кыргызча'
  },
  la: {
    nameTH: 'รอ',
    nameEN: 'Latin',
    nativeName: 'latine'
  },
  lb: {
    nameTH: 'รอ',
    nameEN: 'Luxembourgish',
    nativeName: 'Lëtzebuergesch'
  },
  lg: {
    nameTH: 'รอ',
    nameEN: 'Ganda',
    nativeName: 'Luganda'
  },
  li: {
    nameTH: 'รอ',
    nameEN: 'Limburgish',
    nativeName: 'Limburgs'
  },
  ln: {
    nameTH: 'รอ',
    nameEN: 'Lingala',
    nativeName: 'Lingála'
  },
  lo: {
    nameTH: 'ลาว',
    nameEN: 'Lao',
    nativeName: 'ພາສາ'
  },
  lt: {
    nameTH: 'รอ',
    nameEN: 'Lithuanian',
    nativeName: 'lietuvių kalba'
  },
  lu: {
    nameTH: 'รอ',
    nameEN: 'Luba-Katanga',
    nativeName: 'Tshiluba'
  },
  lv: {
    nameTH: 'รอ',
    nameEN: 'Latvian',
    nativeName: 'latviešu valoda'
  },
  mg: {
    nameTH: 'รอ',
    nameEN: 'Malagasy',
    nativeName: 'fiteny malagasy'
  },
  mh: {
    nameTH: 'รอ',
    nameEN: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ'
  },
  mi: {
    nameTH: 'รอ',
    nameEN: 'Māori',
    nativeName: 'te reo Māori'
  },
  mk: {
    nameTH: 'รอ',
    nameEN: 'Macedonian',
    nativeName: 'македонски јазик'
  },
  ml: {
    nameTH: 'มลายู',
    nameEN: 'Malayalam',
    nativeName: 'മലയാളം'
  },
  mn: {
    nameTH: 'รอ',
    nameEN: 'Mongolian',
    nativeName: 'Монгол хэл'
  },
  mr: {
    nameTH: 'รอ',
    nameEN: 'Marathi',
    nativeName: 'मराठी'
  },
  ms: {
    nameTH: 'รอ',
    nameEN: 'Malay',
    nativeName: 'Bahasa Malaysia'
  },
  mt: {
    nameTH: 'รอ',
    nameEN: 'Maltese',
    nativeName: 'Malti'
  },
  my: {
    nameTH: 'พม่า',
    nameEN: 'Burmese',
    nativeName: 'ဗမာစာ'
  },
  na: {
    nameTH: 'รอ',
    nameEN: 'Nauru',
    nativeName: 'Ekakairũ Naoero'
  },
  nb: {
    nameTH: 'นอร์เวย์',
    nameEN: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål'
  },
  nd: {
    nameTH: 'รอ',
    nameEN: 'Northern Ndebele',
    nativeName: 'isiNdebele'
  },
  ne: {
    nameTH: 'รอ',
    nameEN: 'Nepali',
    nativeName: 'नेपाली'
  },
  ng: {
    nameTH: 'รอ',
    nameEN: 'Ndonga',
    nativeName: 'Owambo'
  },
  nl: {
    nameTH: 'ดัตช์',
    nameEN: 'Dutch',
    nativeName: 'Nederlands'
  },
  nn: {
    nameTH: 'รอ',
    nameEN: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk'
  },
  no: {
    nameTH: 'รอ',
    nameEN: 'Norwegian',
    nativeName: 'Norsk'
  },
  nr: {
    nameTH: 'รอ',
    nameEN: 'Southern Ndebele',
    nativeName: 'isiNdebele'
  },
  nv: {
    nameTH: 'รอ',
    nameEN: 'Navajo',
    nativeName: 'Diné bizaad'
  },
  ny: {
    nameTH: 'รอ',
    nameEN: 'Chichewa',
    nativeName: 'chiCheŵa'
  },
  oc: {
    nameTH: 'รอ',
    nameEN: 'Occitan',
    nativeName: 'occitan'
  },
  oj: {
    nameTH: 'รอ',
    nameEN: 'Ojibwe',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  om: {
    nameTH: 'รอ',
    nameEN: 'Oromo',
    nativeName: 'Afaan Oromoo'
  },
  or: {
    nameTH: 'รอ',
    nameEN: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ'
  },
  os: {
    nameTH: 'รอ',
    nameEN: 'Ossetian',
    nativeName: 'ирон æвзаг'
  },
  pa: {
    nameTH: 'รอ',
    nameEN: 'Panjabi',
    nativeName: 'ਪੰਜਾਬੀ'
  },
  pi: {
    nameTH: 'รอ',
    nameEN: 'Pāli',
    nativeName: 'पाऴि'
  },
  pl: {
    nameTH: 'รอ',
    nameEN: 'Polish',
    nativeName: 'język polski'
  },
  ps: {
    nameTH: 'รอ',
    nameEN: 'Pashto',
    nativeName: 'پښتو'
  },
  pt: {
    nameTH: 'โปรตุเกส',
    nameEN: 'Portuguese',
    nativeName: 'Português'
  },
  qu: {
    nameTH: 'รอ',
    nameEN: 'Quechua',
    nativeName: 'Runa Simi'
  },
  rm: {
    nameTH: 'รอ',
    nameEN: 'Romansh',
    nativeName: 'rumantsch grischun'
  },
  rn: {
    nameTH: 'รอ',
    nameEN: 'Kirundi',
    nativeName: 'Ikirundi'
  },
  ro: {
    nameTH: 'รอ',
    nameEN: 'Romanian',
    nativeName: 'Română'
  },
  ru: {
    nameTH: 'รัสเซีย',
    nameEN: 'Russian',
    nativeName: 'Русский'
  },
  rw: {
    nameTH: 'รอ',
    nameEN: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda'
  },
  sa: {
    nameTH: 'รอ',
    nameEN: 'Sanskrit',
    nativeName: 'संस्कृतम्'
  },
  sc: {
    nameTH: 'รอ',
    nameEN: 'Sardinian',
    nativeName: 'sardu'
  },
  sd: {
    nameTH: 'รอ',
    nameEN: 'Sindhi',
    nativeName: 'सिन्धी'
  },
  se: {
    nameTH: 'รอ',
    nameEN: 'Northern Sami',
    nativeName: 'Davvisámegiella'
  },
  sg: {
    nameTH: 'รอ',
    nameEN: 'Sango',
    nativeName: 'yângâ tî sängö'
  },
  si: {
    nameTH: 'รอ',
    nameEN: 'Sinhala',
    nativeName: 'සිංහල'
  },
  sk: {
    nameTH: 'รอ',
    nameEN: 'Slovak',
    nativeName: 'slovenčina'
  },
  sl: {
    nameTH: 'รอ',
    nameEN: 'Slovene',
    nativeName: 'slovenski jezik'
  },
  sm: {
    nameTH: 'รอ',
    nameEN: 'Samoan',
    nativeName: "gagana fa'a Samoa"
  },
  sn: {
    nameTH: 'รอ',
    nameEN: 'Shona',
    nativeName: 'chiShona'
  },
  so: {
    nameTH: 'รอ',
    nameEN: 'Somali',
    nativeName: 'Soomaaliga'
  },
  sq: {
    nameTH: 'รอ',
    nameEN: 'Albanian',
    nativeName: 'Shqip'
  },
  sr: {
    nameTH: 'รอ',
    nameEN: 'Serbian',
    nativeName: 'српски језик'
  },
  ss: {
    nameTH: 'รอ',
    nameEN: 'Swati',
    nativeName: 'SiSwati'
  },
  st: {
    nameTH: 'รอ',
    nameEN: 'Southern Sotho',
    nativeName: 'Sesotho'
  },
  su: {
    nameTH: 'รอ',
    nameEN: 'Sundanese',
    nativeName: 'Basa Sunda'
  },
  sv: {
    nameTH: 'สวีเดน',
    nameEN: 'Swedish',
    nativeName: 'Svenska'
  },
  sw: {
    nameTH: 'รอ',
    nameEN: 'Swahili',
    nativeName: 'Kiswahili'
  },
  ta: {
    nameTH: 'ทมิฬ',
    nameEN: 'Tamil',
    nativeName: 'தமிழ்'
  },
  te: {
    nameTH: 'รอ',
    nameEN: 'Telugu',
    nativeName: 'తెలుగు'
  },
  tg: {
    nameTH: 'รอ',
    nameEN: 'Tajik',
    nativeName: 'тоҷикӣ'
  },
  th: {
    nameTH: 'ไทย',
    nameEN: 'Thai',
    nativeName: 'ไทย'
  },
  ti: {
    nameTH: 'รอ',
    nameEN: 'Tigrinya',
    nativeName: 'ትግርኛ'
  },
  tk: {
    nameTH: 'รอ',
    nameEN: 'Turkmen',
    nativeName: 'Türkmen'
  },
  tl: {
    nameTH: 'ตากาล็อก',
    nameEN: 'Tagalog',
    nativeName: 'Wikang Tagalog'
  },
  tn: {
    nameTH: 'รอ',
    nameEN: 'Tswana',
    nativeName: 'Setswana'
  },
  to: {
    nameTH: 'รอ',
    nameEN: 'Tonga',
    nativeName: 'faka Tonga'
  },
  tr: {
    nameTH: 'รอ',
    nameEN: 'Turkish',
    nativeName: 'Türkçe'
  },
  ts: {
    nameTH: 'รอ',
    nameEN: 'Tsonga',
    nativeName: 'Xitsonga'
  },
  tt: {
    nameTH: 'รอ',
    nameEN: 'Tatar',
    nativeName: 'татар теле'
  },
  tw: {
    nameTH: 'รอ',
    nameEN: 'Twi',
    nativeName: 'Twi'
  },
  ty: {
    nameTH: 'รอ',
    nameEN: 'Tahitian',
    nativeName: 'Reo Tahiti'
  },
  ug: {
    nameTH: 'รอ',
    nameEN: 'Uyghur',
    nativeName: 'ئۇيغۇرچە‎'
  },
  uk: {
    nameTH: 'รอ',
    nameEN: 'Ukrainian',
    nativeName: 'Українська'
  },
  ur: {
    nameTH: 'รอ',
    nameEN: 'Urdu',
    nativeName: 'اردو'
  },
  uz: {
    nameTH: 'รอ',
    nameEN: 'Uzbek',
    nativeName: 'Ўзбек'
  },
  ve: {
    nameTH: 'รอ',
    nameEN: 'Venda',
    nativeName: 'Tshivenḓa'
  },
  vi: {
    nameTH: 'เวียดนาม',
    nameEN: 'Vietnamese',
    nativeName: 'Tiếng Việt'
  },
  vo: {
    nameTH: 'รอ',
    nameEN: 'Volapük',
    nativeName: 'Volapük'
  },
  wa: {
    nameTH: 'รอ',
    nameEN: 'Walloon',
    nativeName: 'walon'
  },
  wo: {
    nameTH: 'รอ',
    nameEN: 'Wolof',
    nativeName: 'Wollof'
  },
  xh: {
    nameTH: 'รอ',
    nameEN: 'Xhosa',
    nativeName: 'isiXhosa'
  },
  yi: {
    nameTH: 'รอ',
    nameEN: 'Yiddish',
    nativeName: 'ייִדיש'
  },
  yo: {
    nameTH: 'รอ',
    nameEN: 'Yoruba',
    nativeName: 'Yorùbá'
  },
  za: {
    nameTH: 'รอ',
    nameEN: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ'
  },
  zh: {
    nameTH: 'จีน',
    nameEN: 'Chinese',
    nativeName: '中文'
  },
  zu: {
    nameTH: 'รอ',
    nameEN: 'Zulu',
    nativeName: 'isiZulu'
  }
};

exports.default = LANGUAGES_LIST;
module.exports = exports['default'];

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__("./node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _data = __webpack_require__("./src/data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ISO6391 = function () {
  function ISO6391() {
    (0, _classCallCheck3.default)(this, ISO6391);
  }

  (0, _createClass3.default)(ISO6391, null, [{
    key: 'getLanguages',
    value: function getLanguages() {
      var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return codes.map(function (code) {
        return {
          code: code,
          nameTH: ISO6391.getNameTH(code),
          nameEN: ISO6391.getNameEN(code),
          nativeName: ISO6391.getNativeName(code)
        };
      });
    }
  }, {
    key: 'getNameTH',
    value: function getNameTH(code) {
      return ISO6391.validate(code) ? _data2.default[code].nameTH : '';
    }
  }, {
    key: 'getNameEN',
    value: function getNameEN(code) {
      return ISO6391.validate(code) ? _data2.default[code].nameEN : '';
    }
  }, {
    key: 'getAllNamesEN',
    value: function getAllNamesEN() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.nameEN;
      });
    }
  }, {
    key: 'getAllNamesTH',
    value: function getAllNamesTH() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.nameTH;
      });
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      return ISO6391.validate(code) ? _data2.default[code].nativeName : '';
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.nativeName;
      });
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      var code = (0, _keys2.default)(_data2.default).find(function (code) {
        var language = _data2.default[code];

        return language.nameEN.toLowerCase() === name.toLowerCase() || language.nameTH === name || language.nativeName.toLowerCase() === name.toLowerCase();
      });
      return code || '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return (0, _keys2.default)(_data2.default);
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      return _data2.default.hasOwnProperty(code);
    }
  }]);
  return ISO6391;
}();

exports.default = ISO6391;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map