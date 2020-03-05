define('ember-math-helpers/helpers/abs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.abs = abs;
  function abs(params) {
    return Math.abs(params[0]);
  }

  exports.default = Ember.Helper.helper(abs);
});
define('ember-math-helpers/helpers/acos', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.acos = acos;
  function acos(params) {
    return Math.acos(params[0]);
  }

  exports.default = Ember.Helper.helper(acos);
});
define('ember-math-helpers/helpers/acosh', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.acosh = acosh;
  function acosh(params) {
    return Math.acosh(params[0]);
  }

  exports.default = Ember.Helper.helper(acosh);
});
define('ember-math-helpers/helpers/add', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.add = add;
  function add(params) {
    return params.reduce(function (a, b) {
      return Number(a) + Number(b);
    });
  }

  exports.default = Ember.Helper.helper(add);
});
define('ember-math-helpers/helpers/asin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.asin = asin;
  function asin(params) {
    return Math.asin(params[0]);
  }

  exports.default = Ember.Helper.helper(asin);
});
define('ember-math-helpers/helpers/asinh', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.asinh = asinh;
  function asinh(params) {
    return Math.asinh(params[0]);
  }

  exports.default = Ember.Helper.helper(asinh);
});
define('ember-math-helpers/helpers/atan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.atan = atan;
  function atan(params) {
    return Math.atan(params[0]);
  }

  exports.default = Ember.Helper.helper(atan);
});
define('ember-math-helpers/helpers/atan2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.atan2 = atan2;
  function atan2(params) {
    return Math.atan2(params[0], params[1]);
  }

  exports.default = Ember.Helper.helper(atan2);
});
define('ember-math-helpers/helpers/atanh', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.atanh = atanh;
  function atanh(params) {
    return Math.atanh(params[0]);
  }

  exports.default = Ember.Helper.helper(atanh);
});
define('ember-math-helpers/helpers/cbrt', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cbrt = cbrt;
  function cbrt(params) {
    return Math.cbrt(params[0]);
  }

  exports.default = Ember.Helper.helper(cbrt);
});
define('ember-math-helpers/helpers/ceil', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ceil = ceil;
  function ceil(params) {
    return Math.ceil(params[0]);
  }

  exports.default = Ember.Helper.helper(ceil);
});
define('ember-math-helpers/helpers/clz32', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.clz32 = clz32;
  function clz32(params) {
    return Math.clz32(params[0]);
  }

  exports.default = Ember.Helper.helper(clz32);
});
define('ember-math-helpers/helpers/cos', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cos = cos;
  function cos(params) {
    return Math.cos(params[0]);
  }

  exports.default = Ember.Helper.helper(cos);
});
define('ember-math-helpers/helpers/cosh', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cosh = cosh;
  function cosh(params) {
    return Math.cosh(params[0]);
  }

  exports.default = Ember.Helper.helper(cosh);
});
define('ember-math-helpers/helpers/div', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.div = div;
  function div(params) {
    return params.reduce(function (a, b) {
      return Number(a) / Number(b);
    });
  }

  exports.default = Ember.Helper.helper(div);
});
define('ember-math-helpers/helpers/exp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.exp = exp;
  function exp(params) {
    return Math.exp(params[0]);
  }

  exports.default = Ember.Helper.helper(exp);
});
define('ember-math-helpers/helpers/expm1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.expm1 = expm1;
  function expm1(params) {
    return Math.expm1(params[0]);
  }

  exports.default = Ember.Helper.helper(expm1);
});
define('ember-math-helpers/helpers/floor', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.floor = floor;
  function floor(params) {
    return Math.floor(params[0]);
  }

  exports.default = Ember.Helper.helper(floor);
});
define('ember-math-helpers/helpers/fround', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fround = fround;
  function fround(params) {
    return Math.fround(params[0]);
  }

  exports.default = Ember.Helper.helper(fround);
});
define('ember-math-helpers/helpers/gcd', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.gcd = gcd;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * Returns the greatest positive integer that divides each of two integers
   */
  function gcd(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        _a = _ref2$ === undefined ? 0 : _ref2$,
        _ref2$2 = _ref2[1],
        _b = _ref2$2 === undefined ? 0 : _ref2$2;

    var a = Math.abs(_a);
    var b = Math.abs(_b);

    if (a === 0) {
      return b;
    }

    if (b === 0) {
      return a;
    }

    return gcd([b, a % b]);
  }

  exports.default = Ember.Helper.helper(gcd);
});
define('ember-math-helpers/helpers/hypot', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hypot = hypot;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function hypot(params) {
    return Math.hypot.apply(Math, _toConsumableArray(params));
  }

  exports.default = Ember.Helper.helper(hypot);
});
define('ember-math-helpers/helpers/imul', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.imul = imul;
  function imul(params) {
    return Math.imul(params[0], params[1]);
  }

  exports.default = Ember.Helper.helper(imul);
});
define('ember-math-helpers/helpers/log-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.logE = logE;
  function logE(params) {
    return Math.log(params[0]);
  }

  exports.default = Ember.Helper.helper(logE);
});
define('ember-math-helpers/helpers/log10', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.log10 = log10;
  function log10(params) {
    return Math.log10(params[0]);
  }

  exports.default = Ember.Helper.helper(log10);
});
define('ember-math-helpers/helpers/log1p', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.log1p = log1p;
  function log1p(params) {
    return Math.log1p(params[0]);
  }

  exports.default = Ember.Helper.helper(log1p);
});
define('ember-math-helpers/helpers/log2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.log2 = log2;
  function log2(params) {
    return Math.log2(params[0]);
  }

  exports.default = Ember.Helper.helper(log2);
});
define('ember-math-helpers/helpers/max', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.max = max;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function max(params) {
    return Math.max.apply(Math, _toConsumableArray(params));
  }

  exports.default = Ember.Helper.helper(max);
});
define('ember-math-helpers/helpers/min', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.min = min;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function min(params) {
    return Math.min.apply(Math, _toConsumableArray(params));
  }

  exports.default = Ember.Helper.helper(min);
});
define('ember-math-helpers/helpers/mod', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mod = mod;
  function mod(params) {
    return params.reduce(function (a, b) {
      return Number(a) % Number(b);
    });
  }

  exports.default = Ember.Helper.helper(mod);
});
define('ember-math-helpers/helpers/mult', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mult = mult;
  function mult(params) {
    return params.reduce(function (a, b) {
      return Number(a) * Number(b);
    });
  }

  exports.default = Ember.Helper.helper(mult);
});
define('ember-math-helpers/helpers/pow', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pow = pow;
  function pow(params) {
    return params.reduce(function (base, exponent) {
      return Math.pow(base, exponent);
    });
  }

  exports.default = Ember.Helper.helper(pow);
});
define('ember-math-helpers/helpers/random', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.random = random;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var min = Math.min,
      max = Math.max;


  // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#max(0, min(MAX_DECIMALS, decimals))));
  var MAX_DECIMALS = 20;

  // 💡 Using Number.toFixed, we'll get rounding for free alongside
  // decimal precision. We'll default to whole-number rounding simply
  // by defaulting `decimals` to 0
  var DEFAULT_OPTS = {
    decimals: 0
  };

  function random(params) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTS,
        decimals = _ref.decimals;

    // no positional args, but only an options hash from named args
    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && !Ember.isArray(params)) {
      decimals = typeof params.decimals !== 'undefined' ? params.decimals : DEFAULT_OPTS.decimals;

      return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
    }

    // one positional arg: treat it as an upper bound
    if (params && params.length === 1) {
      var _params = _slicedToArray(params, 1),
          upperBound = _params[0];

      return +(Math.random() * upperBound).toFixed(max(0, min(MAX_DECIMALS, decimals)));
    }

    // two positional args: use them to derive upper and lower bounds
    if (params && params.length === 2) {
      var _params2 = _slicedToArray(params, 2),
          lowerBound = _params2[0],
          _upperBound = _params2[1];

      // for convinience, swap if a higher number is accidentally passed first
      if (_upperBound < lowerBound) {
        var _ref2 = [_upperBound, lowerBound];
        lowerBound = _ref2[0];
        _upperBound = _ref2[1];
      }
      return +(lowerBound + Math.random() * (_upperBound - lowerBound)).toFixed(max(0, min(MAX_DECIMALS, decimals)));
    }

    // no positional or named args: just return Math.random() w/ default decimal precision
    return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
  }

  exports.default = Ember.Helper.helper(random);
});
define('ember-math-helpers/helpers/round', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.round = round;


  // adapted from:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding
  /**
   * Decimal adjustment of a number.
   *
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math.round(value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(-value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
  }

  function round(number, namedArgs) {
    if (namedArgs) {
      if (namedArgs.decimals) {
        return decimalAdjust(number[0], -namedArgs.decimals);
      }
      if (namedArgs.exp) {
        return decimalAdjust(number[0], namedArgs.exp);
      }
    }
    return Math.round(number[0]);
  }

  exports.default = Ember.Helper.helper(round);
});
define('ember-math-helpers/helpers/sign', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sign = sign;
  function sign(params) {
    return Math.sign(params[0]);
  }

  exports.default = Ember.Helper.helper(sign);
});
define('ember-math-helpers/helpers/sin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sin = sin;
  function sin(params) {
    return Math.sin(params[0]);
  }

  exports.default = Ember.Helper.helper(sin);
});
define('ember-math-helpers/helpers/sqrt', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sqrt = sqrt;
  function sqrt(params) {
    return Math.sqrt(params[0]);
  }

  exports.default = Ember.Helper.helper(sqrt);
});
define('ember-math-helpers/helpers/sub', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sub = sub;
  function sub(params) {
    return params.reduce(function (a, b) {
      return Number(a) - Number(b);
    });
  }

  exports.default = Ember.Helper.helper(sub);
});
define('ember-math-helpers/helpers/tan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.tan = tan;
  function tan(params) {
    return Math.tan(params[0]);
  }

  exports.default = Ember.Helper.helper(tan);
});
define('ember-math-helpers/helpers/tanh', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.tanh = tanh;
  function tanh(params) {
    return Math.tanh(params[0]);
  }

  exports.default = Ember.Helper.helper(tanh);
});
define('ember-math-helpers/helpers/trunc', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.trunc = trunc;
  function trunc(params) {
    return Math.trunc(params[0]);
  }

  exports.default = Ember.Helper.helper(trunc);
});//# sourceMappingURL=engine-vendor.map
