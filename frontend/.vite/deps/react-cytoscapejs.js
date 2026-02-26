import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-WYYPSHNY.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object3) {
          if (typeof object3 === "object" && object3 !== null) {
            var $$typeof = object3.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object3.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element3 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object3) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object3) || typeOf(object3) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object3) {
          return typeOf(object3) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object3) {
          return typeOf(object3) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object3) {
          return typeOf(object3) === REACT_PROVIDER_TYPE;
        }
        function isElement(object3) {
          return typeof object3 === "object" && object3 !== null && object3.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object3) {
          return typeOf(object3) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object3) {
          return typeOf(object3) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object3) {
          return typeOf(object3) === REACT_LAZY_TYPE;
        }
        function isMemo(object3) {
          return typeOf(object3) === REACT_MEMO_TYPE;
        }
        function isPortal(object3) {
          return typeOf(object3) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object3) {
          return typeOf(object3) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object3) {
          return typeOf(object3) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object3) {
          return typeOf(object3) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element3;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error3;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error3 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error3 = ex;
            }
            if (error3 && !(error3 instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error3 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error3 instanceof Error && !(error3.message in loggedTypeFailures)) {
              loggedTypeFailures[error3.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error3.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign5 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x3, y3) {
        if (x3 === y3) {
          return x3 !== 0 || 1 / x3 === 1 / y3;
        } else {
          return x3 !== x3 && y3 !== y3;
        }
      }
      function PropTypeError(message, data4) {
        this.message = message;
        this.data = data4 && typeof data4 === "object" ? data4 : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error3 = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error3 instanceof Error) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is2(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error3 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error3 instanceof Error) {
                return error3;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error3 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error3) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign5({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error3 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error3) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step3;
              if (iteratorFn !== propValue.entries) {
                while (!(step3 = iterator.next()).done) {
                  if (!isNode2(step3.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step3 = iterator.next()).done) {
                  var entry = step3.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-cytoscapejs/dist/react-cytoscape.modern.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/cytoscape/dist/cytoscape.esm.mjs
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n = Array(a2); e2 < a2; e2++) n[e2] = r2[e2];
  return n;
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _classCallCheck(a2, n) {
  if (!(a2 instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _createForOfIteratorHelper(r2, e2) {
  var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (!t2) {
    if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray(r2)) || e2) {
      t2 && (r2 = t2);
      var n = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return n >= r2.length ? {
            done: true
          } : {
            done: false,
            value: r2[n++]
          };
        },
        e: function(r3) {
          throw r3;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, u2 = false;
  return {
    s: function() {
      t2 = t2.call(r2);
    },
    n: function() {
      var r3 = t2.next();
      return a2 = r3.done, r3;
    },
    e: function(r3) {
      u2 = true, o2 = r3;
    },
    f: function() {
      try {
        a2 || null == t2.return || t2.return();
      } finally {
        if (u2) throw o2;
      }
    }
  };
}
function _defineProperty$1(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n = r3;
    } finally {
      try {
        if (!f2 && null != t2.return && (u2 = t2.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n;
      }
    }
    return a2;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
var _window = typeof window === "undefined" ? null : window;
var navigator = _window ? _window.navigator : null;
_window ? _window.document : null;
var typeofstr = _typeof("");
var typeofobj = _typeof({});
var typeoffn = _typeof(function() {
});
var typeofhtmlele = typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement);
var instanceStr = function instanceStr2(obj) {
  return obj && obj.instanceString && fn$6(obj.instanceString) ? obj.instanceString() : null;
};
var string = function string2(obj) {
  return obj != null && _typeof(obj) == typeofstr;
};
var fn$6 = function fn(obj) {
  return obj != null && _typeof(obj) === typeoffn;
};
var array = function array2(obj) {
  return !elementOrCollection(obj) && (Array.isArray ? Array.isArray(obj) : obj != null && obj instanceof Array);
};
var plainObject = function plainObject2(obj) {
  return obj != null && _typeof(obj) === typeofobj && !array(obj) && obj.constructor === Object;
};
var object = function object2(obj) {
  return obj != null && _typeof(obj) === typeofobj;
};
var number$1 = function number(obj) {
  return obj != null && _typeof(obj) === _typeof(1) && !isNaN(obj);
};
var integer = function integer2(obj) {
  return number$1(obj) && Math.floor(obj) === obj;
};
var htmlElement = function htmlElement2(obj) {
  if ("undefined" === typeofhtmlele) {
    return void 0;
  } else {
    return null != obj && obj instanceof HTMLElement;
  }
};
var elementOrCollection = function elementOrCollection2(obj) {
  return element(obj) || collection(obj);
};
var element = function element2(obj) {
  return instanceStr(obj) === "collection" && obj._private.single;
};
var collection = function collection2(obj) {
  return instanceStr(obj) === "collection" && !obj._private.single;
};
var core = function core2(obj) {
  return instanceStr(obj) === "core";
};
var stylesheet = function stylesheet2(obj) {
  return instanceStr(obj) === "stylesheet";
};
var event = function event2(obj) {
  return instanceStr(obj) === "event";
};
var emptyString = function emptyString2(obj) {
  if (obj === void 0 || obj === null) {
    return true;
  } else if (obj === "" || obj.match(/^\s+$/)) {
    return true;
  }
  return false;
};
var domElement = function domElement2(obj) {
  if (typeof HTMLElement === "undefined") {
    return false;
  } else {
    return obj instanceof HTMLElement;
  }
};
var boundingBox = function boundingBox2(obj) {
  return plainObject(obj) && number$1(obj.x1) && number$1(obj.x2) && number$1(obj.y1) && number$1(obj.y2);
};
var promise = function promise2(obj) {
  return object(obj) && fn$6(obj.then);
};
var ms = function ms2() {
  return navigator && navigator.userAgent.match(/msie|trident|edge/i);
};
var memoize = function memoize2(fn3, keyFn) {
  if (!keyFn) {
    keyFn = function keyFn2() {
      if (arguments.length === 1) {
        return arguments[0];
      } else if (arguments.length === 0) {
        return "undefined";
      }
      var args = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        args.push(arguments[i2]);
      }
      return args.join("$");
    };
  }
  var _memoizedFn = function memoizedFn() {
    var self2 = this;
    var args = arguments;
    var ret;
    var k = keyFn.apply(self2, args);
    var cache3 = _memoizedFn.cache;
    if (!(ret = cache3[k])) {
      ret = cache3[k] = fn3.apply(self2, args);
    }
    return ret;
  };
  _memoizedFn.cache = {};
  return _memoizedFn;
};
var camel2dash = memoize(function(str) {
  return str.replace(/([A-Z])/g, function(v) {
    return "-" + v.toLowerCase();
  });
});
var dash2camel = memoize(function(str) {
  return str.replace(/(-\w)/g, function(v) {
    return v[1].toUpperCase();
  });
});
var prependCamel = memoize(function(prefix, str) {
  return prefix + str[0].toUpperCase() + str.substring(1);
}, function(prefix, str) {
  return prefix + "$" + str;
});
var capitalize = function capitalize2(str) {
  if (emptyString(str)) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.substring(1);
};
var endsWith = function endsWith2(string3, suffix) {
  return string3.slice(-1 * suffix.length) === suffix;
};
var number2 = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
var rgba = "rgb[a]?\\((" + number2 + "[%]?)\\s*,\\s*(" + number2 + "[%]?)\\s*,\\s*(" + number2 + "[%]?)(?:\\s*,\\s*(" + number2 + "))?\\)";
var rgbaNoBackRefs = "rgb[a]?\\((?:" + number2 + "[%]?)\\s*,\\s*(?:" + number2 + "[%]?)\\s*,\\s*(?:" + number2 + "[%]?)(?:\\s*,\\s*(?:" + number2 + "))?\\)";
var hsla = "hsl[a]?\\((" + number2 + ")\\s*,\\s*(" + number2 + "[%])\\s*,\\s*(" + number2 + "[%])(?:\\s*,\\s*(" + number2 + "))?\\)";
var hslaNoBackRefs = "hsl[a]?\\((?:" + number2 + ")\\s*,\\s*(?:" + number2 + "[%])\\s*,\\s*(?:" + number2 + "[%])(?:\\s*,\\s*(?:" + number2 + "))?\\)";
var hex3 = "\\#[0-9a-fA-F]{3}";
var hex6 = "\\#[0-9a-fA-F]{6}";
var ascending = function ascending2(a2, b2) {
  if (a2 < b2) {
    return -1;
  } else if (a2 > b2) {
    return 1;
  } else {
    return 0;
  }
};
var descending = function descending2(a2, b2) {
  return -1 * ascending(a2, b2);
};
var extend = Object.assign != null ? Object.assign.bind(Object) : function(tgt) {
  var args = arguments;
  for (var i2 = 1; i2 < args.length; i2++) {
    var obj = args[i2];
    if (obj == null) {
      continue;
    }
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; j++) {
      var k = keys[j];
      tgt[k] = obj[k];
    }
  }
  return tgt;
};
var hex2tuple = function hex2tuple2(hex) {
  if (!(hex.length === 4 || hex.length === 7) || hex[0] !== "#") {
    return;
  }
  var shortHex = hex.length === 4;
  var r2, g2, b2;
  var base = 16;
  if (shortHex) {
    r2 = parseInt(hex[1] + hex[1], base);
    g2 = parseInt(hex[2] + hex[2], base);
    b2 = parseInt(hex[3] + hex[3], base);
  } else {
    r2 = parseInt(hex[1] + hex[2], base);
    g2 = parseInt(hex[3] + hex[4], base);
    b2 = parseInt(hex[5] + hex[6], base);
  }
  return [r2, g2, b2];
};
var hsl2tuple = function hsl2tuple2(hsl) {
  var ret;
  var h2, s2, l2, a2, r2, g2, b2;
  function hue2rgb(p4, q2, t2) {
    if (t2 < 0) t2 += 1;
    if (t2 > 1) t2 -= 1;
    if (t2 < 1 / 6) return p4 + (q2 - p4) * 6 * t2;
    if (t2 < 1 / 2) return q2;
    if (t2 < 2 / 3) return p4 + (q2 - p4) * (2 / 3 - t2) * 6;
    return p4;
  }
  var m2 = new RegExp("^" + hsla + "$").exec(hsl);
  if (m2) {
    h2 = parseInt(m2[1]);
    if (h2 < 0) {
      h2 = (360 - -1 * h2 % 360) % 360;
    } else if (h2 > 360) {
      h2 = h2 % 360;
    }
    h2 /= 360;
    s2 = parseFloat(m2[2]);
    if (s2 < 0 || s2 > 100) {
      return;
    }
    s2 = s2 / 100;
    l2 = parseFloat(m2[3]);
    if (l2 < 0 || l2 > 100) {
      return;
    }
    l2 = l2 / 100;
    a2 = m2[4];
    if (a2 !== void 0) {
      a2 = parseFloat(a2);
      if (a2 < 0 || a2 > 1) {
        return;
      }
    }
    if (s2 === 0) {
      r2 = g2 = b2 = Math.round(l2 * 255);
    } else {
      var q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      var p3 = 2 * l2 - q;
      r2 = Math.round(255 * hue2rgb(p3, q, h2 + 1 / 3));
      g2 = Math.round(255 * hue2rgb(p3, q, h2));
      b2 = Math.round(255 * hue2rgb(p3, q, h2 - 1 / 3));
    }
    ret = [r2, g2, b2, a2];
  }
  return ret;
};
var rgb2tuple = function rgb2tuple2(rgb) {
  var ret;
  var m2 = new RegExp("^" + rgba + "$").exec(rgb);
  if (m2) {
    ret = [];
    var isPct = [];
    for (var i2 = 1; i2 <= 3; i2++) {
      var channel = m2[i2];
      if (channel[channel.length - 1] === "%") {
        isPct[i2] = true;
      }
      channel = parseFloat(channel);
      if (isPct[i2]) {
        channel = channel / 100 * 255;
      }
      if (channel < 0 || channel > 255) {
        return;
      }
      ret.push(Math.floor(channel));
    }
    var atLeastOneIsPct = isPct[1] || isPct[2] || isPct[3];
    var allArePct = isPct[1] && isPct[2] && isPct[3];
    if (atLeastOneIsPct && !allArePct) {
      return;
    }
    var alpha = m2[4];
    if (alpha !== void 0) {
      alpha = parseFloat(alpha);
      if (alpha < 0 || alpha > 1) {
        return;
      }
      ret.push(alpha);
    }
  }
  return ret;
};
var colorname2tuple = function colorname2tuple2(color) {
  return colors[color.toLowerCase()];
};
var color2tuple = function color2tuple2(color) {
  return (array(color) ? color : null) || colorname2tuple(color) || hex2tuple(color) || rgb2tuple(color) || hsl2tuple(color);
};
var colors = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
var setMap = function setMap2(options2) {
  var obj = options2.map;
  var keys = options2.keys;
  var l2 = keys.length;
  for (var i2 = 0; i2 < l2; i2++) {
    var key = keys[i2];
    if (plainObject(key)) {
      throw Error("Tried to set map with object key");
    }
    if (i2 < keys.length - 1) {
      if (obj[key] == null) {
        obj[key] = {};
      }
      obj = obj[key];
    } else {
      obj[key] = options2.value;
    }
  }
};
var getMap = function getMap2(options2) {
  var obj = options2.map;
  var keys = options2.keys;
  var l2 = keys.length;
  for (var i2 = 0; i2 < l2; i2++) {
    var key = keys[i2];
    if (plainObject(key)) {
      throw Error("Tried to get map with object key");
    }
    obj = obj[key];
    if (obj == null) {
      return obj;
    }
  }
  return obj;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x3) {
  return x3 && x3.__esModule && Object.prototype.hasOwnProperty.call(x3, "default") ? x3["default"] : x3;
}
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  isObject_1 = isObject;
  return isObject_1;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var now_1;
var hasRequiredNow;
function requireNow() {
  if (hasRequiredNow) return now_1;
  hasRequiredNow = 1;
  var root = require_root();
  var now = function() {
    return root.Date.now();
  };
  now_1 = now;
  return now_1;
}
var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;
function require_trimmedEndIndex() {
  if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
  hasRequired_trimmedEndIndex = 1;
  var reWhitespace = /\s/;
  function trimmedEndIndex(string3) {
    var index = string3.length;
    while (index-- && reWhitespace.test(string3.charAt(index))) {
    }
    return index;
  }
  _trimmedEndIndex = trimmedEndIndex;
  return _trimmedEndIndex;
}
var _baseTrim;
var hasRequired_baseTrim;
function require_baseTrim() {
  if (hasRequired_baseTrim) return _baseTrim;
  hasRequired_baseTrim = 1;
  var trimmedEndIndex = require_trimmedEndIndex();
  var reTrimStart = /^\s+/;
  function baseTrim(string3) {
    return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
  }
  _baseTrim = baseTrim;
  return _baseTrim;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol2 = root.Symbol;
  _Symbol = Symbol2;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var isSymbol_1;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  isSymbol_1 = isSymbol;
  return isSymbol_1;
}
var toNumber_1;
var hasRequiredToNumber;
function requireToNumber() {
  if (hasRequiredToNumber) return toNumber_1;
  hasRequiredToNumber = 1;
  var baseTrim = require_baseTrim(), isObject = requireIsObject(), isSymbol = requireIsSymbol();
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  toNumber_1 = toNumber;
  return toNumber_1;
}
var debounce_1;
var hasRequiredDebounce;
function requireDebounce() {
  if (hasRequiredDebounce) return debounce_1;
  hasRequiredDebounce = 1;
  var isObject = requireIsObject(), now = requireNow(), toNumber = requireToNumber();
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce2(func, wait, options2) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options2)) {
      leading = !!options2.leading;
      maxing = "maxWait" in options2;
      maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options2 ? !!options2.trailing : trailing;
    }
    function invokeFunc(time2) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time2;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time2) {
      lastInvokeTime = time2;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time2) : result;
    }
    function remainingWait(time2) {
      var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time2) {
      var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time2 = now();
      if (shouldInvoke(time2)) {
        return trailingEdge(time2);
      }
      timerId = setTimeout(timerExpired, remainingWait(time2));
    }
    function trailingEdge(time2) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time2);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time2 = now(), isInvoking = shouldInvoke(time2);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time2;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  debounce_1 = debounce2;
  return debounce_1;
}
var debounceExports = requireDebounce();
var debounce = getDefaultExportFromCjs(debounceExports);
var performance$1 = _window ? _window.performance : null;
var pnow = performance$1 && performance$1.now ? function() {
  return performance$1.now();
} : function() {
  return Date.now();
};
var raf = (function() {
  if (_window) {
    if (_window.requestAnimationFrame) {
      return function(fn3) {
        _window.requestAnimationFrame(fn3);
      };
    } else if (_window.mozRequestAnimationFrame) {
      return function(fn3) {
        _window.mozRequestAnimationFrame(fn3);
      };
    } else if (_window.webkitRequestAnimationFrame) {
      return function(fn3) {
        _window.webkitRequestAnimationFrame(fn3);
      };
    } else if (_window.msRequestAnimationFrame) {
      return function(fn3) {
        _window.msRequestAnimationFrame(fn3);
      };
    }
  }
  return function(fn3) {
    if (fn3) {
      setTimeout(function() {
        fn3(pnow());
      }, 1e3 / 60);
    }
  };
})();
var requestAnimationFrame = function requestAnimationFrame2(fn3) {
  return raf(fn3);
};
var performanceNow = pnow;
var DEFAULT_HASH_SEED = 9261;
var K = 65599;
var DEFAULT_HASH_SEED_ALT = 5381;
var hashIterableInts = function hashIterableInts2(iterator) {
  var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED;
  var hash = seed;
  var entry;
  for (; ; ) {
    entry = iterator.next();
    if (entry.done) {
      break;
    }
    hash = hash * K + entry.value | 0;
  }
  return hash;
};
var hashInt = function hashInt2(num) {
  var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED;
  return seed * K + num | 0;
};
var hashIntAlt = function hashIntAlt2(num) {
  var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_HASH_SEED_ALT;
  return (seed << 5) + seed + num | 0;
};
var combineHashes = function combineHashes2(hash1, hash2) {
  return hash1 * 2097152 + hash2;
};
var combineHashesArray = function combineHashesArray2(hashes) {
  return hashes[0] * 2097152 + hashes[1];
};
var hashArrays = function hashArrays2(hashes1, hashes2) {
  return [hashInt(hashes1[0], hashes2[0]), hashIntAlt(hashes1[1], hashes2[1])];
};
var hashIntsArray = function hashIntsArray2(ints, seed) {
  var entry = {
    value: 0,
    done: false
  };
  var i2 = 0;
  var length = ints.length;
  var iterator = {
    next: function next() {
      if (i2 < length) {
        entry.value = ints[i2++];
      } else {
        entry.done = true;
      }
      return entry;
    }
  };
  return hashIterableInts(iterator, seed);
};
var hashString = function hashString2(str, seed) {
  var entry = {
    value: 0,
    done: false
  };
  var i2 = 0;
  var length = str.length;
  var iterator = {
    next: function next() {
      if (i2 < length) {
        entry.value = str.charCodeAt(i2++);
      } else {
        entry.done = true;
      }
      return entry;
    }
  };
  return hashIterableInts(iterator, seed);
};
var hashStrings = function hashStrings2() {
  return hashStringsArray(arguments);
};
var hashStringsArray = function hashStringsArray2(strs) {
  var hash;
  for (var i2 = 0; i2 < strs.length; i2++) {
    var str = strs[i2];
    if (i2 === 0) {
      hash = hashString(str);
    } else {
      hash = hashString(str, hash);
    }
  }
  return hash;
};
function rotatePoint(x3, y3, centerX, centerY, angleDegrees) {
  var angleRadians = angleDegrees * Math.PI / 180;
  var rotatedX = Math.cos(angleRadians) * (x3 - centerX) - Math.sin(angleRadians) * (y3 - centerY) + centerX;
  var rotatedY = Math.sin(angleRadians) * (x3 - centerX) + Math.cos(angleRadians) * (y3 - centerY) + centerY;
  return {
    x: rotatedX,
    y: rotatedY
  };
}
var movePointByBoxAspect = function movePointByBoxAspect2(x3, y3, boxX, boxY, skewX, skewY) {
  return {
    x: (x3 - boxX) * skewX + boxX,
    y: (y3 - boxY) * skewY + boxY
  };
};
function rotatePosAndSkewByBox(pos, box, angleDegrees) {
  if (angleDegrees === 0) return pos;
  var centerX = (box.x1 + box.x2) / 2;
  var centerY = (box.y1 + box.y2) / 2;
  var skewX = box.w / box.h;
  var skewY = 1 / skewX;
  var rotated = rotatePoint(pos.x, pos.y, centerX, centerY, angleDegrees);
  var skewed = movePointByBoxAspect(rotated.x, rotated.y, centerX, centerY, skewX, skewY);
  return {
    x: skewed.x,
    y: skewed.y
  };
}
var warningsEnabled = true;
var warnSupported = console.warn != null;
var traceSupported = console.trace != null;
var MAX_INT$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
var trueify = function trueify2() {
  return true;
};
var falsify = function falsify2() {
  return false;
};
var zeroify = function zeroify2() {
  return 0;
};
var noop$1 = function noop() {
};
var error = function error2(msg) {
  throw new Error(msg);
};
var warnings = function warnings2(enabled) {
  if (enabled !== void 0) {
    warningsEnabled = !!enabled;
  } else {
    return warningsEnabled;
  }
};
var warn = function warn2(msg) {
  if (!warnings()) {
    return;
  }
  if (warnSupported) {
    console.warn(msg);
  } else {
    console.log(msg);
    if (traceSupported) {
      console.trace();
    }
  }
};
var clone = function clone2(obj) {
  return extend({}, obj);
};
var copy = function copy2(obj) {
  if (obj == null) {
    return obj;
  }
  if (array(obj)) {
    return obj.slice();
  } else if (plainObject(obj)) {
    return clone(obj);
  } else {
    return obj;
  }
};
var copyArray = function copyArray2(arr) {
  return arr.slice();
};
var uuid = function uuid2(a2, b2) {
  for (
    // loop :)
    b2 = a2 = "";
    // b - result , a - numeric letiable
    a2++ < 36;
    //
    b2 += a2 * 51 & 52 ? (
      //  return a random number or 4
      (a2 ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (a2 ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  ) ;
  return b2;
};
var _staticEmptyObject = {};
var staticEmptyObject = function staticEmptyObject2() {
  return _staticEmptyObject;
};
var defaults$g = function defaults(_defaults) {
  var keys = Object.keys(_defaults);
  return function(opts) {
    var filledOpts = {};
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      var optVal = opts == null ? void 0 : opts[key];
      filledOpts[key] = optVal === void 0 ? _defaults[key] : optVal;
    }
    return filledOpts;
  };
};
var removeFromArray = function removeFromArray2(arr, ele, oneCopy) {
  for (var i2 = arr.length - 1; i2 >= 0; i2--) {
    if (arr[i2] === ele) {
      arr.splice(i2, 1);
    }
  }
};
var clearArray = function clearArray2(arr) {
  arr.splice(0, arr.length);
};
var push = function push2(arr, otherArr) {
  for (var i2 = 0; i2 < otherArr.length; i2++) {
    var el = otherArr[i2];
    arr.push(el);
  }
};
var getPrefixedProperty = function getPrefixedProperty2(obj, propName, prefix) {
  if (prefix) {
    propName = prependCamel(prefix, propName);
  }
  return obj[propName];
};
var setPrefixedProperty = function setPrefixedProperty2(obj, propName, prefix, value) {
  if (prefix) {
    propName = prependCamel(prefix, propName);
  }
  obj[propName] = value;
};
var ObjectMap = (function() {
  function ObjectMap2() {
    _classCallCheck(this, ObjectMap2);
    this._obj = {};
  }
  return _createClass(ObjectMap2, [{
    key: "set",
    value: function set2(key, val) {
      this._obj[key] = val;
      return this;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this._obj[key] = void 0;
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function has(key) {
      return this._obj[key] !== void 0;
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this._obj[key];
    }
  }]);
})();
var Map$1 = typeof Map !== "undefined" ? Map : ObjectMap;
var undef = "undefined";
var ObjectSet = (function() {
  function ObjectSet2(arrayOrObjectSet) {
    _classCallCheck(this, ObjectSet2);
    this._obj = /* @__PURE__ */ Object.create(null);
    this.size = 0;
    if (arrayOrObjectSet != null) {
      var arr;
      if (arrayOrObjectSet.instanceString != null && arrayOrObjectSet.instanceString() === this.instanceString()) {
        arr = arrayOrObjectSet.toArray();
      } else {
        arr = arrayOrObjectSet;
      }
      for (var i2 = 0; i2 < arr.length; i2++) {
        this.add(arr[i2]);
      }
    }
  }
  return _createClass(ObjectSet2, [{
    key: "instanceString",
    value: function instanceString4() {
      return "set";
    }
  }, {
    key: "add",
    value: function add3(val) {
      var o2 = this._obj;
      if (o2[val] !== 1) {
        o2[val] = 1;
        this.size++;
      }
    }
  }, {
    key: "delete",
    value: function _delete(val) {
      var o2 = this._obj;
      if (o2[val] === 1) {
        o2[val] = 0;
        this.size--;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function has(val) {
      return this._obj[val] === 1;
    }
  }, {
    key: "toArray",
    value: function toArray2() {
      var _this = this;
      return Object.keys(this._obj).filter(function(key) {
        return _this.has(key);
      });
    }
  }, {
    key: "forEach",
    value: function forEach2(callback, thisArg) {
      return this.toArray().forEach(callback, thisArg);
    }
  }]);
})();
var Set$1 = (typeof Set === "undefined" ? "undefined" : _typeof(Set)) !== undef ? Set : ObjectSet;
var Element = function Element2(cy, params) {
  var restore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (cy === void 0 || params === void 0 || !core(cy)) {
    error("An element must have a core reference and parameters set");
    return;
  }
  var group2 = params.group;
  if (group2 == null) {
    if (params.data && params.data.source != null && params.data.target != null) {
      group2 = "edges";
    } else {
      group2 = "nodes";
    }
  }
  if (group2 !== "nodes" && group2 !== "edges") {
    error("An element must be of type `nodes` or `edges`; you specified `" + group2 + "`");
    return;
  }
  this.length = 1;
  this[0] = this;
  var _p = this._private = {
    cy,
    single: true,
    // indicates this is an element
    data: params.data || {},
    // data object
    position: params.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: false,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: group2,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: true,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: params.selected ? true : false,
    // whether it's selected
    selectable: params.selectable === void 0 ? true : params.selectable ? true : false,
    // whether it's selectable
    locked: params.locked ? true : false,
    // whether the element is locked (cannot be moved)
    grabbed: false,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: params.grabbable === void 0 ? true : params.grabbable ? true : false,
    // whether the element can be grabbed
    pannable: params.pannable === void 0 ? group2 === "edges" ? true : false : params.pannable ? true : false,
    // whether the element has passthrough panning enabled
    active: false,
    // whether the element is active from user interaction
    classes: new Set$1(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: params.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: params.parent && params.parent.isNode() ? params.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: false,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (_p.position.x == null) {
    _p.position.x = 0;
  }
  if (_p.position.y == null) {
    _p.position.y = 0;
  }
  if (params.renderedPosition) {
    var rpos = params.renderedPosition;
    var pan2 = cy.pan();
    var zoom2 = cy.zoom();
    _p.position = {
      x: (rpos.x - pan2.x) / zoom2,
      y: (rpos.y - pan2.y) / zoom2
    };
  }
  var classes2 = [];
  if (array(params.classes)) {
    classes2 = params.classes;
  } else if (string(params.classes)) {
    classes2 = params.classes.split(/\s+/);
  }
  for (var i2 = 0, l2 = classes2.length; i2 < l2; i2++) {
    var cls = classes2[i2];
    if (!cls || cls === "") {
      continue;
    }
    _p.classes.add(cls);
  }
  this.createEmitter();
  if (restore === void 0 || restore) {
    this.restore();
  }
  var bypass = params.style || params.css;
  if (bypass) {
    warn("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead.");
    this.style(bypass);
  }
};
var defineSearch = function defineSearch2(params) {
  params = {
    bfs: params.bfs || !params.dfs,
    dfs: params.dfs || !params.bfs
  };
  return function searchFn(roots, fn3, directed) {
    var options2;
    if (plainObject(roots) && !elementOrCollection(roots)) {
      options2 = roots;
      roots = options2.roots || options2.root;
      fn3 = options2.visit;
      directed = options2.directed;
    }
    directed = arguments.length === 2 && !fn$6(fn3) ? fn3 : directed;
    fn3 = fn$6(fn3) ? fn3 : function() {
    };
    var cy = this._private.cy;
    var v = roots = string(roots) ? this.filter(roots) : roots;
    var Q = [];
    var connectedNodes = [];
    var connectedBy = {};
    var id2depth = {};
    var V = {};
    var j = 0;
    var found;
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    for (var i2 = 0; i2 < v.length; i2++) {
      var vi = v[i2];
      var viId = vi.id();
      if (vi.isNode()) {
        Q.unshift(vi);
        if (params.bfs) {
          V[viId] = true;
          connectedNodes.push(vi);
        }
        id2depth[viId] = 0;
      }
    }
    var _loop = function _loop2() {
      var v3 = params.bfs ? Q.shift() : Q.pop();
      var vId = v3.id();
      if (params.dfs) {
        if (V[vId]) {
          return 0;
        }
        V[vId] = true;
        connectedNodes.push(v3);
      }
      var depth = id2depth[vId];
      var prevEdge = connectedBy[vId];
      var src = prevEdge != null ? prevEdge.source() : null;
      var tgt = prevEdge != null ? prevEdge.target() : null;
      var prevNode = prevEdge == null ? void 0 : v3.same(src) ? tgt[0] : src[0];
      var ret;
      ret = fn3(v3, prevEdge, prevNode, j++, depth);
      if (ret === true) {
        found = v3;
        return 1;
      }
      if (ret === false) {
        return 1;
      }
      var vwEdges = v3.connectedEdges().filter(function(e3) {
        return (!directed || e3.source().same(v3)) && edges3.has(e3);
      });
      for (var _i2 = 0; _i2 < vwEdges.length; _i2++) {
        var e2 = vwEdges[_i2];
        var w2 = e2.connectedNodes().filter(function(n) {
          return !n.same(v3) && nodes3.has(n);
        });
        var wId = w2.id();
        if (w2.length !== 0 && !V[wId]) {
          w2 = w2[0];
          Q.push(w2);
          if (params.bfs) {
            V[wId] = true;
            connectedNodes.push(w2);
          }
          connectedBy[wId] = e2;
          id2depth[wId] = id2depth[vId] + 1;
        }
      }
    }, _ret;
    while (Q.length !== 0) {
      _ret = _loop();
      if (_ret === 0) continue;
      if (_ret === 1) break;
    }
    var connectedEles = cy.collection();
    for (var _i = 0; _i < connectedNodes.length; _i++) {
      var node = connectedNodes[_i];
      var edge = connectedBy[node.id()];
      if (edge != null) {
        connectedEles.push(edge);
      }
      connectedEles.push(node);
    }
    return {
      path: cy.collection(connectedEles),
      found: cy.collection(found)
    };
  };
};
var elesfn$v = {
  breadthFirstSearch: defineSearch({
    bfs: true
  }),
  depthFirstSearch: defineSearch({
    dfs: true
  })
};
elesfn$v.bfs = elesfn$v.breadthFirstSearch;
elesfn$v.dfs = elesfn$v.depthFirstSearch;
var heap$2 = { exports: {} };
var heap$1 = heap$2.exports;
var hasRequiredHeap$1;
function requireHeap$1() {
  if (hasRequiredHeap$1) return heap$2.exports;
  hasRequiredHeap$1 = 1;
  (function(module, exports) {
    (function() {
      var Heap2, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min4, nlargest, nsmallest, updateItem, _siftdown, _siftup;
      floor = Math.floor, min4 = Math.min;
      defaultCmp = function(x3, y3) {
        if (x3 < y3) {
          return -1;
        }
        if (x3 > y3) {
          return 1;
        }
        return 0;
      };
      insort = function(a2, x3, lo, hi, cmp) {
        var mid;
        if (lo == null) {
          lo = 0;
        }
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (lo < 0) {
          throw new Error("lo must be non-negative");
        }
        if (hi == null) {
          hi = a2.length;
        }
        while (lo < hi) {
          mid = floor((lo + hi) / 2);
          if (cmp(x3, a2[mid]) < 0) {
            hi = mid;
          } else {
            lo = mid + 1;
          }
        }
        return [].splice.apply(a2, [lo, lo - lo].concat(x3)), x3;
      };
      heappush = function(array3, item, cmp) {
        if (cmp == null) {
          cmp = defaultCmp;
        }
        array3.push(item);
        return _siftdown(array3, 0, array3.length - 1, cmp);
      };
      heappop = function(array3, cmp) {
        var lastelt, returnitem;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        lastelt = array3.pop();
        if (array3.length) {
          returnitem = array3[0];
          array3[0] = lastelt;
          _siftup(array3, 0, cmp);
        } else {
          returnitem = lastelt;
        }
        return returnitem;
      };
      heapreplace = function(array3, item, cmp) {
        var returnitem;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        returnitem = array3[0];
        array3[0] = item;
        _siftup(array3, 0, cmp);
        return returnitem;
      };
      heappushpop = function(array3, item, cmp) {
        var _ref;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (array3.length && cmp(array3[0], item) < 0) {
          _ref = [array3[0], item], item = _ref[0], array3[0] = _ref[1];
          _siftup(array3, 0, cmp);
        }
        return item;
      };
      heapify = function(array3, cmp) {
        var i2, _i, _len, _ref1, _results, _results1;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        _ref1 = (function() {
          _results1 = [];
          for (var _j = 0, _ref = floor(array3.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--) {
            _results1.push(_j);
          }
          return _results1;
        }).apply(this).reverse();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          i2 = _ref1[_i];
          _results.push(_siftup(array3, i2, cmp));
        }
        return _results;
      };
      updateItem = function(array3, item, cmp) {
        var pos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        pos = array3.indexOf(item);
        if (pos === -1) {
          return;
        }
        _siftdown(array3, 0, pos, cmp);
        return _siftup(array3, pos, cmp);
      };
      nlargest = function(array3, n, cmp) {
        var elem, result, _i, _len, _ref;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        result = array3.slice(0, n);
        if (!result.length) {
          return result;
        }
        heapify(result, cmp);
        _ref = array3.slice(n);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          heappushpop(result, elem, cmp);
        }
        return result.sort(cmp).reverse();
      };
      nsmallest = function(array3, n, cmp) {
        var elem, los, result, _i, _j, _len, _ref, _ref1, _results;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        if (n * 10 <= array3.length) {
          result = array3.slice(0, n).sort(cmp);
          if (!result.length) {
            return result;
          }
          los = result[result.length - 1];
          _ref = array3.slice(n);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            elem = _ref[_i];
            if (cmp(elem, los) < 0) {
              insort(result, elem, 0, null, cmp);
              result.pop();
              los = result[result.length - 1];
            }
          }
          return result;
        }
        heapify(array3, cmp);
        _results = [];
        for (_j = 0, _ref1 = min4(n, array3.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; 0 <= _ref1 ? ++_j : --_j) {
          _results.push(heappop(array3, cmp));
        }
        return _results;
      };
      _siftdown = function(array3, startpos, pos, cmp) {
        var newitem, parent4, parentpos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        newitem = array3[pos];
        while (pos > startpos) {
          parentpos = pos - 1 >> 1;
          parent4 = array3[parentpos];
          if (cmp(newitem, parent4) < 0) {
            array3[pos] = parent4;
            pos = parentpos;
            continue;
          }
          break;
        }
        return array3[pos] = newitem;
      };
      _siftup = function(array3, pos, cmp) {
        var childpos, endpos, newitem, rightpos, startpos;
        if (cmp == null) {
          cmp = defaultCmp;
        }
        endpos = array3.length;
        startpos = pos;
        newitem = array3[pos];
        childpos = 2 * pos + 1;
        while (childpos < endpos) {
          rightpos = childpos + 1;
          if (rightpos < endpos && !(cmp(array3[childpos], array3[rightpos]) < 0)) {
            childpos = rightpos;
          }
          array3[pos] = array3[childpos];
          pos = childpos;
          childpos = 2 * pos + 1;
        }
        array3[pos] = newitem;
        return _siftdown(array3, startpos, pos, cmp);
      };
      Heap2 = (function() {
        Heap3.push = heappush;
        Heap3.pop = heappop;
        Heap3.replace = heapreplace;
        Heap3.pushpop = heappushpop;
        Heap3.heapify = heapify;
        Heap3.updateItem = updateItem;
        Heap3.nlargest = nlargest;
        Heap3.nsmallest = nsmallest;
        function Heap3(cmp) {
          this.cmp = cmp != null ? cmp : defaultCmp;
          this.nodes = [];
        }
        Heap3.prototype.push = function(x3) {
          return heappush(this.nodes, x3, this.cmp);
        };
        Heap3.prototype.pop = function() {
          return heappop(this.nodes, this.cmp);
        };
        Heap3.prototype.peek = function() {
          return this.nodes[0];
        };
        Heap3.prototype.contains = function(x3) {
          return this.nodes.indexOf(x3) !== -1;
        };
        Heap3.prototype.replace = function(x3) {
          return heapreplace(this.nodes, x3, this.cmp);
        };
        Heap3.prototype.pushpop = function(x3) {
          return heappushpop(this.nodes, x3, this.cmp);
        };
        Heap3.prototype.heapify = function() {
          return heapify(this.nodes, this.cmp);
        };
        Heap3.prototype.updateItem = function(x3) {
          return updateItem(this.nodes, x3, this.cmp);
        };
        Heap3.prototype.clear = function() {
          return this.nodes = [];
        };
        Heap3.prototype.empty = function() {
          return this.nodes.length === 0;
        };
        Heap3.prototype.size = function() {
          return this.nodes.length;
        };
        Heap3.prototype.clone = function() {
          var heap2;
          heap2 = new Heap3();
          heap2.nodes = this.nodes.slice(0);
          return heap2;
        };
        Heap3.prototype.toArray = function() {
          return this.nodes.slice(0);
        };
        Heap3.prototype.insert = Heap3.prototype.push;
        Heap3.prototype.top = Heap3.prototype.peek;
        Heap3.prototype.front = Heap3.prototype.peek;
        Heap3.prototype.has = Heap3.prototype.contains;
        Heap3.prototype.copy = Heap3.prototype.clone;
        return Heap3;
      })();
      (function(root, factory) {
        {
          return module.exports = factory();
        }
      })(this, function() {
        return Heap2;
      });
    }).call(heap$1);
  })(heap$2);
  return heap$2.exports;
}
var heap;
var hasRequiredHeap;
function requireHeap() {
  if (hasRequiredHeap) return heap;
  hasRequiredHeap = 1;
  heap = requireHeap$1();
  return heap;
}
var heapExports = requireHeap();
var Heap = getDefaultExportFromCjs(heapExports);
var dijkstraDefaults = defaults$g({
  root: null,
  weight: function weight(edge) {
    return 1;
  },
  directed: false
});
var elesfn$u = {
  dijkstra: function dijkstra(options2) {
    if (!plainObject(options2)) {
      var args = arguments;
      options2 = {
        root: args[0],
        weight: args[1],
        directed: args[2]
      };
    }
    var _dijkstraDefaults = dijkstraDefaults(options2), root = _dijkstraDefaults.root, weight8 = _dijkstraDefaults.weight, directed = _dijkstraDefaults.directed;
    var eles = this;
    var weightFn = weight8;
    var source = string(root) ? this.filter(root)[0] : root[0];
    var dist3 = {};
    var prev = {};
    var knownDist = {};
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    edges3.unmergeBy(function(ele) {
      return ele.isLoop();
    });
    var getDist3 = function getDist4(node2) {
      return dist3[node2.id()];
    };
    var setDist = function setDist2(node2, d2) {
      dist3[node2.id()] = d2;
      Q.updateItem(node2);
    };
    var Q = new Heap(function(a2, b2) {
      return getDist3(a2) - getDist3(b2);
    });
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      var node = nodes3[i2];
      dist3[node.id()] = node.same(source) ? 0 : Infinity;
      Q.push(node);
    }
    var distBetween = function distBetween2(u3, v3) {
      var uvs = (directed ? u3.edgesTo(v3) : u3.edgesWith(v3)).intersect(edges3);
      var smallestDistance = Infinity;
      var smallestEdge;
      for (var _i = 0; _i < uvs.length; _i++) {
        var edge = uvs[_i];
        var _weight = weightFn(edge);
        if (_weight < smallestDistance || !smallestEdge) {
          smallestDistance = _weight;
          smallestEdge = edge;
        }
      }
      return {
        edge: smallestEdge,
        dist: smallestDistance
      };
    };
    while (Q.size() > 0) {
      var u2 = Q.pop();
      var smalletsDist = getDist3(u2);
      var uid = u2.id();
      knownDist[uid] = smalletsDist;
      if (smalletsDist === Infinity) {
        continue;
      }
      var neighbors = u2.neighborhood().intersect(nodes3);
      for (var _i2 = 0; _i2 < neighbors.length; _i2++) {
        var v = neighbors[_i2];
        var vid = v.id();
        var vDist = distBetween(u2, v);
        var alt = smalletsDist + vDist.dist;
        if (alt < getDist3(v)) {
          setDist(v, alt);
          prev[vid] = {
            node: u2,
            edge: vDist.edge
          };
        }
      }
    }
    return {
      distanceTo: function distanceTo(node2) {
        var target = string(node2) ? nodes3.filter(node2)[0] : node2[0];
        return knownDist[target.id()];
      },
      pathTo: function pathTo(node2) {
        var target = string(node2) ? nodes3.filter(node2)[0] : node2[0];
        var S = [];
        var u3 = target;
        var uid2 = u3.id();
        if (target.length > 0) {
          S.unshift(target);
          while (prev[uid2]) {
            var p3 = prev[uid2];
            S.unshift(p3.edge);
            S.unshift(p3.node);
            u3 = p3.node;
            uid2 = u3.id();
          }
        }
        return eles.spawn(S);
      }
    };
  }
};
var elesfn$t = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function kruskal(weightFn) {
    weightFn = weightFn || function(edge2) {
      return 1;
    };
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    var numNodes = nodes3.length;
    var forest = new Array(numNodes);
    var A = nodes3;
    var findSetIndex = function findSetIndex2(ele) {
      for (var i3 = 0; i3 < forest.length; i3++) {
        var eles = forest[i3];
        if (eles.has(ele)) {
          return i3;
        }
      }
    };
    for (var i2 = 0; i2 < numNodes; i2++) {
      forest[i2] = this.spawn(nodes3[i2]);
    }
    var S = edges3.sort(function(a2, b2) {
      return weightFn(a2) - weightFn(b2);
    });
    for (var _i = 0; _i < S.length; _i++) {
      var edge = S[_i];
      var u2 = edge.source()[0];
      var v = edge.target()[0];
      var setUIndex = findSetIndex(u2);
      var setVIndex = findSetIndex(v);
      var setU = forest[setUIndex];
      var setV = forest[setVIndex];
      if (setUIndex !== setVIndex) {
        A.merge(edge);
        setU.merge(setV);
        forest.splice(setVIndex, 1);
      }
    }
    return A;
  }
};
var aStarDefaults = defaults$g({
  root: null,
  goal: null,
  weight: function weight2(edge) {
    return 1;
  },
  heuristic: function heuristic(edge) {
    return 0;
  },
  directed: false
});
var elesfn$s = {
  // Implemented from pseudocode from wikipedia
  aStar: function aStar(options2) {
    var cy = this.cy();
    var _aStarDefaults = aStarDefaults(options2), root = _aStarDefaults.root, goal = _aStarDefaults.goal, heuristic2 = _aStarDefaults.heuristic, directed = _aStarDefaults.directed, weight8 = _aStarDefaults.weight;
    root = cy.collection(root)[0];
    goal = cy.collection(goal)[0];
    var sid = root.id();
    var tid = goal.id();
    var gScore = {};
    var fScore = {};
    var closedSetIds = {};
    var openSet = new Heap(function(a2, b2) {
      return fScore[a2.id()] - fScore[b2.id()];
    });
    var openSetIds = new Set$1();
    var cameFrom = {};
    var cameFromEdge = {};
    var addToOpenSet = function addToOpenSet2(ele, id2) {
      openSet.push(ele);
      openSetIds.add(id2);
    };
    var cMin, cMinId;
    var popFromOpenSet = function popFromOpenSet2() {
      cMin = openSet.pop();
      cMinId = cMin.id();
      openSetIds["delete"](cMinId);
    };
    var isInOpenSet = function isInOpenSet2(id2) {
      return openSetIds.has(id2);
    };
    addToOpenSet(root, sid);
    gScore[sid] = 0;
    fScore[sid] = heuristic2(root);
    var steps = 0;
    while (openSet.size() > 0) {
      popFromOpenSet();
      steps++;
      if (cMinId === tid) {
        var path = [];
        var pathNode = goal;
        var pathNodeId = tid;
        var pathEdge = cameFromEdge[pathNodeId];
        for (; ; ) {
          path.unshift(pathNode);
          if (pathEdge != null) {
            path.unshift(pathEdge);
          }
          pathNode = cameFrom[pathNodeId];
          if (pathNode == null) {
            break;
          }
          pathNodeId = pathNode.id();
          pathEdge = cameFromEdge[pathNodeId];
        }
        return {
          found: true,
          distance: gScore[cMinId],
          path: this.spawn(path),
          steps
        };
      }
      closedSetIds[cMinId] = true;
      var vwEdges = cMin._private.edges;
      for (var i2 = 0; i2 < vwEdges.length; i2++) {
        var e2 = vwEdges[i2];
        if (!this.hasElementWithId(e2.id())) {
          continue;
        }
        if (directed && e2.data("source") !== cMinId) {
          continue;
        }
        var wSrc = e2.source();
        var wTgt = e2.target();
        var w2 = wSrc.id() !== cMinId ? wSrc : wTgt;
        var wid = w2.id();
        if (!this.hasElementWithId(wid)) {
          continue;
        }
        if (closedSetIds[wid]) {
          continue;
        }
        var tempScore = gScore[cMinId] + weight8(e2);
        if (!isInOpenSet(wid)) {
          gScore[wid] = tempScore;
          fScore[wid] = tempScore + heuristic2(w2);
          addToOpenSet(w2, wid);
          cameFrom[wid] = cMin;
          cameFromEdge[wid] = e2;
          continue;
        }
        if (tempScore < gScore[wid]) {
          gScore[wid] = tempScore;
          fScore[wid] = tempScore + heuristic2(w2);
          cameFrom[wid] = cMin;
          cameFromEdge[wid] = e2;
        }
      }
    }
    return {
      found: false,
      distance: void 0,
      path: void 0,
      steps
    };
  }
};
var floydWarshallDefaults = defaults$g({
  weight: function weight3(edge) {
    return 1;
  },
  directed: false
});
var elesfn$r = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function floydWarshall(options2) {
    var cy = this.cy();
    var _floydWarshallDefault = floydWarshallDefaults(options2), weight8 = _floydWarshallDefault.weight, directed = _floydWarshallDefault.directed;
    var weightFn = weight8;
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    var N = nodes3.length;
    var Nsq = N * N;
    var indexOf = function indexOf2(node) {
      return nodes3.indexOf(node);
    };
    var atIndex = function atIndex2(i3) {
      return nodes3[i3];
    };
    var dist3 = new Array(Nsq);
    for (var n = 0; n < Nsq; n++) {
      var j = n % N;
      var i2 = (n - j) / N;
      if (i2 === j) {
        dist3[n] = 0;
      } else {
        dist3[n] = Infinity;
      }
    }
    var next = new Array(Nsq);
    var edgeNext = new Array(Nsq);
    for (var _i = 0; _i < edges3.length; _i++) {
      var edge = edges3[_i];
      var src = edge.source()[0];
      var tgt = edge.target()[0];
      if (src === tgt) {
        continue;
      }
      var s2 = indexOf(src);
      var t2 = indexOf(tgt);
      var st = s2 * N + t2;
      var _weight = weightFn(edge);
      if (dist3[st] > _weight) {
        dist3[st] = _weight;
        next[st] = t2;
        edgeNext[st] = edge;
      }
      if (!directed) {
        var ts = t2 * N + s2;
        if (!directed && dist3[ts] > _weight) {
          dist3[ts] = _weight;
          next[ts] = s2;
          edgeNext[ts] = edge;
        }
      }
    }
    for (var k = 0; k < N; k++) {
      for (var _i2 = 0; _i2 < N; _i2++) {
        var ik = _i2 * N + k;
        for (var _j = 0; _j < N; _j++) {
          var ij = _i2 * N + _j;
          var kj = k * N + _j;
          if (dist3[ik] + dist3[kj] < dist3[ij]) {
            dist3[ij] = dist3[ik] + dist3[kj];
            next[ij] = next[ik];
          }
        }
      }
    }
    var getArgEle = function getArgEle2(ele) {
      return (string(ele) ? cy.filter(ele) : ele)[0];
    };
    var indexOfArgEle = function indexOfArgEle2(ele) {
      return indexOf(getArgEle(ele));
    };
    var res = {
      distance: function distance(from, to) {
        var i3 = indexOfArgEle(from);
        var j2 = indexOfArgEle(to);
        return dist3[i3 * N + j2];
      },
      path: function path(from, to) {
        var i3 = indexOfArgEle(from);
        var j2 = indexOfArgEle(to);
        var fromNode = atIndex(i3);
        if (i3 === j2) {
          return fromNode.collection();
        }
        if (next[i3 * N + j2] == null) {
          return cy.collection();
        }
        var path2 = cy.collection();
        var prev = i3;
        var edge2;
        path2.merge(fromNode);
        while (i3 !== j2) {
          prev = i3;
          i3 = next[i3 * N + j2];
          edge2 = edgeNext[prev * N + i3];
          path2.merge(edge2);
          path2.merge(atIndex(i3));
        }
        return path2;
      }
    };
    return res;
  }
  // floydWarshall
};
var bellmanFordDefaults = defaults$g({
  weight: function weight4(edge) {
    return 1;
  },
  directed: false,
  root: null
});
var elesfn$q = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function bellmanFord(options2) {
    var _this = this;
    var _bellmanFordDefaults = bellmanFordDefaults(options2), weight8 = _bellmanFordDefaults.weight, directed = _bellmanFordDefaults.directed, root = _bellmanFordDefaults.root;
    var weightFn = weight8;
    var eles = this;
    var cy = this.cy();
    var _this$byGroup = this.byGroup(), edges3 = _this$byGroup.edges, nodes3 = _this$byGroup.nodes;
    var numNodes = nodes3.length;
    var infoMap = new Map$1();
    var hasNegativeWeightCycle = false;
    var negativeWeightCycles = [];
    root = cy.collection(root)[0];
    edges3.unmergeBy(function(edge2) {
      return edge2.isLoop();
    });
    var numEdges = edges3.length;
    var getInfo3 = function getInfo4(node2) {
      var obj = infoMap.get(node2.id());
      if (!obj) {
        obj = {};
        infoMap.set(node2.id(), obj);
      }
      return obj;
    };
    var getNodeFromTo = function getNodeFromTo2(to) {
      return (string(to) ? cy.$(to) : to)[0];
    };
    var distanceTo = function distanceTo2(to) {
      return getInfo3(getNodeFromTo(to)).dist;
    };
    var pathTo = function pathTo2(to) {
      var thisStart = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : root;
      var end = getNodeFromTo(to);
      var path = [];
      var node2 = end;
      for (; ; ) {
        if (node2 == null) {
          return _this.spawn();
        }
        var _getInfo = getInfo3(node2), edge2 = _getInfo.edge, pred = _getInfo.pred;
        path.unshift(node2[0]);
        if (node2.same(thisStart) && path.length > 0) {
          break;
        }
        if (edge2 != null) {
          path.unshift(edge2);
        }
        node2 = pred;
      }
      return eles.spawn(path);
    };
    for (var i2 = 0; i2 < numNodes; i2++) {
      var node = nodes3[i2];
      var info = getInfo3(node);
      if (node.same(root)) {
        info.dist = 0;
      } else {
        info.dist = Infinity;
      }
      info.pred = null;
      info.edge = null;
    }
    var replacedEdge = false;
    var checkForEdgeReplacement = function checkForEdgeReplacement2(node1, node2, edge2, info1, info2, weight9) {
      var dist3 = info1.dist + weight9;
      if (dist3 < info2.dist && !edge2.same(info1.edge)) {
        info2.dist = dist3;
        info2.pred = node1;
        info2.edge = edge2;
        replacedEdge = true;
      }
    };
    for (var _i = 1; _i < numNodes; _i++) {
      replacedEdge = false;
      for (var e2 = 0; e2 < numEdges; e2++) {
        var edge = edges3[e2];
        var src = edge.source();
        var tgt = edge.target();
        var _weight = weightFn(edge);
        var srcInfo = getInfo3(src);
        var tgtInfo = getInfo3(tgt);
        checkForEdgeReplacement(src, tgt, edge, srcInfo, tgtInfo, _weight);
        if (!directed) {
          checkForEdgeReplacement(tgt, src, edge, tgtInfo, srcInfo, _weight);
        }
      }
      if (!replacedEdge) {
        break;
      }
    }
    if (replacedEdge) {
      var negativeWeightCycleIds = [];
      for (var _e = 0; _e < numEdges; _e++) {
        var _edge = edges3[_e];
        var _src = _edge.source();
        var _tgt = _edge.target();
        var _weight2 = weightFn(_edge);
        var srcDist = getInfo3(_src).dist;
        var tgtDist = getInfo3(_tgt).dist;
        if (srcDist + _weight2 < tgtDist || !directed && tgtDist + _weight2 < srcDist) {
          if (!hasNegativeWeightCycle) {
            warn("Graph contains a negative weight cycle for Bellman-Ford");
            hasNegativeWeightCycle = true;
          }
          if (options2.findNegativeWeightCycles !== false) {
            var negativeNodes = [];
            if (srcDist + _weight2 < tgtDist) {
              negativeNodes.push(_src);
            }
            if (!directed && tgtDist + _weight2 < srcDist) {
              negativeNodes.push(_tgt);
            }
            var numNegativeNodes = negativeNodes.length;
            for (var n = 0; n < numNegativeNodes; n++) {
              var start = negativeNodes[n];
              var cycle = [start];
              cycle.push(getInfo3(start).edge);
              var _node = getInfo3(start).pred;
              while (cycle.indexOf(_node) === -1) {
                cycle.push(_node);
                cycle.push(getInfo3(_node).edge);
                _node = getInfo3(_node).pred;
              }
              cycle = cycle.slice(cycle.indexOf(_node));
              var smallestId = cycle[0].id();
              var smallestIndex = 0;
              for (var c2 = 2; c2 < cycle.length; c2 += 2) {
                if (cycle[c2].id() < smallestId) {
                  smallestId = cycle[c2].id();
                  smallestIndex = c2;
                }
              }
              cycle = cycle.slice(smallestIndex).concat(cycle.slice(0, smallestIndex));
              cycle.push(cycle[0]);
              var cycleId = cycle.map(function(el) {
                return el.id();
              }).join(",");
              if (negativeWeightCycleIds.indexOf(cycleId) === -1) {
                negativeWeightCycles.push(eles.spawn(cycle));
                negativeWeightCycleIds.push(cycleId);
              }
            }
          } else {
            break;
          }
        }
      }
    }
    return {
      distanceTo,
      pathTo,
      hasNegativeWeightCycle,
      negativeWeightCycles
    };
  }
  // bellmanFord
};
var sqrt2 = Math.sqrt(2);
var collapse = function collapse2(edgeIndex, nodeMap, remainingEdges) {
  if (remainingEdges.length === 0) {
    error("Karger-Stein must be run on a connected (sub)graph");
  }
  var edgeInfo = remainingEdges[edgeIndex];
  var sourceIn = edgeInfo[1];
  var targetIn = edgeInfo[2];
  var partition1 = nodeMap[sourceIn];
  var partition2 = nodeMap[targetIn];
  var newEdges = remainingEdges;
  for (var i2 = newEdges.length - 1; i2 >= 0; i2--) {
    var edge = newEdges[i2];
    var src = edge[1];
    var tgt = edge[2];
    if (nodeMap[src] === partition1 && nodeMap[tgt] === partition2 || nodeMap[src] === partition2 && nodeMap[tgt] === partition1) {
      newEdges.splice(i2, 1);
    }
  }
  for (var _i = 0; _i < newEdges.length; _i++) {
    var _edge = newEdges[_i];
    if (_edge[1] === partition2) {
      newEdges[_i] = _edge.slice();
      newEdges[_i][1] = partition1;
    } else if (_edge[2] === partition2) {
      newEdges[_i] = _edge.slice();
      newEdges[_i][2] = partition1;
    }
  }
  for (var _i2 = 0; _i2 < nodeMap.length; _i2++) {
    if (nodeMap[_i2] === partition2) {
      nodeMap[_i2] = partition1;
    }
  }
  return newEdges;
};
var contractUntil = function contractUntil2(metaNodeMap, remainingEdges, size3, sizeLimit) {
  while (size3 > sizeLimit) {
    var edgeIndex = Math.floor(Math.random() * remainingEdges.length);
    remainingEdges = collapse(edgeIndex, metaNodeMap, remainingEdges);
    size3--;
  }
  return remainingEdges;
};
var elesfn$p = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function kargerStein() {
    var _this = this;
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    edges3.unmergeBy(function(edge) {
      return edge.isLoop();
    });
    var numNodes = nodes3.length;
    var numEdges = edges3.length;
    var numIter = Math.ceil(Math.pow(Math.log(numNodes) / Math.LN2, 2));
    var stopSize = Math.floor(numNodes / sqrt2);
    if (numNodes < 2) {
      error("At least 2 nodes are required for Karger-Stein algorithm");
      return void 0;
    }
    var edgeIndexes = [];
    for (var i2 = 0; i2 < numEdges; i2++) {
      var e2 = edges3[i2];
      edgeIndexes.push([i2, nodes3.indexOf(e2.source()), nodes3.indexOf(e2.target())]);
    }
    var minCutSize = Infinity;
    var minCutEdgeIndexes = [];
    var minCutNodeMap = new Array(numNodes);
    var metaNodeMap = new Array(numNodes);
    var metaNodeMap2 = new Array(numNodes);
    var copyNodesMap = function copyNodesMap2(from, to) {
      for (var _i3 = 0; _i3 < numNodes; _i3++) {
        to[_i3] = from[_i3];
      }
    };
    for (var iter = 0; iter <= numIter; iter++) {
      for (var _i4 = 0; _i4 < numNodes; _i4++) {
        metaNodeMap[_i4] = _i4;
      }
      var edgesState = contractUntil(metaNodeMap, edgeIndexes.slice(), numNodes, stopSize);
      var edgesState2 = edgesState.slice();
      copyNodesMap(metaNodeMap, metaNodeMap2);
      var res1 = contractUntil(metaNodeMap, edgesState, stopSize, 2);
      var res2 = contractUntil(metaNodeMap2, edgesState2, stopSize, 2);
      if (res1.length <= res2.length && res1.length < minCutSize) {
        minCutSize = res1.length;
        minCutEdgeIndexes = res1;
        copyNodesMap(metaNodeMap, minCutNodeMap);
      } else if (res2.length <= res1.length && res2.length < minCutSize) {
        minCutSize = res2.length;
        minCutEdgeIndexes = res2;
        copyNodesMap(metaNodeMap2, minCutNodeMap);
      }
    }
    var cut = this.spawn(minCutEdgeIndexes.map(function(e3) {
      return edges3[e3[0]];
    }));
    var partition1 = this.spawn();
    var partition2 = this.spawn();
    var witnessNodePartition = minCutNodeMap[0];
    for (var _i5 = 0; _i5 < minCutNodeMap.length; _i5++) {
      var partitionId = minCutNodeMap[_i5];
      var node = nodes3[_i5];
      if (partitionId === witnessNodePartition) {
        partition1.merge(node);
      } else {
        partition2.merge(node);
      }
    }
    var constructComponent = function constructComponent2(subset) {
      var component2 = _this.spawn();
      subset.forEach(function(node2) {
        component2.merge(node2);
        node2.connectedEdges().forEach(function(edge) {
          if (_this.contains(edge) && !cut.contains(edge)) {
            component2.merge(edge);
          }
        });
      });
      return component2;
    };
    var components2 = [constructComponent(partition1), constructComponent(partition2)];
    var ret = {
      cut,
      components: components2,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1,
      partition2
    };
    return ret;
  }
};
var _Math$hypot;
var copyPosition = function copyPosition2(p3) {
  return {
    x: p3.x,
    y: p3.y
  };
};
var modelToRenderedPosition$1 = function modelToRenderedPosition(p3, zoom2, pan2) {
  return {
    x: p3.x * zoom2 + pan2.x,
    y: p3.y * zoom2 + pan2.y
  };
};
var renderedToModelPosition = function renderedToModelPosition2(p3, zoom2, pan2) {
  return {
    x: (p3.x - pan2.x) / zoom2,
    y: (p3.y - pan2.y) / zoom2
  };
};
var array2point = function array2point2(arr) {
  return {
    x: arr[0],
    y: arr[1]
  };
};
var min = function min2(arr) {
  var begin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : arr.length;
  var min4 = Infinity;
  for (var i2 = begin; i2 < end; i2++) {
    var val = arr[i2];
    if (isFinite(val)) {
      min4 = Math.min(val, min4);
    }
  }
  return min4;
};
var max = function max2(arr) {
  var begin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : arr.length;
  var max5 = -Infinity;
  for (var i2 = begin; i2 < end; i2++) {
    var val = arr[i2];
    if (isFinite(val)) {
      max5 = Math.max(val, max5);
    }
  }
  return max5;
};
var mean = function mean2(arr) {
  var begin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : arr.length;
  var total = 0;
  var n = 0;
  for (var i2 = begin; i2 < end; i2++) {
    var val = arr[i2];
    if (isFinite(val)) {
      total += val;
      n++;
    }
  }
  return total / n;
};
var median = function median2(arr) {
  var begin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : arr.length;
  var copy3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var sort2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  var includeHoles = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  if (copy3) {
    arr = arr.slice(begin, end);
  } else {
    if (end < arr.length) {
      arr.splice(end, arr.length - end);
    }
    if (begin > 0) {
      arr.splice(0, begin);
    }
  }
  var off = 0;
  for (var i2 = arr.length - 1; i2 >= 0; i2--) {
    var v = arr[i2];
    if (includeHoles) {
      if (!isFinite(v)) {
        arr[i2] = -Infinity;
        off++;
      }
    } else {
      arr.splice(i2, 1);
    }
  }
  if (sort2) {
    arr.sort(function(a2, b2) {
      return a2 - b2;
    });
  }
  var len = arr.length;
  var mid = Math.floor(len / 2);
  if (len % 2 !== 0) {
    return arr[mid + 1 + off];
  } else {
    return (arr[mid - 1 + off] + arr[mid + off]) / 2;
  }
};
var deg2rad = function deg2rad2(deg) {
  return Math.PI * deg / 180;
};
var getAngleFromDisp = function getAngleFromDisp2(dispX, dispY) {
  return Math.atan2(dispY, dispX) - Math.PI / 2;
};
var log2 = Math.log2 || function(n) {
  return Math.log(n) / Math.log(2);
};
var signum = function signum2(x3) {
  if (x3 > 0) {
    return 1;
  } else if (x3 < 0) {
    return -1;
  } else {
    return 0;
  }
};
var dist = function dist2(p1, p22) {
  return Math.sqrt(sqdist(p1, p22));
};
var sqdist = function sqdist2(p1, p22) {
  var dx = p22.x - p1.x;
  var dy = p22.y - p1.y;
  return dx * dx + dy * dy;
};
var inPlaceSumNormalize = function inPlaceSumNormalize2(v) {
  var length = v.length;
  var total = 0;
  for (var i2 = 0; i2 < length; i2++) {
    total += v[i2];
  }
  for (var _i = 0; _i < length; _i++) {
    v[_i] = v[_i] / total;
  }
  return v;
};
var qbezierAt = function qbezierAt2(p0, p1, p22, t2) {
  return (1 - t2) * (1 - t2) * p0 + 2 * (1 - t2) * t2 * p1 + t2 * t2 * p22;
};
var qbezierPtAt = function qbezierPtAt2(p0, p1, p22, t2) {
  return {
    x: qbezierAt(p0.x, p1.x, p22.x, t2),
    y: qbezierAt(p0.y, p1.y, p22.y, t2)
  };
};
var lineAt = function lineAt2(p0, p1, t2, d2) {
  var vec = {
    x: p1.x - p0.x,
    y: p1.y - p0.y
  };
  var vecDist = dist(p0, p1);
  var normVec = {
    x: vec.x / vecDist,
    y: vec.y / vecDist
  };
  t2 = t2 == null ? 0 : t2;
  d2 = d2 != null ? d2 : t2 * vecDist;
  return {
    x: p0.x + normVec.x * d2,
    y: p0.y + normVec.y * d2
  };
};
var bound = function bound2(min4, val, max5) {
  return Math.max(min4, Math.min(max5, val));
};
var makeBoundingBox = function makeBoundingBox2(bb) {
  if (bb == null) {
    return {
      x1: Infinity,
      y1: Infinity,
      x2: -Infinity,
      y2: -Infinity,
      w: 0,
      h: 0
    };
  } else if (bb.x1 != null && bb.y1 != null) {
    if (bb.x2 != null && bb.y2 != null && bb.x2 >= bb.x1 && bb.y2 >= bb.y1) {
      return {
        x1: bb.x1,
        y1: bb.y1,
        x2: bb.x2,
        y2: bb.y2,
        w: bb.x2 - bb.x1,
        h: bb.y2 - bb.y1
      };
    } else if (bb.w != null && bb.h != null && bb.w >= 0 && bb.h >= 0) {
      return {
        x1: bb.x1,
        y1: bb.y1,
        x2: bb.x1 + bb.w,
        y2: bb.y1 + bb.h,
        w: bb.w,
        h: bb.h
      };
    }
  }
};
var copyBoundingBox = function copyBoundingBox2(bb) {
  return {
    x1: bb.x1,
    x2: bb.x2,
    w: bb.w,
    y1: bb.y1,
    y2: bb.y2,
    h: bb.h
  };
};
var clearBoundingBox = function clearBoundingBox2(bb) {
  bb.x1 = Infinity;
  bb.y1 = Infinity;
  bb.x2 = -Infinity;
  bb.y2 = -Infinity;
  bb.w = 0;
  bb.h = 0;
};
var updateBoundingBox = function updateBoundingBox2(bb1, bb2) {
  bb1.x1 = Math.min(bb1.x1, bb2.x1);
  bb1.x2 = Math.max(bb1.x2, bb2.x2);
  bb1.w = bb1.x2 - bb1.x1;
  bb1.y1 = Math.min(bb1.y1, bb2.y1);
  bb1.y2 = Math.max(bb1.y2, bb2.y2);
  bb1.h = bb1.y2 - bb1.y1;
};
var expandBoundingBoxByPoint = function expandBoundingBoxByPoint2(bb, x3, y3) {
  bb.x1 = Math.min(bb.x1, x3);
  bb.x2 = Math.max(bb.x2, x3);
  bb.w = bb.x2 - bb.x1;
  bb.y1 = Math.min(bb.y1, y3);
  bb.y2 = Math.max(bb.y2, y3);
  bb.h = bb.y2 - bb.y1;
};
var expandBoundingBox = function expandBoundingBox2(bb) {
  var padding = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  bb.x1 -= padding;
  bb.x2 += padding;
  bb.y1 -= padding;
  bb.y2 += padding;
  bb.w = bb.x2 - bb.x1;
  bb.h = bb.y2 - bb.y1;
  return bb;
};
var expandBoundingBoxSides = function expandBoundingBoxSides2(bb) {
  var padding = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0];
  var top, right, bottom, left;
  if (padding.length === 1) {
    top = right = bottom = left = padding[0];
  } else if (padding.length === 2) {
    top = bottom = padding[0];
    left = right = padding[1];
  } else if (padding.length === 4) {
    var _padding = _slicedToArray(padding, 4);
    top = _padding[0];
    right = _padding[1];
    bottom = _padding[2];
    left = _padding[3];
  }
  bb.x1 -= left;
  bb.x2 += right;
  bb.y1 -= top;
  bb.y2 += bottom;
  bb.w = bb.x2 - bb.x1;
  bb.h = bb.y2 - bb.y1;
  return bb;
};
var assignBoundingBox = function assignBoundingBox2(bb1, bb2) {
  bb1.x1 = bb2.x1;
  bb1.y1 = bb2.y1;
  bb1.x2 = bb2.x2;
  bb1.y2 = bb2.y2;
  bb1.w = bb1.x2 - bb1.x1;
  bb1.h = bb1.y2 - bb1.y1;
};
var boundingBoxesIntersect = function boundingBoxesIntersect2(bb1, bb2) {
  if (bb1.x1 > bb2.x2) {
    return false;
  }
  if (bb2.x1 > bb1.x2) {
    return false;
  }
  if (bb1.x2 < bb2.x1) {
    return false;
  }
  if (bb2.x2 < bb1.x1) {
    return false;
  }
  if (bb1.y2 < bb2.y1) {
    return false;
  }
  if (bb2.y2 < bb1.y1) {
    return false;
  }
  if (bb1.y1 > bb2.y2) {
    return false;
  }
  if (bb2.y1 > bb1.y2) {
    return false;
  }
  return true;
};
var inBoundingBox = function inBoundingBox2(bb, x3, y3) {
  return bb.x1 <= x3 && x3 <= bb.x2 && bb.y1 <= y3 && y3 <= bb.y2;
};
var pointInBoundingBox = function pointInBoundingBox2(bb, pt) {
  return inBoundingBox(bb, pt.x, pt.y);
};
var boundingBoxInBoundingBox = function boundingBoxInBoundingBox2(bb1, bb2) {
  return inBoundingBox(bb1, bb2.x1, bb2.y1) && inBoundingBox(bb1, bb2.x2, bb2.y2);
};
var hypot = (_Math$hypot = Math.hypot) !== null && _Math$hypot !== void 0 ? _Math$hypot : function(x3, y3) {
  return Math.sqrt(x3 * x3 + y3 * y3);
};
function inflatePolygon(polygon2, d2) {
  if (polygon2.length < 3) {
    throw new Error("Need at least 3 vertices");
  }
  var add3 = function add4(a2, b2) {
    return {
      x: a2.x + b2.x,
      y: a2.y + b2.y
    };
  };
  var sub = function sub2(a2, b2) {
    return {
      x: a2.x - b2.x,
      y: a2.y - b2.y
    };
  };
  var scale2 = function scale3(v, s2) {
    return {
      x: v.x * s2,
      y: v.y * s2
    };
  };
  var cross = function cross2(u2, v) {
    return u2.x * v.y - u2.y * v.x;
  };
  var normalize3 = function normalize4(v) {
    var len = hypot(v.x, v.y);
    return len === 0 ? {
      x: 0,
      y: 0
    } : {
      x: v.x / len,
      y: v.y / len
    };
  };
  var signedArea = function signedArea2(pts3) {
    var A = 0;
    for (var i3 = 0; i3 < pts3.length; i3++) {
      var p4 = pts3[i3], q2 = pts3[(i3 + 1) % pts3.length];
      A += p4.x * q2.y - q2.x * p4.y;
    }
    return A / 2;
  };
  var intersectLines = function intersectLines2(p1, p22, p32, p4) {
    var r2 = sub(p22, p1);
    var s2 = sub(p4, p32);
    var denom = cross(r2, s2);
    if (Math.abs(denom) < 1e-9) {
      return add3(p1, scale2(r2, 0.5));
    }
    var t2 = cross(sub(p32, p1), s2) / denom;
    return add3(p1, scale2(r2, t2));
  };
  var pts2 = polygon2.map(function(p4) {
    return {
      x: p4.x,
      y: p4.y
    };
  });
  if (signedArea(pts2) < 0) pts2.reverse();
  var n = pts2.length;
  var normals = [];
  for (var i2 = 0; i2 < n; i2++) {
    var p3 = pts2[i2], q = pts2[(i2 + 1) % n];
    var edge = sub(q, p3);
    var out = normalize3({
      x: edge.y,
      y: -edge.x
    });
    normals.push(out);
  }
  var offsetEdges = normals.map(function(nrm, i3) {
    var p1 = add3(pts2[i3], scale2(nrm, d2));
    var p22 = add3(pts2[(i3 + 1) % n], scale2(nrm, d2));
    return {
      p1,
      p2: p22
    };
  });
  var inflated = [];
  for (var _i2 = 0; _i2 < n; _i2++) {
    var prevEdge = offsetEdges[(_i2 - 1 + n) % n];
    var currEdge = offsetEdges[_i2];
    var ip = intersectLines(prevEdge.p1, prevEdge.p2, currEdge.p1, currEdge.p2);
    inflated.push(ip);
  }
  return inflated;
}
function miterBox(pts2, centerX, centerY, width2, height2, strokeWidth) {
  var tpts = transformPoints(pts2, centerX, centerY, width2, height2);
  var offsetPoints = inflatePolygon(tpts, strokeWidth);
  var bb = makeBoundingBox();
  offsetPoints.forEach(function(pt) {
    return expandBoundingBoxByPoint(bb, pt.x, pt.y);
  });
  return bb;
}
var roundRectangleIntersectLine = function roundRectangleIntersectLine2(x3, y3, nodeX, nodeY, width2, height2, padding) {
  var radius2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto";
  var cornerRadius = radius2 === "auto" ? getRoundRectangleRadius(width2, height2) : radius2;
  var halfWidth = width2 / 2;
  var halfHeight = height2 / 2;
  cornerRadius = Math.min(cornerRadius, halfWidth, halfHeight);
  var doWidth = cornerRadius !== halfWidth, doHeight = cornerRadius !== halfHeight;
  var straightLineIntersections;
  if (doWidth) {
    var topStartX = nodeX - halfWidth + cornerRadius - padding;
    var topStartY = nodeY - halfHeight - padding;
    var topEndX = nodeX + halfWidth - cornerRadius + padding;
    var topEndY = topStartY;
    straightLineIntersections = finiteLinesIntersect(x3, y3, nodeX, nodeY, topStartX, topStartY, topEndX, topEndY, false);
    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }
  if (doHeight) {
    var rightStartX = nodeX + halfWidth + padding;
    var rightStartY = nodeY - halfHeight + cornerRadius - padding;
    var rightEndX = rightStartX;
    var rightEndY = nodeY + halfHeight - cornerRadius + padding;
    straightLineIntersections = finiteLinesIntersect(x3, y3, nodeX, nodeY, rightStartX, rightStartY, rightEndX, rightEndY, false);
    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }
  if (doWidth) {
    var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
    var bottomStartY = nodeY + halfHeight + padding;
    var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
    var bottomEndY = bottomStartY;
    straightLineIntersections = finiteLinesIntersect(x3, y3, nodeX, nodeY, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false);
    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }
  if (doHeight) {
    var leftStartX = nodeX - halfWidth - padding;
    var leftStartY = nodeY - halfHeight + cornerRadius - padding;
    var leftEndX = leftStartX;
    var leftEndY = nodeY + halfHeight - cornerRadius + padding;
    straightLineIntersections = finiteLinesIntersect(x3, y3, nodeX, nodeY, leftStartX, leftStartY, leftEndX, leftEndY, false);
    if (straightLineIntersections.length > 0) {
      return straightLineIntersections;
    }
  }
  var arcIntersections;
  {
    var topLeftCenterX = nodeX - halfWidth + cornerRadius;
    var topLeftCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = intersectLineCircle(x3, y3, nodeX, nodeY, topLeftCenterX, topLeftCenterY, cornerRadius + padding);
    if (arcIntersections.length > 0 && arcIntersections[0] <= topLeftCenterX && arcIntersections[1] <= topLeftCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }
  {
    var topRightCenterX = nodeX + halfWidth - cornerRadius;
    var topRightCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = intersectLineCircle(x3, y3, nodeX, nodeY, topRightCenterX, topRightCenterY, cornerRadius + padding);
    if (arcIntersections.length > 0 && arcIntersections[0] >= topRightCenterX && arcIntersections[1] <= topRightCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }
  {
    var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
    var bottomRightCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = intersectLineCircle(x3, y3, nodeX, nodeY, bottomRightCenterX, bottomRightCenterY, cornerRadius + padding);
    if (arcIntersections.length > 0 && arcIntersections[0] >= bottomRightCenterX && arcIntersections[1] >= bottomRightCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }
  {
    var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
    var bottomLeftCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = intersectLineCircle(x3, y3, nodeX, nodeY, bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding);
    if (arcIntersections.length > 0 && arcIntersections[0] <= bottomLeftCenterX && arcIntersections[1] >= bottomLeftCenterY) {
      return [arcIntersections[0], arcIntersections[1]];
    }
  }
  return [];
};
var inLineVicinity = function inLineVicinity2(x3, y3, lx1, ly1, lx2, ly2, tolerance) {
  var t2 = tolerance;
  var x1 = Math.min(lx1, lx2);
  var x22 = Math.max(lx1, lx2);
  var y1 = Math.min(ly1, ly2);
  var y22 = Math.max(ly1, ly2);
  return x1 - t2 <= x3 && x3 <= x22 + t2 && y1 - t2 <= y3 && y3 <= y22 + t2;
};
var inBezierVicinity = function inBezierVicinity2(x3, y3, x1, y1, x22, y22, x32, y32, tolerance) {
  var bb = {
    x1: Math.min(x1, x32, x22) - tolerance,
    x2: Math.max(x1, x32, x22) + tolerance,
    y1: Math.min(y1, y32, y22) - tolerance,
    y2: Math.max(y1, y32, y22) + tolerance
  };
  if (x3 < bb.x1 || x3 > bb.x2 || y3 < bb.y1 || y3 > bb.y2) {
    return false;
  } else {
    return true;
  }
};
var solveQuadratic = function solveQuadratic2(a2, b2, c2, val) {
  c2 -= val;
  var r2 = b2 * b2 - 4 * a2 * c2;
  if (r2 < 0) {
    return [];
  }
  var sqrtR = Math.sqrt(r2);
  var denom = 2 * a2;
  var root1 = (-b2 + sqrtR) / denom;
  var root2 = (-b2 - sqrtR) / denom;
  return [root1, root2];
};
var solveCubic = function solveCubic2(a2, b2, c2, d2, result) {
  var epsilon = 1e-5;
  if (a2 === 0) {
    a2 = epsilon;
  }
  b2 /= a2;
  c2 /= a2;
  d2 /= a2;
  var discriminant, q, r2, dum1, s2, t2, term1, r13;
  q = (3 * c2 - b2 * b2) / 9;
  r2 = -(27 * d2) + b2 * (9 * c2 - 2 * (b2 * b2));
  r2 /= 54;
  discriminant = q * q * q + r2 * r2;
  result[1] = 0;
  term1 = b2 / 3;
  if (discriminant > 0) {
    s2 = r2 + Math.sqrt(discriminant);
    s2 = s2 < 0 ? -Math.pow(-s2, 1 / 3) : Math.pow(s2, 1 / 3);
    t2 = r2 - Math.sqrt(discriminant);
    t2 = t2 < 0 ? -Math.pow(-t2, 1 / 3) : Math.pow(t2, 1 / 3);
    result[0] = -term1 + s2 + t2;
    term1 += (s2 + t2) / 2;
    result[4] = result[2] = -term1;
    term1 = Math.sqrt(3) * (-t2 + s2) / 2;
    result[3] = term1;
    result[5] = -term1;
    return;
  }
  result[5] = result[3] = 0;
  if (discriminant === 0) {
    r13 = r2 < 0 ? -Math.pow(-r2, 1 / 3) : Math.pow(r2, 1 / 3);
    result[0] = -term1 + 2 * r13;
    result[4] = result[2] = -(r13 + term1);
    return;
  }
  q = -q;
  dum1 = q * q * q;
  dum1 = Math.acos(r2 / Math.sqrt(dum1));
  r13 = 2 * Math.sqrt(q);
  result[0] = -term1 + r13 * Math.cos(dum1 / 3);
  result[2] = -term1 + r13 * Math.cos((dum1 + 2 * Math.PI) / 3);
  result[4] = -term1 + r13 * Math.cos((dum1 + 4 * Math.PI) / 3);
  return;
};
var sqdistToQuadraticBezier = function sqdistToQuadraticBezier2(x3, y3, x1, y1, x22, y22, x32, y32) {
  var a2 = 1 * x1 * x1 - 4 * x1 * x22 + 2 * x1 * x32 + 4 * x22 * x22 - 4 * x22 * x32 + x32 * x32 + y1 * y1 - 4 * y1 * y22 + 2 * y1 * y32 + 4 * y22 * y22 - 4 * y22 * y32 + y32 * y32;
  var b2 = 1 * 9 * x1 * x22 - 3 * x1 * x1 - 3 * x1 * x32 - 6 * x22 * x22 + 3 * x22 * x32 + 9 * y1 * y22 - 3 * y1 * y1 - 3 * y1 * y32 - 6 * y22 * y22 + 3 * y22 * y32;
  var c2 = 1 * 3 * x1 * x1 - 6 * x1 * x22 + x1 * x32 - x1 * x3 + 2 * x22 * x22 + 2 * x22 * x3 - x32 * x3 + 3 * y1 * y1 - 6 * y1 * y22 + y1 * y32 - y1 * y3 + 2 * y22 * y22 + 2 * y22 * y3 - y32 * y3;
  var d2 = 1 * x1 * x22 - x1 * x1 + x1 * x3 - x22 * x3 + y1 * y22 - y1 * y1 + y1 * y3 - y22 * y3;
  var roots = [];
  solveCubic(a2, b2, c2, d2, roots);
  var zeroThreshold = 1e-7;
  var params = [];
  for (var index = 0; index < 6; index += 2) {
    if (Math.abs(roots[index + 1]) < zeroThreshold && roots[index] >= 0 && roots[index] <= 1) {
      params.push(roots[index]);
    }
  }
  params.push(1);
  params.push(0);
  var minDistanceSquared = -1;
  var curX, curY, distSquared;
  for (var i2 = 0; i2 < params.length; i2++) {
    curX = Math.pow(1 - params[i2], 2) * x1 + 2 * (1 - params[i2]) * params[i2] * x22 + params[i2] * params[i2] * x32;
    curY = Math.pow(1 - params[i2], 2) * y1 + 2 * (1 - params[i2]) * params[i2] * y22 + params[i2] * params[i2] * y32;
    distSquared = Math.pow(curX - x3, 2) + Math.pow(curY - y3, 2);
    if (minDistanceSquared >= 0) {
      if (distSquared < minDistanceSquared) {
        minDistanceSquared = distSquared;
      }
    } else {
      minDistanceSquared = distSquared;
    }
  }
  return minDistanceSquared;
};
var sqdistToFiniteLine = function sqdistToFiniteLine2(x3, y3, x1, y1, x22, y22) {
  var offset = [x3 - x1, y3 - y1];
  var line = [x22 - x1, y22 - y1];
  var lineSq = line[0] * line[0] + line[1] * line[1];
  var hypSq = offset[0] * offset[0] + offset[1] * offset[1];
  var dotProduct = offset[0] * line[0] + offset[1] * line[1];
  var adjSq = dotProduct * dotProduct / lineSq;
  if (dotProduct < 0) {
    return hypSq;
  }
  if (adjSq > lineSq) {
    return (x3 - x22) * (x3 - x22) + (y3 - y22) * (y3 - y22);
  }
  return hypSq - adjSq;
};
var pointInsidePolygonPoints = function pointInsidePolygonPoints2(x3, y3, points) {
  var x1, y1, x22, y22;
  var y32;
  var up = 0;
  for (var i2 = 0; i2 < points.length / 2; i2++) {
    x1 = points[i2 * 2];
    y1 = points[i2 * 2 + 1];
    if (i2 + 1 < points.length / 2) {
      x22 = points[(i2 + 1) * 2];
      y22 = points[(i2 + 1) * 2 + 1];
    } else {
      x22 = points[(i2 + 1 - points.length / 2) * 2];
      y22 = points[(i2 + 1 - points.length / 2) * 2 + 1];
    }
    if (x1 == x3 && x22 == x3) ;
    else if (x1 >= x3 && x3 >= x22 || x1 <= x3 && x3 <= x22) {
      y32 = (x3 - x1) / (x22 - x1) * (y22 - y1) + y1;
      if (y32 > y3) {
        up++;
      }
    } else {
      continue;
    }
  }
  if (up % 2 === 0) {
    return false;
  } else {
    return true;
  }
};
var pointInsidePolygon = function pointInsidePolygon2(x3, y3, basePoints, centerX, centerY, width2, height2, direction, padding) {
  var transformedPoints = new Array(basePoints.length);
  var angle2;
  if (direction[0] != null) {
    angle2 = Math.atan(direction[1] / direction[0]);
    if (direction[0] < 0) {
      angle2 = angle2 + Math.PI / 2;
    } else {
      angle2 = -angle2 - Math.PI / 2;
    }
  } else {
    angle2 = direction;
  }
  var cos2 = Math.cos(-angle2);
  var sin2 = Math.sin(-angle2);
  for (var i2 = 0; i2 < transformedPoints.length / 2; i2++) {
    transformedPoints[i2 * 2] = width2 / 2 * (basePoints[i2 * 2] * cos2 - basePoints[i2 * 2 + 1] * sin2);
    transformedPoints[i2 * 2 + 1] = height2 / 2 * (basePoints[i2 * 2 + 1] * cos2 + basePoints[i2 * 2] * sin2);
    transformedPoints[i2 * 2] += centerX;
    transformedPoints[i2 * 2 + 1] += centerY;
  }
  var points;
  if (padding > 0) {
    var expandedLineSet = expandPolygon(transformedPoints, -padding);
    points = joinLines(expandedLineSet);
  } else {
    points = transformedPoints;
  }
  return pointInsidePolygonPoints(x3, y3, points);
};
var pointInsideRoundPolygon = function pointInsideRoundPolygon2(x3, y3, basePoints, centerX, centerY, width2, height2, corners) {
  var cutPolygonPoints = new Array(basePoints.length * 2);
  for (var i2 = 0; i2 < corners.length; i2++) {
    var corner = corners[i2];
    cutPolygonPoints[i2 * 4 + 0] = corner.startX;
    cutPolygonPoints[i2 * 4 + 1] = corner.startY;
    cutPolygonPoints[i2 * 4 + 2] = corner.stopX;
    cutPolygonPoints[i2 * 4 + 3] = corner.stopY;
    var squaredDistance = Math.pow(corner.cx - x3, 2) + Math.pow(corner.cy - y3, 2);
    if (squaredDistance <= Math.pow(corner.radius, 2)) {
      return true;
    }
  }
  return pointInsidePolygonPoints(x3, y3, cutPolygonPoints);
};
var joinLines = function joinLines2(lineSet) {
  var vertices = new Array(lineSet.length / 2);
  var currentLineStartX, currentLineStartY, currentLineEndX, currentLineEndY;
  var nextLineStartX, nextLineStartY, nextLineEndX, nextLineEndY;
  for (var i2 = 0; i2 < lineSet.length / 4; i2++) {
    currentLineStartX = lineSet[i2 * 4];
    currentLineStartY = lineSet[i2 * 4 + 1];
    currentLineEndX = lineSet[i2 * 4 + 2];
    currentLineEndY = lineSet[i2 * 4 + 3];
    if (i2 < lineSet.length / 4 - 1) {
      nextLineStartX = lineSet[(i2 + 1) * 4];
      nextLineStartY = lineSet[(i2 + 1) * 4 + 1];
      nextLineEndX = lineSet[(i2 + 1) * 4 + 2];
      nextLineEndY = lineSet[(i2 + 1) * 4 + 3];
    } else {
      nextLineStartX = lineSet[0];
      nextLineStartY = lineSet[1];
      nextLineEndX = lineSet[2];
      nextLineEndY = lineSet[3];
    }
    var intersection2 = finiteLinesIntersect(currentLineStartX, currentLineStartY, currentLineEndX, currentLineEndY, nextLineStartX, nextLineStartY, nextLineEndX, nextLineEndY, true);
    vertices[i2 * 2] = intersection2[0];
    vertices[i2 * 2 + 1] = intersection2[1];
  }
  return vertices;
};
var expandPolygon = function expandPolygon2(points, pad) {
  var expandedLineSet = new Array(points.length * 2);
  var currentPointX, currentPointY, nextPointX, nextPointY;
  for (var i2 = 0; i2 < points.length / 2; i2++) {
    currentPointX = points[i2 * 2];
    currentPointY = points[i2 * 2 + 1];
    if (i2 < points.length / 2 - 1) {
      nextPointX = points[(i2 + 1) * 2];
      nextPointY = points[(i2 + 1) * 2 + 1];
    } else {
      nextPointX = points[0];
      nextPointY = points[1];
    }
    var offsetX = nextPointY - currentPointY;
    var offsetY = -(nextPointX - currentPointX);
    var offsetLength = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    var normalizedOffsetX = offsetX / offsetLength;
    var normalizedOffsetY = offsetY / offsetLength;
    expandedLineSet[i2 * 4] = currentPointX + normalizedOffsetX * pad;
    expandedLineSet[i2 * 4 + 1] = currentPointY + normalizedOffsetY * pad;
    expandedLineSet[i2 * 4 + 2] = nextPointX + normalizedOffsetX * pad;
    expandedLineSet[i2 * 4 + 3] = nextPointY + normalizedOffsetY * pad;
  }
  return expandedLineSet;
};
var intersectLineEllipse = function intersectLineEllipse2(x3, y3, centerX, centerY, ellipseWradius, ellipseHradius) {
  var dispX = centerX - x3;
  var dispY = centerY - y3;
  dispX /= ellipseWradius;
  dispY /= ellipseHradius;
  var len = Math.sqrt(dispX * dispX + dispY * dispY);
  var newLength = len - 1;
  if (newLength < 0) {
    return [];
  }
  var lenProportion = newLength / len;
  return [(centerX - x3) * lenProportion + x3, (centerY - y3) * lenProportion + y3];
};
var checkInEllipse = function checkInEllipse2(x3, y3, width2, height2, centerX, centerY, padding) {
  x3 -= centerX;
  y3 -= centerY;
  x3 /= width2 / 2 + padding;
  y3 /= height2 / 2 + padding;
  return x3 * x3 + y3 * y3 <= 1;
};
var intersectLineCircle = function intersectLineCircle2(x1, y1, x22, y22, centerX, centerY, radius2) {
  var d2 = [x22 - x1, y22 - y1];
  var f2 = [x1 - centerX, y1 - centerY];
  var a2 = d2[0] * d2[0] + d2[1] * d2[1];
  var b2 = 2 * (f2[0] * d2[0] + f2[1] * d2[1]);
  var c2 = f2[0] * f2[0] + f2[1] * f2[1] - radius2 * radius2;
  var discriminant = b2 * b2 - 4 * a2 * c2;
  if (discriminant < 0) {
    return [];
  }
  var t1 = (-b2 + Math.sqrt(discriminant)) / (2 * a2);
  var t2 = (-b2 - Math.sqrt(discriminant)) / (2 * a2);
  var tMin = Math.min(t1, t2);
  var tMax = Math.max(t1, t2);
  var inRangeParams = [];
  if (tMin >= 0 && tMin <= 1) {
    inRangeParams.push(tMin);
  }
  if (tMax >= 0 && tMax <= 1) {
    inRangeParams.push(tMax);
  }
  if (inRangeParams.length === 0) {
    return [];
  }
  var nearIntersectionX = inRangeParams[0] * d2[0] + x1;
  var nearIntersectionY = inRangeParams[0] * d2[1] + y1;
  if (inRangeParams.length > 1) {
    if (inRangeParams[0] == inRangeParams[1]) {
      return [nearIntersectionX, nearIntersectionY];
    } else {
      var farIntersectionX = inRangeParams[1] * d2[0] + x1;
      var farIntersectionY = inRangeParams[1] * d2[1] + y1;
      return [nearIntersectionX, nearIntersectionY, farIntersectionX, farIntersectionY];
    }
  } else {
    return [nearIntersectionX, nearIntersectionY];
  }
};
var midOfThree = function midOfThree2(a2, b2, c2) {
  if (b2 <= a2 && a2 <= c2 || c2 <= a2 && a2 <= b2) {
    return a2;
  } else if (a2 <= b2 && b2 <= c2 || c2 <= b2 && b2 <= a2) {
    return b2;
  } else {
    return c2;
  }
};
var finiteLinesIntersect = function finiteLinesIntersect2(x1, y1, x22, y22, x3, y3, x4, y4, infiniteLines) {
  var dx13 = x1 - x3;
  var dx21 = x22 - x1;
  var dx43 = x4 - x3;
  var dy13 = y1 - y3;
  var dy21 = y22 - y1;
  var dy43 = y4 - y3;
  var ua_t = dx43 * dy13 - dy43 * dx13;
  var ub_t = dx21 * dy13 - dy21 * dx13;
  var u_b = dy43 * dx21 - dx43 * dy21;
  if (u_b !== 0) {
    var ua = ua_t / u_b;
    var ub = ub_t / u_b;
    var flptThreshold = 1e-3;
    var _min = 0 - flptThreshold;
    var _max = 1 + flptThreshold;
    if (_min <= ua && ua <= _max && _min <= ub && ub <= _max) {
      return [x1 + ua * dx21, y1 + ua * dy21];
    } else {
      if (!infiniteLines) {
        return [];
      } else {
        return [x1 + ua * dx21, y1 + ua * dy21];
      }
    }
  } else {
    if (ua_t === 0 || ub_t === 0) {
      if (midOfThree(x1, x22, x4) === x4) {
        return [x4, y4];
      }
      if (midOfThree(x1, x22, x3) === x3) {
        return [x3, y3];
      }
      if (midOfThree(x3, x4, x22) === x22) {
        return [x22, y22];
      }
      return [];
    } else {
      return [];
    }
  }
};
var transformPoints = function transformPoints2(points, centerX, centerY, width2, height2) {
  var ret = [];
  var halfW = width2 / 2;
  var halfH = height2 / 2;
  var x3 = centerX;
  var y3 = centerY;
  ret.push({
    x: x3 + halfW * points[0],
    y: y3 + halfH * points[1]
  });
  for (var i2 = 1; i2 < points.length / 2; i2++) {
    ret.push({
      x: x3 + halfW * points[i2 * 2],
      y: y3 + halfH * points[i2 * 2 + 1]
    });
  }
  return ret;
};
var polygonIntersectLine = function polygonIntersectLine2(x3, y3, basePoints, centerX, centerY, width2, height2, padding) {
  var intersections = [];
  var intersection2;
  var transformedPoints = new Array(basePoints.length);
  var doTransform = true;
  if (width2 == null) {
    doTransform = false;
  }
  var points;
  if (doTransform) {
    for (var i2 = 0; i2 < transformedPoints.length / 2; i2++) {
      transformedPoints[i2 * 2] = basePoints[i2 * 2] * width2 + centerX;
      transformedPoints[i2 * 2 + 1] = basePoints[i2 * 2 + 1] * height2 + centerY;
    }
    if (padding > 0) {
      var expandedLineSet = expandPolygon(transformedPoints, -padding);
      points = joinLines(expandedLineSet);
    } else {
      points = transformedPoints;
    }
  } else {
    points = basePoints;
  }
  var currentX, currentY, nextX, nextY;
  for (var _i3 = 0; _i3 < points.length / 2; _i3++) {
    currentX = points[_i3 * 2];
    currentY = points[_i3 * 2 + 1];
    if (_i3 < points.length / 2 - 1) {
      nextX = points[(_i3 + 1) * 2];
      nextY = points[(_i3 + 1) * 2 + 1];
    } else {
      nextX = points[0];
      nextY = points[1];
    }
    intersection2 = finiteLinesIntersect(x3, y3, centerX, centerY, currentX, currentY, nextX, nextY);
    if (intersection2.length !== 0) {
      intersections.push(intersection2[0], intersection2[1]);
    }
  }
  return intersections;
};
var roundPolygonIntersectLine = function roundPolygonIntersectLine2(x3, y3, basePoints, centerX, centerY, width2, height2, padding, corners) {
  var intersections = [];
  var intersection2;
  var lines = new Array(basePoints.length * 2);
  corners.forEach(function(corner, i3) {
    if (i3 === 0) {
      lines[lines.length - 2] = corner.startX;
      lines[lines.length - 1] = corner.startY;
    } else {
      lines[i3 * 4 - 2] = corner.startX;
      lines[i3 * 4 - 1] = corner.startY;
    }
    lines[i3 * 4] = corner.stopX;
    lines[i3 * 4 + 1] = corner.stopY;
    intersection2 = intersectLineCircle(x3, y3, centerX, centerY, corner.cx, corner.cy, corner.radius);
    if (intersection2.length !== 0) {
      intersections.push(intersection2[0], intersection2[1]);
    }
  });
  for (var i2 = 0; i2 < lines.length / 4; i2++) {
    intersection2 = finiteLinesIntersect(x3, y3, centerX, centerY, lines[i2 * 4], lines[i2 * 4 + 1], lines[i2 * 4 + 2], lines[i2 * 4 + 3], false);
    if (intersection2.length !== 0) {
      intersections.push(intersection2[0], intersection2[1]);
    }
  }
  if (intersections.length > 2) {
    var lowestIntersection = [intersections[0], intersections[1]];
    var lowestSquaredDistance = Math.pow(lowestIntersection[0] - x3, 2) + Math.pow(lowestIntersection[1] - y3, 2);
    for (var _i4 = 1; _i4 < intersections.length / 2; _i4++) {
      var squaredDistance = Math.pow(intersections[_i4 * 2] - x3, 2) + Math.pow(intersections[_i4 * 2 + 1] - y3, 2);
      if (squaredDistance <= lowestSquaredDistance) {
        lowestIntersection[0] = intersections[_i4 * 2];
        lowestIntersection[1] = intersections[_i4 * 2 + 1];
        lowestSquaredDistance = squaredDistance;
      }
    }
    return lowestIntersection;
  }
  return intersections;
};
var shortenIntersection = function shortenIntersection2(intersection2, offset, amount) {
  var disp = [intersection2[0] - offset[0], intersection2[1] - offset[1]];
  var length = Math.sqrt(disp[0] * disp[0] + disp[1] * disp[1]);
  var lenRatio = (length - amount) / length;
  if (lenRatio < 0) {
    lenRatio = 1e-5;
  }
  return [offset[0] + lenRatio * disp[0], offset[1] + lenRatio * disp[1]];
};
var generateUnitNgonPointsFitToSquare = function generateUnitNgonPointsFitToSquare2(sides, rotationRadians) {
  var points = generateUnitNgonPoints(sides, rotationRadians);
  points = fitPolygonToSquare(points);
  return points;
};
var fitPolygonToSquare = function fitPolygonToSquare2(points) {
  var x3, y3;
  var sides = points.length / 2;
  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (var i2 = 0; i2 < sides; i2++) {
    x3 = points[2 * i2];
    y3 = points[2 * i2 + 1];
    minX = Math.min(minX, x3);
    maxX = Math.max(maxX, x3);
    minY = Math.min(minY, y3);
    maxY = Math.max(maxY, y3);
  }
  var sx = 2 / (maxX - minX);
  var sy = 2 / (maxY - minY);
  for (var _i5 = 0; _i5 < sides; _i5++) {
    x3 = points[2 * _i5] = points[2 * _i5] * sx;
    y3 = points[2 * _i5 + 1] = points[2 * _i5 + 1] * sy;
    minX = Math.min(minX, x3);
    maxX = Math.max(maxX, x3);
    minY = Math.min(minY, y3);
    maxY = Math.max(maxY, y3);
  }
  if (minY < -1) {
    for (var _i6 = 0; _i6 < sides; _i6++) {
      y3 = points[2 * _i6 + 1] = points[2 * _i6 + 1] + (-1 - minY);
    }
  }
  return points;
};
var generateUnitNgonPoints = function generateUnitNgonPoints2(sides, rotationRadians) {
  var increment = 1 / sides * 2 * Math.PI;
  var startAngle = sides % 2 === 0 ? Math.PI / 2 + increment / 2 : Math.PI / 2;
  startAngle += rotationRadians;
  var points = new Array(sides * 2);
  var currentAngle;
  for (var i2 = 0; i2 < sides; i2++) {
    currentAngle = i2 * increment + startAngle;
    points[2 * i2] = Math.cos(currentAngle);
    points[2 * i2 + 1] = Math.sin(-currentAngle);
  }
  return points;
};
var getRoundRectangleRadius = function getRoundRectangleRadius2(width2, height2) {
  return Math.min(width2 / 4, height2 / 4, 8);
};
var getRoundPolygonRadius = function getRoundPolygonRadius2(width2, height2) {
  return Math.min(width2 / 10, height2 / 10, 8);
};
var getCutRectangleCornerLength = function getCutRectangleCornerLength2() {
  return 8;
};
var bezierPtsToQuadCoeff = function bezierPtsToQuadCoeff2(p0, p1, p22) {
  return [p0 - 2 * p1 + p22, 2 * (p1 - p0), p0];
};
var getBarrelCurveConstants = function getBarrelCurveConstants2(width2, height2) {
  return {
    heightOffset: Math.min(15, 0.05 * height2),
    widthOffset: Math.min(100, 0.25 * width2),
    ctrlPtOffsetPct: 0.05
  };
};
function satPolygonIntersection(poly1, poly2) {
  function getAxes(polygon2) {
    var axes2 = [];
    for (var i2 = 0; i2 < polygon2.length; i2++) {
      var p1 = polygon2[i2];
      var p22 = polygon2[(i2 + 1) % polygon2.length];
      var edge = {
        x: p22.x - p1.x,
        y: p22.y - p1.y
      };
      var normal = {
        x: -edge.y,
        y: edge.x
      };
      var length = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
      axes2.push({
        x: normal.x / length,
        y: normal.y / length
      });
    }
    return axes2;
  }
  function project(polygon2, axis2) {
    var min4 = Infinity;
    var max5 = -Infinity;
    var _iterator = _createForOfIteratorHelper(polygon2), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var point = _step.value;
        var projection2 = point.x * axis2.x + point.y * axis2.y;
        min4 = Math.min(min4, projection2);
        max5 = Math.max(max5, projection2);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      min: min4,
      max: max5
    };
  }
  function overlaps(proj12, proj22) {
    return !(proj12.max < proj22.min || proj22.max < proj12.min);
  }
  var axes = [].concat(_toConsumableArray(getAxes(poly1)), _toConsumableArray(getAxes(poly2)));
  var _iterator2 = _createForOfIteratorHelper(axes), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var axis = _step2.value;
      var proj1 = project(poly1, axis);
      var proj2 = project(poly2, axis);
      if (!overlaps(proj1, proj2)) {
        return false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return true;
}
var pageRankDefaults = defaults$g({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function weight5(edge) {
    return 1;
  }
});
var elesfn$o = {
  pageRank: function pageRank(options2) {
    var _pageRankDefaults = pageRankDefaults(options2), dampingFactor = _pageRankDefaults.dampingFactor, precision = _pageRankDefaults.precision, iterations = _pageRankDefaults.iterations, weight8 = _pageRankDefaults.weight;
    var cy = this._private.cy;
    var _this$byGroup = this.byGroup(), nodes3 = _this$byGroup.nodes, edges3 = _this$byGroup.edges;
    var numNodes = nodes3.length;
    var numNodesSqd = numNodes * numNodes;
    var numEdges = edges3.length;
    var matrix = new Array(numNodesSqd);
    var columnSum = new Array(numNodes);
    var additionalProb = (1 - dampingFactor) / numNodes;
    for (var i2 = 0; i2 < numNodes; i2++) {
      for (var j = 0; j < numNodes; j++) {
        var n = i2 * numNodes + j;
        matrix[n] = 0;
      }
      columnSum[i2] = 0;
    }
    for (var _i = 0; _i < numEdges; _i++) {
      var edge = edges3[_i];
      var srcId = edge.data("source");
      var tgtId = edge.data("target");
      if (srcId === tgtId) {
        continue;
      }
      var s2 = nodes3.indexOfId(srcId);
      var t2 = nodes3.indexOfId(tgtId);
      var w2 = weight8(edge);
      var _n = t2 * numNodes + s2;
      matrix[_n] += w2;
      columnSum[s2] += w2;
    }
    var p3 = 1 / numNodes + additionalProb;
    for (var _j = 0; _j < numNodes; _j++) {
      if (columnSum[_j] === 0) {
        for (var _i2 = 0; _i2 < numNodes; _i2++) {
          var _n2 = _i2 * numNodes + _j;
          matrix[_n2] = p3;
        }
      } else {
        for (var _i3 = 0; _i3 < numNodes; _i3++) {
          var _n3 = _i3 * numNodes + _j;
          matrix[_n3] = matrix[_n3] / columnSum[_j] + additionalProb;
        }
      }
    }
    var eigenvector = new Array(numNodes);
    var temp = new Array(numNodes);
    var previous;
    for (var _i4 = 0; _i4 < numNodes; _i4++) {
      eigenvector[_i4] = 1;
    }
    for (var iter = 0; iter < iterations; iter++) {
      for (var _i5 = 0; _i5 < numNodes; _i5++) {
        temp[_i5] = 0;
      }
      for (var _i6 = 0; _i6 < numNodes; _i6++) {
        for (var _j2 = 0; _j2 < numNodes; _j2++) {
          var _n4 = _i6 * numNodes + _j2;
          temp[_i6] += matrix[_n4] * eigenvector[_j2];
        }
      }
      inPlaceSumNormalize(temp);
      previous = eigenvector;
      eigenvector = temp;
      temp = previous;
      var diff2 = 0;
      for (var _i7 = 0; _i7 < numNodes; _i7++) {
        var delta = previous[_i7] - eigenvector[_i7];
        diff2 += delta * delta;
      }
      if (diff2 < precision) {
        break;
      }
    }
    var res = {
      rank: function rank(node) {
        node = cy.collection(node)[0];
        return eigenvector[nodes3.indexOf(node)];
      }
    };
    return res;
  }
  // pageRank
};
var defaults$f = defaults$g({
  root: null,
  weight: function weight6(edge) {
    return 1;
  },
  directed: false,
  alpha: 0
});
var elesfn$n = {
  degreeCentralityNormalized: function degreeCentralityNormalized(options2) {
    options2 = defaults$f(options2);
    var cy = this.cy();
    var nodes3 = this.nodes();
    var numNodes = nodes3.length;
    if (!options2.directed) {
      var degrees = {};
      var maxDegree = 0;
      for (var i2 = 0; i2 < numNodes; i2++) {
        var node = nodes3[i2];
        options2.root = node;
        var currDegree = this.degreeCentrality(options2);
        if (maxDegree < currDegree.degree) {
          maxDegree = currDegree.degree;
        }
        degrees[node.id()] = currDegree.degree;
      }
      return {
        degree: function degree(node2) {
          if (maxDegree === 0) {
            return 0;
          }
          if (string(node2)) {
            node2 = cy.filter(node2);
          }
          return degrees[node2.id()] / maxDegree;
        }
      };
    } else {
      var indegrees = {};
      var outdegrees = {};
      var maxIndegree = 0;
      var maxOutdegree = 0;
      for (var _i = 0; _i < numNodes; _i++) {
        var _node = nodes3[_i];
        var id2 = _node.id();
        options2.root = _node;
        var _currDegree = this.degreeCentrality(options2);
        if (maxIndegree < _currDegree.indegree) maxIndegree = _currDegree.indegree;
        if (maxOutdegree < _currDegree.outdegree) maxOutdegree = _currDegree.outdegree;
        indegrees[id2] = _currDegree.indegree;
        outdegrees[id2] = _currDegree.outdegree;
      }
      return {
        indegree: function indegree(node2) {
          if (maxIndegree == 0) {
            return 0;
          }
          if (string(node2)) {
            node2 = cy.filter(node2);
          }
          return indegrees[node2.id()] / maxIndegree;
        },
        outdegree: function outdegree(node2) {
          if (maxOutdegree === 0) {
            return 0;
          }
          if (string(node2)) {
            node2 = cy.filter(node2);
          }
          return outdegrees[node2.id()] / maxOutdegree;
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function degreeCentrality(options2) {
    options2 = defaults$f(options2);
    var cy = this.cy();
    var callingEles = this;
    var _options = options2, root = _options.root, weight8 = _options.weight, directed = _options.directed, alpha = _options.alpha;
    root = cy.collection(root)[0];
    if (!directed) {
      var connEdges = root.connectedEdges().intersection(callingEles);
      var k = connEdges.length;
      var s2 = 0;
      for (var i2 = 0; i2 < connEdges.length; i2++) {
        s2 += weight8(connEdges[i2]);
      }
      return {
        degree: Math.pow(k, 1 - alpha) * Math.pow(s2, alpha)
      };
    } else {
      var edges3 = root.connectedEdges();
      var incoming = edges3.filter(function(edge) {
        return edge.target().same(root) && callingEles.has(edge);
      });
      var outgoing = edges3.filter(function(edge) {
        return edge.source().same(root) && callingEles.has(edge);
      });
      var k_in = incoming.length;
      var k_out = outgoing.length;
      var s_in = 0;
      var s_out = 0;
      for (var _i2 = 0; _i2 < incoming.length; _i2++) {
        s_in += weight8(incoming[_i2]);
      }
      for (var _i3 = 0; _i3 < outgoing.length; _i3++) {
        s_out += weight8(outgoing[_i3]);
      }
      return {
        indegree: Math.pow(k_in, 1 - alpha) * Math.pow(s_in, alpha),
        outdegree: Math.pow(k_out, 1 - alpha) * Math.pow(s_out, alpha)
      };
    }
  }
  // degreeCentrality
};
elesfn$n.dc = elesfn$n.degreeCentrality;
elesfn$n.dcn = elesfn$n.degreeCentralityNormalised = elesfn$n.degreeCentralityNormalized;
var defaults$e = defaults$g({
  harmonic: true,
  weight: function weight7() {
    return 1;
  },
  directed: false,
  root: null
});
var elesfn$m = {
  closenessCentralityNormalized: function closenessCentralityNormalized(options2) {
    var _defaults = defaults$e(options2), harmonic = _defaults.harmonic, weight8 = _defaults.weight, directed = _defaults.directed;
    var cy = this.cy();
    var closenesses = {};
    var maxCloseness = 0;
    var nodes3 = this.nodes();
    var fw = this.floydWarshall({
      weight: weight8,
      directed
    });
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      var currCloseness = 0;
      var node_i = nodes3[i2];
      for (var j = 0; j < nodes3.length; j++) {
        if (i2 !== j) {
          var d2 = fw.distance(node_i, nodes3[j]);
          if (harmonic) {
            currCloseness += 1 / d2;
          } else {
            currCloseness += d2;
          }
        }
      }
      if (!harmonic) {
        currCloseness = 1 / currCloseness;
      }
      if (maxCloseness < currCloseness) {
        maxCloseness = currCloseness;
      }
      closenesses[node_i.id()] = currCloseness;
    }
    return {
      closeness: function closeness(node) {
        if (maxCloseness == 0) {
          return 0;
        }
        if (string(node)) {
          node = cy.filter(node)[0].id();
        } else {
          node = node.id();
        }
        return closenesses[node] / maxCloseness;
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function closenessCentrality(options2) {
    var _defaults2 = defaults$e(options2), root = _defaults2.root, weight8 = _defaults2.weight, directed = _defaults2.directed, harmonic = _defaults2.harmonic;
    root = this.filter(root)[0];
    var dijkstra2 = this.dijkstra({
      root,
      weight: weight8,
      directed
    });
    var totalDistance = 0;
    var nodes3 = this.nodes();
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      var n = nodes3[i2];
      if (!n.same(root)) {
        var d2 = dijkstra2.distanceTo(n);
        if (harmonic) {
          totalDistance += 1 / d2;
        } else {
          totalDistance += d2;
        }
      }
    }
    return harmonic ? totalDistance : 1 / totalDistance;
  }
  // closenessCentrality
};
elesfn$m.cc = elesfn$m.closenessCentrality;
elesfn$m.ccn = elesfn$m.closenessCentralityNormalised = elesfn$m.closenessCentralityNormalized;
var defaults$d = defaults$g({
  weight: null,
  directed: false
});
var elesfn$l = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function betweennessCentrality(options2) {
    var _defaults = defaults$d(options2), directed = _defaults.directed, weight8 = _defaults.weight;
    var weighted = weight8 != null;
    var cy = this.cy();
    var V = this.nodes();
    var A = {};
    var _C = {};
    var max5 = 0;
    var C = {
      set: function set2(key, val) {
        _C[key] = val;
        if (val > max5) {
          max5 = val;
        }
      },
      get: function get2(key) {
        return _C[key];
      }
    };
    for (var i2 = 0; i2 < V.length; i2++) {
      var v = V[i2];
      var vid = v.id();
      if (directed) {
        A[vid] = v.outgoers().nodes();
      } else {
        A[vid] = v.openNeighborhood().nodes();
      }
      C.set(vid, 0);
    }
    var _loop = function _loop2() {
      var sid = V[s2].id();
      var S = [];
      var P = {};
      var g2 = {};
      var d2 = {};
      var Q = new Heap(function(a2, b2) {
        return d2[a2] - d2[b2];
      });
      for (var _i = 0; _i < V.length; _i++) {
        var _vid = V[_i].id();
        P[_vid] = [];
        g2[_vid] = 0;
        d2[_vid] = Infinity;
      }
      g2[sid] = 1;
      d2[sid] = 0;
      Q.push(sid);
      while (!Q.empty()) {
        var _v = Q.pop();
        S.push(_v);
        if (weighted) {
          for (var j = 0; j < A[_v].length; j++) {
            var w2 = A[_v][j];
            var vEle = cy.getElementById(_v);
            var edge = void 0;
            if (vEle.edgesTo(w2).length > 0) {
              edge = vEle.edgesTo(w2)[0];
            } else {
              edge = w2.edgesTo(vEle)[0];
            }
            var edgeWeight = weight8(edge);
            w2 = w2.id();
            if (d2[w2] > d2[_v] + edgeWeight) {
              d2[w2] = d2[_v] + edgeWeight;
              if (Q.nodes.indexOf(w2) < 0) {
                Q.push(w2);
              } else {
                Q.updateItem(w2);
              }
              g2[w2] = 0;
              P[w2] = [];
            }
            if (d2[w2] == d2[_v] + edgeWeight) {
              g2[w2] = g2[w2] + g2[_v];
              P[w2].push(_v);
            }
          }
        } else {
          for (var _j = 0; _j < A[_v].length; _j++) {
            var _w = A[_v][_j].id();
            if (d2[_w] == Infinity) {
              Q.push(_w);
              d2[_w] = d2[_v] + 1;
            }
            if (d2[_w] == d2[_v] + 1) {
              g2[_w] = g2[_w] + g2[_v];
              P[_w].push(_v);
            }
          }
        }
      }
      var e2 = {};
      for (var _i2 = 0; _i2 < V.length; _i2++) {
        e2[V[_i2].id()] = 0;
      }
      while (S.length > 0) {
        var _w2 = S.pop();
        for (var _j2 = 0; _j2 < P[_w2].length; _j2++) {
          var _v2 = P[_w2][_j2];
          e2[_v2] = e2[_v2] + g2[_v2] / g2[_w2] * (1 + e2[_w2]);
        }
        if (_w2 != V[s2].id()) {
          C.set(_w2, C.get(_w2) + e2[_w2]);
        }
      }
    };
    for (var s2 = 0; s2 < V.length; s2++) {
      _loop();
    }
    var ret = {
      betweenness: function betweenness(node) {
        var id2 = cy.collection(node).id();
        return C.get(id2);
      },
      betweennessNormalized: function betweennessNormalized(node) {
        if (max5 == 0) {
          return 0;
        }
        var id2 = cy.collection(node).id();
        return C.get(id2) / max5;
      }
    };
    ret.betweennessNormalised = ret.betweennessNormalized;
    return ret;
  }
  // betweennessCentrality
};
elesfn$l.bc = elesfn$l.betweennessCentrality;
var defaults$c = defaults$g({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(edge) {
      return 1;
    }
  ]
});
var setOptions$3 = function setOptions(options2) {
  return defaults$c(options2);
};
var getSimilarity$1 = function getSimilarity(edge, attributes) {
  var total = 0;
  for (var i2 = 0; i2 < attributes.length; i2++) {
    total += attributes[i2](edge);
  }
  return total;
};
var addLoops = function addLoops2(M, n, val) {
  for (var i2 = 0; i2 < n; i2++) {
    M[i2 * n + i2] = val;
  }
};
var normalize = function normalize2(M, n) {
  var sum;
  for (var col = 0; col < n; col++) {
    sum = 0;
    for (var row = 0; row < n; row++) {
      sum += M[row * n + col];
    }
    for (var _row = 0; _row < n; _row++) {
      M[_row * n + col] = M[_row * n + col] / sum;
    }
  }
};
var mmult = function mmult2(A, B, n) {
  var C = new Array(n * n);
  for (var i2 = 0; i2 < n; i2++) {
    for (var j = 0; j < n; j++) {
      C[i2 * n + j] = 0;
    }
    for (var k = 0; k < n; k++) {
      for (var _j = 0; _j < n; _j++) {
        C[i2 * n + _j] += A[i2 * n + k] * B[k * n + _j];
      }
    }
  }
  return C;
};
var expand = function expand2(M, n, expandFactor) {
  var _M = M.slice(0);
  for (var p3 = 1; p3 < expandFactor; p3++) {
    M = mmult(M, _M, n);
  }
  return M;
};
var inflate = function inflate2(M, n, inflateFactor) {
  var _M = new Array(n * n);
  for (var i2 = 0; i2 < n * n; i2++) {
    _M[i2] = Math.pow(M[i2], inflateFactor);
  }
  normalize(_M, n);
  return _M;
};
var hasConverged = function hasConverged2(M, _M, n2, roundFactor) {
  for (var i2 = 0; i2 < n2; i2++) {
    var v12 = Math.round(M[i2] * Math.pow(10, roundFactor)) / Math.pow(10, roundFactor);
    var v22 = Math.round(_M[i2] * Math.pow(10, roundFactor)) / Math.pow(10, roundFactor);
    if (v12 !== v22) {
      return false;
    }
  }
  return true;
};
var assign$2 = function assign(M, n, nodes3, cy) {
  var clusters = [];
  for (var i2 = 0; i2 < n; i2++) {
    var cluster = [];
    for (var j = 0; j < n; j++) {
      if (Math.round(M[i2 * n + j] * 1e3) / 1e3 > 0) {
        cluster.push(nodes3[j]);
      }
    }
    if (cluster.length !== 0) {
      clusters.push(cy.collection(cluster));
    }
  }
  return clusters;
};
var isDuplicate = function isDuplicate2(c1, c2) {
  for (var i2 = 0; i2 < c1.length; i2++) {
    if (!c2[i2] || c1[i2].id() !== c2[i2].id()) {
      return false;
    }
  }
  return true;
};
var removeDuplicates = function removeDuplicates2(clusters) {
  for (var i2 = 0; i2 < clusters.length; i2++) {
    for (var j = 0; j < clusters.length; j++) {
      if (i2 != j && isDuplicate(clusters[i2], clusters[j])) {
        clusters.splice(j, 1);
      }
    }
  }
  return clusters;
};
var markovClustering = function markovClustering2(options2) {
  var nodes3 = this.nodes();
  var edges3 = this.edges();
  var cy = this.cy();
  var opts = setOptions$3(options2);
  var id2position = {};
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    id2position[nodes3[i2].id()] = i2;
  }
  var n = nodes3.length, n2 = n * n;
  var M = new Array(n2), _M;
  for (var _i = 0; _i < n2; _i++) {
    M[_i] = 0;
  }
  for (var e2 = 0; e2 < edges3.length; e2++) {
    var edge = edges3[e2];
    var _i2 = id2position[edge.source().id()];
    var j = id2position[edge.target().id()];
    var sim = getSimilarity$1(edge, opts.attributes);
    M[_i2 * n + j] += sim;
    M[j * n + _i2] += sim;
  }
  addLoops(M, n, opts.multFactor);
  normalize(M, n);
  var isStillMoving = true;
  var iterations = 0;
  while (isStillMoving && iterations < opts.maxIterations) {
    isStillMoving = false;
    _M = expand(M, n, opts.expandFactor);
    M = inflate(_M, n, opts.inflateFactor);
    if (!hasConverged(M, _M, n2, 4)) {
      isStillMoving = true;
    }
    iterations++;
  }
  var clusters = assign$2(M, n, nodes3, cy);
  clusters = removeDuplicates(clusters);
  return clusters;
};
var markovClustering$1 = {
  markovClustering,
  mcl: markovClustering
};
var identity$1 = function identity(x3) {
  return x3;
};
var absDiff = function absDiff2(p3, q) {
  return Math.abs(q - p3);
};
var addAbsDiff = function addAbsDiff2(total, p3, q) {
  return total + absDiff(p3, q);
};
var addSquaredDiff = function addSquaredDiff2(total, p3, q) {
  return total + Math.pow(q - p3, 2);
};
var sqrt = function sqrt3(x3) {
  return Math.sqrt(x3);
};
var maxAbsDiff = function maxAbsDiff2(currentMax, p3, q) {
  return Math.max(currentMax, absDiff(p3, q));
};
var getDistance = function getDistance2(length, getP, getQ, init, visit) {
  var post = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : identity$1;
  var ret = init;
  var p3, q;
  for (var dim = 0; dim < length; dim++) {
    p3 = getP(dim);
    q = getQ(dim);
    ret = visit(ret, p3, q);
  }
  return post(ret);
};
var distances = {
  euclidean: function euclidean(length, getP, getQ) {
    if (length >= 2) {
      return getDistance(length, getP, getQ, 0, addSquaredDiff, sqrt);
    } else {
      return getDistance(length, getP, getQ, 0, addAbsDiff);
    }
  },
  squaredEuclidean: function squaredEuclidean(length, getP, getQ) {
    return getDistance(length, getP, getQ, 0, addSquaredDiff);
  },
  manhattan: function manhattan(length, getP, getQ) {
    return getDistance(length, getP, getQ, 0, addAbsDiff);
  },
  max: function max3(length, getP, getQ) {
    return getDistance(length, getP, getQ, -Infinity, maxAbsDiff);
  }
};
distances["squared-euclidean"] = distances["squaredEuclidean"];
distances["squaredeuclidean"] = distances["squaredEuclidean"];
function clusteringDistance(method, length, getP, getQ, nodeP, nodeQ) {
  var impl2;
  if (fn$6(method)) {
    impl2 = method;
  } else {
    impl2 = distances[method] || distances.euclidean;
  }
  if (length === 0 && fn$6(method)) {
    return impl2(nodeP, nodeQ);
  } else {
    return impl2(length, getP, getQ, nodeP, nodeQ);
  }
}
var defaults$b = defaults$g({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: false,
  testCentroids: null
});
var setOptions$2 = function setOptions2(options2) {
  return defaults$b(options2);
};
var getDist = function getDist2(type, node, centroid, attributes, mode) {
  var noNodeP = mode !== "kMedoids";
  var getP = noNodeP ? function(i2) {
    return centroid[i2];
  } : function(i2) {
    return attributes[i2](centroid);
  };
  var getQ = function getQ2(i2) {
    return attributes[i2](node);
  };
  var nodeP = centroid;
  var nodeQ = node;
  return clusteringDistance(type, attributes.length, getP, getQ, nodeP, nodeQ);
};
var randomCentroids = function randomCentroids2(nodes3, k, attributes) {
  var ndim = attributes.length;
  var min4 = new Array(ndim);
  var max5 = new Array(ndim);
  var centroids = new Array(k);
  var centroid = null;
  for (var i2 = 0; i2 < ndim; i2++) {
    min4[i2] = nodes3.min(attributes[i2]).value;
    max5[i2] = nodes3.max(attributes[i2]).value;
  }
  for (var c2 = 0; c2 < k; c2++) {
    centroid = [];
    for (var _i = 0; _i < ndim; _i++) {
      centroid[_i] = Math.random() * (max5[_i] - min4[_i]) + min4[_i];
    }
    centroids[c2] = centroid;
  }
  return centroids;
};
var classify = function classify2(node, centroids, distance, attributes, type) {
  var min4 = Infinity;
  var index = 0;
  for (var i2 = 0; i2 < centroids.length; i2++) {
    var dist3 = getDist(distance, node, centroids[i2], attributes, type);
    if (dist3 < min4) {
      min4 = dist3;
      index = i2;
    }
  }
  return index;
};
var buildCluster = function buildCluster2(centroid, nodes3, assignment) {
  var cluster = [];
  var node = null;
  for (var n = 0; n < nodes3.length; n++) {
    node = nodes3[n];
    if (assignment[node.id()] === centroid) {
      cluster.push(node);
    }
  }
  return cluster;
};
var haveValuesConverged = function haveValuesConverged2(v12, v22, sensitivityThreshold) {
  return Math.abs(v22 - v12) <= sensitivityThreshold;
};
var haveMatricesConverged = function haveMatricesConverged2(v12, v22, sensitivityThreshold) {
  for (var i2 = 0; i2 < v12.length; i2++) {
    for (var j = 0; j < v12[i2].length; j++) {
      var diff2 = Math.abs(v12[i2][j] - v22[i2][j]);
      if (diff2 > sensitivityThreshold) {
        return false;
      }
    }
  }
  return true;
};
var seenBefore = function seenBefore2(node, medoids, n) {
  for (var i2 = 0; i2 < n; i2++) {
    if (node === medoids[i2]) return true;
  }
  return false;
};
var randomMedoids = function randomMedoids2(nodes3, k) {
  var medoids = new Array(k);
  if (nodes3.length < 50) {
    for (var i2 = 0; i2 < k; i2++) {
      var node = nodes3[Math.floor(Math.random() * nodes3.length)];
      while (seenBefore(node, medoids, i2)) {
        node = nodes3[Math.floor(Math.random() * nodes3.length)];
      }
      medoids[i2] = node;
    }
  } else {
    for (var _i2 = 0; _i2 < k; _i2++) {
      medoids[_i2] = nodes3[Math.floor(Math.random() * nodes3.length)];
    }
  }
  return medoids;
};
var findCost = function findCost2(potentialNewMedoid, cluster, attributes) {
  var cost = 0;
  for (var n = 0; n < cluster.length; n++) {
    cost += getDist("manhattan", cluster[n], potentialNewMedoid, attributes, "kMedoids");
  }
  return cost;
};
var kMeans = function kMeans2(options2) {
  var cy = this.cy();
  var nodes3 = this.nodes();
  var node = null;
  var opts = setOptions$2(options2);
  var clusters = new Array(opts.k);
  var assignment = {};
  var centroids;
  if (opts.testMode) {
    if (typeof opts.testCentroids === "number") {
      opts.testCentroids;
      centroids = randomCentroids(nodes3, opts.k, opts.attributes);
    } else if (_typeof(opts.testCentroids) === "object") {
      centroids = opts.testCentroids;
    } else {
      centroids = randomCentroids(nodes3, opts.k, opts.attributes);
    }
  } else {
    centroids = randomCentroids(nodes3, opts.k, opts.attributes);
  }
  var isStillMoving = true;
  var iterations = 0;
  while (isStillMoving && iterations < opts.maxIterations) {
    for (var n = 0; n < nodes3.length; n++) {
      node = nodes3[n];
      assignment[node.id()] = classify(node, centroids, opts.distance, opts.attributes, "kMeans");
    }
    isStillMoving = false;
    for (var c2 = 0; c2 < opts.k; c2++) {
      var cluster = buildCluster(c2, nodes3, assignment);
      if (cluster.length === 0) {
        continue;
      }
      var ndim = opts.attributes.length;
      var centroid = centroids[c2];
      var newCentroid = new Array(ndim);
      var sum = new Array(ndim);
      for (var d2 = 0; d2 < ndim; d2++) {
        sum[d2] = 0;
        for (var i2 = 0; i2 < cluster.length; i2++) {
          node = cluster[i2];
          sum[d2] += opts.attributes[d2](node);
        }
        newCentroid[d2] = sum[d2] / cluster.length;
        if (!haveValuesConverged(newCentroid[d2], centroid[d2], opts.sensitivityThreshold)) {
          isStillMoving = true;
        }
      }
      centroids[c2] = newCentroid;
      clusters[c2] = cy.collection(cluster);
    }
    iterations++;
  }
  return clusters;
};
var kMedoids = function kMedoids2(options2) {
  var cy = this.cy();
  var nodes3 = this.nodes();
  var node = null;
  var opts = setOptions$2(options2);
  var clusters = new Array(opts.k);
  var medoids;
  var assignment = {};
  var curCost;
  var minCosts = new Array(opts.k);
  if (opts.testMode) {
    if (typeof opts.testCentroids === "number") ;
    else if (_typeof(opts.testCentroids) === "object") {
      medoids = opts.testCentroids;
    } else {
      medoids = randomMedoids(nodes3, opts.k);
    }
  } else {
    medoids = randomMedoids(nodes3, opts.k);
  }
  var isStillMoving = true;
  var iterations = 0;
  while (isStillMoving && iterations < opts.maxIterations) {
    for (var n = 0; n < nodes3.length; n++) {
      node = nodes3[n];
      assignment[node.id()] = classify(node, medoids, opts.distance, opts.attributes, "kMedoids");
    }
    isStillMoving = false;
    for (var m2 = 0; m2 < medoids.length; m2++) {
      var cluster = buildCluster(m2, nodes3, assignment);
      if (cluster.length === 0) {
        continue;
      }
      minCosts[m2] = findCost(medoids[m2], cluster, opts.attributes);
      for (var _n = 0; _n < cluster.length; _n++) {
        curCost = findCost(cluster[_n], cluster, opts.attributes);
        if (curCost < minCosts[m2]) {
          minCosts[m2] = curCost;
          medoids[m2] = cluster[_n];
          isStillMoving = true;
        }
      }
      clusters[m2] = cy.collection(cluster);
    }
    iterations++;
  }
  return clusters;
};
var updateCentroids = function updateCentroids2(centroids, nodes3, U, weight8, opts) {
  var numerator, denominator;
  for (var n = 0; n < nodes3.length; n++) {
    for (var c2 = 0; c2 < centroids.length; c2++) {
      weight8[n][c2] = Math.pow(U[n][c2], opts.m);
    }
  }
  for (var _c = 0; _c < centroids.length; _c++) {
    for (var dim = 0; dim < opts.attributes.length; dim++) {
      numerator = 0;
      denominator = 0;
      for (var _n2 = 0; _n2 < nodes3.length; _n2++) {
        numerator += weight8[_n2][_c] * opts.attributes[dim](nodes3[_n2]);
        denominator += weight8[_n2][_c];
      }
      centroids[_c][dim] = numerator / denominator;
    }
  }
};
var updateMembership = function updateMembership2(U, _U, centroids, nodes3, opts) {
  for (var i2 = 0; i2 < U.length; i2++) {
    _U[i2] = U[i2].slice();
  }
  var sum, numerator, denominator;
  var pow = 2 / (opts.m - 1);
  for (var c2 = 0; c2 < centroids.length; c2++) {
    for (var n = 0; n < nodes3.length; n++) {
      sum = 0;
      for (var k = 0; k < centroids.length; k++) {
        numerator = getDist(opts.distance, nodes3[n], centroids[c2], opts.attributes, "cmeans");
        denominator = getDist(opts.distance, nodes3[n], centroids[k], opts.attributes, "cmeans");
        sum += Math.pow(numerator / denominator, pow);
      }
      U[n][c2] = 1 / sum;
    }
  }
};
var assign$1 = function assign2(nodes3, U, opts, cy) {
  var clusters = new Array(opts.k);
  for (var c2 = 0; c2 < clusters.length; c2++) {
    clusters[c2] = [];
  }
  var max5;
  var index;
  for (var n = 0; n < U.length; n++) {
    max5 = -Infinity;
    index = -1;
    for (var _c2 = 0; _c2 < U[0].length; _c2++) {
      if (U[n][_c2] > max5) {
        max5 = U[n][_c2];
        index = _c2;
      }
    }
    clusters[index].push(nodes3[n]);
  }
  for (var _c3 = 0; _c3 < clusters.length; _c3++) {
    clusters[_c3] = cy.collection(clusters[_c3]);
  }
  return clusters;
};
var fuzzyCMeans = function fuzzyCMeans2(options2) {
  var cy = this.cy();
  var nodes3 = this.nodes();
  var opts = setOptions$2(options2);
  var clusters;
  var centroids;
  var U;
  var _U;
  var weight8;
  _U = new Array(nodes3.length);
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    _U[i2] = new Array(opts.k);
  }
  U = new Array(nodes3.length);
  for (var _i3 = 0; _i3 < nodes3.length; _i3++) {
    U[_i3] = new Array(opts.k);
  }
  for (var _i4 = 0; _i4 < nodes3.length; _i4++) {
    var total = 0;
    for (var j = 0; j < opts.k; j++) {
      U[_i4][j] = Math.random();
      total += U[_i4][j];
    }
    for (var _j = 0; _j < opts.k; _j++) {
      U[_i4][_j] = U[_i4][_j] / total;
    }
  }
  centroids = new Array(opts.k);
  for (var _i5 = 0; _i5 < opts.k; _i5++) {
    centroids[_i5] = new Array(opts.attributes.length);
  }
  weight8 = new Array(nodes3.length);
  for (var _i6 = 0; _i6 < nodes3.length; _i6++) {
    weight8[_i6] = new Array(opts.k);
  }
  var isStillMoving = true;
  var iterations = 0;
  while (isStillMoving && iterations < opts.maxIterations) {
    isStillMoving = false;
    updateCentroids(centroids, nodes3, U, weight8, opts);
    updateMembership(U, _U, centroids, nodes3, opts);
    if (!haveMatricesConverged(U, _U, opts.sensitivityThreshold)) {
      isStillMoving = true;
    }
    iterations++;
  }
  clusters = assign$1(nodes3, U, opts, cy);
  return {
    clusters,
    degreeOfMembership: U
  };
};
var kClustering = {
  kMeans,
  kMedoids,
  fuzzyCMeans,
  fcm: fuzzyCMeans
};
var defaults$a = defaults$g({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: Infinity,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: false,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
});
var linkageAliases = {
  "single": "min",
  "complete": "max"
};
var setOptions$1 = function setOptions3(options2) {
  var opts = defaults$a(options2);
  var preferredAlias = linkageAliases[opts.linkage];
  if (preferredAlias != null) {
    opts.linkage = preferredAlias;
  }
  return opts;
};
var mergeClosest = function mergeClosest2(clusters, index, dists, mins, opts) {
  var minKey = 0;
  var min4 = Infinity;
  var dist3;
  var attrs = opts.attributes;
  var getDist3 = function getDist4(n1, n2) {
    return clusteringDistance(opts.distance, attrs.length, function(i3) {
      return attrs[i3](n1);
    }, function(i3) {
      return attrs[i3](n2);
    }, n1, n2);
  };
  for (var i2 = 0; i2 < clusters.length; i2++) {
    var key = clusters[i2].key;
    var _dist = dists[key][mins[key]];
    if (_dist < min4) {
      minKey = key;
      min4 = _dist;
    }
  }
  if (opts.mode === "threshold" && min4 >= opts.threshold || opts.mode === "dendrogram" && clusters.length === 1) {
    return false;
  }
  var c1 = index[minKey];
  var c2 = index[mins[minKey]];
  var merged;
  if (opts.mode === "dendrogram") {
    merged = {
      left: c1,
      right: c2,
      key: c1.key
    };
  } else {
    merged = {
      value: c1.value.concat(c2.value),
      key: c1.key
    };
  }
  clusters[c1.index] = merged;
  clusters.splice(c2.index, 1);
  index[c1.key] = merged;
  for (var _i = 0; _i < clusters.length; _i++) {
    var cur = clusters[_i];
    if (c1.key === cur.key) {
      dist3 = Infinity;
    } else if (opts.linkage === "min") {
      dist3 = dists[c1.key][cur.key];
      if (dists[c1.key][cur.key] > dists[c2.key][cur.key]) {
        dist3 = dists[c2.key][cur.key];
      }
    } else if (opts.linkage === "max") {
      dist3 = dists[c1.key][cur.key];
      if (dists[c1.key][cur.key] < dists[c2.key][cur.key]) {
        dist3 = dists[c2.key][cur.key];
      }
    } else if (opts.linkage === "mean") {
      dist3 = (dists[c1.key][cur.key] * c1.size + dists[c2.key][cur.key] * c2.size) / (c1.size + c2.size);
    } else {
      if (opts.mode === "dendrogram") dist3 = getDist3(cur.value, c1.value);
      else dist3 = getDist3(cur.value[0], c1.value[0]);
    }
    dists[c1.key][cur.key] = dists[cur.key][c1.key] = dist3;
  }
  for (var _i2 = 0; _i2 < clusters.length; _i2++) {
    var key1 = clusters[_i2].key;
    if (mins[key1] === c1.key || mins[key1] === c2.key) {
      var _min = key1;
      for (var j = 0; j < clusters.length; j++) {
        var key2 = clusters[j].key;
        if (dists[key1][key2] < dists[key1][_min]) {
          _min = key2;
        }
      }
      mins[key1] = _min;
    }
    clusters[_i2].index = _i2;
  }
  c1.key = c2.key = c1.index = c2.index = null;
  return true;
};
var _getAllChildren = function getAllChildren(root, arr, cy) {
  if (!root) return;
  if (root.value) {
    arr.push(root.value);
  } else {
    if (root.left) _getAllChildren(root.left, arr);
    if (root.right) _getAllChildren(root.right, arr);
  }
};
var _buildDendrogram = function buildDendrogram(root, cy) {
  if (!root) return "";
  if (root.left && root.right) {
    var leftStr = _buildDendrogram(root.left, cy);
    var rightStr = _buildDendrogram(root.right, cy);
    var node = cy.add({
      group: "nodes",
      data: {
        id: leftStr + "," + rightStr
      }
    });
    cy.add({
      group: "edges",
      data: {
        source: leftStr,
        target: node.id()
      }
    });
    cy.add({
      group: "edges",
      data: {
        source: rightStr,
        target: node.id()
      }
    });
    return node.id();
  } else if (root.value) {
    return root.value.id();
  }
};
var _buildClustersFromTree = function buildClustersFromTree(root, k, cy) {
  if (!root) return [];
  var left = [], right = [], leaves = [];
  if (k === 0) {
    if (root.left) _getAllChildren(root.left, left);
    if (root.right) _getAllChildren(root.right, right);
    leaves = left.concat(right);
    return [cy.collection(leaves)];
  } else if (k === 1) {
    if (root.value) {
      return [cy.collection(root.value)];
    } else {
      if (root.left) _getAllChildren(root.left, left);
      if (root.right) _getAllChildren(root.right, right);
      return [cy.collection(left), cy.collection(right)];
    }
  } else {
    if (root.value) {
      return [cy.collection(root.value)];
    } else {
      if (root.left) left = _buildClustersFromTree(root.left, k - 1, cy);
      if (root.right) right = _buildClustersFromTree(root.right, k - 1, cy);
      return left.concat(right);
    }
  }
};
var hierarchicalClustering = function hierarchicalClustering2(options2) {
  var cy = this.cy();
  var nodes3 = this.nodes();
  var opts = setOptions$1(options2);
  var attrs = opts.attributes;
  var getDist3 = function getDist4(n1, n2) {
    return clusteringDistance(opts.distance, attrs.length, function(i3) {
      return attrs[i3](n1);
    }, function(i3) {
      return attrs[i3](n2);
    }, n1, n2);
  };
  var clusters = [];
  var dists = [];
  var mins = [];
  var index = [];
  for (var n = 0; n < nodes3.length; n++) {
    var cluster = {
      value: opts.mode === "dendrogram" ? nodes3[n] : [nodes3[n]],
      key: n,
      index: n
    };
    clusters[n] = cluster;
    index[n] = cluster;
    dists[n] = [];
    mins[n] = 0;
  }
  for (var i2 = 0; i2 < clusters.length; i2++) {
    for (var j = 0; j <= i2; j++) {
      var dist3 = void 0;
      if (opts.mode === "dendrogram") {
        dist3 = i2 === j ? Infinity : getDist3(clusters[i2].value, clusters[j].value);
      } else {
        dist3 = i2 === j ? Infinity : getDist3(clusters[i2].value[0], clusters[j].value[0]);
      }
      dists[i2][j] = dist3;
      dists[j][i2] = dist3;
      if (dist3 < dists[i2][mins[i2]]) {
        mins[i2] = j;
      }
    }
  }
  var merged = mergeClosest(clusters, index, dists, mins, opts);
  while (merged) {
    merged = mergeClosest(clusters, index, dists, mins, opts);
  }
  var retClusters;
  if (opts.mode === "dendrogram") {
    retClusters = _buildClustersFromTree(clusters[0], opts.dendrogramDepth, cy);
    if (opts.addDendrogram) _buildDendrogram(clusters[0], cy);
  } else {
    retClusters = new Array(clusters.length);
    clusters.forEach(function(cluster2, i3) {
      cluster2.key = cluster2.index = null;
      retClusters[i3] = cy.collection(cluster2.value);
    });
  }
  return retClusters;
};
var hierarchicalClustering$1 = {
  hierarchicalClustering,
  hca: hierarchicalClustering
};
var defaults$9 = defaults$g({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
});
var setOptions4 = function setOptions5(options2) {
  var dmp = options2.damping;
  var pref = options2.preference;
  if (!(0.5 <= dmp && dmp < 1)) {
    error("Damping must range on [0.5, 1).  Got: ".concat(dmp));
  }
  var validPrefs = ["median", "mean", "min", "max"];
  if (!(validPrefs.some(function(v) {
    return v === pref;
  }) || number$1(pref))) {
    error("Preference must be one of [".concat(validPrefs.map(function(p3) {
      return "'".concat(p3, "'");
    }).join(", "), "] or a number.  Got: ").concat(pref));
  }
  return defaults$9(options2);
};
var getSimilarity2 = function getSimilarity3(type, n1, n2, attributes) {
  var attr = function attr2(n, i2) {
    return attributes[i2](n);
  };
  return -clusteringDistance(type, attributes.length, function(i2) {
    return attr(n1, i2);
  }, function(i2) {
    return attr(n2, i2);
  }, n1, n2);
};
var getPreference = function getPreference2(S, preference) {
  var p3 = null;
  if (preference === "median") {
    p3 = median(S);
  } else if (preference === "mean") {
    p3 = mean(S);
  } else if (preference === "min") {
    p3 = min(S);
  } else if (preference === "max") {
    p3 = max(S);
  } else {
    p3 = preference;
  }
  return p3;
};
var findExemplars = function findExemplars2(n, R, A) {
  var indices = [];
  for (var i2 = 0; i2 < n; i2++) {
    if (R[i2 * n + i2] + A[i2 * n + i2] > 0) {
      indices.push(i2);
    }
  }
  return indices;
};
var assignClusters = function assignClusters2(n, S, exemplars) {
  var clusters = [];
  for (var i2 = 0; i2 < n; i2++) {
    var index = -1;
    var max5 = -Infinity;
    for (var ei = 0; ei < exemplars.length; ei++) {
      var e2 = exemplars[ei];
      if (S[i2 * n + e2] > max5) {
        index = e2;
        max5 = S[i2 * n + e2];
      }
    }
    if (index > 0) {
      clusters.push(index);
    }
  }
  for (var _ei = 0; _ei < exemplars.length; _ei++) {
    clusters[exemplars[_ei]] = exemplars[_ei];
  }
  return clusters;
};
var assign3 = function assign4(n, S, exemplars) {
  var clusters = assignClusters(n, S, exemplars);
  for (var ei = 0; ei < exemplars.length; ei++) {
    var ii = [];
    for (var c2 = 0; c2 < clusters.length; c2++) {
      if (clusters[c2] === exemplars[ei]) {
        ii.push(c2);
      }
    }
    var maxI = -1;
    var maxSum = -Infinity;
    for (var i2 = 0; i2 < ii.length; i2++) {
      var sum = 0;
      for (var j = 0; j < ii.length; j++) {
        sum += S[ii[j] * n + ii[i2]];
      }
      if (sum > maxSum) {
        maxI = i2;
        maxSum = sum;
      }
    }
    exemplars[ei] = ii[maxI];
  }
  clusters = assignClusters(n, S, exemplars);
  return clusters;
};
var affinityPropagation = function affinityPropagation2(options2) {
  var cy = this.cy();
  var nodes3 = this.nodes();
  var opts = setOptions4(options2);
  var id2position = {};
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    id2position[nodes3[i2].id()] = i2;
  }
  var n;
  var n2;
  var S;
  var p3;
  var R;
  var A;
  n = nodes3.length;
  n2 = n * n;
  S = new Array(n2);
  for (var _i = 0; _i < n2; _i++) {
    S[_i] = -Infinity;
  }
  for (var _i2 = 0; _i2 < n; _i2++) {
    for (var j = 0; j < n; j++) {
      if (_i2 !== j) {
        S[_i2 * n + j] = getSimilarity2(opts.distance, nodes3[_i2], nodes3[j], opts.attributes);
      }
    }
  }
  p3 = getPreference(S, opts.preference);
  for (var _i3 = 0; _i3 < n; _i3++) {
    S[_i3 * n + _i3] = p3;
  }
  R = new Array(n2);
  for (var _i4 = 0; _i4 < n2; _i4++) {
    R[_i4] = 0;
  }
  A = new Array(n2);
  for (var _i5 = 0; _i5 < n2; _i5++) {
    A[_i5] = 0;
  }
  var old = new Array(n);
  var Rp = new Array(n);
  var se = new Array(n);
  for (var _i6 = 0; _i6 < n; _i6++) {
    old[_i6] = 0;
    Rp[_i6] = 0;
    se[_i6] = 0;
  }
  var e2 = new Array(n * opts.minIterations);
  for (var _i7 = 0; _i7 < e2.length; _i7++) {
    e2[_i7] = 0;
  }
  var iter;
  for (iter = 0; iter < opts.maxIterations; iter++) {
    for (var _i8 = 0; _i8 < n; _i8++) {
      var max5 = -Infinity, max22 = -Infinity, maxI = -1, AS = 0;
      for (var _j = 0; _j < n; _j++) {
        old[_j] = R[_i8 * n + _j];
        AS = A[_i8 * n + _j] + S[_i8 * n + _j];
        if (AS >= max5) {
          max22 = max5;
          max5 = AS;
          maxI = _j;
        } else if (AS > max22) {
          max22 = AS;
        }
      }
      for (var _j2 = 0; _j2 < n; _j2++) {
        R[_i8 * n + _j2] = (1 - opts.damping) * (S[_i8 * n + _j2] - max5) + opts.damping * old[_j2];
      }
      R[_i8 * n + maxI] = (1 - opts.damping) * (S[_i8 * n + maxI] - max22) + opts.damping * old[maxI];
    }
    for (var _i9 = 0; _i9 < n; _i9++) {
      var sum = 0;
      for (var _j3 = 0; _j3 < n; _j3++) {
        old[_j3] = A[_j3 * n + _i9];
        Rp[_j3] = Math.max(0, R[_j3 * n + _i9]);
        sum += Rp[_j3];
      }
      sum -= Rp[_i9];
      Rp[_i9] = R[_i9 * n + _i9];
      sum += Rp[_i9];
      for (var _j4 = 0; _j4 < n; _j4++) {
        A[_j4 * n + _i9] = (1 - opts.damping) * Math.min(0, sum - Rp[_j4]) + opts.damping * old[_j4];
      }
      A[_i9 * n + _i9] = (1 - opts.damping) * (sum - Rp[_i9]) + opts.damping * old[_i9];
    }
    var K2 = 0;
    for (var _i10 = 0; _i10 < n; _i10++) {
      var E2 = A[_i10 * n + _i10] + R[_i10 * n + _i10] > 0 ? 1 : 0;
      e2[iter % opts.minIterations * n + _i10] = E2;
      K2 += E2;
    }
    if (K2 > 0 && (iter >= opts.minIterations - 1 || iter == opts.maxIterations - 1)) {
      var _sum = 0;
      for (var _i11 = 0; _i11 < n; _i11++) {
        se[_i11] = 0;
        for (var _j5 = 0; _j5 < opts.minIterations; _j5++) {
          se[_i11] += e2[_j5 * n + _i11];
        }
        if (se[_i11] === 0 || se[_i11] === opts.minIterations) {
          _sum++;
        }
      }
      if (_sum === n) {
        break;
      }
    }
  }
  var exemplarsIndices = findExemplars(n, R, A);
  var clusterIndices = assign3(n, S, exemplarsIndices);
  var clusters = {};
  for (var c2 = 0; c2 < exemplarsIndices.length; c2++) {
    clusters[exemplarsIndices[c2]] = [];
  }
  for (var _i12 = 0; _i12 < nodes3.length; _i12++) {
    var pos = id2position[nodes3[_i12].id()];
    var clusterIndex = clusterIndices[pos];
    if (clusterIndex != null) {
      clusters[clusterIndex].push(nodes3[_i12]);
    }
  }
  var retClusters = new Array(exemplarsIndices.length);
  for (var _c = 0; _c < exemplarsIndices.length; _c++) {
    retClusters[_c] = cy.collection(clusters[exemplarsIndices[_c]]);
  }
  return retClusters;
};
var affinityPropagation$1 = {
  affinityPropagation,
  ap: affinityPropagation
};
var hierholzerDefaults = defaults$g({
  root: void 0,
  directed: false
});
var elesfn$k = {
  hierholzer: function hierholzer(options2) {
    if (!plainObject(options2)) {
      var args = arguments;
      options2 = {
        root: args[0],
        directed: args[1]
      };
    }
    var _hierholzerDefaults = hierholzerDefaults(options2), root = _hierholzerDefaults.root, directed = _hierholzerDefaults.directed;
    var eles = this;
    var dflag = false;
    var oddIn;
    var oddOut;
    var startVertex;
    if (root) startVertex = string(root) ? this.filter(root)[0].id() : root[0].id();
    var nodes3 = {};
    var edges3 = {};
    if (directed) {
      eles.forEach(function(ele) {
        var id2 = ele.id();
        if (ele.isNode()) {
          var ind = ele.indegree(true);
          var outd = ele.outdegree(true);
          var d1 = ind - outd;
          var d22 = outd - ind;
          if (d1 == 1) {
            if (oddIn) dflag = true;
            else oddIn = id2;
          } else if (d22 == 1) {
            if (oddOut) dflag = true;
            else oddOut = id2;
          } else if (d22 > 1 || d1 > 1) {
            dflag = true;
          }
          nodes3[id2] = [];
          ele.outgoers().forEach(function(e2) {
            if (e2.isEdge()) nodes3[id2].push(e2.id());
          });
        } else {
          edges3[id2] = [void 0, ele.target().id()];
        }
      });
    } else {
      eles.forEach(function(ele) {
        var id2 = ele.id();
        if (ele.isNode()) {
          var d3 = ele.degree(true);
          if (d3 % 2) {
            if (!oddIn) oddIn = id2;
            else if (!oddOut) oddOut = id2;
            else dflag = true;
          }
          nodes3[id2] = [];
          ele.connectedEdges().forEach(function(e2) {
            return nodes3[id2].push(e2.id());
          });
        } else {
          edges3[id2] = [ele.source().id(), ele.target().id()];
        }
      });
    }
    var result = {
      found: false,
      trail: void 0
    };
    if (dflag) return result;
    else if (oddOut && oddIn) {
      if (directed) {
        if (startVertex && oddOut != startVertex) {
          return result;
        }
        startVertex = oddOut;
      } else {
        if (startVertex && oddOut != startVertex && oddIn != startVertex) {
          return result;
        } else if (!startVertex) {
          startVertex = oddOut;
        }
      }
    } else {
      if (!startVertex) startVertex = eles[0].id();
    }
    var walk = function walk2(v) {
      var currentNode = v;
      var subtour2 = [v];
      var adj, adjTail, adjHead;
      while (nodes3[currentNode].length) {
        adj = nodes3[currentNode].shift();
        adjTail = edges3[adj][0];
        adjHead = edges3[adj][1];
        if (currentNode != adjHead) {
          nodes3[adjHead] = nodes3[adjHead].filter(function(e2) {
            return e2 != adj;
          });
          currentNode = adjHead;
        } else if (!directed && currentNode != adjTail) {
          nodes3[adjTail] = nodes3[adjTail].filter(function(e2) {
            return e2 != adj;
          });
          currentNode = adjTail;
        }
        subtour2.unshift(adj);
        subtour2.unshift(currentNode);
      }
      return subtour2;
    };
    var trail = [];
    var subtour = [];
    subtour = walk(startVertex);
    while (subtour.length != 1) {
      if (nodes3[subtour[0]].length == 0) {
        trail.unshift(eles.getElementById(subtour.shift()));
        trail.unshift(eles.getElementById(subtour.shift()));
      } else {
        subtour = walk(subtour.shift()).concat(subtour);
      }
    }
    trail.unshift(eles.getElementById(subtour.shift()));
    for (var d2 in nodes3) {
      if (nodes3[d2].length) {
        return result;
      }
    }
    result.found = true;
    result.trail = this.spawn(trail, true);
    return result;
  }
};
var hopcroftTarjanBiconnected = function hopcroftTarjanBiconnected2() {
  var eles = this;
  var nodes3 = {};
  var id2 = 0;
  var edgeCount = 0;
  var components2 = [];
  var stack = [];
  var visitedEdges = {};
  var buildComponent = function buildComponent2(x3, y3) {
    var i2 = stack.length - 1;
    var cutset = [];
    var component2 = eles.spawn();
    while (stack[i2].x != x3 || stack[i2].y != y3) {
      cutset.push(stack.pop().edge);
      i2--;
    }
    cutset.push(stack.pop().edge);
    cutset.forEach(function(edge) {
      var connectedNodes = edge.connectedNodes().intersection(eles);
      component2.merge(edge);
      connectedNodes.forEach(function(node) {
        var nodeId = node.id();
        var connectedEdges = node.connectedEdges().intersection(eles);
        component2.merge(node);
        if (!nodes3[nodeId].cutVertex) {
          component2.merge(connectedEdges);
        } else {
          component2.merge(connectedEdges.filter(function(edge2) {
            return edge2.isLoop();
          }));
        }
      });
    });
    components2.push(component2);
  };
  var _biconnectedSearch = function biconnectedSearch(root, currentNode, parent4) {
    if (root === parent4) edgeCount += 1;
    nodes3[currentNode] = {
      id: id2,
      low: id2++,
      cutVertex: false
    };
    var edges3 = eles.getElementById(currentNode).connectedEdges().intersection(eles);
    if (edges3.size() === 0) {
      components2.push(eles.spawn(eles.getElementById(currentNode)));
    } else {
      var sourceId, targetId, otherNodeId, edgeId;
      edges3.forEach(function(edge) {
        sourceId = edge.source().id();
        targetId = edge.target().id();
        otherNodeId = sourceId === currentNode ? targetId : sourceId;
        if (otherNodeId !== parent4) {
          edgeId = edge.id();
          if (!visitedEdges[edgeId]) {
            visitedEdges[edgeId] = true;
            stack.push({
              x: currentNode,
              y: otherNodeId,
              edge
            });
          }
          if (!(otherNodeId in nodes3)) {
            _biconnectedSearch(root, otherNodeId, currentNode);
            nodes3[currentNode].low = Math.min(nodes3[currentNode].low, nodes3[otherNodeId].low);
            if (nodes3[currentNode].id <= nodes3[otherNodeId].low) {
              nodes3[currentNode].cutVertex = true;
              buildComponent(currentNode, otherNodeId);
            }
          } else {
            nodes3[currentNode].low = Math.min(nodes3[currentNode].low, nodes3[otherNodeId].id);
          }
        }
      });
    }
  };
  eles.forEach(function(ele) {
    if (ele.isNode()) {
      var nodeId = ele.id();
      if (!(nodeId in nodes3)) {
        edgeCount = 0;
        _biconnectedSearch(nodeId, nodeId);
        nodes3[nodeId].cutVertex = edgeCount > 1;
      }
    }
  });
  var cutVertices = Object.keys(nodes3).filter(function(id3) {
    return nodes3[id3].cutVertex;
  }).map(function(id3) {
    return eles.getElementById(id3);
  });
  return {
    cut: eles.spawn(cutVertices),
    components: components2
  };
};
var hopcroftTarjanBiconnected$1 = {
  hopcroftTarjanBiconnected,
  htbc: hopcroftTarjanBiconnected,
  htb: hopcroftTarjanBiconnected,
  hopcroftTarjanBiconnectedComponents: hopcroftTarjanBiconnected
};
var tarjanStronglyConnected = function tarjanStronglyConnected2() {
  var eles = this;
  var nodes3 = {};
  var index = 0;
  var components2 = [];
  var stack = [];
  var cut = eles.spawn(eles);
  var _stronglyConnectedSearch = function stronglyConnectedSearch(sourceNodeId) {
    stack.push(sourceNodeId);
    nodes3[sourceNodeId] = {
      index,
      low: index++,
      explored: false
    };
    var connectedEdges = eles.getElementById(sourceNodeId).connectedEdges().intersection(eles);
    connectedEdges.forEach(function(edge) {
      var targetNodeId = edge.target().id();
      if (targetNodeId !== sourceNodeId) {
        if (!(targetNodeId in nodes3)) {
          _stronglyConnectedSearch(targetNodeId);
        }
        if (!nodes3[targetNodeId].explored) {
          nodes3[sourceNodeId].low = Math.min(nodes3[sourceNodeId].low, nodes3[targetNodeId].low);
        }
      }
    });
    if (nodes3[sourceNodeId].index === nodes3[sourceNodeId].low) {
      var componentNodes = eles.spawn();
      for (; ; ) {
        var nodeId = stack.pop();
        componentNodes.merge(eles.getElementById(nodeId));
        nodes3[nodeId].low = nodes3[sourceNodeId].index;
        nodes3[nodeId].explored = true;
        if (nodeId === sourceNodeId) {
          break;
        }
      }
      var componentEdges = componentNodes.edgesWith(componentNodes);
      var component2 = componentNodes.merge(componentEdges);
      components2.push(component2);
      cut = cut.difference(component2);
    }
  };
  eles.forEach(function(ele) {
    if (ele.isNode()) {
      var nodeId = ele.id();
      if (!(nodeId in nodes3)) {
        _stronglyConnectedSearch(nodeId);
      }
    }
  });
  return {
    cut,
    components: components2
  };
};
var tarjanStronglyConnected$1 = {
  tarjanStronglyConnected,
  tsc: tarjanStronglyConnected,
  tscc: tarjanStronglyConnected,
  tarjanStronglyConnectedComponents: tarjanStronglyConnected
};
var elesfn$j = {};
[elesfn$v, elesfn$u, elesfn$t, elesfn$s, elesfn$r, elesfn$q, elesfn$p, elesfn$o, elesfn$n, elesfn$m, elesfn$l, markovClustering$1, kClustering, hierarchicalClustering$1, affinityPropagation$1, elesfn$k, hopcroftTarjanBiconnected$1, tarjanStronglyConnected$1].forEach(function(props) {
  extend(elesfn$j, props);
});
var STATE_PENDING = 0;
var STATE_FULFILLED = 1;
var STATE_REJECTED = 2;
var _api = function api(executor) {
  if (!(this instanceof _api)) return new _api(executor);
  this.id = "Thenable/1.0.7";
  this.state = STATE_PENDING;
  this.fulfillValue = void 0;
  this.rejectReason = void 0;
  this.onFulfilled = [];
  this.onRejected = [];
  this.proxy = {
    then: this.then.bind(this)
  };
  if (typeof executor === "function") executor.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
_api.prototype = {
  /*  promise resolving methods  */
  fulfill: function fulfill(value) {
    return deliver(this, STATE_FULFILLED, "fulfillValue", value);
  },
  reject: function reject(value) {
    return deliver(this, STATE_REJECTED, "rejectReason", value);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function then(onFulfilled, onRejected) {
    var curr = this;
    var next = new _api();
    curr.onFulfilled.push(resolver(onFulfilled, next, "fulfill"));
    curr.onRejected.push(resolver(onRejected, next, "reject"));
    execute(curr);
    return next.proxy;
  }
};
var deliver = function deliver2(curr, state, name, value) {
  if (curr.state === STATE_PENDING) {
    curr.state = state;
    curr[name] = value;
    execute(curr);
  }
  return curr;
};
var execute = function execute2(curr) {
  if (curr.state === STATE_FULFILLED) execute_handlers(curr, "onFulfilled", curr.fulfillValue);
  else if (curr.state === STATE_REJECTED) execute_handlers(curr, "onRejected", curr.rejectReason);
};
var execute_handlers = function execute_handlers2(curr, name, value) {
  if (curr[name].length === 0) return;
  var handlers = curr[name];
  curr[name] = [];
  var func = function func2() {
    for (var i2 = 0; i2 < handlers.length; i2++) handlers[i2](value);
  };
  if (typeof setImmediate === "function") setImmediate(func);
  else setTimeout(func, 0);
};
var resolver = function resolver2(cb, next, method) {
  return function(value) {
    if (typeof cb !== "function")
      next[method].call(next, value);
    else {
      var result;
      try {
        result = cb(value);
      } catch (e2) {
        next.reject(e2);
        return;
      }
      _resolve(next, result);
    }
  };
};
var _resolve = function resolve(promise4, x3) {
  if (promise4 === x3 || promise4.proxy === x3) {
    promise4.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var then2;
  if (_typeof(x3) === "object" && x3 !== null || typeof x3 === "function") {
    try {
      then2 = x3.then;
    } catch (e2) {
      promise4.reject(e2);
      return;
    }
  }
  if (typeof then2 === "function") {
    var resolved = false;
    try {
      then2.call(
        x3,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(y3) {
          if (resolved) return;
          resolved = true;
          if (y3 === x3)
            promise4.reject(new TypeError("circular thenable chain"));
          else _resolve(promise4, y3);
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(r2) {
          if (resolved) return;
          resolved = true;
          promise4.reject(r2);
        }
      );
    } catch (e2) {
      if (!resolved)
        promise4.reject(e2);
    }
    return;
  }
  promise4.fulfill(x3);
};
_api.all = function(ps) {
  return new _api(function(resolveAll, rejectAll) {
    var vals = new Array(ps.length);
    var doneCount = 0;
    var fulfill2 = function fulfill3(i3, val) {
      vals[i3] = val;
      doneCount++;
      if (doneCount === ps.length) {
        resolveAll(vals);
      }
    };
    for (var i2 = 0; i2 < ps.length; i2++) {
      (function(i3) {
        var p3 = ps[i3];
        var isPromise = p3 != null && p3.then != null;
        if (isPromise) {
          p3.then(function(val2) {
            fulfill2(i3, val2);
          }, function(err) {
            rejectAll(err);
          });
        } else {
          var val = p3;
          fulfill2(i3, val);
        }
      })(i2);
    }
  });
};
_api.resolve = function(val) {
  return new _api(function(resolve2, reject2) {
    resolve2(val);
  });
};
_api.reject = function(val) {
  return new _api(function(resolve2, reject2) {
    reject2(val);
  });
};
var Promise$1 = typeof Promise !== "undefined" ? Promise : _api;
var Animation = function Animation2(target, opts, opts2) {
  var isCore = core(target);
  var isEle = !isCore;
  var _p = this._private = extend({
    duration: 1e3
  }, opts, opts2);
  _p.target = target;
  _p.style = _p.style || _p.css;
  _p.started = false;
  _p.playing = false;
  _p.hooked = false;
  _p.applying = false;
  _p.progress = 0;
  _p.completes = [];
  _p.frames = [];
  if (_p.complete && fn$6(_p.complete)) {
    _p.completes.push(_p.complete);
  }
  if (isEle) {
    var pos = target.position();
    _p.startPosition = _p.startPosition || {
      x: pos.x,
      y: pos.y
    };
    _p.startStyle = _p.startStyle || target.cy().style().getAnimationStartStyle(target, _p.style);
  }
  if (isCore) {
    var pan2 = target.pan();
    _p.startPan = {
      x: pan2.x,
      y: pan2.y
    };
    _p.startZoom = target.zoom();
  }
  this.length = 1;
  this[0] = this;
};
var anifn = Animation.prototype;
extend(anifn, {
  instanceString: function instanceString() {
    return "animation";
  },
  hook: function hook() {
    var _p = this._private;
    if (!_p.hooked) {
      var q;
      var tAni = _p.target._private.animation;
      if (_p.queue) {
        q = tAni.queue;
      } else {
        q = tAni.current;
      }
      q.push(this);
      if (elementOrCollection(_p.target)) {
        _p.target.cy().addToAnimationPool(_p.target);
      }
      _p.hooked = true;
    }
    return this;
  },
  play: function play() {
    var _p = this._private;
    if (_p.progress === 1) {
      _p.progress = 0;
    }
    _p.playing = true;
    _p.started = false;
    _p.stopped = false;
    this.hook();
    return this;
  },
  playing: function playing() {
    return this._private.playing;
  },
  apply: function apply() {
    var _p = this._private;
    _p.applying = true;
    _p.started = false;
    _p.stopped = false;
    this.hook();
    return this;
  },
  applying: function applying() {
    return this._private.applying;
  },
  pause: function pause() {
    var _p = this._private;
    _p.playing = false;
    _p.started = false;
    return this;
  },
  stop: function stop() {
    var _p = this._private;
    _p.playing = false;
    _p.started = false;
    _p.stopped = true;
    return this;
  },
  rewind: function rewind() {
    return this.progress(0);
  },
  fastforward: function fastforward() {
    return this.progress(1);
  },
  time: function time(t2) {
    var _p = this._private;
    if (t2 === void 0) {
      return _p.progress * _p.duration;
    } else {
      return this.progress(t2 / _p.duration);
    }
  },
  progress: function progress(p3) {
    var _p = this._private;
    var wasPlaying = _p.playing;
    if (p3 === void 0) {
      return _p.progress;
    } else {
      if (wasPlaying) {
        this.pause();
      }
      _p.progress = p3;
      _p.started = false;
      if (wasPlaying) {
        this.play();
      }
    }
    return this;
  },
  completed: function completed() {
    return this._private.progress === 1;
  },
  reverse: function reverse() {
    var _p = this._private;
    var wasPlaying = _p.playing;
    if (wasPlaying) {
      this.pause();
    }
    _p.progress = 1 - _p.progress;
    _p.started = false;
    var swap = function swap2(a2, b2) {
      var _pa = _p[a2];
      if (_pa == null) {
        return;
      }
      _p[a2] = _p[b2];
      _p[b2] = _pa;
    };
    swap("zoom", "startZoom");
    swap("pan", "startPan");
    swap("position", "startPosition");
    if (_p.style) {
      for (var i2 = 0; i2 < _p.style.length; i2++) {
        var prop = _p.style[i2];
        var name = prop.name;
        var startStyleProp = _p.startStyle[name];
        _p.startStyle[name] = prop;
        _p.style[i2] = startStyleProp;
      }
    }
    if (wasPlaying) {
      this.play();
    }
    return this;
  },
  promise: function promise3(type) {
    var _p = this._private;
    var arr;
    switch (type) {
      case "frame":
        arr = _p.frames;
        break;
      default:
      case "complete":
      case "completed":
        arr = _p.completes;
    }
    return new Promise$1(function(resolve2, reject2) {
      arr.push(function() {
        resolve2();
      });
    });
  }
});
anifn.complete = anifn.completed;
anifn.run = anifn.play;
anifn.running = anifn.playing;
var define$3 = {
  animated: function animated() {
    return function animatedImpl() {
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return false;
      }
      var ele = all[0];
      if (ele) {
        return ele._private.animation.current.length > 0;
      }
    };
  },
  // animated
  clearQueue: function clearQueue() {
    return function clearQueueImpl() {
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return this;
      }
      for (var i2 = 0; i2 < all.length; i2++) {
        var ele = all[i2];
        ele._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function delay() {
    return function delayImpl(time2, complete) {
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return this;
      }
      return this.animate({
        delay: time2,
        duration: time2,
        complete
      });
    };
  },
  // delay
  delayAnimation: function delayAnimation() {
    return function delayAnimationImpl(time2, complete) {
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return this;
      }
      return this.animation({
        delay: time2,
        duration: time2,
        complete
      });
    };
  },
  // delay
  animation: function animation() {
    return function animationImpl(properties, params) {
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var cy = this._private.cy || this;
      var isCore = !selfIsArrayLike;
      var isEles = !isCore;
      if (!cy.styleEnabled()) {
        return this;
      }
      var style3 = cy.style();
      properties = extend({}, properties, params);
      var propertiesEmpty = Object.keys(properties).length === 0;
      if (propertiesEmpty) {
        return new Animation(all[0], properties);
      }
      if (properties.duration === void 0) {
        properties.duration = 400;
      }
      switch (properties.duration) {
        case "slow":
          properties.duration = 600;
          break;
        case "fast":
          properties.duration = 200;
          break;
      }
      if (isEles) {
        properties.style = style3.getPropsList(properties.style || properties.css);
        properties.css = void 0;
      }
      if (isEles && properties.renderedPosition != null) {
        var rpos = properties.renderedPosition;
        var pan2 = cy.pan();
        var zoom2 = cy.zoom();
        properties.position = renderedToModelPosition(rpos, zoom2, pan2);
      }
      if (isCore && properties.panBy != null) {
        var panBy2 = properties.panBy;
        var cyPan = cy.pan();
        properties.pan = {
          x: cyPan.x + panBy2.x,
          y: cyPan.y + panBy2.y
        };
      }
      var center2 = properties.center || properties.centre;
      if (isCore && center2 != null) {
        var centerPan = cy.getCenterPan(center2.eles, properties.zoom);
        if (centerPan != null) {
          properties.pan = centerPan;
        }
      }
      if (isCore && properties.fit != null) {
        var fit2 = properties.fit;
        var fitVp = cy.getFitViewport(fit2.eles || fit2.boundingBox, fit2.padding);
        if (fitVp != null) {
          properties.pan = fitVp.pan;
          properties.zoom = fitVp.zoom;
        }
      }
      if (isCore && plainObject(properties.zoom)) {
        var vp = cy.getZoomedViewport(properties.zoom);
        if (vp != null) {
          if (vp.zoomed) {
            properties.zoom = vp.zoom;
          }
          if (vp.panned) {
            properties.pan = vp.pan;
          }
        } else {
          properties.zoom = null;
        }
      }
      return new Animation(all[0], properties);
    };
  },
  // animate
  animate: function animate() {
    return function animateImpl(properties, params) {
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return this;
      }
      if (params) {
        properties = extend({}, properties, params);
      }
      for (var i2 = 0; i2 < all.length; i2++) {
        var ele = all[i2];
        var queue = ele.animated() && (properties.queue === void 0 || properties.queue);
        var ani = ele.animation(properties, queue ? {
          queue: true
        } : void 0);
        ani.play();
      }
      return this;
    };
  },
  // animate
  stop: function stop2() {
    return function stopImpl(clearQueue2, jumpToEnd) {
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var cy = this._private.cy || this;
      if (!cy.styleEnabled()) {
        return this;
      }
      for (var i2 = 0; i2 < all.length; i2++) {
        var ele = all[i2];
        var _p = ele._private;
        var anis = _p.animation.current;
        for (var j = 0; j < anis.length; j++) {
          var ani = anis[j];
          var ani_p = ani._private;
          if (jumpToEnd) {
            ani_p.duration = 0;
          }
        }
        if (clearQueue2) {
          _p.animation.queue = [];
        }
        if (!jumpToEnd) {
          _p.animation.current = [];
        }
      }
      cy.notify("draw");
      return this;
    };
  }
  // stop
};
var isArray_1;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray_1;
  hasRequiredIsArray = 1;
  var isArray = Array.isArray;
  isArray_1 = isArray;
  return isArray_1;
}
var _isKey;
var hasRequired_isKey;
function require_isKey() {
  if (hasRequired_isKey) return _isKey;
  hasRequired_isKey = 1;
  var isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object3) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object3 != null && value in Object(object3);
  }
  _isKey = isKey;
  return _isKey;
}
var isFunction_1;
var hasRequiredIsFunction;
function requireIsFunction() {
  if (hasRequiredIsFunction) return isFunction_1;
  hasRequiredIsFunction = 1;
  var baseGetTag = require_baseGetTag(), isObject = requireIsObject();
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  isFunction_1 = isFunction;
  return isFunction_1;
}
var _coreJsData;
var hasRequired_coreJsData;
function require_coreJsData() {
  if (hasRequired_coreJsData) return _coreJsData;
  hasRequired_coreJsData = 1;
  var root = require_root();
  var coreJsData = root["__core-js_shared__"];
  _coreJsData = coreJsData;
  return _coreJsData;
}
var _isMasked;
var hasRequired_isMasked;
function require_isMasked() {
  if (hasRequired_isMasked) return _isMasked;
  hasRequired_isMasked = 1;
  var coreJsData = require_coreJsData();
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  })();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  _isMasked = isMasked;
  return _isMasked;
}
var _toSource;
var hasRequired_toSource;
function require_toSource() {
  if (hasRequired_toSource) return _toSource;
  hasRequired_toSource = 1;
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  _toSource = toSource;
  return _toSource;
}
var _baseIsNative;
var hasRequired_baseIsNative;
function require_baseIsNative() {
  if (hasRequired_baseIsNative) return _baseIsNative;
  hasRequired_baseIsNative = 1;
  var isFunction = requireIsFunction(), isMasked = require_isMasked(), isObject = requireIsObject(), toSource = require_toSource();
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  _baseIsNative = baseIsNative;
  return _baseIsNative;
}
var _getValue;
var hasRequired_getValue;
function require_getValue() {
  if (hasRequired_getValue) return _getValue;
  hasRequired_getValue = 1;
  function getValue2(object3, key) {
    return object3 == null ? void 0 : object3[key];
  }
  _getValue = getValue2;
  return _getValue;
}
var _getNative;
var hasRequired_getNative;
function require_getNative() {
  if (hasRequired_getNative) return _getNative;
  hasRequired_getNative = 1;
  var baseIsNative = require_baseIsNative(), getValue2 = require_getValue();
  function getNative(object3, key) {
    var value = getValue2(object3, key);
    return baseIsNative(value) ? value : void 0;
  }
  _getNative = getNative;
  return _getNative;
}
var _nativeCreate;
var hasRequired_nativeCreate;
function require_nativeCreate() {
  if (hasRequired_nativeCreate) return _nativeCreate;
  hasRequired_nativeCreate = 1;
  var getNative = require_getNative();
  var nativeCreate = getNative(Object, "create");
  _nativeCreate = nativeCreate;
  return _nativeCreate;
}
var _hashClear;
var hasRequired_hashClear;
function require_hashClear() {
  if (hasRequired_hashClear) return _hashClear;
  hasRequired_hashClear = 1;
  var nativeCreate = require_nativeCreate();
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  _hashClear = hashClear;
  return _hashClear;
}
var _hashDelete;
var hasRequired_hashDelete;
function require_hashDelete() {
  if (hasRequired_hashDelete) return _hashDelete;
  hasRequired_hashDelete = 1;
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  _hashDelete = hashDelete;
  return _hashDelete;
}
var _hashGet;
var hasRequired_hashGet;
function require_hashGet() {
  if (hasRequired_hashGet) return _hashGet;
  hasRequired_hashGet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashGet(key) {
    var data4 = this.__data__;
    if (nativeCreate) {
      var result = data4[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data4, key) ? data4[key] : void 0;
  }
  _hashGet = hashGet;
  return _hashGet;
}
var _hashHas;
var hasRequired_hashHas;
function require_hashHas() {
  if (hasRequired_hashHas) return _hashHas;
  hasRequired_hashHas = 1;
  var nativeCreate = require_nativeCreate();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data4 = this.__data__;
    return nativeCreate ? data4[key] !== void 0 : hasOwnProperty.call(data4, key);
  }
  _hashHas = hashHas;
  return _hashHas;
}
var _hashSet;
var hasRequired_hashSet;
function require_hashSet() {
  if (hasRequired_hashSet) return _hashSet;
  hasRequired_hashSet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data4 = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data4[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  _hashSet = hashSet;
  return _hashSet;
}
var _Hash;
var hasRequired_Hash;
function require_Hash() {
  if (hasRequired_Hash) return _Hash;
  hasRequired_Hash = 1;
  var hashClear = require_hashClear(), hashDelete = require_hashDelete(), hashGet = require_hashGet(), hashHas = require_hashHas(), hashSet = require_hashSet();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  _Hash = Hash;
  return _Hash;
}
var _listCacheClear;
var hasRequired_listCacheClear;
function require_listCacheClear() {
  if (hasRequired_listCacheClear) return _listCacheClear;
  hasRequired_listCacheClear = 1;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  _listCacheClear = listCacheClear;
  return _listCacheClear;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  function eq2(value, other) {
    return value === other || value !== value && other !== other;
  }
  eq_1 = eq2;
  return eq_1;
}
var _assocIndexOf;
var hasRequired_assocIndexOf;
function require_assocIndexOf() {
  if (hasRequired_assocIndexOf) return _assocIndexOf;
  hasRequired_assocIndexOf = 1;
  var eq2 = requireEq();
  function assocIndexOf(array3, key) {
    var length = array3.length;
    while (length--) {
      if (eq2(array3[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  _assocIndexOf = assocIndexOf;
  return _assocIndexOf;
}
var _listCacheDelete;
var hasRequired_listCacheDelete;
function require_listCacheDelete() {
  if (hasRequired_listCacheDelete) return _listCacheDelete;
  hasRequired_listCacheDelete = 1;
  var assocIndexOf = require_assocIndexOf();
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data4 = this.__data__, index = assocIndexOf(data4, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data4.length - 1;
    if (index == lastIndex) {
      data4.pop();
    } else {
      splice.call(data4, index, 1);
    }
    --this.size;
    return true;
  }
  _listCacheDelete = listCacheDelete;
  return _listCacheDelete;
}
var _listCacheGet;
var hasRequired_listCacheGet;
function require_listCacheGet() {
  if (hasRequired_listCacheGet) return _listCacheGet;
  hasRequired_listCacheGet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheGet(key) {
    var data4 = this.__data__, index = assocIndexOf(data4, key);
    return index < 0 ? void 0 : data4[index][1];
  }
  _listCacheGet = listCacheGet;
  return _listCacheGet;
}
var _listCacheHas;
var hasRequired_listCacheHas;
function require_listCacheHas() {
  if (hasRequired_listCacheHas) return _listCacheHas;
  hasRequired_listCacheHas = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  _listCacheHas = listCacheHas;
  return _listCacheHas;
}
var _listCacheSet;
var hasRequired_listCacheSet;
function require_listCacheSet() {
  if (hasRequired_listCacheSet) return _listCacheSet;
  hasRequired_listCacheSet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheSet(key, value) {
    var data4 = this.__data__, index = assocIndexOf(data4, key);
    if (index < 0) {
      ++this.size;
      data4.push([key, value]);
    } else {
      data4[index][1] = value;
    }
    return this;
  }
  _listCacheSet = listCacheSet;
  return _listCacheSet;
}
var _ListCache;
var hasRequired_ListCache;
function require_ListCache() {
  if (hasRequired_ListCache) return _ListCache;
  hasRequired_ListCache = 1;
  var listCacheClear = require_listCacheClear(), listCacheDelete = require_listCacheDelete(), listCacheGet = require_listCacheGet(), listCacheHas = require_listCacheHas(), listCacheSet = require_listCacheSet();
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  _ListCache = ListCache;
  return _ListCache;
}
var _Map;
var hasRequired_Map;
function require_Map() {
  if (hasRequired_Map) return _Map;
  hasRequired_Map = 1;
  var getNative = require_getNative(), root = require_root();
  var Map2 = getNative(root, "Map");
  _Map = Map2;
  return _Map;
}
var _mapCacheClear;
var hasRequired_mapCacheClear;
function require_mapCacheClear() {
  if (hasRequired_mapCacheClear) return _mapCacheClear;
  hasRequired_mapCacheClear = 1;
  var Hash = require_Hash(), ListCache = require_ListCache(), Map2 = require_Map();
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  _mapCacheClear = mapCacheClear;
  return _mapCacheClear;
}
var _isKeyable;
var hasRequired_isKeyable;
function require_isKeyable() {
  if (hasRequired_isKeyable) return _isKeyable;
  hasRequired_isKeyable = 1;
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  _isKeyable = isKeyable;
  return _isKeyable;
}
var _getMapData;
var hasRequired_getMapData;
function require_getMapData() {
  if (hasRequired_getMapData) return _getMapData;
  hasRequired_getMapData = 1;
  var isKeyable = require_isKeyable();
  function getMapData(map2, key) {
    var data4 = map2.__data__;
    return isKeyable(key) ? data4[typeof key == "string" ? "string" : "hash"] : data4.map;
  }
  _getMapData = getMapData;
  return _getMapData;
}
var _mapCacheDelete;
var hasRequired_mapCacheDelete;
function require_mapCacheDelete() {
  if (hasRequired_mapCacheDelete) return _mapCacheDelete;
  hasRequired_mapCacheDelete = 1;
  var getMapData = require_getMapData();
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  _mapCacheDelete = mapCacheDelete;
  return _mapCacheDelete;
}
var _mapCacheGet;
var hasRequired_mapCacheGet;
function require_mapCacheGet() {
  if (hasRequired_mapCacheGet) return _mapCacheGet;
  hasRequired_mapCacheGet = 1;
  var getMapData = require_getMapData();
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  _mapCacheGet = mapCacheGet;
  return _mapCacheGet;
}
var _mapCacheHas;
var hasRequired_mapCacheHas;
function require_mapCacheHas() {
  if (hasRequired_mapCacheHas) return _mapCacheHas;
  hasRequired_mapCacheHas = 1;
  var getMapData = require_getMapData();
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  _mapCacheHas = mapCacheHas;
  return _mapCacheHas;
}
var _mapCacheSet;
var hasRequired_mapCacheSet;
function require_mapCacheSet() {
  if (hasRequired_mapCacheSet) return _mapCacheSet;
  hasRequired_mapCacheSet = 1;
  var getMapData = require_getMapData();
  function mapCacheSet(key, value) {
    var data4 = getMapData(this, key), size3 = data4.size;
    data4.set(key, value);
    this.size += data4.size == size3 ? 0 : 1;
    return this;
  }
  _mapCacheSet = mapCacheSet;
  return _mapCacheSet;
}
var _MapCache;
var hasRequired_MapCache;
function require_MapCache() {
  if (hasRequired_MapCache) return _MapCache;
  hasRequired_MapCache = 1;
  var mapCacheClear = require_mapCacheClear(), mapCacheDelete = require_mapCacheDelete(), mapCacheGet = require_mapCacheGet(), mapCacheHas = require_mapCacheHas(), mapCacheSet = require_mapCacheSet();
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  _MapCache = MapCache;
  return _MapCache;
}
var memoize_1;
var hasRequiredMemoize;
function requireMemoize() {
  if (hasRequiredMemoize) return memoize_1;
  hasRequiredMemoize = 1;
  var MapCache = require_MapCache();
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize3(func, resolver3) {
    if (typeof func != "function" || resolver3 != null && typeof resolver3 != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver3 ? resolver3.apply(this, args) : args[0], cache3 = memoized.cache;
      if (cache3.has(key)) {
        return cache3.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache3.set(key, result) || cache3;
      return result;
    };
    memoized.cache = new (memoize3.Cache || MapCache)();
    return memoized;
  }
  memoize3.Cache = MapCache;
  memoize_1 = memoize3;
  return memoize_1;
}
var _memoizeCapped;
var hasRequired_memoizeCapped;
function require_memoizeCapped() {
  if (hasRequired_memoizeCapped) return _memoizeCapped;
  hasRequired_memoizeCapped = 1;
  var memoize3 = requireMemoize();
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize3(func, function(key) {
      if (cache3.size === MAX_MEMOIZE_SIZE) {
        cache3.clear();
      }
      return key;
    });
    var cache3 = result.cache;
    return result;
  }
  _memoizeCapped = memoizeCapped;
  return _memoizeCapped;
}
var _stringToPath;
var hasRequired_stringToPath;
function require_stringToPath() {
  if (hasRequired_stringToPath) return _stringToPath;
  hasRequired_stringToPath = 1;
  var memoizeCapped = require_memoizeCapped();
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string3) {
    var result = [];
    if (string3.charCodeAt(0) === 46) {
      result.push("");
    }
    string3.replace(rePropName, function(match2, number3, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match2);
    });
    return result;
  });
  _stringToPath = stringToPath;
  return _stringToPath;
}
var _arrayMap;
var hasRequired_arrayMap;
function require_arrayMap() {
  if (hasRequired_arrayMap) return _arrayMap;
  hasRequired_arrayMap = 1;
  function arrayMap(array3, iteratee) {
    var index = -1, length = array3 == null ? 0 : array3.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array3[index], index, array3);
    }
    return result;
  }
  _arrayMap = arrayMap;
  return _arrayMap;
}
var _baseToString;
var hasRequired_baseToString;
function require_baseToString() {
  if (hasRequired_baseToString) return _baseToString;
  hasRequired_baseToString = 1;
  var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray = requireIsArray(), isSymbol = requireIsSymbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _baseToString = baseToString;
  return _baseToString;
}
var toString_1;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString_1;
  hasRequiredToString = 1;
  var baseToString = require_baseToString();
  function toString3(value) {
    return value == null ? "" : baseToString(value);
  }
  toString_1 = toString3;
  return toString_1;
}
var _castPath;
var hasRequired_castPath;
function require_castPath() {
  if (hasRequired_castPath) return _castPath;
  hasRequired_castPath = 1;
  var isArray = requireIsArray(), isKey = require_isKey(), stringToPath = require_stringToPath(), toString3 = requireToString();
  function castPath(value, object3) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object3) ? [value] : stringToPath(toString3(value));
  }
  _castPath = castPath;
  return _castPath;
}
var _toKey;
var hasRequired_toKey;
function require_toKey() {
  if (hasRequired_toKey) return _toKey;
  hasRequired_toKey = 1;
  var isSymbol = requireIsSymbol();
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
  }
  _toKey = toKey;
  return _toKey;
}
var _baseGet;
var hasRequired_baseGet;
function require_baseGet() {
  if (hasRequired_baseGet) return _baseGet;
  hasRequired_baseGet = 1;
  var castPath = require_castPath(), toKey = require_toKey();
  function baseGet(object3, path) {
    path = castPath(path, object3);
    var index = 0, length = path.length;
    while (object3 != null && index < length) {
      object3 = object3[toKey(path[index++])];
    }
    return index && index == length ? object3 : void 0;
  }
  _baseGet = baseGet;
  return _baseGet;
}
var get_1;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get_1;
  hasRequiredGet = 1;
  var baseGet = require_baseGet();
  function get2(object3, path, defaultValue) {
    var result = object3 == null ? void 0 : baseGet(object3, path);
    return result === void 0 ? defaultValue : result;
  }
  get_1 = get2;
  return get_1;
}
var getExports = requireGet();
var get = getDefaultExportFromCjs(getExports);
var _defineProperty;
var hasRequired_defineProperty;
function require_defineProperty() {
  if (hasRequired_defineProperty) return _defineProperty;
  hasRequired_defineProperty = 1;
  var getNative = require_getNative();
  var defineProperty = (function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  })();
  _defineProperty = defineProperty;
  return _defineProperty;
}
var _baseAssignValue;
var hasRequired_baseAssignValue;
function require_baseAssignValue() {
  if (hasRequired_baseAssignValue) return _baseAssignValue;
  hasRequired_baseAssignValue = 1;
  var defineProperty = require_defineProperty();
  function baseAssignValue(object3, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object3, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object3[key] = value;
    }
  }
  _baseAssignValue = baseAssignValue;
  return _baseAssignValue;
}
var _assignValue;
var hasRequired_assignValue;
function require_assignValue() {
  if (hasRequired_assignValue) return _assignValue;
  hasRequired_assignValue = 1;
  var baseAssignValue = require_baseAssignValue(), eq2 = requireEq();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function assignValue(object3, key, value) {
    var objValue = object3[key];
    if (!(hasOwnProperty.call(object3, key) && eq2(objValue, value)) || value === void 0 && !(key in object3)) {
      baseAssignValue(object3, key, value);
    }
  }
  _assignValue = assignValue;
  return _assignValue;
}
var _isIndex;
var hasRequired_isIndex;
function require_isIndex() {
  if (hasRequired_isIndex) return _isIndex;
  hasRequired_isIndex = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  _isIndex = isIndex;
  return _isIndex;
}
var _baseSet;
var hasRequired_baseSet;
function require_baseSet() {
  if (hasRequired_baseSet) return _baseSet;
  hasRequired_baseSet = 1;
  var assignValue = require_assignValue(), castPath = require_castPath(), isIndex = require_isIndex(), isObject = requireIsObject(), toKey = require_toKey();
  function baseSet(object3, path, value, customizer) {
    if (!isObject(object3)) {
      return object3;
    }
    path = castPath(path, object3);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object3;
    while (nested != null && ++index < length) {
      var key = toKey(path[index]), newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object3;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object3;
  }
  _baseSet = baseSet;
  return _baseSet;
}
var set_1;
var hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set_1;
  hasRequiredSet = 1;
  var baseSet = require_baseSet();
  function set2(object3, path, value) {
    return object3 == null ? object3 : baseSet(object3, path, value);
  }
  set_1 = set2;
  return set_1;
}
var setExports = requireSet();
var set = getDefaultExportFromCjs(setExports);
var _copyArray;
var hasRequired_copyArray;
function require_copyArray() {
  if (hasRequired_copyArray) return _copyArray;
  hasRequired_copyArray = 1;
  function copyArray3(source, array3) {
    var index = -1, length = source.length;
    array3 || (array3 = Array(length));
    while (++index < length) {
      array3[index] = source[index];
    }
    return array3;
  }
  _copyArray = copyArray3;
  return _copyArray;
}
var toPath_1;
var hasRequiredToPath;
function requireToPath() {
  if (hasRequiredToPath) return toPath_1;
  hasRequiredToPath = 1;
  var arrayMap = require_arrayMap(), copyArray3 = require_copyArray(), isArray = requireIsArray(), isSymbol = requireIsSymbol(), stringToPath = require_stringToPath(), toKey = require_toKey(), toString3 = requireToString();
  function toPath2(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray3(stringToPath(toString3(value)));
  }
  toPath_1 = toPath2;
  return toPath_1;
}
var toPathExports = requireToPath();
var toPath = getDefaultExportFromCjs(toPathExports);
var define$2 = {
  // access data field
  data: function data(params) {
    var defaults3 = {
      field: "data",
      bindingEvent: "data",
      allowBinding: false,
      allowSetting: false,
      allowGetting: false,
      settingEvent: "data",
      settingTriggersEvent: false,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: false,
      beforeGet: function beforeGet2(self2) {
      },
      beforeSet: function beforeSet3(self2, obj) {
      },
      onSet: function onSet3(self2) {
      },
      canSet: function canSet2(self2) {
        return true;
      }
    };
    params = extend({}, defaults3, params);
    return function dataImpl(name, value) {
      var p3 = params;
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      var single = selfIsArrayLike ? self2[0] : self2;
      if (string(name)) {
        var isPathLike = name.indexOf(".") !== -1;
        var path = isPathLike && toPath(name);
        if (p3.allowGetting && value === void 0) {
          var ret;
          if (single) {
            p3.beforeGet(single);
            if (path && single._private[p3.field][name] === void 0) {
              ret = get(single._private[p3.field], path);
            } else {
              ret = single._private[p3.field][name];
            }
          }
          return ret;
        } else if (p3.allowSetting && value !== void 0) {
          var valid2 = !p3.immutableKeys[name];
          if (valid2) {
            var change = _defineProperty$1({}, name, value);
            p3.beforeSet(self2, change);
            for (var i2 = 0, l2 = all.length; i2 < l2; i2++) {
              var ele = all[i2];
              if (p3.canSet(ele)) {
                if (path && single._private[p3.field][name] === void 0) {
                  set(ele._private[p3.field], path, value);
                } else {
                  ele._private[p3.field][name] = value;
                }
              }
            }
            if (p3.updateStyle) {
              self2.updateStyle();
            }
            p3.onSet(self2);
            if (p3.settingTriggersEvent) {
              self2[p3.triggerFnName](p3.settingEvent);
            }
          }
        }
      } else if (p3.allowSetting && plainObject(name)) {
        var obj = name;
        var k, v;
        var keys = Object.keys(obj);
        p3.beforeSet(self2, obj);
        for (var _i = 0; _i < keys.length; _i++) {
          k = keys[_i];
          v = obj[k];
          var _valid = !p3.immutableKeys[k];
          if (_valid) {
            for (var j = 0; j < all.length; j++) {
              var _ele = all[j];
              if (p3.canSet(_ele)) {
                _ele._private[p3.field][k] = v;
              }
            }
          }
        }
        if (p3.updateStyle) {
          self2.updateStyle();
        }
        p3.onSet(self2);
        if (p3.settingTriggersEvent) {
          self2[p3.triggerFnName](p3.settingEvent);
        }
      } else if (p3.allowBinding && fn$6(name)) {
        var fn3 = name;
        self2.on(p3.bindingEvent, fn3);
      } else if (p3.allowGetting && name === void 0) {
        var _ret;
        if (single) {
          p3.beforeGet(single);
          _ret = single._private[p3.field];
        }
        return _ret;
      }
      return self2;
    };
  },
  // data
  // remove data field
  removeData: function removeData(params) {
    var defaults3 = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: false,
      immutableKeys: {}
      // key => true if immutable
    };
    params = extend({}, defaults3, params);
    return function removeDataImpl(names) {
      var p3 = params;
      var self2 = this;
      var selfIsArrayLike = self2.length !== void 0;
      var all = selfIsArrayLike ? self2 : [self2];
      if (string(names)) {
        var keys = names.split(/\s+/);
        var l2 = keys.length;
        for (var i2 = 0; i2 < l2; i2++) {
          var key = keys[i2];
          if (emptyString(key)) {
            continue;
          }
          var valid2 = !p3.immutableKeys[key];
          if (valid2) {
            for (var i_a = 0, l_a = all.length; i_a < l_a; i_a++) {
              all[i_a]._private[p3.field][key] = void 0;
            }
          }
        }
        if (p3.triggerEvent) {
          self2[p3.triggerFnName](p3.event);
        }
      } else if (names === void 0) {
        for (var _i_a = 0, _l_a = all.length; _i_a < _l_a; _i_a++) {
          var _privateFields = all[_i_a]._private[p3.field];
          var _keys = Object.keys(_privateFields);
          for (var _i2 = 0; _i2 < _keys.length; _i2++) {
            var _key = _keys[_i2];
            var validKeyToDelete = !p3.immutableKeys[_key];
            if (validKeyToDelete) {
              _privateFields[_key] = void 0;
            }
          }
        }
        if (p3.triggerEvent) {
          self2[p3.triggerFnName](p3.event);
        }
      }
      return self2;
    };
  }
  // removeData
};
var define$1 = {
  eventAliasesOn: function eventAliasesOn(proto) {
    var p3 = proto;
    p3.addListener = p3.listen = p3.bind = p3.on;
    p3.unlisten = p3.unbind = p3.off = p3.removeListener;
    p3.trigger = p3.emit;
    p3.pon = p3.promiseOn = function(events, selector) {
      var self2 = this;
      var args = Array.prototype.slice.call(arguments, 0);
      return new Promise$1(function(resolve2, reject2) {
        var callback = function callback2(e2) {
          self2.off.apply(self2, offArgs);
          resolve2(e2);
        };
        var onArgs = args.concat([callback]);
        var offArgs = onArgs.concat([]);
        self2.on.apply(self2, onArgs);
      });
    };
  }
};
var define = {};
[define$3, define$2, define$1].forEach(function(m2) {
  extend(define, m2);
});
var elesfn$i = {
  animate: define.animate(),
  animation: define.animation(),
  animated: define.animated(),
  clearQueue: define.clearQueue(),
  delay: define.delay(),
  delayAnimation: define.delayAnimation(),
  stop: define.stop()
};
var elesfn$h = {
  classes: function classes(_classes) {
    var self2 = this;
    if (_classes === void 0) {
      var ret = [];
      self2[0]._private.classes.forEach(function(cls2) {
        return ret.push(cls2);
      });
      return ret;
    } else if (!array(_classes)) {
      _classes = (_classes || "").match(/\S+/g) || [];
    }
    var changed = [];
    var classesSet = new Set$1(_classes);
    for (var j = 0; j < self2.length; j++) {
      var ele = self2[j];
      var _p = ele._private;
      var eleClasses = _p.classes;
      var changedEle = false;
      for (var i2 = 0; i2 < _classes.length; i2++) {
        var cls = _classes[i2];
        var eleHasClass = eleClasses.has(cls);
        if (!eleHasClass) {
          changedEle = true;
          break;
        }
      }
      if (!changedEle) {
        changedEle = eleClasses.size !== _classes.length;
      }
      if (changedEle) {
        _p.classes = classesSet;
        changed.push(ele);
      }
    }
    if (changed.length > 0) {
      this.spawn(changed).updateStyle().emit("class");
    }
    return self2;
  },
  addClass: function addClass(classes2) {
    return this.toggleClass(classes2, true);
  },
  hasClass: function hasClass(className) {
    var ele = this[0];
    return ele != null && ele._private.classes.has(className);
  },
  toggleClass: function toggleClass(classes2, toggle) {
    if (!array(classes2)) {
      classes2 = classes2.match(/\S+/g) || [];
    }
    var self2 = this;
    var toggleUndefd = toggle === void 0;
    var changed = [];
    for (var i2 = 0, il = self2.length; i2 < il; i2++) {
      var ele = self2[i2];
      var eleClasses = ele._private.classes;
      var changedEle = false;
      for (var j = 0; j < classes2.length; j++) {
        var cls = classes2[j];
        var hasClass2 = eleClasses.has(cls);
        var changedNow = false;
        if (toggle || toggleUndefd && !hasClass2) {
          eleClasses.add(cls);
          changedNow = true;
        } else if (!toggle || toggleUndefd && hasClass2) {
          eleClasses["delete"](cls);
          changedNow = true;
        }
        if (!changedEle && changedNow) {
          changed.push(ele);
          changedEle = true;
        }
      }
    }
    if (changed.length > 0) {
      this.spawn(changed).updateStyle().emit("class");
    }
    return self2;
  },
  removeClass: function removeClass(classes2) {
    return this.toggleClass(classes2, false);
  },
  flashClass: function flashClass(classes2, duration) {
    var self2 = this;
    if (duration == null) {
      duration = 250;
    } else if (duration === 0) {
      return self2;
    }
    self2.addClass(classes2);
    setTimeout(function() {
      self2.removeClass(classes2);
    }, duration);
    return self2;
  }
};
elesfn$h.className = elesfn$h.classNames = elesfn$h.classes;
var tokens = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: number2,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
tokens.variable = "(?:[\\w-.]|(?:\\\\" + tokens.metaChar + "))+";
tokens.className = "(?:[\\w-]|(?:\\\\" + tokens.metaChar + "))+";
tokens.value = tokens.string + "|" + tokens.number;
tokens.id = tokens.variable;
(function() {
  var ops, op, i2;
  ops = tokens.comparatorOp.split("|");
  for (i2 = 0; i2 < ops.length; i2++) {
    op = ops[i2];
    tokens.comparatorOp += "|@" + op;
  }
  ops = tokens.comparatorOp.split("|");
  for (i2 = 0; i2 < ops.length; i2++) {
    op = ops[i2];
    if (op.indexOf("!") >= 0) {
      continue;
    }
    if (op === "=") {
      continue;
    }
    tokens.comparatorOp += "|\\!" + op;
  }
})();
var newQuery = function newQuery2() {
  return {
    checks: []
  };
};
var Type = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
};
var stateSelectors = [{
  selector: ":selected",
  matches: function matches(ele) {
    return ele.selected();
  }
}, {
  selector: ":unselected",
  matches: function matches2(ele) {
    return !ele.selected();
  }
}, {
  selector: ":selectable",
  matches: function matches3(ele) {
    return ele.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function matches4(ele) {
    return !ele.selectable();
  }
}, {
  selector: ":locked",
  matches: function matches5(ele) {
    return ele.locked();
  }
}, {
  selector: ":unlocked",
  matches: function matches6(ele) {
    return !ele.locked();
  }
}, {
  selector: ":visible",
  matches: function matches7(ele) {
    return ele.visible();
  }
}, {
  selector: ":hidden",
  matches: function matches8(ele) {
    return !ele.visible();
  }
}, {
  selector: ":transparent",
  matches: function matches9(ele) {
    return ele.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function matches10(ele) {
    return ele.grabbed();
  }
}, {
  selector: ":free",
  matches: function matches11(ele) {
    return !ele.grabbed();
  }
}, {
  selector: ":removed",
  matches: function matches12(ele) {
    return ele.removed();
  }
}, {
  selector: ":inside",
  matches: function matches13(ele) {
    return !ele.removed();
  }
}, {
  selector: ":grabbable",
  matches: function matches14(ele) {
    return ele.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function matches15(ele) {
    return !ele.grabbable();
  }
}, {
  selector: ":animated",
  matches: function matches16(ele) {
    return ele.animated();
  }
}, {
  selector: ":unanimated",
  matches: function matches17(ele) {
    return !ele.animated();
  }
}, {
  selector: ":parent",
  matches: function matches18(ele) {
    return ele.isParent();
  }
}, {
  selector: ":childless",
  matches: function matches19(ele) {
    return ele.isChildless();
  }
}, {
  selector: ":child",
  matches: function matches20(ele) {
    return ele.isChild();
  }
}, {
  selector: ":orphan",
  matches: function matches21(ele) {
    return ele.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function matches22(ele) {
    return ele.isChild();
  }
}, {
  selector: ":compound",
  matches: function matches23(ele) {
    if (ele.isNode()) {
      return ele.isParent();
    } else {
      return ele.source().isParent() || ele.target().isParent();
    }
  }
}, {
  selector: ":loop",
  matches: function matches24(ele) {
    return ele.isLoop();
  }
}, {
  selector: ":simple",
  matches: function matches25(ele) {
    return ele.isSimple();
  }
}, {
  selector: ":active",
  matches: function matches26(ele) {
    return ele.active();
  }
}, {
  selector: ":inactive",
  matches: function matches27(ele) {
    return !ele.active();
  }
}, {
  selector: ":backgrounding",
  matches: function matches28(ele) {
    return ele.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function matches29(ele) {
    return !ele.backgrounding();
  }
}].sort(function(a2, b2) {
  return descending(a2.selector, b2.selector);
});
var lookup = (function() {
  var selToFn = {};
  var s2;
  for (var i2 = 0; i2 < stateSelectors.length; i2++) {
    s2 = stateSelectors[i2];
    selToFn[s2.selector] = s2.matches;
  }
  return selToFn;
})();
var stateSelectorMatches = function stateSelectorMatches2(sel, ele) {
  return lookup[sel](ele);
};
var stateSelectorRegex = "(" + stateSelectors.map(function(s2) {
  return s2.selector;
}).join("|") + ")";
var cleanMetaChars = function cleanMetaChars2(str) {
  return str.replace(new RegExp("\\\\(" + tokens.metaChar + ")", "g"), function(match2, $1) {
    return $1;
  });
};
var replaceLastQuery = function replaceLastQuery2(selector, examiningQuery, replacementQuery) {
  selector[selector.length - 1] = replacementQuery;
};
var exprs = [{
  name: "group",
  // just used for identifying when debugging
  query: true,
  regex: "(" + tokens.group + ")",
  populate: function populate(selector, query, _ref) {
    var _ref2 = _slicedToArray(_ref, 1), group2 = _ref2[0];
    query.checks.push({
      type: Type.GROUP,
      value: group2 === "*" ? group2 : group2 + "s"
    });
  }
}, {
  name: "state",
  query: true,
  regex: stateSelectorRegex,
  populate: function populate2(selector, query, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 1), state = _ref4[0];
    query.checks.push({
      type: Type.STATE,
      value: state
    });
  }
}, {
  name: "id",
  query: true,
  regex: "\\#(" + tokens.id + ")",
  populate: function populate3(selector, query, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 1), id2 = _ref6[0];
    query.checks.push({
      type: Type.ID,
      value: cleanMetaChars(id2)
    });
  }
}, {
  name: "className",
  query: true,
  regex: "\\.(" + tokens.className + ")",
  populate: function populate4(selector, query, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 1), className = _ref8[0];
    query.checks.push({
      type: Type.CLASS,
      value: cleanMetaChars(className)
    });
  }
}, {
  name: "dataExists",
  query: true,
  regex: "\\[\\s*(" + tokens.variable + ")\\s*\\]",
  populate: function populate5(selector, query, _ref9) {
    var _ref10 = _slicedToArray(_ref9, 1), variable = _ref10[0];
    query.checks.push({
      type: Type.DATA_EXIST,
      field: cleanMetaChars(variable)
    });
  }
}, {
  name: "dataCompare",
  query: true,
  regex: "\\[\\s*(" + tokens.variable + ")\\s*(" + tokens.comparatorOp + ")\\s*(" + tokens.value + ")\\s*\\]",
  populate: function populate6(selector, query, _ref11) {
    var _ref12 = _slicedToArray(_ref11, 3), variable = _ref12[0], comparatorOp = _ref12[1], value = _ref12[2];
    var valueIsString = new RegExp("^" + tokens.string + "$").exec(value) != null;
    if (valueIsString) {
      value = value.substring(1, value.length - 1);
    } else {
      value = parseFloat(value);
    }
    query.checks.push({
      type: Type.DATA_COMPARE,
      field: cleanMetaChars(variable),
      operator: comparatorOp,
      value
    });
  }
}, {
  name: "dataBool",
  query: true,
  regex: "\\[\\s*(" + tokens.boolOp + ")\\s*(" + tokens.variable + ")\\s*\\]",
  populate: function populate7(selector, query, _ref13) {
    var _ref14 = _slicedToArray(_ref13, 2), boolOp = _ref14[0], variable = _ref14[1];
    query.checks.push({
      type: Type.DATA_BOOL,
      field: cleanMetaChars(variable),
      operator: boolOp
    });
  }
}, {
  name: "metaCompare",
  query: true,
  regex: "\\[\\[\\s*(" + tokens.meta + ")\\s*(" + tokens.comparatorOp + ")\\s*(" + tokens.number + ")\\s*\\]\\]",
  populate: function populate8(selector, query, _ref15) {
    var _ref16 = _slicedToArray(_ref15, 3), meta3 = _ref16[0], comparatorOp = _ref16[1], number3 = _ref16[2];
    query.checks.push({
      type: Type.META_COMPARE,
      field: cleanMetaChars(meta3),
      operator: comparatorOp,
      value: parseFloat(number3)
    });
  }
}, {
  name: "nextQuery",
  separator: true,
  regex: tokens.separator,
  populate: function populate9(selector, query) {
    var currentSubject = selector.currentSubject;
    var edgeCount = selector.edgeCount;
    var compoundCount = selector.compoundCount;
    var lastQ = selector[selector.length - 1];
    if (currentSubject != null) {
      lastQ.subject = currentSubject;
      selector.currentSubject = null;
    }
    lastQ.edgeCount = edgeCount;
    lastQ.compoundCount = compoundCount;
    selector.edgeCount = 0;
    selector.compoundCount = 0;
    var nextQuery = selector[selector.length++] = newQuery();
    return nextQuery;
  }
}, {
  name: "directedEdge",
  separator: true,
  regex: tokens.directedEdge,
  populate: function populate10(selector, query) {
    if (selector.currentSubject == null) {
      var edgeQuery = newQuery();
      var source = query;
      var target = newQuery();
      edgeQuery.checks.push({
        type: Type.DIRECTED_EDGE,
        source,
        target
      });
      replaceLastQuery(selector, query, edgeQuery);
      selector.edgeCount++;
      return target;
    } else {
      var srcTgtQ = newQuery();
      var _source = query;
      var _target = newQuery();
      srcTgtQ.checks.push({
        type: Type.NODE_SOURCE,
        source: _source,
        target: _target
      });
      replaceLastQuery(selector, query, srcTgtQ);
      selector.edgeCount++;
      return _target;
    }
  }
}, {
  name: "undirectedEdge",
  separator: true,
  regex: tokens.undirectedEdge,
  populate: function populate11(selector, query) {
    if (selector.currentSubject == null) {
      var edgeQuery = newQuery();
      var source = query;
      var target = newQuery();
      edgeQuery.checks.push({
        type: Type.UNDIRECTED_EDGE,
        nodes: [source, target]
      });
      replaceLastQuery(selector, query, edgeQuery);
      selector.edgeCount++;
      return target;
    } else {
      var nhoodQ = newQuery();
      var node = query;
      var neighbor = newQuery();
      nhoodQ.checks.push({
        type: Type.NODE_NEIGHBOR,
        node,
        neighbor
      });
      replaceLastQuery(selector, query, nhoodQ);
      return neighbor;
    }
  }
}, {
  name: "child",
  separator: true,
  regex: tokens.child,
  populate: function populate12(selector, query) {
    if (selector.currentSubject == null) {
      var parentChildQuery = newQuery();
      var child = newQuery();
      var parent4 = selector[selector.length - 1];
      parentChildQuery.checks.push({
        type: Type.CHILD,
        parent: parent4,
        child
      });
      replaceLastQuery(selector, query, parentChildQuery);
      selector.compoundCount++;
      return child;
    } else if (selector.currentSubject === query) {
      var compound = newQuery();
      var left = selector[selector.length - 1];
      var right = newQuery();
      var subject = newQuery();
      var _child = newQuery();
      var _parent = newQuery();
      compound.checks.push({
        type: Type.COMPOUND_SPLIT,
        left,
        right,
        subject
      });
      subject.checks = query.checks;
      query.checks = [{
        type: Type.TRUE
      }];
      _parent.checks.push({
        type: Type.TRUE
      });
      right.checks.push({
        type: Type.PARENT,
        // type is swapped on right side queries
        parent: _parent,
        child: _child
        // empty for now
      });
      replaceLastQuery(selector, left, compound);
      selector.currentSubject = subject;
      selector.compoundCount++;
      return _child;
    } else {
      var _parent2 = newQuery();
      var _child2 = newQuery();
      var pcQChecks = [{
        type: Type.PARENT,
        parent: _parent2,
        child: _child2
      }];
      _parent2.checks = query.checks;
      query.checks = pcQChecks;
      selector.compoundCount++;
      return _child2;
    }
  }
}, {
  name: "descendant",
  separator: true,
  regex: tokens.descendant,
  populate: function populate13(selector, query) {
    if (selector.currentSubject == null) {
      var ancChQuery = newQuery();
      var descendant = newQuery();
      var ancestor = selector[selector.length - 1];
      ancChQuery.checks.push({
        type: Type.DESCENDANT,
        ancestor,
        descendant
      });
      replaceLastQuery(selector, query, ancChQuery);
      selector.compoundCount++;
      return descendant;
    } else if (selector.currentSubject === query) {
      var compound = newQuery();
      var left = selector[selector.length - 1];
      var right = newQuery();
      var subject = newQuery();
      var _descendant = newQuery();
      var _ancestor = newQuery();
      compound.checks.push({
        type: Type.COMPOUND_SPLIT,
        left,
        right,
        subject
      });
      subject.checks = query.checks;
      query.checks = [{
        type: Type.TRUE
      }];
      _ancestor.checks.push({
        type: Type.TRUE
      });
      right.checks.push({
        type: Type.ANCESTOR,
        // type is swapped on right side queries
        ancestor: _ancestor,
        descendant: _descendant
        // empty for now
      });
      replaceLastQuery(selector, left, compound);
      selector.currentSubject = subject;
      selector.compoundCount++;
      return _descendant;
    } else {
      var _ancestor2 = newQuery();
      var _descendant2 = newQuery();
      var adQChecks = [{
        type: Type.ANCESTOR,
        ancestor: _ancestor2,
        descendant: _descendant2
      }];
      _ancestor2.checks = query.checks;
      query.checks = adQChecks;
      selector.compoundCount++;
      return _descendant2;
    }
  }
}, {
  name: "subject",
  modifier: true,
  regex: tokens.subject,
  populate: function populate14(selector, query) {
    if (selector.currentSubject != null && selector.currentSubject !== query) {
      warn("Redefinition of subject in selector `" + selector.toString() + "`");
      return false;
    }
    selector.currentSubject = query;
    var topQ = selector[selector.length - 1];
    var topChk = topQ.checks[0];
    var topType = topChk == null ? null : topChk.type;
    if (topType === Type.DIRECTED_EDGE) {
      topChk.type = Type.NODE_TARGET;
    } else if (topType === Type.UNDIRECTED_EDGE) {
      topChk.type = Type.NODE_NEIGHBOR;
      topChk.node = topChk.nodes[1];
      topChk.neighbor = topChk.nodes[0];
      topChk.nodes = null;
    }
  }
}];
exprs.forEach(function(e2) {
  return e2.regexObj = new RegExp("^" + e2.regex);
});
var consumeExpr = function consumeExpr2(remaining) {
  var expr;
  var match2;
  var name;
  for (var j = 0; j < exprs.length; j++) {
    var e2 = exprs[j];
    var n = e2.name;
    var m2 = remaining.match(e2.regexObj);
    if (m2 != null) {
      match2 = m2;
      expr = e2;
      name = n;
      var consumed = m2[0];
      remaining = remaining.substring(consumed.length);
      break;
    }
  }
  return {
    expr,
    match: match2,
    name,
    remaining
  };
};
var consumeWhitespace = function consumeWhitespace2(remaining) {
  var match2 = remaining.match(/^\s+/);
  if (match2) {
    var consumed = match2[0];
    remaining = remaining.substring(consumed.length);
  }
  return remaining;
};
var parse = function parse2(selector) {
  var self2 = this;
  var remaining = self2.inputText = selector;
  var currentQuery = self2[0] = newQuery();
  self2.length = 1;
  remaining = consumeWhitespace(remaining);
  for (; ; ) {
    var exprInfo = consumeExpr(remaining);
    if (exprInfo.expr == null) {
      warn("The selector `" + selector + "`is invalid");
      return false;
    } else {
      var args = exprInfo.match.slice(1);
      var ret = exprInfo.expr.populate(self2, currentQuery, args);
      if (ret === false) {
        return false;
      } else if (ret != null) {
        currentQuery = ret;
      }
    }
    remaining = exprInfo.remaining;
    if (remaining.match(/^\s*$/)) {
      break;
    }
  }
  var lastQ = self2[self2.length - 1];
  if (self2.currentSubject != null) {
    lastQ.subject = self2.currentSubject;
  }
  lastQ.edgeCount = self2.edgeCount;
  lastQ.compoundCount = self2.compoundCount;
  for (var i2 = 0; i2 < self2.length; i2++) {
    var q = self2[i2];
    if (q.compoundCount > 0 && q.edgeCount > 0) {
      warn("The selector `" + selector + "` is invalid because it uses both a compound selector and an edge selector");
      return false;
    }
    if (q.edgeCount > 1) {
      warn("The selector `" + selector + "` is invalid because it uses multiple edge selectors");
      return false;
    } else if (q.edgeCount === 1) {
      warn("The selector `" + selector + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
    }
  }
  return true;
};
var toString = function toString2() {
  if (this.toStringCache != null) {
    return this.toStringCache;
  }
  var clean = function clean2(obj) {
    if (obj == null) {
      return "";
    } else {
      return obj;
    }
  };
  var cleanVal = function cleanVal2(val) {
    if (string(val)) {
      return '"' + val + '"';
    } else {
      return clean(val);
    }
  };
  var space = function space2(val) {
    return " " + val + " ";
  };
  var checkToString = function checkToString2(check, subject) {
    var type = check.type, value = check.value;
    switch (type) {
      case Type.GROUP: {
        var group2 = clean(value);
        return group2.substring(0, group2.length - 1);
      }
      case Type.DATA_COMPARE: {
        var field = check.field, operator = check.operator;
        return "[" + field + space(clean(operator)) + cleanVal(value) + "]";
      }
      case Type.DATA_BOOL: {
        var _operator = check.operator, _field = check.field;
        return "[" + clean(_operator) + _field + "]";
      }
      case Type.DATA_EXIST: {
        var _field2 = check.field;
        return "[" + _field2 + "]";
      }
      case Type.META_COMPARE: {
        var _operator2 = check.operator, _field3 = check.field;
        return "[[" + _field3 + space(clean(_operator2)) + cleanVal(value) + "]]";
      }
      case Type.STATE: {
        return value;
      }
      case Type.ID: {
        return "#" + value;
      }
      case Type.CLASS: {
        return "." + value;
      }
      case Type.PARENT:
      case Type.CHILD: {
        return queryToString(check.parent, subject) + space(">") + queryToString(check.child, subject);
      }
      case Type.ANCESTOR:
      case Type.DESCENDANT: {
        return queryToString(check.ancestor, subject) + " " + queryToString(check.descendant, subject);
      }
      case Type.COMPOUND_SPLIT: {
        var lhs = queryToString(check.left, subject);
        var sub = queryToString(check.subject, subject);
        var rhs = queryToString(check.right, subject);
        return lhs + (lhs.length > 0 ? " " : "") + sub + rhs;
      }
      case Type.TRUE: {
        return "";
      }
    }
  };
  var queryToString = function queryToString2(query2, subject) {
    return query2.checks.reduce(function(str2, chk, i3) {
      return str2 + (subject === query2 && i3 === 0 ? "$" : "") + checkToString(chk, subject);
    }, "");
  };
  var str = "";
  for (var i2 = 0; i2 < this.length; i2++) {
    var query = this[i2];
    str += queryToString(query, query.subject);
    if (this.length > 1 && i2 < this.length - 1) {
      str += ", ";
    }
  }
  this.toStringCache = str;
  return str;
};
var parse$1 = {
  parse,
  toString
};
var valCmp = function valCmp2(fieldVal, operator, value) {
  var matches33;
  var isFieldStr = string(fieldVal);
  var isFieldNum = number$1(fieldVal);
  var isValStr = string(value);
  var fieldStr, valStr;
  var caseInsensitive = false;
  var notExpr = false;
  var isIneqCmp = false;
  if (operator.indexOf("!") >= 0) {
    operator = operator.replace("!", "");
    notExpr = true;
  }
  if (operator.indexOf("@") >= 0) {
    operator = operator.replace("@", "");
    caseInsensitive = true;
  }
  if (isFieldStr || isValStr || caseInsensitive) {
    fieldStr = !isFieldStr && !isFieldNum ? "" : "" + fieldVal;
    valStr = "" + value;
  }
  if (caseInsensitive) {
    fieldVal = fieldStr = fieldStr.toLowerCase();
    value = valStr = valStr.toLowerCase();
  }
  switch (operator) {
    case "*=":
      matches33 = fieldStr.indexOf(valStr) >= 0;
      break;
    case "$=":
      matches33 = fieldStr.indexOf(valStr, fieldStr.length - valStr.length) >= 0;
      break;
    case "^=":
      matches33 = fieldStr.indexOf(valStr) === 0;
      break;
    case "=":
      matches33 = fieldVal === value;
      break;
    case ">":
      isIneqCmp = true;
      matches33 = fieldVal > value;
      break;
    case ">=":
      isIneqCmp = true;
      matches33 = fieldVal >= value;
      break;
    case "<":
      isIneqCmp = true;
      matches33 = fieldVal < value;
      break;
    case "<=":
      isIneqCmp = true;
      matches33 = fieldVal <= value;
      break;
    default:
      matches33 = false;
      break;
  }
  if (notExpr && (fieldVal != null || !isIneqCmp)) {
    matches33 = !matches33;
  }
  return matches33;
};
var boolCmp = function boolCmp2(fieldVal, operator) {
  switch (operator) {
    case "?":
      return fieldVal ? true : false;
    case "!":
      return fieldVal ? false : true;
    case "^":
      return fieldVal === void 0;
  }
};
var existCmp = function existCmp2(fieldVal) {
  return fieldVal !== void 0;
};
var data$1 = function data2(ele, field) {
  return ele.data(field);
};
var meta = function meta2(ele, field) {
  return ele[field]();
};
var match = [];
var matches$1 = function matches30(query, ele) {
  return query.checks.every(function(chk) {
    return match[chk.type](chk, ele);
  });
};
match[Type.GROUP] = function(check, ele) {
  var group2 = check.value;
  return group2 === "*" || group2 === ele.group();
};
match[Type.STATE] = function(check, ele) {
  var stateSelector = check.value;
  return stateSelectorMatches(stateSelector, ele);
};
match[Type.ID] = function(check, ele) {
  var id2 = check.value;
  return ele.id() === id2;
};
match[Type.CLASS] = function(check, ele) {
  var cls = check.value;
  return ele.hasClass(cls);
};
match[Type.META_COMPARE] = function(check, ele) {
  var field = check.field, operator = check.operator, value = check.value;
  return valCmp(meta(ele, field), operator, value);
};
match[Type.DATA_COMPARE] = function(check, ele) {
  var field = check.field, operator = check.operator, value = check.value;
  return valCmp(data$1(ele, field), operator, value);
};
match[Type.DATA_BOOL] = function(check, ele) {
  var field = check.field, operator = check.operator;
  return boolCmp(data$1(ele, field), operator);
};
match[Type.DATA_EXIST] = function(check, ele) {
  var field = check.field;
  check.operator;
  return existCmp(data$1(ele, field));
};
match[Type.UNDIRECTED_EDGE] = function(check, ele) {
  var qA = check.nodes[0];
  var qB = check.nodes[1];
  var src = ele.source();
  var tgt = ele.target();
  return matches$1(qA, src) && matches$1(qB, tgt) || matches$1(qB, src) && matches$1(qA, tgt);
};
match[Type.NODE_NEIGHBOR] = function(check, ele) {
  return matches$1(check.node, ele) && ele.neighborhood().some(function(n) {
    return n.isNode() && matches$1(check.neighbor, n);
  });
};
match[Type.DIRECTED_EDGE] = function(check, ele) {
  return matches$1(check.source, ele.source()) && matches$1(check.target, ele.target());
};
match[Type.NODE_SOURCE] = function(check, ele) {
  return matches$1(check.source, ele) && ele.outgoers().some(function(n) {
    return n.isNode() && matches$1(check.target, n);
  });
};
match[Type.NODE_TARGET] = function(check, ele) {
  return matches$1(check.target, ele) && ele.incomers().some(function(n) {
    return n.isNode() && matches$1(check.source, n);
  });
};
match[Type.CHILD] = function(check, ele) {
  return matches$1(check.child, ele) && matches$1(check.parent, ele.parent());
};
match[Type.PARENT] = function(check, ele) {
  return matches$1(check.parent, ele) && ele.children().some(function(c2) {
    return matches$1(check.child, c2);
  });
};
match[Type.DESCENDANT] = function(check, ele) {
  return matches$1(check.descendant, ele) && ele.ancestors().some(function(a2) {
    return matches$1(check.ancestor, a2);
  });
};
match[Type.ANCESTOR] = function(check, ele) {
  return matches$1(check.ancestor, ele) && ele.descendants().some(function(d2) {
    return matches$1(check.descendant, d2);
  });
};
match[Type.COMPOUND_SPLIT] = function(check, ele) {
  return matches$1(check.subject, ele) && matches$1(check.left, ele) && matches$1(check.right, ele);
};
match[Type.TRUE] = function() {
  return true;
};
match[Type.COLLECTION] = function(check, ele) {
  var collection4 = check.value;
  return collection4.has(ele);
};
match[Type.FILTER] = function(check, ele) {
  var filter4 = check.value;
  return filter4(ele);
};
var filter = function filter2(collection4) {
  var self2 = this;
  if (self2.length === 1 && self2[0].checks.length === 1 && self2[0].checks[0].type === Type.ID) {
    return collection4.getElementById(self2[0].checks[0].value).collection();
  }
  var selectorFunction = function selectorFunction2(element3) {
    for (var j = 0; j < self2.length; j++) {
      var query = self2[j];
      if (matches$1(query, element3)) {
        return true;
      }
    }
    return false;
  };
  if (self2.text() == null) {
    selectorFunction = function selectorFunction2() {
      return true;
    };
  }
  return collection4.filter(selectorFunction);
};
var matches31 = function matches32(ele) {
  var self2 = this;
  for (var j = 0; j < self2.length; j++) {
    var query = self2[j];
    if (matches$1(query, ele)) {
      return true;
    }
  }
  return false;
};
var matching = {
  matches: matches31,
  filter
};
var Selector = function Selector2(selector) {
  this.inputText = selector;
  this.currentSubject = null;
  this.compoundCount = 0;
  this.edgeCount = 0;
  this.length = 0;
  if (selector == null || string(selector) && selector.match(/^\s*$/)) ;
  else if (elementOrCollection(selector)) {
    this.addQuery({
      checks: [{
        type: Type.COLLECTION,
        value: selector.collection()
      }]
    });
  } else if (fn$6(selector)) {
    this.addQuery({
      checks: [{
        type: Type.FILTER,
        value: selector
      }]
    });
  } else if (string(selector)) {
    if (!this.parse(selector)) {
      this.invalid = true;
    }
  } else {
    error("A selector must be created from a string; found ");
  }
};
var selfn = Selector.prototype;
[parse$1, matching].forEach(function(p3) {
  return extend(selfn, p3);
});
selfn.text = function() {
  return this.inputText;
};
selfn.size = function() {
  return this.length;
};
selfn.eq = function(i2) {
  return this[i2];
};
selfn.sameText = function(otherSel) {
  return !this.invalid && !otherSel.invalid && this.text() === otherSel.text();
};
selfn.addQuery = function(q) {
  this[this.length++] = q;
};
selfn.selector = selfn.toString;
var elesfn$g = {
  allAre: function allAre(selector) {
    var selObj = new Selector(selector);
    return this.every(function(ele) {
      return selObj.matches(ele);
    });
  },
  is: function is(selector) {
    var selObj = new Selector(selector);
    return this.some(function(ele) {
      return selObj.matches(ele);
    });
  },
  some: function some(fn3, thisArg) {
    for (var i2 = 0; i2 < this.length; i2++) {
      var ret = !thisArg ? fn3(this[i2], i2, this) : fn3.apply(thisArg, [this[i2], i2, this]);
      if (ret) {
        return true;
      }
    }
    return false;
  },
  every: function every(fn3, thisArg) {
    for (var i2 = 0; i2 < this.length; i2++) {
      var ret = !thisArg ? fn3(this[i2], i2, this) : fn3.apply(thisArg, [this[i2], i2, this]);
      if (!ret) {
        return false;
      }
    }
    return true;
  },
  same: function same(collection4) {
    if (this === collection4) {
      return true;
    }
    collection4 = this.cy().collection(collection4);
    var thisLength = this.length;
    var collectionLength = collection4.length;
    if (thisLength !== collectionLength) {
      return false;
    }
    if (thisLength === 1) {
      return this[0] === collection4[0];
    }
    return this.every(function(ele) {
      return collection4.hasElementWithId(ele.id());
    });
  },
  anySame: function anySame(collection4) {
    collection4 = this.cy().collection(collection4);
    return this.some(function(ele) {
      return collection4.hasElementWithId(ele.id());
    });
  },
  allAreNeighbors: function allAreNeighbors(collection4) {
    collection4 = this.cy().collection(collection4);
    var nhood = this.neighborhood();
    return collection4.every(function(ele) {
      return nhood.hasElementWithId(ele.id());
    });
  },
  contains: function contains(collection4) {
    collection4 = this.cy().collection(collection4);
    var self2 = this;
    return collection4.every(function(ele) {
      return self2.hasElementWithId(ele.id());
    });
  }
};
elesfn$g.allAreNeighbours = elesfn$g.allAreNeighbors;
elesfn$g.has = elesfn$g.contains;
elesfn$g.equal = elesfn$g.equals = elesfn$g.same;
var cache = function cache2(fn3, name) {
  return function traversalCache(arg1, arg2, arg3, arg4) {
    var selectorOrEles = arg1;
    var eles = this;
    var key;
    if (selectorOrEles == null) {
      key = "";
    } else if (elementOrCollection(selectorOrEles) && selectorOrEles.length === 1) {
      key = selectorOrEles.id();
    }
    if (eles.length === 1 && key) {
      var _p = eles[0]._private;
      var tch = _p.traversalCache = _p.traversalCache || {};
      var ch = tch[name] = tch[name] || [];
      var hash = hashString(key);
      var cacheHit = ch[hash];
      if (cacheHit) {
        return cacheHit;
      } else {
        return ch[hash] = fn3.call(eles, arg1, arg2, arg3, arg4);
      }
    } else {
      return fn3.call(eles, arg1, arg2, arg3, arg4);
    }
  };
};
var elesfn$f = {
  parent: function parent(selector) {
    var parents2 = [];
    if (this.length === 1) {
      var parent4 = this[0]._private.parent;
      if (parent4) {
        return parent4;
      }
    }
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      var _parent = ele._private.parent;
      if (_parent) {
        parents2.push(_parent);
      }
    }
    return this.spawn(parents2, true).filter(selector);
  },
  parents: function parents(selector) {
    var parents2 = [];
    var eles = this.parent();
    while (eles.nonempty()) {
      for (var i2 = 0; i2 < eles.length; i2++) {
        var ele = eles[i2];
        parents2.push(ele);
      }
      eles = eles.parent();
    }
    return this.spawn(parents2, true).filter(selector);
  },
  commonAncestors: function commonAncestors(selector) {
    var ancestors;
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      var parents2 = ele.parents();
      ancestors = ancestors || parents2;
      ancestors = ancestors.intersect(parents2);
    }
    return ancestors.filter(selector);
  },
  orphans: function orphans(selector) {
    return this.stdFilter(function(ele) {
      return ele.isOrphan();
    }).filter(selector);
  },
  nonorphans: function nonorphans(selector) {
    return this.stdFilter(function(ele) {
      return ele.isChild();
    }).filter(selector);
  },
  children: cache(function(selector) {
    var children = [];
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      var eleChildren = ele._private.children;
      for (var j = 0; j < eleChildren.length; j++) {
        children.push(eleChildren[j]);
      }
    }
    return this.spawn(children, true).filter(selector);
  }, "children"),
  siblings: function siblings(selector) {
    return this.parent().children().not(this).filter(selector);
  },
  isParent: function isParent() {
    var ele = this[0];
    if (ele) {
      return ele.isNode() && ele._private.children.length !== 0;
    }
  },
  isChildless: function isChildless() {
    var ele = this[0];
    if (ele) {
      return ele.isNode() && ele._private.children.length === 0;
    }
  },
  isChild: function isChild() {
    var ele = this[0];
    if (ele) {
      return ele.isNode() && ele._private.parent != null;
    }
  },
  isOrphan: function isOrphan() {
    var ele = this[0];
    if (ele) {
      return ele.isNode() && ele._private.parent == null;
    }
  },
  descendants: function descendants(selector) {
    var elements = [];
    function add3(eles) {
      for (var i2 = 0; i2 < eles.length; i2++) {
        var ele = eles[i2];
        elements.push(ele);
        if (ele.children().nonempty()) {
          add3(ele.children());
        }
      }
    }
    add3(this.children());
    return this.spawn(elements, true).filter(selector);
  }
};
function forEachCompound(eles, fn3, includeSelf, recursiveStep) {
  var q = [];
  var did = new Set$1();
  var cy = eles.cy();
  var hasCompounds = cy.hasCompoundNodes();
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    if (includeSelf) {
      q.push(ele);
    } else if (hasCompounds) {
      recursiveStep(q, did, ele);
    }
  }
  while (q.length > 0) {
    var _ele = q.shift();
    fn3(_ele);
    did.add(_ele.id());
    if (hasCompounds) {
      recursiveStep(q, did, _ele);
    }
  }
  return eles;
}
function addChildren(q, did, ele) {
  if (ele.isParent()) {
    var children = ele._private.children;
    for (var i2 = 0; i2 < children.length; i2++) {
      var child = children[i2];
      if (!did.has(child.id())) {
        q.push(child);
      }
    }
  }
}
elesfn$f.forEachDown = function(fn3) {
  var includeSelf = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return forEachCompound(this, fn3, includeSelf, addChildren);
};
function addParent(q, did, ele) {
  if (ele.isChild()) {
    var parent4 = ele._private.parent;
    if (!did.has(parent4.id())) {
      q.push(parent4);
    }
  }
}
elesfn$f.forEachUp = function(fn3) {
  var includeSelf = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return forEachCompound(this, fn3, includeSelf, addParent);
};
function addParentAndChildren(q, did, ele) {
  addParent(q, did, ele);
  addChildren(q, did, ele);
}
elesfn$f.forEachUpAndDown = function(fn3) {
  var includeSelf = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return forEachCompound(this, fn3, includeSelf, addParentAndChildren);
};
elesfn$f.ancestors = elesfn$f.parents;
var fn$5;
var elesfn$e;
fn$5 = elesfn$e = {
  data: define.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    immutableKeys: {
      "id": true,
      "source": true,
      "target": true,
      "parent": true
    },
    updateStyle: true
  }),
  removeData: define.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    immutableKeys: {
      "id": true,
      "source": true,
      "target": true,
      "parent": true
    },
    updateStyle: true
  }),
  scratch: define.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: define.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  rscratch: define.data({
    field: "rscratch",
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: true
  }),
  removeRscratch: define.removeData({
    field: "rscratch",
    triggerEvent: false
  }),
  id: function id() {
    var ele = this[0];
    if (ele) {
      return ele._private.data.id;
    }
  }
};
fn$5.attr = fn$5.data;
fn$5.removeAttr = fn$5.removeData;
var data3 = elesfn$e;
var elesfn$d = {};
function defineDegreeFunction(callback) {
  return function(includeLoops) {
    var self2 = this;
    if (includeLoops === void 0) {
      includeLoops = true;
    }
    if (self2.length === 0) {
      return;
    }
    if (self2.isNode() && !self2.removed()) {
      var degree = 0;
      var node = self2[0];
      var connectedEdges = node._private.edges;
      for (var i2 = 0; i2 < connectedEdges.length; i2++) {
        var edge = connectedEdges[i2];
        if (!includeLoops && edge.isLoop()) {
          continue;
        }
        degree += callback(node, edge);
      }
      return degree;
    } else {
      return;
    }
  };
}
extend(elesfn$d, {
  degree: defineDegreeFunction(function(node, edge) {
    if (edge.source().same(edge.target())) {
      return 2;
    } else {
      return 1;
    }
  }),
  indegree: defineDegreeFunction(function(node, edge) {
    if (edge.target().same(node)) {
      return 1;
    } else {
      return 0;
    }
  }),
  outdegree: defineDegreeFunction(function(node, edge) {
    if (edge.source().same(node)) {
      return 1;
    } else {
      return 0;
    }
  })
});
function defineDegreeBoundsFunction(degreeFn, callback) {
  return function(includeLoops) {
    var ret;
    var nodes3 = this.nodes();
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      var ele = nodes3[i2];
      var degree = ele[degreeFn](includeLoops);
      if (degree !== void 0 && (ret === void 0 || callback(degree, ret))) {
        ret = degree;
      }
    }
    return ret;
  };
}
extend(elesfn$d, {
  minDegree: defineDegreeBoundsFunction("degree", function(degree, min4) {
    return degree < min4;
  }),
  maxDegree: defineDegreeBoundsFunction("degree", function(degree, max5) {
    return degree > max5;
  }),
  minIndegree: defineDegreeBoundsFunction("indegree", function(degree, min4) {
    return degree < min4;
  }),
  maxIndegree: defineDegreeBoundsFunction("indegree", function(degree, max5) {
    return degree > max5;
  }),
  minOutdegree: defineDegreeBoundsFunction("outdegree", function(degree, min4) {
    return degree < min4;
  }),
  maxOutdegree: defineDegreeBoundsFunction("outdegree", function(degree, max5) {
    return degree > max5;
  })
});
extend(elesfn$d, {
  totalDegree: function totalDegree(includeLoops) {
    var total = 0;
    var nodes3 = this.nodes();
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      total += nodes3[i2].degree(includeLoops);
    }
    return total;
  }
});
var fn$4;
var elesfn$c;
var beforePositionSet = function beforePositionSet2(eles, newPos, silent) {
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    if (!ele.locked()) {
      var oldPos = ele._private.position;
      var delta = {
        x: newPos.x != null ? newPos.x - oldPos.x : 0,
        y: newPos.y != null ? newPos.y - oldPos.y : 0
      };
      if (ele.isParent() && !(delta.x === 0 && delta.y === 0)) {
        ele.children().shift(delta, silent);
      }
      ele.dirtyBoundingBoxCache();
    }
  }
};
var positionDef = {
  field: "position",
  bindingEvent: "position",
  allowBinding: true,
  allowSetting: true,
  settingEvent: "position",
  settingTriggersEvent: true,
  triggerFnName: "emitAndNotify",
  allowGetting: true,
  validKeys: ["x", "y"],
  beforeGet: function beforeGet(ele) {
    ele.updateCompoundBounds();
  },
  beforeSet: function beforeSet(eles, newPos) {
    beforePositionSet(eles, newPos, false);
  },
  onSet: function onSet(eles) {
    eles.dirtyCompoundBoundsCache();
  },
  canSet: function canSet(ele) {
    return !ele.locked();
  }
};
fn$4 = elesfn$c = {
  position: define.data(positionDef),
  // position but no notification to renderer
  silentPosition: define.data(extend({}, positionDef, {
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: false,
    beforeSet: function beforeSet2(eles, newPos) {
      beforePositionSet(eles, newPos, true);
    },
    onSet: function onSet2(eles) {
      eles.dirtyCompoundBoundsCache();
    }
  })),
  positions: function positions(pos, silent) {
    if (plainObject(pos)) {
      if (silent) {
        this.silentPosition(pos);
      } else {
        this.position(pos);
      }
    } else if (fn$6(pos)) {
      var _fn = pos;
      var cy = this.cy();
      cy.startBatch();
      for (var i2 = 0; i2 < this.length; i2++) {
        var ele = this[i2];
        var _pos = void 0;
        if (_pos = _fn(ele, i2)) {
          if (silent) {
            ele.silentPosition(_pos);
          } else {
            ele.position(_pos);
          }
        }
      }
      cy.endBatch();
    }
    return this;
  },
  silentPositions: function silentPositions(pos) {
    return this.positions(pos, true);
  },
  shift: function shift(dim, val, silent) {
    var delta;
    if (plainObject(dim)) {
      delta = {
        x: number$1(dim.x) ? dim.x : 0,
        y: number$1(dim.y) ? dim.y : 0
      };
      silent = val;
    } else if (string(dim) && number$1(val)) {
      delta = {
        x: 0,
        y: 0
      };
      delta[dim] = val;
    }
    if (delta != null) {
      var cy = this.cy();
      cy.startBatch();
      for (var i2 = 0; i2 < this.length; i2++) {
        var ele = this[i2];
        if (cy.hasCompoundNodes() && ele.isChild() && ele.ancestors().anySame(this)) {
          continue;
        }
        var pos = ele.position();
        var newPos = {
          x: pos.x + delta.x,
          y: pos.y + delta.y
        };
        if (silent) {
          ele.silentPosition(newPos);
        } else {
          ele.position(newPos);
        }
      }
      cy.endBatch();
    }
    return this;
  },
  silentShift: function silentShift(dim, val) {
    if (plainObject(dim)) {
      this.shift(dim, true);
    } else if (string(dim) && number$1(val)) {
      this.shift(dim, val, true);
    }
    return this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function renderedPosition(dim, val) {
    var ele = this[0];
    var cy = this.cy();
    var zoom2 = cy.zoom();
    var pan2 = cy.pan();
    var rpos = plainObject(dim) ? dim : void 0;
    var setting = rpos !== void 0 || val !== void 0 && string(dim);
    if (ele && ele.isNode()) {
      if (setting) {
        for (var i2 = 0; i2 < this.length; i2++) {
          var _ele = this[i2];
          if (val !== void 0) {
            _ele.position(dim, (val - pan2[dim]) / zoom2);
          } else if (rpos !== void 0) {
            _ele.position(renderedToModelPosition(rpos, zoom2, pan2));
          }
        }
      } else {
        var pos = ele.position();
        rpos = modelToRenderedPosition$1(pos, zoom2, pan2);
        if (dim === void 0) {
          return rpos;
        } else {
          return rpos[dim];
        }
      }
    } else if (!setting) {
      return void 0;
    }
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function relativePosition(dim, val) {
    var ele = this[0];
    var cy = this.cy();
    var ppos = plainObject(dim) ? dim : void 0;
    var setting = ppos !== void 0 || val !== void 0 && string(dim);
    var hasCompoundNodes2 = cy.hasCompoundNodes();
    if (ele && ele.isNode()) {
      if (setting) {
        for (var i2 = 0; i2 < this.length; i2++) {
          var _ele2 = this[i2];
          var parent4 = hasCompoundNodes2 ? _ele2.parent() : null;
          var hasParent = parent4 && parent4.length > 0;
          var relativeToParent = hasParent;
          if (hasParent) {
            parent4 = parent4[0];
          }
          var origin = relativeToParent ? parent4.position() : {
            x: 0,
            y: 0
          };
          if (val !== void 0) {
            _ele2.position(dim, val + origin[dim]);
          } else if (ppos !== void 0) {
            _ele2.position({
              x: ppos.x + origin.x,
              y: ppos.y + origin.y
            });
          }
        }
      } else {
        var pos = ele.position();
        var _parent = hasCompoundNodes2 ? ele.parent() : null;
        var _hasParent = _parent && _parent.length > 0;
        var _relativeToParent = _hasParent;
        if (_hasParent) {
          _parent = _parent[0];
        }
        var _origin = _relativeToParent ? _parent.position() : {
          x: 0,
          y: 0
        };
        ppos = {
          x: pos.x - _origin.x,
          y: pos.y - _origin.y
        };
        if (dim === void 0) {
          return ppos;
        } else {
          return ppos[dim];
        }
      }
    } else if (!setting) {
      return void 0;
    }
    return this;
  }
};
fn$4.modelPosition = fn$4.point = fn$4.position;
fn$4.modelPositions = fn$4.points = fn$4.positions;
fn$4.renderedPoint = fn$4.renderedPosition;
fn$4.relativePoint = fn$4.relativePosition;
var position = elesfn$c;
var fn$3;
var elesfn$b;
fn$3 = elesfn$b = {};
elesfn$b.renderedBoundingBox = function(options2) {
  var bb = this.boundingBox(options2);
  var cy = this.cy();
  var zoom2 = cy.zoom();
  var pan2 = cy.pan();
  var x1 = bb.x1 * zoom2 + pan2.x;
  var x22 = bb.x2 * zoom2 + pan2.x;
  var y1 = bb.y1 * zoom2 + pan2.y;
  var y22 = bb.y2 * zoom2 + pan2.y;
  return {
    x1,
    x2: x22,
    y1,
    y2: y22,
    w: x22 - x1,
    h: y22 - y1
  };
};
elesfn$b.dirtyCompoundBoundsCache = function() {
  var silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  var cy = this.cy();
  if (!cy.styleEnabled() || !cy.hasCompoundNodes()) {
    return this;
  }
  this.forEachUp(function(ele) {
    if (ele.isParent()) {
      var _p = ele._private;
      _p.compoundBoundsClean = false;
      _p.bbCache = null;
      if (!silent) {
        ele.emitAndNotify("bounds");
      }
    }
  });
  return this;
};
elesfn$b.updateCompoundBounds = function() {
  var force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  var cy = this.cy();
  if (!cy.styleEnabled() || !cy.hasCompoundNodes()) {
    return this;
  }
  if (!force && cy.batching()) {
    return this;
  }
  function update(parent4) {
    if (!parent4.isParent()) {
      return;
    }
    var _p2 = parent4._private;
    var children = parent4.children();
    var includeLabels = parent4.pstyle("compound-sizing-wrt-labels").value === "include";
    var min4 = {
      width: {
        val: parent4.pstyle("min-width").pfValue,
        left: parent4.pstyle("min-width-bias-left"),
        right: parent4.pstyle("min-width-bias-right")
      },
      height: {
        val: parent4.pstyle("min-height").pfValue,
        top: parent4.pstyle("min-height-bias-top"),
        bottom: parent4.pstyle("min-height-bias-bottom")
      }
    };
    var bb = children.boundingBox({
      includeLabels,
      includeOverlays: false,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: false
    });
    var pos = _p2.position;
    if (bb.w === 0 || bb.h === 0) {
      bb = {
        w: parent4.pstyle("width").pfValue,
        h: parent4.pstyle("height").pfValue
      };
      bb.x1 = pos.x - bb.w / 2;
      bb.x2 = pos.x + bb.w / 2;
      bb.y1 = pos.y - bb.h / 2;
      bb.y2 = pos.y + bb.h / 2;
    }
    function computeBiasValues(propDiff, propBias, propBiasComplement) {
      var biasDiff = 0;
      var biasComplementDiff = 0;
      var biasTotal = propBias + propBiasComplement;
      if (propDiff > 0 && biasTotal > 0) {
        biasDiff = propBias / biasTotal * propDiff;
        biasComplementDiff = propBiasComplement / biasTotal * propDiff;
      }
      return {
        biasDiff,
        biasComplementDiff
      };
    }
    function computePaddingValues(width2, height2, paddingObject, relativeTo) {
      if (paddingObject.units === "%") {
        switch (relativeTo) {
          case "width":
            return width2 > 0 ? paddingObject.pfValue * width2 : 0;
          case "height":
            return height2 > 0 ? paddingObject.pfValue * height2 : 0;
          case "average":
            return width2 > 0 && height2 > 0 ? paddingObject.pfValue * (width2 + height2) / 2 : 0;
          case "min":
            return width2 > 0 && height2 > 0 ? width2 > height2 ? paddingObject.pfValue * height2 : paddingObject.pfValue * width2 : 0;
          case "max":
            return width2 > 0 && height2 > 0 ? width2 > height2 ? paddingObject.pfValue * width2 : paddingObject.pfValue * height2 : 0;
          default:
            return 0;
        }
      } else if (paddingObject.units === "px") {
        return paddingObject.pfValue;
      } else {
        return 0;
      }
    }
    var leftVal = min4.width.left.value;
    if (min4.width.left.units === "px" && min4.width.val > 0) {
      leftVal = leftVal * 100 / min4.width.val;
    }
    var rightVal = min4.width.right.value;
    if (min4.width.right.units === "px" && min4.width.val > 0) {
      rightVal = rightVal * 100 / min4.width.val;
    }
    var topVal = min4.height.top.value;
    if (min4.height.top.units === "px" && min4.height.val > 0) {
      topVal = topVal * 100 / min4.height.val;
    }
    var bottomVal = min4.height.bottom.value;
    if (min4.height.bottom.units === "px" && min4.height.val > 0) {
      bottomVal = bottomVal * 100 / min4.height.val;
    }
    var widthBiasDiffs = computeBiasValues(min4.width.val - bb.w, leftVal, rightVal);
    var diffLeft = widthBiasDiffs.biasDiff;
    var diffRight = widthBiasDiffs.biasComplementDiff;
    var heightBiasDiffs = computeBiasValues(min4.height.val - bb.h, topVal, bottomVal);
    var diffTop = heightBiasDiffs.biasDiff;
    var diffBottom = heightBiasDiffs.biasComplementDiff;
    _p2.autoPadding = computePaddingValues(bb.w, bb.h, parent4.pstyle("padding"), parent4.pstyle("padding-relative-to").value);
    _p2.autoWidth = Math.max(bb.w, min4.width.val);
    pos.x = (-diffLeft + bb.x1 + bb.x2 + diffRight) / 2;
    _p2.autoHeight = Math.max(bb.h, min4.height.val);
    pos.y = (-diffTop + bb.y1 + bb.y2 + diffBottom) / 2;
  }
  for (var i2 = 0; i2 < this.length; i2++) {
    var ele = this[i2];
    var _p = ele._private;
    if (!_p.compoundBoundsClean || force) {
      update(ele);
      if (!cy.batching()) {
        _p.compoundBoundsClean = true;
      }
    }
  }
  return this;
};
var noninf = function noninf2(x3) {
  if (x3 === Infinity || x3 === -Infinity) {
    return 0;
  }
  return x3;
};
var updateBounds = function updateBounds2(b2, x1, y1, x22, y22) {
  if (x22 - x1 === 0 || y22 - y1 === 0) {
    return;
  }
  if (x1 == null || y1 == null || x22 == null || y22 == null) {
    return;
  }
  b2.x1 = x1 < b2.x1 ? x1 : b2.x1;
  b2.x2 = x22 > b2.x2 ? x22 : b2.x2;
  b2.y1 = y1 < b2.y1 ? y1 : b2.y1;
  b2.y2 = y22 > b2.y2 ? y22 : b2.y2;
  b2.w = b2.x2 - b2.x1;
  b2.h = b2.y2 - b2.y1;
};
var updateBoundsFromBox = function updateBoundsFromBox2(b2, b22) {
  if (b22 == null) {
    return b2;
  }
  return updateBounds(b2, b22.x1, b22.y1, b22.x2, b22.y2);
};
var prefixedProperty = function prefixedProperty2(obj, field, prefix) {
  return getPrefixedProperty(obj, field, prefix);
};
var updateBoundsFromArrow = function updateBoundsFromArrow2(bounds2, ele, prefix) {
  if (ele.cy().headless()) {
    return;
  }
  var _p = ele._private;
  var rstyle = _p.rstyle;
  var halfArW = rstyle.arrowWidth / 2;
  var arrowType = ele.pstyle(prefix + "-arrow-shape").value;
  var x3;
  var y3;
  if (arrowType !== "none") {
    if (prefix === "source") {
      x3 = rstyle.srcX;
      y3 = rstyle.srcY;
    } else if (prefix === "target") {
      x3 = rstyle.tgtX;
      y3 = rstyle.tgtY;
    } else {
      x3 = rstyle.midX;
      y3 = rstyle.midY;
    }
    var bbs = _p.arrowBounds = _p.arrowBounds || {};
    var bb = bbs[prefix] = bbs[prefix] || {};
    bb.x1 = x3 - halfArW;
    bb.y1 = y3 - halfArW;
    bb.x2 = x3 + halfArW;
    bb.y2 = y3 + halfArW;
    bb.w = bb.x2 - bb.x1;
    bb.h = bb.y2 - bb.y1;
    expandBoundingBox(bb, 1);
    updateBounds(bounds2, bb.x1, bb.y1, bb.x2, bb.y2);
  }
};
var updateBoundsFromLabel = function updateBoundsFromLabel2(bounds2, ele, prefix) {
  if (ele.cy().headless()) {
    return;
  }
  var prefixDash;
  if (prefix) {
    prefixDash = prefix + "-";
  } else {
    prefixDash = "";
  }
  var _p = ele._private;
  var rstyle = _p.rstyle;
  var label = ele.pstyle(prefixDash + "label").strValue;
  if (label) {
    var halign = ele.pstyle("text-halign");
    var valign = ele.pstyle("text-valign");
    var labelWidth = prefixedProperty(rstyle, "labelWidth", prefix);
    var labelHeight = prefixedProperty(rstyle, "labelHeight", prefix);
    var labelX = prefixedProperty(rstyle, "labelX", prefix);
    var labelY = prefixedProperty(rstyle, "labelY", prefix);
    var marginX = ele.pstyle(prefixDash + "text-margin-x").pfValue;
    var marginY = ele.pstyle(prefixDash + "text-margin-y").pfValue;
    var isEdge2 = ele.isEdge();
    var rotation = ele.pstyle(prefixDash + "text-rotation");
    var outlineWidth = ele.pstyle("text-outline-width").pfValue;
    var borderWidth = ele.pstyle("text-border-width").pfValue;
    var halfBorderWidth = borderWidth / 2;
    var padding = ele.pstyle("text-background-padding").pfValue;
    var marginOfError = 2;
    var lh = labelHeight;
    var lw = labelWidth;
    var lw_2 = lw / 2;
    var lh_2 = lh / 2;
    var lx1, lx2, ly1, ly2;
    if (isEdge2) {
      lx1 = labelX - lw_2;
      lx2 = labelX + lw_2;
      ly1 = labelY - lh_2;
      ly2 = labelY + lh_2;
    } else {
      switch (halign.value) {
        case "left":
          lx1 = labelX - lw;
          lx2 = labelX;
          break;
        case "center":
          lx1 = labelX - lw_2;
          lx2 = labelX + lw_2;
          break;
        case "right":
          lx1 = labelX;
          lx2 = labelX + lw;
          break;
      }
      switch (valign.value) {
        case "top":
          ly1 = labelY - lh;
          ly2 = labelY;
          break;
        case "center":
          ly1 = labelY - lh_2;
          ly2 = labelY + lh_2;
          break;
        case "bottom":
          ly1 = labelY;
          ly2 = labelY + lh;
          break;
      }
    }
    var leftPad = marginX - Math.max(outlineWidth, halfBorderWidth) - padding - marginOfError;
    var rightPad = marginX + Math.max(outlineWidth, halfBorderWidth) + padding + marginOfError;
    var topPad = marginY - Math.max(outlineWidth, halfBorderWidth) - padding - marginOfError;
    var botPad = marginY + Math.max(outlineWidth, halfBorderWidth) + padding + marginOfError;
    lx1 += leftPad;
    lx2 += rightPad;
    ly1 += topPad;
    ly2 += botPad;
    var bbPrefix = prefix || "main";
    var bbs = _p.labelBounds;
    var bb = bbs[bbPrefix] = bbs[bbPrefix] || {};
    bb.x1 = lx1;
    bb.y1 = ly1;
    bb.x2 = lx2;
    bb.y2 = ly2;
    bb.w = lx2 - lx1;
    bb.h = ly2 - ly1;
    bb.leftPad = leftPad;
    bb.rightPad = rightPad;
    bb.topPad = topPad;
    bb.botPad = botPad;
    var isAutorotate = isEdge2 && rotation.strValue === "autorotate";
    var isPfValue = rotation.pfValue != null && rotation.pfValue !== 0;
    if (isAutorotate || isPfValue) {
      var theta = isAutorotate ? prefixedProperty(_p.rstyle, "labelAngle", prefix) : rotation.pfValue;
      var cos2 = Math.cos(theta);
      var sin2 = Math.sin(theta);
      var xo = (lx1 + lx2) / 2;
      var yo = (ly1 + ly2) / 2;
      if (!isEdge2) {
        switch (halign.value) {
          case "left":
            xo = lx2;
            break;
          case "right":
            xo = lx1;
            break;
        }
        switch (valign.value) {
          case "top":
            yo = ly2;
            break;
          case "bottom":
            yo = ly1;
            break;
        }
      }
      var rotate2 = function rotate3(x3, y3) {
        x3 = x3 - xo;
        y3 = y3 - yo;
        return {
          x: x3 * cos2 - y3 * sin2 + xo,
          y: x3 * sin2 + y3 * cos2 + yo
        };
      };
      var px1y1 = rotate2(lx1, ly1);
      var px1y2 = rotate2(lx1, ly2);
      var px2y1 = rotate2(lx2, ly1);
      var px2y2 = rotate2(lx2, ly2);
      lx1 = Math.min(px1y1.x, px1y2.x, px2y1.x, px2y2.x);
      lx2 = Math.max(px1y1.x, px1y2.x, px2y1.x, px2y2.x);
      ly1 = Math.min(px1y1.y, px1y2.y, px2y1.y, px2y2.y);
      ly2 = Math.max(px1y1.y, px1y2.y, px2y1.y, px2y2.y);
    }
    var bbPrefixRot = bbPrefix + "Rot";
    var bbRot = bbs[bbPrefixRot] = bbs[bbPrefixRot] || {};
    bbRot.x1 = lx1;
    bbRot.y1 = ly1;
    bbRot.x2 = lx2;
    bbRot.y2 = ly2;
    bbRot.w = lx2 - lx1;
    bbRot.h = ly2 - ly1;
    updateBounds(bounds2, lx1, ly1, lx2, ly2);
    updateBounds(_p.labelBounds.all, lx1, ly1, lx2, ly2);
  }
  return bounds2;
};
var updateBoundsFromOutline = function updateBoundsFromOutline2(bounds2, ele) {
  if (ele.cy().headless()) {
    return;
  }
  var outlineOpacity = ele.pstyle("outline-opacity").value;
  var outlineWidth = ele.pstyle("outline-width").value;
  var outlineOffset = ele.pstyle("outline-offset").value;
  var expansion = outlineWidth + outlineOffset;
  updateBoundsFromMiter(bounds2, ele, outlineOpacity, expansion, "outside", expansion / 2);
};
var updateBoundsFromMiter = function updateBoundsFromMiter2(bounds2, ele, opacity, expansionSize, expansionPosition, useFallbackValue) {
  if (opacity === 0 || expansionSize <= 0 || expansionPosition === "inside") {
    return;
  }
  var cy = ele.cy();
  var shape = ele.pstyle("shape").value;
  var rshape = cy.renderer().nodeShapes[shape];
  var _ele$position = ele.position(), x3 = _ele$position.x, y3 = _ele$position.y;
  var w2 = ele.width();
  var h2 = ele.height();
  if (rshape.hasMiterBounds) {
    if (expansionPosition === "center") {
      expansionSize /= 2;
    }
    var mbb = rshape.miterBounds(x3, y3, w2, h2, expansionSize);
    updateBoundsFromBox(bounds2, mbb);
  } else if (useFallbackValue != null && useFallbackValue > 0) {
    expandBoundingBoxSides(bounds2, [useFallbackValue, useFallbackValue, useFallbackValue, useFallbackValue]);
  }
};
var updateBoundsFromMiterBorder = function updateBoundsFromMiterBorder2(bounds2, ele) {
  if (ele.cy().headless()) {
    return;
  }
  var borderOpacity = ele.pstyle("border-opacity").value;
  var borderWidth = ele.pstyle("border-width").pfValue;
  var borderPosition = ele.pstyle("border-position").value;
  updateBoundsFromMiter(bounds2, ele, borderOpacity, borderWidth, borderPosition);
};
var boundingBoxImpl = function boundingBoxImpl2(ele, options2) {
  var cy = ele._private.cy;
  var styleEnabled2 = cy.styleEnabled();
  var headless2 = cy.headless();
  var bounds2 = makeBoundingBox();
  var _p = ele._private;
  var isNode2 = ele.isNode();
  var isEdge2 = ele.isEdge();
  var ex1, ex2, ey1, ey2;
  var x3, y3;
  var rstyle = _p.rstyle;
  var manualExpansion = isNode2 && styleEnabled2 ? ele.pstyle("bounds-expansion").pfValue : [0];
  var isDisplayed = function isDisplayed2(ele2) {
    return ele2.pstyle("display").value !== "none";
  };
  var displayed = !styleEnabled2 || isDisplayed(ele) && (!isEdge2 || isDisplayed(ele.source()) && isDisplayed(ele.target()));
  if (displayed) {
    var overlayOpacity = 0;
    var overlayPadding = 0;
    if (styleEnabled2 && options2.includeOverlays) {
      overlayOpacity = ele.pstyle("overlay-opacity").value;
      if (overlayOpacity !== 0) {
        overlayPadding = ele.pstyle("overlay-padding").value;
      }
    }
    var underlayOpacity = 0;
    var underlayPadding = 0;
    if (styleEnabled2 && options2.includeUnderlays) {
      underlayOpacity = ele.pstyle("underlay-opacity").value;
      if (underlayOpacity !== 0) {
        underlayPadding = ele.pstyle("underlay-padding").value;
      }
    }
    var padding = Math.max(overlayPadding, underlayPadding);
    var w2 = 0;
    var wHalf = 0;
    if (styleEnabled2) {
      w2 = ele.pstyle("width").pfValue;
      wHalf = w2 / 2;
    }
    if (isNode2 && options2.includeNodes) {
      var pos = ele.position();
      x3 = pos.x;
      y3 = pos.y;
      var _w = ele.outerWidth();
      var halfW = _w / 2;
      var h2 = ele.outerHeight();
      var halfH = h2 / 2;
      ex1 = x3 - halfW;
      ex2 = x3 + halfW;
      ey1 = y3 - halfH;
      ey2 = y3 + halfH;
      updateBounds(bounds2, ex1, ey1, ex2, ey2);
      if (styleEnabled2) {
        updateBoundsFromOutline(bounds2, ele);
      }
      if (styleEnabled2 && options2.includeOutlines && !headless2) {
        updateBoundsFromOutline(bounds2, ele);
      }
      if (styleEnabled2) {
        updateBoundsFromMiterBorder(bounds2, ele);
      }
    } else if (isEdge2 && options2.includeEdges) {
      if (styleEnabled2 && !headless2) {
        var curveStyle = ele.pstyle("curve-style").strValue;
        ex1 = Math.min(rstyle.srcX, rstyle.midX, rstyle.tgtX);
        ex2 = Math.max(rstyle.srcX, rstyle.midX, rstyle.tgtX);
        ey1 = Math.min(rstyle.srcY, rstyle.midY, rstyle.tgtY);
        ey2 = Math.max(rstyle.srcY, rstyle.midY, rstyle.tgtY);
        ex1 -= wHalf;
        ex2 += wHalf;
        ey1 -= wHalf;
        ey2 += wHalf;
        updateBounds(bounds2, ex1, ey1, ex2, ey2);
        if (curveStyle === "haystack") {
          var hpts = rstyle.haystackPts;
          if (hpts && hpts.length === 2) {
            ex1 = hpts[0].x;
            ey1 = hpts[0].y;
            ex2 = hpts[1].x;
            ey2 = hpts[1].y;
            if (ex1 > ex2) {
              var temp = ex1;
              ex1 = ex2;
              ex2 = temp;
            }
            if (ey1 > ey2) {
              var _temp = ey1;
              ey1 = ey2;
              ey2 = _temp;
            }
            updateBounds(bounds2, ex1 - wHalf, ey1 - wHalf, ex2 + wHalf, ey2 + wHalf);
          }
        } else if (curveStyle === "bezier" || curveStyle === "unbundled-bezier" || endsWith(curveStyle, "segments") || endsWith(curveStyle, "taxi")) {
          var pts2;
          switch (curveStyle) {
            case "bezier":
            case "unbundled-bezier":
              pts2 = rstyle.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              pts2 = rstyle.linePts;
              break;
          }
          if (pts2 != null) {
            for (var j = 0; j < pts2.length; j++) {
              var pt = pts2[j];
              ex1 = pt.x - wHalf;
              ex2 = pt.x + wHalf;
              ey1 = pt.y - wHalf;
              ey2 = pt.y + wHalf;
              updateBounds(bounds2, ex1, ey1, ex2, ey2);
            }
          }
        }
      } else {
        var n1 = ele.source();
        var n1pos = n1.position();
        var n2 = ele.target();
        var n2pos = n2.position();
        ex1 = n1pos.x;
        ex2 = n2pos.x;
        ey1 = n1pos.y;
        ey2 = n2pos.y;
        if (ex1 > ex2) {
          var _temp2 = ex1;
          ex1 = ex2;
          ex2 = _temp2;
        }
        if (ey1 > ey2) {
          var _temp3 = ey1;
          ey1 = ey2;
          ey2 = _temp3;
        }
        ex1 -= wHalf;
        ex2 += wHalf;
        ey1 -= wHalf;
        ey2 += wHalf;
        updateBounds(bounds2, ex1, ey1, ex2, ey2);
      }
    }
    if (styleEnabled2 && options2.includeEdges && isEdge2) {
      updateBoundsFromArrow(bounds2, ele, "mid-source");
      updateBoundsFromArrow(bounds2, ele, "mid-target");
      updateBoundsFromArrow(bounds2, ele, "source");
      updateBoundsFromArrow(bounds2, ele, "target");
    }
    if (styleEnabled2) {
      var ghost = ele.pstyle("ghost").value === "yes";
      if (ghost) {
        var gx = ele.pstyle("ghost-offset-x").pfValue;
        var gy = ele.pstyle("ghost-offset-y").pfValue;
        updateBounds(bounds2, bounds2.x1 + gx, bounds2.y1 + gy, bounds2.x2 + gx, bounds2.y2 + gy);
      }
    }
    var bbBody = _p.bodyBounds = _p.bodyBounds || {};
    assignBoundingBox(bbBody, bounds2);
    expandBoundingBoxSides(bbBody, manualExpansion);
    expandBoundingBox(bbBody, 1);
    if (styleEnabled2) {
      ex1 = bounds2.x1;
      ex2 = bounds2.x2;
      ey1 = bounds2.y1;
      ey2 = bounds2.y2;
      updateBounds(bounds2, ex1 - padding, ey1 - padding, ex2 + padding, ey2 + padding);
    }
    var bbOverlay = _p.overlayBounds = _p.overlayBounds || {};
    assignBoundingBox(bbOverlay, bounds2);
    expandBoundingBoxSides(bbOverlay, manualExpansion);
    expandBoundingBox(bbOverlay, 1);
    var bbLabels = _p.labelBounds = _p.labelBounds || {};
    if (bbLabels.all != null) {
      clearBoundingBox(bbLabels.all);
    } else {
      bbLabels.all = makeBoundingBox();
    }
    if (styleEnabled2 && options2.includeLabels) {
      if (options2.includeMainLabels) {
        updateBoundsFromLabel(bounds2, ele, null);
      }
      if (isEdge2) {
        if (options2.includeSourceLabels) {
          updateBoundsFromLabel(bounds2, ele, "source");
        }
        if (options2.includeTargetLabels) {
          updateBoundsFromLabel(bounds2, ele, "target");
        }
      }
    }
  }
  bounds2.x1 = noninf(bounds2.x1);
  bounds2.y1 = noninf(bounds2.y1);
  bounds2.x2 = noninf(bounds2.x2);
  bounds2.y2 = noninf(bounds2.y2);
  bounds2.w = noninf(bounds2.x2 - bounds2.x1);
  bounds2.h = noninf(bounds2.y2 - bounds2.y1);
  if (bounds2.w > 0 && bounds2.h > 0 && displayed) {
    expandBoundingBoxSides(bounds2, manualExpansion);
    expandBoundingBox(bounds2, 1);
  }
  return bounds2;
};
var getKey = function getKey2(opts) {
  var i2 = 0;
  var tf = function tf2(val) {
    return (val ? 1 : 0) << i2++;
  };
  var key = 0;
  key += tf(opts.incudeNodes);
  key += tf(opts.includeEdges);
  key += tf(opts.includeLabels);
  key += tf(opts.includeMainLabels);
  key += tf(opts.includeSourceLabels);
  key += tf(opts.includeTargetLabels);
  key += tf(opts.includeOverlays);
  key += tf(opts.includeOutlines);
  return key;
};
var getBoundingBoxPosKey = function getBoundingBoxPosKey2(ele) {
  var r2 = function r3(x3) {
    return Math.round(x3);
  };
  if (ele.isEdge()) {
    var p1 = ele.source().position();
    var p22 = ele.target().position();
    return hashIntsArray([r2(p1.x), r2(p1.y), r2(p22.x), r2(p22.y)]);
  } else {
    var p3 = ele.position();
    return hashIntsArray([r2(p3.x), r2(p3.y)]);
  }
};
var cachedBoundingBoxImpl = function cachedBoundingBoxImpl2(ele, opts) {
  var _p = ele._private;
  var bb;
  var isEdge2 = ele.isEdge();
  var key = opts == null ? defBbOptsKey : getKey(opts);
  var usingDefOpts = key === defBbOptsKey;
  if (_p.bbCache == null) {
    bb = boundingBoxImpl(ele, defBbOpts);
    _p.bbCache = bb;
    _p.bbCachePosKey = getBoundingBoxPosKey(ele);
  } else {
    bb = _p.bbCache;
  }
  if (!usingDefOpts) {
    var isNode2 = ele.isNode();
    bb = makeBoundingBox();
    if (opts.includeNodes && isNode2 || opts.includeEdges && !isNode2) {
      if (opts.includeOverlays) {
        updateBoundsFromBox(bb, _p.overlayBounds);
      } else {
        updateBoundsFromBox(bb, _p.bodyBounds);
      }
    }
    if (opts.includeLabels) {
      if (opts.includeMainLabels && (!isEdge2 || opts.includeSourceLabels && opts.includeTargetLabels)) {
        updateBoundsFromBox(bb, _p.labelBounds.all);
      } else {
        if (opts.includeMainLabels) {
          updateBoundsFromBox(bb, _p.labelBounds.mainRot);
        }
        if (opts.includeSourceLabels) {
          updateBoundsFromBox(bb, _p.labelBounds.sourceRot);
        }
        if (opts.includeTargetLabels) {
          updateBoundsFromBox(bb, _p.labelBounds.targetRot);
        }
      }
    }
    bb.w = bb.x2 - bb.x1;
    bb.h = bb.y2 - bb.y1;
  }
  return bb;
};
var defBbOpts = {
  includeNodes: true,
  includeEdges: true,
  includeLabels: true,
  includeMainLabels: true,
  includeSourceLabels: true,
  includeTargetLabels: true,
  includeOverlays: true,
  includeUnderlays: true,
  includeOutlines: true,
  useCache: true
};
var defBbOptsKey = getKey(defBbOpts);
var filledBbOpts = defaults$g(defBbOpts);
elesfn$b.boundingBox = function(options2) {
  var bounds2;
  var useCache = options2 === void 0 || options2.useCache === void 0 || options2.useCache === true;
  var isDirty = memoize(function(ele2) {
    var _p = ele2._private;
    return _p.bbCache == null || _p.styleDirty || _p.bbCachePosKey !== getBoundingBoxPosKey(ele2);
  }, function(ele2) {
    return ele2.id();
  });
  if (useCache && this.length === 1 && !isDirty(this[0])) {
    if (options2 === void 0) {
      options2 = defBbOpts;
    } else {
      options2 = filledBbOpts(options2);
    }
    bounds2 = cachedBoundingBoxImpl(this[0], options2);
  } else {
    bounds2 = makeBoundingBox();
    options2 = options2 || defBbOpts;
    var opts = filledBbOpts(options2);
    var eles = this;
    var cy = eles.cy();
    var styleEnabled2 = cy.styleEnabled();
    this.edges().forEach(isDirty);
    this.nodes().forEach(isDirty);
    if (styleEnabled2) {
      this.recalculateRenderedStyle(useCache);
    }
    this.updateCompoundBounds(!useCache);
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      if (isDirty(ele)) {
        ele.dirtyBoundingBoxCache();
      }
      updateBoundsFromBox(bounds2, cachedBoundingBoxImpl(ele, opts));
    }
  }
  bounds2.x1 = noninf(bounds2.x1);
  bounds2.y1 = noninf(bounds2.y1);
  bounds2.x2 = noninf(bounds2.x2);
  bounds2.y2 = noninf(bounds2.y2);
  bounds2.w = noninf(bounds2.x2 - bounds2.x1);
  bounds2.h = noninf(bounds2.y2 - bounds2.y1);
  return bounds2;
};
elesfn$b.dirtyBoundingBoxCache = function() {
  for (var i2 = 0; i2 < this.length; i2++) {
    var _p = this[i2]._private;
    _p.bbCache = null;
    _p.bbCachePosKey = null;
    _p.bodyBounds = null;
    _p.overlayBounds = null;
    _p.labelBounds.all = null;
    _p.labelBounds.source = null;
    _p.labelBounds.target = null;
    _p.labelBounds.main = null;
    _p.labelBounds.sourceRot = null;
    _p.labelBounds.targetRot = null;
    _p.labelBounds.mainRot = null;
    _p.arrowBounds.source = null;
    _p.arrowBounds.target = null;
    _p.arrowBounds["mid-source"] = null;
    _p.arrowBounds["mid-target"] = null;
  }
  this.emitAndNotify("bounds");
  return this;
};
elesfn$b.boundingBoxAt = function(fn3) {
  var nodes3 = this.nodes();
  var cy = this.cy();
  var hasCompoundNodes2 = cy.hasCompoundNodes();
  var parents2 = cy.collection();
  if (hasCompoundNodes2) {
    parents2 = nodes3.filter(function(node) {
      return node.isParent();
    });
    nodes3 = nodes3.not(parents2);
  }
  if (plainObject(fn3)) {
    var obj = fn3;
    fn3 = function fn4() {
      return obj;
    };
  }
  var storeOldPos = function storeOldPos2(node, i2) {
    return node._private.bbAtOldPos = fn3(node, i2);
  };
  var getOldPos = function getOldPos2(node) {
    return node._private.bbAtOldPos;
  };
  cy.startBatch();
  nodes3.forEach(storeOldPos).silentPositions(fn3);
  if (hasCompoundNodes2) {
    parents2.dirtyCompoundBoundsCache();
    parents2.dirtyBoundingBoxCache();
    parents2.updateCompoundBounds(true);
  }
  var bb = copyBoundingBox(this.boundingBox({
    useCache: false
  }));
  nodes3.silentPositions(getOldPos);
  if (hasCompoundNodes2) {
    parents2.dirtyCompoundBoundsCache();
    parents2.dirtyBoundingBoxCache();
    parents2.updateCompoundBounds(true);
  }
  cy.endBatch();
  return bb;
};
fn$3.boundingbox = fn$3.bb = fn$3.boundingBox;
fn$3.renderedBoundingbox = fn$3.renderedBoundingBox;
var bounds = elesfn$b;
var fn$2;
var elesfn$a;
fn$2 = elesfn$a = {};
var defineDimFns = function defineDimFns2(opts) {
  opts.uppercaseName = capitalize(opts.name);
  opts.autoName = "auto" + opts.uppercaseName;
  opts.labelName = "label" + opts.uppercaseName;
  opts.outerName = "outer" + opts.uppercaseName;
  opts.uppercaseOuterName = capitalize(opts.outerName);
  fn$2[opts.name] = function dimImpl() {
    var ele = this[0];
    var _p = ele._private;
    var cy = _p.cy;
    var styleEnabled2 = cy._private.styleEnabled;
    if (ele) {
      if (styleEnabled2) {
        if (ele.isParent()) {
          ele.updateCompoundBounds();
          return _p[opts.autoName] || 0;
        }
        var d2 = ele.pstyle(opts.name);
        switch (d2.strValue) {
          case "label":
            ele.recalculateRenderedStyle();
            return _p.rstyle[opts.labelName] || 0;
          default:
            return d2.pfValue;
        }
      } else {
        return 1;
      }
    }
  };
  fn$2["outer" + opts.uppercaseName] = function outerDimImpl() {
    var ele = this[0];
    var _p = ele._private;
    var cy = _p.cy;
    var styleEnabled2 = cy._private.styleEnabled;
    if (ele) {
      if (styleEnabled2) {
        var dim = ele[opts.name]();
        var borderPos = ele.pstyle("border-position").value;
        var border;
        if (borderPos === "center") {
          border = ele.pstyle("border-width").pfValue;
        } else if (borderPos === "outside") {
          border = 2 * ele.pstyle("border-width").pfValue;
        } else {
          border = 0;
        }
        var padding = 2 * ele.padding();
        return dim + border + padding;
      } else {
        return 1;
      }
    }
  };
  fn$2["rendered" + opts.uppercaseName] = function renderedDimImpl() {
    var ele = this[0];
    if (ele) {
      var d2 = ele[opts.name]();
      return d2 * this.cy().zoom();
    }
  };
  fn$2["rendered" + opts.uppercaseOuterName] = function renderedOuterDimImpl() {
    var ele = this[0];
    if (ele) {
      var od = ele[opts.outerName]();
      return od * this.cy().zoom();
    }
  };
};
defineDimFns({
  name: "width"
});
defineDimFns({
  name: "height"
});
elesfn$a.padding = function() {
  var ele = this[0];
  var _p = ele._private;
  if (ele.isParent()) {
    ele.updateCompoundBounds();
    if (_p.autoPadding !== void 0) {
      return _p.autoPadding;
    } else {
      return ele.pstyle("padding").pfValue;
    }
  } else {
    return ele.pstyle("padding").pfValue;
  }
};
elesfn$a.paddedHeight = function() {
  var ele = this[0];
  return ele.height() + 2 * ele.padding();
};
elesfn$a.paddedWidth = function() {
  var ele = this[0];
  return ele.width() + 2 * ele.padding();
};
var widthHeight = elesfn$a;
var ifEdge = function ifEdge2(ele, getValue2) {
  if (ele.isEdge() && ele.takesUpSpace()) {
    return getValue2(ele);
  }
};
var ifEdgeRenderedPosition = function ifEdgeRenderedPosition2(ele, getPoint) {
  if (ele.isEdge() && ele.takesUpSpace()) {
    var cy = ele.cy();
    return modelToRenderedPosition$1(getPoint(ele), cy.zoom(), cy.pan());
  }
};
var ifEdgeRenderedPositions = function ifEdgeRenderedPositions2(ele, getPoints) {
  if (ele.isEdge() && ele.takesUpSpace()) {
    var cy = ele.cy();
    var pan2 = cy.pan();
    var zoom2 = cy.zoom();
    return getPoints(ele).map(function(p3) {
      return modelToRenderedPosition$1(p3, zoom2, pan2);
    });
  }
};
var controlPoints = function controlPoints2(ele) {
  return ele.renderer().getControlPoints(ele);
};
var segmentPoints = function segmentPoints2(ele) {
  return ele.renderer().getSegmentPoints(ele);
};
var sourceEndpoint = function sourceEndpoint2(ele) {
  return ele.renderer().getSourceEndpoint(ele);
};
var targetEndpoint = function targetEndpoint2(ele) {
  return ele.renderer().getTargetEndpoint(ele);
};
var midpoint = function midpoint2(ele) {
  return ele.renderer().getEdgeMidpoint(ele);
};
var pts = {
  controlPoints: {
    get: controlPoints,
    mult: true
  },
  segmentPoints: {
    get: segmentPoints,
    mult: true
  },
  sourceEndpoint: {
    get: sourceEndpoint
  },
  targetEndpoint: {
    get: targetEndpoint
  },
  midpoint: {
    get: midpoint
  }
};
var renderedName = function renderedName2(name) {
  return "rendered" + name[0].toUpperCase() + name.substr(1);
};
var edgePoints = Object.keys(pts).reduce(function(obj, name) {
  var spec = pts[name];
  var rName = renderedName(name);
  obj[name] = function() {
    return ifEdge(this, spec.get);
  };
  if (spec.mult) {
    obj[rName] = function() {
      return ifEdgeRenderedPositions(this, spec.get);
    };
  } else {
    obj[rName] = function() {
      return ifEdgeRenderedPosition(this, spec.get);
    };
  }
  return obj;
}, {});
var dimensions = extend({}, position, bounds, widthHeight, edgePoints);
var Event = function Event2(src, props) {
  this.recycle(src, props);
};
function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}
Event.prototype = {
  instanceString: function instanceString2() {
    return "event";
  },
  recycle: function recycle(src, props) {
    this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = returnFalse;
    if (src != null && src.preventDefault) {
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
    } else if (src != null && src.type) {
      props = src;
    } else {
      this.type = src;
    }
    if (props != null) {
      this.originalEvent = props.originalEvent;
      this.type = props.type != null ? props.type : this.type;
      this.cy = props.cy;
      this.target = props.target;
      this.position = props.position;
      this.renderedPosition = props.renderedPosition;
      this.namespace = props.namespace;
      this.layout = props.layout;
    }
    if (this.cy != null && this.position != null && this.renderedPosition == null) {
      var pos = this.position;
      var zoom2 = this.cy.zoom();
      var pan2 = this.cy.pan();
      this.renderedPosition = {
        x: pos.x * zoom2 + pan2.x,
        y: pos.y * zoom2 + pan2.y
      };
    }
    this.timeStamp = src && src.timeStamp || Date.now();
  },
  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
    var e2 = this.originalEvent;
    if (!e2) {
      return;
    }
    if (e2.preventDefault) {
      e2.preventDefault();
    }
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
    var e2 = this.originalEvent;
    if (!e2) {
      return;
    }
    if (e2.stopPropagation) {
      e2.stopPropagation();
    }
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};
var eventRegex = /^([^.]+)(\.(?:[^.]+))?$/;
var universalNamespace = ".*";
var defaults$8 = {
  qualifierCompare: function qualifierCompare(q1, q2) {
    return q1 === q2;
  },
  eventMatches: function eventMatches() {
    return true;
  },
  addEventFields: function addEventFields() {
  },
  callbackContext: function callbackContext(context) {
    return context;
  },
  beforeEmit: function beforeEmit() {
  },
  afterEmit: function afterEmit() {
  },
  bubble: function bubble() {
    return false;
  },
  parent: function parent2() {
    return null;
  },
  context: null
};
var defaultsKeys = Object.keys(defaults$8);
var emptyOpts = {};
function Emitter() {
  var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emptyOpts;
  var context = arguments.length > 1 ? arguments[1] : void 0;
  for (var i2 = 0; i2 < defaultsKeys.length; i2++) {
    var key = defaultsKeys[i2];
    this[key] = opts[key] || defaults$8[key];
  }
  this.context = context || this.context;
  this.listeners = [];
  this.emitting = 0;
}
var p = Emitter.prototype;
var forEachEvent = function forEachEvent2(self2, handler, events, qualifier, callback, conf, confOverrides) {
  if (fn$6(qualifier)) {
    callback = qualifier;
    qualifier = null;
  }
  if (confOverrides) {
    if (conf == null) {
      conf = confOverrides;
    } else {
      conf = extend({}, conf, confOverrides);
    }
  }
  var eventList = array(events) ? events : events.split(/\s+/);
  for (var i2 = 0; i2 < eventList.length; i2++) {
    var evt = eventList[i2];
    if (emptyString(evt)) {
      continue;
    }
    var match2 = evt.match(eventRegex);
    if (match2) {
      var type = match2[1];
      var namespace = match2[2] ? match2[2] : null;
      var ret = handler(self2, evt, type, namespace, qualifier, callback, conf);
      if (ret === false) {
        break;
      }
    }
  }
};
var makeEventObj = function makeEventObj2(self2, obj) {
  self2.addEventFields(self2.context, obj);
  return new Event(obj.type, obj);
};
var forEachEventObj = function forEachEventObj2(self2, handler, events) {
  if (event(events)) {
    handler(self2, events);
    return;
  } else if (plainObject(events)) {
    handler(self2, makeEventObj(self2, events));
    return;
  }
  var eventList = array(events) ? events : events.split(/\s+/);
  for (var i2 = 0; i2 < eventList.length; i2++) {
    var evt = eventList[i2];
    if (emptyString(evt)) {
      continue;
    }
    var match2 = evt.match(eventRegex);
    if (match2) {
      var type = match2[1];
      var namespace = match2[2] ? match2[2] : null;
      var eventObj = makeEventObj(self2, {
        type,
        namespace,
        target: self2.context
      });
      handler(self2, eventObj);
    }
  }
};
p.on = p.addListener = function(events, qualifier, callback, conf, confOverrides) {
  forEachEvent(this, function(self2, event3, type, namespace, qualifier2, callback2, conf2) {
    if (fn$6(callback2)) {
      self2.listeners.push({
        event: event3,
        // full event string
        callback: callback2,
        // callback to run
        type,
        // the event type (e.g. 'click')
        namespace,
        // the event namespace (e.g. ".foo")
        qualifier: qualifier2,
        // a restriction on whether to match this emitter
        conf: conf2
        // additional configuration
      });
    }
  }, events, qualifier, callback, conf, confOverrides);
  return this;
};
p.one = function(events, qualifier, callback, conf) {
  return this.on(events, qualifier, callback, conf, {
    one: true
  });
};
p.removeListener = p.off = function(events, qualifier, callback, conf) {
  var _this = this;
  if (this.emitting !== 0) {
    this.listeners = copyArray(this.listeners);
  }
  var listeners = this.listeners;
  var _loop = function _loop2(i3) {
    var listener = listeners[i3];
    forEachEvent(_this, function(self2, event3, type, namespace, qualifier2, callback2) {
      if ((listener.type === type || events === "*") && (!namespace && listener.namespace !== ".*" || listener.namespace === namespace) && (!qualifier2 || self2.qualifierCompare(listener.qualifier, qualifier2)) && (!callback2 || listener.callback === callback2)) {
        listeners.splice(i3, 1);
        return false;
      }
    }, events, qualifier, callback, conf);
  };
  for (var i2 = listeners.length - 1; i2 >= 0; i2--) {
    _loop(i2);
  }
  return this;
};
p.removeAllListeners = function() {
  return this.removeListener("*");
};
p.emit = p.trigger = function(events, extraParams, manualCallback) {
  var listeners = this.listeners;
  var numListenersBeforeEmit = listeners.length;
  this.emitting++;
  if (!array(extraParams)) {
    extraParams = [extraParams];
  }
  forEachEventObj(this, function(self2, eventObj) {
    if (manualCallback != null) {
      listeners = [{
        event: eventObj.event,
        type: eventObj.type,
        namespace: eventObj.namespace,
        callback: manualCallback
      }];
      numListenersBeforeEmit = listeners.length;
    }
    var _loop2 = function _loop22() {
      var listener = listeners[i2];
      if (listener.type === eventObj.type && (!listener.namespace || listener.namespace === eventObj.namespace || listener.namespace === universalNamespace) && self2.eventMatches(self2.context, listener, eventObj)) {
        var args = [eventObj];
        if (extraParams != null) {
          push(args, extraParams);
        }
        self2.beforeEmit(self2.context, listener, eventObj);
        if (listener.conf && listener.conf.one) {
          self2.listeners = self2.listeners.filter(function(l2) {
            return l2 !== listener;
          });
        }
        var context = self2.callbackContext(self2.context, listener, eventObj);
        var ret = listener.callback.apply(context, args);
        self2.afterEmit(self2.context, listener, eventObj);
        if (ret === false) {
          eventObj.stopPropagation();
          eventObj.preventDefault();
        }
      }
    };
    for (var i2 = 0; i2 < numListenersBeforeEmit; i2++) {
      _loop2();
    }
    if (self2.bubble(self2.context) && !eventObj.isPropagationStopped()) {
      self2.parent(self2.context).emit(eventObj, extraParams);
    }
  }, events);
  this.emitting--;
  return this;
};
var emitterOptions$1 = {
  qualifierCompare: function qualifierCompare2(selector1, selector2) {
    if (selector1 == null || selector2 == null) {
      return selector1 == null && selector2 == null;
    } else {
      return selector1.sameText(selector2);
    }
  },
  eventMatches: function eventMatches2(ele, listener, eventObj) {
    var selector = listener.qualifier;
    if (selector != null) {
      return ele !== eventObj.target && element(eventObj.target) && selector.matches(eventObj.target);
    }
    return true;
  },
  addEventFields: function addEventFields2(ele, evt) {
    evt.cy = ele.cy();
    evt.target = ele;
  },
  callbackContext: function callbackContext2(ele, listener, eventObj) {
    return listener.qualifier != null ? eventObj.target : ele;
  },
  beforeEmit: function beforeEmit2(context, listener) {
    if (listener.conf && listener.conf.once) {
      listener.conf.onceCollection.removeListener(listener.event, listener.qualifier, listener.callback);
    }
  },
  bubble: function bubble2() {
    return true;
  },
  parent: function parent3(ele) {
    return ele.isChild() ? ele.parent() : ele.cy();
  }
};
var argSelector$1 = function argSelector(arg) {
  if (string(arg)) {
    return new Selector(arg);
  } else {
    return arg;
  }
};
var elesfn$9 = {
  createEmitter: function createEmitter() {
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      var _p = ele._private;
      if (!_p.emitter) {
        _p.emitter = new Emitter(emitterOptions$1, ele);
      }
    }
    return this;
  },
  emitter: function emitter() {
    return this._private.emitter;
  },
  on: function on(events, selector, callback) {
    var argSel = argSelector$1(selector);
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().on(events, argSel, callback);
    }
    return this;
  },
  removeListener: function removeListener(events, selector, callback) {
    var argSel = argSelector$1(selector);
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().removeListener(events, argSel, callback);
    }
    return this;
  },
  removeAllListeners: function removeAllListeners() {
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().removeAllListeners();
    }
    return this;
  },
  one: function one(events, selector, callback) {
    var argSel = argSelector$1(selector);
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().one(events, argSel, callback);
    }
    return this;
  },
  once: function once(events, selector, callback) {
    var argSel = argSelector$1(selector);
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().on(events, argSel, callback, {
        once: true,
        onceCollection: this
      });
    }
  },
  emit: function emit(events, extraParams) {
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      ele.emitter().emit(events, extraParams);
    }
    return this;
  },
  emitAndNotify: function emitAndNotify(event3, extraParams) {
    if (this.length === 0) {
      return;
    }
    this.cy().notify(event3, this);
    this.emit(event3, extraParams);
    return this;
  }
};
define.eventAliasesOn(elesfn$9);
var elesfn$8 = {
  nodes: function nodes(selector) {
    return this.filter(function(ele) {
      return ele.isNode();
    }).filter(selector);
  },
  edges: function edges(selector) {
    return this.filter(function(ele) {
      return ele.isEdge();
    }).filter(selector);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function byGroup() {
    var nodes3 = this.spawn();
    var edges3 = this.spawn();
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      if (ele.isNode()) {
        nodes3.push(ele);
      } else {
        edges3.push(ele);
      }
    }
    return {
      nodes: nodes3,
      edges: edges3
    };
  },
  filter: function filter3(_filter, thisArg) {
    if (_filter === void 0) {
      return this;
    } else if (string(_filter) || elementOrCollection(_filter)) {
      return new Selector(_filter).filter(this);
    } else if (fn$6(_filter)) {
      var filterEles = this.spawn();
      var eles = this;
      for (var i2 = 0; i2 < eles.length; i2++) {
        var ele = eles[i2];
        var include = thisArg ? _filter.apply(thisArg, [ele, i2, eles]) : _filter(ele, i2, eles);
        if (include) {
          filterEles.push(ele);
        }
      }
      return filterEles;
    }
    return this.spawn();
  },
  not: function not(toRemove) {
    if (!toRemove) {
      return this;
    } else {
      if (string(toRemove)) {
        toRemove = this.filter(toRemove);
      }
      var elements = this.spawn();
      for (var i2 = 0; i2 < this.length; i2++) {
        var element3 = this[i2];
        var remove2 = toRemove.has(element3);
        if (!remove2) {
          elements.push(element3);
        }
      }
      return elements;
    }
  },
  absoluteComplement: function absoluteComplement() {
    var cy = this.cy();
    return cy.mutableElements().not(this);
  },
  intersect: function intersect(other) {
    if (string(other)) {
      var selector = other;
      return this.filter(selector);
    }
    var elements = this.spawn();
    var col1 = this;
    var col2 = other;
    var col1Smaller = this.length < other.length;
    var colS = col1Smaller ? col1 : col2;
    var colL = col1Smaller ? col2 : col1;
    for (var i2 = 0; i2 < colS.length; i2++) {
      var ele = colS[i2];
      if (colL.has(ele)) {
        elements.push(ele);
      }
    }
    return elements;
  },
  xor: function xor(other) {
    var cy = this._private.cy;
    if (string(other)) {
      other = cy.$(other);
    }
    var elements = this.spawn();
    var col1 = this;
    var col2 = other;
    var add3 = function add4(col, other2) {
      for (var i2 = 0; i2 < col.length; i2++) {
        var ele = col[i2];
        var id2 = ele._private.data.id;
        var inOther = other2.hasElementWithId(id2);
        if (!inOther) {
          elements.push(ele);
        }
      }
    };
    add3(col1, col2);
    add3(col2, col1);
    return elements;
  },
  diff: function diff(other) {
    var cy = this._private.cy;
    if (string(other)) {
      other = cy.$(other);
    }
    var left = this.spawn();
    var right = this.spawn();
    var both = this.spawn();
    var col1 = this;
    var col2 = other;
    var add3 = function add4(col, other2, retEles) {
      for (var i2 = 0; i2 < col.length; i2++) {
        var ele = col[i2];
        var id2 = ele._private.data.id;
        var inOther = other2.hasElementWithId(id2);
        if (inOther) {
          both.merge(ele);
        } else {
          retEles.push(ele);
        }
      }
    };
    add3(col1, col2, left);
    add3(col2, col1, right);
    return {
      left,
      right,
      both
    };
  },
  add: function add(toAdd) {
    var cy = this._private.cy;
    if (!toAdd) {
      return this;
    }
    if (string(toAdd)) {
      var selector = toAdd;
      toAdd = cy.mutableElements().filter(selector);
    }
    var elements = this.spawnSelf();
    for (var i2 = 0; i2 < toAdd.length; i2++) {
      var ele = toAdd[i2];
      var add3 = !this.has(ele);
      if (add3) {
        elements.push(ele);
      }
    }
    return elements;
  },
  // in place merge on calling collection
  merge: function merge(toAdd) {
    var _p = this._private;
    var cy = _p.cy;
    if (!toAdd) {
      return this;
    }
    if (toAdd && string(toAdd)) {
      var selector = toAdd;
      toAdd = cy.mutableElements().filter(selector);
    }
    var map2 = _p.map;
    for (var i2 = 0; i2 < toAdd.length; i2++) {
      var toAddEle = toAdd[i2];
      var id2 = toAddEle._private.data.id;
      var add3 = !map2.has(id2);
      if (add3) {
        var index = this.length++;
        this[index] = toAddEle;
        map2.set(id2, {
          ele: toAddEle,
          index
        });
      }
    }
    return this;
  },
  unmergeAt: function unmergeAt(i2) {
    var ele = this[i2];
    var id2 = ele.id();
    var _p = this._private;
    var map2 = _p.map;
    this[i2] = void 0;
    map2["delete"](id2);
    var unmergedLastEle = i2 === this.length - 1;
    if (this.length > 1 && !unmergedLastEle) {
      var lastEleI = this.length - 1;
      var lastEle = this[lastEleI];
      var lastEleId = lastEle._private.data.id;
      this[lastEleI] = void 0;
      this[i2] = lastEle;
      map2.set(lastEleId, {
        ele: lastEle,
        index: i2
      });
    }
    this.length--;
    return this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function unmergeOne(ele) {
    ele = ele[0];
    var _p = this._private;
    var id2 = ele._private.data.id;
    var map2 = _p.map;
    var entry = map2.get(id2);
    if (!entry) {
      return this;
    }
    var i2 = entry.index;
    this.unmergeAt(i2);
    return this;
  },
  // remove eles in place on calling collection
  unmerge: function unmerge(toRemove) {
    var cy = this._private.cy;
    if (!toRemove) {
      return this;
    }
    if (toRemove && string(toRemove)) {
      var selector = toRemove;
      toRemove = cy.mutableElements().filter(selector);
    }
    for (var i2 = 0; i2 < toRemove.length; i2++) {
      this.unmergeOne(toRemove[i2]);
    }
    return this;
  },
  unmergeBy: function unmergeBy(toRmFn) {
    for (var i2 = this.length - 1; i2 >= 0; i2--) {
      var ele = this[i2];
      if (toRmFn(ele)) {
        this.unmergeAt(i2);
      }
    }
    return this;
  },
  map: function map(mapFn, thisArg) {
    var arr = [];
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      var ret = thisArg ? mapFn.apply(thisArg, [ele, i2, eles]) : mapFn(ele, i2, eles);
      arr.push(ret);
    }
    return arr;
  },
  reduce: function reduce(fn3, initialValue) {
    var val = initialValue;
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      val = fn3(val, eles[i2], i2, eles);
    }
    return val;
  },
  max: function max4(valFn, thisArg) {
    var max5 = -Infinity;
    var maxEle;
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      var val = thisArg ? valFn.apply(thisArg, [ele, i2, eles]) : valFn(ele, i2, eles);
      if (val > max5) {
        max5 = val;
        maxEle = ele;
      }
    }
    return {
      value: max5,
      ele: maxEle
    };
  },
  min: function min3(valFn, thisArg) {
    var min4 = Infinity;
    var minEle;
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      var val = thisArg ? valFn.apply(thisArg, [ele, i2, eles]) : valFn(ele, i2, eles);
      if (val < min4) {
        min4 = val;
        minEle = ele;
      }
    }
    return {
      value: min4,
      ele: minEle
    };
  }
};
var fn$1 = elesfn$8;
fn$1["u"] = fn$1["|"] = fn$1["+"] = fn$1.union = fn$1.or = fn$1.add;
fn$1["\\"] = fn$1["!"] = fn$1["-"] = fn$1.difference = fn$1.relativeComplement = fn$1.subtract = fn$1.not;
fn$1["n"] = fn$1["&"] = fn$1["."] = fn$1.and = fn$1.intersection = fn$1.intersect;
fn$1["^"] = fn$1["(+)"] = fn$1["(-)"] = fn$1.symmetricDifference = fn$1.symdiff = fn$1.xor;
fn$1.fnFilter = fn$1.filterFn = fn$1.stdFilter = fn$1.filter;
fn$1.complement = fn$1.abscomp = fn$1.absoluteComplement;
var elesfn$7 = {
  isNode: function isNode() {
    return this.group() === "nodes";
  },
  isEdge: function isEdge() {
    return this.group() === "edges";
  },
  isLoop: function isLoop() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function isSimple() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function group() {
    var ele = this[0];
    if (ele) {
      return ele._private.group;
    }
  }
};
var zIndexSort = function zIndexSort2(a2, b2) {
  var cy = a2.cy();
  var hasCompoundNodes2 = cy.hasCompoundNodes();
  function getDepth(ele) {
    var style3 = ele.pstyle("z-compound-depth");
    if (style3.value === "auto") {
      return hasCompoundNodes2 ? ele.zDepth() : 0;
    } else if (style3.value === "bottom") {
      return -1;
    } else if (style3.value === "top") {
      return MAX_INT$1;
    }
    return 0;
  }
  var depthDiff = getDepth(a2) - getDepth(b2);
  if (depthDiff !== 0) {
    return depthDiff;
  }
  function getEleDepth(ele) {
    var style3 = ele.pstyle("z-index-compare");
    if (style3.value === "auto") {
      return ele.isNode() ? 1 : 0;
    }
    return 0;
  }
  var eleDiff = getEleDepth(a2) - getEleDepth(b2);
  if (eleDiff !== 0) {
    return eleDiff;
  }
  var zDiff = a2.pstyle("z-index").value - b2.pstyle("z-index").value;
  if (zDiff !== 0) {
    return zDiff;
  }
  return a2.poolIndex() - b2.poolIndex();
};
var elesfn$6 = {
  forEach: function forEach(fn3, thisArg) {
    if (fn$6(fn3)) {
      var N = this.length;
      for (var i2 = 0; i2 < N; i2++) {
        var ele = this[i2];
        var ret = thisArg ? fn3.apply(thisArg, [ele, i2, this]) : fn3(ele, i2, this);
        if (ret === false) {
          break;
        }
      }
    }
    return this;
  },
  toArray: function toArray() {
    var array3 = [];
    for (var i2 = 0; i2 < this.length; i2++) {
      array3.push(this[i2]);
    }
    return array3;
  },
  slice: function slice(start, end) {
    var array3 = [];
    var thisSize = this.length;
    if (end == null) {
      end = thisSize;
    }
    if (start == null) {
      start = 0;
    }
    if (start < 0) {
      start = thisSize + start;
    }
    if (end < 0) {
      end = thisSize + end;
    }
    for (var i2 = start; i2 >= 0 && i2 < end && i2 < thisSize; i2++) {
      array3.push(this[i2]);
    }
    return this.spawn(array3);
  },
  size: function size() {
    return this.length;
  },
  eq: function eq(i2) {
    return this[i2] || this.spawn();
  },
  first: function first() {
    return this[0] || this.spawn();
  },
  last: function last() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function empty() {
    return this.length === 0;
  },
  nonempty: function nonempty() {
    return !this.empty();
  },
  sort: function sort(sortFn) {
    if (!fn$6(sortFn)) {
      return this;
    }
    var sorted = this.toArray().sort(sortFn);
    return this.spawn(sorted);
  },
  sortByZIndex: function sortByZIndex() {
    return this.sort(zIndexSort);
  },
  zDepth: function zDepth() {
    var ele = this[0];
    if (!ele) {
      return void 0;
    }
    var _p = ele._private;
    var group2 = _p.group;
    if (group2 === "nodes") {
      var depth = _p.data.parent ? ele.parents().size() : 0;
      if (!ele.isParent()) {
        return MAX_INT$1 - 1;
      }
      return depth;
    } else {
      var src = _p.source;
      var tgt = _p.target;
      var srcDepth = src.zDepth();
      var tgtDepth = tgt.zDepth();
      return Math.max(srcDepth, tgtDepth, 0);
    }
  }
};
elesfn$6.each = elesfn$6.forEach;
var defineSymbolIterator = function defineSymbolIterator2() {
  var typeofUndef = "undefined";
  var isIteratorSupported = (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) != typeofUndef && _typeof(Symbol.iterator) != typeofUndef;
  if (isIteratorSupported) {
    elesfn$6[Symbol.iterator] = function() {
      var _this = this;
      var entry = {
        value: void 0,
        done: false
      };
      var i2 = 0;
      var length = this.length;
      return _defineProperty$1({
        next: function next() {
          if (i2 < length) {
            entry.value = _this[i2++];
          } else {
            entry.value = void 0;
            entry.done = true;
          }
          return entry;
        }
      }, Symbol.iterator, function() {
        return this;
      });
    };
  }
};
defineSymbolIterator();
var getLayoutDimensionOptions = defaults$g({
  nodeDimensionsIncludeLabels: false
});
var elesfn$5 = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function layoutDimensions(options2) {
    options2 = getLayoutDimensionOptions(options2);
    var dims;
    if (!this.takesUpSpace()) {
      dims = {
        w: 0,
        h: 0
      };
    } else if (options2.nodeDimensionsIncludeLabels) {
      var bbDim = this.boundingBox();
      dims = {
        w: bbDim.w,
        h: bbDim.h
      };
    } else {
      dims = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    }
    if (dims.w === 0 || dims.h === 0) {
      dims.w = dims.h = 1;
    }
    return dims;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function layoutPositions(layout4, options2, fn3) {
    var nodes3 = this.nodes().filter(function(n) {
      return !n.isParent();
    });
    var cy = this.cy();
    var layoutEles = options2.eles;
    var getMemoizeKey = function getMemoizeKey2(node2) {
      return node2.id();
    };
    var fnMem = memoize(fn3, getMemoizeKey);
    layout4.emit({
      type: "layoutstart",
      layout: layout4
    });
    layout4.animations = [];
    var calculateSpacing = function calculateSpacing2(spacing, nodesBb, pos) {
      var center2 = {
        x: nodesBb.x1 + nodesBb.w / 2,
        y: nodesBb.y1 + nodesBb.h / 2
      };
      var spacingVector = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (pos.x - center2.x) * spacing,
        y: (pos.y - center2.y) * spacing
      };
      return {
        x: center2.x + spacingVector.x,
        y: center2.y + spacingVector.y
      };
    };
    var useSpacingFactor = options2.spacingFactor && options2.spacingFactor !== 1;
    var spacingBb = function spacingBb2() {
      if (!useSpacingFactor) {
        return null;
      }
      var bb2 = makeBoundingBox();
      for (var i3 = 0; i3 < nodes3.length; i3++) {
        var node2 = nodes3[i3];
        var pos = fnMem(node2, i3);
        expandBoundingBoxByPoint(bb2, pos.x, pos.y);
      }
      return bb2;
    };
    var bb = spacingBb();
    var getFinalPos = memoize(function(node2, i3) {
      var newPos2 = fnMem(node2, i3);
      if (useSpacingFactor) {
        var spacing = Math.abs(options2.spacingFactor);
        newPos2 = calculateSpacing(spacing, bb, newPos2);
      }
      if (options2.transform != null) {
        newPos2 = options2.transform(node2, newPos2);
      }
      return newPos2;
    }, getMemoizeKey);
    if (options2.animate) {
      for (var i2 = 0; i2 < nodes3.length; i2++) {
        var node = nodes3[i2];
        var newPos = getFinalPos(node, i2);
        var animateNode = options2.animateFilter == null || options2.animateFilter(node, i2);
        if (animateNode) {
          var ani = node.animation({
            position: newPos,
            duration: options2.animationDuration,
            easing: options2.animationEasing
          });
          layout4.animations.push(ani);
        } else {
          node.position(newPos);
        }
      }
      if (options2.fit) {
        var fitAni = cy.animation({
          fit: {
            boundingBox: layoutEles.boundingBoxAt(getFinalPos),
            padding: options2.padding
          },
          duration: options2.animationDuration,
          easing: options2.animationEasing
        });
        layout4.animations.push(fitAni);
      } else if (options2.zoom !== void 0 && options2.pan !== void 0) {
        var zoomPanAni = cy.animation({
          zoom: options2.zoom,
          pan: options2.pan,
          duration: options2.animationDuration,
          easing: options2.animationEasing
        });
        layout4.animations.push(zoomPanAni);
      }
      layout4.animations.forEach(function(ani2) {
        return ani2.play();
      });
      layout4.one("layoutready", options2.ready);
      layout4.emit({
        type: "layoutready",
        layout: layout4
      });
      Promise$1.all(layout4.animations.map(function(ani2) {
        return ani2.promise();
      })).then(function() {
        layout4.one("layoutstop", options2.stop);
        layout4.emit({
          type: "layoutstop",
          layout: layout4
        });
      });
    } else {
      nodes3.positions(getFinalPos);
      if (options2.fit) {
        cy.fit(options2.eles, options2.padding);
      }
      if (options2.zoom != null) {
        cy.zoom(options2.zoom);
      }
      if (options2.pan) {
        cy.pan(options2.pan);
      }
      layout4.one("layoutready", options2.ready);
      layout4.emit({
        type: "layoutready",
        layout: layout4
      });
      layout4.one("layoutstop", options2.stop);
      layout4.emit({
        type: "layoutstop",
        layout: layout4
      });
    }
    return this;
  },
  layout: function layout(options2) {
    var cy = this.cy();
    return cy.makeLayout(extend({}, options2, {
      eles: this
    }));
  }
};
elesfn$5.createLayout = elesfn$5.makeLayout = elesfn$5.layout;
function styleCache(key, fn3, ele) {
  var _p = ele._private;
  var cache3 = _p.styleCache = _p.styleCache || [];
  var val;
  if ((val = cache3[key]) != null) {
    return val;
  } else {
    val = cache3[key] = fn3(ele);
    return val;
  }
}
function cacheStyleFunction(key, fn3) {
  key = hashString(key);
  return function cachedStyleFunction(ele) {
    return styleCache(key, fn3, ele);
  };
}
function cachePrototypeStyleFunction(key, fn3) {
  key = hashString(key);
  var selfFn = function selfFn2(ele) {
    return fn3.call(ele);
  };
  return function cachedPrototypeStyleFunction() {
    var ele = this[0];
    if (ele) {
      return styleCache(key, selfFn, ele);
    }
  };
}
var elesfn$4 = {
  recalculateRenderedStyle: function recalculateRenderedStyle(useCache) {
    var cy = this.cy();
    var renderer3 = cy.renderer();
    var styleEnabled2 = cy.styleEnabled();
    if (renderer3 && styleEnabled2) {
      renderer3.recalculateRenderedStyle(this, useCache);
    }
    return this;
  },
  dirtyStyleCache: function dirtyStyleCache() {
    var cy = this.cy();
    var dirty = function dirty2(ele) {
      return ele._private.styleCache = null;
    };
    if (cy.hasCompoundNodes()) {
      var eles;
      eles = this.spawnSelf().merge(this.descendants()).merge(this.parents());
      eles.merge(eles.connectedEdges());
      eles.forEach(dirty);
    } else {
      this.forEach(function(ele) {
        dirty(ele);
        ele.connectedEdges().forEach(dirty);
      });
    }
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function updateStyle(notifyRenderer) {
    var cy = this._private.cy;
    if (!cy.styleEnabled()) {
      return this;
    }
    if (cy.batching()) {
      var bEles = cy._private.batchStyleEles;
      bEles.merge(this);
      return this;
    }
    var hasCompounds = cy.hasCompoundNodes();
    var updatedEles = this;
    notifyRenderer = notifyRenderer || notifyRenderer === void 0 ? true : false;
    if (hasCompounds) {
      updatedEles = this.spawnSelf().merge(this.descendants()).merge(this.parents());
    }
    var changedEles = updatedEles;
    if (notifyRenderer) {
      changedEles.emitAndNotify("style");
    } else {
      changedEles.emit("style");
    }
    updatedEles.forEach(function(ele) {
      return ele._private.styleDirty = true;
    });
    return this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function cleanStyle() {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return;
    }
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      if (ele._private.styleDirty) {
        ele._private.styleDirty = false;
        cy.style().apply(ele);
      }
    }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function parsedStyle(property) {
    var includeNonDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var ele = this[0];
    var cy = ele.cy();
    if (!cy.styleEnabled()) {
      return;
    }
    if (ele) {
      if (ele._private.styleDirty) {
        ele._private.styleDirty = false;
        cy.style().apply(ele);
      }
      var overriddenStyle = ele._private.style[property];
      if (overriddenStyle != null) {
        return overriddenStyle;
      } else if (includeNonDefault) {
        return cy.style().getDefaultProperty(property);
      } else {
        return null;
      }
    }
  },
  numericStyle: function numericStyle(property) {
    var ele = this[0];
    if (!ele.cy().styleEnabled()) {
      return;
    }
    if (ele) {
      var pstyle = ele.pstyle(property);
      return pstyle.pfValue !== void 0 ? pstyle.pfValue : pstyle.value;
    }
  },
  numericStyleUnits: function numericStyleUnits(property) {
    var ele = this[0];
    if (!ele.cy().styleEnabled()) {
      return;
    }
    if (ele) {
      return ele.pstyle(property).units;
    }
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function renderedStyle(property) {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return this;
    }
    var ele = this[0];
    if (ele) {
      return cy.style().getRenderedStyle(ele, property);
    }
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function style(name, value) {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return this;
    }
    var updateTransitions = false;
    var style3 = cy.style();
    if (plainObject(name)) {
      var props = name;
      style3.applyBypass(this, props, updateTransitions);
      this.emitAndNotify("style");
    } else if (string(name)) {
      if (value === void 0) {
        var ele = this[0];
        if (ele) {
          return style3.getStylePropertyValue(ele, name);
        } else {
          return;
        }
      } else {
        style3.applyBypass(this, name, value, updateTransitions);
        this.emitAndNotify("style");
      }
    } else if (name === void 0) {
      var _ele = this[0];
      if (_ele) {
        return style3.getRawStyle(_ele);
      } else {
        return;
      }
    }
    return this;
  },
  removeStyle: function removeStyle(names) {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return this;
    }
    var updateTransitions = false;
    var style3 = cy.style();
    var eles = this;
    if (names === void 0) {
      for (var i2 = 0; i2 < eles.length; i2++) {
        var ele = eles[i2];
        style3.removeAllBypasses(ele, updateTransitions);
      }
    } else {
      names = names.split(/\s+/);
      for (var _i = 0; _i < eles.length; _i++) {
        var _ele2 = eles[_i];
        style3.removeBypasses(_ele2, names, updateTransitions);
      }
    }
    this.emitAndNotify("style");
    return this;
  },
  show: function show() {
    this.css("display", "element");
    return this;
  },
  hide: function hide() {
    this.css("display", "none");
    return this;
  },
  effectiveOpacity: function effectiveOpacity() {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return 1;
    }
    var hasCompoundNodes2 = cy.hasCompoundNodes();
    var ele = this[0];
    if (ele) {
      var _p = ele._private;
      var parentOpacity = ele.pstyle("opacity").value;
      if (!hasCompoundNodes2) {
        return parentOpacity;
      }
      var parents2 = !_p.data.parent ? null : ele.parents();
      if (parents2) {
        for (var i2 = 0; i2 < parents2.length; i2++) {
          var parent4 = parents2[i2];
          var opacity = parent4.pstyle("opacity").value;
          parentOpacity = opacity * parentOpacity;
        }
      }
      return parentOpacity;
    }
  },
  transparent: function transparent() {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return false;
    }
    var ele = this[0];
    var hasCompoundNodes2 = ele.cy().hasCompoundNodes();
    if (ele) {
      if (!hasCompoundNodes2) {
        return ele.pstyle("opacity").value === 0;
      } else {
        return ele.effectiveOpacity() === 0;
      }
    }
  },
  backgrounding: function backgrounding() {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return false;
    }
    var ele = this[0];
    return ele._private.backgrounding ? true : false;
  }
};
function checkCompound(ele, parentOk) {
  var _p = ele._private;
  var parents2 = _p.data.parent ? ele.parents() : null;
  if (parents2) {
    for (var i2 = 0; i2 < parents2.length; i2++) {
      var parent4 = parents2[i2];
      if (!parentOk(parent4)) {
        return false;
      }
    }
  }
  return true;
}
function defineDerivedStateFunction(specs) {
  var ok = specs.ok;
  var edgeOkViaNode = specs.edgeOkViaNode || specs.ok;
  var parentOk = specs.parentOk || specs.ok;
  return function() {
    var cy = this.cy();
    if (!cy.styleEnabled()) {
      return true;
    }
    var ele = this[0];
    var hasCompoundNodes2 = cy.hasCompoundNodes();
    if (ele) {
      var _p = ele._private;
      if (!ok(ele)) {
        return false;
      }
      if (ele.isNode()) {
        return !hasCompoundNodes2 || checkCompound(ele, parentOk);
      } else {
        var src = _p.source;
        var tgt = _p.target;
        return edgeOkViaNode(src) && (!hasCompoundNodes2 || checkCompound(src, edgeOkViaNode)) && (src === tgt || edgeOkViaNode(tgt) && (!hasCompoundNodes2 || checkCompound(tgt, edgeOkViaNode)));
      }
    }
  };
}
var eleTakesUpSpace = cacheStyleFunction("eleTakesUpSpace", function(ele) {
  return ele.pstyle("display").value === "element" && ele.width() !== 0 && (ele.isNode() ? ele.height() !== 0 : true);
});
elesfn$4.takesUpSpace = cachePrototypeStyleFunction("takesUpSpace", defineDerivedStateFunction({
  ok: eleTakesUpSpace
}));
var eleInteractive = cacheStyleFunction("eleInteractive", function(ele) {
  return ele.pstyle("events").value === "yes" && ele.pstyle("visibility").value === "visible" && eleTakesUpSpace(ele);
});
var parentInteractive = cacheStyleFunction("parentInteractive", function(parent4) {
  return parent4.pstyle("visibility").value === "visible" && eleTakesUpSpace(parent4);
});
elesfn$4.interactive = cachePrototypeStyleFunction("interactive", defineDerivedStateFunction({
  ok: eleInteractive,
  parentOk: parentInteractive,
  edgeOkViaNode: eleTakesUpSpace
}));
elesfn$4.noninteractive = function() {
  var ele = this[0];
  if (ele) {
    return !ele.interactive();
  }
};
var eleVisible = cacheStyleFunction("eleVisible", function(ele) {
  return ele.pstyle("visibility").value === "visible" && ele.pstyle("opacity").pfValue !== 0 && eleTakesUpSpace(ele);
});
var edgeVisibleViaNode = eleTakesUpSpace;
elesfn$4.visible = cachePrototypeStyleFunction("visible", defineDerivedStateFunction({
  ok: eleVisible,
  edgeOkViaNode: edgeVisibleViaNode
}));
elesfn$4.hidden = function() {
  var ele = this[0];
  if (ele) {
    return !ele.visible();
  }
};
elesfn$4.isBundledBezier = cachePrototypeStyleFunction("isBundledBezier", function() {
  if (!this.cy().styleEnabled()) {
    return false;
  }
  return !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace();
});
elesfn$4.bypass = elesfn$4.css = elesfn$4.style;
elesfn$4.renderedCss = elesfn$4.renderedStyle;
elesfn$4.removeBypass = elesfn$4.removeCss = elesfn$4.removeStyle;
elesfn$4.pstyle = elesfn$4.parsedStyle;
var elesfn$3 = {};
function defineSwitchFunction(params) {
  return function() {
    var args = arguments;
    var changedEles = [];
    if (args.length === 2) {
      var data4 = args[0];
      var handler = args[1];
      this.on(params.event, data4, handler);
    } else if (args.length === 1 && fn$6(args[0])) {
      var _handler = args[0];
      this.on(params.event, _handler);
    } else if (args.length === 0 || args.length === 1 && array(args[0])) {
      var addlEvents = args.length === 1 ? args[0] : null;
      for (var i2 = 0; i2 < this.length; i2++) {
        var ele = this[i2];
        var able = !params.ableField || ele._private[params.ableField];
        var changed = ele._private[params.field] != params.value;
        if (params.overrideAble) {
          var overrideAble2 = params.overrideAble(ele);
          if (overrideAble2 !== void 0) {
            able = overrideAble2;
            if (!overrideAble2) {
              return this;
            }
          }
        }
        if (able) {
          ele._private[params.field] = params.value;
          if (changed) {
            changedEles.push(ele);
          }
        }
      }
      var changedColl = this.spawn(changedEles);
      changedColl.updateStyle();
      changedColl.emit(params.event);
      if (addlEvents) {
        changedColl.emit(addlEvents);
      }
    }
    return this;
  };
}
function defineSwitchSet(params) {
  elesfn$3[params.field] = function() {
    var ele = this[0];
    if (ele) {
      if (params.overrideField) {
        var val = params.overrideField(ele);
        if (val !== void 0) {
          return val;
        }
      }
      return ele._private[params.field];
    }
  };
  elesfn$3[params.on] = defineSwitchFunction({
    event: params.on,
    field: params.field,
    ableField: params.ableField,
    overrideAble: params.overrideAble,
    value: true
  });
  elesfn$3[params.off] = defineSwitchFunction({
    event: params.off,
    field: params.field,
    ableField: params.ableField,
    overrideAble: params.overrideAble,
    value: false
  });
}
defineSwitchSet({
  field: "locked",
  overrideField: function overrideField(ele) {
    return ele.cy().autolock() ? true : void 0;
  },
  on: "lock",
  off: "unlock"
});
defineSwitchSet({
  field: "grabbable",
  overrideField: function overrideField2(ele) {
    return ele.cy().autoungrabify() || ele.pannable() ? false : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
defineSwitchSet({
  field: "selected",
  ableField: "selectable",
  overrideAble: function overrideAble(ele) {
    return ele.cy().autounselectify() ? false : void 0;
  },
  on: "select",
  off: "unselect"
});
defineSwitchSet({
  field: "selectable",
  overrideField: function overrideField3(ele) {
    return ele.cy().autounselectify() ? false : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
elesfn$3.deselect = elesfn$3.unselect;
elesfn$3.grabbed = function() {
  var ele = this[0];
  if (ele) {
    return ele._private.grabbed;
  }
};
defineSwitchSet({
  field: "active",
  on: "activate",
  off: "unactivate"
});
defineSwitchSet({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
elesfn$3.inactive = function() {
  var ele = this[0];
  if (ele) {
    return !ele._private.active;
  }
};
var elesfn$2 = {};
var defineDagExtremity = function defineDagExtremity2(params) {
  return function dagExtremityImpl(selector) {
    var eles = this;
    var ret = [];
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      if (!ele.isNode()) {
        continue;
      }
      var disqualified = false;
      var edges3 = ele.connectedEdges();
      for (var j = 0; j < edges3.length; j++) {
        var edge = edges3[j];
        var src = edge.source();
        var tgt = edge.target();
        if (params.noIncomingEdges && tgt === ele && src !== ele || params.noOutgoingEdges && src === ele && tgt !== ele) {
          disqualified = true;
          break;
        }
      }
      if (!disqualified) {
        ret.push(ele);
      }
    }
    return this.spawn(ret, true).filter(selector);
  };
};
var defineDagOneHop = function defineDagOneHop2(params) {
  return function(selector) {
    var eles = this;
    var oEles = [];
    for (var i2 = 0; i2 < eles.length; i2++) {
      var ele = eles[i2];
      if (!ele.isNode()) {
        continue;
      }
      var edges3 = ele.connectedEdges();
      for (var j = 0; j < edges3.length; j++) {
        var edge = edges3[j];
        var src = edge.source();
        var tgt = edge.target();
        if (params.outgoing && src === ele) {
          oEles.push(edge);
          oEles.push(tgt);
        } else if (params.incoming && tgt === ele) {
          oEles.push(edge);
          oEles.push(src);
        }
      }
    }
    return this.spawn(oEles, true).filter(selector);
  };
};
var defineDagAllHops = function defineDagAllHops2(params) {
  return function(selector) {
    var eles = this;
    var sEles = [];
    var sElesIds = {};
    for (; ; ) {
      var next = params.outgoing ? eles.outgoers() : eles.incomers();
      if (next.length === 0) {
        break;
      }
      var newNext = false;
      for (var i2 = 0; i2 < next.length; i2++) {
        var n = next[i2];
        var nid = n.id();
        if (!sElesIds[nid]) {
          sElesIds[nid] = true;
          sEles.push(n);
          newNext = true;
        }
      }
      if (!newNext) {
        break;
      }
      eles = next;
    }
    return this.spawn(sEles, true).filter(selector);
  };
};
elesfn$2.clearTraversalCache = function() {
  for (var i2 = 0; i2 < this.length; i2++) {
    this[i2]._private.traversalCache = null;
  }
};
extend(elesfn$2, {
  // get the root nodes in the DAG
  roots: defineDagExtremity({
    noIncomingEdges: true
  }),
  // get the leaf nodes in the DAG
  leaves: defineDagExtremity({
    noOutgoingEdges: true
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: cache(defineDagOneHop({
    outgoing: true
  }), "outgoers"),
  // aka DAG descendants
  successors: defineDagAllHops({
    outgoing: true
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: cache(defineDagOneHop({
    incoming: true
  }), "incomers"),
  // aka DAG ancestors
  predecessors: defineDagAllHops({})
});
extend(elesfn$2, {
  neighborhood: cache(function(selector) {
    var elements = [];
    var nodes3 = this.nodes();
    for (var i2 = 0; i2 < nodes3.length; i2++) {
      var node = nodes3[i2];
      var connectedEdges = node.connectedEdges();
      for (var j = 0; j < connectedEdges.length; j++) {
        var edge = connectedEdges[j];
        var src = edge.source();
        var tgt = edge.target();
        var otherNode = node === src ? tgt : src;
        if (otherNode.length > 0) {
          elements.push(otherNode[0]);
        }
        elements.push(edge[0]);
      }
    }
    return this.spawn(elements, true).filter(selector);
  }, "neighborhood"),
  closedNeighborhood: function closedNeighborhood(selector) {
    return this.neighborhood().add(this).filter(selector);
  },
  openNeighborhood: function openNeighborhood(selector) {
    return this.neighborhood(selector);
  }
});
elesfn$2.neighbourhood = elesfn$2.neighborhood;
elesfn$2.closedNeighbourhood = elesfn$2.closedNeighborhood;
elesfn$2.openNeighbourhood = elesfn$2.openNeighborhood;
extend(elesfn$2, {
  source: cache(function sourceImpl(selector) {
    var ele = this[0];
    var src;
    if (ele) {
      src = ele._private.source || ele.cy().collection();
    }
    return src && selector ? src.filter(selector) : src;
  }, "source"),
  target: cache(function targetImpl(selector) {
    var ele = this[0];
    var tgt;
    if (ele) {
      tgt = ele._private.target || ele.cy().collection();
    }
    return tgt && selector ? tgt.filter(selector) : tgt;
  }, "target"),
  sources: defineSourceFunction({
    attr: "source"
  }),
  targets: defineSourceFunction({
    attr: "target"
  })
});
function defineSourceFunction(params) {
  return function sourceImpl2(selector) {
    var sources = [];
    for (var i2 = 0; i2 < this.length; i2++) {
      var ele = this[i2];
      var src = ele._private[params.attr];
      if (src) {
        sources.push(src);
      }
    }
    return this.spawn(sources, true).filter(selector);
  };
}
extend(elesfn$2, {
  edgesWith: cache(defineEdgesWithFunction(), "edgesWith"),
  edgesTo: cache(defineEdgesWithFunction({
    thisIsSrc: true
  }), "edgesTo")
});
function defineEdgesWithFunction(params) {
  return function edgesWithImpl(otherNodes) {
    var elements = [];
    var cy = this._private.cy;
    var p3 = params || {};
    if (string(otherNodes)) {
      otherNodes = cy.$(otherNodes);
    }
    for (var h2 = 0; h2 < otherNodes.length; h2++) {
      var edges3 = otherNodes[h2]._private.edges;
      for (var i2 = 0; i2 < edges3.length; i2++) {
        var edge = edges3[i2];
        var edgeData = edge._private.data;
        var thisToOther = this.hasElementWithId(edgeData.source) && otherNodes.hasElementWithId(edgeData.target);
        var otherToThis = otherNodes.hasElementWithId(edgeData.source) && this.hasElementWithId(edgeData.target);
        var edgeConnectsThisAndOther = thisToOther || otherToThis;
        if (!edgeConnectsThisAndOther) {
          continue;
        }
        if (p3.thisIsSrc || p3.thisIsTgt) {
          if (p3.thisIsSrc && !thisToOther) {
            continue;
          }
          if (p3.thisIsTgt && !otherToThis) {
            continue;
          }
        }
        elements.push(edge);
      }
    }
    return this.spawn(elements, true);
  };
}
extend(elesfn$2, {
  connectedEdges: cache(function(selector) {
    var retEles = [];
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      var node = eles[i2];
      if (!node.isNode()) {
        continue;
      }
      var edges3 = node._private.edges;
      for (var j = 0; j < edges3.length; j++) {
        var edge = edges3[j];
        retEles.push(edge);
      }
    }
    return this.spawn(retEles, true).filter(selector);
  }, "connectedEdges"),
  connectedNodes: cache(function(selector) {
    var retEles = [];
    var eles = this;
    for (var i2 = 0; i2 < eles.length; i2++) {
      var edge = eles[i2];
      if (!edge.isEdge()) {
        continue;
      }
      retEles.push(edge.source()[0]);
      retEles.push(edge.target()[0]);
    }
    return this.spawn(retEles, true).filter(selector);
  }, "connectedNodes"),
  parallelEdges: cache(defineParallelEdgesFunction(), "parallelEdges"),
  codirectedEdges: cache(defineParallelEdgesFunction({
    codirected: true
  }), "codirectedEdges")
});
function defineParallelEdgesFunction(params) {
  var defaults3 = {
    codirected: false
  };
  params = extend({}, defaults3, params);
  return function parallelEdgesImpl(selector) {
    var elements = [];
    var edges3 = this.edges();
    var p3 = params;
    for (var i2 = 0; i2 < edges3.length; i2++) {
      var edge1 = edges3[i2];
      var edge1_p = edge1._private;
      var src1 = edge1_p.source;
      var srcid1 = src1._private.data.id;
      var tgtid1 = edge1_p.data.target;
      var srcEdges1 = src1._private.edges;
      for (var j = 0; j < srcEdges1.length; j++) {
        var edge2 = srcEdges1[j];
        var edge2data = edge2._private.data;
        var tgtid2 = edge2data.target;
        var srcid2 = edge2data.source;
        var codirected = tgtid2 === tgtid1 && srcid2 === srcid1;
        var oppdirected = srcid1 === tgtid2 && tgtid1 === srcid2;
        if (p3.codirected && codirected || !p3.codirected && (codirected || oppdirected)) {
          elements.push(edge2);
        }
      }
    }
    return this.spawn(elements, true).filter(selector);
  };
}
extend(elesfn$2, {
  components: function components(root) {
    var self2 = this;
    var cy = self2.cy();
    var visited = cy.collection();
    var unvisited = root == null ? self2.nodes() : root.nodes();
    var components2 = [];
    if (root != null && unvisited.empty()) {
      unvisited = root.sources();
    }
    var visitInComponent = function visitInComponent2(node, component2) {
      visited.merge(node);
      unvisited.unmerge(node);
      component2.merge(node);
    };
    if (unvisited.empty()) {
      return self2.spawn();
    }
    var _loop = function _loop2() {
      var cmpt = cy.collection();
      components2.push(cmpt);
      var root2 = unvisited[0];
      visitInComponent(root2, cmpt);
      self2.bfs({
        directed: false,
        roots: root2,
        visit: function visit(v) {
          return visitInComponent(v, cmpt);
        }
      });
      cmpt.forEach(function(node) {
        node.connectedEdges().forEach(function(e2) {
          if (self2.has(e2) && cmpt.has(e2.source()) && cmpt.has(e2.target())) {
            cmpt.merge(e2);
          }
        });
      });
    };
    do {
      _loop();
    } while (unvisited.length > 0);
    return components2;
  },
  component: function component() {
    var ele = this[0];
    return ele.cy().mutableElements().components(ele)[0];
  }
});
elesfn$2.componentsOf = elesfn$2.components;
var Collection = function Collection2(cy, elements) {
  var unique = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var removed = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (cy === void 0) {
    error("A collection must have a reference to the core");
    return;
  }
  var map2 = new Map$1();
  var createdElements = false;
  if (!elements) {
    elements = [];
  } else if (elements.length > 0 && plainObject(elements[0]) && !element(elements[0])) {
    createdElements = true;
    var eles = [];
    var elesIds = new Set$1();
    for (var i2 = 0, l2 = elements.length; i2 < l2; i2++) {
      var json2 = elements[i2];
      if (json2.data == null) {
        json2.data = {};
      }
      var _data = json2.data;
      if (_data.id == null) {
        _data.id = uuid();
      } else if (cy.hasElementWithId(_data.id) || elesIds.has(_data.id)) {
        continue;
      }
      var ele = new Element(cy, json2, false);
      eles.push(ele);
      elesIds.add(_data.id);
    }
    elements = eles;
  }
  this.length = 0;
  for (var _i = 0, _l = elements.length; _i < _l; _i++) {
    var element$1 = elements[_i][0];
    if (element$1 == null) {
      continue;
    }
    var id2 = element$1._private.data.id;
    if (!unique || !map2.has(id2)) {
      if (unique) {
        map2.set(id2, {
          index: this.length,
          ele: element$1
        });
      }
      this[this.length] = element$1;
      this.length++;
    }
  }
  this._private = {
    eles: this,
    cy,
    get map() {
      if (this.lazyMap == null) {
        this.rebuildMap();
      }
      return this.lazyMap;
    },
    set map(m2) {
      this.lazyMap = m2;
    },
    rebuildMap: function rebuildMap() {
      var m2 = this.lazyMap = new Map$1();
      var eles2 = this.eles;
      for (var _i2 = 0; _i2 < eles2.length; _i2++) {
        var _ele = eles2[_i2];
        m2.set(_ele.id(), {
          index: _i2,
          ele: _ele
        });
      }
    }
  };
  if (unique) {
    this._private.map = map2;
  }
  if (createdElements && !removed) {
    this.restore();
  }
};
var elesfn$1 = Element.prototype = Collection.prototype = Object.create(Array.prototype);
elesfn$1.instanceString = function() {
  return "collection";
};
elesfn$1.spawn = function(eles, unique) {
  return new Collection(this.cy(), eles, unique);
};
elesfn$1.spawnSelf = function() {
  return this.spawn(this);
};
elesfn$1.cy = function() {
  return this._private.cy;
};
elesfn$1.renderer = function() {
  return this._private.cy.renderer();
};
elesfn$1.element = function() {
  return this[0];
};
elesfn$1.collection = function() {
  if (collection(this)) {
    return this;
  } else {
    return new Collection(this._private.cy, [this]);
  }
};
elesfn$1.unique = function() {
  return new Collection(this._private.cy, this, true);
};
elesfn$1.hasElementWithId = function(id2) {
  id2 = "" + id2;
  return this._private.map.has(id2);
};
elesfn$1.getElementById = function(id2) {
  id2 = "" + id2;
  var cy = this._private.cy;
  var entry = this._private.map.get(id2);
  return entry ? entry.ele : new Collection(cy);
};
elesfn$1.$id = elesfn$1.getElementById;
elesfn$1.poolIndex = function() {
  var cy = this._private.cy;
  var eles = cy._private.elements;
  var id2 = this[0]._private.data.id;
  return eles._private.map.get(id2).index;
};
elesfn$1.indexOf = function(ele) {
  var id2 = ele[0]._private.data.id;
  return this._private.map.get(id2).index;
};
elesfn$1.indexOfId = function(id2) {
  id2 = "" + id2;
  return this._private.map.get(id2).index;
};
elesfn$1.json = function(obj) {
  var ele = this.element();
  var cy = this.cy();
  if (ele == null && obj) {
    return this;
  }
  if (ele == null) {
    return void 0;
  }
  var p3 = ele._private;
  if (plainObject(obj)) {
    cy.startBatch();
    if (obj.data) {
      ele.data(obj.data);
      var _data2 = p3.data;
      if (ele.isEdge()) {
        var move = false;
        var spec = {};
        var src = obj.data.source;
        var tgt = obj.data.target;
        if (src != null && src != _data2.source) {
          spec.source = "" + src;
          move = true;
        }
        if (tgt != null && tgt != _data2.target) {
          spec.target = "" + tgt;
          move = true;
        }
        if (move) {
          ele = ele.move(spec);
        }
      } else {
        var newParentValSpecd = "parent" in obj.data;
        var parent4 = obj.data.parent;
        if (newParentValSpecd && (parent4 != null || _data2.parent != null) && parent4 != _data2.parent) {
          if (parent4 === void 0) {
            parent4 = null;
          }
          if (parent4 != null) {
            parent4 = "" + parent4;
          }
          ele = ele.move({
            parent: parent4
          });
        }
      }
    }
    if (obj.position) {
      ele.position(obj.position);
    }
    var checkSwitch = function checkSwitch2(k, trueFnName, falseFnName) {
      var obj_k = obj[k];
      if (obj_k != null && obj_k !== p3[k]) {
        if (obj_k) {
          ele[trueFnName]();
        } else {
          ele[falseFnName]();
        }
      }
    };
    checkSwitch("removed", "remove", "restore");
    checkSwitch("selected", "select", "unselect");
    checkSwitch("selectable", "selectify", "unselectify");
    checkSwitch("locked", "lock", "unlock");
    checkSwitch("grabbable", "grabify", "ungrabify");
    checkSwitch("pannable", "panify", "unpanify");
    if (obj.classes != null) {
      ele.classes(obj.classes);
    }
    cy.endBatch();
    return this;
  } else if (obj === void 0) {
    var json2 = {
      data: copy(p3.data),
      position: copy(p3.position),
      group: p3.group,
      removed: p3.removed,
      selected: p3.selected,
      selectable: p3.selectable,
      locked: p3.locked,
      grabbable: p3.grabbable,
      pannable: p3.pannable,
      classes: null
    };
    json2.classes = "";
    var i2 = 0;
    p3.classes.forEach(function(cls) {
      return json2.classes += i2++ === 0 ? cls : " " + cls;
    });
    return json2;
  }
};
elesfn$1.jsons = function() {
  var jsons = [];
  for (var i2 = 0; i2 < this.length; i2++) {
    var ele = this[i2];
    var json2 = ele.json();
    jsons.push(json2);
  }
  return jsons;
};
elesfn$1.clone = function() {
  var cy = this.cy();
  var elesArr = [];
  for (var i2 = 0; i2 < this.length; i2++) {
    var ele = this[i2];
    var json2 = ele.json();
    var clone3 = new Element(cy, json2, false);
    elesArr.push(clone3);
  }
  return new Collection(cy, elesArr);
};
elesfn$1.copy = elesfn$1.clone;
elesfn$1.restore = function() {
  var notifyRenderer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var addToPool2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var self2 = this;
  var cy = self2.cy();
  var cy_p = cy._private;
  var nodes3 = [];
  var edges3 = [];
  var elements;
  for (var _i3 = 0, l2 = self2.length; _i3 < l2; _i3++) {
    var ele = self2[_i3];
    if (addToPool2 && !ele.removed()) {
      continue;
    }
    if (ele.isNode()) {
      nodes3.push(ele);
    } else {
      edges3.push(ele);
    }
  }
  elements = nodes3.concat(edges3);
  var i2;
  var removeFromElements = function removeFromElements2() {
    elements.splice(i2, 1);
    i2--;
  };
  for (i2 = 0; i2 < elements.length; i2++) {
    var _ele2 = elements[i2];
    var _private = _ele2._private;
    var _data3 = _private.data;
    _ele2.clearTraversalCache();
    if (!addToPool2 && !_private.removed) ;
    else if (_data3.id === void 0) {
      _data3.id = uuid();
    } else if (number$1(_data3.id)) {
      _data3.id = "" + _data3.id;
    } else if (emptyString(_data3.id) || !string(_data3.id)) {
      error("Can not create element with invalid string ID `" + _data3.id + "`");
      removeFromElements();
      continue;
    } else if (cy.hasElementWithId(_data3.id)) {
      error("Can not create second element with ID `" + _data3.id + "`");
      removeFromElements();
      continue;
    }
    var id2 = _data3.id;
    if (_ele2.isNode()) {
      var pos = _private.position;
      if (pos.x == null) {
        pos.x = 0;
      }
      if (pos.y == null) {
        pos.y = 0;
      }
    }
    if (_ele2.isEdge()) {
      var edge = _ele2;
      var fields = ["source", "target"];
      var fieldsLength = fields.length;
      var badSourceOrTarget = false;
      for (var j = 0; j < fieldsLength; j++) {
        var field = fields[j];
        var val = _data3[field];
        if (number$1(val)) {
          val = _data3[field] = "" + _data3[field];
        }
        if (val == null || val === "") {
          error("Can not create edge `" + id2 + "` with unspecified " + field);
          badSourceOrTarget = true;
        } else if (!cy.hasElementWithId(val)) {
          error("Can not create edge `" + id2 + "` with nonexistant " + field + " `" + val + "`");
          badSourceOrTarget = true;
        }
      }
      if (badSourceOrTarget) {
        removeFromElements();
        continue;
      }
      var src = cy.getElementById(_data3.source);
      var tgt = cy.getElementById(_data3.target);
      if (src.same(tgt)) {
        src._private.edges.push(edge);
      } else {
        src._private.edges.push(edge);
        tgt._private.edges.push(edge);
      }
      edge._private.source = src;
      edge._private.target = tgt;
    }
    _private.map = new Map$1();
    _private.map.set(id2, {
      ele: _ele2,
      index: 0
    });
    _private.removed = false;
    if (addToPool2) {
      cy.addToPool(_ele2);
    }
  }
  for (var _i4 = 0; _i4 < nodes3.length; _i4++) {
    var node = nodes3[_i4];
    var _data4 = node._private.data;
    if (number$1(_data4.parent)) {
      _data4.parent = "" + _data4.parent;
    }
    var parentId = _data4.parent;
    var specifiedParent = parentId != null;
    if (specifiedParent || node._private.parent) {
      var parent4 = node._private.parent ? cy.collection().merge(node._private.parent) : cy.getElementById(parentId);
      if (parent4.empty()) {
        _data4.parent = void 0;
      } else if (parent4[0].removed()) {
        warn("Node added with missing parent, reference to parent removed");
        _data4.parent = void 0;
        node._private.parent = null;
      } else {
        var selfAsParent = false;
        var ancestor = parent4;
        while (!ancestor.empty()) {
          if (node.same(ancestor)) {
            selfAsParent = true;
            _data4.parent = void 0;
            break;
          }
          ancestor = ancestor.parent();
        }
        if (!selfAsParent) {
          parent4[0]._private.children.push(node);
          node._private.parent = parent4[0];
          cy_p.hasCompoundNodes = true;
        }
      }
    }
  }
  if (elements.length > 0) {
    var restored = elements.length === self2.length ? self2 : new Collection(cy, elements);
    for (var _i5 = 0; _i5 < restored.length; _i5++) {
      var _ele3 = restored[_i5];
      if (_ele3.isNode()) {
        continue;
      }
      _ele3.parallelEdges().clearTraversalCache();
      _ele3.source().clearTraversalCache();
      _ele3.target().clearTraversalCache();
    }
    var toUpdateStyle;
    if (cy_p.hasCompoundNodes) {
      toUpdateStyle = cy.collection().merge(restored).merge(restored.connectedNodes()).merge(restored.parent());
    } else {
      toUpdateStyle = restored;
    }
    toUpdateStyle.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(notifyRenderer);
    if (notifyRenderer) {
      restored.emitAndNotify("add");
    } else if (addToPool2) {
      restored.emit("add");
    }
  }
  return self2;
};
elesfn$1.removed = function() {
  var ele = this[0];
  return ele && ele._private.removed;
};
elesfn$1.inside = function() {
  var ele = this[0];
  return ele && !ele._private.removed;
};
elesfn$1.remove = function() {
  var notifyRenderer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var removeFromPool2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var self2 = this;
  var elesToRemove = [];
  var elesToRemoveIds = {};
  var cy = self2._private.cy;
  function addConnectedEdges(node) {
    var edges3 = node._private.edges;
    for (var i3 = 0; i3 < edges3.length; i3++) {
      add3(edges3[i3]);
    }
  }
  function addChildren2(node) {
    var children = node._private.children;
    for (var i3 = 0; i3 < children.length; i3++) {
      add3(children[i3]);
    }
  }
  function add3(ele2) {
    var alreadyAdded = elesToRemoveIds[ele2.id()];
    if (removeFromPool2 && ele2.removed() || alreadyAdded) {
      return;
    } else {
      elesToRemoveIds[ele2.id()] = true;
    }
    if (ele2.isNode()) {
      elesToRemove.push(ele2);
      addConnectedEdges(ele2);
      addChildren2(ele2);
    } else {
      elesToRemove.unshift(ele2);
    }
  }
  for (var i2 = 0, l2 = self2.length; i2 < l2; i2++) {
    var ele = self2[i2];
    add3(ele);
  }
  function removeEdgeRef(node, edge) {
    var connectedEdges = node._private.edges;
    removeFromArray(connectedEdges, edge);
    node.clearTraversalCache();
  }
  function removeParallelRef(pllEdge2) {
    pllEdge2.clearTraversalCache();
  }
  var alteredParents = [];
  alteredParents.ids = {};
  function removeChildRef(parent5, ele2) {
    ele2 = ele2[0];
    parent5 = parent5[0];
    var children = parent5._private.children;
    var pid = parent5.id();
    removeFromArray(children, ele2);
    ele2._private.parent = null;
    if (!alteredParents.ids[pid]) {
      alteredParents.ids[pid] = true;
      alteredParents.push(parent5);
    }
  }
  self2.dirtyCompoundBoundsCache();
  if (removeFromPool2) {
    cy.removeFromPool(elesToRemove);
  }
  for (var _i6 = 0; _i6 < elesToRemove.length; _i6++) {
    var _ele4 = elesToRemove[_i6];
    if (_ele4.isEdge()) {
      var src = _ele4.source()[0];
      var tgt = _ele4.target()[0];
      removeEdgeRef(src, _ele4);
      removeEdgeRef(tgt, _ele4);
      var pllEdges = _ele4.parallelEdges();
      for (var j = 0; j < pllEdges.length; j++) {
        var pllEdge = pllEdges[j];
        removeParallelRef(pllEdge);
        if (pllEdge.isBundledBezier()) {
          pllEdge.dirtyBoundingBoxCache();
        }
      }
    } else {
      var parent4 = _ele4.parent();
      if (parent4.length !== 0) {
        removeChildRef(parent4, _ele4);
      }
    }
    if (removeFromPool2) {
      _ele4._private.removed = true;
    }
  }
  var elesStillInside = cy._private.elements;
  cy._private.hasCompoundNodes = false;
  for (var _i7 = 0; _i7 < elesStillInside.length; _i7++) {
    var _ele5 = elesStillInside[_i7];
    if (_ele5.isParent()) {
      cy._private.hasCompoundNodes = true;
      break;
    }
  }
  var removedElements = new Collection(this.cy(), elesToRemove);
  if (removedElements.size() > 0) {
    if (notifyRenderer) {
      removedElements.emitAndNotify("remove");
    } else if (removeFromPool2) {
      removedElements.emit("remove");
    }
  }
  for (var _i8 = 0; _i8 < alteredParents.length; _i8++) {
    var _ele6 = alteredParents[_i8];
    if (!removeFromPool2 || !_ele6.removed()) {
      _ele6.updateStyle();
    }
  }
  return removedElements;
};
elesfn$1.move = function(struct) {
  var cy = this._private.cy;
  var eles = this;
  var notifyRenderer = false;
  var modifyPool = false;
  var toString3 = function toString4(id2) {
    return id2 == null ? id2 : "" + id2;
  };
  if (struct.source !== void 0 || struct.target !== void 0) {
    var srcId = toString3(struct.source);
    var tgtId = toString3(struct.target);
    var srcExists = srcId != null && cy.hasElementWithId(srcId);
    var tgtExists = tgtId != null && cy.hasElementWithId(tgtId);
    if (srcExists || tgtExists) {
      cy.batch(function() {
        eles.remove(notifyRenderer, modifyPool);
        eles.emitAndNotify("moveout");
        for (var i2 = 0; i2 < eles.length; i2++) {
          var ele = eles[i2];
          var _data5 = ele._private.data;
          if (ele.isEdge()) {
            if (srcExists) {
              _data5.source = srcId;
            }
            if (tgtExists) {
              _data5.target = tgtId;
            }
          }
        }
        eles.restore(notifyRenderer, modifyPool);
      });
      eles.emitAndNotify("move");
    }
  } else if (struct.parent !== void 0) {
    var parentId = toString3(struct.parent);
    var parentExists = parentId === null || cy.hasElementWithId(parentId);
    if (parentExists) {
      var pidToAssign = parentId === null ? void 0 : parentId;
      cy.batch(function() {
        var updated = eles.remove(notifyRenderer, modifyPool);
        updated.emitAndNotify("moveout");
        for (var i2 = 0; i2 < eles.length; i2++) {
          var ele = eles[i2];
          var _data6 = ele._private.data;
          if (ele.isNode()) {
            _data6.parent = pidToAssign;
          }
        }
        updated.restore(notifyRenderer, modifyPool);
      });
      eles.emitAndNotify("move");
    }
  }
  return this;
};
[elesfn$j, elesfn$i, elesfn$h, elesfn$g, elesfn$f, data3, elesfn$d, dimensions, elesfn$9, elesfn$8, elesfn$7, elesfn$6, elesfn$5, elesfn$4, elesfn$3, elesfn$2].forEach(function(props) {
  extend(elesfn$1, props);
});
var corefn$9 = {
  add: function add2(opts) {
    var elements;
    var cy = this;
    if (elementOrCollection(opts)) {
      var eles = opts;
      if (eles._private.cy === cy) {
        elements = eles.restore();
      } else {
        var jsons = [];
        for (var i2 = 0; i2 < eles.length; i2++) {
          var ele = eles[i2];
          jsons.push(ele.json());
        }
        elements = new Collection(cy, jsons);
      }
    } else if (array(opts)) {
      var _jsons = opts;
      elements = new Collection(cy, _jsons);
    } else if (plainObject(opts) && (array(opts.nodes) || array(opts.edges))) {
      var elesByGroup = opts;
      var _jsons2 = [];
      var grs = ["nodes", "edges"];
      for (var _i = 0, il = grs.length; _i < il; _i++) {
        var group2 = grs[_i];
        var elesArray = elesByGroup[group2];
        if (array(elesArray)) {
          for (var j = 0, jl = elesArray.length; j < jl; j++) {
            var json2 = extend({
              group: group2
            }, elesArray[j]);
            _jsons2.push(json2);
          }
        }
      }
      elements = new Collection(cy, _jsons2);
    } else {
      var _json = opts;
      elements = new Element(cy, _json).collection();
    }
    return elements;
  },
  remove: function remove(collection4) {
    if (elementOrCollection(collection4)) ;
    else if (string(collection4)) {
      var selector = collection4;
      collection4 = this.$(selector);
    }
    return collection4.remove();
  }
};
function generateCubicBezier(mX1, mY1, mX2, mY2) {
  var NEWTON_ITERATIONS = 4, NEWTON_MIN_SLOPE = 1e-3, SUBDIVISION_PRECISION = 1e-7, SUBDIVISION_MAX_ITERATIONS = 10, kSplineTableSize = 11, kSampleStepSize = 1 / (kSplineTableSize - 1), float32ArraySupported = typeof Float32Array !== "undefined";
  if (arguments.length !== 4) {
    return false;
  }
  for (var i2 = 0; i2 < 4; ++i2) {
    if (typeof arguments[i2] !== "number" || isNaN(arguments[i2]) || !isFinite(arguments[i2])) {
      return false;
    }
  }
  mX1 = Math.min(mX1, 1);
  mX2 = Math.min(mX2, 1);
  mX1 = Math.max(mX1, 0);
  mX2 = Math.max(mX2, 0);
  var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function newtonRaphsonIterate(aX, aGuessT) {
    for (var _i = 0; _i < NEWTON_ITERATIONS; ++_i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function calcSampleValues() {
    for (var _i2 = 0; _i2 < kSplineTableSize; ++_i2) {
      mSampleValues[_i2] = calcBezier(_i2 * kSampleStepSize, mX1, mX2);
    }
  }
  function binarySubdivide(aX, aA, aB) {
    var currentX, currentT, i3 = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i3 < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function getTForX(aX) {
    var intervalStart = 0, currentSample = 1, lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist3 = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]), guessForT = intervalStart + dist3 * kSampleStepSize, initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
    }
  }
  var _precomputed = false;
  function precompute() {
    _precomputed = true;
    if (mX1 !== mY1 || mX2 !== mY2) {
      calcSampleValues();
    }
  }
  var f2 = function f3(aX) {
    if (!_precomputed) {
      precompute();
    }
    if (mX1 === mY1 && mX2 === mY2) {
      return aX;
    }
    if (aX === 0) {
      return 0;
    }
    if (aX === 1) {
      return 1;
    }
    return calcBezier(getTForX(aX), mY1, mY2);
  };
  f2.getControlPoints = function() {
    return [{
      x: mX1,
      y: mY1
    }, {
      x: mX2,
      y: mY2
    }];
  };
  var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
  f2.toString = function() {
    return str;
  };
  return f2;
}
var generateSpringRK4 = /* @__PURE__ */ (function() {
  function springAccelerationForState(state) {
    return -state.tension * state.x - state.friction * state.v;
  }
  function springEvaluateStateWithDerivative(initialState, dt, derivative) {
    var state = {
      x: initialState.x + derivative.dx * dt,
      v: initialState.v + derivative.dv * dt,
      tension: initialState.tension,
      friction: initialState.friction
    };
    return {
      dx: state.v,
      dv: springAccelerationForState(state)
    };
  }
  function springIntegrateState(state, dt) {
    var a2 = {
      dx: state.v,
      dv: springAccelerationForState(state)
    }, b2 = springEvaluateStateWithDerivative(state, dt * 0.5, a2), c2 = springEvaluateStateWithDerivative(state, dt * 0.5, b2), d2 = springEvaluateStateWithDerivative(state, dt, c2), dxdt = 1 / 6 * (a2.dx + 2 * (b2.dx + c2.dx) + d2.dx), dvdt = 1 / 6 * (a2.dv + 2 * (b2.dv + c2.dv) + d2.dv);
    state.x = state.x + dxdt * dt;
    state.v = state.v + dvdt * dt;
    return state;
  }
  return function springRK4Factory(tension, friction, duration) {
    var initState = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, path = [0], time_lapsed = 0, tolerance = 1 / 1e4, DT = 16 / 1e3, have_duration, dt, last_state;
    tension = parseFloat(tension) || 500;
    friction = parseFloat(friction) || 20;
    duration = duration || null;
    initState.tension = tension;
    initState.friction = friction;
    have_duration = duration !== null;
    if (have_duration) {
      time_lapsed = springRK4Factory(tension, friction);
      dt = time_lapsed / duration * DT;
    } else {
      dt = DT;
    }
    for (; ; ) {
      last_state = springIntegrateState(last_state || initState, dt);
      path.push(1 + last_state.x);
      time_lapsed += 16;
      if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
        break;
      }
    }
    return !have_duration ? time_lapsed : function(percentComplete) {
      return path[percentComplete * (path.length - 1) | 0];
    };
  };
})();
var cubicBezier = function cubicBezier2(t1, p1, t2, p22) {
  var bezier = generateCubicBezier(t1, p1, t2, p22);
  return function(start, end, percent) {
    return start + (end - start) * bezier(percent);
  };
};
var easings = {
  "linear": function linear(start, end, percent) {
    return start + (end - start) * percent;
  },
  // default easings
  "ease": cubicBezier(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier(0.42, 0, 1, 1),
  "ease-out": cubicBezier(0, 0, 0.58, 1),
  "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": cubicBezier(0.47, 0, 0.745, 0.715),
  "ease-out-sine": cubicBezier(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": cubicBezier(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": cubicBezier(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": cubicBezier(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": cubicBezier(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": cubicBezier(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": cubicBezier(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": cubicBezier(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": cubicBezier(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": cubicBezier(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": cubicBezier(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": cubicBezier(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": cubicBezier(0.23, 1, 0.32, 1),
  "ease-in-out-quint": cubicBezier(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": cubicBezier(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": cubicBezier(0.19, 1, 0.22, 1),
  "ease-in-out-expo": cubicBezier(1, 0, 0, 1),
  // circ
  "ease-in-circ": cubicBezier(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": cubicBezier(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": cubicBezier(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  "spring": function spring(tension, friction, duration) {
    if (duration === 0) {
      return easings.linear;
    }
    var spring2 = generateSpringRK4(tension, friction, duration);
    return function(start, end, percent) {
      return start + (end - start) * spring2(percent);
    };
  },
  "cubic-bezier": cubicBezier
};
function getEasedValue(type, start, end, percent, easingFn) {
  if (percent === 1) {
    return end;
  }
  if (start === end) {
    return end;
  }
  var val = easingFn(start, end, percent);
  if (type == null) {
    return val;
  }
  if (type.roundValue || type.color) {
    val = Math.round(val);
  }
  if (type.min !== void 0) {
    val = Math.max(val, type.min);
  }
  if (type.max !== void 0) {
    val = Math.min(val, type.max);
  }
  return val;
}
function getValue(prop, spec) {
  if (prop.pfValue != null || prop.value != null) {
    if (prop.pfValue != null && (spec == null || spec.type.units !== "%")) {
      return prop.pfValue;
    } else {
      return prop.value;
    }
  } else {
    return prop;
  }
}
function ease(startProp, endProp, percent, easingFn, propSpec) {
  var type = propSpec != null ? propSpec.type : null;
  if (percent < 0) {
    percent = 0;
  } else if (percent > 1) {
    percent = 1;
  }
  var start = getValue(startProp, propSpec);
  var end = getValue(endProp, propSpec);
  if (number$1(start) && number$1(end)) {
    return getEasedValue(type, start, end, percent, easingFn);
  } else if (array(start) && array(end)) {
    var easedArr = [];
    for (var i2 = 0; i2 < end.length; i2++) {
      var si = start[i2];
      var ei = end[i2];
      if (si != null && ei != null) {
        var val = getEasedValue(type, si, ei, percent, easingFn);
        easedArr.push(val);
      } else {
        easedArr.push(ei);
      }
    }
    return easedArr;
  }
  return void 0;
}
function step$1(self2, ani, now, isCore) {
  var isEles = !isCore;
  var _p = self2._private;
  var ani_p = ani._private;
  var pEasing = ani_p.easing;
  var startTime = ani_p.startTime;
  var cy = isCore ? self2 : self2.cy();
  var style3 = cy.style();
  if (!ani_p.easingImpl) {
    if (pEasing == null) {
      ani_p.easingImpl = easings["linear"];
    } else {
      var easingVals;
      if (string(pEasing)) {
        var easingProp = style3.parse("transition-timing-function", pEasing);
        easingVals = easingProp.value;
      } else {
        easingVals = pEasing;
      }
      var name, args;
      if (string(easingVals)) {
        name = easingVals;
        args = [];
      } else {
        name = easingVals[1];
        args = easingVals.slice(2).map(function(n) {
          return +n;
        });
      }
      if (args.length > 0) {
        if (name === "spring") {
          args.push(ani_p.duration);
        }
        ani_p.easingImpl = easings[name].apply(null, args);
      } else {
        ani_p.easingImpl = easings[name];
      }
    }
  }
  var easing = ani_p.easingImpl;
  var percent;
  if (ani_p.duration === 0) {
    percent = 1;
  } else {
    percent = (now - startTime) / ani_p.duration;
  }
  if (ani_p.applying) {
    percent = ani_p.progress;
  }
  if (percent < 0) {
    percent = 0;
  } else if (percent > 1) {
    percent = 1;
  }
  if (ani_p.delay == null) {
    var startPos = ani_p.startPosition;
    var endPos = ani_p.position;
    if (endPos && isEles && !self2.locked()) {
      var newPos = {};
      if (valid(startPos.x, endPos.x)) {
        newPos.x = ease(startPos.x, endPos.x, percent, easing);
      }
      if (valid(startPos.y, endPos.y)) {
        newPos.y = ease(startPos.y, endPos.y, percent, easing);
      }
      self2.position(newPos);
    }
    var startPan = ani_p.startPan;
    var endPan = ani_p.pan;
    var pan2 = _p.pan;
    var animatingPan = endPan != null && isCore;
    if (animatingPan) {
      if (valid(startPan.x, endPan.x)) {
        pan2.x = ease(startPan.x, endPan.x, percent, easing);
      }
      if (valid(startPan.y, endPan.y)) {
        pan2.y = ease(startPan.y, endPan.y, percent, easing);
      }
      self2.emit("pan");
    }
    var startZoom = ani_p.startZoom;
    var endZoom = ani_p.zoom;
    var animatingZoom = endZoom != null && isCore;
    if (animatingZoom) {
      if (valid(startZoom, endZoom)) {
        _p.zoom = bound(_p.minZoom, ease(startZoom, endZoom, percent, easing), _p.maxZoom);
      }
      self2.emit("zoom");
    }
    if (animatingPan || animatingZoom) {
      self2.emit("viewport");
    }
    var props = ani_p.style;
    if (props && props.length > 0 && isEles) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var prop = props[i2];
        var _name = prop.name;
        var end = prop;
        var start = ani_p.startStyle[_name];
        var propSpec = style3.properties[start.name];
        var easedVal = ease(start, end, percent, easing, propSpec);
        style3.overrideBypass(self2, _name, easedVal);
      }
      self2.emit("style");
    }
  }
  ani_p.progress = percent;
  return percent;
}
function valid(start, end) {
  if (start == null || end == null) {
    return false;
  }
  if (number$1(start) && number$1(end)) {
    return true;
  } else if (start && end) {
    return true;
  }
  return false;
}
function startAnimation(self2, ani, now, isCore) {
  var ani_p = ani._private;
  ani_p.started = true;
  ani_p.startTime = now - ani_p.progress * ani_p.duration;
}
function stepAll(now, cy) {
  var eles = cy._private.aniEles;
  var doneEles = [];
  function stepOne(ele2, isCore) {
    var _p = ele2._private;
    var current = _p.animation.current;
    var queue = _p.animation.queue;
    var ranAnis = false;
    if (current.length === 0) {
      var next = queue.shift();
      if (next) {
        current.push(next);
      }
    }
    var callbacks = function callbacks2(_callbacks) {
      for (var j = _callbacks.length - 1; j >= 0; j--) {
        var cb = _callbacks[j];
        cb();
      }
      _callbacks.splice(0, _callbacks.length);
    };
    for (var i2 = current.length - 1; i2 >= 0; i2--) {
      var ani = current[i2];
      var ani_p = ani._private;
      if (ani_p.stopped) {
        current.splice(i2, 1);
        ani_p.hooked = false;
        ani_p.playing = false;
        ani_p.started = false;
        callbacks(ani_p.frames);
        continue;
      }
      if (!ani_p.playing && !ani_p.applying) {
        continue;
      }
      if (ani_p.playing && ani_p.applying) {
        ani_p.applying = false;
      }
      if (!ani_p.started) {
        startAnimation(ele2, ani, now);
      }
      step$1(ele2, ani, now, isCore);
      if (ani_p.applying) {
        ani_p.applying = false;
      }
      callbacks(ani_p.frames);
      if (ani_p.step != null) {
        ani_p.step(now);
      }
      if (ani.completed()) {
        current.splice(i2, 1);
        ani_p.hooked = false;
        ani_p.playing = false;
        ani_p.started = false;
        callbacks(ani_p.completes);
      }
      ranAnis = true;
    }
    if (!isCore && current.length === 0 && queue.length === 0) {
      doneEles.push(ele2);
    }
    return ranAnis;
  }
  var ranEleAni = false;
  for (var e2 = 0; e2 < eles.length; e2++) {
    var ele = eles[e2];
    var handledThisEle = stepOne(ele);
    ranEleAni = ranEleAni || handledThisEle;
  }
  var ranCoreAni = stepOne(cy, true);
  if (ranEleAni || ranCoreAni) {
    if (eles.length > 0) {
      cy.notify("draw", eles);
    } else {
      cy.notify("draw");
    }
  }
  eles.unmerge(doneEles);
  cy.emit("step");
}
var corefn$8 = {
  // pull in animation functions
  animate: define.animate(),
  animation: define.animation(),
  animated: define.animated(),
  clearQueue: define.clearQueue(),
  delay: define.delay(),
  delayAnimation: define.delayAnimation(),
  stop: define.stop(),
  addToAnimationPool: function addToAnimationPool(eles) {
    var cy = this;
    if (!cy.styleEnabled()) {
      return;
    }
    cy._private.aniEles.merge(eles);
  },
  stopAnimationLoop: function stopAnimationLoop() {
    this._private.animationsRunning = false;
  },
  startAnimationLoop: function startAnimationLoop() {
    var cy = this;
    cy._private.animationsRunning = true;
    if (!cy.styleEnabled()) {
      return;
    }
    function headlessStep() {
      if (!cy._private.animationsRunning) {
        return;
      }
      requestAnimationFrame(function animationStep(now) {
        stepAll(now, cy);
        headlessStep();
      });
    }
    var renderer3 = cy.renderer();
    if (renderer3 && renderer3.beforeRender) {
      renderer3.beforeRender(function rendererAnimationStep(willDraw, now) {
        stepAll(now, cy);
      }, renderer3.beforeRenderPriorities.animations);
    } else {
      headlessStep();
    }
  }
};
var emitterOptions = {
  qualifierCompare: function qualifierCompare3(selector1, selector2) {
    if (selector1 == null || selector2 == null) {
      return selector1 == null && selector2 == null;
    } else {
      return selector1.sameText(selector2);
    }
  },
  eventMatches: function eventMatches3(cy, listener, eventObj) {
    var selector = listener.qualifier;
    if (selector != null) {
      return cy !== eventObj.target && element(eventObj.target) && selector.matches(eventObj.target);
    }
    return true;
  },
  addEventFields: function addEventFields3(cy, evt) {
    evt.cy = cy;
    evt.target = cy;
  },
  callbackContext: function callbackContext3(cy, listener, eventObj) {
    return listener.qualifier != null ? eventObj.target : cy;
  }
};
var argSelector2 = function argSelector3(arg) {
  if (string(arg)) {
    return new Selector(arg);
  } else {
    return arg;
  }
};
var elesfn = {
  createEmitter: function createEmitter2() {
    var _p = this._private;
    if (!_p.emitter) {
      _p.emitter = new Emitter(emitterOptions, this);
    }
    return this;
  },
  emitter: function emitter2() {
    return this._private.emitter;
  },
  on: function on2(events, selector, callback) {
    this.emitter().on(events, argSelector2(selector), callback);
    return this;
  },
  removeListener: function removeListener2(events, selector, callback) {
    this.emitter().removeListener(events, argSelector2(selector), callback);
    return this;
  },
  removeAllListeners: function removeAllListeners2() {
    this.emitter().removeAllListeners();
    return this;
  },
  one: function one2(events, selector, callback) {
    this.emitter().one(events, argSelector2(selector), callback);
    return this;
  },
  once: function once2(events, selector, callback) {
    this.emitter().one(events, argSelector2(selector), callback);
    return this;
  },
  emit: function emit2(events, extraParams) {
    this.emitter().emit(events, extraParams);
    return this;
  },
  emitAndNotify: function emitAndNotify2(event3, eles) {
    this.emit(event3);
    this.notify(event3, eles);
    return this;
  }
};
define.eventAliasesOn(elesfn);
var corefn$7 = {
  png: function png(options2) {
    var renderer3 = this._private.renderer;
    options2 = options2 || {};
    return renderer3.png(options2);
  },
  jpg: function jpg(options2) {
    var renderer3 = this._private.renderer;
    options2 = options2 || {};
    options2.bg = options2.bg || "#fff";
    return renderer3.jpg(options2);
  }
};
corefn$7.jpeg = corefn$7.jpg;
var corefn$6 = {
  layout: function layout2(options2) {
    var cy = this;
    if (options2 == null) {
      error("Layout options must be specified to make a layout");
      return;
    }
    if (options2.name == null) {
      error("A `name` must be specified to make a layout");
      return;
    }
    var name = options2.name;
    var Layout = cy.extension("layout", name);
    if (Layout == null) {
      error("No such layout `" + name + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var eles;
    if (string(options2.eles)) {
      eles = cy.$(options2.eles);
    } else {
      eles = options2.eles != null ? options2.eles : cy.$();
    }
    var layout4 = new Layout(extend({}, options2, {
      cy,
      eles
    }));
    return layout4;
  }
};
corefn$6.createLayout = corefn$6.makeLayout = corefn$6.layout;
var corefn$5 = {
  notify: function notify(eventName, eventEles) {
    var _p = this._private;
    if (this.batching()) {
      _p.batchNotifications = _p.batchNotifications || {};
      var eles = _p.batchNotifications[eventName] = _p.batchNotifications[eventName] || this.collection();
      if (eventEles != null) {
        eles.merge(eventEles);
      }
      return;
    }
    if (!_p.notificationsEnabled) {
      return;
    }
    var renderer3 = this.renderer();
    if (this.destroyed() || !renderer3) {
      return;
    }
    renderer3.notify(eventName, eventEles);
  },
  notifications: function notifications(bool) {
    var p3 = this._private;
    if (bool === void 0) {
      return p3.notificationsEnabled;
    } else {
      p3.notificationsEnabled = bool ? true : false;
    }
    return this;
  },
  noNotifications: function noNotifications(callback) {
    this.notifications(false);
    callback();
    this.notifications(true);
  },
  batching: function batching() {
    return this._private.batchCount > 0;
  },
  startBatch: function startBatch() {
    var _p = this._private;
    if (_p.batchCount == null) {
      _p.batchCount = 0;
    }
    if (_p.batchCount === 0) {
      _p.batchStyleEles = this.collection();
      _p.batchNotifications = {};
    }
    _p.batchCount++;
    return this;
  },
  endBatch: function endBatch() {
    var _p = this._private;
    if (_p.batchCount === 0) {
      return this;
    }
    _p.batchCount--;
    if (_p.batchCount === 0) {
      _p.batchStyleEles.updateStyle();
      var renderer3 = this.renderer();
      Object.keys(_p.batchNotifications).forEach(function(eventName) {
        var eles = _p.batchNotifications[eventName];
        if (eles.empty()) {
          renderer3.notify(eventName);
        } else {
          renderer3.notify(eventName, eles);
        }
      });
    }
    return this;
  },
  batch: function batch(callback) {
    this.startBatch();
    callback();
    this.endBatch();
    return this;
  },
  // for backwards compatibility
  batchData: function batchData(map2) {
    var cy = this;
    return this.batch(function() {
      var ids = Object.keys(map2);
      for (var i2 = 0; i2 < ids.length; i2++) {
        var id2 = ids[i2];
        var data4 = map2[id2];
        var ele = cy.getElementById(id2);
        ele.data(data4);
      }
    });
  }
};
var rendererDefaults = defaults$g({
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: false,
  showFps: false,
  // webgl options
  webgl: false,
  webglDebug: false,
  webglDebugShowAtlases: false,
  // defaults good for mobile
  webglTexSize: 2048,
  webglTexRows: 36,
  webglTexRowsNodes: 18,
  webglBatchSize: 2048,
  webglTexPerBatch: 14,
  webglBgColor: [255, 255, 255]
});
var corefn$4 = {
  renderTo: function renderTo(context, zoom2, pan2, pxRatio) {
    var r2 = this._private.renderer;
    r2.renderTo(context, zoom2, pan2, pxRatio);
    return this;
  },
  renderer: function renderer() {
    return this._private.renderer;
  },
  forceRender: function forceRender() {
    this.notify("draw");
    return this;
  },
  resize: function resize() {
    this.invalidateSize();
    this.emitAndNotify("resize");
    return this;
  },
  initRenderer: function initRenderer(options2) {
    var cy = this;
    var RendererProto = cy.extension("renderer", options2.name);
    if (RendererProto == null) {
      error("Can not initialise: No such renderer `".concat(options2.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    if (options2.wheelSensitivity !== void 0) {
      warn("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    }
    var rOpts = rendererDefaults(options2);
    rOpts.cy = cy;
    cy._private.renderer = new RendererProto(rOpts);
    this.notify("init");
  },
  destroyRenderer: function destroyRenderer() {
    var cy = this;
    cy.notify("destroy");
    var domEle = cy.container();
    if (domEle) {
      domEle._cyreg = null;
      while (domEle.childNodes.length > 0) {
        domEle.removeChild(domEle.childNodes[0]);
      }
    }
    cy._private.renderer = null;
    cy.mutableElements().forEach(function(ele) {
      var _p = ele._private;
      _p.rscratch = {};
      _p.rstyle = {};
      _p.animation.current = [];
      _p.animation.queue = [];
    });
  },
  onRender: function onRender(fn3) {
    return this.on("render", fn3);
  },
  offRender: function offRender(fn3) {
    return this.off("render", fn3);
  }
};
corefn$4.invalidateDimensions = corefn$4.resize;
var corefn$3 = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function collection3(eles, opts) {
    if (string(eles)) {
      return this.$(eles);
    } else if (elementOrCollection(eles)) {
      return eles.collection();
    } else if (array(eles)) {
      if (!opts) {
        opts = {};
      }
      return new Collection(this, eles, opts.unique, opts.removed);
    }
    return new Collection(this);
  },
  nodes: function nodes2(selector) {
    var nodes3 = this.$(function(ele) {
      return ele.isNode();
    });
    if (selector) {
      return nodes3.filter(selector);
    }
    return nodes3;
  },
  edges: function edges2(selector) {
    var edges3 = this.$(function(ele) {
      return ele.isEdge();
    });
    if (selector) {
      return edges3.filter(selector);
    }
    return edges3;
  },
  // search the graph like jQuery
  $: function $(selector) {
    var eles = this._private.elements;
    if (selector) {
      return eles.filter(selector);
    } else {
      return eles.spawnSelf();
    }
  },
  mutableElements: function mutableElements() {
    return this._private.elements;
  }
};
corefn$3.elements = corefn$3.filter = corefn$3.$;
var styfn$8 = {};
var TRUE = "t";
var FALSE = "f";
styfn$8.apply = function(eles) {
  var self2 = this;
  var _p = self2._private;
  var cy = _p.cy;
  var updatedEles = cy.collection();
  for (var ie = 0; ie < eles.length; ie++) {
    var ele = eles[ie];
    var cxtMeta = self2.getContextMeta(ele);
    if (cxtMeta.empty) {
      continue;
    }
    var cxtStyle = self2.getContextStyle(cxtMeta);
    var app = self2.applyContextStyle(cxtMeta, cxtStyle, ele);
    if (ele._private.appliedInitStyle) {
      self2.updateTransitions(ele, app.diffProps);
    } else {
      ele._private.appliedInitStyle = true;
    }
    var hintsDiff = self2.updateStyleHints(ele);
    if (hintsDiff) {
      updatedEles.push(ele);
    }
  }
  return updatedEles;
};
styfn$8.getPropertiesDiff = function(oldCxtKey, newCxtKey) {
  var self2 = this;
  var cache3 = self2._private.propDiffs = self2._private.propDiffs || {};
  var dualCxtKey = oldCxtKey + "-" + newCxtKey;
  var cachedVal = cache3[dualCxtKey];
  if (cachedVal) {
    return cachedVal;
  }
  var diffProps = [];
  var addedProp = {};
  for (var i2 = 0; i2 < self2.length; i2++) {
    var cxt = self2[i2];
    var oldHasCxt = oldCxtKey[i2] === TRUE;
    var newHasCxt = newCxtKey[i2] === TRUE;
    var cxtHasDiffed = oldHasCxt !== newHasCxt;
    var cxtHasMappedProps = cxt.mappedProperties.length > 0;
    if (cxtHasDiffed || newHasCxt && cxtHasMappedProps) {
      var props = void 0;
      if (cxtHasDiffed && cxtHasMappedProps) {
        props = cxt.properties;
      } else if (cxtHasDiffed) {
        props = cxt.properties;
      } else if (cxtHasMappedProps) {
        props = cxt.mappedProperties;
      }
      for (var j = 0; j < props.length; j++) {
        var prop = props[j];
        var name = prop.name;
        var laterCxtOverrides = false;
        for (var k = i2 + 1; k < self2.length; k++) {
          var laterCxt = self2[k];
          var hasLaterCxt = newCxtKey[k] === TRUE;
          if (!hasLaterCxt) {
            continue;
          }
          laterCxtOverrides = laterCxt.properties[prop.name] != null;
          if (laterCxtOverrides) {
            break;
          }
        }
        if (!addedProp[name] && !laterCxtOverrides) {
          addedProp[name] = true;
          diffProps.push(name);
        }
      }
    }
  }
  cache3[dualCxtKey] = diffProps;
  return diffProps;
};
styfn$8.getContextMeta = function(ele) {
  var self2 = this;
  var cxtKey = "";
  var diffProps;
  var prevKey = ele._private.styleCxtKey || "";
  for (var i2 = 0; i2 < self2.length; i2++) {
    var context = self2[i2];
    var contextSelectorMatches = context.selector && context.selector.matches(ele);
    if (contextSelectorMatches) {
      cxtKey += TRUE;
    } else {
      cxtKey += FALSE;
    }
  }
  diffProps = self2.getPropertiesDiff(prevKey, cxtKey);
  ele._private.styleCxtKey = cxtKey;
  return {
    key: cxtKey,
    diffPropNames: diffProps,
    empty: diffProps.length === 0
  };
};
styfn$8.getContextStyle = function(cxtMeta) {
  var cxtKey = cxtMeta.key;
  var self2 = this;
  var cxtStyles = this._private.contextStyles = this._private.contextStyles || {};
  if (cxtStyles[cxtKey]) {
    return cxtStyles[cxtKey];
  }
  var style3 = {
    _private: {
      key: cxtKey
    }
  };
  for (var i2 = 0; i2 < self2.length; i2++) {
    var cxt = self2[i2];
    var hasCxt = cxtKey[i2] === TRUE;
    if (!hasCxt) {
      continue;
    }
    for (var j = 0; j < cxt.properties.length; j++) {
      var prop = cxt.properties[j];
      style3[prop.name] = prop;
    }
  }
  cxtStyles[cxtKey] = style3;
  return style3;
};
styfn$8.applyContextStyle = function(cxtMeta, cxtStyle, ele) {
  var self2 = this;
  var diffProps = cxtMeta.diffPropNames;
  var retDiffProps = {};
  var types = self2.types;
  for (var i2 = 0; i2 < diffProps.length; i2++) {
    var diffPropName = diffProps[i2];
    var cxtProp = cxtStyle[diffPropName];
    var eleProp = ele.pstyle(diffPropName);
    if (!cxtProp) {
      if (!eleProp) {
        continue;
      } else if (eleProp.bypass) {
        cxtProp = {
          name: diffPropName,
          deleteBypassed: true
        };
      } else {
        cxtProp = {
          name: diffPropName,
          "delete": true
        };
      }
    }
    if (eleProp === cxtProp) {
      continue;
    }
    if (cxtProp.mapped === types.fn && eleProp != null && eleProp.mapping != null && eleProp.mapping.value === cxtProp.value) {
      var mapping = eleProp.mapping;
      var fnValue = mapping.fnValue = cxtProp.value(ele);
      if (fnValue === mapping.prevFnValue) {
        continue;
      }
    }
    var retDiffProp = retDiffProps[diffPropName] = {
      prev: eleProp
    };
    self2.applyParsedProperty(ele, cxtProp);
    retDiffProp.next = ele.pstyle(diffPropName);
    if (retDiffProp.next && retDiffProp.next.bypass) {
      retDiffProp.next = retDiffProp.next.bypassed;
    }
  }
  return {
    diffProps: retDiffProps
  };
};
styfn$8.updateStyleHints = function(ele) {
  var _p = ele._private;
  var self2 = this;
  var propNames = self2.propertyGroupNames;
  var propGrKeys = self2.propertyGroupKeys;
  var propHash = function propHash2(ele2, propNames2, seedKey) {
    return self2.getPropertiesHash(ele2, propNames2, seedKey);
  };
  var oldStyleKey = _p.styleKey;
  if (ele.removed()) {
    return false;
  }
  var isNode2 = _p.group === "nodes";
  var overriddenStyles = ele._private.style;
  propNames = Object.keys(overriddenStyles);
  for (var i2 = 0; i2 < propGrKeys.length; i2++) {
    var grKey = propGrKeys[i2];
    _p.styleKeys[grKey] = [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT];
  }
  var updateGrKey1 = function updateGrKey12(val, grKey2) {
    return _p.styleKeys[grKey2][0] = hashInt(val, _p.styleKeys[grKey2][0]);
  };
  var updateGrKey2 = function updateGrKey22(val, grKey2) {
    return _p.styleKeys[grKey2][1] = hashIntAlt(val, _p.styleKeys[grKey2][1]);
  };
  var updateGrKey = function updateGrKey3(val, grKey2) {
    updateGrKey1(val, grKey2);
    updateGrKey2(val, grKey2);
  };
  var updateGrKeyWStr = function updateGrKeyWStr2(strVal, grKey2) {
    for (var j = 0; j < strVal.length; j++) {
      var ch = strVal.charCodeAt(j);
      updateGrKey1(ch, grKey2);
      updateGrKey2(ch, grKey2);
    }
  };
  var N = 2e9;
  var cleanNum = function cleanNum2(val) {
    return -128 < val && val < 128 && Math.floor(val) !== val ? N - (val * 1024 | 0) : val;
  };
  for (var _i = 0; _i < propNames.length; _i++) {
    var name = propNames[_i];
    var parsedProp = overriddenStyles[name];
    if (parsedProp == null) {
      continue;
    }
    var propInfo = this.properties[name];
    var type = propInfo.type;
    var _grKey = propInfo.groupKey;
    var normalizedNumberVal = void 0;
    if (propInfo.hashOverride != null) {
      normalizedNumberVal = propInfo.hashOverride(ele, parsedProp);
    } else if (parsedProp.pfValue != null) {
      normalizedNumberVal = parsedProp.pfValue;
    }
    var numberVal = propInfo.enums == null ? parsedProp.value : null;
    var haveNormNum = normalizedNumberVal != null;
    var haveUnitedNum = numberVal != null;
    var haveNum = haveNormNum || haveUnitedNum;
    var units = parsedProp.units;
    if (type.number && haveNum && !type.multiple) {
      var v = haveNormNum ? normalizedNumberVal : numberVal;
      updateGrKey(cleanNum(v), _grKey);
      if (!haveNormNum && units != null) {
        updateGrKeyWStr(units, _grKey);
      }
    } else {
      updateGrKeyWStr(parsedProp.strValue, _grKey);
    }
  }
  var hash = [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT];
  for (var _i2 = 0; _i2 < propGrKeys.length; _i2++) {
    var _grKey2 = propGrKeys[_i2];
    var grHash = _p.styleKeys[_grKey2];
    hash[0] = hashInt(grHash[0], hash[0]);
    hash[1] = hashIntAlt(grHash[1], hash[1]);
  }
  _p.styleKey = combineHashes(hash[0], hash[1]);
  var sk = _p.styleKeys;
  _p.labelDimsKey = combineHashesArray(sk.labelDimensions);
  var labelKeys = propHash(ele, ["label"], sk.labelDimensions);
  _p.labelKey = combineHashesArray(labelKeys);
  _p.labelStyleKey = combineHashesArray(hashArrays(sk.commonLabel, labelKeys));
  if (!isNode2) {
    var sourceLabelKeys = propHash(ele, ["source-label"], sk.labelDimensions);
    _p.sourceLabelKey = combineHashesArray(sourceLabelKeys);
    _p.sourceLabelStyleKey = combineHashesArray(hashArrays(sk.commonLabel, sourceLabelKeys));
    var targetLabelKeys = propHash(ele, ["target-label"], sk.labelDimensions);
    _p.targetLabelKey = combineHashesArray(targetLabelKeys);
    _p.targetLabelStyleKey = combineHashesArray(hashArrays(sk.commonLabel, targetLabelKeys));
  }
  if (isNode2) {
    var _p$styleKeys = _p.styleKeys, nodeBody = _p$styleKeys.nodeBody, nodeBorder = _p$styleKeys.nodeBorder, nodeOutline = _p$styleKeys.nodeOutline, backgroundImage = _p$styleKeys.backgroundImage, compound = _p$styleKeys.compound, pie = _p$styleKeys.pie, stripe = _p$styleKeys.stripe;
    var nodeKeys = [nodeBody, nodeBorder, nodeOutline, backgroundImage, compound, pie, stripe].filter(function(k) {
      return k != null;
    }).reduce(hashArrays, [DEFAULT_HASH_SEED, DEFAULT_HASH_SEED_ALT]);
    _p.nodeKey = combineHashesArray(nodeKeys);
    _p.hasPie = pie != null && pie[0] !== DEFAULT_HASH_SEED && pie[1] !== DEFAULT_HASH_SEED_ALT;
    _p.hasStripe = stripe != null && stripe[0] !== DEFAULT_HASH_SEED && stripe[1] !== DEFAULT_HASH_SEED_ALT;
  }
  return oldStyleKey !== _p.styleKey;
};
styfn$8.clearStyleHints = function(ele) {
  var _p = ele._private;
  _p.styleCxtKey = "";
  _p.styleKeys = {};
  _p.styleKey = null;
  _p.labelKey = null;
  _p.labelStyleKey = null;
  _p.sourceLabelKey = null;
  _p.sourceLabelStyleKey = null;
  _p.targetLabelKey = null;
  _p.targetLabelStyleKey = null;
  _p.nodeKey = null;
  _p.hasPie = null;
  _p.hasStripe = null;
};
styfn$8.applyParsedProperty = function(ele, parsedProp) {
  var self2 = this;
  var prop = parsedProp;
  var style3 = ele._private.style;
  var flatProp;
  var types = self2.types;
  var type = self2.properties[prop.name].type;
  var propIsBypass = prop.bypass;
  var origProp = style3[prop.name];
  var origPropIsBypass = origProp && origProp.bypass;
  var _p = ele._private;
  var flatPropMapping = "mapping";
  var getVal = function getVal2(p3) {
    if (p3 == null) {
      return null;
    } else if (p3.pfValue != null) {
      return p3.pfValue;
    } else {
      return p3.value;
    }
  };
  var checkTriggers = function checkTriggers2() {
    var fromVal = getVal(origProp);
    var toVal = getVal(prop);
    self2.checkTriggers(ele, prop.name, fromVal, toVal);
  };
  if (parsedProp.name === "curve-style" && ele.isEdge() && // loops must be bundled beziers
  (parsedProp.value !== "bezier" && ele.isLoop() || // edges connected to compound nodes can not be haystacks
  parsedProp.value === "haystack" && (ele.source().isParent() || ele.target().isParent()))) {
    prop = parsedProp = this.parse(parsedProp.name, "bezier", propIsBypass);
  }
  if (prop["delete"]) {
    style3[prop.name] = void 0;
    checkTriggers();
    return true;
  }
  if (prop.deleteBypassed) {
    if (!origProp) {
      checkTriggers();
      return true;
    } else if (origProp.bypass) {
      origProp.bypassed = void 0;
      checkTriggers();
      return true;
    } else {
      return false;
    }
  }
  if (prop.deleteBypass) {
    if (!origProp) {
      checkTriggers();
      return true;
    } else if (origProp.bypass) {
      style3[prop.name] = origProp.bypassed;
      checkTriggers();
      return true;
    } else {
      return false;
    }
  }
  var printMappingErr = function printMappingErr2() {
    warn("Do not assign mappings to elements without corresponding data (i.e. ele `" + ele.id() + "` has no mapping for property `" + prop.name + "` with data field `" + prop.field + "`); try a `[" + prop.field + "]` selector to limit scope to elements with `" + prop.field + "` defined");
  };
  switch (prop.mapped) {
    // flatten the property if mapped
    case types.mapData: {
      var fields = prop.field.split(".");
      var fieldVal = _p.data;
      for (var i2 = 0; i2 < fields.length && fieldVal; i2++) {
        var field = fields[i2];
        fieldVal = fieldVal[field];
      }
      if (fieldVal == null) {
        printMappingErr();
        return false;
      }
      var percent;
      if (!number$1(fieldVal)) {
        warn("Do not use continuous mappers without specifying numeric data (i.e. `" + prop.field + ": " + fieldVal + "` for `" + ele.id() + "` is non-numeric)");
        return false;
      } else {
        var fieldWidth = prop.fieldMax - prop.fieldMin;
        if (fieldWidth === 0) {
          percent = 0;
        } else {
          percent = (fieldVal - prop.fieldMin) / fieldWidth;
        }
      }
      if (percent < 0) {
        percent = 0;
      } else if (percent > 1) {
        percent = 1;
      }
      if (type.color) {
        var r1 = prop.valueMin[0];
        var r2 = prop.valueMax[0];
        var g1 = prop.valueMin[1];
        var g2 = prop.valueMax[1];
        var b1 = prop.valueMin[2];
        var b2 = prop.valueMax[2];
        var a1 = prop.valueMin[3] == null ? 1 : prop.valueMin[3];
        var a2 = prop.valueMax[3] == null ? 1 : prop.valueMax[3];
        var clr = [Math.round(r1 + (r2 - r1) * percent), Math.round(g1 + (g2 - g1) * percent), Math.round(b1 + (b2 - b1) * percent), Math.round(a1 + (a2 - a1) * percent)];
        flatProp = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: prop.bypass,
          // we're a bypass if the mapping property is a bypass
          name: prop.name,
          value: clr,
          strValue: "rgb(" + clr[0] + ", " + clr[1] + ", " + clr[2] + ")"
        };
      } else if (type.number) {
        var calcValue = prop.valueMin + (prop.valueMax - prop.valueMin) * percent;
        flatProp = this.parse(prop.name, calcValue, prop.bypass, flatPropMapping);
      } else {
        return false;
      }
      if (!flatProp) {
        printMappingErr();
        return false;
      }
      flatProp.mapping = prop;
      prop = flatProp;
      break;
    }
    // direct mapping
    case types.data: {
      var _fields = prop.field.split(".");
      var _fieldVal = _p.data;
      for (var _i3 = 0; _i3 < _fields.length && _fieldVal; _i3++) {
        var _field = _fields[_i3];
        _fieldVal = _fieldVal[_field];
      }
      if (_fieldVal != null) {
        flatProp = this.parse(prop.name, _fieldVal, prop.bypass, flatPropMapping);
      }
      if (!flatProp) {
        printMappingErr();
        return false;
      }
      flatProp.mapping = prop;
      prop = flatProp;
      break;
    }
    case types.fn: {
      var fn3 = prop.value;
      var fnRetVal = prop.fnValue != null ? prop.fnValue : fn3(ele);
      prop.prevFnValue = fnRetVal;
      if (fnRetVal == null) {
        warn("Custom function mappers may not return null (i.e. `" + prop.name + "` for ele `" + ele.id() + "` is null)");
        return false;
      }
      flatProp = this.parse(prop.name, fnRetVal, prop.bypass, flatPropMapping);
      if (!flatProp) {
        warn("Custom function mappers may not return invalid values for the property type (i.e. `" + prop.name + "` for ele `" + ele.id() + "` is invalid)");
        return false;
      }
      flatProp.mapping = copy(prop);
      prop = flatProp;
      break;
    }
    case void 0:
      break;
    // just set the property
    default:
      return false;
  }
  if (propIsBypass) {
    if (origPropIsBypass) {
      prop.bypassed = origProp.bypassed;
    } else {
      prop.bypassed = origProp;
    }
    style3[prop.name] = prop;
  } else {
    if (origPropIsBypass) {
      origProp.bypassed = prop;
    } else {
      style3[prop.name] = prop;
    }
  }
  checkTriggers();
  return true;
};
styfn$8.cleanElements = function(eles, keepBypasses) {
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    this.clearStyleHints(ele);
    ele.dirtyCompoundBoundsCache();
    ele.dirtyBoundingBoxCache();
    if (!keepBypasses) {
      ele._private.style = {};
    } else {
      var style3 = ele._private.style;
      var propNames = Object.keys(style3);
      for (var j = 0; j < propNames.length; j++) {
        var propName = propNames[j];
        var eleProp = style3[propName];
        if (eleProp != null) {
          if (eleProp.bypass) {
            eleProp.bypassed = null;
          } else {
            style3[propName] = null;
          }
        }
      }
    }
  }
};
styfn$8.update = function() {
  var cy = this._private.cy;
  var eles = cy.mutableElements();
  eles.updateStyle();
};
styfn$8.updateTransitions = function(ele, diffProps) {
  var self2 = this;
  var _p = ele._private;
  var props = ele.pstyle("transition-property").value;
  var duration = ele.pstyle("transition-duration").pfValue;
  var delay2 = ele.pstyle("transition-delay").pfValue;
  if (props.length > 0 && duration > 0) {
    var style3 = {};
    var anyPrev = false;
    for (var i2 = 0; i2 < props.length; i2++) {
      var prop = props[i2];
      var styProp = ele.pstyle(prop);
      var diffProp = diffProps[prop];
      if (!diffProp) {
        continue;
      }
      var prevProp = diffProp.prev;
      var fromProp = prevProp;
      var toProp = diffProp.next != null ? diffProp.next : styProp;
      var diff2 = false;
      var initVal = void 0;
      var initDt = 1e-6;
      if (!fromProp) {
        continue;
      }
      if (number$1(fromProp.pfValue) && number$1(toProp.pfValue)) {
        diff2 = toProp.pfValue - fromProp.pfValue;
        initVal = fromProp.pfValue + initDt * diff2;
      } else if (number$1(fromProp.value) && number$1(toProp.value)) {
        diff2 = toProp.value - fromProp.value;
        initVal = fromProp.value + initDt * diff2;
      } else if (array(fromProp.value) && array(toProp.value)) {
        diff2 = fromProp.value[0] !== toProp.value[0] || fromProp.value[1] !== toProp.value[1] || fromProp.value[2] !== toProp.value[2];
        initVal = fromProp.strValue;
      }
      if (diff2) {
        style3[prop] = toProp.strValue;
        this.applyBypass(ele, prop, initVal);
        anyPrev = true;
      }
    }
    if (!anyPrev) {
      return;
    }
    _p.transitioning = true;
    new Promise$1(function(resolve2) {
      if (delay2 > 0) {
        ele.delayAnimation(delay2).play().promise().then(resolve2);
      } else {
        resolve2();
      }
    }).then(function() {
      return ele.animation({
        style: style3,
        duration,
        easing: ele.pstyle("transition-timing-function").value,
        queue: false
      }).play().promise();
    }).then(function() {
      self2.removeBypasses(ele, props);
      ele.emitAndNotify("style");
      _p.transitioning = false;
    });
  } else if (_p.transitioning) {
    this.removeBypasses(ele, props);
    ele.emitAndNotify("style");
    _p.transitioning = false;
  }
};
styfn$8.checkTrigger = function(ele, name, fromValue, toValue, getTrigger, onTrigger) {
  var prop = this.properties[name];
  var triggerCheck = getTrigger(prop);
  if (ele.removed()) {
    return;
  }
  if (triggerCheck != null && triggerCheck(fromValue, toValue, ele)) {
    onTrigger(prop);
  }
};
styfn$8.checkZOrderTrigger = function(ele, name, fromValue, toValue) {
  var _this = this;
  this.checkTrigger(ele, name, fromValue, toValue, function(prop) {
    return prop.triggersZOrder;
  }, function() {
    _this._private.cy.notify("zorder", ele);
  });
};
styfn$8.checkBoundsTrigger = function(ele, name, fromValue, toValue) {
  this.checkTrigger(ele, name, fromValue, toValue, function(prop) {
    return prop.triggersBounds;
  }, function(prop) {
    ele.dirtyCompoundBoundsCache();
    ele.dirtyBoundingBoxCache();
  });
};
styfn$8.checkConnectedEdgesBoundsTrigger = function(ele, name, fromValue, toValue) {
  this.checkTrigger(ele, name, fromValue, toValue, function(prop) {
    return prop.triggersBoundsOfConnectedEdges;
  }, function(prop) {
    ele.connectedEdges().forEach(function(edge) {
      edge.dirtyBoundingBoxCache();
    });
  });
};
styfn$8.checkParallelEdgesBoundsTrigger = function(ele, name, fromValue, toValue) {
  this.checkTrigger(ele, name, fromValue, toValue, function(prop) {
    return prop.triggersBoundsOfParallelEdges;
  }, function(prop) {
    ele.parallelEdges().forEach(function(pllEdge) {
      pllEdge.dirtyBoundingBoxCache();
    });
  });
};
styfn$8.checkTriggers = function(ele, name, fromValue, toValue) {
  ele.dirtyStyleCache();
  this.checkZOrderTrigger(ele, name, fromValue, toValue);
  this.checkBoundsTrigger(ele, name, fromValue, toValue);
  this.checkConnectedEdgesBoundsTrigger(ele, name, fromValue, toValue);
  this.checkParallelEdgesBoundsTrigger(ele, name, fromValue, toValue);
};
var styfn$7 = {};
styfn$7.applyBypass = function(eles, name, value, updateTransitions) {
  var self2 = this;
  var props = [];
  var isBypass = true;
  if (name === "*" || name === "**") {
    if (value !== void 0) {
      for (var i2 = 0; i2 < self2.properties.length; i2++) {
        var prop = self2.properties[i2];
        var _name = prop.name;
        var parsedProp = this.parse(_name, value, true);
        if (parsedProp) {
          props.push(parsedProp);
        }
      }
    }
  } else if (string(name)) {
    var _parsedProp = this.parse(name, value, true);
    if (_parsedProp) {
      props.push(_parsedProp);
    }
  } else if (plainObject(name)) {
    var specifiedProps = name;
    updateTransitions = value;
    var names = Object.keys(specifiedProps);
    for (var _i = 0; _i < names.length; _i++) {
      var _name2 = names[_i];
      var _value = specifiedProps[_name2];
      if (_value === void 0) {
        _value = specifiedProps[dash2camel(_name2)];
      }
      if (_value !== void 0) {
        var _parsedProp2 = this.parse(_name2, _value, true);
        if (_parsedProp2) {
          props.push(_parsedProp2);
        }
      }
    }
  } else {
    return false;
  }
  if (props.length === 0) {
    return false;
  }
  var ret = false;
  for (var _i2 = 0; _i2 < eles.length; _i2++) {
    var ele = eles[_i2];
    var diffProps = {};
    var diffProp = void 0;
    for (var j = 0; j < props.length; j++) {
      var _prop = props[j];
      if (updateTransitions) {
        var prevProp = ele.pstyle(_prop.name);
        diffProp = diffProps[_prop.name] = {
          prev: prevProp
        };
      }
      ret = this.applyParsedProperty(ele, copy(_prop)) || ret;
      if (updateTransitions) {
        diffProp.next = ele.pstyle(_prop.name);
      }
    }
    if (ret) {
      this.updateStyleHints(ele);
    }
    if (updateTransitions) {
      this.updateTransitions(ele, diffProps, isBypass);
    }
  }
  return ret;
};
styfn$7.overrideBypass = function(eles, name, value) {
  name = camel2dash(name);
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    var prop = ele._private.style[name];
    var type = this.properties[name].type;
    var isColor = type.color;
    var isMulti = type.mutiple;
    var oldValue = !prop ? null : prop.pfValue != null ? prop.pfValue : prop.value;
    if (!prop || !prop.bypass) {
      this.applyBypass(ele, name, value);
    } else {
      prop.value = value;
      if (prop.pfValue != null) {
        prop.pfValue = value;
      }
      if (isColor) {
        prop.strValue = "rgb(" + value.join(",") + ")";
      } else if (isMulti) {
        prop.strValue = value.join(" ");
      } else {
        prop.strValue = "" + value;
      }
      this.updateStyleHints(ele);
    }
    this.checkTriggers(ele, name, oldValue, value);
  }
};
styfn$7.removeAllBypasses = function(eles, updateTransitions) {
  return this.removeBypasses(eles, this.propertyNames, updateTransitions);
};
styfn$7.removeBypasses = function(eles, props, updateTransitions) {
  var isBypass = true;
  for (var j = 0; j < eles.length; j++) {
    var ele = eles[j];
    var diffProps = {};
    for (var i2 = 0; i2 < props.length; i2++) {
      var name = props[i2];
      var prop = this.properties[name];
      var prevProp = ele.pstyle(prop.name);
      if (!prevProp || !prevProp.bypass) {
        continue;
      }
      var value = "";
      var parsedProp = this.parse(name, value, true);
      var diffProp = diffProps[prop.name] = {
        prev: prevProp
      };
      this.applyParsedProperty(ele, parsedProp);
      diffProp.next = ele.pstyle(prop.name);
    }
    this.updateStyleHints(ele);
    if (updateTransitions) {
      this.updateTransitions(ele, diffProps, isBypass);
    }
  }
};
var styfn$6 = {};
styfn$6.getEmSizeInPixels = function() {
  var px = this.containerCss("font-size");
  if (px != null) {
    return parseFloat(px);
  } else {
    return 1;
  }
};
styfn$6.containerCss = function(propName) {
  var cy = this._private.cy;
  var domElement3 = cy.container();
  var containerWindow = cy.window();
  if (containerWindow && domElement3 && containerWindow.getComputedStyle) {
    return containerWindow.getComputedStyle(domElement3).getPropertyValue(propName);
  }
};
var styfn$5 = {};
styfn$5.getRenderedStyle = function(ele, prop) {
  if (prop) {
    return this.getStylePropertyValue(ele, prop, true);
  } else {
    return this.getRawStyle(ele, true);
  }
};
styfn$5.getRawStyle = function(ele, isRenderedVal) {
  var self2 = this;
  ele = ele[0];
  if (ele) {
    var rstyle = {};
    for (var i2 = 0; i2 < self2.properties.length; i2++) {
      var prop = self2.properties[i2];
      var val = self2.getStylePropertyValue(ele, prop.name, isRenderedVal);
      if (val != null) {
        rstyle[prop.name] = val;
        rstyle[dash2camel(prop.name)] = val;
      }
    }
    return rstyle;
  }
};
styfn$5.getIndexedStyle = function(ele, property, subproperty, index) {
  var pstyle = ele.pstyle(property)[subproperty][index];
  return pstyle != null ? pstyle : ele.cy().style().getDefaultProperty(property)[subproperty][0];
};
styfn$5.getStylePropertyValue = function(ele, propName, isRenderedVal) {
  var self2 = this;
  ele = ele[0];
  if (ele) {
    var prop = self2.properties[propName];
    if (prop.alias) {
      prop = prop.pointsTo;
    }
    var type = prop.type;
    var styleProp = ele.pstyle(prop.name);
    if (styleProp) {
      var value = styleProp.value, units = styleProp.units, strValue = styleProp.strValue;
      if (isRenderedVal && type.number && value != null && number$1(value)) {
        var zoom2 = ele.cy().zoom();
        var getRenderedValue = function getRenderedValue2(val) {
          return val * zoom2;
        };
        var getValueStringWithUnits = function getValueStringWithUnits2(val, units2) {
          return getRenderedValue(val) + units2;
        };
        var isArrayValue = array(value);
        var haveUnits = isArrayValue ? units.every(function(u2) {
          return u2 != null;
        }) : units != null;
        if (haveUnits) {
          if (isArrayValue) {
            return value.map(function(v, i2) {
              return getValueStringWithUnits(v, units[i2]);
            }).join(" ");
          } else {
            return getValueStringWithUnits(value, units);
          }
        } else {
          if (isArrayValue) {
            return value.map(function(v) {
              return string(v) ? v : "" + getRenderedValue(v);
            }).join(" ");
          } else {
            return "" + getRenderedValue(value);
          }
        }
      } else if (strValue != null) {
        return strValue;
      }
    }
    return null;
  }
};
styfn$5.getAnimationStartStyle = function(ele, aniProps) {
  var rstyle = {};
  for (var i2 = 0; i2 < aniProps.length; i2++) {
    var aniProp = aniProps[i2];
    var name = aniProp.name;
    var styleProp = ele.pstyle(name);
    if (styleProp !== void 0) {
      if (plainObject(styleProp)) {
        styleProp = this.parse(name, styleProp.strValue);
      } else {
        styleProp = this.parse(name, styleProp);
      }
    }
    if (styleProp) {
      rstyle[name] = styleProp;
    }
  }
  return rstyle;
};
styfn$5.getPropsList = function(propsObj) {
  var self2 = this;
  var rstyle = [];
  var style3 = propsObj;
  var props = self2.properties;
  if (style3) {
    var names = Object.keys(style3);
    for (var i2 = 0; i2 < names.length; i2++) {
      var name = names[i2];
      var val = style3[name];
      var prop = props[name] || props[camel2dash(name)];
      var styleProp = this.parse(prop.name, val);
      if (styleProp) {
        rstyle.push(styleProp);
      }
    }
  }
  return rstyle;
};
styfn$5.getNonDefaultPropertiesHash = function(ele, propNames, seed) {
  var hash = seed.slice();
  var name, val, strVal, chVal;
  var i2, j;
  for (i2 = 0; i2 < propNames.length; i2++) {
    name = propNames[i2];
    val = ele.pstyle(name, false);
    if (val == null) {
      continue;
    } else if (val.pfValue != null) {
      hash[0] = hashInt(chVal, hash[0]);
      hash[1] = hashIntAlt(chVal, hash[1]);
    } else {
      strVal = val.strValue;
      for (j = 0; j < strVal.length; j++) {
        chVal = strVal.charCodeAt(j);
        hash[0] = hashInt(chVal, hash[0]);
        hash[1] = hashIntAlt(chVal, hash[1]);
      }
    }
  }
  return hash;
};
styfn$5.getPropertiesHash = styfn$5.getNonDefaultPropertiesHash;
var styfn$4 = {};
styfn$4.appendFromJson = function(json2) {
  var style3 = this;
  for (var i2 = 0; i2 < json2.length; i2++) {
    var context = json2[i2];
    var selector = context.selector;
    var props = context.style || context.css;
    var names = Object.keys(props);
    style3.selector(selector);
    for (var j = 0; j < names.length; j++) {
      var name = names[j];
      var value = props[name];
      style3.css(name, value);
    }
  }
  return style3;
};
styfn$4.fromJson = function(json2) {
  var style3 = this;
  style3.resetToDefault();
  style3.appendFromJson(json2);
  return style3;
};
styfn$4.json = function() {
  var json2 = [];
  for (var i2 = this.defaultLength; i2 < this.length; i2++) {
    var cxt = this[i2];
    var selector = cxt.selector;
    var props = cxt.properties;
    var css = {};
    for (var j = 0; j < props.length; j++) {
      var prop = props[j];
      css[prop.name] = prop.strValue;
    }
    json2.push({
      selector: !selector ? "core" : selector.toString(),
      style: css
    });
  }
  return json2;
};
var styfn$3 = {};
styfn$3.appendFromString = function(string3) {
  var self2 = this;
  var style3 = this;
  var remaining = "" + string3;
  var selAndBlockStr;
  var blockRem;
  var propAndValStr;
  remaining = remaining.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function removeSelAndBlockFromRemaining() {
    if (remaining.length > selAndBlockStr.length) {
      remaining = remaining.substr(selAndBlockStr.length);
    } else {
      remaining = "";
    }
  }
  function removePropAndValFromRem() {
    if (blockRem.length > propAndValStr.length) {
      blockRem = blockRem.substr(propAndValStr.length);
    } else {
      blockRem = "";
    }
  }
  for (; ; ) {
    var nothingLeftToParse = remaining.match(/^\s*$/);
    if (nothingLeftToParse) {
      break;
    }
    var selAndBlock = remaining.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!selAndBlock) {
      warn("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + remaining);
      break;
    }
    selAndBlockStr = selAndBlock[0];
    var selectorStr = selAndBlock[1];
    if (selectorStr !== "core") {
      var selector = new Selector(selectorStr);
      if (selector.invalid) {
        warn("Skipping parsing of block: Invalid selector found in string stylesheet: " + selectorStr);
        removeSelAndBlockFromRemaining();
        continue;
      }
    }
    var blockStr = selAndBlock[2];
    var invalidBlock = false;
    blockRem = blockStr;
    var props = [];
    for (; ; ) {
      var _nothingLeftToParse = blockRem.match(/^\s*$/);
      if (_nothingLeftToParse) {
        break;
      }
      var propAndVal = blockRem.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!propAndVal) {
        warn("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + blockStr);
        invalidBlock = true;
        break;
      }
      propAndValStr = propAndVal[0];
      var propStr = propAndVal[1];
      var valStr = propAndVal[2];
      var prop = self2.properties[propStr];
      if (!prop) {
        warn("Skipping property: Invalid property name in: " + propAndValStr);
        removePropAndValFromRem();
        continue;
      }
      var parsedProp = style3.parse(propStr, valStr);
      if (!parsedProp) {
        warn("Skipping property: Invalid property definition in: " + propAndValStr);
        removePropAndValFromRem();
        continue;
      }
      props.push({
        name: propStr,
        val: valStr
      });
      removePropAndValFromRem();
    }
    if (invalidBlock) {
      removeSelAndBlockFromRemaining();
      break;
    }
    style3.selector(selectorStr);
    for (var i2 = 0; i2 < props.length; i2++) {
      var _prop = props[i2];
      style3.css(_prop.name, _prop.val);
    }
    removeSelAndBlockFromRemaining();
  }
  return style3;
};
styfn$3.fromString = function(string3) {
  var style3 = this;
  style3.resetToDefault();
  style3.appendFromString(string3);
  return style3;
};
var styfn$2 = {};
(function() {
  var number$12 = number2;
  var rgba2 = rgbaNoBackRefs;
  var hsla2 = hslaNoBackRefs;
  var hex3$1 = hex3;
  var hex6$1 = hex6;
  var data4 = function data5(prefix) {
    return "^" + prefix + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  };
  var mapData = function mapData2(prefix) {
    var mapArg = number$12 + "|\\w+|" + rgba2 + "|" + hsla2 + "|" + hex3$1 + "|" + hex6$1;
    return "^" + prefix + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + number$12 + ")\\s*\\,\\s*(" + number$12 + ")\\s*,\\s*(" + mapArg + ")\\s*\\,\\s*(" + mapArg + ")\\)$";
  };
  var urlRegexes = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  styfn$2.types = {
    time: {
      number: true,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: true
    },
    zeroOneNumber: {
      number: true,
      min: 0,
      max: 1,
      unitless: true
    },
    zeroOneNumbers: {
      number: true,
      min: 0,
      max: 1,
      unitless: true,
      multiple: true
    },
    nOneOneNumber: {
      number: true,
      min: -1,
      max: 1,
      unitless: true
    },
    nonNegativeInt: {
      number: true,
      min: 0,
      integer: true,
      unitless: true
    },
    nonNegativeNumber: {
      number: true,
      min: 0,
      unitless: true
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: true,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: true,
      unitless: true
    },
    numbers: {
      number: true,
      unitless: true,
      multiple: true
    },
    positiveNumber: {
      number: true,
      unitless: true,
      min: 0,
      strictMin: true
    },
    size: {
      number: true,
      min: 0
    },
    bidirectionalSize: {
      number: true
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: true,
      allowPercent: true
    },
    // allows negative
    bidirectionalSizes: {
      number: true,
      multiple: true
    },
    // allows negative
    sizeMaybePercent: {
      number: true,
      min: 0,
      allowPercent: true
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    axisDirectionExplicit: {
      enums: ["leftward", "rightward", "upward", "downward"]
    },
    axisDirectionPrimary: {
      enums: ["horizontal", "vertical"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: true,
      min: 0,
      allowPercent: true,
      enums: ["auto"],
      multiple: true
    },
    bgPos: {
      number: true,
      allowPercent: true,
      multiple: true
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: true
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: true
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: true
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: true
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: true
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: true
    },
    boxSelection: {
      enums: ["contain", "overlap", "none"]
    },
    color: {
      color: true
    },
    colors: {
      color: true,
      multiple: true
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: true
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    linePosition: {
      enums: ["center", "inside", "outside"]
    },
    lineJoin: {
      enums: ["round", "bevel", "miter"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
    },
    radiusType: {
      enums: ["arc-radius", "influence-radius"],
      multiple: true
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "circle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    cornerRadius: {
      number: true,
      min: 0,
      units: "px|em",
      implicitUnits: "px",
      enums: ["auto"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: true,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: true
    },
    data: {
      mapping: true,
      regex: data4("data")
    },
    layoutData: {
      mapping: true,
      regex: data4("layoutData")
    },
    scratch: {
      mapping: true,
      regex: data4("scratch")
    },
    mapData: {
      mapping: true,
      regex: mapData("mapData")
    },
    mapLayoutData: {
      mapping: true,
      regex: mapData("mapLayoutData")
    },
    mapScratch: {
      mapping: true,
      regex: mapData("mapScratch")
    },
    fn: {
      mapping: true,
      fn: true
    },
    url: {
      regexes: urlRegexes,
      singleRegexMatchValue: true
    },
    urls: {
      regexes: urlRegexes,
      singleRegexMatchValue: true,
      multiple: true
    },
    propList: {
      propList: true
    },
    angle: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: true,
      multiple: true,
      evenMultiple: true,
      min: -1,
      max: 1,
      unitless: true
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: true,
      multiple: true,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: true,
      validate: function validate(valArr, unitsArr) {
        switch (valArr.length) {
          case 2:
            return unitsArr[0] !== "deg" && unitsArr[0] !== "rad" && unitsArr[1] !== "deg" && unitsArr[1] !== "rad";
          case 1:
            return string(valArr[0]) || unitsArr[0] === "deg" || unitsArr[0] === "rad";
          default:
            return false;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + number$12 + ")\\s*,\\s*(" + number$12 + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + number$12 + ")\\s*,\\s*(" + number$12 + ")\\s*,\\s*(" + number$12 + ")\\s*,\\s*(" + number$12 + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: true,
      multiple: true,
      min: 0,
      validate: function validate(valArr) {
        var length = valArr.length;
        return length === 1 || length === 2 || length === 4;
      }
    }
  };
  var diff2 = {
    zeroNonZero: function zeroNonZero(val1, val2) {
      if ((val1 == null || val2 == null) && val1 !== val2) {
        return true;
      }
      if (val1 == 0 && val2 != 0) {
        return true;
      } else if (val1 != 0 && val2 == 0) {
        return true;
      } else {
        return false;
      }
    },
    any: function any(val1, val2) {
      return val1 != val2;
    },
    emptyNonEmpty: function emptyNonEmpty(str1, str2) {
      var empty1 = emptyString(str1);
      var empty2 = emptyString(str2);
      return empty1 && !empty2 || !empty1 && empty2;
    }
  };
  var t2 = styfn$2.types;
  var mainLabel = [{
    name: "label",
    type: t2.text,
    triggersBounds: diff2.any,
    triggersZOrder: diff2.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: t2.textRotation,
    triggersBounds: diff2.any
  }, {
    name: "text-margin-x",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "text-margin-y",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }];
  var sourceLabel = [{
    name: "source-label",
    type: t2.text,
    triggersBounds: diff2.any
  }, {
    name: "source-text-rotation",
    type: t2.textRotation,
    triggersBounds: diff2.any
  }, {
    name: "source-text-margin-x",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "source-text-margin-y",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "source-text-offset",
    type: t2.size,
    triggersBounds: diff2.any
  }];
  var targetLabel = [{
    name: "target-label",
    type: t2.text,
    triggersBounds: diff2.any
  }, {
    name: "target-text-rotation",
    type: t2.textRotation,
    triggersBounds: diff2.any
  }, {
    name: "target-text-margin-x",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "target-text-margin-y",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "target-text-offset",
    type: t2.size,
    triggersBounds: diff2.any
  }];
  var labelDimensions = [{
    name: "font-family",
    type: t2.fontFamily,
    triggersBounds: diff2.any
  }, {
    name: "font-style",
    type: t2.fontStyle,
    triggersBounds: diff2.any
  }, {
    name: "font-weight",
    type: t2.fontWeight,
    triggersBounds: diff2.any
  }, {
    name: "font-size",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "text-transform",
    type: t2.textTransform,
    triggersBounds: diff2.any
  }, {
    name: "text-wrap",
    type: t2.textWrap,
    triggersBounds: diff2.any
  }, {
    name: "text-overflow-wrap",
    type: t2.textOverflowWrap,
    triggersBounds: diff2.any
  }, {
    name: "text-max-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "text-outline-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "line-height",
    type: t2.positiveNumber,
    triggersBounds: diff2.any
  }];
  var commonLabel = [{
    name: "text-valign",
    type: t2.valign,
    triggersBounds: diff2.any
  }, {
    name: "text-halign",
    type: t2.halign,
    triggersBounds: diff2.any
  }, {
    name: "color",
    type: t2.color
  }, {
    name: "text-outline-color",
    type: t2.color
  }, {
    name: "text-outline-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "text-background-color",
    type: t2.color
  }, {
    name: "text-background-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "text-border-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "text-border-color",
    type: t2.color
  }, {
    name: "text-border-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "text-border-style",
    type: t2.borderStyle,
    triggersBounds: diff2.any
  }, {
    name: "text-background-shape",
    type: t2.textBackgroundShape,
    triggersBounds: diff2.any
  }, {
    name: "text-justification",
    type: t2.justification
  }, {
    name: "box-select-labels",
    type: t2.bool,
    triggersBounds: diff2.any
  }];
  var behavior = [{
    name: "events",
    type: t2.bool,
    triggersZOrder: diff2.any
  }, {
    name: "text-events",
    type: t2.bool,
    triggersZOrder: diff2.any
  }, {
    name: "box-selection",
    type: t2.boxSelection,
    triggersZOrder: diff2.any
  }];
  var visibility = [{
    name: "display",
    type: t2.display,
    triggersZOrder: diff2.any,
    triggersBounds: diff2.any,
    triggersBoundsOfConnectedEdges: diff2.any,
    triggersBoundsOfParallelEdges: function triggersBoundsOfParallelEdges(fromValue, toValue, ele) {
      if (fromValue === toValue) {
        return false;
      }
      return ele.pstyle("curve-style").value === "bezier";
    }
  }, {
    name: "visibility",
    type: t2.visibility,
    triggersZOrder: diff2.any
  }, {
    name: "opacity",
    type: t2.zeroOneNumber,
    triggersZOrder: diff2.zeroNonZero
  }, {
    name: "text-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: t2.size
  }, {
    name: "z-compound-depth",
    type: t2.zCompoundDepth,
    triggersZOrder: diff2.any
  }, {
    name: "z-index-compare",
    type: t2.zIndexCompare,
    triggersZOrder: diff2.any
  }, {
    name: "z-index",
    type: t2.number,
    triggersZOrder: diff2.any
  }];
  var overlay = [{
    name: "overlay-padding",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "overlay-color",
    type: t2.color
  }, {
    name: "overlay-opacity",
    type: t2.zeroOneNumber,
    triggersBounds: diff2.zeroNonZero
  }, {
    name: "overlay-shape",
    type: t2.overlayShape,
    triggersBounds: diff2.any
  }, {
    name: "overlay-corner-radius",
    type: t2.cornerRadius
  }];
  var underlay = [{
    name: "underlay-padding",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "underlay-color",
    type: t2.color
  }, {
    name: "underlay-opacity",
    type: t2.zeroOneNumber,
    triggersBounds: diff2.zeroNonZero
  }, {
    name: "underlay-shape",
    type: t2.overlayShape,
    triggersBounds: diff2.any
  }, {
    name: "underlay-corner-radius",
    type: t2.cornerRadius
  }];
  var transition = [{
    name: "transition-property",
    type: t2.propList
  }, {
    name: "transition-duration",
    type: t2.time
  }, {
    name: "transition-delay",
    type: t2.time
  }, {
    name: "transition-timing-function",
    type: t2.easing
  }];
  var nodeSizeHashOverride = function nodeSizeHashOverride2(ele, parsedProp) {
    if (parsedProp.value === "label") {
      return -ele.poolIndex();
    } else {
      return parsedProp.pfValue;
    }
  };
  var nodeBody = [{
    name: "height",
    type: t2.nodeSize,
    triggersBounds: diff2.any,
    hashOverride: nodeSizeHashOverride
  }, {
    name: "width",
    type: t2.nodeSize,
    triggersBounds: diff2.any,
    hashOverride: nodeSizeHashOverride
  }, {
    name: "shape",
    type: t2.nodeShape,
    triggersBounds: diff2.any
  }, {
    name: "shape-polygon-points",
    type: t2.polygonPointList,
    triggersBounds: diff2.any
  }, {
    name: "corner-radius",
    type: t2.cornerRadius
  }, {
    name: "background-color",
    type: t2.color
  }, {
    name: "background-fill",
    type: t2.fill
  }, {
    name: "background-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "background-blacken",
    type: t2.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: t2.colors
  }, {
    name: "background-gradient-stop-positions",
    type: t2.percentages
  }, {
    name: "background-gradient-direction",
    type: t2.gradientDirection
  }, {
    name: "padding",
    type: t2.sizeMaybePercent,
    triggersBounds: diff2.any
  }, {
    name: "padding-relative-to",
    type: t2.paddingRelativeTo,
    triggersBounds: diff2.any
  }, {
    name: "bounds-expansion",
    type: t2.boundsExpansion,
    triggersBounds: diff2.any
  }];
  var nodeBorder = [{
    name: "border-color",
    type: t2.color
  }, {
    name: "border-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "border-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "border-style",
    type: t2.borderStyle
  }, {
    name: "border-cap",
    type: t2.lineCap
  }, {
    name: "border-join",
    type: t2.lineJoin
  }, {
    name: "border-dash-pattern",
    type: t2.numbers
  }, {
    name: "border-dash-offset",
    type: t2.number
  }, {
    name: "border-position",
    type: t2.linePosition
  }];
  var nodeOutline = [{
    name: "outline-color",
    type: t2.color
  }, {
    name: "outline-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "outline-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "outline-style",
    type: t2.borderStyle
  }, {
    name: "outline-offset",
    type: t2.size,
    triggersBounds: diff2.any
  }];
  var backgroundImage = [{
    name: "background-image",
    type: t2.urls
  }, {
    name: "background-image-crossorigin",
    type: t2.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: t2.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: t2.bgContainment
  }, {
    name: "background-image-smoothing",
    type: t2.bools
  }, {
    name: "background-position-x",
    type: t2.bgPos
  }, {
    name: "background-position-y",
    type: t2.bgPos
  }, {
    name: "background-width-relative-to",
    type: t2.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: t2.bgRelativeTo
  }, {
    name: "background-repeat",
    type: t2.bgRepeat
  }, {
    name: "background-fit",
    type: t2.bgFit
  }, {
    name: "background-clip",
    type: t2.bgClip
  }, {
    name: "background-width",
    type: t2.bgWH
  }, {
    name: "background-height",
    type: t2.bgWH
  }, {
    name: "background-offset-x",
    type: t2.bgPos
  }, {
    name: "background-offset-y",
    type: t2.bgPos
  }];
  var compound = [{
    name: "position",
    type: t2.position,
    triggersBounds: diff2.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: t2.compoundIncludeLabels,
    triggersBounds: diff2.any
  }, {
    name: "min-width",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "min-width-bias-left",
    type: t2.sizeMaybePercent,
    triggersBounds: diff2.any
  }, {
    name: "min-width-bias-right",
    type: t2.sizeMaybePercent,
    triggersBounds: diff2.any
  }, {
    name: "min-height",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "min-height-bias-top",
    type: t2.sizeMaybePercent,
    triggersBounds: diff2.any
  }, {
    name: "min-height-bias-bottom",
    type: t2.sizeMaybePercent,
    triggersBounds: diff2.any
  }];
  var edgeLine = [{
    name: "line-style",
    type: t2.lineStyle
  }, {
    name: "line-color",
    type: t2.color
  }, {
    name: "line-fill",
    type: t2.fill
  }, {
    name: "line-cap",
    type: t2.lineCap
  }, {
    name: "line-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: t2.numbers
  }, {
    name: "line-dash-offset",
    type: t2.number
  }, {
    name: "line-outline-width",
    type: t2.size
  }, {
    name: "line-outline-color",
    type: t2.color
  }, {
    name: "line-gradient-stop-colors",
    type: t2.colors
  }, {
    name: "line-gradient-stop-positions",
    type: t2.percentages
  }, {
    name: "curve-style",
    type: t2.curveStyle,
    triggersBounds: diff2.any,
    triggersBoundsOfParallelEdges: function triggersBoundsOfParallelEdges(fromValue, toValue) {
      if (fromValue === toValue) {
        return false;
      }
      return fromValue === "bezier" || // remove from bundle
      toValue === "bezier";
    }
  }, {
    name: "haystack-radius",
    type: t2.zeroOneNumber,
    triggersBounds: diff2.any
  }, {
    name: "source-endpoint",
    type: t2.edgeEndpoint,
    triggersBounds: diff2.any
  }, {
    name: "target-endpoint",
    type: t2.edgeEndpoint,
    triggersBounds: diff2.any
  }, {
    name: "control-point-step-size",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "control-point-distances",
    type: t2.bidirectionalSizes,
    triggersBounds: diff2.any
  }, {
    name: "control-point-weights",
    type: t2.numbers,
    triggersBounds: diff2.any
  }, {
    name: "segment-distances",
    type: t2.bidirectionalSizes,
    triggersBounds: diff2.any
  }, {
    name: "segment-weights",
    type: t2.numbers,
    triggersBounds: diff2.any
  }, {
    name: "segment-radii",
    type: t2.numbers,
    triggersBounds: diff2.any
  }, {
    name: "radius-type",
    type: t2.radiusType,
    triggersBounds: diff2.any
  }, {
    name: "taxi-turn",
    type: t2.bidirectionalSizeMaybePercent,
    triggersBounds: diff2.any
  }, {
    name: "taxi-turn-min-distance",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "taxi-direction",
    type: t2.axisDirection,
    triggersBounds: diff2.any
  }, {
    name: "taxi-radius",
    type: t2.number,
    triggersBounds: diff2.any
  }, {
    name: "edge-distances",
    type: t2.edgeDistances,
    triggersBounds: diff2.any
  }, {
    name: "arrow-scale",
    type: t2.positiveNumber,
    triggersBounds: diff2.any
  }, {
    name: "loop-direction",
    type: t2.angle,
    triggersBounds: diff2.any
  }, {
    name: "loop-sweep",
    type: t2.angle,
    triggersBounds: diff2.any
  }, {
    name: "source-distance-from-node",
    type: t2.size,
    triggersBounds: diff2.any
  }, {
    name: "target-distance-from-node",
    type: t2.size,
    triggersBounds: diff2.any
  }];
  var ghost = [{
    name: "ghost",
    type: t2.bool,
    triggersBounds: diff2.any
  }, {
    name: "ghost-offset-x",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "ghost-offset-y",
    type: t2.bidirectionalSize,
    triggersBounds: diff2.any
  }, {
    name: "ghost-opacity",
    type: t2.zeroOneNumber
  }];
  var core3 = [{
    name: "selection-box-color",
    type: t2.color
  }, {
    name: "selection-box-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: t2.color
  }, {
    name: "selection-box-border-width",
    type: t2.size
  }, {
    name: "active-bg-color",
    type: t2.color
  }, {
    name: "active-bg-opacity",
    type: t2.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: t2.size
  }, {
    name: "outside-texture-bg-color",
    type: t2.color
  }, {
    name: "outside-texture-bg-opacity",
    type: t2.zeroOneNumber
  }];
  var pie = [];
  styfn$2.pieBackgroundN = 16;
  pie.push({
    name: "pie-size",
    type: t2.sizeMaybePercent
  });
  pie.push({
    name: "pie-hole",
    type: t2.sizeMaybePercent
  });
  pie.push({
    name: "pie-start-angle",
    type: t2.angle
  });
  for (var i2 = 1; i2 <= styfn$2.pieBackgroundN; i2++) {
    pie.push({
      name: "pie-" + i2 + "-background-color",
      type: t2.color
    });
    pie.push({
      name: "pie-" + i2 + "-background-size",
      type: t2.percent
    });
    pie.push({
      name: "pie-" + i2 + "-background-opacity",
      type: t2.zeroOneNumber
    });
  }
  var stripe = [];
  styfn$2.stripeBackgroundN = 16;
  stripe.push({
    name: "stripe-size",
    type: t2.sizeMaybePercent
  });
  stripe.push({
    name: "stripe-direction",
    type: t2.axisDirectionPrimary
  });
  for (var _i = 1; _i <= styfn$2.stripeBackgroundN; _i++) {
    stripe.push({
      name: "stripe-" + _i + "-background-color",
      type: t2.color
    });
    stripe.push({
      name: "stripe-" + _i + "-background-size",
      type: t2.percent
    });
    stripe.push({
      name: "stripe-" + _i + "-background-opacity",
      type: t2.zeroOneNumber
    });
  }
  var edgeArrow = [];
  var arrowPrefixes = styfn$2.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: t2.arrowShape,
    triggersBounds: diff2.any
  }, {
    name: "arrow-color",
    type: t2.color
  }, {
    name: "arrow-fill",
    type: t2.arrowFill
  }, {
    name: "arrow-width",
    type: t2.arrowWidth
  }].forEach(function(prop2) {
    arrowPrefixes.forEach(function(prefix) {
      var name = prefix + "-" + prop2.name;
      var type = prop2.type, triggersBounds = prop2.triggersBounds;
      edgeArrow.push({
        name,
        type,
        triggersBounds
      });
    });
  }, {});
  var props = styfn$2.properties = [].concat(behavior, transition, visibility, overlay, underlay, ghost, commonLabel, labelDimensions, mainLabel, sourceLabel, targetLabel, nodeBody, nodeBorder, nodeOutline, backgroundImage, pie, stripe, compound, edgeLine, edgeArrow, core3);
  var propGroups = styfn$2.propertyGroups = {
    // common to all eles
    behavior,
    transition,
    visibility,
    overlay,
    underlay,
    ghost,
    // labels
    commonLabel,
    labelDimensions,
    mainLabel,
    sourceLabel,
    targetLabel,
    // node props
    nodeBody,
    nodeBorder,
    nodeOutline,
    backgroundImage,
    pie,
    stripe,
    compound,
    // edge props
    edgeLine,
    edgeArrow,
    core: core3
  };
  var propGroupNames = styfn$2.propertyGroupNames = {};
  var propGroupKeys = styfn$2.propertyGroupKeys = Object.keys(propGroups);
  propGroupKeys.forEach(function(key) {
    propGroupNames[key] = propGroups[key].map(function(prop2) {
      return prop2.name;
    });
    propGroups[key].forEach(function(prop2) {
      return prop2.groupKey = key;
    });
  });
  var aliases = styfn$2.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "segment-distance",
    pointsTo: "segment-distances"
  }, {
    name: "segment-weight",
    pointsTo: "segment-weights"
  }, {
    name: "segment-radius",
    pointsTo: "segment-radii"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  styfn$2.propertyNames = props.map(function(p3) {
    return p3.name;
  });
  for (var _i2 = 0; _i2 < props.length; _i2++) {
    var prop = props[_i2];
    props[prop.name] = prop;
  }
  for (var _i3 = 0; _i3 < aliases.length; _i3++) {
    var alias = aliases[_i3];
    var pointsToProp = props[alias.pointsTo];
    var aliasProp = {
      name: alias.name,
      alias: true,
      pointsTo: pointsToProp
    };
    props.push(aliasProp);
    props[alias.name] = aliasProp;
  }
})();
styfn$2.getDefaultProperty = function(name) {
  return this.getDefaultProperties()[name];
};
styfn$2.getDefaultProperties = function() {
  var _p = this._private;
  if (_p.defaultProperties != null) {
    return _p.defaultProperties;
  }
  var rawProps = extend({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    "events": "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    "color": "#000",
    "box-selection": "contain",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    "visibility": "visible",
    "display": "element",
    "opacity": 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    "label": "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "overlay-corner-radius": "auto",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "underlay-corner-radius": "auto",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    "box-select-labels": "no",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "border-dash-pattern": [4, 2],
    "border-dash-offset": 0,
    "border-cap": "butt",
    "border-join": "miter",
    "border-position": "center",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    "height": 30,
    "width": 30,
    "shape": "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "corner-radius": "auto",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    "ghost": "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    "padding": 0,
    "padding-relative-to": "width",
    "position": "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%",
    "pie-hole": 0,
    "pie-start-angle": "0deg"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(css, prop2) {
    for (var i3 = 1; i3 <= styfn$2.pieBackgroundN; i3++) {
      var name2 = prop2.name.replace("{{i}}", i3);
      var val2 = prop2.value;
      css[name2] = val2;
    }
    return css;
  }, {}), {
    // node stripes bg
    "stripe-size": "100%",
    "stripe-direction": "horizontal"
  }, [{
    name: "stripe-{{i}}-background-color",
    value: "black"
  }, {
    name: "stripe-{{i}}-background-size",
    value: "0%"
  }, {
    name: "stripe-{{i}}-background-opacity",
    value: 1
  }].reduce(function(css, prop2) {
    for (var i3 = 1; i3 <= styfn$2.stripeBackgroundN; i3++) {
      var name2 = prop2.name.replace("{{i}}", i3);
      var val2 = prop2.value;
      css[name2] = val2;
    }
    return css;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-outline-width": 0,
    "line-outline-color": "#000",
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "segment-radii": 15,
    "radius-type": "arc-radius",
    "taxi-turn": "50%",
    "taxi-radius": 15,
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(css, prop2) {
    styfn$2.arrowPrefixes.forEach(function(prefix) {
      var name2 = prefix + "-" + prop2.name;
      var val2 = prop2.value;
      css[name2] = val2;
    });
    return css;
  }, {}));
  var parsedProps = {};
  for (var i2 = 0; i2 < this.properties.length; i2++) {
    var prop = this.properties[i2];
    if (prop.pointsTo) {
      continue;
    }
    var name = prop.name;
    var val = rawProps[name];
    var parsedProp = this.parse(name, val);
    parsedProps[name] = parsedProp;
  }
  _p.defaultProperties = parsedProps;
  return _p.defaultProperties;
};
styfn$2.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    "shape": "rectangle",
    "padding": 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    "width": 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  });
  this.defaultLength = this.length;
};
var styfn$1 = {};
styfn$1.parse = function(name, value, propIsBypass, propIsFlat) {
  var self2 = this;
  if (fn$6(value)) {
    return self2.parseImplWarn(name, value, propIsBypass, propIsFlat);
  }
  var flatKey = propIsFlat === "mapping" || propIsFlat === true || propIsFlat === false || propIsFlat == null ? "dontcare" : propIsFlat;
  var bypassKey = propIsBypass ? "t" : "f";
  var valueKey = "" + value;
  var argHash = hashStrings(name, valueKey, bypassKey, flatKey);
  var propCache = self2.propCache = self2.propCache || [];
  var ret;
  if (!(ret = propCache[argHash])) {
    ret = propCache[argHash] = self2.parseImplWarn(name, value, propIsBypass, propIsFlat);
  }
  if (propIsBypass || propIsFlat === "mapping") {
    ret = copy(ret);
    if (ret) {
      ret.value = copy(ret.value);
    }
  }
  return ret;
};
styfn$1.parseImplWarn = function(name, value, propIsBypass, propIsFlat) {
  var prop = this.parseImpl(name, value, propIsBypass, propIsFlat);
  if (!prop && value != null) {
    warn("The style property `".concat(name, ": ").concat(value, "` is invalid"));
  }
  if (prop && (prop.name === "width" || prop.name === "height") && value === "label") {
    warn("The style value of `label` is deprecated for `" + prop.name + "`");
  }
  return prop;
};
styfn$1.parseImpl = function(name, value, propIsBypass, propIsFlat) {
  var self2 = this;
  name = camel2dash(name);
  var property = self2.properties[name];
  var passedValue = value;
  var types = self2.types;
  if (!property) {
    return null;
  }
  if (value === void 0) {
    return null;
  }
  if (property.alias) {
    property = property.pointsTo;
    name = property.name;
  }
  var valueIsString = string(value);
  if (valueIsString) {
    value = value.trim();
  }
  var type = property.type;
  if (!type) {
    return null;
  }
  if (propIsBypass && (value === "" || value === null)) {
    return {
      name,
      value,
      bypass: true,
      deleteBypass: true
    };
  }
  if (fn$6(value)) {
    return {
      name,
      value,
      strValue: "fn",
      mapped: types.fn,
      bypass: propIsBypass
    };
  }
  var data4, mapData;
  if (!valueIsString || propIsFlat || value.length < 7 || value[1] !== "a") ;
  else if (value.length >= 7 && value[0] === "d" && (data4 = new RegExp(types.data.regex).exec(value))) {
    if (propIsBypass) {
      return false;
    }
    var mapped = types.data;
    return {
      name,
      value: data4,
      strValue: "" + value,
      mapped,
      field: data4[1],
      bypass: propIsBypass
    };
  } else if (value.length >= 10 && value[0] === "m" && (mapData = new RegExp(types.mapData.regex).exec(value))) {
    if (propIsBypass) {
      return false;
    }
    if (type.multiple) {
      return false;
    }
    var _mapped = types.mapData;
    if (!(type.color || type.number)) {
      return false;
    }
    var valueMin = this.parse(name, mapData[4]);
    if (!valueMin || valueMin.mapped) {
      return false;
    }
    var valueMax = this.parse(name, mapData[5]);
    if (!valueMax || valueMax.mapped) {
      return false;
    }
    if (valueMin.pfValue === valueMax.pfValue || valueMin.strValue === valueMax.strValue) {
      warn("`" + name + ": " + value + "` is not a valid mapper because the output range is zero; converting to `" + name + ": " + valueMin.strValue + "`");
      return this.parse(name, valueMin.strValue);
    } else if (type.color) {
      var c1 = valueMin.value;
      var c2 = valueMax.value;
      var same2 = c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2] && // optional alpha
      (c1[3] === c2[3] || (c1[3] == null || c1[3] === 1) && (c2[3] == null || c2[3] === 1));
      if (same2) {
        return false;
      }
    }
    return {
      name,
      value: mapData,
      strValue: "" + value,
      mapped: _mapped,
      field: mapData[1],
      fieldMin: parseFloat(mapData[2]),
      // min & max are numeric
      fieldMax: parseFloat(mapData[3]),
      valueMin: valueMin.value,
      valueMax: valueMax.value,
      bypass: propIsBypass
    };
  }
  if (type.multiple && propIsFlat !== "multiple") {
    var vals;
    if (valueIsString) {
      vals = value.split(/\s+/);
    } else if (array(value)) {
      vals = value;
    } else {
      vals = [value];
    }
    if (type.evenMultiple && vals.length % 2 !== 0) {
      return null;
    }
    var valArr = [];
    var unitsArr = [];
    var pfValArr = [];
    var strVal = "";
    var hasEnum = false;
    for (var i2 = 0; i2 < vals.length; i2++) {
      var p3 = self2.parse(name, vals[i2], propIsBypass, "multiple");
      hasEnum = hasEnum || string(p3.value);
      valArr.push(p3.value);
      pfValArr.push(p3.pfValue != null ? p3.pfValue : p3.value);
      unitsArr.push(p3.units);
      strVal += (i2 > 0 ? " " : "") + p3.strValue;
    }
    if (type.validate && !type.validate(valArr, unitsArr)) {
      return null;
    }
    if (type.singleEnum && hasEnum) {
      if (valArr.length === 1 && string(valArr[0])) {
        return {
          name,
          value: valArr[0],
          strValue: valArr[0],
          bypass: propIsBypass
        };
      } else {
        return null;
      }
    }
    return {
      name,
      value: valArr,
      pfValue: pfValArr,
      strValue: strVal,
      bypass: propIsBypass,
      units: unitsArr
    };
  }
  var checkEnums = function checkEnums2() {
    for (var _i = 0; _i < type.enums.length; _i++) {
      var en = type.enums[_i];
      if (en === value) {
        return {
          name,
          value,
          strValue: "" + value,
          bypass: propIsBypass
        };
      }
    }
    return null;
  };
  if (type.number) {
    var units;
    var implicitUnits = "px";
    if (type.units) {
      units = type.units;
    }
    if (type.implicitUnits) {
      implicitUnits = type.implicitUnits;
    }
    if (!type.unitless) {
      if (valueIsString) {
        var unitsRegex = "px|em" + (type.allowPercent ? "|\\%" : "");
        if (units) {
          unitsRegex = units;
        }
        var match2 = value.match("^(" + number2 + ")(" + unitsRegex + ")?$");
        if (match2) {
          value = match2[1];
          units = match2[2] || implicitUnits;
        }
      } else if (!units || type.implicitUnits) {
        units = implicitUnits;
      }
    }
    value = parseFloat(value);
    if (isNaN(value) && type.enums === void 0) {
      return null;
    }
    if (isNaN(value) && type.enums !== void 0) {
      value = passedValue;
      return checkEnums();
    }
    if (type.integer && !integer(value)) {
      return null;
    }
    if (type.min !== void 0 && (value < type.min || type.strictMin && value === type.min) || type.max !== void 0 && (value > type.max || type.strictMax && value === type.max)) {
      return null;
    }
    var ret = {
      name,
      value,
      strValue: "" + value + (units ? units : ""),
      units,
      bypass: propIsBypass
    };
    if (type.unitless || units !== "px" && units !== "em") {
      ret.pfValue = value;
    } else {
      ret.pfValue = units === "px" || !units ? value : this.getEmSizeInPixels() * value;
    }
    if (units === "ms" || units === "s") {
      ret.pfValue = units === "ms" ? value : 1e3 * value;
    }
    if (units === "deg" || units === "rad") {
      ret.pfValue = units === "rad" ? value : deg2rad(value);
    }
    if (units === "%") {
      ret.pfValue = value / 100;
    }
    return ret;
  } else if (type.propList) {
    var props = [];
    var propsStr = "" + value;
    if (propsStr === "none") ;
    else {
      var propsSplit = propsStr.split(/\s*,\s*|\s+/);
      for (var _i2 = 0; _i2 < propsSplit.length; _i2++) {
        var propName = propsSplit[_i2].trim();
        if (self2.properties[propName]) {
          props.push(propName);
        } else {
          warn("`" + propName + "` is not a valid property name");
        }
      }
      if (props.length === 0) {
        return null;
      }
    }
    return {
      name,
      value: props,
      strValue: props.length === 0 ? "none" : props.join(" "),
      bypass: propIsBypass
    };
  } else if (type.color) {
    var tuple = color2tuple(value);
    if (!tuple) {
      return null;
    }
    return {
      name,
      value: tuple,
      pfValue: tuple,
      strValue: "rgb(" + tuple[0] + "," + tuple[1] + "," + tuple[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: propIsBypass
    };
  } else if (type.regex || type.regexes) {
    if (type.enums) {
      var enumProp = checkEnums();
      if (enumProp) {
        return enumProp;
      }
    }
    var regexes = type.regexes ? type.regexes : [type.regex];
    for (var _i3 = 0; _i3 < regexes.length; _i3++) {
      var regex = new RegExp(regexes[_i3]);
      var m2 = regex.exec(value);
      if (m2) {
        return {
          name,
          value: type.singleRegexMatchValue ? m2[1] : m2,
          strValue: "" + value,
          bypass: propIsBypass
        };
      }
    }
    return null;
  } else if (type.string) {
    return {
      name,
      value: "" + value,
      strValue: "" + value,
      bypass: propIsBypass
    };
  } else if (type.enums) {
    return checkEnums();
  } else {
    return null;
  }
};
var _Style = function Style(cy) {
  if (!(this instanceof _Style)) {
    return new _Style(cy);
  }
  if (!core(cy)) {
    error("A style must have a core reference");
    return;
  }
  this._private = {
    cy,
    coreStyle: {}
  };
  this.length = 0;
  this.resetToDefault();
};
var styfn = _Style.prototype;
styfn.instanceString = function() {
  return "style";
};
styfn.clear = function() {
  var _p = this._private;
  var cy = _p.cy;
  var eles = cy.elements();
  for (var i2 = 0; i2 < this.length; i2++) {
    this[i2] = void 0;
  }
  this.length = 0;
  _p.contextStyles = {};
  _p.propDiffs = {};
  this.cleanElements(eles, true);
  eles.forEach(function(ele) {
    var ele_p = ele[0]._private;
    ele_p.styleDirty = true;
    ele_p.appliedInitStyle = false;
  });
  return this;
};
styfn.resetToDefault = function() {
  this.clear();
  this.addDefaultStylesheet();
  return this;
};
styfn.core = function(propName) {
  return this._private.coreStyle[propName] || this.getDefaultProperty(propName);
};
styfn.selector = function(selectorStr) {
  var selector = selectorStr === "core" ? null : new Selector(selectorStr);
  var i2 = this.length++;
  this[i2] = {
    selector,
    properties: [],
    mappedProperties: [],
    index: i2
  };
  return this;
};
styfn.css = function() {
  var self2 = this;
  var args = arguments;
  if (args.length === 1) {
    var map2 = args[0];
    for (var i2 = 0; i2 < self2.properties.length; i2++) {
      var prop = self2.properties[i2];
      var mapVal = map2[prop.name];
      if (mapVal === void 0) {
        mapVal = map2[dash2camel(prop.name)];
      }
      if (mapVal !== void 0) {
        this.cssRule(prop.name, mapVal);
      }
    }
  } else if (args.length === 2) {
    this.cssRule(args[0], args[1]);
  }
  return this;
};
styfn.style = styfn.css;
styfn.cssRule = function(name, value) {
  var property = this.parse(name, value);
  if (property) {
    var i2 = this.length - 1;
    this[i2].properties.push(property);
    this[i2].properties[property.name] = property;
    if (property.name.match(/pie-(\d+)-background-size/) && property.value) {
      this._private.hasPie = true;
    }
    if (property.name.match(/stripe-(\d+)-background-size/) && property.value) {
      this._private.hasStripe = true;
    }
    if (property.mapped) {
      this[i2].mappedProperties.push(property);
    }
    var currentSelectorIsCore = !this[i2].selector;
    if (currentSelectorIsCore) {
      this._private.coreStyle[property.name] = property;
    }
  }
  return this;
};
styfn.append = function(style3) {
  if (stylesheet(style3)) {
    style3.appendToStyle(this);
  } else if (array(style3)) {
    this.appendFromJson(style3);
  } else if (string(style3)) {
    this.appendFromString(style3);
  }
  return this;
};
_Style.fromJson = function(cy, json2) {
  var style3 = new _Style(cy);
  style3.fromJson(json2);
  return style3;
};
_Style.fromString = function(cy, string3) {
  return new _Style(cy).fromString(string3);
};
[styfn$8, styfn$7, styfn$6, styfn$5, styfn$4, styfn$3, styfn$2, styfn$1].forEach(function(props) {
  extend(styfn, props);
});
_Style.types = styfn.types;
_Style.properties = styfn.properties;
_Style.propertyGroups = styfn.propertyGroups;
_Style.propertyGroupNames = styfn.propertyGroupNames;
_Style.propertyGroupKeys = styfn.propertyGroupKeys;
var corefn$2 = {
  style: function style2(newStyle) {
    if (newStyle) {
      var s2 = this.setStyle(newStyle);
      s2.update();
    }
    return this._private.style;
  },
  setStyle: function setStyle(style3) {
    var _p = this._private;
    if (stylesheet(style3)) {
      _p.style = style3.generateStyle(this);
    } else if (array(style3)) {
      _p.style = _Style.fromJson(this, style3);
    } else if (string(style3)) {
      _p.style = _Style.fromString(this, style3);
    } else {
      _p.style = _Style(this);
    }
    return _p.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function updateStyle2() {
    this.mutableElements().updateStyle();
  }
};
var defaultSelectionType = "single";
var corefn$1 = {
  autolock: function autolock(bool) {
    if (bool !== void 0) {
      this._private.autolock = bool ? true : false;
    } else {
      return this._private.autolock;
    }
    return this;
  },
  autoungrabify: function autoungrabify(bool) {
    if (bool !== void 0) {
      this._private.autoungrabify = bool ? true : false;
    } else {
      return this._private.autoungrabify;
    }
    return this;
  },
  autounselectify: function autounselectify(bool) {
    if (bool !== void 0) {
      this._private.autounselectify = bool ? true : false;
    } else {
      return this._private.autounselectify;
    }
    return this;
  },
  selectionType: function selectionType(selType) {
    var _p = this._private;
    if (_p.selectionType == null) {
      _p.selectionType = defaultSelectionType;
    }
    if (selType !== void 0) {
      if (selType === "additive" || selType === "single") {
        _p.selectionType = selType;
      }
    } else {
      return _p.selectionType;
    }
    return this;
  },
  panningEnabled: function panningEnabled(bool) {
    if (bool !== void 0) {
      this._private.panningEnabled = bool ? true : false;
    } else {
      return this._private.panningEnabled;
    }
    return this;
  },
  userPanningEnabled: function userPanningEnabled(bool) {
    if (bool !== void 0) {
      this._private.userPanningEnabled = bool ? true : false;
    } else {
      return this._private.userPanningEnabled;
    }
    return this;
  },
  zoomingEnabled: function zoomingEnabled(bool) {
    if (bool !== void 0) {
      this._private.zoomingEnabled = bool ? true : false;
    } else {
      return this._private.zoomingEnabled;
    }
    return this;
  },
  userZoomingEnabled: function userZoomingEnabled(bool) {
    if (bool !== void 0) {
      this._private.userZoomingEnabled = bool ? true : false;
    } else {
      return this._private.userZoomingEnabled;
    }
    return this;
  },
  boxSelectionEnabled: function boxSelectionEnabled(bool) {
    if (bool !== void 0) {
      this._private.boxSelectionEnabled = bool ? true : false;
    } else {
      return this._private.boxSelectionEnabled;
    }
    return this;
  },
  pan: function pan() {
    var args = arguments;
    var pan2 = this._private.pan;
    var dim, val, dims, x3, y3;
    switch (args.length) {
      case 0:
        return pan2;
      case 1:
        if (string(args[0])) {
          dim = args[0];
          return pan2[dim];
        } else if (plainObject(args[0])) {
          if (!this._private.panningEnabled) {
            return this;
          }
          dims = args[0];
          x3 = dims.x;
          y3 = dims.y;
          if (number$1(x3)) {
            pan2.x = x3;
          }
          if (number$1(y3)) {
            pan2.y = y3;
          }
          this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled) {
          return this;
        }
        dim = args[0];
        val = args[1];
        if ((dim === "x" || dim === "y") && number$1(val)) {
          pan2[dim] = val;
        }
        this.emit("pan viewport");
        break;
    }
    this.notify("viewport");
    return this;
  },
  panBy: function panBy(arg0, arg1) {
    var args = arguments;
    var pan2 = this._private.pan;
    var dim, val, dims, x3, y3;
    if (!this._private.panningEnabled) {
      return this;
    }
    switch (args.length) {
      case 1:
        if (plainObject(arg0)) {
          dims = args[0];
          x3 = dims.x;
          y3 = dims.y;
          if (number$1(x3)) {
            pan2.x += x3;
          }
          if (number$1(y3)) {
            pan2.y += y3;
          }
          this.emit("pan viewport");
        }
        break;
      case 2:
        dim = arg0;
        val = arg1;
        if ((dim === "x" || dim === "y") && number$1(val)) {
          pan2[dim] += val;
        }
        this.emit("pan viewport");
        break;
    }
    this.notify("viewport");
    return this;
  },
  gc: function gc() {
    this.notify("gc");
  },
  fit: function fit(elements, padding) {
    var viewportState = this.getFitViewport(elements, padding);
    if (viewportState) {
      var _p = this._private;
      _p.zoom = viewportState.zoom;
      _p.pan = viewportState.pan;
      this.emit("pan zoom viewport");
      this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function getFitViewport(elements, padding) {
    if (number$1(elements) && padding === void 0) {
      padding = elements;
      elements = void 0;
    }
    if (!this._private.panningEnabled || !this._private.zoomingEnabled) {
      return;
    }
    var bb;
    if (string(elements)) {
      var sel = elements;
      elements = this.$(sel);
    } else if (boundingBox(elements)) {
      var bbe = elements;
      bb = {
        x1: bbe.x1,
        y1: bbe.y1,
        x2: bbe.x2,
        y2: bbe.y2
      };
      bb.w = bb.x2 - bb.x1;
      bb.h = bb.y2 - bb.y1;
    } else if (!elementOrCollection(elements)) {
      elements = this.mutableElements();
    }
    if (elementOrCollection(elements) && elements.empty()) {
      return;
    }
    bb = bb || elements.boundingBox();
    var w2 = this.width();
    var h2 = this.height();
    var zoom2;
    padding = number$1(padding) ? padding : 0;
    if (!isNaN(w2) && !isNaN(h2) && w2 > 0 && h2 > 0 && !isNaN(bb.w) && !isNaN(bb.h) && bb.w > 0 && bb.h > 0) {
      zoom2 = Math.min((w2 - 2 * padding) / bb.w, (h2 - 2 * padding) / bb.h);
      zoom2 = zoom2 > this._private.maxZoom ? this._private.maxZoom : zoom2;
      zoom2 = zoom2 < this._private.minZoom ? this._private.minZoom : zoom2;
      var pan2 = {
        // now pan to middle
        x: (w2 - zoom2 * (bb.x1 + bb.x2)) / 2,
        y: (h2 - zoom2 * (bb.y1 + bb.y2)) / 2
      };
      return {
        zoom: zoom2,
        pan: pan2
      };
    }
    return;
  },
  zoomRange: function zoomRange(min4, max5) {
    var _p = this._private;
    if (max5 == null) {
      var opts = min4;
      min4 = opts.min;
      max5 = opts.max;
    }
    if (number$1(min4) && number$1(max5) && min4 <= max5) {
      _p.minZoom = min4;
      _p.maxZoom = max5;
    } else if (number$1(min4) && max5 === void 0 && min4 <= _p.maxZoom) {
      _p.minZoom = min4;
    } else if (number$1(max5) && min4 === void 0 && max5 >= _p.minZoom) {
      _p.maxZoom = max5;
    }
    return this;
  },
  minZoom: function minZoom(zoom2) {
    if (zoom2 === void 0) {
      return this._private.minZoom;
    } else {
      return this.zoomRange({
        min: zoom2
      });
    }
  },
  maxZoom: function maxZoom(zoom2) {
    if (zoom2 === void 0) {
      return this._private.maxZoom;
    } else {
      return this.zoomRange({
        max: zoom2
      });
    }
  },
  getZoomedViewport: function getZoomedViewport(params) {
    var _p = this._private;
    var currentPan = _p.pan;
    var currentZoom = _p.zoom;
    var pos;
    var zoom2;
    var bail = false;
    if (!_p.zoomingEnabled) {
      bail = true;
    }
    if (number$1(params)) {
      zoom2 = params;
    } else if (plainObject(params)) {
      zoom2 = params.level;
      if (params.position != null) {
        pos = modelToRenderedPosition$1(params.position, currentZoom, currentPan);
      } else if (params.renderedPosition != null) {
        pos = params.renderedPosition;
      }
      if (pos != null && !_p.panningEnabled) {
        bail = true;
      }
    }
    zoom2 = zoom2 > _p.maxZoom ? _p.maxZoom : zoom2;
    zoom2 = zoom2 < _p.minZoom ? _p.minZoom : zoom2;
    if (bail || !number$1(zoom2) || zoom2 === currentZoom || pos != null && (!number$1(pos.x) || !number$1(pos.y))) {
      return null;
    }
    if (pos != null) {
      var pan1 = currentPan;
      var zoom1 = currentZoom;
      var zoom22 = zoom2;
      var pan2 = {
        x: -zoom22 / zoom1 * (pos.x - pan1.x) + pos.x,
        y: -zoom22 / zoom1 * (pos.y - pan1.y) + pos.y
      };
      return {
        zoomed: true,
        panned: true,
        zoom: zoom22,
        pan: pan2
      };
    } else {
      return {
        zoomed: true,
        panned: false,
        zoom: zoom2,
        pan: currentPan
      };
    }
  },
  zoom: function zoom(params) {
    if (params === void 0) {
      return this._private.zoom;
    } else {
      var vp = this.getZoomedViewport(params);
      var _p = this._private;
      if (vp == null || !vp.zoomed) {
        return this;
      }
      _p.zoom = vp.zoom;
      if (vp.panned) {
        _p.pan.x = vp.pan.x;
        _p.pan.y = vp.pan.y;
      }
      this.emit("zoom" + (vp.panned ? " pan" : "") + " viewport");
      this.notify("viewport");
      return this;
    }
  },
  viewport: function viewport(opts) {
    var _p = this._private;
    var zoomDefd = true;
    var panDefd = true;
    var events = [];
    var zoomFailed = false;
    var panFailed = false;
    if (!opts) {
      return this;
    }
    if (!number$1(opts.zoom)) {
      zoomDefd = false;
    }
    if (!plainObject(opts.pan)) {
      panDefd = false;
    }
    if (!zoomDefd && !panDefd) {
      return this;
    }
    if (zoomDefd) {
      var z = opts.zoom;
      if (z < _p.minZoom || z > _p.maxZoom || !_p.zoomingEnabled) {
        zoomFailed = true;
      } else {
        _p.zoom = z;
        events.push("zoom");
      }
    }
    if (panDefd && (!zoomFailed || !opts.cancelOnFailedZoom) && _p.panningEnabled) {
      var p3 = opts.pan;
      if (number$1(p3.x)) {
        _p.pan.x = p3.x;
        panFailed = false;
      }
      if (number$1(p3.y)) {
        _p.pan.y = p3.y;
        panFailed = false;
      }
      if (!panFailed) {
        events.push("pan");
      }
    }
    if (events.length > 0) {
      events.push("viewport");
      this.emit(events.join(" "));
      this.notify("viewport");
    }
    return this;
  },
  center: function center(elements) {
    var pan2 = this.getCenterPan(elements);
    if (pan2) {
      this._private.pan = pan2;
      this.emit("pan viewport");
      this.notify("viewport");
    }
    return this;
  },
  getCenterPan: function getCenterPan(elements, zoom2) {
    if (!this._private.panningEnabled) {
      return;
    }
    if (string(elements)) {
      var selector = elements;
      elements = this.mutableElements().filter(selector);
    } else if (!elementOrCollection(elements)) {
      elements = this.mutableElements();
    }
    if (elements.length === 0) {
      return;
    }
    var bb = elements.boundingBox();
    var w2 = this.width();
    var h2 = this.height();
    zoom2 = zoom2 === void 0 ? this._private.zoom : zoom2;
    var pan2 = {
      // middle
      x: (w2 - zoom2 * (bb.x1 + bb.x2)) / 2,
      y: (h2 - zoom2 * (bb.y1 + bb.y2)) / 2
    };
    return pan2;
  },
  reset: function reset() {
    if (!this._private.panningEnabled || !this._private.zoomingEnabled) {
      return this;
    }
    this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    });
    return this;
  },
  invalidateSize: function invalidateSize() {
    this._private.sizeCache = null;
  },
  size: function size2() {
    var _p = this._private;
    var container2 = _p.container;
    var cy = this;
    return _p.sizeCache = _p.sizeCache || (container2 ? (function() {
      var style3 = cy.window().getComputedStyle(container2);
      var val = function val2(name) {
        return parseFloat(style3.getPropertyValue(name));
      };
      return {
        width: container2.clientWidth - val("padding-left") - val("padding-right"),
        height: container2.clientHeight - val("padding-top") - val("padding-bottom")
      };
    })() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function width() {
    return this.size().width;
  },
  height: function height() {
    return this.size().height;
  },
  extent: function extent() {
    var pan2 = this._private.pan;
    var zoom2 = this._private.zoom;
    var rb = this.renderedExtent();
    var b2 = {
      x1: (rb.x1 - pan2.x) / zoom2,
      x2: (rb.x2 - pan2.x) / zoom2,
      y1: (rb.y1 - pan2.y) / zoom2,
      y2: (rb.y2 - pan2.y) / zoom2
    };
    b2.w = b2.x2 - b2.x1;
    b2.h = b2.y2 - b2.y1;
    return b2;
  },
  renderedExtent: function renderedExtent() {
    var width2 = this.width();
    var height2 = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: width2,
      y2: height2,
      w: width2,
      h: height2
    };
  },
  multiClickDebounceTime: function multiClickDebounceTime(_int) {
    if (_int) this._private.multiClickDebounceTime = _int;
    else return this._private.multiClickDebounceTime;
    return this;
  }
};
corefn$1.centre = corefn$1.center;
corefn$1.autolockNodes = corefn$1.autolock;
corefn$1.autoungrabifyNodes = corefn$1.autoungrabify;
var fn2 = {
  data: define.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeData: define.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  scratch: define.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: define.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  })
};
fn2.attr = fn2.data;
fn2.removeAttr = fn2.removeData;
var Core = function Core2(opts) {
  var cy = this;
  opts = extend({}, opts);
  var container2 = opts.container;
  if (container2 && !htmlElement(container2) && htmlElement(container2[0])) {
    container2 = container2[0];
  }
  var reg = container2 ? container2._cyreg : null;
  reg = reg || {};
  if (reg && reg.cy) {
    reg.cy.destroy();
    reg = {};
  }
  var readies = reg.readies = reg.readies || [];
  if (container2) {
    container2._cyreg = reg;
  }
  reg.cy = cy;
  var head = _window !== void 0 && container2 !== void 0 && !opts.headless;
  var options2 = opts;
  options2.layout = extend({
    name: head ? "grid" : "null"
  }, options2.layout);
  options2.renderer = extend({
    name: head ? "canvas" : "null"
  }, options2.renderer);
  var defVal = function defVal2(def, val, altVal) {
    if (val !== void 0) {
      return val;
    } else if (altVal !== void 0) {
      return altVal;
    } else {
      return def;
    }
  };
  var _p = this._private = {
    container: container2,
    // html dom ele container
    ready: false,
    // whether ready has been triggered
    options: options2,
    // cached options
    elements: new Collection(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new Collection(this),
    // elements being animated
    data: options2.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: false,
    // whether destroy was called
    notificationsEnabled: true,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: defVal(true, options2.zoomingEnabled),
    userZoomingEnabled: defVal(true, options2.userZoomingEnabled),
    panningEnabled: defVal(true, options2.panningEnabled),
    userPanningEnabled: defVal(true, options2.userPanningEnabled),
    boxSelectionEnabled: defVal(true, options2.boxSelectionEnabled),
    autolock: defVal(false, options2.autolock, options2.autolockNodes),
    autoungrabify: defVal(false, options2.autoungrabify, options2.autoungrabifyNodes),
    autounselectify: defVal(false, options2.autounselectify),
    styleEnabled: options2.styleEnabled === void 0 ? head : options2.styleEnabled,
    zoom: number$1(options2.zoom) ? options2.zoom : 1,
    pan: {
      x: plainObject(options2.pan) && number$1(options2.pan.x) ? options2.pan.x : 0,
      y: plainObject(options2.pan) && number$1(options2.pan.y) ? options2.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: false,
    multiClickDebounceTime: defVal(250, options2.multiClickDebounceTime)
  };
  this.createEmitter();
  this.selectionType(options2.selectionType);
  this.zoomRange({
    min: options2.minZoom,
    max: options2.maxZoom
  });
  var loadExtData = function loadExtData2(extData, next) {
    var anyIsPromise = extData.some(promise);
    if (anyIsPromise) {
      return Promise$1.all(extData).then(next);
    } else {
      next(extData);
    }
  };
  if (_p.styleEnabled) {
    cy.setStyle([]);
  }
  var rendererOptions = extend({}, options2, options2.renderer);
  cy.initRenderer(rendererOptions);
  var setElesAndLayout = function setElesAndLayout2(elements, onload, ondone) {
    cy.notifications(false);
    var oldEles = cy.mutableElements();
    if (oldEles.length > 0) {
      oldEles.remove();
    }
    if (elements != null) {
      if (plainObject(elements) || array(elements)) {
        cy.add(elements);
      }
    }
    cy.one("layoutready", function(e2) {
      cy.notifications(true);
      cy.emit(e2);
      cy.one("load", onload);
      cy.emitAndNotify("load");
    }).one("layoutstop", function() {
      cy.one("done", ondone);
      cy.emit("done");
    });
    var layoutOpts = extend({}, cy._private.options.layout);
    layoutOpts.eles = cy.elements();
    cy.layout(layoutOpts).run();
  };
  loadExtData([options2.style, options2.elements], function(thens) {
    var initStyle = thens[0];
    var initEles = thens[1];
    if (_p.styleEnabled) {
      cy.style().append(initStyle);
    }
    setElesAndLayout(initEles, function() {
      cy.startAnimationLoop();
      _p.ready = true;
      if (fn$6(options2.ready)) {
        cy.on("ready", options2.ready);
      }
      for (var i2 = 0; i2 < readies.length; i2++) {
        var fn3 = readies[i2];
        cy.on("ready", fn3);
      }
      if (reg) {
        reg.readies = [];
      }
      cy.emit("ready");
    }, options2.done);
  });
};
var corefn = Core.prototype;
extend(corefn, {
  instanceString: function instanceString3() {
    return "core";
  },
  isReady: function isReady() {
    return this._private.ready;
  },
  destroyed: function destroyed() {
    return this._private.destroyed;
  },
  ready: function ready(fn3) {
    if (this.isReady()) {
      this.emitter().emit("ready", [], fn3);
    } else {
      this.on("ready", fn3);
    }
    return this;
  },
  destroy: function destroy() {
    var cy = this;
    if (cy.destroyed()) return;
    cy.stopAnimationLoop();
    cy.destroyRenderer();
    this.emit("destroy");
    cy._private.destroyed = true;
    return cy;
  },
  hasElementWithId: function hasElementWithId(id2) {
    return this._private.elements.hasElementWithId(id2);
  },
  getElementById: function getElementById(id2) {
    return this._private.elements.getElementById(id2);
  },
  hasCompoundNodes: function hasCompoundNodes() {
    return this._private.hasCompoundNodes;
  },
  headless: function headless() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function styleEnabled() {
    return this._private.styleEnabled;
  },
  addToPool: function addToPool(eles) {
    this._private.elements.merge(eles);
    return this;
  },
  removeFromPool: function removeFromPool(eles) {
    this._private.elements.unmerge(eles);
    return this;
  },
  container: function container() {
    return this._private.container || null;
  },
  window: function window2() {
    var container2 = this._private.container;
    if (container2 == null) return _window;
    var ownerDocument = this._private.container.ownerDocument;
    if (ownerDocument === void 0 || ownerDocument == null) {
      return _window;
    }
    return ownerDocument.defaultView || _window;
  },
  mount: function mount(container2) {
    if (container2 == null) {
      return;
    }
    var cy = this;
    var _p = cy._private;
    var options2 = _p.options;
    if (!htmlElement(container2) && htmlElement(container2[0])) {
      container2 = container2[0];
    }
    cy.stopAnimationLoop();
    cy.destroyRenderer();
    _p.container = container2;
    _p.styleEnabled = true;
    cy.invalidateSize();
    cy.initRenderer(extend({}, options2, options2.renderer, {
      // allow custom renderer name to be re-used, otherwise use canvas
      name: options2.renderer.name === "null" ? "canvas" : options2.renderer.name
    }));
    cy.startAnimationLoop();
    cy.style(options2.style);
    cy.emit("mount");
    return cy;
  },
  unmount: function unmount() {
    var cy = this;
    cy.stopAnimationLoop();
    cy.destroyRenderer();
    cy.initRenderer({
      name: "null"
    });
    cy.emit("unmount");
    return cy;
  },
  options: function options() {
    return copy(this._private.options);
  },
  json: function json(obj) {
    var cy = this;
    var _p = cy._private;
    var eles = cy.mutableElements();
    var getFreshRef = function getFreshRef2(ele) {
      return cy.getElementById(ele.id());
    };
    if (plainObject(obj)) {
      cy.startBatch();
      if (obj.elements) {
        var idInJson = {};
        var updateEles = function updateEles2(jsons, gr2) {
          var toAdd = [];
          var toMod = [];
          for (var i3 = 0; i3 < jsons.length; i3++) {
            var json3 = jsons[i3];
            if (!json3.data.id) {
              warn("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var id2 = "" + json3.data.id;
            var ele = cy.getElementById(id2);
            idInJson[id2] = true;
            if (ele.length !== 0) {
              toMod.push({
                ele,
                json: json3
              });
            } else {
              if (gr2) {
                json3.group = gr2;
                toAdd.push(json3);
              } else {
                toAdd.push(json3);
              }
            }
          }
          cy.add(toAdd);
          for (var _i = 0; _i < toMod.length; _i++) {
            var _toMod$_i = toMod[_i], _ele = _toMod$_i.ele, _json = _toMod$_i.json;
            _ele.json(_json);
          }
        };
        if (array(obj.elements)) {
          updateEles(obj.elements);
        } else {
          var grs = ["nodes", "edges"];
          for (var i2 = 0; i2 < grs.length; i2++) {
            var gr = grs[i2];
            var elements = obj.elements[gr];
            if (array(elements)) {
              updateEles(elements, gr);
            }
          }
        }
        var parentsToRemove = cy.collection();
        eles.filter(function(ele) {
          return !idInJson[ele.id()];
        }).forEach(function(ele) {
          if (ele.isParent()) {
            parentsToRemove.merge(ele);
          } else {
            ele.remove();
          }
        });
        parentsToRemove.forEach(function(ele) {
          return ele.children().move({
            parent: null
          });
        });
        parentsToRemove.forEach(function(ele) {
          return getFreshRef(ele).remove();
        });
      }
      if (obj.style) {
        cy.style(obj.style);
      }
      if (obj.zoom != null && obj.zoom !== _p.zoom) {
        cy.zoom(obj.zoom);
      }
      if (obj.pan) {
        if (obj.pan.x !== _p.pan.x || obj.pan.y !== _p.pan.y) {
          cy.pan(obj.pan);
        }
      }
      if (obj.data) {
        cy.data(obj.data);
      }
      var fields = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"];
      for (var _i2 = 0; _i2 < fields.length; _i2++) {
        var f2 = fields[_i2];
        if (obj[f2] != null) {
          cy[f2](obj[f2]);
        }
      }
      cy.endBatch();
      return this;
    } else {
      var flat = !!obj;
      var json2 = {};
      if (flat) {
        json2.elements = this.elements().map(function(ele) {
          return ele.json();
        });
      } else {
        json2.elements = {};
        eles.forEach(function(ele) {
          var group2 = ele.group();
          if (!json2.elements[group2]) {
            json2.elements[group2] = [];
          }
          json2.elements[group2].push(ele.json());
        });
      }
      if (this._private.styleEnabled) {
        json2.style = cy.style().json();
      }
      json2.data = copy(cy.data());
      var options2 = _p.options;
      json2.zoomingEnabled = _p.zoomingEnabled;
      json2.userZoomingEnabled = _p.userZoomingEnabled;
      json2.zoom = _p.zoom;
      json2.minZoom = _p.minZoom;
      json2.maxZoom = _p.maxZoom;
      json2.panningEnabled = _p.panningEnabled;
      json2.userPanningEnabled = _p.userPanningEnabled;
      json2.pan = copy(_p.pan);
      json2.boxSelectionEnabled = _p.boxSelectionEnabled;
      json2.renderer = copy(options2.renderer);
      json2.hideEdgesOnViewport = options2.hideEdgesOnViewport;
      json2.textureOnViewport = options2.textureOnViewport;
      json2.wheelSensitivity = options2.wheelSensitivity;
      json2.motionBlur = options2.motionBlur;
      json2.multiClickDebounceTime = options2.multiClickDebounceTime;
      return json2;
    }
  }
});
corefn.$id = corefn.getElementById;
[corefn$9, corefn$8, elesfn, corefn$7, corefn$6, corefn$5, corefn$4, corefn$3, corefn$2, corefn$1, fn2].forEach(function(props) {
  extend(corefn, props);
});
var defaults$7 = {
  fit: true,
  // whether to fit the viewport to the graph
  directed: false,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  direction: "downward",
  // determines the direction in which the tree structure is drawn.  The possible values are 'downward', 'upward', 'rightward', or 'leftward'.
  padding: 30,
  // padding on fit
  circle: false,
  // put depths in concentric circles if true, put depths top down if false
  grid: false,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function animateFilter(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
var deprecatedOptionDefaults = {
  maximal: false,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: false
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
};
var getInfo = function getInfo2(ele) {
  return ele.scratch("breadthfirst");
};
var setInfo = function setInfo2(ele, obj) {
  return ele.scratch("breadthfirst", obj);
};
function BreadthFirstLayout(options2) {
  this.options = extend({}, defaults$7, deprecatedOptionDefaults, options2);
}
BreadthFirstLayout.prototype.run = function() {
  var options2 = this.options;
  var cy = options2.cy;
  var eles = options2.eles;
  var nodes3 = eles.nodes().filter(function(n2) {
    return n2.isChildless();
  });
  var graph = eles;
  var directed = options2.directed;
  var maximal = options2.acyclic || options2.maximal || options2.maximalAdjustments > 0;
  var hasBoundingBox = !!options2.boundingBox;
  var bb = makeBoundingBox(hasBoundingBox ? options2.boundingBox : structuredClone(cy.extent()));
  var roots;
  if (elementOrCollection(options2.roots)) {
    roots = options2.roots;
  } else if (array(options2.roots)) {
    var rootsArray = [];
    for (var i2 = 0; i2 < options2.roots.length; i2++) {
      var id2 = options2.roots[i2];
      var ele = cy.getElementById(id2);
      rootsArray.push(ele);
    }
    roots = cy.collection(rootsArray);
  } else if (string(options2.roots)) {
    roots = cy.$(options2.roots);
  } else {
    if (directed) {
      roots = nodes3.roots();
    } else {
      var components2 = eles.components();
      roots = cy.collection();
      var _loop = function _loop2() {
        var comp = components2[_i];
        var maxDegree = comp.maxDegree(false);
        var compRoots = comp.filter(function(ele2) {
          return ele2.degree(false) === maxDegree;
        });
        roots = roots.add(compRoots);
      };
      for (var _i = 0; _i < components2.length; _i++) {
        _loop();
      }
    }
  }
  var depths = [];
  var foundByBfs = {};
  var addToDepth = function addToDepth2(ele2, d2) {
    if (depths[d2] == null) {
      depths[d2] = [];
    }
    var i3 = depths[d2].length;
    depths[d2].push(ele2);
    setInfo(ele2, {
      index: i3,
      depth: d2
    });
  };
  var changeDepth = function changeDepth2(ele2, newDepth) {
    var _getInfo = getInfo(ele2), depth = _getInfo.depth, index = _getInfo.index;
    depths[depth][index] = null;
    if (ele2.isChildless()) addToDepth(ele2, newDepth);
  };
  graph.bfs({
    roots,
    directed: options2.directed,
    visit: function visit(node, edge, pNode, i3, depth) {
      var ele2 = node[0];
      var id3 = ele2.id();
      if (ele2.isChildless()) addToDepth(ele2, depth);
      foundByBfs[id3] = true;
    }
  });
  var orphanNodes = [];
  for (var _i2 = 0; _i2 < nodes3.length; _i2++) {
    var _ele = nodes3[_i2];
    if (foundByBfs[_ele.id()]) {
      continue;
    } else {
      orphanNodes.push(_ele);
    }
  }
  var assignDepthsAt = function assignDepthsAt2(i3) {
    var eles2 = depths[i3];
    for (var j = 0; j < eles2.length; j++) {
      var _ele2 = eles2[j];
      if (_ele2 == null) {
        eles2.splice(j, 1);
        j--;
        continue;
      }
      setInfo(_ele2, {
        depth: i3,
        index: j
      });
    }
  };
  var adjustMaximally = function adjustMaximally2(ele2, shifted2) {
    var eInfo = getInfo(ele2);
    var incomers = ele2.incomers().filter(function(el) {
      return el.isNode() && eles.has(el);
    });
    var maxDepth = -1;
    var id3 = ele2.id();
    for (var k = 0; k < incomers.length; k++) {
      var incmr = incomers[k];
      var iInfo = getInfo(incmr);
      maxDepth = Math.max(maxDepth, iInfo.depth);
    }
    if (eInfo.depth <= maxDepth) {
      if (!options2.acyclic && shifted2[id3]) {
        return null;
      }
      var newDepth = maxDepth + 1;
      changeDepth(ele2, newDepth);
      shifted2[id3] = newDepth;
      return true;
    }
    return false;
  };
  if (directed && maximal) {
    var Q = [];
    var shifted = {};
    var enqueue = function enqueue2(n2) {
      return Q.push(n2);
    };
    var dequeue = function dequeue2() {
      return Q.shift();
    };
    nodes3.forEach(function(n2) {
      return Q.push(n2);
    });
    while (Q.length > 0) {
      var _ele3 = dequeue();
      var didShift = adjustMaximally(_ele3, shifted);
      if (didShift) {
        _ele3.outgoers().filter(function(el) {
          return el.isNode() && eles.has(el);
        }).forEach(enqueue);
      } else if (didShift === null) {
        warn("Detected double maximal shift for node `" + _ele3.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var minDistance = 0;
  if (options2.avoidOverlap) {
    for (var _i3 = 0; _i3 < nodes3.length; _i3++) {
      var n = nodes3[_i3];
      var nbb = n.layoutDimensions(options2);
      var w2 = nbb.w;
      var h2 = nbb.h;
      minDistance = Math.max(minDistance, w2, h2);
    }
  }
  var cachedWeightedPercent = {};
  var getWeightedPercent = function getWeightedPercent2(ele2) {
    if (cachedWeightedPercent[ele2.id()]) {
      return cachedWeightedPercent[ele2.id()];
    }
    var eleDepth = getInfo(ele2).depth;
    var neighbors = ele2.neighborhood();
    var percent = 0;
    var samples = 0;
    for (var _i4 = 0; _i4 < neighbors.length; _i4++) {
      var neighbor = neighbors[_i4];
      if (neighbor.isEdge() || neighbor.isParent() || !nodes3.has(neighbor)) {
        continue;
      }
      var bf = getInfo(neighbor);
      if (bf == null) {
        continue;
      }
      var index = bf.index;
      var depth = bf.depth;
      if (index == null || depth == null) {
        continue;
      }
      var nDepth = depths[depth].length;
      if (depth < eleDepth) {
        percent += index / nDepth;
        samples++;
      }
    }
    samples = Math.max(1, samples);
    percent = percent / samples;
    if (samples === 0) {
      percent = 0;
    }
    cachedWeightedPercent[ele2.id()] = percent;
    return percent;
  };
  var sortFn = function sortFn2(a2, b2) {
    var apct = getWeightedPercent(a2);
    var bpct = getWeightedPercent(b2);
    var diff2 = apct - bpct;
    if (diff2 === 0) {
      return ascending(a2.id(), b2.id());
    } else {
      return diff2;
    }
  };
  if (options2.depthSort !== void 0) {
    sortFn = options2.depthSort;
  }
  var depthsLen = depths.length;
  for (var _i5 = 0; _i5 < depthsLen; _i5++) {
    depths[_i5].sort(sortFn);
    assignDepthsAt(_i5);
  }
  var orphanDepth = [];
  for (var _i6 = 0; _i6 < orphanNodes.length; _i6++) {
    orphanDepth.push(orphanNodes[_i6]);
  }
  var assignDepths = function assignDepths2() {
    for (var _i7 = 0; _i7 < depthsLen; _i7++) {
      assignDepthsAt(_i7);
    }
  };
  if (orphanDepth.length) {
    depths.unshift(orphanDepth);
    depthsLen = depths.length;
    assignDepths();
  }
  var biggestDepthSize = 0;
  for (var _i8 = 0; _i8 < depthsLen; _i8++) {
    biggestDepthSize = Math.max(depths[_i8].length, biggestDepthSize);
  }
  var center2 = {
    x: bb.x1 + bb.w / 2,
    y: bb.y1 + bb.h / 2
  };
  var aveNodeSize = nodes3.reduce(function(acc, node) {
    return (function(box) {
      return {
        w: acc.w === -1 ? box.w : (acc.w + box.w) / 2,
        h: acc.h === -1 ? box.h : (acc.h + box.h) / 2
      };
    })(node.boundingBox({
      includeLabels: options2.nodeDimensionsIncludeLabels
    }));
  }, {
    w: -1,
    h: -1
  });
  var distanceY = Math.max(
    // only one depth
    depthsLen === 1 ? 0 : (
      // inside a bounding box, no need for top & bottom padding
      hasBoundingBox ? (bb.h - options2.padding * 2 - aveNodeSize.h) / (depthsLen - 1) : (bb.h - options2.padding * 2 - aveNodeSize.h) / (depthsLen + 1)
    ),
    minDistance
  );
  var maxDepthSize = depths.reduce(function(max5, eles2) {
    return Math.max(max5, eles2.length);
  }, 0);
  var getPositionTopBottom = function getPositionTopBottom2(ele2) {
    var _getInfo2 = getInfo(ele2), depth = _getInfo2.depth, index = _getInfo2.index;
    if (options2.circle) {
      var radiusStepSize = Math.min(bb.w / 2 / depthsLen, bb.h / 2 / depthsLen);
      radiusStepSize = Math.max(radiusStepSize, minDistance);
      var radius2 = radiusStepSize * depth + radiusStepSize - (depthsLen > 0 && depths[0].length <= 3 ? radiusStepSize / 2 : 0);
      var theta = 2 * Math.PI / depths[depth].length * index;
      if (depth === 0 && depths[0].length === 1) {
        radius2 = 1;
      }
      return {
        x: center2.x + radius2 * Math.cos(theta),
        y: center2.y + radius2 * Math.sin(theta)
      };
    } else {
      var depthSize = depths[depth].length;
      var distanceX = Math.max(
        // only one depth
        depthSize === 1 ? 0 : (
          // inside a bounding box, no need for left & right padding
          hasBoundingBox ? (bb.w - options2.padding * 2 - aveNodeSize.w) / ((options2.grid ? maxDepthSize : depthSize) - 1) : (bb.w - options2.padding * 2 - aveNodeSize.w) / ((options2.grid ? maxDepthSize : depthSize) + 1)
        ),
        minDistance
      );
      var epos = {
        x: center2.x + (index + 1 - (depthSize + 1) / 2) * distanceX,
        y: center2.y + (depth + 1 - (depthsLen + 1) / 2) * distanceY
      };
      return epos;
    }
  };
  var rotateDegrees = {
    "downward": 0,
    "leftward": 90,
    "upward": 180,
    "rightward": -90
  };
  if (Object.keys(rotateDegrees).indexOf(options2.direction) === -1) {
    error("Invalid direction '".concat(options2.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(rotateDegrees).join(", ")));
  }
  var getPosition = function getPosition2(ele2) {
    return rotatePosAndSkewByBox(getPositionTopBottom(ele2), bb, rotateDegrees[options2.direction]);
  };
  eles.nodes().layoutPositions(this, options2, getPosition);
  return this;
};
var defaults$6 = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function animateFilter2(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform2(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function CircleLayout(options2) {
  this.options = extend({}, defaults$6, options2);
}
CircleLayout.prototype.run = function() {
  var params = this.options;
  var options2 = params;
  var cy = params.cy;
  var eles = options2.eles;
  var clockwise = options2.counterclockwise !== void 0 ? !options2.counterclockwise : options2.clockwise;
  var nodes3 = eles.nodes().not(":parent");
  if (options2.sort) {
    nodes3 = nodes3.sort(options2.sort);
  }
  var bb = makeBoundingBox(options2.boundingBox ? options2.boundingBox : {
    x1: 0,
    y1: 0,
    w: cy.width(),
    h: cy.height()
  });
  var center2 = {
    x: bb.x1 + bb.w / 2,
    y: bb.y1 + bb.h / 2
  };
  var sweep = options2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / nodes3.length : options2.sweep;
  var dTheta = sweep / Math.max(1, nodes3.length - 1);
  var r2;
  var minDistance = 0;
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    var n = nodes3[i2];
    var nbb = n.layoutDimensions(options2);
    var w2 = nbb.w;
    var h2 = nbb.h;
    minDistance = Math.max(minDistance, w2, h2);
  }
  if (number$1(options2.radius)) {
    r2 = options2.radius;
  } else if (nodes3.length <= 1) {
    r2 = 0;
  } else {
    r2 = Math.min(bb.h, bb.w) / 2 - minDistance;
  }
  if (nodes3.length > 1 && options2.avoidOverlap) {
    minDistance *= 1.75;
    var dcos = Math.cos(dTheta) - Math.cos(0);
    var dsin = Math.sin(dTheta) - Math.sin(0);
    var rMin = Math.sqrt(minDistance * minDistance / (dcos * dcos + dsin * dsin));
    r2 = Math.max(rMin, r2);
  }
  var getPos = function getPos2(ele, i3) {
    var theta = options2.startAngle + i3 * dTheta * (clockwise ? 1 : -1);
    var rx = r2 * Math.cos(theta);
    var ry = r2 * Math.sin(theta);
    var pos = {
      x: center2.x + rx,
      y: center2.y + ry
    };
    return pos;
  };
  eles.nodes().layoutPositions(this, options2, getPos);
  return this;
};
var defaults$5 = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: false,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function concentric(node) {
    return node.degree();
  },
  levelWidth: function levelWidth(nodes3) {
    return nodes3.maxDegree() / 4;
  },
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function animateFilter3(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform3(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function ConcentricLayout(options2) {
  this.options = extend({}, defaults$5, options2);
}
ConcentricLayout.prototype.run = function() {
  var params = this.options;
  var options2 = params;
  var clockwise = options2.counterclockwise !== void 0 ? !options2.counterclockwise : options2.clockwise;
  var cy = params.cy;
  var eles = options2.eles;
  var nodes3 = eles.nodes().not(":parent");
  var bb = makeBoundingBox(options2.boundingBox ? options2.boundingBox : {
    x1: 0,
    y1: 0,
    w: cy.width(),
    h: cy.height()
  });
  var center2 = {
    x: bb.x1 + bb.w / 2,
    y: bb.y1 + bb.h / 2
  };
  var nodeValues = [];
  var maxNodeSize = 0;
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    var node = nodes3[i2];
    var value = void 0;
    value = options2.concentric(node);
    nodeValues.push({
      value,
      node
    });
    node._private.scratch.concentric = value;
  }
  nodes3.updateStyle();
  for (var _i = 0; _i < nodes3.length; _i++) {
    var _node = nodes3[_i];
    var nbb = _node.layoutDimensions(options2);
    maxNodeSize = Math.max(maxNodeSize, nbb.w, nbb.h);
  }
  nodeValues.sort(function(a2, b2) {
    return b2.value - a2.value;
  });
  var levelWidth2 = options2.levelWidth(nodes3);
  var levels = [[]];
  var currentLevel = levels[0];
  for (var _i2 = 0; _i2 < nodeValues.length; _i2++) {
    var val = nodeValues[_i2];
    if (currentLevel.length > 0) {
      var diff2 = Math.abs(currentLevel[0].value - val.value);
      if (diff2 >= levelWidth2) {
        currentLevel = [];
        levels.push(currentLevel);
      }
    }
    currentLevel.push(val);
  }
  var minDist = maxNodeSize + options2.minNodeSpacing;
  if (!options2.avoidOverlap) {
    var firstLvlHasMulti = levels.length > 0 && levels[0].length > 1;
    var maxR = Math.min(bb.w, bb.h) / 2 - minDist;
    var rStep = maxR / (levels.length + firstLvlHasMulti ? 1 : 0);
    minDist = Math.min(minDist, rStep);
  }
  var r2 = 0;
  for (var _i3 = 0; _i3 < levels.length; _i3++) {
    var level = levels[_i3];
    var sweep = options2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / level.length : options2.sweep;
    var dTheta = level.dTheta = sweep / Math.max(1, level.length - 1);
    if (level.length > 1 && options2.avoidOverlap) {
      var dcos = Math.cos(dTheta) - Math.cos(0);
      var dsin = Math.sin(dTheta) - Math.sin(0);
      var rMin = Math.sqrt(minDist * minDist / (dcos * dcos + dsin * dsin));
      r2 = Math.max(rMin, r2);
    }
    level.r = r2;
    r2 += minDist;
  }
  if (options2.equidistant) {
    var rDeltaMax = 0;
    var _r = 0;
    for (var _i4 = 0; _i4 < levels.length; _i4++) {
      var _level = levels[_i4];
      var rDelta = _level.r - _r;
      rDeltaMax = Math.max(rDeltaMax, rDelta);
    }
    _r = 0;
    for (var _i5 = 0; _i5 < levels.length; _i5++) {
      var _level2 = levels[_i5];
      if (_i5 === 0) {
        _r = _level2.r;
      }
      _level2.r = _r;
      _r += rDeltaMax;
    }
  }
  var pos = {};
  for (var _i6 = 0; _i6 < levels.length; _i6++) {
    var _level3 = levels[_i6];
    var _dTheta = _level3.dTheta;
    var _r2 = _level3.r;
    for (var j = 0; j < _level3.length; j++) {
      var _val = _level3[j];
      var theta = options2.startAngle + (clockwise ? 1 : -1) * _dTheta * j;
      var p3 = {
        x: center2.x + _r2 * Math.cos(theta),
        y: center2.y + _r2 * Math.sin(theta)
      };
      pos[_val.node.id()] = p3;
    }
  }
  eles.nodes().layoutPositions(this, options2, function(ele) {
    var id2 = ele.id();
    return pos[id2];
  });
  return this;
};
var DEBUG;
var defaults$4 = {
  // Called on `layoutready`
  ready: function ready2() {
  },
  // Called on `layoutstop`
  stop: function stop3() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: true,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function animateFilter4(node, i2) {
    return true;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: false,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: false,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function nodeRepulsion(node) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function idealEdgeLength(edge) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function edgeElasticity(edge) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function CoseLayout(options2) {
  this.options = extend({}, defaults$4, options2);
  this.options.layout = this;
  var nodes3 = this.options.eles.nodes();
  var edges3 = this.options.eles.edges();
  var notEdges = edges3.filter(function(e2) {
    var sourceId = e2.source().data("id");
    var targetId = e2.target().data("id");
    var hasSource = nodes3.some(function(n) {
      return n.data("id") === sourceId;
    });
    var hasTarget = nodes3.some(function(n) {
      return n.data("id") === targetId;
    });
    return !hasSource || !hasTarget;
  });
  this.options.eles = this.options.eles.not(notEdges);
}
CoseLayout.prototype.run = function() {
  var options2 = this.options;
  var cy = options2.cy;
  var layout4 = this;
  layout4.stopped = false;
  if (options2.animate === true || options2.animate === false) {
    layout4.emit({
      type: "layoutstart",
      layout: layout4
    });
  }
  if (true === options2.debug) {
    DEBUG = true;
  } else {
    DEBUG = false;
  }
  var layoutInfo = createLayoutInfo(cy, layout4, options2);
  if (DEBUG) {
    printLayoutInfo(layoutInfo);
  }
  if (options2.randomize) {
    randomizePositions(layoutInfo);
  }
  var startTime = performanceNow();
  var refresh = function refresh2() {
    refreshPositions(layoutInfo, cy, options2);
    if (true === options2.fit) {
      cy.fit(options2.padding);
    }
  };
  var mainLoop = function mainLoop2(i3) {
    if (layout4.stopped || i3 >= options2.numIter) {
      return false;
    }
    step(layoutInfo, options2);
    layoutInfo.temperature = layoutInfo.temperature * options2.coolingFactor;
    if (layoutInfo.temperature < options2.minTemp) {
      return false;
    }
    return true;
  };
  var done = function done2() {
    if (options2.animate === true || options2.animate === false) {
      refresh();
      layout4.one("layoutstop", options2.stop);
      layout4.emit({
        type: "layoutstop",
        layout: layout4
      });
    } else {
      var nodes3 = options2.eles.nodes();
      var getScaledPos = getScaleInBoundsFn(layoutInfo, options2, nodes3);
      nodes3.layoutPositions(layout4, options2, getScaledPos);
    }
  };
  var i2 = 0;
  var loopRet = true;
  if (options2.animate === true) {
    var _frame = function frame() {
      var f2 = 0;
      while (loopRet && f2 < options2.refresh) {
        loopRet = mainLoop(i2);
        i2++;
        f2++;
      }
      if (!loopRet) {
        separateComponents(layoutInfo, options2);
        done();
      } else {
        var now = performanceNow();
        if (now - startTime >= options2.animationThreshold) {
          refresh();
        }
        requestAnimationFrame(_frame);
      }
    };
    _frame();
  } else {
    while (loopRet) {
      loopRet = mainLoop(i2);
      i2++;
    }
    separateComponents(layoutInfo, options2);
    done();
  }
  return this;
};
CoseLayout.prototype.stop = function() {
  this.stopped = true;
  if (this.thread) {
    this.thread.stop();
  }
  this.emit("layoutstop");
  return this;
};
CoseLayout.prototype.destroy = function() {
  if (this.thread) {
    this.thread.stop();
  }
  return this;
};
var createLayoutInfo = function createLayoutInfo2(cy, layout4, options2) {
  var edges3 = options2.eles.edges();
  var nodes3 = options2.eles.nodes();
  var bb = makeBoundingBox(options2.boundingBox ? options2.boundingBox : {
    x1: 0,
    y1: 0,
    w: cy.width(),
    h: cy.height()
  });
  var layoutInfo = {
    isCompound: cy.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: nodes3.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: edges3.size(),
    temperature: options2.initialTemp,
    clientWidth: bb.w,
    clientHeight: bb.h,
    boundingBox: bb
  };
  var components2 = options2.eles.components();
  var id2cmptId = {};
  for (var i2 = 0; i2 < components2.length; i2++) {
    var component2 = components2[i2];
    for (var j = 0; j < component2.length; j++) {
      var node = component2[j];
      id2cmptId[node.id()] = i2;
    }
  }
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = nodes3[i2];
    var nbb = n.layoutDimensions(options2);
    var tempNode = {};
    tempNode.isLocked = n.locked();
    tempNode.id = n.data("id");
    tempNode.parentId = n.data("parent");
    tempNode.cmptId = id2cmptId[n.id()];
    tempNode.children = [];
    tempNode.positionX = n.position("x");
    tempNode.positionY = n.position("y");
    tempNode.offsetX = 0;
    tempNode.offsetY = 0;
    tempNode.height = nbb.w;
    tempNode.width = nbb.h;
    tempNode.maxX = tempNode.positionX + tempNode.width / 2;
    tempNode.minX = tempNode.positionX - tempNode.width / 2;
    tempNode.maxY = tempNode.positionY + tempNode.height / 2;
    tempNode.minY = tempNode.positionY - tempNode.height / 2;
    tempNode.padLeft = parseFloat(n.style("padding"));
    tempNode.padRight = parseFloat(n.style("padding"));
    tempNode.padTop = parseFloat(n.style("padding"));
    tempNode.padBottom = parseFloat(n.style("padding"));
    tempNode.nodeRepulsion = fn$6(options2.nodeRepulsion) ? options2.nodeRepulsion(n) : options2.nodeRepulsion;
    layoutInfo.layoutNodes.push(tempNode);
    layoutInfo.idToIndex[tempNode.id] = i2;
  }
  var queue = [];
  var start = 0;
  var end = -1;
  var tempGraph = [];
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = layoutInfo.layoutNodes[i2];
    var p_id = n.parentId;
    if (null != p_id) {
      layoutInfo.layoutNodes[layoutInfo.idToIndex[p_id]].children.push(n.id);
    } else {
      queue[++end] = n.id;
      tempGraph.push(n.id);
    }
  }
  layoutInfo.graphSet.push(tempGraph);
  while (start <= end) {
    var node_id = queue[start++];
    var node_ix = layoutInfo.idToIndex[node_id];
    var node = layoutInfo.layoutNodes[node_ix];
    var children = node.children;
    if (children.length > 0) {
      layoutInfo.graphSet.push(children);
      for (var i2 = 0; i2 < children.length; i2++) {
        queue[++end] = children[i2];
      }
    }
  }
  for (var i2 = 0; i2 < layoutInfo.graphSet.length; i2++) {
    var graph = layoutInfo.graphSet[i2];
    for (var j = 0; j < graph.length; j++) {
      var index = layoutInfo.idToIndex[graph[j]];
      layoutInfo.indexToGraph[index] = i2;
    }
  }
  for (var i2 = 0; i2 < layoutInfo.edgeSize; i2++) {
    var e2 = edges3[i2];
    var tempEdge = {};
    tempEdge.id = e2.data("id");
    tempEdge.sourceId = e2.data("source");
    tempEdge.targetId = e2.data("target");
    var idealLength = fn$6(options2.idealEdgeLength) ? options2.idealEdgeLength(e2) : options2.idealEdgeLength;
    var elasticity = fn$6(options2.edgeElasticity) ? options2.edgeElasticity(e2) : options2.edgeElasticity;
    var sourceIx = layoutInfo.idToIndex[tempEdge.sourceId];
    var targetIx = layoutInfo.idToIndex[tempEdge.targetId];
    var sourceGraph = layoutInfo.indexToGraph[sourceIx];
    var targetGraph = layoutInfo.indexToGraph[targetIx];
    if (sourceGraph != targetGraph) {
      var lca = findLCA(tempEdge.sourceId, tempEdge.targetId, layoutInfo);
      var lcaGraph = layoutInfo.graphSet[lca];
      var depth = 0;
      var tempNode = layoutInfo.layoutNodes[sourceIx];
      while (-1 === lcaGraph.indexOf(tempNode.id)) {
        tempNode = layoutInfo.layoutNodes[layoutInfo.idToIndex[tempNode.parentId]];
        depth++;
      }
      tempNode = layoutInfo.layoutNodes[targetIx];
      while (-1 === lcaGraph.indexOf(tempNode.id)) {
        tempNode = layoutInfo.layoutNodes[layoutInfo.idToIndex[tempNode.parentId]];
        depth++;
      }
      idealLength *= depth * options2.nestingFactor;
    }
    tempEdge.idealLength = idealLength;
    tempEdge.elasticity = elasticity;
    layoutInfo.layoutEdges.push(tempEdge);
  }
  return layoutInfo;
};
var findLCA = function findLCA2(node1, node2, layoutInfo) {
  var res = _findLCA_aux(node1, node2, 0, layoutInfo);
  if (2 > res.count) {
    return 0;
  } else {
    return res.graph;
  }
};
var _findLCA_aux = function findLCA_aux(node1, node2, graphIx, layoutInfo) {
  var graph = layoutInfo.graphSet[graphIx];
  if (-1 < graph.indexOf(node1) && -1 < graph.indexOf(node2)) {
    return {
      count: 2,
      graph: graphIx
    };
  }
  var c2 = 0;
  for (var i2 = 0; i2 < graph.length; i2++) {
    var nodeId = graph[i2];
    var nodeIx = layoutInfo.idToIndex[nodeId];
    var children = layoutInfo.layoutNodes[nodeIx].children;
    if (0 === children.length) {
      continue;
    }
    var childGraphIx = layoutInfo.indexToGraph[layoutInfo.idToIndex[children[0]]];
    var result = _findLCA_aux(node1, node2, childGraphIx, layoutInfo);
    if (0 === result.count) {
      continue;
    } else if (1 === result.count) {
      c2++;
      if (2 === c2) {
        break;
      }
    } else {
      return result;
    }
  }
  return {
    count: c2,
    graph: graphIx
  };
};
var printLayoutInfo;
var randomizePositions = function randomizePositions2(layoutInfo, cy) {
  var width2 = layoutInfo.clientWidth;
  var height2 = layoutInfo.clientHeight;
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = layoutInfo.layoutNodes[i2];
    if (0 === n.children.length && !n.isLocked) {
      n.positionX = Math.random() * width2;
      n.positionY = Math.random() * height2;
    }
  }
};
var getScaleInBoundsFn = function getScaleInBoundsFn2(layoutInfo, options2, nodes3) {
  var bb = layoutInfo.boundingBox;
  var coseBB = {
    x1: Infinity,
    x2: -Infinity,
    y1: Infinity,
    y2: -Infinity
  };
  if (options2.boundingBox) {
    nodes3.forEach(function(node) {
      var lnode = layoutInfo.layoutNodes[layoutInfo.idToIndex[node.data("id")]];
      coseBB.x1 = Math.min(coseBB.x1, lnode.positionX);
      coseBB.x2 = Math.max(coseBB.x2, lnode.positionX);
      coseBB.y1 = Math.min(coseBB.y1, lnode.positionY);
      coseBB.y2 = Math.max(coseBB.y2, lnode.positionY);
    });
    coseBB.w = coseBB.x2 - coseBB.x1;
    coseBB.h = coseBB.y2 - coseBB.y1;
  }
  return function(ele, i2) {
    var lnode = layoutInfo.layoutNodes[layoutInfo.idToIndex[ele.data("id")]];
    if (options2.boundingBox) {
      var pctX = coseBB.w === 0 ? 0.5 : (lnode.positionX - coseBB.x1) / coseBB.w;
      var pctY = coseBB.h === 0 ? 0.5 : (lnode.positionY - coseBB.y1) / coseBB.h;
      return {
        x: bb.x1 + pctX * bb.w,
        y: bb.y1 + pctY * bb.h
      };
    } else {
      return {
        x: lnode.positionX,
        y: lnode.positionY
      };
    }
  };
};
var refreshPositions = function refreshPositions2(layoutInfo, cy, options2) {
  var layout4 = options2.layout;
  var nodes3 = options2.eles.nodes();
  var getScaledPos = getScaleInBoundsFn(layoutInfo, options2, nodes3);
  nodes3.positions(getScaledPos);
  if (true !== layoutInfo.ready) {
    layoutInfo.ready = true;
    layout4.one("layoutready", options2.ready);
    layout4.emit({
      type: "layoutready",
      layout: this
    });
  }
};
var step = function step2(layoutInfo, options2, _step) {
  calculateNodeForces(layoutInfo, options2);
  calculateEdgeForces(layoutInfo);
  calculateGravityForces(layoutInfo, options2);
  propagateForces(layoutInfo);
  updatePositions(layoutInfo);
};
var calculateNodeForces = function calculateNodeForces2(layoutInfo, options2) {
  for (var i2 = 0; i2 < layoutInfo.graphSet.length; i2++) {
    var graph = layoutInfo.graphSet[i2];
    var numNodes = graph.length;
    for (var j = 0; j < numNodes; j++) {
      var node1 = layoutInfo.layoutNodes[layoutInfo.idToIndex[graph[j]]];
      for (var k = j + 1; k < numNodes; k++) {
        var node2 = layoutInfo.layoutNodes[layoutInfo.idToIndex[graph[k]]];
        nodeRepulsion2(node1, node2, layoutInfo, options2);
      }
    }
  }
};
var randomDistance = function randomDistance2(max5) {
  return -1 + 2 * max5 * Math.random();
};
var nodeRepulsion2 = function nodeRepulsion3(node1, node2, layoutInfo, options2) {
  var cmptId1 = node1.cmptId;
  var cmptId2 = node2.cmptId;
  if (cmptId1 !== cmptId2 && !layoutInfo.isCompound) {
    return;
  }
  var directionX = node2.positionX - node1.positionX;
  var directionY = node2.positionY - node1.positionY;
  var maxRandDist = 1;
  if (0 === directionX && 0 === directionY) {
    directionX = randomDistance(maxRandDist);
    directionY = randomDistance(maxRandDist);
  }
  var overlap = nodesOverlap(node1, node2, directionX, directionY);
  if (overlap > 0) {
    var force = options2.nodeOverlap * overlap;
    var distance = Math.sqrt(directionX * directionX + directionY * directionY);
    var forceX = force * directionX / distance;
    var forceY = force * directionY / distance;
  } else {
    var point1 = findClippingPoint(node1, directionX, directionY);
    var point2 = findClippingPoint(node2, -1 * directionX, -1 * directionY);
    var distanceX = point2.x - point1.x;
    var distanceY = point2.y - point1.y;
    var distanceSqr = distanceX * distanceX + distanceY * distanceY;
    var distance = Math.sqrt(distanceSqr);
    var force = (node1.nodeRepulsion + node2.nodeRepulsion) / distanceSqr;
    var forceX = force * distanceX / distance;
    var forceY = force * distanceY / distance;
  }
  if (!node1.isLocked) {
    node1.offsetX -= forceX;
    node1.offsetY -= forceY;
  }
  if (!node2.isLocked) {
    node2.offsetX += forceX;
    node2.offsetY += forceY;
  }
  return;
};
var nodesOverlap = function nodesOverlap2(node1, node2, dX, dY) {
  if (dX > 0) {
    var overlapX = node1.maxX - node2.minX;
  } else {
    var overlapX = node2.maxX - node1.minX;
  }
  if (dY > 0) {
    var overlapY = node1.maxY - node2.minY;
  } else {
    var overlapY = node2.maxY - node1.minY;
  }
  if (overlapX >= 0 && overlapY >= 0) {
    return Math.sqrt(overlapX * overlapX + overlapY * overlapY);
  } else {
    return 0;
  }
};
var findClippingPoint = function findClippingPoint2(node, dX, dY) {
  var X = node.positionX;
  var Y = node.positionY;
  var H = node.height || 1;
  var W = node.width || 1;
  var dirSlope = dY / dX;
  var nodeSlope = H / W;
  var res = {};
  if (0 === dX && 0 < dY) {
    res.x = X;
    res.y = Y + H / 2;
    return res;
  }
  if (0 === dX && 0 > dY) {
    res.x = X;
    res.y = Y + H / 2;
    return res;
  }
  if (0 < dX && -1 * nodeSlope <= dirSlope && dirSlope <= nodeSlope) {
    res.x = X + W / 2;
    res.y = Y + W * dY / 2 / dX;
    return res;
  }
  if (0 > dX && -1 * nodeSlope <= dirSlope && dirSlope <= nodeSlope) {
    res.x = X - W / 2;
    res.y = Y - W * dY / 2 / dX;
    return res;
  }
  if (0 < dY && (dirSlope <= -1 * nodeSlope || dirSlope >= nodeSlope)) {
    res.x = X + H * dX / 2 / dY;
    res.y = Y + H / 2;
    return res;
  }
  if (0 > dY && (dirSlope <= -1 * nodeSlope || dirSlope >= nodeSlope)) {
    res.x = X - H * dX / 2 / dY;
    res.y = Y - H / 2;
    return res;
  }
  return res;
};
var calculateEdgeForces = function calculateEdgeForces2(layoutInfo, options2) {
  for (var i2 = 0; i2 < layoutInfo.edgeSize; i2++) {
    var edge = layoutInfo.layoutEdges[i2];
    var sourceIx = layoutInfo.idToIndex[edge.sourceId];
    var source = layoutInfo.layoutNodes[sourceIx];
    var targetIx = layoutInfo.idToIndex[edge.targetId];
    var target = layoutInfo.layoutNodes[targetIx];
    var directionX = target.positionX - source.positionX;
    var directionY = target.positionY - source.positionY;
    if (0 === directionX && 0 === directionY) {
      continue;
    }
    var point1 = findClippingPoint(source, directionX, directionY);
    var point2 = findClippingPoint(target, -1 * directionX, -1 * directionY);
    var lx = point2.x - point1.x;
    var ly = point2.y - point1.y;
    var l2 = Math.sqrt(lx * lx + ly * ly);
    var force = Math.pow(edge.idealLength - l2, 2) / edge.elasticity;
    if (0 !== l2) {
      var forceX = force * lx / l2;
      var forceY = force * ly / l2;
    } else {
      var forceX = 0;
      var forceY = 0;
    }
    if (!source.isLocked) {
      source.offsetX += forceX;
      source.offsetY += forceY;
    }
    if (!target.isLocked) {
      target.offsetX -= forceX;
      target.offsetY -= forceY;
    }
  }
};
var calculateGravityForces = function calculateGravityForces2(layoutInfo, options2) {
  if (options2.gravity === 0) {
    return;
  }
  var distThreshold = 1;
  for (var i2 = 0; i2 < layoutInfo.graphSet.length; i2++) {
    var graph = layoutInfo.graphSet[i2];
    var numNodes = graph.length;
    if (0 === i2) {
      var centerX = layoutInfo.clientHeight / 2;
      var centerY = layoutInfo.clientWidth / 2;
    } else {
      var temp = layoutInfo.layoutNodes[layoutInfo.idToIndex[graph[0]]];
      var parent4 = layoutInfo.layoutNodes[layoutInfo.idToIndex[temp.parentId]];
      var centerX = parent4.positionX;
      var centerY = parent4.positionY;
    }
    for (var j = 0; j < numNodes; j++) {
      var node = layoutInfo.layoutNodes[layoutInfo.idToIndex[graph[j]]];
      if (node.isLocked) {
        continue;
      }
      var dx = centerX - node.positionX;
      var dy = centerY - node.positionY;
      var d2 = Math.sqrt(dx * dx + dy * dy);
      if (d2 > distThreshold) {
        var fx = options2.gravity * dx / d2;
        var fy = options2.gravity * dy / d2;
        node.offsetX += fx;
        node.offsetY += fy;
      }
    }
  }
};
var propagateForces = function propagateForces2(layoutInfo, options2) {
  var queue = [];
  var start = 0;
  var end = -1;
  queue.push.apply(queue, layoutInfo.graphSet[0]);
  end += layoutInfo.graphSet[0].length;
  while (start <= end) {
    var nodeId = queue[start++];
    var nodeIndex = layoutInfo.idToIndex[nodeId];
    var node = layoutInfo.layoutNodes[nodeIndex];
    var children = node.children;
    if (0 < children.length && !node.isLocked) {
      var offX = node.offsetX;
      var offY = node.offsetY;
      for (var i2 = 0; i2 < children.length; i2++) {
        var childNode = layoutInfo.layoutNodes[layoutInfo.idToIndex[children[i2]]];
        childNode.offsetX += offX;
        childNode.offsetY += offY;
        queue[++end] = children[i2];
      }
      node.offsetX = 0;
      node.offsetY = 0;
    }
  }
};
var updatePositions = function updatePositions2(layoutInfo, options2) {
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = layoutInfo.layoutNodes[i2];
    if (0 < n.children.length) {
      n.maxX = void 0;
      n.minX = void 0;
      n.maxY = void 0;
      n.minY = void 0;
    }
  }
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = layoutInfo.layoutNodes[i2];
    if (0 < n.children.length || n.isLocked) {
      continue;
    }
    var tempForce = limitForce(n.offsetX, n.offsetY, layoutInfo.temperature);
    n.positionX += tempForce.x;
    n.positionY += tempForce.y;
    n.offsetX = 0;
    n.offsetY = 0;
    n.minX = n.positionX - n.width;
    n.maxX = n.positionX + n.width;
    n.minY = n.positionY - n.height;
    n.maxY = n.positionY + n.height;
    _updateAncestryBoundaries(n, layoutInfo);
  }
  for (var i2 = 0; i2 < layoutInfo.nodeSize; i2++) {
    var n = layoutInfo.layoutNodes[i2];
    if (0 < n.children.length && !n.isLocked) {
      n.positionX = (n.maxX + n.minX) / 2;
      n.positionY = (n.maxY + n.minY) / 2;
      n.width = n.maxX - n.minX;
      n.height = n.maxY - n.minY;
    }
  }
};
var limitForce = function limitForce2(forceX, forceY, max5) {
  var force = Math.sqrt(forceX * forceX + forceY * forceY);
  if (force > max5) {
    var res = {
      x: max5 * forceX / force,
      y: max5 * forceY / force
    };
  } else {
    var res = {
      x: forceX,
      y: forceY
    };
  }
  return res;
};
var _updateAncestryBoundaries = function updateAncestryBoundaries(node, layoutInfo) {
  var parentId = node.parentId;
  if (null == parentId) {
    return;
  }
  var p3 = layoutInfo.layoutNodes[layoutInfo.idToIndex[parentId]];
  var flag = false;
  if (null == p3.maxX || node.maxX + p3.padRight > p3.maxX) {
    p3.maxX = node.maxX + p3.padRight;
    flag = true;
  }
  if (null == p3.minX || node.minX - p3.padLeft < p3.minX) {
    p3.minX = node.minX - p3.padLeft;
    flag = true;
  }
  if (null == p3.maxY || node.maxY + p3.padBottom > p3.maxY) {
    p3.maxY = node.maxY + p3.padBottom;
    flag = true;
  }
  if (null == p3.minY || node.minY - p3.padTop < p3.minY) {
    p3.minY = node.minY - p3.padTop;
    flag = true;
  }
  if (flag) {
    return _updateAncestryBoundaries(p3, layoutInfo);
  }
  return;
};
var separateComponents = function separateComponents2(layoutInfo, options2) {
  var nodes3 = layoutInfo.layoutNodes;
  var components2 = [];
  for (var i2 = 0; i2 < nodes3.length; i2++) {
    var node = nodes3[i2];
    var cid = node.cmptId;
    var component2 = components2[cid] = components2[cid] || [];
    component2.push(node);
  }
  var totalA = 0;
  for (var i2 = 0; i2 < components2.length; i2++) {
    var c2 = components2[i2];
    if (!c2) {
      continue;
    }
    c2.x1 = Infinity;
    c2.x2 = -Infinity;
    c2.y1 = Infinity;
    c2.y2 = -Infinity;
    for (var j = 0; j < c2.length; j++) {
      var n = c2[j];
      c2.x1 = Math.min(c2.x1, n.positionX - n.width / 2);
      c2.x2 = Math.max(c2.x2, n.positionX + n.width / 2);
      c2.y1 = Math.min(c2.y1, n.positionY - n.height / 2);
      c2.y2 = Math.max(c2.y2, n.positionY + n.height / 2);
    }
    c2.w = c2.x2 - c2.x1;
    c2.h = c2.y2 - c2.y1;
    totalA += c2.w * c2.h;
  }
  components2.sort(function(c1, c22) {
    return c22.w * c22.h - c1.w * c1.h;
  });
  var x3 = 0;
  var y3 = 0;
  var usedW = 0;
  var rowH = 0;
  var maxRowW = Math.sqrt(totalA) * layoutInfo.clientWidth / layoutInfo.clientHeight;
  for (var i2 = 0; i2 < components2.length; i2++) {
    var c2 = components2[i2];
    if (!c2) {
      continue;
    }
    for (var j = 0; j < c2.length; j++) {
      var n = c2[j];
      if (!n.isLocked) {
        n.positionX += x3 - c2.x1;
        n.positionY += y3 - c2.y1;
      }
    }
    x3 += c2.w + options2.componentSpacing;
    usedW += c2.w + options2.componentSpacing;
    rowH = Math.max(rowH, c2.h);
    if (usedW > maxRowW) {
      y3 += rowH + options2.componentSpacing;
      x3 = 0;
      usedW = 0;
      rowH = 0;
    }
  }
};
var defaults$3 = {
  fit: true,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: false,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: false,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function position2(node) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function animateFilter5(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform4(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function GridLayout(options2) {
  this.options = extend({}, defaults$3, options2);
}
GridLayout.prototype.run = function() {
  var params = this.options;
  var options2 = params;
  var cy = params.cy;
  var eles = options2.eles;
  var nodes3 = eles.nodes().not(":parent");
  if (options2.sort) {
    nodes3 = nodes3.sort(options2.sort);
  }
  var bb = makeBoundingBox(options2.boundingBox ? options2.boundingBox : {
    x1: 0,
    y1: 0,
    w: cy.width(),
    h: cy.height()
  });
  if (bb.h === 0 || bb.w === 0) {
    eles.nodes().layoutPositions(this, options2, function(ele) {
      return {
        x: bb.x1,
        y: bb.y1
      };
    });
  } else {
    var cells = nodes3.size();
    var splits = Math.sqrt(cells * bb.h / bb.w);
    var rows = Math.round(splits);
    var cols = Math.round(bb.w / bb.h * splits);
    var small = function small2(val) {
      if (val == null) {
        return Math.min(rows, cols);
      } else {
        var min4 = Math.min(rows, cols);
        if (min4 == rows) {
          rows = val;
        } else {
          cols = val;
        }
      }
    };
    var large = function large2(val) {
      if (val == null) {
        return Math.max(rows, cols);
      } else {
        var max5 = Math.max(rows, cols);
        if (max5 == rows) {
          rows = val;
        } else {
          cols = val;
        }
      }
    };
    var oRows = options2.rows;
    var oCols = options2.cols != null ? options2.cols : options2.columns;
    if (oRows != null && oCols != null) {
      rows = oRows;
      cols = oCols;
    } else if (oRows != null && oCols == null) {
      rows = oRows;
      cols = Math.ceil(cells / rows);
    } else if (oRows == null && oCols != null) {
      cols = oCols;
      rows = Math.ceil(cells / cols);
    } else if (cols * rows > cells) {
      var sm = small();
      var lg = large();
      if ((sm - 1) * lg >= cells) {
        small(sm - 1);
      } else if ((lg - 1) * sm >= cells) {
        large(lg - 1);
      }
    } else {
      while (cols * rows < cells) {
        var _sm = small();
        var _lg = large();
        if ((_lg + 1) * _sm >= cells) {
          large(_lg + 1);
        } else {
          small(_sm + 1);
        }
      }
    }
    var cellWidth = bb.w / cols;
    var cellHeight = bb.h / rows;
    if (options2.condense) {
      cellWidth = 0;
      cellHeight = 0;
    }
    if (options2.avoidOverlap) {
      for (var i2 = 0; i2 < nodes3.length; i2++) {
        var node = nodes3[i2];
        var pos = node._private.position;
        if (pos.x == null || pos.y == null) {
          pos.x = 0;
          pos.y = 0;
        }
        var nbb = node.layoutDimensions(options2);
        var p3 = options2.avoidOverlapPadding;
        var w2 = nbb.w + p3;
        var h2 = nbb.h + p3;
        cellWidth = Math.max(cellWidth, w2);
        cellHeight = Math.max(cellHeight, h2);
      }
    }
    var cellUsed = {};
    var used = function used2(row2, col2) {
      return cellUsed["c-" + row2 + "-" + col2] ? true : false;
    };
    var use = function use2(row2, col2) {
      cellUsed["c-" + row2 + "-" + col2] = true;
    };
    var row = 0;
    var col = 0;
    var moveToNextCell = function moveToNextCell2() {
      col++;
      if (col >= cols) {
        col = 0;
        row++;
      }
    };
    var id2manPos = {};
    for (var _i = 0; _i < nodes3.length; _i++) {
      var _node = nodes3[_i];
      var rcPos = options2.position(_node);
      if (rcPos && (rcPos.row !== void 0 || rcPos.col !== void 0)) {
        var _pos = {
          row: rcPos.row,
          col: rcPos.col
        };
        if (_pos.col === void 0) {
          _pos.col = 0;
          while (used(_pos.row, _pos.col)) {
            _pos.col++;
          }
        } else if (_pos.row === void 0) {
          _pos.row = 0;
          while (used(_pos.row, _pos.col)) {
            _pos.row++;
          }
        }
        id2manPos[_node.id()] = _pos;
        use(_pos.row, _pos.col);
      }
    }
    var getPos = function getPos2(element3, i3) {
      var x3, y3;
      if (element3.locked() || element3.isParent()) {
        return false;
      }
      var rcPos2 = id2manPos[element3.id()];
      if (rcPos2) {
        x3 = rcPos2.col * cellWidth + cellWidth / 2 + bb.x1;
        y3 = rcPos2.row * cellHeight + cellHeight / 2 + bb.y1;
      } else {
        while (used(row, col)) {
          moveToNextCell();
        }
        x3 = col * cellWidth + cellWidth / 2 + bb.x1;
        y3 = row * cellHeight + cellHeight / 2 + bb.y1;
        use(row, col);
        moveToNextCell();
      }
      return {
        x: x3,
        y: y3
      };
    };
    nodes3.layoutPositions(this, options2, getPos);
  }
  return this;
};
var defaults$2 = {
  ready: function ready3() {
  },
  // on layoutready
  stop: function stop4() {
  }
  // on layoutstop
};
function NullLayout(options2) {
  this.options = extend({}, defaults$2, options2);
}
NullLayout.prototype.run = function() {
  var options2 = this.options;
  var eles = options2.eles;
  var layout4 = this;
  options2.cy;
  layout4.emit("layoutstart");
  eles.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  });
  layout4.one("layoutready", options2.ready);
  layout4.emit("layoutready");
  layout4.one("layoutstop", options2.stop);
  layout4.emit("layoutstop");
  return this;
};
NullLayout.prototype.stop = function() {
  return this;
};
var defaults$1 = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: true,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function animateFilter6(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform5(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function PresetLayout(options2) {
  this.options = extend({}, defaults$1, options2);
}
PresetLayout.prototype.run = function() {
  var options2 = this.options;
  var eles = options2.eles;
  var nodes3 = eles.nodes();
  var posIsFn = fn$6(options2.positions);
  function getPosition(node) {
    if (options2.positions == null) {
      return copyPosition(node.position());
    }
    if (posIsFn) {
      return options2.positions(node);
    }
    var pos = options2.positions[node._private.data.id];
    if (pos == null) {
      return null;
    }
    return pos;
  }
  nodes3.layoutPositions(this, options2, function(node, i2) {
    var position3 = getPosition(node);
    if (node.locked() || position3 == null) {
      return false;
    }
    return position3;
  });
  return this;
};
var defaults2 = {
  fit: true,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: false,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function animateFilter7(node, i2) {
    return true;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function transform6(node, position3) {
    return position3;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function RandomLayout(options2) {
  this.options = extend({}, defaults2, options2);
}
RandomLayout.prototype.run = function() {
  var options2 = this.options;
  var cy = options2.cy;
  var eles = options2.eles;
  var bb = makeBoundingBox(options2.boundingBox ? options2.boundingBox : {
    x1: 0,
    y1: 0,
    w: cy.width(),
    h: cy.height()
  });
  var getPos = function getPos2(node, i2) {
    return {
      x: bb.x1 + Math.round(Math.random() * bb.w),
      y: bb.y1 + Math.round(Math.random() * bb.h)
    };
  };
  eles.nodes().layoutPositions(this, options2, getPos);
  return this;
};
var layout3 = [{
  name: "breadthfirst",
  impl: BreadthFirstLayout
}, {
  name: "circle",
  impl: CircleLayout
}, {
  name: "concentric",
  impl: ConcentricLayout
}, {
  name: "cose",
  impl: CoseLayout
}, {
  name: "grid",
  impl: GridLayout
}, {
  name: "null",
  impl: NullLayout
}, {
  name: "preset",
  impl: PresetLayout
}, {
  name: "random",
  impl: RandomLayout
}];
function NullRenderer(options2) {
  this.options = options2;
  this.notifications = 0;
}
var noop2 = function noop3() {
};
var throwImgErr = function throwImgErr2() {
  throw new Error("A headless instance can not render images");
};
NullRenderer.prototype = {
  recalculateRenderedStyle: noop2,
  notify: function notify2() {
    this.notifications++;
  },
  init: noop2,
  isHeadless: function isHeadless() {
    return true;
  },
  png: throwImgErr,
  jpg: throwImgErr
};
var BRp$f = {};
BRp$f.arrowShapeWidth = 0.3;
BRp$f.registerArrowShapes = function() {
  var arrowShapes = this.arrowShapes = {};
  var renderer3 = this;
  var bbCollide = function bbCollide2(x3, y3, size3, angle2, translation, edgeWidth, padding) {
    var x1 = translation.x - size3 / 2 - padding;
    var x22 = translation.x + size3 / 2 + padding;
    var y1 = translation.y - size3 / 2 - padding;
    var y22 = translation.y + size3 / 2 + padding;
    var inside = x1 <= x3 && x3 <= x22 && y1 <= y3 && y3 <= y22;
    return inside;
  };
  var transform7 = function transform8(x3, y3, size3, angle2, translation) {
    var xRotated = x3 * Math.cos(angle2) - y3 * Math.sin(angle2);
    var yRotated = x3 * Math.sin(angle2) + y3 * Math.cos(angle2);
    var xScaled = xRotated * size3;
    var yScaled = yRotated * size3;
    var xTranslated = xScaled + translation.x;
    var yTranslated = yScaled + translation.y;
    return {
      x: xTranslated,
      y: yTranslated
    };
  };
  var transformPoints3 = function transformPoints4(pts2, size3, angle2, translation) {
    var retPts = [];
    for (var i2 = 0; i2 < pts2.length; i2 += 2) {
      var x3 = pts2[i2];
      var y3 = pts2[i2 + 1];
      retPts.push(transform7(x3, y3, size3, angle2, translation));
    }
    return retPts;
  };
  var pointsToArr = function pointsToArr2(pts2) {
    var ret = [];
    for (var i2 = 0; i2 < pts2.length; i2++) {
      var p3 = pts2[i2];
      ret.push(p3.x, p3.y);
    }
    return ret;
  };
  var standardGap = function standardGap2(edge) {
    return edge.pstyle("width").pfValue * edge.pstyle("arrow-scale").pfValue * 2;
  };
  var defineArrowShape = function defineArrowShape2(name, defn) {
    if (string(defn)) {
      defn = arrowShapes[defn];
    }
    arrowShapes[name] = extend({
      name,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function collide(x3, y3, size3, angle2, translation, padding) {
        var points = pointsToArr(transformPoints3(this.points, size3 + 2 * padding, angle2, translation));
        var inside = pointInsidePolygonPoints(x3, y3, points);
        return inside;
      },
      roughCollide: bbCollide,
      draw: function draw(context, size3, angle2, translation) {
        var points = transformPoints3(this.points, size3, angle2, translation);
        renderer3.arrowShapeImpl("polygon")(context, points);
      },
      spacing: function spacing(edge) {
        return 0;
      },
      gap: standardGap
    }, defn);
  };
  defineArrowShape("none", {
    collide: falsify,
    roughCollide: falsify,
    draw: noop$1,
    spacing: zeroify,
    gap: zeroify
  });
  defineArrowShape("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  });
  defineArrowShape("arrow", "triangle");
  defineArrowShape("triangle-backcurve", {
    points: arrowShapes["triangle"].points,
    controlPoint: [0, -0.15],
    roughCollide: bbCollide,
    draw: function draw(context, size3, angle2, translation, edgeWidth) {
      var ptsTrans = transformPoints3(this.points, size3, angle2, translation);
      var ctrlPt = this.controlPoint;
      var ctrlPtTrans = transform7(ctrlPt[0], ctrlPt[1], size3, angle2, translation);
      renderer3.arrowShapeImpl(this.name)(context, ptsTrans, ctrlPtTrans);
    },
    gap: function gap(edge) {
      return standardGap(edge) * 0.8;
    }
  });
  defineArrowShape("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function collide(x3, y3, size3, angle2, translation, edgeWidth, padding) {
      var triPts = pointsToArr(transformPoints3(this.points, size3 + 2 * padding, angle2, translation));
      var teePts = pointsToArr(transformPoints3(this.pointsTee, size3 + 2 * padding, angle2, translation));
      var inside = pointInsidePolygonPoints(x3, y3, triPts) || pointInsidePolygonPoints(x3, y3, teePts);
      return inside;
    },
    draw: function draw(context, size3, angle2, translation, edgeWidth) {
      var triPts = transformPoints3(this.points, size3, angle2, translation);
      var teePts = transformPoints3(this.pointsTee, size3, angle2, translation);
      renderer3.arrowShapeImpl(this.name)(context, triPts, teePts);
    }
  });
  defineArrowShape("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function collide(x3, y3, size3, angle2, translation, edgeWidth, padding) {
      var t2 = translation;
      var circleInside = Math.pow(t2.x - x3, 2) + Math.pow(t2.y - y3, 2) <= Math.pow((size3 + 2 * padding) * this.radius, 2);
      var triPts = pointsToArr(transformPoints3(this.points, size3 + 2 * padding, angle2, translation));
      return pointInsidePolygonPoints(x3, y3, triPts) || circleInside;
    },
    draw: function draw(context, size3, angle2, translation, edgeWidth) {
      var triPts = transformPoints3(this.pointsTr, size3, angle2, translation);
      renderer3.arrowShapeImpl(this.name)(context, triPts, translation.x, translation.y, this.radius * size3);
    },
    spacing: function spacing(edge) {
      return renderer3.getArrowWidth(edge.pstyle("width").pfValue, edge.pstyle("arrow-scale").value) * this.radius;
    }
  });
  defineArrowShape("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function crossLinePts(size3, edgeWidth) {
      var p3 = this.baseCrossLinePts.slice();
      var shiftFactor = edgeWidth / size3;
      var y0 = 3;
      var y1 = 5;
      p3[y0] = p3[y0] - shiftFactor;
      p3[y1] = p3[y1] - shiftFactor;
      return p3;
    },
    collide: function collide(x3, y3, size3, angle2, translation, edgeWidth, padding) {
      var triPts = pointsToArr(transformPoints3(this.points, size3 + 2 * padding, angle2, translation));
      var teePts = pointsToArr(transformPoints3(this.crossLinePts(size3, edgeWidth), size3 + 2 * padding, angle2, translation));
      var inside = pointInsidePolygonPoints(x3, y3, triPts) || pointInsidePolygonPoints(x3, y3, teePts);
      return inside;
    },
    draw: function draw(context, size3, angle2, translation, edgeWidth) {
      var triPts = transformPoints3(this.points, size3, angle2, translation);
      var crossLinePts = transformPoints3(this.crossLinePts(size3, edgeWidth), size3, angle2, translation);
      renderer3.arrowShapeImpl(this.name)(context, triPts, crossLinePts);
    }
  });
  defineArrowShape("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function gap(edge) {
      return standardGap(edge) * 0.525;
    }
  });
  defineArrowShape("circle", {
    radius: 0.15,
    collide: function collide(x3, y3, size3, angle2, translation, edgeWidth, padding) {
      var t2 = translation;
      var inside = Math.pow(t2.x - x3, 2) + Math.pow(t2.y - y3, 2) <= Math.pow((size3 + 2 * padding) * this.radius, 2);
      return inside;
    },
    draw: function draw(context, size3, angle2, translation, edgeWidth) {
      renderer3.arrowShapeImpl(this.name)(context, translation.x, translation.y, this.radius * size3);
    },
    spacing: function spacing(edge) {
      return renderer3.getArrowWidth(edge.pstyle("width").pfValue, edge.pstyle("arrow-scale").value) * this.radius;
    }
  });
  defineArrowShape("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function spacing(edge) {
      return 1;
    },
    gap: function gap(edge) {
      return 1;
    }
  });
  defineArrowShape("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  });
  defineArrowShape("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function gap(edge) {
      return edge.pstyle("width").pfValue * edge.pstyle("arrow-scale").value;
    }
  });
  defineArrowShape("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function gap(edge) {
      return 0.95 * edge.pstyle("width").pfValue * edge.pstyle("arrow-scale").value;
    }
  });
};
var BRp$e = {};
BRp$e.projectIntoViewport = function(clientX, clientY) {
  var cy = this.cy;
  var offsets = this.findContainerClientCoords();
  var offsetLeft = offsets[0];
  var offsetTop = offsets[1];
  var scale2 = offsets[4];
  var pan2 = cy.pan();
  var zoom2 = cy.zoom();
  var x3 = ((clientX - offsetLeft) / scale2 - pan2.x) / zoom2;
  var y3 = ((clientY - offsetTop) / scale2 - pan2.y) / zoom2;
  return [x3, y3];
};
BRp$e.findContainerClientCoords = function() {
  if (this.containerBB) {
    return this.containerBB;
  }
  var container2 = this.container;
  var rect = container2.getBoundingClientRect();
  var style3 = this.cy.window().getComputedStyle(container2);
  var styleValue = function styleValue2(name) {
    return parseFloat(style3.getPropertyValue(name));
  };
  var padding = {
    left: styleValue("padding-left"),
    right: styleValue("padding-right"),
    top: styleValue("padding-top"),
    bottom: styleValue("padding-bottom")
  };
  var border = {
    left: styleValue("border-left-width"),
    right: styleValue("border-right-width"),
    top: styleValue("border-top-width"),
    bottom: styleValue("border-bottom-width")
  };
  var clientWidth = container2.clientWidth;
  var clientHeight = container2.clientHeight;
  var paddingHor = padding.left + padding.right;
  var paddingVer = padding.top + padding.bottom;
  var borderHor = border.left + border.right;
  var scale2 = rect.width / (clientWidth + borderHor);
  var unscaledW = clientWidth - paddingHor;
  var unscaledH = clientHeight - paddingVer;
  var left = rect.left + padding.left + border.left;
  var top = rect.top + padding.top + border.top;
  return this.containerBB = [left, top, unscaledW, unscaledH, scale2];
};
BRp$e.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
BRp$e.findNearestElement = function(x3, y3, interactiveElementsOnly, isTouch) {
  return this.findNearestElements(x3, y3, interactiveElementsOnly, isTouch)[0];
};
BRp$e.findNearestElements = function(x3, y3, interactiveElementsOnly, isTouch) {
  var self2 = this;
  var r2 = this;
  var eles = r2.getCachedZSortedEles();
  var near = [];
  var zoom2 = r2.cy.zoom();
  var hasCompounds = r2.cy.hasCompoundNodes();
  var edgeThreshold = (isTouch ? 24 : 8) / zoom2;
  var nodeThreshold = (isTouch ? 8 : 2) / zoom2;
  var labelThreshold = (isTouch ? 8 : 2) / zoom2;
  var minSqDist = Infinity;
  var nearEdge;
  var nearNode;
  if (interactiveElementsOnly) {
    eles = eles.interactive;
  }
  function addEle(ele2, sqDist) {
    if (ele2.isNode()) {
      if (nearNode) {
        return;
      } else {
        nearNode = ele2;
        near.push(ele2);
      }
    }
    if (ele2.isEdge() && (sqDist == null || sqDist < minSqDist)) {
      if (nearEdge) {
        if (nearEdge.pstyle("z-compound-depth").value === ele2.pstyle("z-compound-depth").value && nearEdge.pstyle("z-compound-depth").value === ele2.pstyle("z-compound-depth").value) {
          for (var i3 = 0; i3 < near.length; i3++) {
            if (near[i3].isEdge()) {
              near[i3] = ele2;
              nearEdge = ele2;
              minSqDist = sqDist != null ? sqDist : minSqDist;
              break;
            }
          }
        }
      } else {
        near.push(ele2);
        nearEdge = ele2;
        minSqDist = sqDist != null ? sqDist : minSqDist;
      }
    }
  }
  function checkNode(node) {
    var width2 = node.outerWidth() + 2 * nodeThreshold;
    var height2 = node.outerHeight() + 2 * nodeThreshold;
    var hw = width2 / 2;
    var hh = height2 / 2;
    var pos = node.position();
    var cornerRadius = node.pstyle("corner-radius").value === "auto" ? "auto" : node.pstyle("corner-radius").pfValue;
    var rs = node._private.rscratch;
    if (pos.x - hw <= x3 && x3 <= pos.x + hw && pos.y - hh <= y3 && y3 <= pos.y + hh) {
      var shape = r2.nodeShapes[self2.getNodeShape(node)];
      if (shape.checkPoint(x3, y3, 0, width2, height2, pos.x, pos.y, cornerRadius, rs)) {
        addEle(node, 0);
        return true;
      }
    }
  }
  function checkEdge(edge) {
    var _p = edge._private;
    var rs = _p.rscratch;
    var styleWidth = edge.pstyle("width").pfValue;
    var scale2 = edge.pstyle("arrow-scale").value;
    var width2 = styleWidth / 2 + edgeThreshold;
    var widthSq = width2 * width2;
    var width22 = width2 * 2;
    var src = _p.source;
    var tgt = _p.target;
    var sqDist;
    if (rs.edgeType === "segments" || rs.edgeType === "straight" || rs.edgeType === "haystack") {
      var pts2 = rs.allpts;
      for (var i3 = 0; i3 + 3 < pts2.length; i3 += 2) {
        if (inLineVicinity(x3, y3, pts2[i3], pts2[i3 + 1], pts2[i3 + 2], pts2[i3 + 3], width22) && widthSq > (sqDist = sqdistToFiniteLine(x3, y3, pts2[i3], pts2[i3 + 1], pts2[i3 + 2], pts2[i3 + 3]))) {
          addEle(edge, sqDist);
          return true;
        }
      }
    } else if (rs.edgeType === "bezier" || rs.edgeType === "multibezier" || rs.edgeType === "self" || rs.edgeType === "compound") {
      var pts2 = rs.allpts;
      for (var i3 = 0; i3 + 5 < rs.allpts.length; i3 += 4) {
        if (inBezierVicinity(x3, y3, pts2[i3], pts2[i3 + 1], pts2[i3 + 2], pts2[i3 + 3], pts2[i3 + 4], pts2[i3 + 5], width22) && widthSq > (sqDist = sqdistToQuadraticBezier(x3, y3, pts2[i3], pts2[i3 + 1], pts2[i3 + 2], pts2[i3 + 3], pts2[i3 + 4], pts2[i3 + 5]))) {
          addEle(edge, sqDist);
          return true;
        }
      }
    }
    var src = src || _p.source;
    var tgt = tgt || _p.target;
    var arSize = self2.getArrowWidth(styleWidth, scale2);
    var arrows = [{
      name: "source",
      x: rs.arrowStartX,
      y: rs.arrowStartY,
      angle: rs.srcArrowAngle
    }, {
      name: "target",
      x: rs.arrowEndX,
      y: rs.arrowEndY,
      angle: rs.tgtArrowAngle
    }, {
      name: "mid-source",
      x: rs.midX,
      y: rs.midY,
      angle: rs.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: rs.midX,
      y: rs.midY,
      angle: rs.midtgtArrowAngle
    }];
    for (var i3 = 0; i3 < arrows.length; i3++) {
      var ar = arrows[i3];
      var shape = r2.arrowShapes[edge.pstyle(ar.name + "-arrow-shape").value];
      var edgeWidth = edge.pstyle("width").pfValue;
      if (shape.roughCollide(x3, y3, arSize, ar.angle, {
        x: ar.x,
        y: ar.y
      }, edgeWidth, edgeThreshold) && shape.collide(x3, y3, arSize, ar.angle, {
        x: ar.x,
        y: ar.y
      }, edgeWidth, edgeThreshold)) {
        addEle(edge);
        return true;
      }
    }
    if (hasCompounds && near.length > 0) {
      checkNode(src);
      checkNode(tgt);
    }
  }
  function preprop(obj, name, pre) {
    return getPrefixedProperty(obj, name, pre);
  }
  function checkLabel(ele2, prefix) {
    var _p = ele2._private;
    var th = labelThreshold;
    var prefixDash;
    if (prefix) {
      prefixDash = prefix + "-";
    } else {
      prefixDash = "";
    }
    ele2.boundingBox();
    var bb = _p.labelBounds[prefix || "main"];
    var text = ele2.pstyle(prefixDash + "label").value;
    var eventsEnabled = ele2.pstyle("text-events").strValue === "yes";
    if (!eventsEnabled || !text) {
      return;
    }
    var lx = preprop(_p.rscratch, "labelX", prefix);
    var ly = preprop(_p.rscratch, "labelY", prefix);
    var theta = preprop(_p.rscratch, "labelAngle", prefix);
    var ox = ele2.pstyle(prefixDash + "text-margin-x").pfValue;
    var oy = ele2.pstyle(prefixDash + "text-margin-y").pfValue;
    var lx1 = bb.x1 - th - ox;
    var lx2 = bb.x2 + th - ox;
    var ly1 = bb.y1 - th - oy;
    var ly2 = bb.y2 + th - oy;
    if (theta) {
      var cos2 = Math.cos(theta);
      var sin2 = Math.sin(theta);
      var rotate2 = function rotate3(x4, y4) {
        x4 = x4 - lx;
        y4 = y4 - ly;
        return {
          x: x4 * cos2 - y4 * sin2 + lx,
          y: x4 * sin2 + y4 * cos2 + ly
        };
      };
      var px1y1 = rotate2(lx1, ly1);
      var px1y2 = rotate2(lx1, ly2);
      var px2y1 = rotate2(lx2, ly1);
      var px2y2 = rotate2(lx2, ly2);
      var points = [
        // with the margin added after the rotation is applied
        px1y1.x + ox,
        px1y1.y + oy,
        px2y1.x + ox,
        px2y1.y + oy,
        px2y2.x + ox,
        px2y2.y + oy,
        px1y2.x + ox,
        px1y2.y + oy
      ];
      if (pointInsidePolygonPoints(x3, y3, points)) {
        addEle(ele2);
        return true;
      }
    } else {
      if (inBoundingBox(bb, x3, y3)) {
        addEle(ele2);
        return true;
      }
    }
  }
  for (var i2 = eles.length - 1; i2 >= 0; i2--) {
    var ele = eles[i2];
    if (ele.isNode()) {
      checkNode(ele) || checkLabel(ele);
    } else {
      checkEdge(ele) || checkLabel(ele) || checkLabel(ele, "source") || checkLabel(ele, "target");
    }
  }
  return near;
};
BRp$e.getAllInBox = function(x1, y1, x22, y22) {
  var eles = this.getCachedZSortedEles().interactive;
  var zoom2 = this.cy.zoom();
  var labelThreshold = 2 / zoom2;
  var box = [];
  var x1c = Math.min(x1, x22);
  var x2c = Math.max(x1, x22);
  var y1c = Math.min(y1, y22);
  var y2c = Math.max(y1, y22);
  x1 = x1c;
  x22 = x2c;
  y1 = y1c;
  y22 = y2c;
  var boxBb = makeBoundingBox({
    x1,
    y1,
    x2: x22,
    y2: y22
  });
  var selectionBox = [{
    x: boxBb.x1,
    y: boxBb.y1
  }, {
    x: boxBb.x2,
    y: boxBb.y1
  }, {
    x: boxBb.x2,
    y: boxBb.y2
  }, {
    x: boxBb.x1,
    y: boxBb.y2
  }];
  var boxEdges = [[selectionBox[0], selectionBox[1]], [selectionBox[1], selectionBox[2]], [selectionBox[2], selectionBox[3]], [selectionBox[3], selectionBox[0]]];
  function preprop(obj, name, pre) {
    return getPrefixedProperty(obj, name, pre);
  }
  function getRotatedLabelBox(ele2, prefix) {
    var _p2 = ele2._private;
    var th = labelThreshold;
    var prefixDash = "";
    ele2.boundingBox();
    var bb = _p2.labelBounds["main"];
    if (!bb) {
      return null;
    }
    var lx = preprop(_p2.rscratch, "labelX", prefix);
    var ly = preprop(_p2.rscratch, "labelY", prefix);
    var theta = preprop(_p2.rscratch, "labelAngle", prefix);
    var ox = ele2.pstyle(prefixDash + "text-margin-x").pfValue;
    var oy = ele2.pstyle(prefixDash + "text-margin-y").pfValue;
    var lx1 = bb.x1 - th - ox;
    var lx2 = bb.x2 + th - ox;
    var ly1 = bb.y1 - th - oy;
    var ly2 = bb.y2 + th - oy;
    if (theta) {
      var cos2 = Math.cos(theta);
      var sin2 = Math.sin(theta);
      var rotate2 = function rotate3(x3, y3) {
        x3 = x3 - lx;
        y3 = y3 - ly;
        return {
          x: x3 * cos2 - y3 * sin2 + lx,
          y: x3 * sin2 + y3 * cos2 + ly
        };
      };
      return [rotate2(lx1, ly1), rotate2(lx2, ly1), rotate2(lx2, ly2), rotate2(lx1, ly2)];
    } else {
      return [{
        x: lx1,
        y: ly1
      }, {
        x: lx2,
        y: ly1
      }, {
        x: lx2,
        y: ly2
      }, {
        x: lx1,
        y: ly2
      }];
    }
  }
  function doLinesIntersect(p1, p22, q1, q2) {
    function ccw(a2, b3, c2) {
      return (c2.y - a2.y) * (b3.x - a2.x) > (b3.y - a2.y) * (c2.x - a2.x);
    }
    return ccw(p1, q1, q2) !== ccw(p22, q1, q2) && ccw(p1, p22, q1) !== ccw(p1, p22, q2);
  }
  for (var e2 = 0; e2 < eles.length; e2++) {
    var ele = eles[e2];
    if (ele.isNode()) {
      var node = ele;
      var textEvents = node.pstyle("text-events").strValue === "yes";
      var nodeBoxSelectMode = node.pstyle("box-selection").strValue;
      var labelBoxSelectEnabled = node.pstyle("box-select-labels").strValue === "yes";
      if (nodeBoxSelectMode === "none") {
        continue;
      }
      var includeLabels = (nodeBoxSelectMode === "overlap" || labelBoxSelectEnabled) && textEvents;
      var nodeBb = node.boundingBox({
        includeNodes: true,
        includeEdges: false,
        includeLabels
      });
      if (nodeBoxSelectMode === "contain") {
        var selected = false;
        if (labelBoxSelectEnabled && textEvents) {
          var rotatedLabelBox = getRotatedLabelBox(node);
          if (rotatedLabelBox && satPolygonIntersection(rotatedLabelBox, selectionBox)) {
            box.push(node);
            selected = true;
          }
        }
        if (!selected && boundingBoxInBoundingBox(boxBb, nodeBb)) {
          box.push(node);
        }
      } else if (nodeBoxSelectMode === "overlap") {
        if (boundingBoxesIntersect(boxBb, nodeBb)) {
          var nodeBodyBb = node.boundingBox({
            includeNodes: true,
            includeEdges: true,
            includeLabels: false,
            includeMainLabels: false,
            includeSourceLabels: false,
            includeTargetLabels: false
          });
          var nodeBodyCorners = [{
            x: nodeBodyBb.x1,
            y: nodeBodyBb.y1
          }, {
            x: nodeBodyBb.x2,
            y: nodeBodyBb.y1
          }, {
            x: nodeBodyBb.x2,
            y: nodeBodyBb.y2
          }, {
            x: nodeBodyBb.x1,
            y: nodeBodyBb.y2
          }];
          if (satPolygonIntersection(nodeBodyCorners, selectionBox)) {
            box.push(node);
          } else {
            var _rotatedLabelBox = getRotatedLabelBox(node);
            if (_rotatedLabelBox && satPolygonIntersection(_rotatedLabelBox, selectionBox)) {
              box.push(node);
            }
          }
        }
      }
    } else {
      var edge = ele;
      var _p = edge._private;
      var rs = _p.rscratch;
      var edgeBoxSelectMode = edge.pstyle("box-selection").strValue;
      if (edgeBoxSelectMode === "none") {
        continue;
      }
      if (edgeBoxSelectMode === "contain") {
        if (rs.startX != null && rs.startY != null && !inBoundingBox(boxBb, rs.startX, rs.startY)) {
          continue;
        }
        if (rs.endX != null && rs.endY != null && !inBoundingBox(boxBb, rs.endX, rs.endY)) {
          continue;
        }
        if (rs.edgeType === "bezier" || rs.edgeType === "multibezier" || rs.edgeType === "self" || rs.edgeType === "compound" || rs.edgeType === "segments" || rs.edgeType === "haystack") {
          var pts2 = _p.rstyle.bezierPts || _p.rstyle.linePts || _p.rstyle.haystackPts;
          var allInside = true;
          for (var i2 = 0; i2 < pts2.length; i2++) {
            if (!pointInBoundingBox(boxBb, pts2[i2])) {
              allInside = false;
              break;
            }
          }
          if (allInside) {
            box.push(edge);
          }
        } else if (rs.edgeType === "straight") {
          box.push(edge);
        }
      } else if (edgeBoxSelectMode === "overlap") {
        var _selected = false;
        if (rs.startX != null && rs.startY != null && rs.endX != null && rs.endY != null && (inBoundingBox(boxBb, rs.startX, rs.startY) || inBoundingBox(boxBb, rs.endX, rs.endY))) {
          box.push(edge);
          _selected = true;
        } else if (!_selected && rs.edgeType === "haystack") {
          var haystackPts = _p.rstyle.haystackPts;
          for (var _i = 0; _i < haystackPts.length; _i++) {
            if (pointInBoundingBox(boxBb, haystackPts[_i])) {
              box.push(edge);
              _selected = true;
              break;
            }
          }
        }
        if (!_selected) {
          var _pts = _p.rstyle.bezierPts || _p.rstyle.linePts || _p.rstyle.haystackPts;
          if ((!_pts || _pts.length < 2) && rs.edgeType === "straight") {
            if (rs.startX != null && rs.startY != null && rs.endX != null && rs.endY != null) {
              _pts = [{
                x: rs.startX,
                y: rs.startY
              }, {
                x: rs.endX,
                y: rs.endY
              }];
            }
          }
          if (!_pts || _pts.length < 2) continue;
          for (var _i2 = 0; _i2 < _pts.length - 1; _i2++) {
            var segStart = _pts[_i2];
            var segEnd = _pts[_i2 + 1];
            for (var b2 = 0; b2 < boxEdges.length; b2++) {
              var _boxEdges$b = _slicedToArray(boxEdges[b2], 2), boxStart = _boxEdges$b[0], boxEnd = _boxEdges$b[1];
              if (doLinesIntersect(segStart, segEnd, boxStart, boxEnd)) {
                box.push(edge);
                _selected = true;
                break;
              }
            }
            if (_selected) break;
          }
        }
      }
    }
  }
  return box;
};
var BRp$d = {};
BRp$d.calculateArrowAngles = function(edge) {
  var rs = edge._private.rscratch;
  var isHaystack = rs.edgeType === "haystack";
  var isBezier = rs.edgeType === "bezier";
  var isMultibezier = rs.edgeType === "multibezier";
  var isSegments = rs.edgeType === "segments";
  var isCompound = rs.edgeType === "compound";
  var isSelf = rs.edgeType === "self";
  var dispX, dispY;
  var startX2, startY2, endX, endY, midX, midY;
  if (isHaystack) {
    startX2 = rs.haystackPts[0];
    startY2 = rs.haystackPts[1];
    endX = rs.haystackPts[2];
    endY = rs.haystackPts[3];
  } else {
    startX2 = rs.arrowStartX;
    startY2 = rs.arrowStartY;
    endX = rs.arrowEndX;
    endY = rs.arrowEndY;
  }
  midX = rs.midX;
  midY = rs.midY;
  if (isSegments) {
    dispX = startX2 - rs.segpts[0];
    dispY = startY2 - rs.segpts[1];
  } else if (isMultibezier || isCompound || isSelf || isBezier) {
    var pts2 = rs.allpts;
    var bX = qbezierAt(pts2[0], pts2[2], pts2[4], 0.1);
    var bY = qbezierAt(pts2[1], pts2[3], pts2[5], 0.1);
    dispX = startX2 - bX;
    dispY = startY2 - bY;
  } else {
    dispX = startX2 - midX;
    dispY = startY2 - midY;
  }
  rs.srcArrowAngle = getAngleFromDisp(dispX, dispY);
  var midX = rs.midX;
  var midY = rs.midY;
  if (isHaystack) {
    midX = (startX2 + endX) / 2;
    midY = (startY2 + endY) / 2;
  }
  dispX = endX - startX2;
  dispY = endY - startY2;
  if (isSegments) {
    var pts2 = rs.allpts;
    if (pts2.length / 2 % 2 === 0) {
      var i2 = pts2.length / 2;
      var i1 = i2 - 2;
      dispX = pts2[i2] - pts2[i1];
      dispY = pts2[i2 + 1] - pts2[i1 + 1];
    } else if (rs.isRound) {
      dispX = rs.midVector[1];
      dispY = -rs.midVector[0];
    } else {
      var i2 = pts2.length / 2 - 1;
      var i1 = i2 - 2;
      dispX = pts2[i2] - pts2[i1];
      dispY = pts2[i2 + 1] - pts2[i1 + 1];
    }
  } else if (isMultibezier || isCompound || isSelf) {
    var pts2 = rs.allpts;
    var cpts = rs.ctrlpts;
    var bp0x, bp0y;
    var bp1x, bp1y;
    if (cpts.length / 2 % 2 === 0) {
      var p0 = pts2.length / 2 - 1;
      var ic = p0 + 2;
      var p1 = ic + 2;
      bp0x = qbezierAt(pts2[p0], pts2[ic], pts2[p1], 0);
      bp0y = qbezierAt(pts2[p0 + 1], pts2[ic + 1], pts2[p1 + 1], 0);
      bp1x = qbezierAt(pts2[p0], pts2[ic], pts2[p1], 1e-4);
      bp1y = qbezierAt(pts2[p0 + 1], pts2[ic + 1], pts2[p1 + 1], 1e-4);
    } else {
      var ic = pts2.length / 2 - 1;
      var p0 = ic - 2;
      var p1 = ic + 2;
      bp0x = qbezierAt(pts2[p0], pts2[ic], pts2[p1], 0.4999);
      bp0y = qbezierAt(pts2[p0 + 1], pts2[ic + 1], pts2[p1 + 1], 0.4999);
      bp1x = qbezierAt(pts2[p0], pts2[ic], pts2[p1], 0.5);
      bp1y = qbezierAt(pts2[p0 + 1], pts2[ic + 1], pts2[p1 + 1], 0.5);
    }
    dispX = bp1x - bp0x;
    dispY = bp1y - bp0y;
  }
  rs.midtgtArrowAngle = getAngleFromDisp(dispX, dispY);
  rs.midDispX = dispX;
  rs.midDispY = dispY;
  dispX *= -1;
  dispY *= -1;
  if (isSegments) {
    var pts2 = rs.allpts;
    if (pts2.length / 2 % 2 === 0) ;
    else if (!rs.isRound) {
      var i2 = pts2.length / 2 - 1;
      var i3 = i2 + 2;
      dispX = -(pts2[i3] - pts2[i2]);
      dispY = -(pts2[i3 + 1] - pts2[i2 + 1]);
    }
  }
  rs.midsrcArrowAngle = getAngleFromDisp(dispX, dispY);
  if (isSegments) {
    dispX = endX - rs.segpts[rs.segpts.length - 2];
    dispY = endY - rs.segpts[rs.segpts.length - 1];
  } else if (isMultibezier || isCompound || isSelf || isBezier) {
    var pts2 = rs.allpts;
    var l2 = pts2.length;
    var bX = qbezierAt(pts2[l2 - 6], pts2[l2 - 4], pts2[l2 - 2], 0.9);
    var bY = qbezierAt(pts2[l2 - 5], pts2[l2 - 3], pts2[l2 - 1], 0.9);
    dispX = endX - bX;
    dispY = endY - bY;
  } else {
    dispX = endX - midX;
    dispY = endY - midY;
  }
  rs.tgtArrowAngle = getAngleFromDisp(dispX, dispY);
};
BRp$d.getArrowWidth = BRp$d.getArrowHeight = function(edgeWidth, scale2) {
  var cache3 = this.arrowWidthCache = this.arrowWidthCache || {};
  var cachedVal = cache3[edgeWidth + ", " + scale2];
  if (cachedVal) {
    return cachedVal;
  }
  cachedVal = Math.max(Math.pow(edgeWidth * 13.37, 0.9), 29) * scale2;
  cache3[edgeWidth + ", " + scale2] = cachedVal;
  return cachedVal;
};
var x;
var y;
var v1 = {};
var v2 = {};
var sinA;
var sinA90;
var radDirection;
var drawDirection;
var angle;
var halfAngle;
var cRadius;
var lenOut;
var radius;
var limit;
var startX;
var startY;
var stopX;
var stopY;
var lastPoint;
var asVec = function asVec2(p3, pp, v) {
  v.x = pp.x - p3.x;
  v.y = pp.y - p3.y;
  v.len = Math.sqrt(v.x * v.x + v.y * v.y);
  v.nx = v.x / v.len;
  v.ny = v.y / v.len;
  v.ang = Math.atan2(v.ny, v.nx);
};
var invertVec = function invertVec2(originalV, invertedV) {
  invertedV.x = originalV.x * -1;
  invertedV.y = originalV.y * -1;
  invertedV.nx = originalV.nx * -1;
  invertedV.ny = originalV.ny * -1;
  invertedV.ang = originalV.ang > 0 ? -(Math.PI - originalV.ang) : Math.PI + originalV.ang;
};
var calcCornerArc = function calcCornerArc2(previousPoint, currentPoint, nextPoint, radiusMax, isArcRadius) {
  previousPoint !== lastPoint ? asVec(currentPoint, previousPoint, v1) : invertVec(v2, v1);
  asVec(currentPoint, nextPoint, v2);
  sinA = v1.nx * v2.ny - v1.ny * v2.nx;
  sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
  angle = Math.asin(Math.max(-1, Math.min(1, sinA)));
  if (Math.abs(angle) < 1e-6) {
    x = currentPoint.x;
    y = currentPoint.y;
    cRadius = radius = 0;
    return;
  }
  radDirection = 1;
  drawDirection = false;
  if (sinA90 < 0) {
    if (angle < 0) {
      angle = Math.PI + angle;
    } else {
      angle = Math.PI - angle;
      radDirection = -1;
      drawDirection = true;
    }
  } else {
    if (angle > 0) {
      radDirection = -1;
      drawDirection = true;
    }
  }
  if (currentPoint.radius !== void 0) {
    radius = currentPoint.radius;
  } else {
    radius = radiusMax;
  }
  halfAngle = angle / 2;
  limit = Math.min(v1.len / 2, v2.len / 2);
  if (isArcRadius) {
    lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));
    if (lenOut > limit) {
      lenOut = limit;
      cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
    } else {
      cRadius = radius;
    }
  } else {
    lenOut = Math.min(limit, radius);
    cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
  }
  stopX = currentPoint.x + v2.nx * lenOut;
  stopY = currentPoint.y + v2.ny * lenOut;
  x = stopX - v2.ny * cRadius * radDirection;
  y = stopY + v2.nx * cRadius * radDirection;
  startX = currentPoint.x + v1.nx * lenOut;
  startY = currentPoint.y + v1.ny * lenOut;
  lastPoint = currentPoint;
};
function drawPreparedRoundCorner(ctx, roundCorner) {
  if (roundCorner.radius === 0) ctx.lineTo(roundCorner.cx, roundCorner.cy);
  else ctx.arc(roundCorner.cx, roundCorner.cy, roundCorner.radius, roundCorner.startAngle, roundCorner.endAngle, roundCorner.counterClockwise);
}
function getRoundCorner(previousPoint, currentPoint, nextPoint, radiusMax) {
  var isArcRadius = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  if (radiusMax === 0 || currentPoint.radius === 0) return {
    cx: currentPoint.x,
    cy: currentPoint.y,
    radius: 0,
    startX: currentPoint.x,
    startY: currentPoint.y,
    stopX: currentPoint.x,
    stopY: currentPoint.y,
    startAngle: void 0,
    endAngle: void 0,
    counterClockwise: void 0
  };
  calcCornerArc(previousPoint, currentPoint, nextPoint, radiusMax, isArcRadius);
  return {
    cx: x,
    cy: y,
    radius: cRadius,
    startX,
    startY,
    stopX,
    stopY,
    startAngle: v1.ang + Math.PI / 2 * radDirection,
    endAngle: v2.ang - Math.PI / 2 * radDirection,
    counterClockwise: drawDirection
  };
}
var AVOID_IMPOSSIBLE_BEZIER_CONSTANT = 0.01;
var AVOID_IMPOSSIBLE_BEZIER_CONSTANT_L = Math.sqrt(2 * AVOID_IMPOSSIBLE_BEZIER_CONSTANT);
var BRp$c = {};
BRp$c.findMidptPtsEtc = function(edge, pairInfo) {
  var posPts = pairInfo.posPts, intersectionPts = pairInfo.intersectionPts, vectorNormInverse = pairInfo.vectorNormInverse;
  var midptPts;
  var srcManEndpt = edge.pstyle("source-endpoint");
  var tgtManEndpt = edge.pstyle("target-endpoint");
  var haveManualEndPts = srcManEndpt.units != null && tgtManEndpt.units != null;
  var recalcVectorNormInverse = function recalcVectorNormInverse2(x12, y12, x23, y23) {
    var dy = y23 - y12;
    var dx = x23 - x12;
    var l2 = Math.sqrt(dx * dx + dy * dy);
    return {
      x: -dy / l2,
      y: dx / l2
    };
  };
  var edgeDistances = edge.pstyle("edge-distances").value;
  switch (edgeDistances) {
    case "node-position":
      midptPts = posPts;
      break;
    case "intersection":
      midptPts = intersectionPts;
      break;
    case "endpoints": {
      if (haveManualEndPts) {
        var _this$manualEndptToPx = this.manualEndptToPx(edge.source()[0], srcManEndpt), _this$manualEndptToPx2 = _slicedToArray(_this$manualEndptToPx, 2), x1 = _this$manualEndptToPx2[0], y1 = _this$manualEndptToPx2[1];
        var _this$manualEndptToPx3 = this.manualEndptToPx(edge.target()[0], tgtManEndpt), _this$manualEndptToPx4 = _slicedToArray(_this$manualEndptToPx3, 2), x22 = _this$manualEndptToPx4[0], y22 = _this$manualEndptToPx4[1];
        var endPts = {
          x1,
          y1,
          x2: x22,
          y2: y22
        };
        vectorNormInverse = recalcVectorNormInverse(x1, y1, x22, y22);
        midptPts = endPts;
      } else {
        warn("Edge ".concat(edge.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default)."));
        midptPts = intersectionPts;
      }
      break;
    }
  }
  return {
    midptPts,
    vectorNormInverse
  };
};
BRp$c.findHaystackPoints = function(edges3) {
  for (var i2 = 0; i2 < edges3.length; i2++) {
    var edge = edges3[i2];
    var _p = edge._private;
    var rs = _p.rscratch;
    if (!rs.haystack) {
      var angle2 = Math.random() * 2 * Math.PI;
      rs.source = {
        x: Math.cos(angle2),
        y: Math.sin(angle2)
      };
      angle2 = Math.random() * 2 * Math.PI;
      rs.target = {
        x: Math.cos(angle2),
        y: Math.sin(angle2)
      };
    }
    var src = _p.source;
    var tgt = _p.target;
    var srcPos = src.position();
    var tgtPos = tgt.position();
    var srcW = src.width();
    var tgtW = tgt.width();
    var srcH = src.height();
    var tgtH = tgt.height();
    var radius2 = edge.pstyle("haystack-radius").value;
    var halfRadius = radius2 / 2;
    rs.haystackPts = rs.allpts = [rs.source.x * srcW * halfRadius + srcPos.x, rs.source.y * srcH * halfRadius + srcPos.y, rs.target.x * tgtW * halfRadius + tgtPos.x, rs.target.y * tgtH * halfRadius + tgtPos.y];
    rs.midX = (rs.allpts[0] + rs.allpts[2]) / 2;
    rs.midY = (rs.allpts[1] + rs.allpts[3]) / 2;
    rs.edgeType = "haystack";
    rs.haystack = true;
    this.storeEdgeProjections(edge);
    this.calculateArrowAngles(edge);
    this.recalculateEdgeLabelProjections(edge);
    this.calculateLabelAngles(edge);
  }
};
BRp$c.findSegmentsPoints = function(edge, pairInfo) {
  var rs = edge._private.rscratch;
  var segmentWs = edge.pstyle("segment-weights");
  var segmentDs = edge.pstyle("segment-distances");
  var segmentRs = edge.pstyle("segment-radii");
  var segmentTs = edge.pstyle("radius-type");
  var segmentsN = Math.min(segmentWs.pfValue.length, segmentDs.pfValue.length);
  var lastRadius = segmentRs.pfValue[segmentRs.pfValue.length - 1];
  var lastRadiusType = segmentTs.pfValue[segmentTs.pfValue.length - 1];
  rs.edgeType = "segments";
  rs.segpts = [];
  rs.radii = [];
  rs.isArcRadius = [];
  for (var s2 = 0; s2 < segmentsN; s2++) {
    var w2 = segmentWs.pfValue[s2];
    var d2 = segmentDs.pfValue[s2];
    var w1 = 1 - w2;
    var w22 = w2;
    var _this$findMidptPtsEtc = this.findMidptPtsEtc(edge, pairInfo), midptPts = _this$findMidptPtsEtc.midptPts, vectorNormInverse = _this$findMidptPtsEtc.vectorNormInverse;
    var adjustedMidpt = {
      x: midptPts.x1 * w1 + midptPts.x2 * w22,
      y: midptPts.y1 * w1 + midptPts.y2 * w22
    };
    rs.segpts.push(adjustedMidpt.x + vectorNormInverse.x * d2, adjustedMidpt.y + vectorNormInverse.y * d2);
    rs.radii.push(segmentRs.pfValue[s2] !== void 0 ? segmentRs.pfValue[s2] : lastRadius);
    rs.isArcRadius.push((segmentTs.pfValue[s2] !== void 0 ? segmentTs.pfValue[s2] : lastRadiusType) === "arc-radius");
  }
};
BRp$c.findLoopPoints = function(edge, pairInfo, i2, edgeIsUnbundled) {
  var rs = edge._private.rscratch;
  var dirCounts = pairInfo.dirCounts, srcPos = pairInfo.srcPos;
  var ctrlptDists = edge.pstyle("control-point-distances");
  var ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[0] : void 0;
  var loopDir = edge.pstyle("loop-direction").pfValue;
  var loopSwp = edge.pstyle("loop-sweep").pfValue;
  var stepSize = edge.pstyle("control-point-step-size").pfValue;
  rs.edgeType = "self";
  var j = i2;
  var loopDist = stepSize;
  if (edgeIsUnbundled) {
    j = 0;
    loopDist = ctrlptDist;
  }
  var loopAngle = loopDir - Math.PI / 2;
  var outAngle = loopAngle - loopSwp / 2;
  var inAngle = loopAngle + loopSwp / 2;
  var dc = String(loopDir + "_" + loopSwp);
  j = dirCounts[dc] === void 0 ? dirCounts[dc] = 0 : ++dirCounts[dc];
  rs.ctrlpts = [srcPos.x + Math.cos(outAngle) * 1.4 * loopDist * (j / 3 + 1), srcPos.y + Math.sin(outAngle) * 1.4 * loopDist * (j / 3 + 1), srcPos.x + Math.cos(inAngle) * 1.4 * loopDist * (j / 3 + 1), srcPos.y + Math.sin(inAngle) * 1.4 * loopDist * (j / 3 + 1)];
};
BRp$c.findCompoundLoopPoints = function(edge, pairInfo, i2, edgeIsUnbundled) {
  var rs = edge._private.rscratch;
  rs.edgeType = "compound";
  var srcPos = pairInfo.srcPos, tgtPos = pairInfo.tgtPos, srcW = pairInfo.srcW, srcH = pairInfo.srcH, tgtW = pairInfo.tgtW, tgtH = pairInfo.tgtH;
  var stepSize = edge.pstyle("control-point-step-size").pfValue;
  var ctrlptDists = edge.pstyle("control-point-distances");
  var ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[0] : void 0;
  var j = i2;
  var loopDist = stepSize;
  if (edgeIsUnbundled) {
    j = 0;
    loopDist = ctrlptDist;
  }
  var loopW = 50;
  var loopaPos = {
    x: srcPos.x - srcW / 2,
    y: srcPos.y - srcH / 2
  };
  var loopbPos = {
    x: tgtPos.x - tgtW / 2,
    y: tgtPos.y - tgtH / 2
  };
  var loopPos = {
    x: Math.min(loopaPos.x, loopbPos.x),
    y: Math.min(loopaPos.y, loopbPos.y)
  };
  var minCompoundStretch = 0.5;
  var compoundStretchA = Math.max(minCompoundStretch, Math.log(srcW * AVOID_IMPOSSIBLE_BEZIER_CONSTANT));
  var compoundStretchB = Math.max(minCompoundStretch, Math.log(tgtW * AVOID_IMPOSSIBLE_BEZIER_CONSTANT));
  rs.ctrlpts = [loopPos.x, loopPos.y - (1 + Math.pow(loopW, 1.12) / 100) * loopDist * (j / 3 + 1) * compoundStretchA, loopPos.x - (1 + Math.pow(loopW, 1.12) / 100) * loopDist * (j / 3 + 1) * compoundStretchB, loopPos.y];
};
BRp$c.findStraightEdgePoints = function(edge) {
  edge._private.rscratch.edgeType = "straight";
};
BRp$c.findBezierPoints = function(edge, pairInfo, i2, edgeIsUnbundled, edgeIsSwapped) {
  var rs = edge._private.rscratch;
  var stepSize = edge.pstyle("control-point-step-size").pfValue;
  var ctrlptDists = edge.pstyle("control-point-distances");
  var ctrlptWs = edge.pstyle("control-point-weights");
  var bezierN = ctrlptDists && ctrlptWs ? Math.min(ctrlptDists.value.length, ctrlptWs.value.length) : 1;
  var ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[0] : void 0;
  var ctrlptWeight = ctrlptWs.value[0];
  var multi = edgeIsUnbundled;
  rs.edgeType = multi ? "multibezier" : "bezier";
  rs.ctrlpts = [];
  for (var b2 = 0; b2 < bezierN; b2++) {
    var normctrlptDist = (0.5 - pairInfo.eles.length / 2 + i2) * stepSize * (edgeIsSwapped ? -1 : 1);
    var manctrlptDist = void 0;
    var sign = signum(normctrlptDist);
    if (multi) {
      ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[b2] : stepSize;
      ctrlptWeight = ctrlptWs.value[b2];
    }
    if (edgeIsUnbundled) {
      manctrlptDist = ctrlptDist;
    } else {
      manctrlptDist = ctrlptDist !== void 0 ? sign * ctrlptDist : void 0;
    }
    var distanceFromMidpoint = manctrlptDist !== void 0 ? manctrlptDist : normctrlptDist;
    var w1 = 1 - ctrlptWeight;
    var w2 = ctrlptWeight;
    var _this$findMidptPtsEtc2 = this.findMidptPtsEtc(edge, pairInfo), midptPts = _this$findMidptPtsEtc2.midptPts, vectorNormInverse = _this$findMidptPtsEtc2.vectorNormInverse;
    var adjustedMidpt = {
      x: midptPts.x1 * w1 + midptPts.x2 * w2,
      y: midptPts.y1 * w1 + midptPts.y2 * w2
    };
    rs.ctrlpts.push(adjustedMidpt.x + vectorNormInverse.x * distanceFromMidpoint, adjustedMidpt.y + vectorNormInverse.y * distanceFromMidpoint);
  }
};
BRp$c.findTaxiPoints = function(edge, pairInfo) {
  var rs = edge._private.rscratch;
  rs.edgeType = "segments";
  var VERTICAL = "vertical";
  var HORIZONTAL = "horizontal";
  var LEFTWARD = "leftward";
  var RIGHTWARD = "rightward";
  var DOWNWARD = "downward";
  var UPWARD = "upward";
  var AUTO = "auto";
  var posPts = pairInfo.posPts, srcW = pairInfo.srcW, srcH = pairInfo.srcH, tgtW = pairInfo.tgtW, tgtH = pairInfo.tgtH;
  var edgeDistances = edge.pstyle("edge-distances").value;
  var dIncludesNodeBody = edgeDistances !== "node-position";
  var taxiDir = edge.pstyle("taxi-direction").value;
  var rawTaxiDir = taxiDir;
  var taxiTurn = edge.pstyle("taxi-turn");
  var turnIsPercent = taxiTurn.units === "%";
  var taxiTurnPfVal = taxiTurn.pfValue;
  var turnIsNegative = taxiTurnPfVal < 0;
  var minD = edge.pstyle("taxi-turn-min-distance").pfValue;
  var dw = dIncludesNodeBody ? (srcW + tgtW) / 2 : 0;
  var dh = dIncludesNodeBody ? (srcH + tgtH) / 2 : 0;
  var pdx = posPts.x2 - posPts.x1;
  var pdy = posPts.y2 - posPts.y1;
  var subDWH = function subDWH2(dxy, dwh) {
    if (dxy > 0) {
      return Math.max(dxy - dwh, 0);
    } else {
      return Math.min(dxy + dwh, 0);
    }
  };
  var dx = subDWH(pdx, dw);
  var dy = subDWH(pdy, dh);
  var isExplicitDir = false;
  if (rawTaxiDir === AUTO) {
    taxiDir = Math.abs(dx) > Math.abs(dy) ? HORIZONTAL : VERTICAL;
  } else if (rawTaxiDir === UPWARD || rawTaxiDir === DOWNWARD) {
    taxiDir = VERTICAL;
    isExplicitDir = true;
  } else if (rawTaxiDir === LEFTWARD || rawTaxiDir === RIGHTWARD) {
    taxiDir = HORIZONTAL;
    isExplicitDir = true;
  }
  var isVert = taxiDir === VERTICAL;
  var l2 = isVert ? dy : dx;
  var pl = isVert ? pdy : pdx;
  var sgnL = signum(pl);
  var forcedDir = false;
  if (!(isExplicitDir && (turnIsPercent || turnIsNegative)) && (rawTaxiDir === DOWNWARD && pl < 0 || rawTaxiDir === UPWARD && pl > 0 || rawTaxiDir === LEFTWARD && pl > 0 || rawTaxiDir === RIGHTWARD && pl < 0)) {
    sgnL *= -1;
    l2 = sgnL * Math.abs(l2);
    forcedDir = true;
  }
  var d2;
  if (turnIsPercent) {
    var p3 = taxiTurnPfVal < 0 ? 1 + taxiTurnPfVal : taxiTurnPfVal;
    d2 = p3 * l2;
  } else {
    var k = taxiTurnPfVal < 0 ? l2 : 0;
    d2 = k + taxiTurnPfVal * sgnL;
  }
  var getIsTooClose = function getIsTooClose2(d3) {
    return Math.abs(d3) < minD || Math.abs(d3) >= Math.abs(l2);
  };
  var isTooCloseSrc = getIsTooClose(d2);
  var isTooCloseTgt = getIsTooClose(Math.abs(l2) - Math.abs(d2));
  var isTooClose = isTooCloseSrc || isTooCloseTgt;
  if (isTooClose && !forcedDir) {
    if (isVert) {
      var lShapeInsideSrc = Math.abs(pl) <= srcH / 2;
      var lShapeInsideTgt = Math.abs(pdx) <= tgtW / 2;
      if (lShapeInsideSrc) {
        var x3 = (posPts.x1 + posPts.x2) / 2;
        var y1 = posPts.y1, y22 = posPts.y2;
        rs.segpts = [x3, y1, x3, y22];
      } else if (lShapeInsideTgt) {
        var y3 = (posPts.y1 + posPts.y2) / 2;
        var x1 = posPts.x1, x22 = posPts.x2;
        rs.segpts = [x1, y3, x22, y3];
      } else {
        rs.segpts = [posPts.x1, posPts.y2];
      }
    } else {
      var _lShapeInsideSrc = Math.abs(pl) <= srcW / 2;
      var _lShapeInsideTgt = Math.abs(pdy) <= tgtH / 2;
      if (_lShapeInsideSrc) {
        var _y = (posPts.y1 + posPts.y2) / 2;
        var _x = posPts.x1, _x2 = posPts.x2;
        rs.segpts = [_x, _y, _x2, _y];
      } else if (_lShapeInsideTgt) {
        var _x3 = (posPts.x1 + posPts.x2) / 2;
        var _y2 = posPts.y1, _y3 = posPts.y2;
        rs.segpts = [_x3, _y2, _x3, _y3];
      } else {
        rs.segpts = [posPts.x2, posPts.y1];
      }
    }
  } else {
    if (isVert) {
      var _y4 = posPts.y1 + d2 + (dIncludesNodeBody ? srcH / 2 * sgnL : 0);
      var _x4 = posPts.x1, _x5 = posPts.x2;
      rs.segpts = [_x4, _y4, _x5, _y4];
    } else {
      var _x6 = posPts.x1 + d2 + (dIncludesNodeBody ? srcW / 2 * sgnL : 0);
      var _y5 = posPts.y1, _y6 = posPts.y2;
      rs.segpts = [_x6, _y5, _x6, _y6];
    }
  }
  if (rs.isRound) {
    var radius2 = edge.pstyle("taxi-radius").value;
    var isArcRadius = edge.pstyle("radius-type").value[0] === "arc-radius";
    rs.radii = new Array(rs.segpts.length / 2).fill(radius2);
    rs.isArcRadius = new Array(rs.segpts.length / 2).fill(isArcRadius);
  }
};
BRp$c.tryToCorrectInvalidPoints = function(edge, pairInfo) {
  var rs = edge._private.rscratch;
  if (rs.edgeType === "bezier") {
    var srcPos = pairInfo.srcPos, tgtPos = pairInfo.tgtPos, srcW = pairInfo.srcW, srcH = pairInfo.srcH, tgtW = pairInfo.tgtW, tgtH = pairInfo.tgtH, srcShape = pairInfo.srcShape, tgtShape = pairInfo.tgtShape, srcCornerRadius = pairInfo.srcCornerRadius, tgtCornerRadius = pairInfo.tgtCornerRadius, srcRs = pairInfo.srcRs, tgtRs = pairInfo.tgtRs;
    var badStart = !number$1(rs.startX) || !number$1(rs.startY);
    var badAStart = !number$1(rs.arrowStartX) || !number$1(rs.arrowStartY);
    var badEnd = !number$1(rs.endX) || !number$1(rs.endY);
    var badAEnd = !number$1(rs.arrowEndX) || !number$1(rs.arrowEndY);
    var minCpADistFactor = 3;
    var arrowW = this.getArrowWidth(edge.pstyle("width").pfValue, edge.pstyle("arrow-scale").value) * this.arrowShapeWidth;
    var minCpADist = minCpADistFactor * arrowW;
    var startACpDist = dist({
      x: rs.ctrlpts[0],
      y: rs.ctrlpts[1]
    }, {
      x: rs.startX,
      y: rs.startY
    });
    var closeStartACp = startACpDist < minCpADist;
    var endACpDist = dist({
      x: rs.ctrlpts[0],
      y: rs.ctrlpts[1]
    }, {
      x: rs.endX,
      y: rs.endY
    });
    var closeEndACp = endACpDist < minCpADist;
    var overlapping = false;
    if (badStart || badAStart || closeStartACp) {
      overlapping = true;
      var cpD = {
        // delta
        x: rs.ctrlpts[0] - srcPos.x,
        y: rs.ctrlpts[1] - srcPos.y
      };
      var cpL = Math.sqrt(cpD.x * cpD.x + cpD.y * cpD.y);
      var cpM = {
        // normalised delta
        x: cpD.x / cpL,
        y: cpD.y / cpL
      };
      var radius2 = Math.max(srcW, srcH);
      var cpProj = {
        // *2 radius guarantees outside shape
        x: rs.ctrlpts[0] + cpM.x * 2 * radius2,
        y: rs.ctrlpts[1] + cpM.y * 2 * radius2
      };
      var srcCtrlPtIntn = srcShape.intersectLine(srcPos.x, srcPos.y, srcW, srcH, cpProj.x, cpProj.y, 0, srcCornerRadius, srcRs);
      if (closeStartACp) {
        rs.ctrlpts[0] = rs.ctrlpts[0] + cpM.x * (minCpADist - startACpDist);
        rs.ctrlpts[1] = rs.ctrlpts[1] + cpM.y * (minCpADist - startACpDist);
      } else {
        rs.ctrlpts[0] = srcCtrlPtIntn[0] + cpM.x * minCpADist;
        rs.ctrlpts[1] = srcCtrlPtIntn[1] + cpM.y * minCpADist;
      }
    }
    if (badEnd || badAEnd || closeEndACp) {
      overlapping = true;
      var _cpD = {
        // delta
        x: rs.ctrlpts[0] - tgtPos.x,
        y: rs.ctrlpts[1] - tgtPos.y
      };
      var _cpL = Math.sqrt(_cpD.x * _cpD.x + _cpD.y * _cpD.y);
      var _cpM = {
        // normalised delta
        x: _cpD.x / _cpL,
        y: _cpD.y / _cpL
      };
      var _radius = Math.max(srcW, srcH);
      var _cpProj = {
        // *2 radius guarantees outside shape
        x: rs.ctrlpts[0] + _cpM.x * 2 * _radius,
        y: rs.ctrlpts[1] + _cpM.y * 2 * _radius
      };
      var tgtCtrlPtIntn = tgtShape.intersectLine(tgtPos.x, tgtPos.y, tgtW, tgtH, _cpProj.x, _cpProj.y, 0, tgtCornerRadius, tgtRs);
      if (closeEndACp) {
        rs.ctrlpts[0] = rs.ctrlpts[0] + _cpM.x * (minCpADist - endACpDist);
        rs.ctrlpts[1] = rs.ctrlpts[1] + _cpM.y * (minCpADist - endACpDist);
      } else {
        rs.ctrlpts[0] = tgtCtrlPtIntn[0] + _cpM.x * minCpADist;
        rs.ctrlpts[1] = tgtCtrlPtIntn[1] + _cpM.y * minCpADist;
      }
    }
    if (overlapping) {
      this.findEndpoints(edge);
    }
  }
};
BRp$c.storeAllpts = function(edge) {
  var rs = edge._private.rscratch;
  if (rs.edgeType === "multibezier" || rs.edgeType === "bezier" || rs.edgeType === "self" || rs.edgeType === "compound") {
    rs.allpts = [];
    rs.allpts.push(rs.startX, rs.startY);
    for (var b2 = 0; b2 + 1 < rs.ctrlpts.length; b2 += 2) {
      rs.allpts.push(rs.ctrlpts[b2], rs.ctrlpts[b2 + 1]);
      if (b2 + 3 < rs.ctrlpts.length) {
        rs.allpts.push((rs.ctrlpts[b2] + rs.ctrlpts[b2 + 2]) / 2, (rs.ctrlpts[b2 + 1] + rs.ctrlpts[b2 + 3]) / 2);
      }
    }
    rs.allpts.push(rs.endX, rs.endY);
    var m2, mt;
    if (rs.ctrlpts.length / 2 % 2 === 0) {
      m2 = rs.allpts.length / 2 - 1;
      rs.midX = rs.allpts[m2];
      rs.midY = rs.allpts[m2 + 1];
    } else {
      m2 = rs.allpts.length / 2 - 3;
      mt = 0.5;
      rs.midX = qbezierAt(rs.allpts[m2], rs.allpts[m2 + 2], rs.allpts[m2 + 4], mt);
      rs.midY = qbezierAt(rs.allpts[m2 + 1], rs.allpts[m2 + 3], rs.allpts[m2 + 5], mt);
    }
  } else if (rs.edgeType === "straight") {
    rs.allpts = [rs.startX, rs.startY, rs.endX, rs.endY];
    rs.midX = (rs.startX + rs.endX + rs.arrowStartX + rs.arrowEndX) / 4;
    rs.midY = (rs.startY + rs.endY + rs.arrowStartY + rs.arrowEndY) / 4;
  } else if (rs.edgeType === "segments") {
    rs.allpts = [];
    rs.allpts.push(rs.startX, rs.startY);
    rs.allpts.push.apply(rs.allpts, rs.segpts);
    rs.allpts.push(rs.endX, rs.endY);
    if (rs.isRound) {
      rs.roundCorners = [];
      for (var i2 = 2; i2 + 3 < rs.allpts.length; i2 += 2) {
        var radius2 = rs.radii[i2 / 2 - 1];
        var isArcRadius = rs.isArcRadius[i2 / 2 - 1];
        rs.roundCorners.push(getRoundCorner({
          x: rs.allpts[i2 - 2],
          y: rs.allpts[i2 - 1]
        }, {
          x: rs.allpts[i2],
          y: rs.allpts[i2 + 1],
          radius: radius2
        }, {
          x: rs.allpts[i2 + 2],
          y: rs.allpts[i2 + 3]
        }, radius2, isArcRadius));
      }
    }
    if (rs.segpts.length % 4 === 0) {
      var i22 = rs.segpts.length / 2;
      var i1 = i22 - 2;
      rs.midX = (rs.segpts[i1] + rs.segpts[i22]) / 2;
      rs.midY = (rs.segpts[i1 + 1] + rs.segpts[i22 + 1]) / 2;
    } else {
      var _i = rs.segpts.length / 2 - 1;
      if (!rs.isRound) {
        rs.midX = rs.segpts[_i];
        rs.midY = rs.segpts[_i + 1];
      } else {
        var point = {
          x: rs.segpts[_i],
          y: rs.segpts[_i + 1]
        };
        var corner = rs.roundCorners[_i / 2];
        if (corner.radius === 0) {
          var nextPoint = {
            x: rs.segpts[_i + 2],
            y: rs.segpts[_i + 3]
          };
          rs.midX = point.x;
          rs.midY = point.y;
          rs.midVector = [point.y - nextPoint.y, nextPoint.x - point.x];
        } else {
          var v = [point.x - corner.cx, point.y - corner.cy];
          var factor = corner.radius / Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
          v = v.map(function(c2) {
            return c2 * factor;
          });
          rs.midX = corner.cx + v[0];
          rs.midY = corner.cy + v[1];
          rs.midVector = v;
        }
      }
    }
  }
};
BRp$c.checkForInvalidEdgeWarning = function(edge) {
  var rs = edge[0]._private.rscratch;
  if (rs.nodesOverlap || number$1(rs.startX) && number$1(rs.startY) && number$1(rs.endX) && number$1(rs.endY)) {
    rs.loggedErr = false;
  } else {
    if (!rs.loggedErr) {
      rs.loggedErr = true;
      warn("Edge `" + edge.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap.");
    }
  }
};
BRp$c.findEdgeControlPoints = function(edges3) {
  var _this = this;
  if (!edges3 || edges3.length === 0) {
    return;
  }
  var r2 = this;
  var cy = r2.cy;
  var hasCompounds = cy.hasCompoundNodes();
  var hashTable = new Map$1();
  var getKey3 = function getKey4(pairId2, edgeIsUnbundled2) {
    return [].concat(_toConsumableArray(pairId2), [edgeIsUnbundled2 ? 1 : 0]).join("-");
  };
  var pairIds = [];
  var haystackEdges = [];
  for (var i2 = 0; i2 < edges3.length; i2++) {
    var edge = edges3[i2];
    var _p = edge._private;
    var curveStyle = edge.pstyle("curve-style").value;
    if (edge.removed() || !edge.takesUpSpace()) {
      continue;
    }
    if (curveStyle === "haystack") {
      haystackEdges.push(edge);
      continue;
    }
    var edgeIsUnbundled = curveStyle === "unbundled-bezier" || endsWith(curveStyle, "segments") || curveStyle === "straight" || curveStyle === "straight-triangle" || endsWith(curveStyle, "taxi");
    var edgeIsBezier = curveStyle === "unbundled-bezier" || curveStyle === "bezier";
    var src = _p.source;
    var tgt = _p.target;
    var srcIndex = src.poolIndex();
    var tgtIndex = tgt.poolIndex();
    var pairId = [srcIndex, tgtIndex].sort();
    var key = getKey3(pairId, edgeIsUnbundled);
    var tableEntry = hashTable.get(key);
    if (tableEntry == null) {
      tableEntry = {
        eles: []
      };
      pairIds.push({
        pairId,
        edgeIsUnbundled
      });
      hashTable.set(key, tableEntry);
    }
    tableEntry.eles.push(edge);
    if (edgeIsUnbundled) {
      tableEntry.hasUnbundled = true;
    }
    if (edgeIsBezier) {
      tableEntry.hasBezier = true;
    }
  }
  var _loop = function _loop2() {
    var _pairIds$p = pairIds[p3], pairId2 = _pairIds$p.pairId, edgeIsUnbundled2 = _pairIds$p.edgeIsUnbundled;
    var key2 = getKey3(pairId2, edgeIsUnbundled2);
    var pairInfo = hashTable.get(key2);
    var swappedpairInfo;
    if (!pairInfo.hasUnbundled) {
      var pllEdges = pairInfo.eles[0].parallelEdges().filter(function(e2) {
        return e2.isBundledBezier();
      });
      clearArray(pairInfo.eles);
      pllEdges.forEach(function(edge2) {
        return pairInfo.eles.push(edge2);
      });
      pairInfo.eles.sort(function(edge1, edge2) {
        return edge1.poolIndex() - edge2.poolIndex();
      });
    }
    var firstEdge = pairInfo.eles[0];
    var src2 = firstEdge.source();
    var tgt2 = firstEdge.target();
    if (src2.poolIndex() > tgt2.poolIndex()) {
      var temp = src2;
      src2 = tgt2;
      tgt2 = temp;
    }
    var srcPos = pairInfo.srcPos = src2.position();
    var tgtPos = pairInfo.tgtPos = tgt2.position();
    var srcW = pairInfo.srcW = src2.outerWidth();
    var srcH = pairInfo.srcH = src2.outerHeight();
    var tgtW = pairInfo.tgtW = tgt2.outerWidth();
    var tgtH = pairInfo.tgtH = tgt2.outerHeight();
    var srcShape = pairInfo.srcShape = r2.nodeShapes[_this.getNodeShape(src2)];
    var tgtShape = pairInfo.tgtShape = r2.nodeShapes[_this.getNodeShape(tgt2)];
    var srcCornerRadius = pairInfo.srcCornerRadius = src2.pstyle("corner-radius").value === "auto" ? "auto" : src2.pstyle("corner-radius").pfValue;
    var tgtCornerRadius = pairInfo.tgtCornerRadius = tgt2.pstyle("corner-radius").value === "auto" ? "auto" : tgt2.pstyle("corner-radius").pfValue;
    var tgtRs = pairInfo.tgtRs = tgt2._private.rscratch;
    var srcRs = pairInfo.srcRs = src2._private.rscratch;
    pairInfo.dirCounts = {
      "north": 0,
      "west": 0,
      "south": 0,
      "east": 0,
      "northwest": 0,
      "southwest": 0,
      "northeast": 0,
      "southeast": 0
    };
    for (var _i2 = 0; _i2 < pairInfo.eles.length; _i2++) {
      var _edge = pairInfo.eles[_i2];
      var rs = _edge[0]._private.rscratch;
      var _curveStyle = _edge.pstyle("curve-style").value;
      var _edgeIsUnbundled = _curveStyle === "unbundled-bezier" || endsWith(_curveStyle, "segments") || endsWith(_curveStyle, "taxi");
      var edgeIsSwapped = !src2.same(_edge.source());
      if (!pairInfo.calculatedIntersection && src2 !== tgt2 && (pairInfo.hasBezier || pairInfo.hasUnbundled)) {
        pairInfo.calculatedIntersection = true;
        var srcOutside = srcShape.intersectLine(srcPos.x, srcPos.y, srcW, srcH, tgtPos.x, tgtPos.y, 0, srcCornerRadius, srcRs);
        var srcIntn = pairInfo.srcIntn = srcOutside;
        var tgtOutside = tgtShape.intersectLine(tgtPos.x, tgtPos.y, tgtW, tgtH, srcPos.x, srcPos.y, 0, tgtCornerRadius, tgtRs);
        var tgtIntn = pairInfo.tgtIntn = tgtOutside;
        var intersectionPts = pairInfo.intersectionPts = {
          x1: srcOutside[0],
          x2: tgtOutside[0],
          y1: srcOutside[1],
          y2: tgtOutside[1]
        };
        var posPts = pairInfo.posPts = {
          x1: srcPos.x,
          x2: tgtPos.x,
          y1: srcPos.y,
          y2: tgtPos.y
        };
        var dy = tgtOutside[1] - srcOutside[1];
        var dx = tgtOutside[0] - srcOutside[0];
        var l2 = Math.sqrt(dx * dx + dy * dy);
        if (number$1(l2) && l2 >= AVOID_IMPOSSIBLE_BEZIER_CONSTANT_L) ;
        else {
          l2 = Math.sqrt(Math.max(dx * dx, AVOID_IMPOSSIBLE_BEZIER_CONSTANT) + Math.max(dy * dy, AVOID_IMPOSSIBLE_BEZIER_CONSTANT));
        }
        var vector = pairInfo.vector = {
          x: dx,
          y: dy
        };
        var vectorNorm = pairInfo.vectorNorm = {
          x: vector.x / l2,
          y: vector.y / l2
        };
        var vectorNormInverse = {
          x: -vectorNorm.y,
          y: vectorNorm.x
        };
        pairInfo.nodesOverlap = !number$1(l2) || tgtShape.checkPoint(srcOutside[0], srcOutside[1], 0, tgtW, tgtH, tgtPos.x, tgtPos.y, tgtCornerRadius, tgtRs) || srcShape.checkPoint(tgtOutside[0], tgtOutside[1], 0, srcW, srcH, srcPos.x, srcPos.y, srcCornerRadius, srcRs);
        pairInfo.vectorNormInverse = vectorNormInverse;
        swappedpairInfo = {
          nodesOverlap: pairInfo.nodesOverlap,
          dirCounts: pairInfo.dirCounts,
          calculatedIntersection: true,
          hasBezier: pairInfo.hasBezier,
          hasUnbundled: pairInfo.hasUnbundled,
          eles: pairInfo.eles,
          srcPos: tgtPos,
          srcRs: tgtRs,
          tgtPos: srcPos,
          tgtRs: srcRs,
          srcW: tgtW,
          srcH: tgtH,
          tgtW: srcW,
          tgtH: srcH,
          srcIntn: tgtIntn,
          tgtIntn: srcIntn,
          srcShape: tgtShape,
          tgtShape: srcShape,
          posPts: {
            x1: posPts.x2,
            y1: posPts.y2,
            x2: posPts.x1,
            y2: posPts.y1
          },
          intersectionPts: {
            x1: intersectionPts.x2,
            y1: intersectionPts.y2,
            x2: intersectionPts.x1,
            y2: intersectionPts.y1
          },
          vector: {
            x: -vector.x,
            y: -vector.y
          },
          vectorNorm: {
            x: -vectorNorm.x,
            y: -vectorNorm.y
          },
          vectorNormInverse: {
            x: -vectorNormInverse.x,
            y: -vectorNormInverse.y
          }
        };
      }
      var passedPairInfo = edgeIsSwapped ? swappedpairInfo : pairInfo;
      rs.nodesOverlap = passedPairInfo.nodesOverlap;
      rs.srcIntn = passedPairInfo.srcIntn;
      rs.tgtIntn = passedPairInfo.tgtIntn;
      rs.isRound = _curveStyle.startsWith("round");
      if (hasCompounds && (src2.isParent() || src2.isChild() || tgt2.isParent() || tgt2.isChild()) && (src2.parents().anySame(tgt2) || tgt2.parents().anySame(src2) || src2.same(tgt2) && src2.isParent())) {
        _this.findCompoundLoopPoints(_edge, passedPairInfo, _i2, _edgeIsUnbundled);
      } else if (src2 === tgt2) {
        _this.findLoopPoints(_edge, passedPairInfo, _i2, _edgeIsUnbundled);
      } else if (_curveStyle.endsWith("segments")) {
        _this.findSegmentsPoints(_edge, passedPairInfo);
      } else if (_curveStyle.endsWith("taxi")) {
        _this.findTaxiPoints(_edge, passedPairInfo);
      } else if (_curveStyle === "straight" || !_edgeIsUnbundled && pairInfo.eles.length % 2 === 1 && _i2 === Math.floor(pairInfo.eles.length / 2)) {
        _this.findStraightEdgePoints(_edge);
      } else {
        _this.findBezierPoints(_edge, passedPairInfo, _i2, _edgeIsUnbundled, edgeIsSwapped);
      }
      _this.findEndpoints(_edge);
      _this.tryToCorrectInvalidPoints(_edge, passedPairInfo);
      _this.checkForInvalidEdgeWarning(_edge);
      _this.storeAllpts(_edge);
      _this.storeEdgeProjections(_edge);
      _this.calculateArrowAngles(_edge);
      _this.recalculateEdgeLabelProjections(_edge);
      _this.calculateLabelAngles(_edge);
    }
  };
  for (var p3 = 0; p3 < pairIds.length; p3++) {
    _loop();
  }
  this.findHaystackPoints(haystackEdges);
};
function getPts(pts2) {
  var retPts = [];
  if (pts2 == null) {
    return;
  }
  for (var i2 = 0; i2 < pts2.length; i2 += 2) {
    var x3 = pts2[i2];
    var y3 = pts2[i2 + 1];
    retPts.push({
      x: x3,
      y: y3
    });
  }
  return retPts;
}
BRp$c.getSegmentPoints = function(edge) {
  var rs = edge[0]._private.rscratch;
  this.recalculateRenderedStyle(edge);
  var type = rs.edgeType;
  if (type === "segments") {
    return getPts(rs.segpts);
  }
};
BRp$c.getControlPoints = function(edge) {
  var rs = edge[0]._private.rscratch;
  this.recalculateRenderedStyle(edge);
  var type = rs.edgeType;
  if (type === "bezier" || type === "multibezier" || type === "self" || type === "compound") {
    return getPts(rs.ctrlpts);
  }
};
BRp$c.getEdgeMidpoint = function(edge) {
  var rs = edge[0]._private.rscratch;
  this.recalculateRenderedStyle(edge);
  return {
    x: rs.midX,
    y: rs.midY
  };
};
var BRp$b = {};
BRp$b.manualEndptToPx = function(node, prop) {
  var r2 = this;
  var npos = node.position();
  var w2 = node.outerWidth();
  var h2 = node.outerHeight();
  var rs = node._private.rscratch;
  if (prop.value.length === 2) {
    var p3 = [prop.pfValue[0], prop.pfValue[1]];
    if (prop.units[0] === "%") {
      p3[0] = p3[0] * w2;
    }
    if (prop.units[1] === "%") {
      p3[1] = p3[1] * h2;
    }
    p3[0] += npos.x;
    p3[1] += npos.y;
    return p3;
  } else {
    var angle2 = prop.pfValue[0];
    angle2 = -Math.PI / 2 + angle2;
    var l2 = 2 * Math.max(w2, h2);
    var _p = [npos.x + Math.cos(angle2) * l2, npos.y + Math.sin(angle2) * l2];
    return r2.nodeShapes[this.getNodeShape(node)].intersectLine(npos.x, npos.y, w2, h2, _p[0], _p[1], 0, node.pstyle("corner-radius").value === "auto" ? "auto" : node.pstyle("corner-radius").pfValue, rs);
  }
};
BRp$b.findEndpoints = function(edge) {
  var _ref, _tgtManEndpt$pfValue, _ref2, _srcManEndpt$pfValue;
  var r2 = this;
  var intersect2;
  var source = edge.source()[0];
  var target = edge.target()[0];
  var srcPos = source.position();
  var tgtPos = target.position();
  var tgtArShape = edge.pstyle("target-arrow-shape").value;
  var srcArShape = edge.pstyle("source-arrow-shape").value;
  var tgtDist = edge.pstyle("target-distance-from-node").pfValue;
  var srcDist = edge.pstyle("source-distance-from-node").pfValue;
  var srcRs = source._private.rscratch;
  var tgtRs = target._private.rscratch;
  var curveStyle = edge.pstyle("curve-style").value;
  var rs = edge._private.rscratch;
  var et = rs.edgeType;
  var taxi = endsWith(curveStyle, "taxi");
  var self2 = et === "self" || et === "compound";
  var bezier = et === "bezier" || et === "multibezier" || self2;
  var multi = et !== "bezier";
  var lines = et === "straight" || et === "segments";
  var segments = et === "segments";
  var hasEndpts = bezier || multi || lines;
  var overrideEndpts = self2 || taxi;
  var srcManEndpt = edge.pstyle("source-endpoint");
  var srcManEndptVal = overrideEndpts ? "outside-to-node" : srcManEndpt.value;
  var srcCornerRadius = source.pstyle("corner-radius").value === "auto" ? "auto" : source.pstyle("corner-radius").pfValue;
  var tgtManEndpt = edge.pstyle("target-endpoint");
  var tgtManEndptVal = overrideEndpts ? "outside-to-node" : tgtManEndpt.value;
  var tgtCornerRadius = target.pstyle("corner-radius").value === "auto" ? "auto" : target.pstyle("corner-radius").pfValue;
  rs.srcManEndpt = srcManEndpt;
  rs.tgtManEndpt = tgtManEndpt;
  var p1;
  var p22;
  var p1_i;
  var p2_i;
  var tgtManEndptPt = (_ref = (tgtManEndpt === null || tgtManEndpt === void 0 || (_tgtManEndpt$pfValue = tgtManEndpt.pfValue) === null || _tgtManEndpt$pfValue === void 0 ? void 0 : _tgtManEndpt$pfValue.length) === 2 ? tgtManEndpt.pfValue : null) !== null && _ref !== void 0 ? _ref : [0, 0];
  var srcManEndptPt = (_ref2 = (srcManEndpt === null || srcManEndpt === void 0 || (_srcManEndpt$pfValue = srcManEndpt.pfValue) === null || _srcManEndpt$pfValue === void 0 ? void 0 : _srcManEndpt$pfValue.length) === 2 ? srcManEndpt.pfValue : null) !== null && _ref2 !== void 0 ? _ref2 : [0, 0];
  if (bezier) {
    var cpStart = [rs.ctrlpts[0], rs.ctrlpts[1]];
    var cpEnd = multi ? [rs.ctrlpts[rs.ctrlpts.length - 2], rs.ctrlpts[rs.ctrlpts.length - 1]] : cpStart;
    p1 = cpEnd;
    p22 = cpStart;
  } else if (lines) {
    var srcArrowFromPt = !segments ? [tgtPos.x + tgtManEndptPt[0], tgtPos.y + tgtManEndptPt[1]] : rs.segpts.slice(0, 2);
    var tgtArrowFromPt = !segments ? [srcPos.x + srcManEndptPt[0], srcPos.y + srcManEndptPt[1]] : rs.segpts.slice(rs.segpts.length - 2);
    p1 = tgtArrowFromPt;
    p22 = srcArrowFromPt;
  }
  if (tgtManEndptVal === "inside-to-node") {
    intersect2 = [tgtPos.x, tgtPos.y];
  } else if (tgtManEndpt.units) {
    intersect2 = this.manualEndptToPx(target, tgtManEndpt);
  } else if (tgtManEndptVal === "outside-to-line") {
    intersect2 = rs.tgtIntn;
  } else {
    if (tgtManEndptVal === "outside-to-node" || tgtManEndptVal === "outside-to-node-or-label") {
      p1_i = p1;
    } else if (tgtManEndptVal === "outside-to-line" || tgtManEndptVal === "outside-to-line-or-label") {
      p1_i = [srcPos.x, srcPos.y];
    }
    intersect2 = r2.nodeShapes[this.getNodeShape(target)].intersectLine(tgtPos.x, tgtPos.y, target.outerWidth(), target.outerHeight(), p1_i[0], p1_i[1], 0, tgtCornerRadius, tgtRs);
    if (tgtManEndptVal === "outside-to-node-or-label" || tgtManEndptVal === "outside-to-line-or-label") {
      var trs = target._private.rscratch;
      var lw = trs.labelWidth;
      var lh = trs.labelHeight;
      var lx = trs.labelX;
      var ly = trs.labelY;
      var lw2 = lw / 2;
      var lh2 = lh / 2;
      var va = target.pstyle("text-valign").value;
      if (va === "top") {
        ly -= lh2;
      } else if (va === "bottom") {
        ly += lh2;
      }
      var ha = target.pstyle("text-halign").value;
      if (ha === "left") {
        lx -= lw2;
      } else if (ha === "right") {
        lx += lw2;
      }
      var labelIntersect = polygonIntersectLine(p1_i[0], p1_i[1], [lx - lw2, ly - lh2, lx + lw2, ly - lh2, lx + lw2, ly + lh2, lx - lw2, ly + lh2], tgtPos.x, tgtPos.y);
      if (labelIntersect.length > 0) {
        var refPt = srcPos;
        var intSqdist = sqdist(refPt, array2point(intersect2));
        var labIntSqdist = sqdist(refPt, array2point(labelIntersect));
        var minSqDist = intSqdist;
        if (labIntSqdist < intSqdist) {
          intersect2 = labelIntersect;
          minSqDist = labIntSqdist;
        }
        if (labelIntersect.length > 2) {
          var labInt2SqDist = sqdist(refPt, {
            x: labelIntersect[2],
            y: labelIntersect[3]
          });
          if (labInt2SqDist < minSqDist) {
            intersect2 = [labelIntersect[2], labelIntersect[3]];
          }
        }
      }
    }
  }
  var arrowEnd = shortenIntersection(intersect2, p1, r2.arrowShapes[tgtArShape].spacing(edge) + tgtDist);
  var edgeEnd = shortenIntersection(intersect2, p1, r2.arrowShapes[tgtArShape].gap(edge) + tgtDist);
  rs.endX = edgeEnd[0];
  rs.endY = edgeEnd[1];
  rs.arrowEndX = arrowEnd[0];
  rs.arrowEndY = arrowEnd[1];
  if (srcManEndptVal === "inside-to-node") {
    intersect2 = [srcPos.x, srcPos.y];
  } else if (srcManEndpt.units) {
    intersect2 = this.manualEndptToPx(source, srcManEndpt);
  } else if (srcManEndptVal === "outside-to-line") {
    intersect2 = rs.srcIntn;
  } else {
    if (srcManEndptVal === "outside-to-node" || srcManEndptVal === "outside-to-node-or-label") {
      p2_i = p22;
    } else if (srcManEndptVal === "outside-to-line" || srcManEndptVal === "outside-to-line-or-label") {
      p2_i = [tgtPos.x, tgtPos.y];
    }
    intersect2 = r2.nodeShapes[this.getNodeShape(source)].intersectLine(srcPos.x, srcPos.y, source.outerWidth(), source.outerHeight(), p2_i[0], p2_i[1], 0, srcCornerRadius, srcRs);
    if (srcManEndptVal === "outside-to-node-or-label" || srcManEndptVal === "outside-to-line-or-label") {
      var srs = source._private.rscratch;
      var _lw = srs.labelWidth;
      var _lh = srs.labelHeight;
      var _lx = srs.labelX;
      var _ly = srs.labelY;
      var _lw2 = _lw / 2;
      var _lh2 = _lh / 2;
      var _va = source.pstyle("text-valign").value;
      if (_va === "top") {
        _ly -= _lh2;
      } else if (_va === "bottom") {
        _ly += _lh2;
      }
      var _ha = source.pstyle("text-halign").value;
      if (_ha === "left") {
        _lx -= _lw2;
      } else if (_ha === "right") {
        _lx += _lw2;
      }
      var _labelIntersect = polygonIntersectLine(p2_i[0], p2_i[1], [_lx - _lw2, _ly - _lh2, _lx + _lw2, _ly - _lh2, _lx + _lw2, _ly + _lh2, _lx - _lw2, _ly + _lh2], srcPos.x, srcPos.y);
      if (_labelIntersect.length > 0) {
        var _refPt = tgtPos;
        var _intSqdist = sqdist(_refPt, array2point(intersect2));
        var _labIntSqdist = sqdist(_refPt, array2point(_labelIntersect));
        var _minSqDist = _intSqdist;
        if (_labIntSqdist < _intSqdist) {
          intersect2 = [_labelIntersect[0], _labelIntersect[1]];
          _minSqDist = _labIntSqdist;
        }
        if (_labelIntersect.length > 2) {
          var _labInt2SqDist = sqdist(_refPt, {
            x: _labelIntersect[2],
            y: _labelIntersect[3]
          });
          if (_labInt2SqDist < _minSqDist) {
            intersect2 = [_labelIntersect[2], _labelIntersect[3]];
          }
        }
      }
    }
  }
  var arrowStart = shortenIntersection(intersect2, p22, r2.arrowShapes[srcArShape].spacing(edge) + srcDist);
  var edgeStart = shortenIntersection(intersect2, p22, r2.arrowShapes[srcArShape].gap(edge) + srcDist);
  rs.startX = edgeStart[0];
  rs.startY = edgeStart[1];
  rs.arrowStartX = arrowStart[0];
  rs.arrowStartY = arrowStart[1];
  if (hasEndpts) {
    if (!number$1(rs.startX) || !number$1(rs.startY) || !number$1(rs.endX) || !number$1(rs.endY)) {
      rs.badLine = true;
    } else {
      rs.badLine = false;
    }
  }
};
BRp$b.getSourceEndpoint = function(edge) {
  var rs = edge[0]._private.rscratch;
  this.recalculateRenderedStyle(edge);
  switch (rs.edgeType) {
    case "haystack":
      return {
        x: rs.haystackPts[0],
        y: rs.haystackPts[1]
      };
    default:
      return {
        x: rs.arrowStartX,
        y: rs.arrowStartY
      };
  }
};
BRp$b.getTargetEndpoint = function(edge) {
  var rs = edge[0]._private.rscratch;
  this.recalculateRenderedStyle(edge);
  switch (rs.edgeType) {
    case "haystack":
      return {
        x: rs.haystackPts[2],
        y: rs.haystackPts[3]
      };
    default:
      return {
        x: rs.arrowEndX,
        y: rs.arrowEndY
      };
  }
};
var BRp$a = {};
function pushBezierPts(r2, edge, pts2) {
  var qbezierAt$1 = function qbezierAt$12(p1, p22, p32, t2) {
    return qbezierAt(p1, p22, p32, t2);
  };
  var _p = edge._private;
  var bpts = _p.rstyle.bezierPts;
  for (var i2 = 0; i2 < r2.bezierProjPcts.length; i2++) {
    var p3 = r2.bezierProjPcts[i2];
    bpts.push({
      x: qbezierAt$1(pts2[0], pts2[2], pts2[4], p3),
      y: qbezierAt$1(pts2[1], pts2[3], pts2[5], p3)
    });
  }
}
BRp$a.storeEdgeProjections = function(edge) {
  var _p = edge._private;
  var rs = _p.rscratch;
  var et = rs.edgeType;
  _p.rstyle.bezierPts = null;
  _p.rstyle.linePts = null;
  _p.rstyle.haystackPts = null;
  if (et === "multibezier" || et === "bezier" || et === "self" || et === "compound") {
    _p.rstyle.bezierPts = [];
    for (var i2 = 0; i2 + 5 < rs.allpts.length; i2 += 4) {
      pushBezierPts(this, edge, rs.allpts.slice(i2, i2 + 6));
    }
  } else if (et === "segments") {
    var lpts = _p.rstyle.linePts = [];
    for (var i2 = 0; i2 + 1 < rs.allpts.length; i2 += 2) {
      lpts.push({
        x: rs.allpts[i2],
        y: rs.allpts[i2 + 1]
      });
    }
  } else if (et === "haystack") {
    var hpts = rs.haystackPts;
    _p.rstyle.haystackPts = [{
      x: hpts[0],
      y: hpts[1]
    }, {
      x: hpts[2],
      y: hpts[3]
    }];
  }
  _p.rstyle.arrowWidth = this.getArrowWidth(edge.pstyle("width").pfValue, edge.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
BRp$a.recalculateEdgeProjections = function(edges3) {
  this.findEdgeControlPoints(edges3);
};
var BRp$9 = {};
BRp$9.recalculateNodeLabelProjection = function(node) {
  var content = node.pstyle("label").strValue;
  if (emptyString(content)) {
    return;
  }
  var textX, textY;
  var _p = node._private;
  var nodeWidth = node.width();
  var nodeHeight = node.height();
  var padding = node.padding();
  var nodePos = node.position();
  var textHalign = node.pstyle("text-halign").strValue;
  var textValign = node.pstyle("text-valign").strValue;
  var rs = _p.rscratch;
  var rstyle = _p.rstyle;
  switch (textHalign) {
    case "left":
      textX = nodePos.x - nodeWidth / 2 - padding;
      break;
    case "right":
      textX = nodePos.x + nodeWidth / 2 + padding;
      break;
    default:
      textX = nodePos.x;
  }
  switch (textValign) {
    case "top":
      textY = nodePos.y - nodeHeight / 2 - padding;
      break;
    case "bottom":
      textY = nodePos.y + nodeHeight / 2 + padding;
      break;
    default:
      textY = nodePos.y;
  }
  rs.labelX = textX;
  rs.labelY = textY;
  rstyle.labelX = textX;
  rstyle.labelY = textY;
  this.calculateLabelAngles(node);
  this.applyLabelDimensions(node);
};
var lineAngleFromDelta = function lineAngleFromDelta2(dx, dy) {
  var angle2 = Math.atan(dy / dx);
  if (dx === 0 && angle2 < 0) {
    angle2 = angle2 * -1;
  }
  return angle2;
};
var lineAngle = function lineAngle2(p0, p1) {
  var dx = p1.x - p0.x;
  var dy = p1.y - p0.y;
  return lineAngleFromDelta(dx, dy);
};
var bezierAngle = function bezierAngle2(p0, p1, p22, t2) {
  var t0 = bound(0, t2 - 1e-3, 1);
  var t1 = bound(0, t2 + 1e-3, 1);
  var lp0 = qbezierPtAt(p0, p1, p22, t0);
  var lp1 = qbezierPtAt(p0, p1, p22, t1);
  return lineAngle(lp0, lp1);
};
BRp$9.recalculateEdgeLabelProjections = function(edge) {
  var p3;
  var _p = edge._private;
  var rs = _p.rscratch;
  var r2 = this;
  var content = {
    mid: edge.pstyle("label").strValue,
    source: edge.pstyle("source-label").strValue,
    target: edge.pstyle("target-label").strValue
  };
  if (content.mid || content.source || content.target) ;
  else {
    return;
  }
  p3 = {
    x: rs.midX,
    y: rs.midY
  };
  var setRs = function setRs2(propName, prefix, value) {
    setPrefixedProperty(_p.rscratch, propName, prefix, value);
    setPrefixedProperty(_p.rstyle, propName, prefix, value);
  };
  setRs("labelX", null, p3.x);
  setRs("labelY", null, p3.y);
  var midAngle = lineAngleFromDelta(rs.midDispX, rs.midDispY);
  setRs("labelAutoAngle", null, midAngle);
  var _createControlPointInfo = function createControlPointInfo() {
    if (_createControlPointInfo.cache) {
      return _createControlPointInfo.cache;
    }
    var ctrlpts = [];
    for (var i2 = 0; i2 + 5 < rs.allpts.length; i2 += 4) {
      var p0 = {
        x: rs.allpts[i2],
        y: rs.allpts[i2 + 1]
      };
      var p1 = {
        x: rs.allpts[i2 + 2],
        y: rs.allpts[i2 + 3]
      };
      var p22 = {
        x: rs.allpts[i2 + 4],
        y: rs.allpts[i2 + 5]
      };
      ctrlpts.push({
        p0,
        p1,
        p2: p22,
        startDist: 0,
        length: 0,
        segments: []
      });
    }
    var bpts = _p.rstyle.bezierPts;
    var nProjs = r2.bezierProjPcts.length;
    function addSegment(cp2, p02, p12, t0, t1) {
      var length = dist(p02, p12);
      var prevSegment = cp2.segments[cp2.segments.length - 1];
      var segment = {
        p0: p02,
        p1: p12,
        t0,
        t1,
        startDist: prevSegment ? prevSegment.startDist + prevSegment.length : 0,
        length
      };
      cp2.segments.push(segment);
      cp2.length += length;
    }
    for (var _i = 0; _i < ctrlpts.length; _i++) {
      var cp = ctrlpts[_i];
      var prevCp = ctrlpts[_i - 1];
      if (prevCp) {
        cp.startDist = prevCp.startDist + prevCp.length;
      }
      addSegment(cp, cp.p0, bpts[_i * nProjs], 0, r2.bezierProjPcts[0]);
      for (var j = 0; j < nProjs - 1; j++) {
        addSegment(cp, bpts[_i * nProjs + j], bpts[_i * nProjs + j + 1], r2.bezierProjPcts[j], r2.bezierProjPcts[j + 1]);
      }
      addSegment(cp, bpts[_i * nProjs + nProjs - 1], cp.p2, r2.bezierProjPcts[nProjs - 1], 1);
    }
    return _createControlPointInfo.cache = ctrlpts;
  };
  var calculateEndProjection = function calculateEndProjection2(prefix) {
    var angle2;
    var isSrc = prefix === "source";
    if (!content[prefix]) {
      return;
    }
    var offset = edge.pstyle(prefix + "-text-offset").pfValue;
    switch (rs.edgeType) {
      case "self":
      case "compound":
      case "bezier":
      case "multibezier": {
        var cps = _createControlPointInfo();
        var selected;
        var startDist = 0;
        var totalDist = 0;
        for (var i2 = 0; i2 < cps.length; i2++) {
          var _cp = cps[isSrc ? i2 : cps.length - 1 - i2];
          for (var j = 0; j < _cp.segments.length; j++) {
            var _seg = _cp.segments[isSrc ? j : _cp.segments.length - 1 - j];
            var lastSeg = i2 === cps.length - 1 && j === _cp.segments.length - 1;
            startDist = totalDist;
            totalDist += _seg.length;
            if (totalDist >= offset || lastSeg) {
              selected = {
                cp: _cp,
                segment: _seg
              };
              break;
            }
          }
          if (selected) {
            break;
          }
        }
        var cp = selected.cp;
        var seg = selected.segment;
        var tSegment = (offset - startDist) / seg.length;
        var segDt = seg.t1 - seg.t0;
        var t2 = isSrc ? seg.t0 + segDt * tSegment : seg.t1 - segDt * tSegment;
        t2 = bound(0, t2, 1);
        p3 = qbezierPtAt(cp.p0, cp.p1, cp.p2, t2);
        angle2 = bezierAngle(cp.p0, cp.p1, cp.p2, t2);
        break;
      }
      case "straight":
      case "segments":
      case "haystack": {
        var d2 = 0, di, d0;
        var p0, p1;
        var l2 = rs.allpts.length;
        for (var _i2 = 0; _i2 + 3 < l2; _i2 += 2) {
          if (isSrc) {
            p0 = {
              x: rs.allpts[_i2],
              y: rs.allpts[_i2 + 1]
            };
            p1 = {
              x: rs.allpts[_i2 + 2],
              y: rs.allpts[_i2 + 3]
            };
          } else {
            p0 = {
              x: rs.allpts[l2 - 2 - _i2],
              y: rs.allpts[l2 - 1 - _i2]
            };
            p1 = {
              x: rs.allpts[l2 - 4 - _i2],
              y: rs.allpts[l2 - 3 - _i2]
            };
          }
          di = dist(p0, p1);
          d0 = d2;
          d2 += di;
          if (d2 >= offset) {
            break;
          }
        }
        var pD = offset - d0;
        var _t = pD / di;
        _t = bound(0, _t, 1);
        p3 = lineAt(p0, p1, _t);
        angle2 = lineAngle(p0, p1);
        break;
      }
    }
    setRs("labelX", prefix, p3.x);
    setRs("labelY", prefix, p3.y);
    setRs("labelAutoAngle", prefix, angle2);
  };
  calculateEndProjection("source");
  calculateEndProjection("target");
  this.applyLabelDimensions(edge);
};
BRp$9.applyLabelDimensions = function(ele) {
  this.applyPrefixedLabelDimensions(ele);
  if (ele.isEdge()) {
    this.applyPrefixedLabelDimensions(ele, "source");
    this.applyPrefixedLabelDimensions(ele, "target");
  }
};
BRp$9.applyPrefixedLabelDimensions = function(ele, prefix) {
  var _p = ele._private;
  var text = this.getLabelText(ele, prefix);
  var cacheKey = hashString(text, ele._private.labelDimsKey);
  if (getPrefixedProperty(_p.rscratch, "prefixedLabelDimsKey", prefix) === cacheKey) {
    return;
  }
  setPrefixedProperty(_p.rscratch, "prefixedLabelDimsKey", prefix, cacheKey);
  var labelDims = this.calculateLabelDimensions(ele, text);
  var lineHeight = ele.pstyle("line-height").pfValue;
  var textWrap = ele.pstyle("text-wrap").strValue;
  var lines = getPrefixedProperty(_p.rscratch, "labelWrapCachedLines", prefix) || [];
  var numLines = textWrap !== "wrap" ? 1 : Math.max(lines.length, 1);
  var normPerLineHeight = labelDims.height / numLines;
  var labelLineHeight = normPerLineHeight * lineHeight;
  var width2 = labelDims.width;
  var height2 = labelDims.height + (numLines - 1) * (lineHeight - 1) * normPerLineHeight;
  setPrefixedProperty(_p.rstyle, "labelWidth", prefix, width2);
  setPrefixedProperty(_p.rscratch, "labelWidth", prefix, width2);
  setPrefixedProperty(_p.rstyle, "labelHeight", prefix, height2);
  setPrefixedProperty(_p.rscratch, "labelHeight", prefix, height2);
  setPrefixedProperty(_p.rscratch, "labelLineHeight", prefix, labelLineHeight);
};
BRp$9.getLabelText = function(ele, prefix) {
  var _p = ele._private;
  var pfd = prefix ? prefix + "-" : "";
  var text = ele.pstyle(pfd + "label").strValue;
  var textTransform = ele.pstyle("text-transform").value;
  var rscratch = function rscratch2(propName, value) {
    if (value) {
      setPrefixedProperty(_p.rscratch, propName, prefix, value);
      return value;
    } else {
      return getPrefixedProperty(_p.rscratch, propName, prefix);
    }
  };
  if (!text) {
    return "";
  }
  if (textTransform == "none") ;
  else if (textTransform == "uppercase") {
    text = text.toUpperCase();
  } else if (textTransform == "lowercase") {
    text = text.toLowerCase();
  }
  var wrapStyle = ele.pstyle("text-wrap").value;
  if (wrapStyle === "wrap") {
    var labelKey = rscratch("labelKey");
    if (labelKey != null && rscratch("labelWrapKey") === labelKey) {
      return rscratch("labelWrapCachedText");
    }
    var zwsp = "​";
    var lines = text.split("\n");
    var maxW = ele.pstyle("text-max-width").pfValue;
    var overflow = ele.pstyle("text-overflow-wrap").value;
    var overflowAny = overflow === "anywhere";
    var wrappedLines = [];
    var separatorRegex = /[\s\u200b]+|$/g;
    for (var l2 = 0; l2 < lines.length; l2++) {
      var line = lines[l2];
      var lineDims = this.calculateLabelDimensions(ele, line);
      var lineW = lineDims.width;
      if (overflowAny) {
        var processedLine = line.split("").join(zwsp);
        line = processedLine;
      }
      if (lineW > maxW) {
        var separatorMatches = line.matchAll(separatorRegex);
        var subline = "";
        var previousIndex = 0;
        var _iterator = _createForOfIteratorHelper(separatorMatches), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var separatorMatch = _step.value;
            var wordSeparator = separatorMatch[0];
            var word = line.substring(previousIndex, separatorMatch.index);
            previousIndex = separatorMatch.index + wordSeparator.length;
            var testLine = subline.length === 0 ? word : subline + word + wordSeparator;
            var testDims = this.calculateLabelDimensions(ele, testLine);
            var testW = testDims.width;
            if (testW <= maxW) {
              subline += word + wordSeparator;
            } else {
              if (subline) {
                wrappedLines.push(subline);
              }
              subline = word + wordSeparator;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (!subline.match(/^[\s\u200b]+$/)) {
          wrappedLines.push(subline);
        }
      } else {
        wrappedLines.push(line);
      }
    }
    rscratch("labelWrapCachedLines", wrappedLines);
    text = rscratch("labelWrapCachedText", wrappedLines.join("\n"));
    rscratch("labelWrapKey", labelKey);
  } else if (wrapStyle === "ellipsis") {
    var _maxW = ele.pstyle("text-max-width").pfValue;
    var ellipsized = "";
    var ellipsis = "…";
    var incLastCh = false;
    if (this.calculateLabelDimensions(ele, text).width < _maxW) {
      return text;
    }
    for (var i2 = 0; i2 < text.length; i2++) {
      var widthWithNextCh = this.calculateLabelDimensions(ele, ellipsized + text[i2] + ellipsis).width;
      if (widthWithNextCh > _maxW) {
        break;
      }
      ellipsized += text[i2];
      if (i2 === text.length - 1) {
        incLastCh = true;
      }
    }
    if (!incLastCh) {
      ellipsized += ellipsis;
    }
    return ellipsized;
  }
  return text;
};
BRp$9.getLabelJustification = function(ele) {
  var justification = ele.pstyle("text-justification").strValue;
  var textHalign = ele.pstyle("text-halign").strValue;
  if (justification === "auto") {
    if (ele.isNode()) {
      switch (textHalign) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    } else {
      return "center";
    }
  } else {
    return justification;
  }
};
BRp$9.calculateLabelDimensions = function(ele, text) {
  var r2 = this;
  var containerWindow = r2.cy.window();
  var document2 = containerWindow.document;
  var padding = 0;
  var fStyle = ele.pstyle("font-style").strValue;
  var size3 = ele.pstyle("font-size").pfValue;
  var family = ele.pstyle("font-family").strValue;
  var weight8 = ele.pstyle("font-weight").strValue;
  var canvas = this.labelCalcCanvas;
  var c2d = this.labelCalcCanvasContext;
  if (!canvas) {
    canvas = this.labelCalcCanvas = document2.createElement("canvas");
    c2d = this.labelCalcCanvasContext = canvas.getContext("2d");
    var ds = canvas.style;
    ds.position = "absolute";
    ds.left = "-9999px";
    ds.top = "-9999px";
    ds.zIndex = "-1";
    ds.visibility = "hidden";
    ds.pointerEvents = "none";
  }
  c2d.font = "".concat(fStyle, " ").concat(weight8, " ").concat(size3, "px ").concat(family);
  var width2 = 0;
  var height2 = 0;
  var lines = text.split("\n");
  for (var i2 = 0; i2 < lines.length; i2++) {
    var line = lines[i2];
    var metrics = c2d.measureText(line);
    var w2 = Math.ceil(metrics.width);
    var h2 = size3;
    width2 = Math.max(w2, width2);
    height2 += h2;
  }
  width2 += padding;
  height2 += padding;
  return {
    width: width2,
    height: height2
  };
};
BRp$9.calculateLabelAngle = function(ele, prefix) {
  var _p = ele._private;
  var rs = _p.rscratch;
  var isEdge2 = ele.isEdge();
  var prefixDash = prefix ? prefix + "-" : "";
  var rot = ele.pstyle(prefixDash + "text-rotation");
  var rotStr = rot.strValue;
  if (rotStr === "none") {
    return 0;
  } else if (isEdge2 && rotStr === "autorotate") {
    return rs.labelAutoAngle;
  } else if (rotStr === "autorotate") {
    return 0;
  } else {
    return rot.pfValue;
  }
};
BRp$9.calculateLabelAngles = function(ele) {
  var r2 = this;
  var isEdge2 = ele.isEdge();
  var _p = ele._private;
  var rs = _p.rscratch;
  rs.labelAngle = r2.calculateLabelAngle(ele);
  if (isEdge2) {
    rs.sourceLabelAngle = r2.calculateLabelAngle(ele, "source");
    rs.targetLabelAngle = r2.calculateLabelAngle(ele, "target");
  }
};
var BRp$8 = {};
var TOO_SMALL_CUT_RECT = 28;
var warnedCutRect = false;
BRp$8.getNodeShape = function(node) {
  var r2 = this;
  var shape = node.pstyle("shape").value;
  if (shape === "cutrectangle" && (node.width() < TOO_SMALL_CUT_RECT || node.height() < TOO_SMALL_CUT_RECT)) {
    if (!warnedCutRect) {
      warn("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead");
      warnedCutRect = true;
    }
    return "rectangle";
  }
  if (node.isParent()) {
    if (shape === "rectangle" || shape === "roundrectangle" || shape === "round-rectangle" || shape === "cutrectangle" || shape === "cut-rectangle" || shape === "barrel") {
      return shape;
    } else {
      return "rectangle";
    }
  }
  if (shape === "polygon") {
    var points = node.pstyle("shape-polygon-points").value;
    return r2.nodeShapes.makePolygon(points).name;
  }
  return shape;
};
var BRp$7 = {};
BRp$7.registerCalculationListeners = function() {
  var cy = this.cy;
  var elesToUpdate = cy.collection();
  var r2 = this;
  var enqueue = function enqueue2(eles) {
    var dirtyStyleCaches = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    elesToUpdate.merge(eles);
    if (dirtyStyleCaches) {
      for (var i2 = 0; i2 < eles.length; i2++) {
        var ele = eles[i2];
        var _p = ele._private;
        var rstyle = _p.rstyle;
        rstyle.clean = false;
        rstyle.cleanConnected = false;
      }
    }
  };
  r2.binder(cy).on("bounds.* dirty.*", function onDirtyBounds(e2) {
    var ele = e2.target;
    enqueue(ele);
  }).on("style.* background.*", function onDirtyStyle(e2) {
    var ele = e2.target;
    enqueue(ele, false);
  });
  var updateEleCalcs = function updateEleCalcs2(willDraw) {
    if (willDraw) {
      var fns = r2.onUpdateEleCalcsFns;
      elesToUpdate.cleanStyle();
      for (var i2 = 0; i2 < elesToUpdate.length; i2++) {
        var ele = elesToUpdate[i2];
        var rstyle = ele._private.rstyle;
        if (ele.isNode() && !rstyle.cleanConnected) {
          enqueue(ele.connectedEdges());
          rstyle.cleanConnected = true;
        }
      }
      if (fns) {
        for (var _i = 0; _i < fns.length; _i++) {
          var fn3 = fns[_i];
          fn3(willDraw, elesToUpdate);
        }
      }
      r2.recalculateRenderedStyle(elesToUpdate);
      elesToUpdate = cy.collection();
    }
  };
  r2.flushRenderedStyleQueue = function() {
    updateEleCalcs(true);
  };
  r2.beforeRender(updateEleCalcs, r2.beforeRenderPriorities.eleCalcs);
};
BRp$7.onUpdateEleCalcs = function(fn3) {
  var fns = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  fns.push(fn3);
};
BRp$7.recalculateRenderedStyle = function(eles, useCache) {
  var isCleanConnected = function isCleanConnected2(ele2) {
    return ele2._private.rstyle.cleanConnected;
  };
  if (eles.length === 0) {
    return;
  }
  var edges3 = [];
  var nodes3 = [];
  if (this.destroyed) {
    return;
  }
  if (useCache === void 0) {
    useCache = true;
  }
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    var _p = ele._private;
    var rstyle = _p.rstyle;
    if (ele.isEdge() && (!isCleanConnected(ele.source()) || !isCleanConnected(ele.target()))) {
      rstyle.clean = false;
    }
    if (ele.isEdge() && ele.isBundledBezier()) {
      if (ele.parallelEdges().some(function(ele2) {
        return !ele2._private.rstyle.clean && ele2.isBundledBezier();
      })) {
        rstyle.clean = false;
      }
    }
    if (useCache && rstyle.clean || ele.removed()) {
      continue;
    }
    if (ele.pstyle("display").value === "none") {
      continue;
    }
    if (_p.group === "nodes") {
      nodes3.push(ele);
    } else {
      edges3.push(ele);
    }
    rstyle.clean = true;
  }
  for (var _i2 = 0; _i2 < nodes3.length; _i2++) {
    var _ele = nodes3[_i2];
    var _p2 = _ele._private;
    var _rstyle = _p2.rstyle;
    var pos = _ele.position();
    this.recalculateNodeLabelProjection(_ele);
    _rstyle.nodeX = pos.x;
    _rstyle.nodeY = pos.y;
    _rstyle.nodeW = _ele.pstyle("width").pfValue;
    _rstyle.nodeH = _ele.pstyle("height").pfValue;
  }
  this.recalculateEdgeProjections(edges3);
  for (var _i3 = 0; _i3 < edges3.length; _i3++) {
    var _ele2 = edges3[_i3];
    var _p3 = _ele2._private;
    var _rstyle2 = _p3.rstyle;
    var rs = _p3.rscratch;
    _rstyle2.srcX = rs.arrowStartX;
    _rstyle2.srcY = rs.arrowStartY;
    _rstyle2.tgtX = rs.arrowEndX;
    _rstyle2.tgtY = rs.arrowEndY;
    _rstyle2.midX = rs.midX;
    _rstyle2.midY = rs.midY;
    _rstyle2.labelAngle = rs.labelAngle;
    _rstyle2.sourceLabelAngle = rs.sourceLabelAngle;
    _rstyle2.targetLabelAngle = rs.targetLabelAngle;
  }
};
var BRp$6 = {};
BRp$6.updateCachedGrabbedEles = function() {
  var eles = this.cachedZSortedEles;
  if (!eles) {
    return;
  }
  eles.drag = [];
  eles.nondrag = [];
  var grabTargets = [];
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    var rs = ele._private.rscratch;
    if (ele.grabbed() && !ele.isParent()) {
      grabTargets.push(ele);
    } else if (rs.inDragLayer) {
      eles.drag.push(ele);
    } else {
      eles.nondrag.push(ele);
    }
  }
  for (var i2 = 0; i2 < grabTargets.length; i2++) {
    var ele = grabTargets[i2];
    eles.drag.push(ele);
  }
};
BRp$6.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
BRp$6.getCachedZSortedEles = function(forceRecalc) {
  if (forceRecalc || !this.cachedZSortedEles) {
    var eles = this.cy.mutableElements().toArray();
    eles.sort(zIndexSort);
    eles.interactive = eles.filter(function(ele) {
      return ele.interactive();
    });
    this.cachedZSortedEles = eles;
    this.updateCachedGrabbedEles();
  } else {
    eles = this.cachedZSortedEles;
  }
  return eles;
};
var BRp$5 = {};
[BRp$e, BRp$d, BRp$c, BRp$b, BRp$a, BRp$9, BRp$8, BRp$7, BRp$6].forEach(function(props) {
  extend(BRp$5, props);
});
var BRp$4 = {};
BRp$4.getCachedImage = function(url, crossOrigin, onLoad) {
  var r2 = this;
  var imageCache = r2.imageCache = r2.imageCache || {};
  var cache3 = imageCache[url];
  if (cache3) {
    if (!cache3.image.complete) {
      cache3.image.addEventListener("load", onLoad);
    }
    return cache3.image;
  } else {
    cache3 = imageCache[url] = imageCache[url] || {};
    var image = cache3.image = new Image();
    image.addEventListener("load", onLoad);
    image.addEventListener("error", function() {
      image.error = true;
    });
    var dataUriPrefix = "data:";
    var isDataUri = url.substring(0, dataUriPrefix.length).toLowerCase() === dataUriPrefix;
    if (!isDataUri) {
      crossOrigin = crossOrigin === "null" ? null : crossOrigin;
      image.crossOrigin = crossOrigin;
    }
    image.src = url;
    return image;
  }
};
var BRp$3 = {};
BRp$3.registerBinding = function(target, event3, handler, useCapture) {
  var args = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(target)) {
    var res = [];
    for (var i2 = 0; i2 < target.length; i2++) {
      var t2 = target[i2];
      if (t2 !== void 0) {
        var b2 = this.binder(t2);
        res.push(b2.on.apply(b2, args));
      }
    }
    return res;
  }
  var b2 = this.binder(target);
  return b2.on.apply(b2, args);
};
BRp$3.binder = function(tgt) {
  var r2 = this;
  var containerWindow = r2.cy.window();
  var tgtIsDom = tgt === containerWindow || tgt === containerWindow.document || tgt === containerWindow.document.body || domElement(tgt);
  if (r2.supportsPassiveEvents == null) {
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get2() {
          supportsPassive = true;
          return true;
        }
      });
      containerWindow.addEventListener("test", null, opts);
    } catch (err) {
    }
    r2.supportsPassiveEvents = supportsPassive;
  }
  var on3 = function on4(event3, handler, useCapture) {
    var args = Array.prototype.slice.call(arguments);
    if (tgtIsDom && r2.supportsPassiveEvents) {
      args[2] = {
        capture: useCapture != null ? useCapture : false,
        passive: false,
        once: false
      };
    }
    r2.bindings.push({
      target: tgt,
      args
    });
    (tgt.addEventListener || tgt.on).apply(tgt, args);
    return this;
  };
  return {
    on: on3,
    addEventListener: on3,
    addListener: on3,
    bind: on3
  };
};
BRp$3.nodeIsDraggable = function(node) {
  return node && node.isNode() && !node.locked() && node.grabbable();
};
BRp$3.nodeIsGrabbable = function(node) {
  return this.nodeIsDraggable(node) && node.interactive();
};
BRp$3.load = function() {
  var r2 = this;
  var containerWindow = r2.cy.window();
  var isSelected = function isSelected2(ele) {
    return ele.selected();
  };
  var getShadowRoot = function getShadowRoot2(element3) {
    var rootNode = element3.getRootNode();
    if (rootNode && rootNode.nodeType === 11 && rootNode.host !== void 0) {
      return rootNode;
    }
  };
  var triggerEvents = function triggerEvents2(target, names, e2, position3) {
    if (target == null) {
      target = r2.cy;
    }
    for (var i2 = 0; i2 < names.length; i2++) {
      var name = names[i2];
      target.emit({
        originalEvent: e2,
        type: name,
        position: position3
      });
    }
  };
  var isMultSelKeyDown = function isMultSelKeyDown2(e2) {
    return e2.shiftKey || e2.metaKey || e2.ctrlKey;
  };
  var allowPanningPassthrough = function allowPanningPassthrough2(down, downs) {
    var allowPassthrough = true;
    if (r2.cy.hasCompoundNodes() && down && down.pannable()) {
      for (var i2 = 0; downs && i2 < downs.length; i2++) {
        var down = downs[i2];
        if (down.isNode() && down.isParent() && !down.pannable()) {
          allowPassthrough = false;
          break;
        }
      }
    } else {
      allowPassthrough = true;
    }
    return allowPassthrough;
  };
  var setGrabbed = function setGrabbed2(ele) {
    ele[0]._private.grabbed = true;
  };
  var setFreed = function setFreed2(ele) {
    ele[0]._private.grabbed = false;
  };
  var setInDragLayer = function setInDragLayer2(ele) {
    ele[0]._private.rscratch.inDragLayer = true;
  };
  var setOutDragLayer = function setOutDragLayer2(ele) {
    ele[0]._private.rscratch.inDragLayer = false;
  };
  var setGrabTarget = function setGrabTarget2(ele) {
    ele[0]._private.rscratch.isGrabTarget = true;
  };
  var removeGrabTarget = function removeGrabTarget2(ele) {
    ele[0]._private.rscratch.isGrabTarget = false;
  };
  var addToDragList = function addToDragList2(ele, opts) {
    var list = opts.addToList;
    var listHasEle = list.has(ele);
    if (!listHasEle && ele.grabbable() && !ele.locked()) {
      list.merge(ele);
      setGrabbed(ele);
    }
  };
  var addDescendantsToDrag = function addDescendantsToDrag2(node, opts) {
    if (!node.cy().hasCompoundNodes()) {
      return;
    }
    if (opts.inDragLayer == null && opts.addToList == null) {
      return;
    }
    var innerNodes = node.descendants();
    if (opts.inDragLayer) {
      innerNodes.forEach(setInDragLayer);
      innerNodes.connectedEdges().forEach(setInDragLayer);
    }
    if (opts.addToList) {
      addToDragList(innerNodes, opts);
    }
  };
  var addNodesToDrag = function addNodesToDrag2(nodes3, opts) {
    opts = opts || {};
    var hasCompoundNodes2 = nodes3.cy().hasCompoundNodes();
    if (opts.inDragLayer) {
      nodes3.forEach(setInDragLayer);
      nodes3.neighborhood().stdFilter(function(ele) {
        return !hasCompoundNodes2 || ele.isEdge();
      }).forEach(setInDragLayer);
    }
    if (opts.addToList) {
      nodes3.forEach(function(ele) {
        addToDragList(ele, opts);
      });
    }
    addDescendantsToDrag(nodes3, opts);
    updateAncestorsInDragLayer(nodes3, {
      inDragLayer: opts.inDragLayer
    });
    r2.updateCachedGrabbedEles();
  };
  var addNodeToDrag = addNodesToDrag;
  var freeDraggedElements = function freeDraggedElements2(grabbedEles) {
    if (!grabbedEles) {
      return;
    }
    r2.getCachedZSortedEles().forEach(function(ele) {
      setFreed(ele);
      setOutDragLayer(ele);
      removeGrabTarget(ele);
    });
    r2.updateCachedGrabbedEles();
  };
  var updateAncestorsInDragLayer = function updateAncestorsInDragLayer2(node, opts) {
    if (opts.inDragLayer == null && opts.addToList == null) {
      return;
    }
    if (!node.cy().hasCompoundNodes()) {
      return;
    }
    var parent4 = node.ancestors().orphans();
    if (parent4.same(node)) {
      return;
    }
    var nodes3 = parent4.descendants().spawnSelf().merge(parent4).unmerge(node).unmerge(node.descendants());
    var edges3 = nodes3.connectedEdges();
    if (opts.inDragLayer) {
      edges3.forEach(setInDragLayer);
      nodes3.forEach(setInDragLayer);
    }
    if (opts.addToList) {
      nodes3.forEach(function(ele) {
        addToDragList(ele, opts);
      });
    }
  };
  var blurActiveDomElement = function blurActiveDomElement2() {
    if (document.activeElement != null && document.activeElement.blur != null) {
      document.activeElement.blur();
    }
  };
  var haveMutationsApi = typeof MutationObserver !== "undefined";
  var haveResizeObserverApi = typeof ResizeObserver !== "undefined";
  if (haveMutationsApi) {
    r2.removeObserver = new MutationObserver(function(mutns) {
      for (var i2 = 0; i2 < mutns.length; i2++) {
        var mutn = mutns[i2];
        var rNodes = mutn.removedNodes;
        if (rNodes) {
          for (var j = 0; j < rNodes.length; j++) {
            var rNode = rNodes[j];
            if (rNode === r2.container) {
              r2.destroy();
              break;
            }
          }
        }
      }
    });
    if (r2.container.parentNode) {
      r2.removeObserver.observe(r2.container.parentNode, {
        childList: true
      });
    }
  } else {
    r2.registerBinding(r2.container, "DOMNodeRemoved", function(e2) {
      r2.destroy();
    });
  }
  var onResize = debounce(function() {
    r2.cy.resize();
  }, 100);
  if (haveMutationsApi) {
    r2.styleObserver = new MutationObserver(onResize);
    r2.styleObserver.observe(r2.container, {
      attributes: true
    });
  }
  r2.registerBinding(containerWindow, "resize", onResize);
  if (haveResizeObserverApi) {
    r2.resizeObserver = new ResizeObserver(onResize);
    r2.resizeObserver.observe(r2.container);
  }
  var forEachUp = function forEachUp2(domEle, fn3) {
    while (domEle != null) {
      fn3(domEle);
      domEle = domEle.parentNode;
    }
  };
  var invalidateCoords = function invalidateCoords2() {
    r2.invalidateContainerClientCoordsCache();
  };
  forEachUp(r2.container, function(domEle) {
    r2.registerBinding(domEle, "transitionend", invalidateCoords);
    r2.registerBinding(domEle, "animationend", invalidateCoords);
    r2.registerBinding(domEle, "scroll", invalidateCoords);
  });
  r2.registerBinding(r2.container, "contextmenu", function(e2) {
    e2.preventDefault();
  });
  var inBoxSelection = function inBoxSelection2() {
    return r2.selection[4] !== 0;
  };
  var eventInContainer = function eventInContainer2(e2) {
    var containerPageCoords = r2.findContainerClientCoords();
    var x3 = containerPageCoords[0];
    var y3 = containerPageCoords[1];
    var width2 = containerPageCoords[2];
    var height2 = containerPageCoords[3];
    var positions2 = e2.touches ? e2.touches : [e2];
    var atLeastOnePosInside = false;
    for (var i2 = 0; i2 < positions2.length; i2++) {
      var p3 = positions2[i2];
      if (x3 <= p3.clientX && p3.clientX <= x3 + width2 && y3 <= p3.clientY && p3.clientY <= y3 + height2) {
        atLeastOnePosInside = true;
        break;
      }
    }
    if (!atLeastOnePosInside) {
      return false;
    }
    var container2 = r2.container;
    var target = e2.target;
    var tParent = target.parentNode;
    var containerIsTarget = false;
    while (tParent) {
      if (tParent === container2) {
        containerIsTarget = true;
        break;
      }
      tParent = tParent.parentNode;
    }
    if (!containerIsTarget) {
      return false;
    }
    return true;
  };
  r2.registerBinding(r2.container, "mousedown", function mousedownHandler(e2) {
    if (!eventInContainer(e2)) {
      return;
    }
    if (r2.hoverData.which === 1 && e2.which !== 1) {
      return;
    }
    e2.preventDefault();
    blurActiveDomElement();
    r2.hoverData.capture = true;
    r2.hoverData.which = e2.which;
    var cy = r2.cy;
    var gpos = [e2.clientX, e2.clientY];
    var pos = r2.projectIntoViewport(gpos[0], gpos[1]);
    var select = r2.selection;
    var nears = r2.findNearestElements(pos[0], pos[1], true, false);
    var near = nears[0];
    var draggedElements = r2.dragData.possibleDragElements;
    r2.hoverData.mdownPos = pos;
    r2.hoverData.mdownGPos = gpos;
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: pos[0],
          y: pos[1]
        }
      };
    };
    var checkForTaphold = function checkForTaphold2() {
      r2.hoverData.tapholdCancelled = false;
      clearTimeout(r2.hoverData.tapholdTimeout);
      r2.hoverData.tapholdTimeout = setTimeout(function() {
        if (r2.hoverData.tapholdCancelled) {
          return;
        } else {
          var ele = r2.hoverData.down;
          if (ele) {
            ele.emit(makeEvent("taphold"));
          } else {
            cy.emit(makeEvent("taphold"));
          }
        }
      }, r2.tapholdDuration);
    };
    if (e2.which == 3) {
      r2.hoverData.cxtStarted = true;
      var cxtEvt = {
        originalEvent: e2,
        type: "cxttapstart",
        position: {
          x: pos[0],
          y: pos[1]
        }
      };
      if (near) {
        near.activate();
        near.emit(cxtEvt);
        r2.hoverData.down = near;
      } else {
        cy.emit(cxtEvt);
      }
      r2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
      r2.hoverData.cxtDragged = false;
    } else if (e2.which == 1) {
      if (near) {
        near.activate();
      }
      {
        if (near != null) {
          if (r2.nodeIsGrabbable(near)) {
            var triggerGrab = function triggerGrab2(ele) {
              ele.emit(makeEvent("grab"));
            };
            setGrabTarget(near);
            if (!near.selected()) {
              draggedElements = r2.dragData.possibleDragElements = cy.collection();
              addNodeToDrag(near, {
                addToList: draggedElements
              });
              near.emit(makeEvent("grabon")).emit(makeEvent("grab"));
            } else {
              draggedElements = r2.dragData.possibleDragElements = cy.collection();
              var selectedNodes = cy.$(function(ele) {
                return ele.isNode() && ele.selected() && r2.nodeIsGrabbable(ele);
              });
              addNodesToDrag(selectedNodes, {
                addToList: draggedElements
              });
              near.emit(makeEvent("grabon"));
              selectedNodes.forEach(triggerGrab);
            }
            r2.redrawHint("eles", true);
            r2.redrawHint("drag", true);
          }
        }
        r2.hoverData.down = near;
        r2.hoverData.downs = nears;
        r2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
      }
      triggerEvents(near, ["mousedown", "tapstart", "vmousedown"], e2, {
        x: pos[0],
        y: pos[1]
      });
      if (near == null) {
        select[4] = 1;
        r2.data.bgActivePosistion = {
          x: pos[0],
          y: pos[1]
        };
        r2.redrawHint("select", true);
        r2.redraw();
      } else if (near.pannable()) {
        select[4] = 1;
      }
      checkForTaphold();
    }
    select[0] = select[2] = pos[0];
    select[1] = select[3] = pos[1];
  }, false);
  var shadowRoot = getShadowRoot(r2.container);
  r2.registerBinding([containerWindow, shadowRoot], "mousemove", function mousemoveHandler(e2) {
    var capture = r2.hoverData.capture;
    if (!capture && !eventInContainer(e2)) {
      return;
    }
    var preventDefault2 = false;
    var cy = r2.cy;
    var zoom2 = cy.zoom();
    var gpos = [e2.clientX, e2.clientY];
    var pos = r2.projectIntoViewport(gpos[0], gpos[1]);
    var mdownPos = r2.hoverData.mdownPos;
    var mdownGPos = r2.hoverData.mdownGPos;
    var select = r2.selection;
    var near = null;
    if (!r2.hoverData.draggingEles && !r2.hoverData.dragging && !r2.hoverData.selecting) {
      near = r2.findNearestElement(pos[0], pos[1], true, false);
    }
    var last2 = r2.hoverData.last;
    var down = r2.hoverData.down;
    var disp = [pos[0] - select[2], pos[1] - select[3]];
    var draggedElements = r2.dragData.possibleDragElements;
    var isOverThresholdDrag;
    if (mdownGPos) {
      var dx = gpos[0] - mdownGPos[0];
      var dx2 = dx * dx;
      var dy = gpos[1] - mdownGPos[1];
      var dy2 = dy * dy;
      var dist22 = dx2 + dy2;
      r2.hoverData.isOverThresholdDrag = isOverThresholdDrag = dist22 >= r2.desktopTapThreshold2;
    }
    var multSelKeyDown = isMultSelKeyDown(e2);
    if (isOverThresholdDrag) {
      r2.hoverData.tapholdCancelled = true;
    }
    var updateDragDelta = function updateDragDelta2() {
      var dragDelta2 = r2.hoverData.dragDelta = r2.hoverData.dragDelta || [];
      if (dragDelta2.length === 0) {
        dragDelta2.push(disp[0]);
        dragDelta2.push(disp[1]);
      } else {
        dragDelta2[0] += disp[0];
        dragDelta2[1] += disp[1];
      }
    };
    preventDefault2 = true;
    triggerEvents(near, ["mousemove", "vmousemove", "tapdrag"], e2, {
      x: pos[0],
      y: pos[1]
    });
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: pos[0],
          y: pos[1]
        }
      };
    };
    var goIntoBoxMode = function goIntoBoxMode2() {
      r2.data.bgActivePosistion = void 0;
      if (!r2.hoverData.selecting) {
        cy.emit(makeEvent("boxstart"));
      }
      select[4] = 1;
      r2.hoverData.selecting = true;
      r2.redrawHint("select", true);
      r2.redraw();
    };
    if (r2.hoverData.which === 3) {
      if (isOverThresholdDrag) {
        var cxtEvt = makeEvent("cxtdrag");
        if (down) {
          down.emit(cxtEvt);
        } else {
          cy.emit(cxtEvt);
        }
        r2.hoverData.cxtDragged = true;
        if (!r2.hoverData.cxtOver || near !== r2.hoverData.cxtOver) {
          if (r2.hoverData.cxtOver) {
            r2.hoverData.cxtOver.emit(makeEvent("cxtdragout"));
          }
          r2.hoverData.cxtOver = near;
          if (near) {
            near.emit(makeEvent("cxtdragover"));
          }
        }
      }
    } else if (r2.hoverData.dragging) {
      preventDefault2 = true;
      if (cy.panningEnabled() && cy.userPanningEnabled()) {
        var deltaP;
        if (r2.hoverData.justStartedPan) {
          var mdPos = r2.hoverData.mdownPos;
          deltaP = {
            x: (pos[0] - mdPos[0]) * zoom2,
            y: (pos[1] - mdPos[1]) * zoom2
          };
          r2.hoverData.justStartedPan = false;
        } else {
          deltaP = {
            x: disp[0] * zoom2,
            y: disp[1] * zoom2
          };
        }
        cy.panBy(deltaP);
        cy.emit(makeEvent("dragpan"));
        r2.hoverData.dragged = true;
      }
      pos = r2.projectIntoViewport(e2.clientX, e2.clientY);
    } else if (select[4] == 1 && (down == null || down.pannable())) {
      if (isOverThresholdDrag) {
        if (!r2.hoverData.dragging && cy.boxSelectionEnabled() && (multSelKeyDown || !cy.panningEnabled() || !cy.userPanningEnabled())) {
          goIntoBoxMode();
        } else if (!r2.hoverData.selecting && cy.panningEnabled() && cy.userPanningEnabled()) {
          var allowPassthrough = allowPanningPassthrough(down, r2.hoverData.downs);
          if (allowPassthrough) {
            r2.hoverData.dragging = true;
            r2.hoverData.justStartedPan = true;
            select[4] = 0;
            r2.data.bgActivePosistion = array2point(mdownPos);
            r2.redrawHint("select", true);
            r2.redraw();
          }
        }
        if (down && down.pannable() && down.active()) {
          down.unactivate();
        }
      }
    } else {
      if (down && down.pannable() && down.active()) {
        down.unactivate();
      }
      if ((!down || !down.grabbed()) && near != last2) {
        if (last2) {
          triggerEvents(last2, ["mouseout", "tapdragout"], e2, {
            x: pos[0],
            y: pos[1]
          });
        }
        if (near) {
          triggerEvents(near, ["mouseover", "tapdragover"], e2, {
            x: pos[0],
            y: pos[1]
          });
        }
        r2.hoverData.last = near;
      }
      if (down) {
        if (isOverThresholdDrag) {
          if (cy.boxSelectionEnabled() && multSelKeyDown) {
            if (down && down.grabbed()) {
              freeDraggedElements(draggedElements);
              down.emit(makeEvent("freeon"));
              draggedElements.emit(makeEvent("free"));
              if (r2.dragData.didDrag) {
                down.emit(makeEvent("dragfreeon"));
                draggedElements.emit(makeEvent("dragfree"));
              }
            }
            goIntoBoxMode();
          } else if (down && down.grabbed() && r2.nodeIsDraggable(down)) {
            var justStartedDrag = !r2.dragData.didDrag;
            if (justStartedDrag) {
              r2.redrawHint("eles", true);
            }
            r2.dragData.didDrag = true;
            if (!r2.hoverData.draggingEles) {
              addNodesToDrag(draggedElements, {
                inDragLayer: true
              });
            }
            var totalShift = {
              x: 0,
              y: 0
            };
            if (number$1(disp[0]) && number$1(disp[1])) {
              totalShift.x += disp[0];
              totalShift.y += disp[1];
              if (justStartedDrag) {
                var dragDelta = r2.hoverData.dragDelta;
                if (dragDelta && number$1(dragDelta[0]) && number$1(dragDelta[1])) {
                  totalShift.x += dragDelta[0];
                  totalShift.y += dragDelta[1];
                }
              }
            }
            r2.hoverData.draggingEles = true;
            draggedElements.silentShift(totalShift).emit(makeEvent("position")).emit(makeEvent("drag"));
            r2.redrawHint("drag", true);
            r2.redraw();
          }
        } else {
          updateDragDelta();
        }
      }
      preventDefault2 = true;
    }
    select[2] = pos[0];
    select[3] = pos[1];
    if (preventDefault2) {
      if (e2.stopPropagation) e2.stopPropagation();
      if (e2.preventDefault) e2.preventDefault();
      return false;
    }
  }, false);
  var clickTimeout, didDoubleClick, prevClickTimeStamp;
  r2.registerBinding(containerWindow, "mouseup", function mouseupHandler(e2) {
    if (r2.hoverData.which === 1 && e2.which !== 1 && r2.hoverData.capture) {
      return;
    }
    var capture = r2.hoverData.capture;
    if (!capture) {
      return;
    }
    r2.hoverData.capture = false;
    var cy = r2.cy;
    var pos = r2.projectIntoViewport(e2.clientX, e2.clientY);
    var select = r2.selection;
    var near = r2.findNearestElement(pos[0], pos[1], true, false);
    var draggedElements = r2.dragData.possibleDragElements;
    var down = r2.hoverData.down;
    var multSelKeyDown = isMultSelKeyDown(e2);
    if (r2.data.bgActivePosistion) {
      r2.redrawHint("select", true);
      r2.redraw();
    }
    r2.hoverData.tapholdCancelled = true;
    r2.data.bgActivePosistion = void 0;
    if (down) {
      down.unactivate();
    }
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: pos[0],
          y: pos[1]
        }
      };
    };
    if (r2.hoverData.which === 3) {
      var cxtEvt = makeEvent("cxttapend");
      if (down) {
        down.emit(cxtEvt);
      } else {
        cy.emit(cxtEvt);
      }
      if (!r2.hoverData.cxtDragged) {
        var cxtTap = makeEvent("cxttap");
        if (down) {
          down.emit(cxtTap);
        } else {
          cy.emit(cxtTap);
        }
      }
      r2.hoverData.cxtDragged = false;
      r2.hoverData.which = null;
    } else if (r2.hoverData.which === 1) {
      triggerEvents(near, ["mouseup", "tapend", "vmouseup"], e2, {
        x: pos[0],
        y: pos[1]
      });
      if (!r2.dragData.didDrag && // didn't move a node around
      !r2.hoverData.dragged && // didn't pan
      !r2.hoverData.selecting && // not box selection
      !r2.hoverData.isOverThresholdDrag) {
        triggerEvents(down, ["click", "tap", "vclick"], e2, {
          x: pos[0],
          y: pos[1]
        });
        didDoubleClick = false;
        if (e2.timeStamp - prevClickTimeStamp <= cy.multiClickDebounceTime()) {
          clickTimeout && clearTimeout(clickTimeout);
          didDoubleClick = true;
          prevClickTimeStamp = null;
          triggerEvents(down, ["dblclick", "dbltap", "vdblclick"], e2, {
            x: pos[0],
            y: pos[1]
          });
        } else {
          clickTimeout = setTimeout(function() {
            if (didDoubleClick) return;
            triggerEvents(down, ["oneclick", "onetap", "voneclick"], e2, {
              x: pos[0],
              y: pos[1]
            });
          }, cy.multiClickDebounceTime());
          prevClickTimeStamp = e2.timeStamp;
        }
      }
      if (down == null && !r2.dragData.didDrag && !r2.hoverData.selecting && !r2.hoverData.dragged && !isMultSelKeyDown(e2)) {
        cy.$(isSelected).unselect(["tapunselect"]);
        if (draggedElements.length > 0) {
          r2.redrawHint("eles", true);
        }
        r2.dragData.possibleDragElements = draggedElements = cy.collection();
      }
      if (near == down && !r2.dragData.didDrag && !r2.hoverData.selecting) {
        if (near != null && near._private.selectable) {
          if (r2.hoverData.dragging) ;
          else if (cy.selectionType() === "additive" || multSelKeyDown) {
            if (near.selected()) {
              near.unselect(["tapunselect"]);
            } else {
              near.select(["tapselect"]);
            }
          } else {
            if (!multSelKeyDown) {
              cy.$(isSelected).unmerge(near).unselect(["tapunselect"]);
              near.select(["tapselect"]);
            }
          }
          r2.redrawHint("eles", true);
        }
      }
      if (r2.hoverData.selecting) {
        var box = cy.collection(r2.getAllInBox(select[0], select[1], select[2], select[3]));
        r2.redrawHint("select", true);
        if (box.length > 0) {
          r2.redrawHint("eles", true);
        }
        cy.emit(makeEvent("boxend"));
        var eleWouldBeSelected = function eleWouldBeSelected2(ele) {
          return ele.selectable() && !ele.selected();
        };
        if (cy.selectionType() === "additive") {
          box.emit(makeEvent("box")).stdFilter(eleWouldBeSelected).select().emit(makeEvent("boxselect"));
        } else {
          if (!multSelKeyDown) {
            cy.$(isSelected).unmerge(box).unselect();
          }
          box.emit(makeEvent("box")).stdFilter(eleWouldBeSelected).select().emit(makeEvent("boxselect"));
        }
        r2.redraw();
      }
      if (r2.hoverData.dragging) {
        r2.hoverData.dragging = false;
        r2.redrawHint("select", true);
        r2.redrawHint("eles", true);
        r2.redraw();
      }
      if (!select[4]) {
        r2.redrawHint("drag", true);
        r2.redrawHint("eles", true);
        var downWasGrabbed = down && down.grabbed();
        freeDraggedElements(draggedElements);
        if (downWasGrabbed) {
          down.emit(makeEvent("freeon"));
          draggedElements.emit(makeEvent("free"));
          if (r2.dragData.didDrag) {
            down.emit(makeEvent("dragfreeon"));
            draggedElements.emit(makeEvent("dragfree"));
          }
        }
      }
    }
    select[4] = 0;
    r2.hoverData.down = null;
    r2.hoverData.cxtStarted = false;
    r2.hoverData.draggingEles = false;
    r2.hoverData.selecting = false;
    r2.hoverData.isOverThresholdDrag = false;
    r2.dragData.didDrag = false;
    r2.hoverData.dragged = false;
    r2.hoverData.dragDelta = [];
    r2.hoverData.mdownPos = null;
    r2.hoverData.mdownGPos = null;
    r2.hoverData.which = null;
  }, false);
  var wheelDeltas = [];
  var wheelDeltaN = 4;
  var inaccurateScrollDevice;
  var inaccurateScrollFactor = 1e5;
  var allAreDivisibleBy = function allAreDivisibleBy2(list, factor) {
    for (var i2 = 0; i2 < list.length; i2++) {
      if (list[i2] % factor !== 0) {
        return false;
      }
    }
    return true;
  };
  var allAreSameMagnitude = function allAreSameMagnitude2(list) {
    var firstMag = Math.abs(list[0]);
    for (var i2 = 1; i2 < list.length; i2++) {
      if (Math.abs(list[i2]) !== firstMag) {
        return false;
      }
    }
    return true;
  };
  var wheelHandler = function wheelHandler2(e2) {
    var clamp = false;
    var delta = e2.deltaY;
    if (delta == null) {
      if (e2.wheelDeltaY != null) {
        delta = e2.wheelDeltaY / 4;
      } else if (e2.wheelDelta != null) {
        delta = e2.wheelDelta / 4;
      }
    }
    if (delta === 0) {
      return;
    }
    if (inaccurateScrollDevice == null) {
      if (wheelDeltas.length >= wheelDeltaN) {
        var wds = wheelDeltas;
        inaccurateScrollDevice = allAreDivisibleBy(wds, 5);
        if (!inaccurateScrollDevice) {
          var firstMag = Math.abs(wds[0]);
          inaccurateScrollDevice = allAreSameMagnitude(wds) && firstMag > 5;
        }
        if (inaccurateScrollDevice) {
          for (var i2 = 0; i2 < wds.length; i2++) {
            inaccurateScrollFactor = Math.min(Math.abs(wds[i2]), inaccurateScrollFactor);
          }
        }
      } else {
        wheelDeltas.push(delta);
        clamp = true;
      }
    } else if (inaccurateScrollDevice) {
      inaccurateScrollFactor = Math.min(Math.abs(delta), inaccurateScrollFactor);
    }
    if (r2.scrollingPage) {
      return;
    }
    var cy = r2.cy;
    var zoom2 = cy.zoom();
    var pan2 = cy.pan();
    var pos = r2.projectIntoViewport(e2.clientX, e2.clientY);
    var rpos = [pos[0] * zoom2 + pan2.x, pos[1] * zoom2 + pan2.y];
    if (r2.hoverData.draggingEles || r2.hoverData.dragging || r2.hoverData.cxtStarted || inBoxSelection()) {
      e2.preventDefault();
      return;
    }
    if (cy.panningEnabled() && cy.userPanningEnabled() && cy.zoomingEnabled() && cy.userZoomingEnabled()) {
      e2.preventDefault();
      r2.data.wheelZooming = true;
      clearTimeout(r2.data.wheelTimeout);
      r2.data.wheelTimeout = setTimeout(function() {
        r2.data.wheelZooming = false;
        r2.redrawHint("eles", true);
        r2.redraw();
      }, 150);
      var diff2;
      if (clamp && Math.abs(delta) > 5) {
        delta = signum(delta) * 5;
      }
      diff2 = delta / -250;
      if (inaccurateScrollDevice) {
        diff2 /= inaccurateScrollFactor;
        diff2 *= 3;
      }
      diff2 = diff2 * r2.wheelSensitivity;
      var needsWheelFix = e2.deltaMode === 1;
      if (needsWheelFix) {
        diff2 *= 33;
      }
      var newZoom = cy.zoom() * Math.pow(10, diff2);
      if (e2.type === "gesturechange") {
        newZoom = r2.gestureStartZoom * e2.scale;
      }
      cy.zoom({
        level: newZoom,
        renderedPosition: {
          x: rpos[0],
          y: rpos[1]
        }
      });
      cy.emit({
        type: e2.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
        originalEvent: e2,
        position: {
          x: pos[0],
          y: pos[1]
        }
      });
    }
  };
  r2.registerBinding(r2.container, "wheel", wheelHandler, true);
  r2.registerBinding(containerWindow, "scroll", function scrollHandler(e2) {
    r2.scrollingPage = true;
    clearTimeout(r2.scrollingPageTimeout);
    r2.scrollingPageTimeout = setTimeout(function() {
      r2.scrollingPage = false;
    }, 250);
  }, true);
  r2.registerBinding(r2.container, "gesturestart", function gestureStartHandler(e2) {
    r2.gestureStartZoom = r2.cy.zoom();
    if (!r2.hasTouchStarted) {
      e2.preventDefault();
    }
  }, true);
  r2.registerBinding(r2.container, "gesturechange", function(e2) {
    if (!r2.hasTouchStarted) {
      wheelHandler(e2);
    }
  }, true);
  r2.registerBinding(r2.container, "mouseout", function mouseOutHandler(e2) {
    var pos = r2.projectIntoViewport(e2.clientX, e2.clientY);
    r2.cy.emit({
      originalEvent: e2,
      type: "mouseout",
      position: {
        x: pos[0],
        y: pos[1]
      }
    });
  }, false);
  r2.registerBinding(r2.container, "mouseover", function mouseOverHandler(e2) {
    var pos = r2.projectIntoViewport(e2.clientX, e2.clientY);
    r2.cy.emit({
      originalEvent: e2,
      type: "mouseover",
      position: {
        x: pos[0],
        y: pos[1]
      }
    });
  }, false);
  var f1x1, f1y1, f2x1, f2y1;
  var distance1, distance1Sq;
  var center1, modelCenter1;
  var offsetLeft, offsetTop;
  var containerWidth, containerHeight;
  var twoFingersStartInside;
  var distance = function distance2(x1, y1, x22, y22) {
    return Math.sqrt((x22 - x1) * (x22 - x1) + (y22 - y1) * (y22 - y1));
  };
  var distanceSq = function distanceSq2(x1, y1, x22, y22) {
    return (x22 - x1) * (x22 - x1) + (y22 - y1) * (y22 - y1);
  };
  var touchstartHandler;
  r2.registerBinding(r2.container, "touchstart", touchstartHandler = function touchstartHandler2(e2) {
    r2.hasTouchStarted = true;
    if (!eventInContainer(e2)) {
      return;
    }
    blurActiveDomElement();
    r2.touchData.capture = true;
    r2.data.bgActivePosistion = void 0;
    var cy = r2.cy;
    var now = r2.touchData.now;
    var earlier = r2.touchData.earlier;
    if (e2.touches[0]) {
      var pos = r2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
      now[0] = pos[0];
      now[1] = pos[1];
    }
    if (e2.touches[1]) {
      var pos = r2.projectIntoViewport(e2.touches[1].clientX, e2.touches[1].clientY);
      now[2] = pos[0];
      now[3] = pos[1];
    }
    if (e2.touches[2]) {
      var pos = r2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2].clientY);
      now[4] = pos[0];
      now[5] = pos[1];
    }
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: now[0],
          y: now[1]
        }
      };
    };
    if (e2.touches[1]) {
      r2.touchData.singleTouchMoved = true;
      freeDraggedElements(r2.dragData.touchDragEles);
      var offsets = r2.findContainerClientCoords();
      offsetLeft = offsets[0];
      offsetTop = offsets[1];
      containerWidth = offsets[2];
      containerHeight = offsets[3];
      f1x1 = e2.touches[0].clientX - offsetLeft;
      f1y1 = e2.touches[0].clientY - offsetTop;
      f2x1 = e2.touches[1].clientX - offsetLeft;
      f2y1 = e2.touches[1].clientY - offsetTop;
      twoFingersStartInside = 0 <= f1x1 && f1x1 <= containerWidth && 0 <= f2x1 && f2x1 <= containerWidth && 0 <= f1y1 && f1y1 <= containerHeight && 0 <= f2y1 && f2y1 <= containerHeight;
      var pan2 = cy.pan();
      var zoom2 = cy.zoom();
      distance1 = distance(f1x1, f1y1, f2x1, f2y1);
      distance1Sq = distanceSq(f1x1, f1y1, f2x1, f2y1);
      center1 = [(f1x1 + f2x1) / 2, (f1y1 + f2y1) / 2];
      modelCenter1 = [(center1[0] - pan2.x) / zoom2, (center1[1] - pan2.y) / zoom2];
      var cxtDistThreshold = 200;
      var cxtDistThresholdSq = cxtDistThreshold * cxtDistThreshold;
      if (distance1Sq < cxtDistThresholdSq && !e2.touches[2]) {
        var near1 = r2.findNearestElement(now[0], now[1], true, true);
        var near2 = r2.findNearestElement(now[2], now[3], true, true);
        if (near1 && near1.isNode()) {
          near1.activate().emit(makeEvent("cxttapstart"));
          r2.touchData.start = near1;
        } else if (near2 && near2.isNode()) {
          near2.activate().emit(makeEvent("cxttapstart"));
          r2.touchData.start = near2;
        } else {
          cy.emit(makeEvent("cxttapstart"));
        }
        if (r2.touchData.start) {
          r2.touchData.start._private.grabbed = false;
        }
        r2.touchData.cxt = true;
        r2.touchData.cxtDragged = false;
        r2.data.bgActivePosistion = void 0;
        r2.redraw();
        return;
      }
    }
    if (e2.touches[2]) {
      if (cy.boxSelectionEnabled()) {
        e2.preventDefault();
      }
    } else if (e2.touches[1]) ;
    else if (e2.touches[0]) {
      var nears = r2.findNearestElements(now[0], now[1], true, true);
      var near = nears[0];
      if (near != null) {
        near.activate();
        r2.touchData.start = near;
        r2.touchData.starts = nears;
        if (r2.nodeIsGrabbable(near)) {
          var draggedEles = r2.dragData.touchDragEles = cy.collection();
          var selectedNodes = null;
          r2.redrawHint("eles", true);
          r2.redrawHint("drag", true);
          if (near.selected()) {
            selectedNodes = cy.$(function(ele) {
              return ele.selected() && r2.nodeIsGrabbable(ele);
            });
            addNodesToDrag(selectedNodes, {
              addToList: draggedEles
            });
          } else {
            addNodeToDrag(near, {
              addToList: draggedEles
            });
          }
          setGrabTarget(near);
          near.emit(makeEvent("grabon"));
          if (selectedNodes) {
            selectedNodes.forEach(function(n) {
              n.emit(makeEvent("grab"));
            });
          } else {
            near.emit(makeEvent("grab"));
          }
        }
      }
      triggerEvents(near, ["touchstart", "tapstart", "vmousedown"], e2, {
        x: now[0],
        y: now[1]
      });
      if (near == null) {
        r2.data.bgActivePosistion = {
          x: pos[0],
          y: pos[1]
        };
        r2.redrawHint("select", true);
        r2.redraw();
      }
      r2.touchData.singleTouchMoved = false;
      r2.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date();
      clearTimeout(r2.touchData.tapholdTimeout);
      r2.touchData.tapholdTimeout = setTimeout(function() {
        if (r2.touchData.singleTouchMoved === false && !r2.pinching && !r2.touchData.selecting) {
          triggerEvents(r2.touchData.start, ["taphold"], e2, {
            x: now[0],
            y: now[1]
          });
        }
      }, r2.tapholdDuration);
    }
    if (e2.touches.length >= 1) {
      var sPos = r2.touchData.startPosition = [null, null, null, null, null, null];
      for (var i2 = 0; i2 < now.length; i2++) {
        sPos[i2] = earlier[i2] = now[i2];
      }
      var touch0 = e2.touches[0];
      r2.touchData.startGPosition = [touch0.clientX, touch0.clientY];
    }
  }, false);
  var touchmoveHandler;
  r2.registerBinding(containerWindow, "touchmove", touchmoveHandler = function touchmoveHandler2(e2) {
    var capture = r2.touchData.capture;
    if (!capture && !eventInContainer(e2)) {
      return;
    }
    var select = r2.selection;
    var cy = r2.cy;
    var now = r2.touchData.now;
    var earlier = r2.touchData.earlier;
    var zoom2 = cy.zoom();
    if (e2.touches[0]) {
      var pos = r2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
      now[0] = pos[0];
      now[1] = pos[1];
    }
    if (e2.touches[1]) {
      var pos = r2.projectIntoViewport(e2.touches[1].clientX, e2.touches[1].clientY);
      now[2] = pos[0];
      now[3] = pos[1];
    }
    if (e2.touches[2]) {
      var pos = r2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2].clientY);
      now[4] = pos[0];
      now[5] = pos[1];
    }
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: now[0],
          y: now[1]
        }
      };
    };
    var startGPos = r2.touchData.startGPosition;
    var isOverThresholdDrag;
    if (capture && e2.touches[0] && startGPos) {
      var disp = [];
      for (var j = 0; j < now.length; j++) {
        disp[j] = now[j] - earlier[j];
      }
      var dx = e2.touches[0].clientX - startGPos[0];
      var dx2 = dx * dx;
      var dy = e2.touches[0].clientY - startGPos[1];
      var dy2 = dy * dy;
      var dist22 = dx2 + dy2;
      isOverThresholdDrag = dist22 >= r2.touchTapThreshold2;
    }
    if (capture && r2.touchData.cxt) {
      e2.preventDefault();
      var f1x2 = e2.touches[0].clientX - offsetLeft, f1y2 = e2.touches[0].clientY - offsetTop;
      var f2x2 = e2.touches[1].clientX - offsetLeft, f2y2 = e2.touches[1].clientY - offsetTop;
      var distance2Sq = distanceSq(f1x2, f1y2, f2x2, f2y2);
      var factorSq = distance2Sq / distance1Sq;
      var distThreshold = 150;
      var distThresholdSq = distThreshold * distThreshold;
      var factorThreshold = 1.5;
      var factorThresholdSq = factorThreshold * factorThreshold;
      if (factorSq >= factorThresholdSq || distance2Sq >= distThresholdSq) {
        r2.touchData.cxt = false;
        r2.data.bgActivePosistion = void 0;
        r2.redrawHint("select", true);
        var cxtEvt = makeEvent("cxttapend");
        if (r2.touchData.start) {
          r2.touchData.start.unactivate().emit(cxtEvt);
          r2.touchData.start = null;
        } else {
          cy.emit(cxtEvt);
        }
      }
    }
    if (capture && r2.touchData.cxt) {
      var cxtEvt = makeEvent("cxtdrag");
      r2.data.bgActivePosistion = void 0;
      r2.redrawHint("select", true);
      if (r2.touchData.start) {
        r2.touchData.start.emit(cxtEvt);
      } else {
        cy.emit(cxtEvt);
      }
      if (r2.touchData.start) {
        r2.touchData.start._private.grabbed = false;
      }
      r2.touchData.cxtDragged = true;
      var near = r2.findNearestElement(now[0], now[1], true, true);
      if (!r2.touchData.cxtOver || near !== r2.touchData.cxtOver) {
        if (r2.touchData.cxtOver) {
          r2.touchData.cxtOver.emit(makeEvent("cxtdragout"));
        }
        r2.touchData.cxtOver = near;
        if (near) {
          near.emit(makeEvent("cxtdragover"));
        }
      }
    } else if (capture && e2.touches[2] && cy.boxSelectionEnabled()) {
      e2.preventDefault();
      r2.data.bgActivePosistion = void 0;
      this.lastThreeTouch = +/* @__PURE__ */ new Date();
      if (!r2.touchData.selecting) {
        cy.emit(makeEvent("boxstart"));
      }
      r2.touchData.selecting = true;
      r2.touchData.didSelect = true;
      select[4] = 1;
      if (!select || select.length === 0 || select[0] === void 0) {
        select[0] = (now[0] + now[2] + now[4]) / 3;
        select[1] = (now[1] + now[3] + now[5]) / 3;
        select[2] = (now[0] + now[2] + now[4]) / 3 + 1;
        select[3] = (now[1] + now[3] + now[5]) / 3 + 1;
      } else {
        select[2] = (now[0] + now[2] + now[4]) / 3;
        select[3] = (now[1] + now[3] + now[5]) / 3;
      }
      r2.redrawHint("select", true);
      r2.redraw();
    } else if (capture && e2.touches[1] && !r2.touchData.didSelect && cy.zoomingEnabled() && cy.panningEnabled() && cy.userZoomingEnabled() && cy.userPanningEnabled()) {
      e2.preventDefault();
      r2.data.bgActivePosistion = void 0;
      r2.redrawHint("select", true);
      var draggedEles = r2.dragData.touchDragEles;
      if (draggedEles) {
        r2.redrawHint("drag", true);
        for (var i2 = 0; i2 < draggedEles.length; i2++) {
          var de_p = draggedEles[i2]._private;
          de_p.grabbed = false;
          de_p.rscratch.inDragLayer = false;
        }
      }
      var _start = r2.touchData.start;
      var f1x2 = e2.touches[0].clientX - offsetLeft, f1y2 = e2.touches[0].clientY - offsetTop;
      var f2x2 = e2.touches[1].clientX - offsetLeft, f2y2 = e2.touches[1].clientY - offsetTop;
      var distance2 = distance(f1x2, f1y2, f2x2, f2y2);
      var factor = distance2 / distance1;
      if (twoFingersStartInside) {
        var df1x = f1x2 - f1x1;
        var df1y = f1y2 - f1y1;
        var df2x = f2x2 - f2x1;
        var df2y = f2y2 - f2y1;
        var tx = (df1x + df2x) / 2;
        var ty = (df1y + df2y) / 2;
        var zoom1 = cy.zoom();
        var zoom22 = zoom1 * factor;
        var pan1 = cy.pan();
        var ctrx = modelCenter1[0] * zoom1 + pan1.x;
        var ctry = modelCenter1[1] * zoom1 + pan1.y;
        var pan2 = {
          x: -zoom22 / zoom1 * (ctrx - pan1.x - tx) + ctrx,
          y: -zoom22 / zoom1 * (ctry - pan1.y - ty) + ctry
        };
        if (_start && _start.active()) {
          var draggedEles = r2.dragData.touchDragEles;
          freeDraggedElements(draggedEles);
          r2.redrawHint("drag", true);
          r2.redrawHint("eles", true);
          _start.unactivate().emit(makeEvent("freeon"));
          draggedEles.emit(makeEvent("free"));
          if (r2.dragData.didDrag) {
            _start.emit(makeEvent("dragfreeon"));
            draggedEles.emit(makeEvent("dragfree"));
          }
        }
        cy.viewport({
          zoom: zoom22,
          pan: pan2,
          cancelOnFailedZoom: true
        });
        cy.emit(makeEvent("pinchzoom"));
        distance1 = distance2;
        f1x1 = f1x2;
        f1y1 = f1y2;
        f2x1 = f2x2;
        f2y1 = f2y2;
        r2.pinching = true;
      }
      if (e2.touches[0]) {
        var pos = r2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
        now[0] = pos[0];
        now[1] = pos[1];
      }
      if (e2.touches[1]) {
        var pos = r2.projectIntoViewport(e2.touches[1].clientX, e2.touches[1].clientY);
        now[2] = pos[0];
        now[3] = pos[1];
      }
      if (e2.touches[2]) {
        var pos = r2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2].clientY);
        now[4] = pos[0];
        now[5] = pos[1];
      }
    } else if (e2.touches[0] && !r2.touchData.didSelect) {
      var start = r2.touchData.start;
      var last2 = r2.touchData.last;
      var near;
      if (!r2.hoverData.draggingEles && !r2.swipePanning) {
        near = r2.findNearestElement(now[0], now[1], true, true);
      }
      if (capture && start != null) {
        e2.preventDefault();
      }
      if (capture && start != null && r2.nodeIsDraggable(start)) {
        if (isOverThresholdDrag) {
          var draggedEles = r2.dragData.touchDragEles;
          var justStartedDrag = !r2.dragData.didDrag;
          if (justStartedDrag) {
            addNodesToDrag(draggedEles, {
              inDragLayer: true
            });
          }
          r2.dragData.didDrag = true;
          var totalShift = {
            x: 0,
            y: 0
          };
          if (number$1(disp[0]) && number$1(disp[1])) {
            totalShift.x += disp[0];
            totalShift.y += disp[1];
            if (justStartedDrag) {
              r2.redrawHint("eles", true);
              var dragDelta = r2.touchData.dragDelta;
              if (dragDelta && number$1(dragDelta[0]) && number$1(dragDelta[1])) {
                totalShift.x += dragDelta[0];
                totalShift.y += dragDelta[1];
              }
            }
          }
          r2.hoverData.draggingEles = true;
          draggedEles.silentShift(totalShift).emit(makeEvent("position")).emit(makeEvent("drag"));
          r2.redrawHint("drag", true);
          if (r2.touchData.startPosition[0] == earlier[0] && r2.touchData.startPosition[1] == earlier[1]) {
            r2.redrawHint("eles", true);
          }
          r2.redraw();
        } else {
          var dragDelta = r2.touchData.dragDelta = r2.touchData.dragDelta || [];
          if (dragDelta.length === 0) {
            dragDelta.push(disp[0]);
            dragDelta.push(disp[1]);
          } else {
            dragDelta[0] += disp[0];
            dragDelta[1] += disp[1];
          }
        }
      }
      {
        triggerEvents(start || near, ["touchmove", "tapdrag", "vmousemove"], e2, {
          x: now[0],
          y: now[1]
        });
        if ((!start || !start.grabbed()) && near != last2) {
          if (last2) {
            last2.emit(makeEvent("tapdragout"));
          }
          if (near) {
            near.emit(makeEvent("tapdragover"));
          }
        }
        r2.touchData.last = near;
      }
      if (capture) {
        for (var i2 = 0; i2 < now.length; i2++) {
          if (now[i2] && r2.touchData.startPosition[i2] && isOverThresholdDrag) {
            r2.touchData.singleTouchMoved = true;
          }
        }
      }
      if (capture && (start == null || start.pannable()) && cy.panningEnabled() && cy.userPanningEnabled()) {
        var allowPassthrough = allowPanningPassthrough(start, r2.touchData.starts);
        if (allowPassthrough) {
          e2.preventDefault();
          if (!r2.data.bgActivePosistion) {
            r2.data.bgActivePosistion = array2point(r2.touchData.startPosition);
          }
          if (r2.swipePanning) {
            cy.panBy({
              x: disp[0] * zoom2,
              y: disp[1] * zoom2
            });
            cy.emit(makeEvent("dragpan"));
          } else if (isOverThresholdDrag) {
            r2.swipePanning = true;
            cy.panBy({
              x: dx * zoom2,
              y: dy * zoom2
            });
            cy.emit(makeEvent("dragpan"));
            if (start) {
              start.unactivate();
              r2.redrawHint("select", true);
              r2.touchData.start = null;
            }
          }
        }
        var pos = r2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
        now[0] = pos[0];
        now[1] = pos[1];
      }
    }
    for (var j = 0; j < now.length; j++) {
      earlier[j] = now[j];
    }
    if (capture && e2.touches.length > 0 && !r2.hoverData.draggingEles && !r2.swipePanning && r2.data.bgActivePosistion != null) {
      r2.data.bgActivePosistion = void 0;
      r2.redrawHint("select", true);
      r2.redraw();
    }
  }, false);
  var touchcancelHandler;
  r2.registerBinding(containerWindow, "touchcancel", touchcancelHandler = function touchcancelHandler2(e2) {
    var start = r2.touchData.start;
    r2.touchData.capture = false;
    if (start) {
      start.unactivate();
    }
  });
  var touchendHandler, didDoubleTouch, touchTimeout, prevTouchTimeStamp;
  r2.registerBinding(containerWindow, "touchend", touchendHandler = function touchendHandler2(e2) {
    var start = r2.touchData.start;
    var capture = r2.touchData.capture;
    if (capture) {
      if (e2.touches.length === 0) {
        r2.touchData.capture = false;
      }
      e2.preventDefault();
    } else {
      return;
    }
    var select = r2.selection;
    r2.swipePanning = false;
    r2.hoverData.draggingEles = false;
    var cy = r2.cy;
    var zoom2 = cy.zoom();
    var now = r2.touchData.now;
    var earlier = r2.touchData.earlier;
    if (e2.touches[0]) {
      var pos = r2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
      now[0] = pos[0];
      now[1] = pos[1];
    }
    if (e2.touches[1]) {
      var pos = r2.projectIntoViewport(e2.touches[1].clientX, e2.touches[1].clientY);
      now[2] = pos[0];
      now[3] = pos[1];
    }
    if (e2.touches[2]) {
      var pos = r2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2].clientY);
      now[4] = pos[0];
      now[5] = pos[1];
    }
    var makeEvent = function makeEvent2(type) {
      return {
        originalEvent: e2,
        type,
        position: {
          x: now[0],
          y: now[1]
        }
      };
    };
    if (start) {
      start.unactivate();
    }
    var ctxTapend;
    if (r2.touchData.cxt) {
      ctxTapend = makeEvent("cxttapend");
      if (start) {
        start.emit(ctxTapend);
      } else {
        cy.emit(ctxTapend);
      }
      if (!r2.touchData.cxtDragged) {
        var ctxTap = makeEvent("cxttap");
        if (start) {
          start.emit(ctxTap);
        } else {
          cy.emit(ctxTap);
        }
      }
      if (r2.touchData.start) {
        r2.touchData.start._private.grabbed = false;
      }
      r2.touchData.cxt = false;
      r2.touchData.start = null;
      r2.redraw();
      return;
    }
    if (!e2.touches[2] && cy.boxSelectionEnabled() && r2.touchData.selecting) {
      r2.touchData.selecting = false;
      var box = cy.collection(r2.getAllInBox(select[0], select[1], select[2], select[3]));
      select[0] = void 0;
      select[1] = void 0;
      select[2] = void 0;
      select[3] = void 0;
      select[4] = 0;
      r2.redrawHint("select", true);
      cy.emit(makeEvent("boxend"));
      var eleWouldBeSelected = function eleWouldBeSelected2(ele) {
        return ele.selectable() && !ele.selected();
      };
      box.emit(makeEvent("box")).stdFilter(eleWouldBeSelected).select().emit(makeEvent("boxselect"));
      if (box.nonempty()) {
        r2.redrawHint("eles", true);
      }
      r2.redraw();
    }
    if (start != null) {
      start.unactivate();
    }
    if (e2.touches[2]) {
      r2.data.bgActivePosistion = void 0;
      r2.redrawHint("select", true);
    } else if (e2.touches[1]) ;
    else if (e2.touches[0]) ;
    else if (!e2.touches[0]) {
      r2.data.bgActivePosistion = void 0;
      r2.redrawHint("select", true);
      var draggedEles = r2.dragData.touchDragEles;
      if (start != null) {
        var startWasGrabbed = start._private.grabbed;
        freeDraggedElements(draggedEles);
        r2.redrawHint("drag", true);
        r2.redrawHint("eles", true);
        if (startWasGrabbed) {
          start.emit(makeEvent("freeon"));
          draggedEles.emit(makeEvent("free"));
          if (r2.dragData.didDrag) {
            start.emit(makeEvent("dragfreeon"));
            draggedEles.emit(makeEvent("dragfree"));
          }
        }
        triggerEvents(start, ["touchend", "tapend", "vmouseup", "tapdragout"], e2, {
          x: now[0],
          y: now[1]
        });
        start.unactivate();
        r2.touchData.start = null;
      } else {
        var near = r2.findNearestElement(now[0], now[1], true, true);
        triggerEvents(near, ["touchend", "tapend", "vmouseup", "tapdragout"], e2, {
          x: now[0],
          y: now[1]
        });
      }
      var dx = r2.touchData.startPosition[0] - now[0];
      var dx2 = dx * dx;
      var dy = r2.touchData.startPosition[1] - now[1];
      var dy2 = dy * dy;
      var dist22 = dx2 + dy2;
      var rdist2 = dist22 * zoom2 * zoom2;
      if (!r2.touchData.singleTouchMoved) {
        if (!start) {
          cy.$(":selected").unselect(["tapunselect"]);
        }
        triggerEvents(start, ["tap", "vclick"], e2, {
          x: now[0],
          y: now[1]
        });
        didDoubleTouch = false;
        if (e2.timeStamp - prevTouchTimeStamp <= cy.multiClickDebounceTime()) {
          touchTimeout && clearTimeout(touchTimeout);
          didDoubleTouch = true;
          prevTouchTimeStamp = null;
          triggerEvents(start, ["dbltap", "vdblclick"], e2, {
            x: now[0],
            y: now[1]
          });
        } else {
          touchTimeout = setTimeout(function() {
            if (didDoubleTouch) return;
            triggerEvents(start, ["onetap", "voneclick"], e2, {
              x: now[0],
              y: now[1]
            });
          }, cy.multiClickDebounceTime());
          prevTouchTimeStamp = e2.timeStamp;
        }
      }
      if (start != null && !r2.dragData.didDrag && start._private.selectable && rdist2 < r2.touchTapThreshold2 && !r2.pinching) {
        if (cy.selectionType() === "single") {
          cy.$(isSelected).unmerge(start).unselect(["tapunselect"]);
          start.select(["tapselect"]);
        } else {
          if (start.selected()) {
            start.unselect(["tapunselect"]);
          } else {
            start.select(["tapselect"]);
          }
        }
        r2.redrawHint("eles", true);
      }
      r2.touchData.singleTouchMoved = true;
    }
    for (var j = 0; j < now.length; j++) {
      earlier[j] = now[j];
    }
    r2.dragData.didDrag = false;
    if (e2.touches.length === 0) {
      r2.touchData.dragDelta = [];
      r2.touchData.startPosition = [null, null, null, null, null, null];
      r2.touchData.startGPosition = null;
      r2.touchData.didSelect = false;
    }
    if (e2.touches.length < 2) {
      if (e2.touches.length === 1) {
        r2.touchData.startGPosition = [e2.touches[0].clientX, e2.touches[0].clientY];
      }
      r2.pinching = false;
      r2.redrawHint("eles", true);
      r2.redraw();
    }
  }, false);
  if (typeof TouchEvent === "undefined") {
    var pointers = [];
    var makeTouch = function makeTouch2(e2) {
      return {
        clientX: e2.clientX,
        clientY: e2.clientY,
        force: 1,
        identifier: e2.pointerId,
        pageX: e2.pageX,
        pageY: e2.pageY,
        radiusX: e2.width / 2,
        radiusY: e2.height / 2,
        screenX: e2.screenX,
        screenY: e2.screenY,
        target: e2.target
      };
    };
    var makePointer = function makePointer2(e2) {
      return {
        event: e2,
        touch: makeTouch(e2)
      };
    };
    var addPointer = function addPointer2(e2) {
      pointers.push(makePointer(e2));
    };
    var removePointer = function removePointer2(e2) {
      for (var i2 = 0; i2 < pointers.length; i2++) {
        var p3 = pointers[i2];
        if (p3.event.pointerId === e2.pointerId) {
          pointers.splice(i2, 1);
          return;
        }
      }
    };
    var updatePointer = function updatePointer2(e2) {
      var p3 = pointers.filter(function(p4) {
        return p4.event.pointerId === e2.pointerId;
      })[0];
      p3.event = e2;
      p3.touch = makeTouch(e2);
    };
    var addTouchesToEvent = function addTouchesToEvent2(e2) {
      e2.touches = pointers.map(function(p3) {
        return p3.touch;
      });
    };
    var pointerIsMouse = function pointerIsMouse2(e2) {
      return e2.pointerType === "mouse" || e2.pointerType === 4;
    };
    r2.registerBinding(r2.container, "pointerdown", function(e2) {
      if (pointerIsMouse(e2)) {
        return;
      }
      e2.preventDefault();
      addPointer(e2);
      addTouchesToEvent(e2);
      touchstartHandler(e2);
    });
    r2.registerBinding(r2.container, "pointerup", function(e2) {
      if (pointerIsMouse(e2)) {
        return;
      }
      removePointer(e2);
      addTouchesToEvent(e2);
      touchendHandler(e2);
    });
    r2.registerBinding(r2.container, "pointercancel", function(e2) {
      if (pointerIsMouse(e2)) {
        return;
      }
      removePointer(e2);
      addTouchesToEvent(e2);
      touchcancelHandler(e2);
    });
    r2.registerBinding(r2.container, "pointermove", function(e2) {
      if (pointerIsMouse(e2)) {
        return;
      }
      e2.preventDefault();
      updatePointer(e2);
      addTouchesToEvent(e2);
      touchmoveHandler(e2);
    });
  }
};
var BRp$2 = {};
BRp$2.generatePolygon = function(name, points) {
  return this.nodeShapes[name] = {
    renderer: this,
    name,
    points,
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl("polygon", context, centerX, centerY, width2, height2, this.points);
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      return polygonIntersectLine(x3, y3, this.points, nodeX, nodeY, width2 / 2, height2 / 2, padding);
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      return pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2, height2, [0, -1], padding);
    },
    hasMiterBounds: name !== "rectangle",
    miterBounds: function miterBounds(centerX, centerY, width2, height2, strokeWidth, strokePosition) {
      return miterBox(this.points, centerX, centerY, width2, height2, strokeWidth);
    }
  };
};
BRp$2.generateEllipse = function() {
  return this.nodeShapes["ellipse"] = {
    renderer: this,
    name: "ellipse",
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl(this.name, context, centerX, centerY, width2, height2);
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      return intersectLineEllipse(x3, y3, nodeX, nodeY, width2 / 2 + padding, height2 / 2 + padding);
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      return checkInEllipse(x3, y3, width2, height2, centerX, centerY, padding);
    }
  };
};
BRp$2.generateRoundPolygon = function(name, points) {
  return this.nodeShapes[name] = {
    renderer: this,
    name,
    points,
    getOrCreateCorners: function getOrCreateCorners(centerX, centerY, width2, height2, cornerRadius, rs, field) {
      if (rs[field] !== void 0 && rs[field + "-cx"] === centerX && rs[field + "-cy"] === centerY) {
        return rs[field];
      }
      rs[field] = new Array(points.length / 2);
      rs[field + "-cx"] = centerX;
      rs[field + "-cy"] = centerY;
      var halfW = width2 / 2;
      var halfH = height2 / 2;
      cornerRadius = cornerRadius === "auto" ? getRoundPolygonRadius(width2, height2) : cornerRadius;
      var p3 = new Array(points.length / 2);
      for (var _i = 0; _i < points.length / 2; _i++) {
        p3[_i] = {
          x: centerX + halfW * points[_i * 2],
          y: centerY + halfH * points[_i * 2 + 1]
        };
      }
      var i2, p1, p22, p32, len = p3.length;
      p1 = p3[len - 1];
      for (i2 = 0; i2 < len; i2++) {
        p22 = p3[i2 % len];
        p32 = p3[(i2 + 1) % len];
        rs[field][i2] = getRoundCorner(p1, p22, p32, cornerRadius);
        p1 = p22;
        p22 = p32;
      }
      return rs[field];
    },
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius, rs) {
      this.renderer.nodeShapeImpl("round-polygon", context, centerX, centerY, width2, height2, this.points, this.getOrCreateCorners(centerX, centerY, width2, height2, cornerRadius, rs, "drawCorners"));
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius, rs) {
      return roundPolygonIntersectLine(x3, y3, this.points, nodeX, nodeY, width2, height2, padding, this.getOrCreateCorners(nodeX, nodeY, width2, height2, cornerRadius, rs, "corners"));
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius, rs) {
      return pointInsideRoundPolygon(x3, y3, this.points, centerX, centerY, width2, height2, this.getOrCreateCorners(centerX, centerY, width2, height2, cornerRadius, rs, "corners"));
    }
  };
};
BRp$2.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes["roundrectangle"] = {
    renderer: this,
    name: "round-rectangle",
    points: generateUnitNgonPointsFitToSquare(4, 0),
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl(this.name, context, centerX, centerY, width2, height2, this.points, cornerRadius);
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      return roundRectangleIntersectLine(x3, y3, nodeX, nodeY, width2, height2, padding, cornerRadius);
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      var halfWidth = width2 / 2;
      var halfHeight = height2 / 2;
      cornerRadius = cornerRadius === "auto" ? getRoundRectangleRadius(width2, height2) : cornerRadius;
      cornerRadius = Math.min(halfWidth, halfHeight, cornerRadius);
      var diam = cornerRadius * 2;
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2, height2 - diam, [0, -1], padding)) {
        return true;
      }
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2 - diam, height2, [0, -1], padding)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX - halfWidth + cornerRadius, centerY - halfHeight + cornerRadius, padding)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX + halfWidth - cornerRadius, centerY - halfHeight + cornerRadius, padding)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX + halfWidth - cornerRadius, centerY + halfHeight - cornerRadius, padding)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX - halfWidth + cornerRadius, centerY + halfHeight - cornerRadius, padding)) {
        return true;
      }
      return false;
    }
  };
};
BRp$2.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes["cutrectangle"] = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: getCutRectangleCornerLength(),
    points: generateUnitNgonPointsFitToSquare(4, 0),
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl(this.name, context, centerX, centerY, width2, height2, null, cornerRadius);
    },
    generateCutTrianglePts: function generateCutTrianglePts(width2, height2, centerX, centerY, cornerRadius) {
      var cl = cornerRadius === "auto" ? this.cornerLength : cornerRadius;
      var hh = height2 / 2;
      var hw = width2 / 2;
      var xBegin = centerX - hw;
      var xEnd = centerX + hw;
      var yBegin = centerY - hh;
      var yEnd = centerY + hh;
      return {
        topLeft: [xBegin, yBegin + cl, xBegin + cl, yBegin, xBegin + cl, yBegin + cl],
        topRight: [xEnd - cl, yBegin, xEnd, yBegin + cl, xEnd - cl, yBegin + cl],
        bottomRight: [xEnd, yEnd - cl, xEnd - cl, yEnd, xEnd - cl, yEnd - cl],
        bottomLeft: [xBegin + cl, yEnd, xBegin, yEnd - cl, xBegin + cl, yEnd - cl]
      };
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      var cPts = this.generateCutTrianglePts(width2 + 2 * padding, height2 + 2 * padding, nodeX, nodeY, cornerRadius);
      var pts2 = [].concat.apply([], [cPts.topLeft.splice(0, 4), cPts.topRight.splice(0, 4), cPts.bottomRight.splice(0, 4), cPts.bottomLeft.splice(0, 4)]);
      return polygonIntersectLine(x3, y3, pts2, nodeX, nodeY);
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      var cl = cornerRadius === "auto" ? this.cornerLength : cornerRadius;
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2, height2 - 2 * cl, [0, -1], padding)) {
        return true;
      }
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2 - 2 * cl, height2, [0, -1], padding)) {
        return true;
      }
      var cutTrianglePts = this.generateCutTrianglePts(width2, height2, centerX, centerY);
      return pointInsidePolygonPoints(x3, y3, cutTrianglePts.topLeft) || pointInsidePolygonPoints(x3, y3, cutTrianglePts.topRight) || pointInsidePolygonPoints(x3, y3, cutTrianglePts.bottomRight) || pointInsidePolygonPoints(x3, y3, cutTrianglePts.bottomLeft);
    }
  };
};
BRp$2.generateBarrel = function() {
  return this.nodeShapes["barrel"] = {
    renderer: this,
    name: "barrel",
    points: generateUnitNgonPointsFitToSquare(4, 0),
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl(this.name, context, centerX, centerY, width2, height2);
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      var t0 = 0.15;
      var t1 = 0.5;
      var t2 = 0.85;
      var bPts = this.generateBarrelBezierPts(width2 + 2 * padding, height2 + 2 * padding, nodeX, nodeY);
      var approximateBarrelCurvePts = function approximateBarrelCurvePts2(pts3) {
        var m0 = qbezierPtAt({
          x: pts3[0],
          y: pts3[1]
        }, {
          x: pts3[2],
          y: pts3[3]
        }, {
          x: pts3[4],
          y: pts3[5]
        }, t0);
        var m1 = qbezierPtAt({
          x: pts3[0],
          y: pts3[1]
        }, {
          x: pts3[2],
          y: pts3[3]
        }, {
          x: pts3[4],
          y: pts3[5]
        }, t1);
        var m2 = qbezierPtAt({
          x: pts3[0],
          y: pts3[1]
        }, {
          x: pts3[2],
          y: pts3[3]
        }, {
          x: pts3[4],
          y: pts3[5]
        }, t2);
        return [pts3[0], pts3[1], m0.x, m0.y, m1.x, m1.y, m2.x, m2.y, pts3[4], pts3[5]];
      };
      var pts2 = [].concat(approximateBarrelCurvePts(bPts.topLeft), approximateBarrelCurvePts(bPts.topRight), approximateBarrelCurvePts(bPts.bottomRight), approximateBarrelCurvePts(bPts.bottomLeft));
      return polygonIntersectLine(x3, y3, pts2, nodeX, nodeY);
    },
    generateBarrelBezierPts: function generateBarrelBezierPts(width2, height2, centerX, centerY) {
      var hh = height2 / 2;
      var hw = width2 / 2;
      var xBegin = centerX - hw;
      var xEnd = centerX + hw;
      var yBegin = centerY - hh;
      var yEnd = centerY + hh;
      var curveConstants = getBarrelCurveConstants(width2, height2);
      var hOffset = curveConstants.heightOffset;
      var wOffset = curveConstants.widthOffset;
      var ctrlPtXOffset = curveConstants.ctrlPtOffsetPct * width2;
      var pts2 = {
        topLeft: [xBegin, yBegin + hOffset, xBegin + ctrlPtXOffset, yBegin, xBegin + wOffset, yBegin],
        topRight: [xEnd - wOffset, yBegin, xEnd - ctrlPtXOffset, yBegin, xEnd, yBegin + hOffset],
        bottomRight: [xEnd, yEnd - hOffset, xEnd - ctrlPtXOffset, yEnd, xEnd - wOffset, yEnd],
        bottomLeft: [xBegin + wOffset, yEnd, xBegin + ctrlPtXOffset, yEnd, xBegin, yEnd - hOffset]
      };
      pts2.topLeft.isTop = true;
      pts2.topRight.isTop = true;
      pts2.bottomLeft.isBottom = true;
      pts2.bottomRight.isBottom = true;
      return pts2;
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      var curveConstants = getBarrelCurveConstants(width2, height2);
      var hOffset = curveConstants.heightOffset;
      var wOffset = curveConstants.widthOffset;
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2, height2 - 2 * hOffset, [0, -1], padding)) {
        return true;
      }
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2 - 2 * wOffset, height2, [0, -1], padding)) {
        return true;
      }
      var barrelCurvePts = this.generateBarrelBezierPts(width2, height2, centerX, centerY);
      var getCurveT = function getCurveT2(x4, y4, curvePts) {
        var x0 = curvePts[4];
        var x1 = curvePts[2];
        var x22 = curvePts[0];
        var y02 = curvePts[5];
        var y23 = curvePts[1];
        var xMin = Math.min(x0, x22);
        var xMax = Math.max(x0, x22);
        var yMin = Math.min(y02, y23);
        var yMax = Math.max(y02, y23);
        if (xMin <= x4 && x4 <= xMax && yMin <= y4 && y4 <= yMax) {
          var coeff = bezierPtsToQuadCoeff(x0, x1, x22);
          var roots = solveQuadratic(coeff[0], coeff[1], coeff[2], x4);
          var validRoots = roots.filter(function(r2) {
            return 0 <= r2 && r2 <= 1;
          });
          if (validRoots.length > 0) {
            return validRoots[0];
          }
        }
        return null;
      };
      var curveRegions = Object.keys(barrelCurvePts);
      for (var i2 = 0; i2 < curveRegions.length; i2++) {
        var corner = curveRegions[i2];
        var cornerPts = barrelCurvePts[corner];
        var t2 = getCurveT(x3, y3, cornerPts);
        if (t2 == null) {
          continue;
        }
        var y0 = cornerPts[5];
        var y1 = cornerPts[3];
        var y22 = cornerPts[1];
        var bezY = qbezierAt(y0, y1, y22, t2);
        if (cornerPts.isTop && bezY <= y3) {
          return true;
        }
        if (cornerPts.isBottom && y3 <= bezY) {
          return true;
        }
      }
      return false;
    }
  };
};
BRp$2.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes["bottomroundrectangle"] = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: generateUnitNgonPointsFitToSquare(4, 0),
    draw: function draw(context, centerX, centerY, width2, height2, cornerRadius) {
      this.renderer.nodeShapeImpl(this.name, context, centerX, centerY, width2, height2, this.points, cornerRadius);
    },
    intersectLine: function intersectLine(nodeX, nodeY, width2, height2, x3, y3, padding, cornerRadius) {
      var topStartX = nodeX - (width2 / 2 + padding);
      var topStartY = nodeY - (height2 / 2 + padding);
      var topEndY = topStartY;
      var topEndX = nodeX + (width2 / 2 + padding);
      var topIntersections = finiteLinesIntersect(x3, y3, nodeX, nodeY, topStartX, topStartY, topEndX, topEndY, false);
      if (topIntersections.length > 0) {
        return topIntersections;
      }
      return roundRectangleIntersectLine(x3, y3, nodeX, nodeY, width2, height2, padding, cornerRadius);
    },
    checkPoint: function checkPoint(x3, y3, padding, width2, height2, centerX, centerY, cornerRadius) {
      cornerRadius = cornerRadius === "auto" ? getRoundRectangleRadius(width2, height2) : cornerRadius;
      var diam = 2 * cornerRadius;
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2, height2 - diam, [0, -1], padding)) {
        return true;
      }
      if (pointInsidePolygon(x3, y3, this.points, centerX, centerY, width2 - diam, height2, [0, -1], padding)) {
        return true;
      }
      var outerWidth = width2 / 2 + 2 * padding;
      var outerHeight = height2 / 2 + 2 * padding;
      var points = [centerX - outerWidth, centerY - outerHeight, centerX - outerWidth, centerY, centerX + outerWidth, centerY, centerX + outerWidth, centerY - outerHeight];
      if (pointInsidePolygonPoints(x3, y3, points)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX + width2 / 2 - cornerRadius, centerY + height2 / 2 - cornerRadius, padding)) {
        return true;
      }
      if (checkInEllipse(x3, y3, diam, diam, centerX - width2 / 2 + cornerRadius, centerY + height2 / 2 - cornerRadius, padding)) {
        return true;
      }
      return false;
    }
  };
};
BRp$2.registerNodeShapes = function() {
  var nodeShapes = this.nodeShapes = {};
  var renderer3 = this;
  this.generateEllipse();
  this.generatePolygon("triangle", generateUnitNgonPointsFitToSquare(3, 0));
  this.generateRoundPolygon("round-triangle", generateUnitNgonPointsFitToSquare(3, 0));
  this.generatePolygon("rectangle", generateUnitNgonPointsFitToSquare(4, 0));
  nodeShapes["square"] = nodeShapes["rectangle"];
  this.generateRoundRectangle();
  this.generateCutRectangle();
  this.generateBarrel();
  this.generateBottomRoundrectangle();
  {
    var diamondPoints = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", diamondPoints);
    this.generateRoundPolygon("round-diamond", diamondPoints);
  }
  this.generatePolygon("pentagon", generateUnitNgonPointsFitToSquare(5, 0));
  this.generateRoundPolygon("round-pentagon", generateUnitNgonPointsFitToSquare(5, 0));
  this.generatePolygon("hexagon", generateUnitNgonPointsFitToSquare(6, 0));
  this.generateRoundPolygon("round-hexagon", generateUnitNgonPointsFitToSquare(6, 0));
  this.generatePolygon("heptagon", generateUnitNgonPointsFitToSquare(7, 0));
  this.generateRoundPolygon("round-heptagon", generateUnitNgonPointsFitToSquare(7, 0));
  this.generatePolygon("octagon", generateUnitNgonPointsFitToSquare(8, 0));
  this.generateRoundPolygon("round-octagon", generateUnitNgonPointsFitToSquare(8, 0));
  var star5Points = new Array(20);
  {
    var outerPoints = generateUnitNgonPoints(5, 0);
    var innerPoints = generateUnitNgonPoints(5, Math.PI / 5);
    var innerRadius = 0.5 * (3 - Math.sqrt(5));
    innerRadius *= 1.57;
    for (var i2 = 0; i2 < innerPoints.length / 2; i2++) {
      innerPoints[i2 * 2] *= innerRadius;
      innerPoints[i2 * 2 + 1] *= innerRadius;
    }
    for (var i2 = 0; i2 < 20 / 4; i2++) {
      star5Points[i2 * 4] = outerPoints[i2 * 2];
      star5Points[i2 * 4 + 1] = outerPoints[i2 * 2 + 1];
      star5Points[i2 * 4 + 2] = innerPoints[i2 * 2];
      star5Points[i2 * 4 + 3] = innerPoints[i2 * 2 + 1];
    }
  }
  star5Points = fitPolygonToSquare(star5Points);
  this.generatePolygon("star", star5Points);
  this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]);
  this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]);
  this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]);
  this.nodeShapes["concavehexagon"] = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var tagPoints = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", tagPoints);
    this.generateRoundPolygon("round-tag", tagPoints);
  }
  nodeShapes.makePolygon = function(points) {
    var key = points.join("$");
    var name = "polygon-" + key;
    var shape;
    if (shape = this[name]) {
      return shape;
    }
    return renderer3.generatePolygon(name, points);
  };
};
var BRp$1 = {};
BRp$1.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
BRp$1.redraw = function(options2) {
  options2 = options2 || staticEmptyObject();
  var r2 = this;
  if (r2.averageRedrawTime === void 0) {
    r2.averageRedrawTime = 0;
  }
  if (r2.lastRedrawTime === void 0) {
    r2.lastRedrawTime = 0;
  }
  if (r2.lastDrawTime === void 0) {
    r2.lastDrawTime = 0;
  }
  r2.requestedFrame = true;
  r2.renderOptions = options2;
};
BRp$1.beforeRender = function(fn3, priority3) {
  if (this.destroyed) {
    return;
  }
  if (priority3 == null) {
    error("Priority is not optional for beforeRender");
  }
  var cbs = this.beforeRenderCallbacks;
  cbs.push({
    fn: fn3,
    priority: priority3
  });
  cbs.sort(function(a2, b2) {
    return b2.priority - a2.priority;
  });
};
var beforeRenderCallbacks = function beforeRenderCallbacks2(r2, willDraw, startTime) {
  var cbs = r2.beforeRenderCallbacks;
  for (var i2 = 0; i2 < cbs.length; i2++) {
    cbs[i2].fn(willDraw, startTime);
  }
};
BRp$1.startRenderLoop = function() {
  var r2 = this;
  var cy = r2.cy;
  if (r2.renderLoopStarted) {
    return;
  } else {
    r2.renderLoopStarted = true;
  }
  var _renderFn = function renderFn(requestTime) {
    if (r2.destroyed) {
      return;
    }
    if (cy.batching()) ;
    else if (r2.requestedFrame && !r2.skipFrame) {
      beforeRenderCallbacks(r2, true, requestTime);
      var startTime = performanceNow();
      r2.render(r2.renderOptions);
      var endTime = r2.lastDrawTime = performanceNow();
      if (r2.averageRedrawTime === void 0) {
        r2.averageRedrawTime = endTime - startTime;
      }
      if (r2.redrawCount === void 0) {
        r2.redrawCount = 0;
      }
      r2.redrawCount++;
      if (r2.redrawTotalTime === void 0) {
        r2.redrawTotalTime = 0;
      }
      var duration = endTime - startTime;
      r2.redrawTotalTime += duration;
      r2.lastRedrawTime = duration;
      r2.averageRedrawTime = r2.averageRedrawTime / 2 + duration / 2;
      r2.requestedFrame = false;
    } else {
      beforeRenderCallbacks(r2, false, requestTime);
    }
    r2.skipFrame = false;
    requestAnimationFrame(_renderFn);
  };
  requestAnimationFrame(_renderFn);
};
var BaseRenderer = function BaseRenderer2(options2) {
  this.init(options2);
};
var BR = BaseRenderer;
var BRp = BR.prototype;
BRp.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
BRp.init = function(options2) {
  var r2 = this;
  r2.options = options2;
  r2.cy = options2.cy;
  var ctr = r2.container = options2.cy.container();
  var containerWindow = r2.cy.window();
  if (containerWindow) {
    var document2 = containerWindow.document;
    var head = document2.head;
    var stylesheetId = "__________cytoscape_stylesheet";
    var className = "__________cytoscape_container";
    var stylesheetAlreadyExists = document2.getElementById(stylesheetId) != null;
    if (ctr.className.indexOf(className) < 0) {
      ctr.className = (ctr.className || "") + " " + className;
    }
    if (!stylesheetAlreadyExists) {
      var stylesheet3 = document2.createElement("style");
      stylesheet3.id = stylesheetId;
      stylesheet3.textContent = "." + className + " { position: relative; }";
      head.insertBefore(stylesheet3, head.children[0]);
    }
    var computedStyle = containerWindow.getComputedStyle(ctr);
    var position3 = computedStyle.getPropertyValue("position");
    if (position3 === "static") {
      warn("A Cytoscape container has style position:static and so can not use UI extensions properly");
    }
  }
  r2.selection = [void 0, void 0, void 0, void 0, 0];
  r2.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95];
  r2.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: false,
    initialPan: [null, null],
    capture: false
  };
  r2.dragData = {
    possibleDragElements: []
  };
  r2.touchData = {
    start: null,
    capture: false,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: true,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  };
  r2.redraws = 0;
  r2.showFps = options2.showFps;
  r2.debug = options2.debug;
  r2.webgl = options2.webgl;
  r2.hideEdgesOnViewport = options2.hideEdgesOnViewport;
  r2.textureOnViewport = options2.textureOnViewport;
  r2.wheelSensitivity = options2.wheelSensitivity;
  r2.motionBlurEnabled = options2.motionBlur;
  r2.forcedPixelRatio = number$1(options2.pixelRatio) ? options2.pixelRatio : null;
  r2.motionBlur = options2.motionBlur;
  r2.motionBlurOpacity = options2.motionBlurOpacity;
  r2.motionBlurTransparency = 1 - r2.motionBlurOpacity;
  r2.motionBlurPxRatio = 1;
  r2.mbPxRBlurry = 1;
  r2.minMbLowQualFrames = 4;
  r2.fullQualityMb = false;
  r2.clearedForMotionBlur = [];
  r2.desktopTapThreshold = options2.desktopTapThreshold;
  r2.desktopTapThreshold2 = options2.desktopTapThreshold * options2.desktopTapThreshold;
  r2.touchTapThreshold = options2.touchTapThreshold;
  r2.touchTapThreshold2 = options2.touchTapThreshold * options2.touchTapThreshold;
  r2.tapholdDuration = 500;
  r2.bindings = [];
  r2.beforeRenderCallbacks = [];
  r2.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  };
  r2.registerNodeShapes();
  r2.registerArrowShapes();
  r2.registerCalculationListeners();
};
BRp.notify = function(eventName, eles) {
  var r2 = this;
  var cy = r2.cy;
  if (this.destroyed) {
    return;
  }
  if (eventName === "init") {
    r2.load();
    return;
  }
  if (eventName === "destroy") {
    r2.destroy();
    return;
  }
  if (eventName === "add" || eventName === "remove" || eventName === "move" && cy.hasCompoundNodes() || eventName === "load" || eventName === "zorder" || eventName === "mount") {
    r2.invalidateCachedZSortedEles();
  }
  if (eventName === "viewport") {
    r2.redrawHint("select", true);
  }
  if (eventName === "gc") {
    r2.redrawHint("gc", true);
  }
  if (eventName === "load" || eventName === "resize" || eventName === "mount") {
    r2.invalidateContainerClientCoordsCache();
    r2.matchCanvasSize(r2.container);
  }
  r2.redrawHint("eles", true);
  r2.redrawHint("drag", true);
  this.startRenderLoop();
  this.redraw();
};
BRp.destroy = function() {
  var r2 = this;
  r2.destroyed = true;
  r2.cy.stopAnimationLoop();
  for (var i2 = 0; i2 < r2.bindings.length; i2++) {
    var binding = r2.bindings[i2];
    var b2 = binding;
    var tgt = b2.target;
    (tgt.off || tgt.removeEventListener).apply(tgt, b2.args);
  }
  r2.bindings = [];
  r2.beforeRenderCallbacks = [];
  r2.onUpdateEleCalcsFns = [];
  if (r2.removeObserver) {
    r2.removeObserver.disconnect();
  }
  if (r2.styleObserver) {
    r2.styleObserver.disconnect();
  }
  if (r2.resizeObserver) {
    r2.resizeObserver.disconnect();
  }
  if (r2.labelCalcDiv) {
    try {
      document.body.removeChild(r2.labelCalcDiv);
    } catch (e2) {
    }
  }
};
BRp.isHeadless = function() {
  return false;
};
[BRp$f, BRp$5, BRp$4, BRp$3, BRp$2, BRp$1].forEach(function(props) {
  extend(BRp, props);
});
var fullFpsTime = 1e3 / 60;
var defs = {
  setupDequeueing: function setupDequeueing(opts) {
    return function setupDequeueingImpl() {
      var self2 = this;
      var r2 = this.renderer;
      if (self2.dequeueingSetup) {
        return;
      } else {
        self2.dequeueingSetup = true;
      }
      var queueRedraw = debounce(function() {
        r2.redrawHint("eles", true);
        r2.redrawHint("drag", true);
        r2.redraw();
      }, opts.deqRedrawThreshold);
      var dequeue = function dequeue2(willDraw, frameStartTime) {
        var startTime = performanceNow();
        var avgRenderTime = r2.averageRedrawTime;
        var renderTime = r2.lastRedrawTime;
        var deqd = [];
        var extent2 = r2.cy.extent();
        var pixelRatio = r2.getPixelRatio();
        if (!willDraw) {
          r2.flushRenderedStyleQueue();
        }
        while (true) {
          var now = performanceNow();
          var duration = now - startTime;
          var frameDuration = now - frameStartTime;
          if (renderTime < fullFpsTime) {
            var timeAvailable = fullFpsTime - (willDraw ? avgRenderTime : 0);
            if (frameDuration >= opts.deqFastCost * timeAvailable) {
              break;
            }
          } else {
            if (willDraw) {
              if (duration >= opts.deqCost * renderTime || duration >= opts.deqAvgCost * avgRenderTime) {
                break;
              }
            } else if (frameDuration >= opts.deqNoDrawCost * fullFpsTime) {
              break;
            }
          }
          var thisDeqd = opts.deq(self2, pixelRatio, extent2);
          if (thisDeqd.length > 0) {
            for (var i2 = 0; i2 < thisDeqd.length; i2++) {
              deqd.push(thisDeqd[i2]);
            }
          } else {
            break;
          }
        }
        if (deqd.length > 0) {
          opts.onDeqd(self2, deqd);
          if (!willDraw && opts.shouldRedraw(self2, deqd, pixelRatio, extent2)) {
            queueRedraw();
          }
        }
      };
      var priority3 = opts.priority || noop$1;
      r2.beforeRender(dequeue, priority3(self2));
    };
  }
};
var ElementTextureCacheLookup = (function() {
  function ElementTextureCacheLookup2(getKey3) {
    var doesEleInvalidateKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : falsify;
    _classCallCheck(this, ElementTextureCacheLookup2);
    this.idsByKey = new Map$1();
    this.keyForId = new Map$1();
    this.cachesByLvl = new Map$1();
    this.lvls = [];
    this.getKey = getKey3;
    this.doesEleInvalidateKey = doesEleInvalidateKey;
  }
  return _createClass(ElementTextureCacheLookup2, [{
    key: "getIdsFor",
    value: function getIdsFor(key) {
      if (key == null) {
        error("Can not get id list for null key");
      }
      var idsByKey = this.idsByKey;
      var ids = this.idsByKey.get(key);
      if (!ids) {
        ids = new Set$1();
        idsByKey.set(key, ids);
      }
      return ids;
    }
  }, {
    key: "addIdForKey",
    value: function addIdForKey(key, id2) {
      if (key != null) {
        this.getIdsFor(key).add(id2);
      }
    }
  }, {
    key: "deleteIdForKey",
    value: function deleteIdForKey(key, id2) {
      if (key != null) {
        this.getIdsFor(key)["delete"](id2);
      }
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function getNumberOfIdsForKey(key) {
      if (key == null) {
        return 0;
      } else {
        return this.getIdsFor(key).size;
      }
    }
  }, {
    key: "updateKeyMappingFor",
    value: function updateKeyMappingFor(ele) {
      var id2 = ele.id();
      var prevKey = this.keyForId.get(id2);
      var currKey = this.getKey(ele);
      this.deleteIdForKey(prevKey, id2);
      this.addIdForKey(currKey, id2);
      this.keyForId.set(id2, currKey);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function deleteKeyMappingFor(ele) {
      var id2 = ele.id();
      var prevKey = this.keyForId.get(id2);
      this.deleteIdForKey(prevKey, id2);
      this.keyForId["delete"](id2);
    }
  }, {
    key: "keyHasChangedFor",
    value: function keyHasChangedFor(ele) {
      var id2 = ele.id();
      var prevKey = this.keyForId.get(id2);
      var newKey = this.getKey(ele);
      return prevKey !== newKey;
    }
  }, {
    key: "isInvalid",
    value: function isInvalid(ele) {
      return this.keyHasChangedFor(ele) || this.doesEleInvalidateKey(ele);
    }
  }, {
    key: "getCachesAt",
    value: function getCachesAt(lvl) {
      var cachesByLvl = this.cachesByLvl, lvls = this.lvls;
      var caches = cachesByLvl.get(lvl);
      if (!caches) {
        caches = new Map$1();
        cachesByLvl.set(lvl, caches);
        lvls.push(lvl);
      }
      return caches;
    }
  }, {
    key: "getCache",
    value: function getCache(key, lvl) {
      return this.getCachesAt(lvl).get(key);
    }
  }, {
    key: "get",
    value: function get2(ele, lvl) {
      var key = this.getKey(ele);
      var cache3 = this.getCache(key, lvl);
      if (cache3 != null) {
        this.updateKeyMappingFor(ele);
      }
      return cache3;
    }
  }, {
    key: "getForCachedKey",
    value: function getForCachedKey(ele, lvl) {
      var key = this.keyForId.get(ele.id());
      var cache3 = this.getCache(key, lvl);
      return cache3;
    }
  }, {
    key: "hasCache",
    value: function hasCache(key, lvl) {
      return this.getCachesAt(lvl).has(key);
    }
  }, {
    key: "has",
    value: function has(ele, lvl) {
      var key = this.getKey(ele);
      return this.hasCache(key, lvl);
    }
  }, {
    key: "setCache",
    value: function setCache(key, lvl, cache3) {
      cache3.key = key;
      this.getCachesAt(lvl).set(key, cache3);
    }
  }, {
    key: "set",
    value: function set2(ele, lvl, cache3) {
      var key = this.getKey(ele);
      this.setCache(key, lvl, cache3);
      this.updateKeyMappingFor(ele);
    }
  }, {
    key: "deleteCache",
    value: function deleteCache(key, lvl) {
      this.getCachesAt(lvl)["delete"](key);
    }
  }, {
    key: "delete",
    value: function _delete(ele, lvl) {
      var key = this.getKey(ele);
      this.deleteCache(key, lvl);
    }
  }, {
    key: "invalidateKey",
    value: function invalidateKey(key) {
      var _this = this;
      this.lvls.forEach(function(lvl) {
        return _this.deleteCache(key, lvl);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function invalidate(ele) {
      var id2 = ele.id();
      var key = this.keyForId.get(id2);
      this.deleteKeyMappingFor(ele);
      var entireKeyInvalidated = this.doesEleInvalidateKey(ele);
      if (entireKeyInvalidated) {
        this.invalidateKey(key);
      }
      return entireKeyInvalidated || this.getNumberOfIdsForKey(key) === 0;
    }
  }]);
})();
var minTxrH = 25;
var txrStepH = 50;
var minLvl$1 = -4;
var maxLvl$1 = 3;
var maxZoom$1 = 7.99;
var eleTxrSpacing = 8;
var defTxrWidth = 1024;
var maxTxrW = 1024;
var maxTxrH = 1024;
var minUtility = 0.2;
var maxFullness = 0.8;
var maxFullnessChecks = 10;
var deqCost$1 = 0.15;
var deqAvgCost$1 = 0.1;
var deqNoDrawCost$1 = 0.9;
var deqFastCost$1 = 0.9;
var deqRedrawThreshold$1 = 100;
var maxDeqSize$1 = 1;
var getTxrReasons = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
};
var initDefaults = defaults$g({
  getKey: null,
  doesEleInvalidateKey: falsify,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: trueify,
  allowEdgeTxrCaching: true,
  allowParentTxrCaching: true
});
var ElementTextureCache = function ElementTextureCache2(renderer3, initOptions) {
  var self2 = this;
  self2.renderer = renderer3;
  self2.onDequeues = [];
  var opts = initDefaults(initOptions);
  extend(self2, opts);
  self2.lookup = new ElementTextureCacheLookup(opts.getKey, opts.doesEleInvalidateKey);
  self2.setupDequeueing();
};
var ETCp = ElementTextureCache.prototype;
ETCp.reasons = getTxrReasons;
ETCp.getTextureQueue = function(txrH) {
  var self2 = this;
  self2.eleImgCaches = self2.eleImgCaches || {};
  return self2.eleImgCaches[txrH] = self2.eleImgCaches[txrH] || [];
};
ETCp.getRetiredTextureQueue = function(txrH) {
  var self2 = this;
  var rtxtrQs = self2.eleImgCaches.retired = self2.eleImgCaches.retired || {};
  var rtxtrQ = rtxtrQs[txrH] = rtxtrQs[txrH] || [];
  return rtxtrQ;
};
ETCp.getElementQueue = function() {
  var self2 = this;
  var q = self2.eleCacheQueue = self2.eleCacheQueue || new Heap(function(a2, b2) {
    return b2.reqs - a2.reqs;
  });
  return q;
};
ETCp.getElementKeyToQueue = function() {
  var self2 = this;
  var k2q = self2.eleKeyToCacheQueue = self2.eleKeyToCacheQueue || {};
  return k2q;
};
ETCp.getElement = function(ele, bb, pxRatio, lvl, reason) {
  var self2 = this;
  var r2 = this.renderer;
  var zoom2 = r2.cy.zoom();
  var lookup2 = this.lookup;
  if (!bb || bb.w === 0 || bb.h === 0 || isNaN(bb.w) || isNaN(bb.h) || !ele.visible() || ele.removed()) {
    return null;
  }
  if (!self2.allowEdgeTxrCaching && ele.isEdge() || !self2.allowParentTxrCaching && ele.isParent()) {
    return null;
  }
  if (lvl == null) {
    lvl = Math.ceil(log2(zoom2 * pxRatio));
  }
  if (lvl < minLvl$1) {
    lvl = minLvl$1;
  } else if (zoom2 >= maxZoom$1 || lvl > maxLvl$1) {
    return null;
  }
  var scale2 = Math.pow(2, lvl);
  var eleScaledH = bb.h * scale2;
  var eleScaledW = bb.w * scale2;
  var scaledLabelShown = r2.eleTextBiggerThanMin(ele, scale2);
  if (!this.isVisible(ele, scaledLabelShown)) {
    return null;
  }
  var eleCache = lookup2.get(ele, lvl);
  if (eleCache && eleCache.invalidated) {
    eleCache.invalidated = false;
    eleCache.texture.invalidatedWidth -= eleCache.width;
  }
  if (eleCache) {
    return eleCache;
  }
  var txrH;
  if (eleScaledH <= minTxrH) {
    txrH = minTxrH;
  } else if (eleScaledH <= txrStepH) {
    txrH = txrStepH;
  } else {
    txrH = Math.ceil(eleScaledH / txrStepH) * txrStepH;
  }
  if (eleScaledH > maxTxrH || eleScaledW > maxTxrW) {
    return null;
  }
  var txrQ = self2.getTextureQueue(txrH);
  var txr = txrQ[txrQ.length - 2];
  var addNewTxr = function addNewTxr2() {
    return self2.recycleTexture(txrH, eleScaledW) || self2.addTexture(txrH, eleScaledW);
  };
  if (!txr) {
    txr = txrQ[txrQ.length - 1];
  }
  if (!txr) {
    txr = addNewTxr();
  }
  if (txr.width - txr.usedWidth < eleScaledW) {
    txr = addNewTxr();
  }
  var scalableFrom = function scalableFrom2(otherCache) {
    return otherCache && otherCache.scaledLabelShown === scaledLabelShown;
  };
  var deqing = reason && reason === getTxrReasons.dequeue;
  var highQualityReq = reason && reason === getTxrReasons.highQuality;
  var downscaleReq = reason && reason === getTxrReasons.downscale;
  var higherCache;
  for (var l2 = lvl + 1; l2 <= maxLvl$1; l2++) {
    var c2 = lookup2.get(ele, l2);
    if (c2) {
      higherCache = c2;
      break;
    }
  }
  var oneUpCache = higherCache && higherCache.level === lvl + 1 ? higherCache : null;
  var downscale = function downscale2() {
    txr.context.drawImage(oneUpCache.texture.canvas, oneUpCache.x, 0, oneUpCache.width, oneUpCache.height, txr.usedWidth, 0, eleScaledW, eleScaledH);
  };
  txr.context.setTransform(1, 0, 0, 1, 0, 0);
  txr.context.clearRect(txr.usedWidth, 0, eleScaledW, txrH);
  if (scalableFrom(oneUpCache)) {
    downscale();
  } else if (scalableFrom(higherCache)) {
    if (highQualityReq) {
      for (var _l = higherCache.level; _l > lvl; _l--) {
        oneUpCache = self2.getElement(ele, bb, pxRatio, _l, getTxrReasons.downscale);
      }
      downscale();
    } else {
      self2.queueElement(ele, higherCache.level - 1);
      return higherCache;
    }
  } else {
    var lowerCache;
    if (!deqing && !highQualityReq && !downscaleReq) {
      for (var _l2 = lvl - 1; _l2 >= minLvl$1; _l2--) {
        var _c = lookup2.get(ele, _l2);
        if (_c) {
          lowerCache = _c;
          break;
        }
      }
    }
    if (scalableFrom(lowerCache)) {
      self2.queueElement(ele, lvl);
      return lowerCache;
    }
    txr.context.translate(txr.usedWidth, 0);
    txr.context.scale(scale2, scale2);
    this.drawElement(txr.context, ele, bb, scaledLabelShown, false);
    txr.context.scale(1 / scale2, 1 / scale2);
    txr.context.translate(-txr.usedWidth, 0);
  }
  eleCache = {
    x: txr.usedWidth,
    texture: txr,
    level: lvl,
    scale: scale2,
    width: eleScaledW,
    height: eleScaledH,
    scaledLabelShown
  };
  txr.usedWidth += Math.ceil(eleScaledW + eleTxrSpacing);
  txr.eleCaches.push(eleCache);
  lookup2.set(ele, lvl, eleCache);
  self2.checkTextureFullness(txr);
  return eleCache;
};
ETCp.invalidateElements = function(eles) {
  for (var i2 = 0; i2 < eles.length; i2++) {
    this.invalidateElement(eles[i2]);
  }
};
ETCp.invalidateElement = function(ele) {
  var self2 = this;
  var lookup2 = self2.lookup;
  var caches = [];
  var invalid = lookup2.isInvalid(ele);
  if (!invalid) {
    return;
  }
  for (var lvl = minLvl$1; lvl <= maxLvl$1; lvl++) {
    var cache3 = lookup2.getForCachedKey(ele, lvl);
    if (cache3) {
      caches.push(cache3);
    }
  }
  var noOtherElesUseCache = lookup2.invalidate(ele);
  if (noOtherElesUseCache) {
    for (var i2 = 0; i2 < caches.length; i2++) {
      var _cache = caches[i2];
      var txr = _cache.texture;
      txr.invalidatedWidth += _cache.width;
      _cache.invalidated = true;
      self2.checkTextureUtility(txr);
    }
  }
  self2.removeFromQueue(ele);
};
ETCp.checkTextureUtility = function(txr) {
  if (txr.invalidatedWidth >= minUtility * txr.width) {
    this.retireTexture(txr);
  }
};
ETCp.checkTextureFullness = function(txr) {
  var self2 = this;
  var txrQ = self2.getTextureQueue(txr.height);
  if (txr.usedWidth / txr.width > maxFullness && txr.fullnessChecks >= maxFullnessChecks) {
    removeFromArray(txrQ, txr);
  } else {
    txr.fullnessChecks++;
  }
};
ETCp.retireTexture = function(txr) {
  var self2 = this;
  var txrH = txr.height;
  var txrQ = self2.getTextureQueue(txrH);
  var lookup2 = this.lookup;
  removeFromArray(txrQ, txr);
  txr.retired = true;
  var eleCaches = txr.eleCaches;
  for (var i2 = 0; i2 < eleCaches.length; i2++) {
    var eleCache = eleCaches[i2];
    lookup2.deleteCache(eleCache.key, eleCache.level);
  }
  clearArray(eleCaches);
  var rtxtrQ = self2.getRetiredTextureQueue(txrH);
  rtxtrQ.push(txr);
};
ETCp.addTexture = function(txrH, minW) {
  var self2 = this;
  var txrQ = self2.getTextureQueue(txrH);
  var txr = {};
  txrQ.push(txr);
  txr.eleCaches = [];
  txr.height = txrH;
  txr.width = Math.max(defTxrWidth, minW);
  txr.usedWidth = 0;
  txr.invalidatedWidth = 0;
  txr.fullnessChecks = 0;
  txr.canvas = self2.renderer.makeOffscreenCanvas(txr.width, txr.height);
  txr.context = txr.canvas.getContext("2d");
  return txr;
};
ETCp.recycleTexture = function(txrH, minW) {
  var self2 = this;
  var txrQ = self2.getTextureQueue(txrH);
  var rtxtrQ = self2.getRetiredTextureQueue(txrH);
  for (var i2 = 0; i2 < rtxtrQ.length; i2++) {
    var txr = rtxtrQ[i2];
    if (txr.width >= minW) {
      txr.retired = false;
      txr.usedWidth = 0;
      txr.invalidatedWidth = 0;
      txr.fullnessChecks = 0;
      clearArray(txr.eleCaches);
      txr.context.setTransform(1, 0, 0, 1, 0, 0);
      txr.context.clearRect(0, 0, txr.width, txr.height);
      removeFromArray(rtxtrQ, txr);
      txrQ.push(txr);
      return txr;
    }
  }
};
ETCp.queueElement = function(ele, lvl) {
  var self2 = this;
  var q = self2.getElementQueue();
  var k2q = self2.getElementKeyToQueue();
  var key = this.getKey(ele);
  var existingReq = k2q[key];
  if (existingReq) {
    existingReq.level = Math.max(existingReq.level, lvl);
    existingReq.eles.merge(ele);
    existingReq.reqs++;
    q.updateItem(existingReq);
  } else {
    var req = {
      eles: ele.spawn().merge(ele),
      level: lvl,
      reqs: 1,
      key
    };
    q.push(req);
    k2q[key] = req;
  }
};
ETCp.dequeue = function(pxRatio) {
  var self2 = this;
  var q = self2.getElementQueue();
  var k2q = self2.getElementKeyToQueue();
  var dequeued = [];
  var lookup2 = self2.lookup;
  for (var i2 = 0; i2 < maxDeqSize$1; i2++) {
    if (q.size() > 0) {
      var req = q.pop();
      var key = req.key;
      var ele = req.eles[0];
      var cacheExists = lookup2.hasCache(ele, req.level);
      k2q[key] = null;
      if (cacheExists) {
        continue;
      }
      dequeued.push(req);
      var bb = self2.getBoundingBox(ele);
      self2.getElement(ele, bb, pxRatio, req.level, getTxrReasons.dequeue);
    } else {
      break;
    }
  }
  return dequeued;
};
ETCp.removeFromQueue = function(ele) {
  var self2 = this;
  var q = self2.getElementQueue();
  var k2q = self2.getElementKeyToQueue();
  var key = this.getKey(ele);
  var req = k2q[key];
  if (req != null) {
    if (req.eles.length === 1) {
      req.reqs = MAX_INT$1;
      q.updateItem(req);
      q.pop();
      k2q[key] = null;
    } else {
      req.eles.unmerge(ele);
    }
  }
};
ETCp.onDequeue = function(fn3) {
  this.onDequeues.push(fn3);
};
ETCp.offDequeue = function(fn3) {
  removeFromArray(this.onDequeues, fn3);
};
ETCp.setupDequeueing = defs.setupDequeueing({
  deqRedrawThreshold: deqRedrawThreshold$1,
  deqCost: deqCost$1,
  deqAvgCost: deqAvgCost$1,
  deqNoDrawCost: deqNoDrawCost$1,
  deqFastCost: deqFastCost$1,
  deq: function deq(self2, pxRatio, extent2) {
    return self2.dequeue(pxRatio, extent2);
  },
  onDeqd: function onDeqd(self2, deqd) {
    for (var i2 = 0; i2 < self2.onDequeues.length; i2++) {
      var fn3 = self2.onDequeues[i2];
      fn3(deqd);
    }
  },
  shouldRedraw: function shouldRedraw(self2, deqd, pxRatio, extent2) {
    for (var i2 = 0; i2 < deqd.length; i2++) {
      var eles = deqd[i2].eles;
      for (var j = 0; j < eles.length; j++) {
        var bb = eles[j].boundingBox();
        if (boundingBoxesIntersect(bb, extent2)) {
          return true;
        }
      }
    }
    return false;
  },
  priority: function priority(self2) {
    return self2.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var defNumLayers = 1;
var minLvl = -4;
var maxLvl = 2;
var maxZoom2 = 3.99;
var deqRedrawThreshold = 50;
var refineEleDebounceTime = 50;
var deqCost = 0.15;
var deqAvgCost = 0.1;
var deqNoDrawCost = 0.9;
var deqFastCost = 0.9;
var maxDeqSize = 1;
var invalidThreshold = 250;
var maxLayerArea = 4e3 * 4e3;
var maxLayerDim = 32767;
var useHighQualityEleTxrReqs = true;
var LayeredTextureCache = function LayeredTextureCache2(renderer3) {
  var self2 = this;
  var r2 = self2.renderer = renderer3;
  var cy = r2.cy;
  self2.layersByLevel = {};
  self2.firstGet = true;
  self2.lastInvalidationTime = performanceNow() - 2 * invalidThreshold;
  self2.skipping = false;
  self2.eleTxrDeqs = cy.collection();
  self2.scheduleElementRefinement = debounce(function() {
    self2.refineElementTextures(self2.eleTxrDeqs);
    self2.eleTxrDeqs.unmerge(self2.eleTxrDeqs);
  }, refineEleDebounceTime);
  r2.beforeRender(function(willDraw, now) {
    if (now - self2.lastInvalidationTime <= invalidThreshold) {
      self2.skipping = true;
    } else {
      self2.skipping = false;
    }
  }, r2.beforeRenderPriorities.lyrTxrSkip);
  var qSort = function qSort2(a2, b2) {
    return b2.reqs - a2.reqs;
  };
  self2.layersQueue = new Heap(qSort);
  self2.setupDequeueing();
};
var LTCp = LayeredTextureCache.prototype;
var layerIdPool = 0;
var MAX_INT = Math.pow(2, 53) - 1;
LTCp.makeLayer = function(bb, lvl) {
  var scale2 = Math.pow(2, lvl);
  var w2 = Math.ceil(bb.w * scale2);
  var h2 = Math.ceil(bb.h * scale2);
  var canvas = this.renderer.makeOffscreenCanvas(w2, h2);
  var layer = {
    id: layerIdPool = ++layerIdPool % MAX_INT,
    bb,
    level: lvl,
    width: w2,
    height: h2,
    canvas,
    context: canvas.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  };
  var cxt = layer.context;
  var dx = -layer.bb.x1;
  var dy = -layer.bb.y1;
  cxt.scale(scale2, scale2);
  cxt.translate(dx, dy);
  return layer;
};
LTCp.getLayers = function(eles, pxRatio, lvl) {
  var self2 = this;
  var r2 = self2.renderer;
  var cy = r2.cy;
  var zoom2 = cy.zoom();
  var firstGet = self2.firstGet;
  self2.firstGet = false;
  if (lvl == null) {
    lvl = Math.ceil(log2(zoom2 * pxRatio));
    if (lvl < minLvl) {
      lvl = minLvl;
    } else if (zoom2 >= maxZoom2 || lvl > maxLvl) {
      return null;
    }
  }
  self2.validateLayersElesOrdering(lvl, eles);
  var layersByLvl = self2.layersByLevel;
  var scale2 = Math.pow(2, lvl);
  var layers = layersByLvl[lvl] = layersByLvl[lvl] || [];
  var bb;
  var lvlComplete = self2.levelIsComplete(lvl, eles);
  var tmpLayers;
  var checkTempLevels = function checkTempLevels2() {
    var canUseAsTmpLvl = function canUseAsTmpLvl2(l2) {
      self2.validateLayersElesOrdering(l2, eles);
      if (self2.levelIsComplete(l2, eles)) {
        tmpLayers = layersByLvl[l2];
        return true;
      }
    };
    var checkLvls = function checkLvls2(dir) {
      if (tmpLayers) {
        return;
      }
      for (var l2 = lvl + dir; minLvl <= l2 && l2 <= maxLvl; l2 += dir) {
        if (canUseAsTmpLvl(l2)) {
          break;
        }
      }
    };
    checkLvls(1);
    checkLvls(-1);
    for (var i3 = layers.length - 1; i3 >= 0; i3--) {
      var layer2 = layers[i3];
      if (layer2.invalid) {
        removeFromArray(layers, layer2);
      }
    }
  };
  if (!lvlComplete) {
    checkTempLevels();
  } else {
    return layers;
  }
  var getBb = function getBb2() {
    if (!bb) {
      bb = makeBoundingBox();
      for (var i3 = 0; i3 < eles.length; i3++) {
        updateBoundingBox(bb, eles[i3].boundingBox());
      }
    }
    return bb;
  };
  var makeLayer = function makeLayer2(opts) {
    opts = opts || {};
    var after = opts.after;
    getBb();
    var w2 = Math.ceil(bb.w * scale2);
    var h2 = Math.ceil(bb.h * scale2);
    if (w2 > maxLayerDim || h2 > maxLayerDim) {
      return null;
    }
    var area = w2 * h2;
    if (area > maxLayerArea) {
      return null;
    }
    var layer2 = self2.makeLayer(bb, lvl);
    if (after != null) {
      var index = layers.indexOf(after) + 1;
      layers.splice(index, 0, layer2);
    } else if (opts.insert === void 0 || opts.insert) {
      layers.unshift(layer2);
    }
    return layer2;
  };
  if (self2.skipping && !firstGet) {
    return null;
  }
  var layer = null;
  var maxElesPerLayer = eles.length / defNumLayers;
  var allowLazyQueueing = !firstGet;
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    var rs = ele._private.rscratch;
    var caches = rs.imgLayerCaches = rs.imgLayerCaches || {};
    var existingLayer = caches[lvl];
    if (existingLayer) {
      layer = existingLayer;
      continue;
    }
    if (!layer || layer.eles.length >= maxElesPerLayer || !boundingBoxInBoundingBox(layer.bb, ele.boundingBox())) {
      layer = makeLayer({
        insert: true,
        after: layer
      });
      if (!layer) {
        return null;
      }
    }
    if (tmpLayers || allowLazyQueueing) {
      self2.queueLayer(layer, ele);
    } else {
      self2.drawEleInLayer(layer, ele, lvl, pxRatio);
    }
    layer.eles.push(ele);
    caches[lvl] = layer;
  }
  if (tmpLayers) {
    return tmpLayers;
  }
  if (allowLazyQueueing) {
    return null;
  }
  return layers;
};
LTCp.getEleLevelForLayerLevel = function(lvl, pxRatio) {
  return lvl;
};
LTCp.drawEleInLayer = function(layer, ele, lvl, pxRatio) {
  var self2 = this;
  var r2 = this.renderer;
  var context = layer.context;
  var bb = ele.boundingBox();
  if (bb.w === 0 || bb.h === 0 || !ele.visible()) {
    return;
  }
  lvl = self2.getEleLevelForLayerLevel(lvl, pxRatio);
  {
    r2.setImgSmoothing(context, false);
  }
  {
    r2.drawCachedElement(context, ele, null, null, lvl, useHighQualityEleTxrReqs);
  }
  {
    r2.setImgSmoothing(context, true);
  }
};
LTCp.levelIsComplete = function(lvl, eles) {
  var self2 = this;
  var layers = self2.layersByLevel[lvl];
  if (!layers || layers.length === 0) {
    return false;
  }
  var numElesInLayers = 0;
  for (var i2 = 0; i2 < layers.length; i2++) {
    var layer = layers[i2];
    if (layer.reqs > 0) {
      return false;
    }
    if (layer.invalid) {
      return false;
    }
    numElesInLayers += layer.eles.length;
  }
  if (numElesInLayers !== eles.length) {
    return false;
  }
  return true;
};
LTCp.validateLayersElesOrdering = function(lvl, eles) {
  var layers = this.layersByLevel[lvl];
  if (!layers) {
    return;
  }
  for (var i2 = 0; i2 < layers.length; i2++) {
    var layer = layers[i2];
    var offset = -1;
    for (var j = 0; j < eles.length; j++) {
      if (layer.eles[0] === eles[j]) {
        offset = j;
        break;
      }
    }
    if (offset < 0) {
      this.invalidateLayer(layer);
      continue;
    }
    var o2 = offset;
    for (var j = 0; j < layer.eles.length; j++) {
      if (layer.eles[j] !== eles[o2 + j]) {
        this.invalidateLayer(layer);
        break;
      }
    }
  }
};
LTCp.updateElementsInLayers = function(eles, update) {
  var self2 = this;
  var isEles = element(eles[0]);
  for (var i2 = 0; i2 < eles.length; i2++) {
    var req = isEles ? null : eles[i2];
    var ele = isEles ? eles[i2] : eles[i2].ele;
    var rs = ele._private.rscratch;
    var caches = rs.imgLayerCaches = rs.imgLayerCaches || {};
    for (var l2 = minLvl; l2 <= maxLvl; l2++) {
      var layer = caches[l2];
      if (!layer) {
        continue;
      }
      if (req && self2.getEleLevelForLayerLevel(layer.level) !== req.level) {
        continue;
      }
      update(layer, ele, req);
    }
  }
};
LTCp.haveLayers = function() {
  var self2 = this;
  var haveLayers = false;
  for (var l2 = minLvl; l2 <= maxLvl; l2++) {
    var layers = self2.layersByLevel[l2];
    if (layers && layers.length > 0) {
      haveLayers = true;
      break;
    }
  }
  return haveLayers;
};
LTCp.invalidateElements = function(eles) {
  var self2 = this;
  if (eles.length === 0) {
    return;
  }
  self2.lastInvalidationTime = performanceNow();
  if (eles.length === 0 || !self2.haveLayers()) {
    return;
  }
  self2.updateElementsInLayers(eles, function invalAssocLayers(layer, ele, req) {
    self2.invalidateLayer(layer);
  });
};
LTCp.invalidateLayer = function(layer) {
  this.lastInvalidationTime = performanceNow();
  if (layer.invalid) {
    return;
  }
  var lvl = layer.level;
  var eles = layer.eles;
  var layers = this.layersByLevel[lvl];
  removeFromArray(layers, layer);
  layer.elesQueue = [];
  layer.invalid = true;
  if (layer.replacement) {
    layer.replacement.invalid = true;
  }
  for (var i2 = 0; i2 < eles.length; i2++) {
    var caches = eles[i2]._private.rscratch.imgLayerCaches;
    if (caches) {
      caches[lvl] = null;
    }
  }
};
LTCp.refineElementTextures = function(eles) {
  var self2 = this;
  self2.updateElementsInLayers(eles, function refineEachEle(layer, ele, req) {
    var rLyr = layer.replacement;
    if (!rLyr) {
      rLyr = layer.replacement = self2.makeLayer(layer.bb, layer.level);
      rLyr.replaces = layer;
      rLyr.eles = layer.eles;
    }
    if (!rLyr.reqs) {
      for (var i2 = 0; i2 < rLyr.eles.length; i2++) {
        self2.queueLayer(rLyr, rLyr.eles[i2]);
      }
    }
  });
};
LTCp.enqueueElementRefinement = function(ele) {
  this.eleTxrDeqs.merge(ele);
  this.scheduleElementRefinement();
};
LTCp.queueLayer = function(layer, ele) {
  var self2 = this;
  var q = self2.layersQueue;
  var elesQ = layer.elesQueue;
  var hasId = elesQ.hasId = elesQ.hasId || {};
  if (layer.replacement) {
    return;
  }
  if (ele) {
    if (hasId[ele.id()]) {
      return;
    }
    elesQ.push(ele);
    hasId[ele.id()] = true;
  }
  if (layer.reqs) {
    layer.reqs++;
    q.updateItem(layer);
  } else {
    layer.reqs = 1;
    q.push(layer);
  }
};
LTCp.dequeue = function(pxRatio) {
  var self2 = this;
  var q = self2.layersQueue;
  var deqd = [];
  var eleDeqs = 0;
  while (eleDeqs < maxDeqSize) {
    if (q.size() === 0) {
      break;
    }
    var layer = q.peek();
    if (layer.replacement) {
      q.pop();
      continue;
    }
    if (layer.replaces && layer !== layer.replaces.replacement) {
      q.pop();
      continue;
    }
    if (layer.invalid) {
      q.pop();
      continue;
    }
    var ele = layer.elesQueue.shift();
    if (ele) {
      self2.drawEleInLayer(layer, ele, layer.level, pxRatio);
      eleDeqs++;
    }
    if (deqd.length === 0) {
      deqd.push(true);
    }
    if (layer.elesQueue.length === 0) {
      q.pop();
      layer.reqs = 0;
      if (layer.replaces) {
        self2.applyLayerReplacement(layer);
      }
      self2.requestRedraw();
    }
  }
  return deqd;
};
LTCp.applyLayerReplacement = function(layer) {
  var self2 = this;
  var layersInLevel = self2.layersByLevel[layer.level];
  var replaced = layer.replaces;
  var index = layersInLevel.indexOf(replaced);
  if (index < 0 || replaced.invalid) {
    return;
  }
  layersInLevel[index] = layer;
  for (var i2 = 0; i2 < layer.eles.length; i2++) {
    var _p = layer.eles[i2]._private;
    var cache3 = _p.imgLayerCaches = _p.imgLayerCaches || {};
    if (cache3) {
      cache3[layer.level] = layer;
    }
  }
  self2.requestRedraw();
};
LTCp.requestRedraw = debounce(function() {
  var r2 = this.renderer;
  r2.redrawHint("eles", true);
  r2.redrawHint("drag", true);
  r2.redraw();
}, 100);
LTCp.setupDequeueing = defs.setupDequeueing({
  deqRedrawThreshold,
  deqCost,
  deqAvgCost,
  deqNoDrawCost,
  deqFastCost,
  deq: function deq2(self2, pxRatio) {
    return self2.dequeue(pxRatio);
  },
  onDeqd: noop$1,
  shouldRedraw: trueify,
  priority: function priority2(self2) {
    return self2.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var CRp$b = {};
var impl;
function polygon(context, points) {
  for (var i2 = 0; i2 < points.length; i2++) {
    var pt = points[i2];
    context.lineTo(pt.x, pt.y);
  }
}
function triangleBackcurve(context, points, controlPoint) {
  var firstPt;
  for (var i2 = 0; i2 < points.length; i2++) {
    var pt = points[i2];
    if (i2 === 0) {
      firstPt = pt;
    }
    context.lineTo(pt.x, pt.y);
  }
  context.quadraticCurveTo(controlPoint.x, controlPoint.y, firstPt.x, firstPt.y);
}
function triangleTee(context, trianglePoints, teePoints) {
  if (context.beginPath) {
    context.beginPath();
  }
  var triPts = trianglePoints;
  for (var i2 = 0; i2 < triPts.length; i2++) {
    var pt = triPts[i2];
    context.lineTo(pt.x, pt.y);
  }
  var teePts = teePoints;
  var firstTeePt = teePoints[0];
  context.moveTo(firstTeePt.x, firstTeePt.y);
  for (var i2 = 1; i2 < teePts.length; i2++) {
    var pt = teePts[i2];
    context.lineTo(pt.x, pt.y);
  }
  if (context.closePath) {
    context.closePath();
  }
}
function circleTriangle(context, trianglePoints, rx, ry, r2) {
  if (context.beginPath) {
    context.beginPath();
  }
  context.arc(rx, ry, r2, 0, Math.PI * 2, false);
  var triPts = trianglePoints;
  var firstTrPt = triPts[0];
  context.moveTo(firstTrPt.x, firstTrPt.y);
  for (var i2 = 0; i2 < triPts.length; i2++) {
    var pt = triPts[i2];
    context.lineTo(pt.x, pt.y);
  }
  if (context.closePath) {
    context.closePath();
  }
}
function circle$1(context, rx, ry, r2) {
  context.arc(rx, ry, r2, 0, Math.PI * 2, false);
}
CRp$b.arrowShapeImpl = function(name) {
  return (impl || (impl = {
    "polygon": polygon,
    "triangle-backcurve": triangleBackcurve,
    "triangle-tee": triangleTee,
    "circle-triangle": circleTriangle,
    "triangle-cross": triangleTee,
    "circle": circle$1
  }))[name];
};
var CRp$a = {};
CRp$a.drawElement = function(context, ele, shiftToOriginWithBb, showLabel, showOverlay, showOpacity) {
  var r2 = this;
  if (ele.isNode()) {
    r2.drawNode(context, ele, shiftToOriginWithBb, showLabel, showOverlay, showOpacity);
  } else {
    r2.drawEdge(context, ele, shiftToOriginWithBb, showLabel, showOverlay, showOpacity);
  }
};
CRp$a.drawElementOverlay = function(context, ele) {
  var r2 = this;
  if (ele.isNode()) {
    r2.drawNodeOverlay(context, ele);
  } else {
    r2.drawEdgeOverlay(context, ele);
  }
};
CRp$a.drawElementUnderlay = function(context, ele) {
  var r2 = this;
  if (ele.isNode()) {
    r2.drawNodeUnderlay(context, ele);
  } else {
    r2.drawEdgeUnderlay(context, ele);
  }
};
CRp$a.drawCachedElementPortion = function(context, ele, eleTxrCache, pxRatio, lvl, reason, getRotation, getOpacity3) {
  var r2 = this;
  var bb = eleTxrCache.getBoundingBox(ele);
  if (bb.w === 0 || bb.h === 0) {
    return;
  }
  var eleCache = eleTxrCache.getElement(ele, bb, pxRatio, lvl, reason);
  if (eleCache != null) {
    var opacity = getOpacity3(r2, ele);
    if (opacity === 0) {
      return;
    }
    var theta = getRotation(r2, ele);
    var x1 = bb.x1, y1 = bb.y1, w2 = bb.w, h2 = bb.h;
    var x3, y3, sx, sy, smooth;
    if (theta !== 0) {
      var rotPt = eleTxrCache.getRotationPoint(ele);
      sx = rotPt.x;
      sy = rotPt.y;
      context.translate(sx, sy);
      context.rotate(theta);
      smooth = r2.getImgSmoothing(context);
      if (!smooth) {
        r2.setImgSmoothing(context, true);
      }
      var off = eleTxrCache.getRotationOffset(ele);
      x3 = off.x;
      y3 = off.y;
    } else {
      x3 = x1;
      y3 = y1;
    }
    var oldGlobalAlpha;
    if (opacity !== 1) {
      oldGlobalAlpha = context.globalAlpha;
      context.globalAlpha = oldGlobalAlpha * opacity;
    }
    context.drawImage(eleCache.texture.canvas, eleCache.x, 0, eleCache.width, eleCache.height, x3, y3, w2, h2);
    if (opacity !== 1) {
      context.globalAlpha = oldGlobalAlpha;
    }
    if (theta !== 0) {
      context.rotate(-theta);
      context.translate(-sx, -sy);
      if (!smooth) {
        r2.setImgSmoothing(context, false);
      }
    }
  } else {
    eleTxrCache.drawElement(context, ele);
  }
};
var getZeroRotation = function getZeroRotation2() {
  return 0;
};
var getLabelRotation = function getLabelRotation2(r2, ele) {
  return r2.getTextAngle(ele, null);
};
var getSourceLabelRotation = function getSourceLabelRotation2(r2, ele) {
  return r2.getTextAngle(ele, "source");
};
var getTargetLabelRotation = function getTargetLabelRotation2(r2, ele) {
  return r2.getTextAngle(ele, "target");
};
var getOpacity = function getOpacity2(r2, ele) {
  return ele.effectiveOpacity();
};
var getTextOpacity = function getTextOpacity2(e2, ele) {
  return ele.pstyle("text-opacity").pfValue * ele.effectiveOpacity();
};
CRp$a.drawCachedElement = function(context, ele, pxRatio, extent2, lvl, requestHighQuality) {
  var r2 = this;
  var _r$data = r2.data, eleTxrCache = _r$data.eleTxrCache, lblTxrCache = _r$data.lblTxrCache, slbTxrCache = _r$data.slbTxrCache, tlbTxrCache = _r$data.tlbTxrCache;
  var bb = ele.boundingBox();
  var reason = requestHighQuality === true ? eleTxrCache.reasons.highQuality : null;
  if (bb.w === 0 || bb.h === 0 || !ele.visible()) {
    return;
  }
  if (!extent2 || boundingBoxesIntersect(bb, extent2)) {
    var isEdge2 = ele.isEdge();
    var badLine = ele.element()._private.rscratch.badLine;
    r2.drawElementUnderlay(context, ele);
    r2.drawCachedElementPortion(context, ele, eleTxrCache, pxRatio, lvl, reason, getZeroRotation, getOpacity);
    if (!isEdge2 || !badLine) {
      r2.drawCachedElementPortion(context, ele, lblTxrCache, pxRatio, lvl, reason, getLabelRotation, getTextOpacity);
    }
    if (isEdge2 && !badLine) {
      r2.drawCachedElementPortion(context, ele, slbTxrCache, pxRatio, lvl, reason, getSourceLabelRotation, getTextOpacity);
      r2.drawCachedElementPortion(context, ele, tlbTxrCache, pxRatio, lvl, reason, getTargetLabelRotation, getTextOpacity);
    }
    r2.drawElementOverlay(context, ele);
  }
};
CRp$a.drawElements = function(context, eles) {
  var r2 = this;
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    r2.drawElement(context, ele);
  }
};
CRp$a.drawCachedElements = function(context, eles, pxRatio, extent2) {
  var r2 = this;
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    r2.drawCachedElement(context, ele, pxRatio, extent2);
  }
};
CRp$a.drawCachedNodes = function(context, eles, pxRatio, extent2) {
  var r2 = this;
  for (var i2 = 0; i2 < eles.length; i2++) {
    var ele = eles[i2];
    if (!ele.isNode()) {
      continue;
    }
    r2.drawCachedElement(context, ele, pxRatio, extent2);
  }
};
CRp$a.drawLayeredElements = function(context, eles, pxRatio, extent2) {
  var r2 = this;
  var layers = r2.data.lyrTxrCache.getLayers(eles, pxRatio);
  if (layers) {
    for (var i2 = 0; i2 < layers.length; i2++) {
      var layer = layers[i2];
      var bb = layer.bb;
      if (bb.w === 0 || bb.h === 0) {
        continue;
      }
      context.drawImage(layer.canvas, bb.x1, bb.y1, bb.w, bb.h);
    }
  } else {
    r2.drawCachedElements(context, eles, pxRatio, extent2);
  }
};
var CRp$9 = {};
CRp$9.drawEdge = function(context, edge, shiftToOriginWithBb) {
  var drawLabel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var shouldDrawOverlay = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  var shouldDrawOpacity = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  var r2 = this;
  var rs = edge._private.rscratch;
  if (shouldDrawOpacity && !edge.visible()) {
    return;
  }
  if (rs.badLine || rs.allpts == null || isNaN(rs.allpts[0])) {
    return;
  }
  var bb;
  if (shiftToOriginWithBb) {
    bb = shiftToOriginWithBb;
    context.translate(-bb.x1, -bb.y1);
  }
  var opacity = shouldDrawOpacity ? edge.pstyle("opacity").value : 1;
  var lineOpacity = shouldDrawOpacity ? edge.pstyle("line-opacity").value : 1;
  var curveStyle = edge.pstyle("curve-style").value;
  var lineStyle = edge.pstyle("line-style").value;
  var edgeWidth = edge.pstyle("width").pfValue;
  var lineCap = edge.pstyle("line-cap").value;
  var lineOutlineWidth = edge.pstyle("line-outline-width").value;
  var lineOutlineColor = edge.pstyle("line-outline-color").value;
  var effectiveLineOpacity = opacity * lineOpacity;
  var effectiveArrowOpacity = opacity * lineOpacity;
  var drawLine = function drawLine2() {
    var strokeOpacity = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : effectiveLineOpacity;
    if (curveStyle === "straight-triangle") {
      r2.eleStrokeStyle(context, edge, strokeOpacity);
      r2.drawEdgeTrianglePath(edge, context, rs.allpts);
    } else {
      context.lineWidth = edgeWidth;
      context.lineCap = lineCap;
      r2.eleStrokeStyle(context, edge, strokeOpacity);
      r2.drawEdgePath(edge, context, rs.allpts, lineStyle);
      context.lineCap = "butt";
    }
  };
  var drawLineOutline = function drawLineOutline2() {
    var strokeOpacity = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : effectiveLineOpacity;
    context.lineWidth = edgeWidth + lineOutlineWidth;
    context.lineCap = lineCap;
    if (lineOutlineWidth > 0) {
      r2.colorStrokeStyle(context, lineOutlineColor[0], lineOutlineColor[1], lineOutlineColor[2], strokeOpacity);
    } else {
      context.lineCap = "butt";
      return;
    }
    if (curveStyle === "straight-triangle") {
      r2.drawEdgeTrianglePath(edge, context, rs.allpts);
    } else {
      r2.drawEdgePath(edge, context, rs.allpts, lineStyle);
      context.lineCap = "butt";
    }
  };
  var drawOverlay = function drawOverlay2() {
    if (!shouldDrawOverlay) {
      return;
    }
    r2.drawEdgeOverlay(context, edge);
  };
  var drawUnderlay = function drawUnderlay2() {
    if (!shouldDrawOverlay) {
      return;
    }
    r2.drawEdgeUnderlay(context, edge);
  };
  var drawArrows = function drawArrows2() {
    var arrowOpacity = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : effectiveArrowOpacity;
    r2.drawArrowheads(context, edge, arrowOpacity);
  };
  var drawText = function drawText2() {
    r2.drawElementText(context, edge, null, drawLabel);
  };
  context.lineJoin = "round";
  var ghost = edge.pstyle("ghost").value === "yes";
  if (ghost) {
    var gx = edge.pstyle("ghost-offset-x").pfValue;
    var gy = edge.pstyle("ghost-offset-y").pfValue;
    var ghostOpacity = edge.pstyle("ghost-opacity").value;
    var effectiveGhostOpacity = effectiveLineOpacity * ghostOpacity;
    context.translate(gx, gy);
    drawLine(effectiveGhostOpacity);
    drawArrows(effectiveGhostOpacity);
    context.translate(-gx, -gy);
  } else {
    drawLineOutline();
  }
  drawUnderlay();
  drawLine();
  drawArrows();
  drawOverlay();
  drawText();
  if (shiftToOriginWithBb) {
    context.translate(bb.x1, bb.y1);
  }
};
var drawEdgeOverlayUnderlay = function drawEdgeOverlayUnderlay2(overlayOrUnderlay) {
  if (!["overlay", "underlay"].includes(overlayOrUnderlay)) {
    throw new Error("Invalid state");
  }
  return function(context, edge) {
    if (!edge.visible()) {
      return;
    }
    var opacity = edge.pstyle("".concat(overlayOrUnderlay, "-opacity")).value;
    if (opacity === 0) {
      return;
    }
    var r2 = this;
    var usePaths = r2.usePaths();
    var rs = edge._private.rscratch;
    var padding = edge.pstyle("".concat(overlayOrUnderlay, "-padding")).pfValue;
    var width2 = 2 * padding;
    var color = edge.pstyle("".concat(overlayOrUnderlay, "-color")).value;
    context.lineWidth = width2;
    if (rs.edgeType === "self" && !usePaths) {
      context.lineCap = "butt";
    } else {
      context.lineCap = "round";
    }
    r2.colorStrokeStyle(context, color[0], color[1], color[2], opacity);
    r2.drawEdgePath(edge, context, rs.allpts, "solid");
  };
};
CRp$9.drawEdgeOverlay = drawEdgeOverlayUnderlay("overlay");
CRp$9.drawEdgeUnderlay = drawEdgeOverlayUnderlay("underlay");
CRp$9.drawEdgePath = function(edge, context, pts2, type) {
  var rs = edge._private.rscratch;
  var canvasCxt = context;
  var path;
  var pathCacheHit = false;
  var usePaths = this.usePaths();
  var lineDashPattern = edge.pstyle("line-dash-pattern").pfValue;
  var lineDashOffset = edge.pstyle("line-dash-offset").pfValue;
  if (usePaths) {
    var pathCacheKey = pts2.join("$");
    var keyMatches = rs.pathCacheKey && rs.pathCacheKey === pathCacheKey;
    if (keyMatches) {
      path = context = rs.pathCache;
      pathCacheHit = true;
    } else {
      path = context = new Path2D();
      rs.pathCacheKey = pathCacheKey;
      rs.pathCache = path;
    }
  }
  if (canvasCxt.setLineDash) {
    switch (type) {
      case "dotted":
        canvasCxt.setLineDash([1, 1]);
        break;
      case "dashed":
        canvasCxt.setLineDash(lineDashPattern);
        canvasCxt.lineDashOffset = lineDashOffset;
        break;
      case "solid":
        canvasCxt.setLineDash([]);
        break;
    }
  }
  if (!pathCacheHit && !rs.badLine) {
    if (context.beginPath) {
      context.beginPath();
    }
    context.moveTo(pts2[0], pts2[1]);
    switch (rs.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var i2 = 2; i2 + 3 < pts2.length; i2 += 4) {
          context.quadraticCurveTo(pts2[i2], pts2[i2 + 1], pts2[i2 + 2], pts2[i2 + 3]);
        }
        break;
      case "straight":
      case "haystack":
        for (var _i = 2; _i + 1 < pts2.length; _i += 2) {
          context.lineTo(pts2[_i], pts2[_i + 1]);
        }
        break;
      case "segments":
        if (rs.isRound) {
          var _iterator = _createForOfIteratorHelper(rs.roundCorners), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var corner = _step.value;
              drawPreparedRoundCorner(context, corner);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          context.lineTo(pts2[pts2.length - 2], pts2[pts2.length - 1]);
        } else {
          for (var _i2 = 2; _i2 + 1 < pts2.length; _i2 += 2) {
            context.lineTo(pts2[_i2], pts2[_i2 + 1]);
          }
        }
        break;
    }
  }
  context = canvasCxt;
  if (usePaths) {
    context.stroke(path);
  } else {
    context.stroke();
  }
  if (context.setLineDash) {
    context.setLineDash([]);
  }
};
CRp$9.drawEdgeTrianglePath = function(edge, context, pts2) {
  context.fillStyle = context.strokeStyle;
  var edgeWidth = edge.pstyle("width").pfValue;
  for (var i2 = 0; i2 + 1 < pts2.length; i2 += 2) {
    var vector = [pts2[i2 + 2] - pts2[i2], pts2[i2 + 3] - pts2[i2 + 1]];
    var length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    var normal = [vector[1] / length, -vector[0] / length];
    var triangleHead = [normal[0] * edgeWidth / 2, normal[1] * edgeWidth / 2];
    context.beginPath();
    context.moveTo(pts2[i2] - triangleHead[0], pts2[i2 + 1] - triangleHead[1]);
    context.lineTo(pts2[i2] + triangleHead[0], pts2[i2 + 1] + triangleHead[1]);
    context.lineTo(pts2[i2 + 2], pts2[i2 + 3]);
    context.closePath();
    context.fill();
  }
};
CRp$9.drawArrowheads = function(context, edge, opacity) {
  var rs = edge._private.rscratch;
  var isHaystack = rs.edgeType === "haystack";
  if (!isHaystack) {
    this.drawArrowhead(context, edge, "source", rs.arrowStartX, rs.arrowStartY, rs.srcArrowAngle, opacity);
  }
  this.drawArrowhead(context, edge, "mid-target", rs.midX, rs.midY, rs.midtgtArrowAngle, opacity);
  this.drawArrowhead(context, edge, "mid-source", rs.midX, rs.midY, rs.midsrcArrowAngle, opacity);
  if (!isHaystack) {
    this.drawArrowhead(context, edge, "target", rs.arrowEndX, rs.arrowEndY, rs.tgtArrowAngle, opacity);
  }
};
CRp$9.drawArrowhead = function(context, edge, prefix, x3, y3, angle2, opacity) {
  if (isNaN(x3) || x3 == null || isNaN(y3) || y3 == null || isNaN(angle2) || angle2 == null) {
    return;
  }
  var self2 = this;
  var arrowShape = edge.pstyle(prefix + "-arrow-shape").value;
  if (arrowShape === "none") {
    return;
  }
  var arrowClearFill = edge.pstyle(prefix + "-arrow-fill").value === "hollow" ? "both" : "filled";
  var arrowFill = edge.pstyle(prefix + "-arrow-fill").value;
  var edgeWidth = edge.pstyle("width").pfValue;
  var pArrowWidth = edge.pstyle(prefix + "-arrow-width");
  var arrowWidth = pArrowWidth.value === "match-line" ? edgeWidth : pArrowWidth.pfValue;
  if (pArrowWidth.units === "%") arrowWidth *= edgeWidth;
  var edgeOpacity = edge.pstyle("opacity").value;
  if (opacity === void 0) {
    opacity = edgeOpacity;
  }
  var gco = context.globalCompositeOperation;
  if (opacity !== 1 || arrowFill === "hollow") {
    context.globalCompositeOperation = "destination-out";
    self2.colorFillStyle(context, 255, 255, 255, 1);
    self2.colorStrokeStyle(context, 255, 255, 255, 1);
    self2.drawArrowShape(edge, context, arrowClearFill, edgeWidth, arrowShape, arrowWidth, x3, y3, angle2);
    context.globalCompositeOperation = gco;
  }
  var color = edge.pstyle(prefix + "-arrow-color").value;
  self2.colorFillStyle(context, color[0], color[1], color[2], opacity);
  self2.colorStrokeStyle(context, color[0], color[1], color[2], opacity);
  self2.drawArrowShape(edge, context, arrowFill, edgeWidth, arrowShape, arrowWidth, x3, y3, angle2);
};
CRp$9.drawArrowShape = function(edge, context, fill, edgeWidth, shape, shapeWidth, x3, y3, angle2) {
  var r2 = this;
  var usePaths = this.usePaths() && shape !== "triangle-cross";
  var pathCacheHit = false;
  var path;
  var canvasContext = context;
  var translation = {
    x: x3,
    y: y3
  };
  var scale2 = edge.pstyle("arrow-scale").value;
  var size3 = this.getArrowWidth(edgeWidth, scale2);
  var shapeImpl = r2.arrowShapes[shape];
  if (usePaths) {
    var cache3 = r2.arrowPathCache = r2.arrowPathCache || [];
    var key = hashString(shape);
    var cachedPath = cache3[key];
    if (cachedPath != null) {
      path = context = cachedPath;
      pathCacheHit = true;
    } else {
      path = context = new Path2D();
      cache3[key] = path;
    }
  }
  if (!pathCacheHit) {
    if (context.beginPath) {
      context.beginPath();
    }
    if (usePaths) {
      shapeImpl.draw(context, 1, 0, {
        x: 0,
        y: 0
      }, 1);
    } else {
      shapeImpl.draw(context, size3, angle2, translation, edgeWidth);
    }
    if (context.closePath) {
      context.closePath();
    }
  }
  context = canvasContext;
  if (usePaths) {
    context.translate(x3, y3);
    context.rotate(angle2);
    context.scale(size3, size3);
  }
  if (fill === "filled" || fill === "both") {
    if (usePaths) {
      context.fill(path);
    } else {
      context.fill();
    }
  }
  if (fill === "hollow" || fill === "both") {
    context.lineWidth = shapeWidth / (usePaths ? size3 : 1);
    context.lineJoin = "miter";
    if (usePaths) {
      context.stroke(path);
    } else {
      context.stroke();
    }
  }
  if (usePaths) {
    context.scale(1 / size3, 1 / size3);
    context.rotate(-angle2);
    context.translate(-x3, -y3);
  }
};
var CRp$8 = {};
CRp$8.safeDrawImage = function(context, img, ix, iy, iw, ih, x3, y3, w2, h2) {
  if (iw <= 0 || ih <= 0 || w2 <= 0 || h2 <= 0) {
    return;
  }
  try {
    context.drawImage(img, ix, iy, iw, ih, x3, y3, w2, h2);
  } catch (e2) {
    warn(e2);
  }
};
CRp$8.drawInscribedImage = function(context, img, node, index, nodeOpacity) {
  var r2 = this;
  var pos = node.position();
  var nodeX = pos.x;
  var nodeY = pos.y;
  var styleObj = node.cy().style();
  var getIndexedStyle = styleObj.getIndexedStyle.bind(styleObj);
  var fit2 = getIndexedStyle(node, "background-fit", "value", index);
  var repeat = getIndexedStyle(node, "background-repeat", "value", index);
  var nodeW = node.width();
  var nodeH = node.height();
  var paddingX2 = node.padding() * 2;
  var nodeTW = nodeW + (getIndexedStyle(node, "background-width-relative-to", "value", index) === "inner" ? 0 : paddingX2);
  var nodeTH = nodeH + (getIndexedStyle(node, "background-height-relative-to", "value", index) === "inner" ? 0 : paddingX2);
  var rs = node._private.rscratch;
  var clip = getIndexedStyle(node, "background-clip", "value", index);
  var shouldClip = clip === "node";
  var imgOpacity = getIndexedStyle(node, "background-image-opacity", "value", index) * nodeOpacity;
  var smooth = getIndexedStyle(node, "background-image-smoothing", "value", index);
  var cornerRadius = node.pstyle("corner-radius").value;
  if (cornerRadius !== "auto") cornerRadius = node.pstyle("corner-radius").pfValue;
  var imgW = img.width || img.cachedW;
  var imgH = img.height || img.cachedH;
  if (null == imgW || null == imgH) {
    document.body.appendChild(img);
    imgW = img.cachedW = img.width || img.offsetWidth;
    imgH = img.cachedH = img.height || img.offsetHeight;
    document.body.removeChild(img);
  }
  var w2 = imgW;
  var h2 = imgH;
  if (getIndexedStyle(node, "background-width", "value", index) !== "auto") {
    if (getIndexedStyle(node, "background-width", "units", index) === "%") {
      w2 = getIndexedStyle(node, "background-width", "pfValue", index) * nodeTW;
    } else {
      w2 = getIndexedStyle(node, "background-width", "pfValue", index);
    }
  }
  if (getIndexedStyle(node, "background-height", "value", index) !== "auto") {
    if (getIndexedStyle(node, "background-height", "units", index) === "%") {
      h2 = getIndexedStyle(node, "background-height", "pfValue", index) * nodeTH;
    } else {
      h2 = getIndexedStyle(node, "background-height", "pfValue", index);
    }
  }
  if (w2 === 0 || h2 === 0) {
    return;
  }
  if (fit2 === "contain") {
    var scale2 = Math.min(nodeTW / w2, nodeTH / h2);
    w2 *= scale2;
    h2 *= scale2;
  } else if (fit2 === "cover") {
    var scale2 = Math.max(nodeTW / w2, nodeTH / h2);
    w2 *= scale2;
    h2 *= scale2;
  }
  var x3 = nodeX - nodeTW / 2;
  var posXUnits = getIndexedStyle(node, "background-position-x", "units", index);
  var posXPfVal = getIndexedStyle(node, "background-position-x", "pfValue", index);
  if (posXUnits === "%") {
    x3 += (nodeTW - w2) * posXPfVal;
  } else {
    x3 += posXPfVal;
  }
  var offXUnits = getIndexedStyle(node, "background-offset-x", "units", index);
  var offXPfVal = getIndexedStyle(node, "background-offset-x", "pfValue", index);
  if (offXUnits === "%") {
    x3 += (nodeTW - w2) * offXPfVal;
  } else {
    x3 += offXPfVal;
  }
  var y3 = nodeY - nodeTH / 2;
  var posYUnits = getIndexedStyle(node, "background-position-y", "units", index);
  var posYPfVal = getIndexedStyle(node, "background-position-y", "pfValue", index);
  if (posYUnits === "%") {
    y3 += (nodeTH - h2) * posYPfVal;
  } else {
    y3 += posYPfVal;
  }
  var offYUnits = getIndexedStyle(node, "background-offset-y", "units", index);
  var offYPfVal = getIndexedStyle(node, "background-offset-y", "pfValue", index);
  if (offYUnits === "%") {
    y3 += (nodeTH - h2) * offYPfVal;
  } else {
    y3 += offYPfVal;
  }
  if (rs.pathCache) {
    x3 -= nodeX;
    y3 -= nodeY;
    nodeX = 0;
    nodeY = 0;
  }
  var gAlpha = context.globalAlpha;
  context.globalAlpha = imgOpacity;
  var smoothingEnabled = r2.getImgSmoothing(context);
  var isSmoothingSwitched = false;
  if (smooth === "no" && smoothingEnabled) {
    r2.setImgSmoothing(context, false);
    isSmoothingSwitched = true;
  } else if (smooth === "yes" && !smoothingEnabled) {
    r2.setImgSmoothing(context, true);
    isSmoothingSwitched = true;
  }
  if (repeat === "no-repeat") {
    if (shouldClip) {
      context.save();
      if (rs.pathCache) {
        context.clip(rs.pathCache);
      } else {
        r2.nodeShapes[r2.getNodeShape(node)].draw(context, nodeX, nodeY, nodeTW, nodeTH, cornerRadius, rs);
        context.clip();
      }
    }
    r2.safeDrawImage(context, img, 0, 0, imgW, imgH, x3, y3, w2, h2);
    if (shouldClip) {
      context.restore();
    }
  } else {
    var pattern = context.createPattern(img, repeat);
    context.fillStyle = pattern;
    r2.nodeShapes[r2.getNodeShape(node)].draw(context, nodeX, nodeY, nodeTW, nodeTH, cornerRadius, rs);
    context.translate(x3, y3);
    context.fill();
    context.translate(-x3, -y3);
  }
  context.globalAlpha = gAlpha;
  if (isSmoothingSwitched) {
    r2.setImgSmoothing(context, smoothingEnabled);
  }
};
var CRp$7 = {};
CRp$7.eleTextBiggerThanMin = function(ele, scale2) {
  if (!scale2) {
    var zoom2 = ele.cy().zoom();
    var pxRatio = this.getPixelRatio();
    var lvl = Math.ceil(log2(zoom2 * pxRatio));
    scale2 = Math.pow(2, lvl);
  }
  var computedSize = ele.pstyle("font-size").pfValue * scale2;
  var minSize = ele.pstyle("min-zoomed-font-size").pfValue;
  if (computedSize < minSize) {
    return false;
  }
  return true;
};
CRp$7.drawElementText = function(context, ele, shiftToOriginWithBb, force, prefix) {
  var useEleOpacity = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  var r2 = this;
  if (force == null) {
    if (useEleOpacity && !r2.eleTextBiggerThanMin(ele)) {
      return;
    }
  } else if (force === false) {
    return;
  }
  if (ele.isNode()) {
    var label = ele.pstyle("label");
    if (!label || !label.value) {
      return;
    }
    var justification = r2.getLabelJustification(ele);
    context.textAlign = justification;
    context.textBaseline = "bottom";
  } else {
    var badLine = ele.element()._private.rscratch.badLine;
    var _label = ele.pstyle("label");
    var srcLabel = ele.pstyle("source-label");
    var tgtLabel = ele.pstyle("target-label");
    if (badLine || (!_label || !_label.value) && (!srcLabel || !srcLabel.value) && (!tgtLabel || !tgtLabel.value)) {
      return;
    }
    context.textAlign = "center";
    context.textBaseline = "bottom";
  }
  var applyRotation = !shiftToOriginWithBb;
  var bb;
  if (shiftToOriginWithBb) {
    bb = shiftToOriginWithBb;
    context.translate(-bb.x1, -bb.y1);
  }
  if (prefix == null) {
    r2.drawText(context, ele, null, applyRotation, useEleOpacity);
    if (ele.isEdge()) {
      r2.drawText(context, ele, "source", applyRotation, useEleOpacity);
      r2.drawText(context, ele, "target", applyRotation, useEleOpacity);
    }
  } else {
    r2.drawText(context, ele, prefix, applyRotation, useEleOpacity);
  }
  if (shiftToOriginWithBb) {
    context.translate(bb.x1, bb.y1);
  }
};
CRp$7.getFontCache = function(context) {
  var cache3;
  this.fontCaches = this.fontCaches || [];
  for (var i2 = 0; i2 < this.fontCaches.length; i2++) {
    cache3 = this.fontCaches[i2];
    if (cache3.context === context) {
      return cache3;
    }
  }
  cache3 = {
    context
  };
  this.fontCaches.push(cache3);
  return cache3;
};
CRp$7.setupTextStyle = function(context, ele) {
  var useEleOpacity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var labelStyle = ele.pstyle("font-style").strValue;
  var labelSize = ele.pstyle("font-size").pfValue + "px";
  var labelFamily = ele.pstyle("font-family").strValue;
  var labelWeight = ele.pstyle("font-weight").strValue;
  var opacity = useEleOpacity ? ele.effectiveOpacity() * ele.pstyle("text-opacity").value : 1;
  var outlineOpacity = ele.pstyle("text-outline-opacity").value * opacity;
  var color = ele.pstyle("color").value;
  var outlineColor = ele.pstyle("text-outline-color").value;
  context.font = labelStyle + " " + labelWeight + " " + labelSize + " " + labelFamily;
  context.lineJoin = "round";
  this.colorFillStyle(context, color[0], color[1], color[2], opacity);
  this.colorStrokeStyle(context, outlineColor[0], outlineColor[1], outlineColor[2], outlineOpacity);
};
function circle(ctx, x3, y3, width2, height2) {
  var diameter = Math.min(width2, height2);
  var radius2 = diameter / 2;
  var centerX = x3 + width2 / 2;
  var centerY = y3 + height2 / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius2, 0, Math.PI * 2);
  ctx.closePath();
}
function roundRect(ctx, x3, y3, width2, height2) {
  var radius2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5;
  var r2 = Math.min(radius2, width2 / 2, height2 / 2);
  ctx.beginPath();
  ctx.moveTo(x3 + r2, y3);
  ctx.lineTo(x3 + width2 - r2, y3);
  ctx.quadraticCurveTo(x3 + width2, y3, x3 + width2, y3 + r2);
  ctx.lineTo(x3 + width2, y3 + height2 - r2);
  ctx.quadraticCurveTo(x3 + width2, y3 + height2, x3 + width2 - r2, y3 + height2);
  ctx.lineTo(x3 + r2, y3 + height2);
  ctx.quadraticCurveTo(x3, y3 + height2, x3, y3 + height2 - r2);
  ctx.lineTo(x3, y3 + r2);
  ctx.quadraticCurveTo(x3, y3, x3 + r2, y3);
  ctx.closePath();
}
CRp$7.getTextAngle = function(ele, prefix) {
  var theta;
  var _p = ele._private;
  var rscratch = _p.rscratch;
  var pdash = prefix ? prefix + "-" : "";
  var rotation = ele.pstyle(pdash + "text-rotation");
  if (rotation.strValue === "autorotate") {
    var textAngle = getPrefixedProperty(rscratch, "labelAngle", prefix);
    theta = ele.isEdge() ? textAngle : 0;
  } else if (rotation.strValue === "none") {
    theta = 0;
  } else {
    theta = rotation.pfValue;
  }
  return theta;
};
CRp$7.drawText = function(context, ele, prefix) {
  var applyRotation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var useEleOpacity = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  var _p = ele._private;
  var rscratch = _p.rscratch;
  var parentOpacity = useEleOpacity ? ele.effectiveOpacity() : 1;
  if (useEleOpacity && (parentOpacity === 0 || ele.pstyle("text-opacity").value === 0)) {
    return;
  }
  if (prefix === "main") {
    prefix = null;
  }
  var textX = getPrefixedProperty(rscratch, "labelX", prefix);
  var textY = getPrefixedProperty(rscratch, "labelY", prefix);
  var orgTextX, orgTextY;
  var text = this.getLabelText(ele, prefix);
  if (text != null && text !== "" && !isNaN(textX) && !isNaN(textY)) {
    this.setupTextStyle(context, ele, useEleOpacity);
    var pdash = prefix ? prefix + "-" : "";
    var textW = getPrefixedProperty(rscratch, "labelWidth", prefix);
    var textH = getPrefixedProperty(rscratch, "labelHeight", prefix);
    var marginX = ele.pstyle(pdash + "text-margin-x").pfValue;
    var marginY = ele.pstyle(pdash + "text-margin-y").pfValue;
    var isEdge2 = ele.isEdge();
    var halign = ele.pstyle("text-halign").value;
    var valign = ele.pstyle("text-valign").value;
    if (isEdge2) {
      halign = "center";
      valign = "center";
    }
    textX += marginX;
    textY += marginY;
    var theta;
    if (!applyRotation) {
      theta = 0;
    } else {
      theta = this.getTextAngle(ele, prefix);
    }
    if (theta !== 0) {
      orgTextX = textX;
      orgTextY = textY;
      context.translate(orgTextX, orgTextY);
      context.rotate(theta);
      textX = 0;
      textY = 0;
    }
    switch (valign) {
      case "top":
        break;
      case "center":
        textY += textH / 2;
        break;
      case "bottom":
        textY += textH;
        break;
    }
    var backgroundOpacity = ele.pstyle("text-background-opacity").value;
    var borderOpacity = ele.pstyle("text-border-opacity").value;
    var textBorderWidth = ele.pstyle("text-border-width").pfValue;
    var backgroundPadding = ele.pstyle("text-background-padding").pfValue;
    var styleShape = ele.pstyle("text-background-shape").strValue;
    var rounded = styleShape === "round-rectangle" || styleShape === "roundrectangle";
    var circled = styleShape === "circle";
    var roundRadius = 2;
    if (backgroundOpacity > 0 || textBorderWidth > 0 && borderOpacity > 0) {
      var textFill = context.fillStyle;
      var textStroke = context.strokeStyle;
      var textLineWidth = context.lineWidth;
      var textBackgroundColor = ele.pstyle("text-background-color").value;
      var textBorderColor = ele.pstyle("text-border-color").value;
      var textBorderStyle = ele.pstyle("text-border-style").value;
      var doFill = backgroundOpacity > 0;
      var doStroke = textBorderWidth > 0 && borderOpacity > 0;
      var bgX = textX - backgroundPadding;
      switch (halign) {
        case "left":
          bgX -= textW;
          break;
        case "center":
          bgX -= textW / 2;
          break;
      }
      var bgY = textY - textH - backgroundPadding;
      var bgW = textW + 2 * backgroundPadding;
      var bgH = textH + 2 * backgroundPadding;
      if (doFill) {
        context.fillStyle = "rgba(".concat(textBackgroundColor[0], ",").concat(textBackgroundColor[1], ",").concat(textBackgroundColor[2], ",").concat(backgroundOpacity * parentOpacity, ")");
      }
      if (doStroke) {
        context.strokeStyle = "rgba(".concat(textBorderColor[0], ",").concat(textBorderColor[1], ",").concat(textBorderColor[2], ",").concat(borderOpacity * parentOpacity, ")");
        context.lineWidth = textBorderWidth;
        if (context.setLineDash) {
          switch (textBorderStyle) {
            case "dotted":
              context.setLineDash([1, 1]);
              break;
            case "dashed":
              context.setLineDash([4, 2]);
              break;
            case "double":
              context.lineWidth = textBorderWidth / 4;
              context.setLineDash([]);
              break;
            case "solid":
            default:
              context.setLineDash([]);
              break;
          }
        }
      }
      if (rounded) {
        context.beginPath();
        roundRect(context, bgX, bgY, bgW, bgH, roundRadius);
      } else if (circled) {
        context.beginPath();
        circle(context, bgX, bgY, bgW, bgH);
      } else {
        context.beginPath();
        context.rect(bgX, bgY, bgW, bgH);
      }
      if (doFill) context.fill();
      if (doStroke) context.stroke();
      if (doStroke && textBorderStyle === "double") {
        var whiteWidth = textBorderWidth / 2;
        context.beginPath();
        if (rounded) {
          roundRect(context, bgX + whiteWidth, bgY + whiteWidth, bgW - 2 * whiteWidth, bgH - 2 * whiteWidth, roundRadius);
        } else {
          context.rect(bgX + whiteWidth, bgY + whiteWidth, bgW - 2 * whiteWidth, bgH - 2 * whiteWidth);
        }
        context.stroke();
      }
      context.fillStyle = textFill;
      context.strokeStyle = textStroke;
      context.lineWidth = textLineWidth;
      if (context.setLineDash) context.setLineDash([]);
    }
    var lineWidth = 2 * ele.pstyle("text-outline-width").pfValue;
    if (lineWidth > 0) {
      context.lineWidth = lineWidth;
    }
    if (ele.pstyle("text-wrap").value === "wrap") {
      var lines = getPrefixedProperty(rscratch, "labelWrapCachedLines", prefix);
      var lineHeight = getPrefixedProperty(rscratch, "labelLineHeight", prefix);
      var halfTextW = textW / 2;
      var justification = this.getLabelJustification(ele);
      if (justification === "auto") ;
      else if (halign === "left") {
        if (justification === "left") {
          textX += -textW;
        } else if (justification === "center") {
          textX += -halfTextW;
        }
      } else if (halign === "center") {
        if (justification === "left") {
          textX += -halfTextW;
        } else if (justification === "right") {
          textX += halfTextW;
        }
      } else if (halign === "right") {
        if (justification === "center") {
          textX += halfTextW;
        } else if (justification === "right") {
          textX += textW;
        }
      }
      switch (valign) {
        case "top":
          textY -= (lines.length - 1) * lineHeight;
          break;
        case "center":
        case "bottom":
          textY -= (lines.length - 1) * lineHeight;
          break;
      }
      for (var l2 = 0; l2 < lines.length; l2++) {
        if (lineWidth > 0) {
          context.strokeText(lines[l2], textX, textY);
        }
        context.fillText(lines[l2], textX, textY);
        textY += lineHeight;
      }
    } else {
      if (lineWidth > 0) {
        context.strokeText(text, textX, textY);
      }
      context.fillText(text, textX, textY);
    }
    if (theta !== 0) {
      context.rotate(-theta);
      context.translate(-orgTextX, -orgTextY);
    }
  }
};
var CRp$6 = {};
CRp$6.drawNode = function(context, node, shiftToOriginWithBb) {
  var drawLabel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var shouldDrawOverlay = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  var shouldDrawOpacity = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  var r2 = this;
  var nodeWidth, nodeHeight;
  var _p = node._private;
  var rs = _p.rscratch;
  var pos = node.position();
  if (!number$1(pos.x) || !number$1(pos.y)) {
    return;
  }
  if (shouldDrawOpacity && !node.visible()) {
    return;
  }
  var eleOpacity = shouldDrawOpacity ? node.effectiveOpacity() : 1;
  var usePaths = r2.usePaths();
  var path;
  var pathCacheHit = false;
  var padding = node.padding();
  nodeWidth = node.width() + 2 * padding;
  nodeHeight = node.height() + 2 * padding;
  var bb;
  if (shiftToOriginWithBb) {
    bb = shiftToOriginWithBb;
    context.translate(-bb.x1, -bb.y1);
  }
  var bgImgProp = node.pstyle("background-image");
  var urls = bgImgProp.value;
  var urlDefined = new Array(urls.length);
  var image = new Array(urls.length);
  var numImages = 0;
  for (var i2 = 0; i2 < urls.length; i2++) {
    var url = urls[i2];
    var defd = urlDefined[i2] = url != null && url !== "none";
    if (defd) {
      var bgImgCrossOrigin = node.cy().style().getIndexedStyle(node, "background-image-crossorigin", "value", i2);
      numImages++;
      image[i2] = r2.getCachedImage(url, bgImgCrossOrigin, function() {
        _p.backgroundTimestamp = Date.now();
        node.emitAndNotify("background");
      });
    }
  }
  var darkness = node.pstyle("background-blacken").value;
  var borderWidth = node.pstyle("border-width").pfValue;
  var bgOpacity = node.pstyle("background-opacity").value * eleOpacity;
  var borderColor = node.pstyle("border-color").value;
  var borderStyle = node.pstyle("border-style").value;
  var borderJoin = node.pstyle("border-join").value;
  var borderCap = node.pstyle("border-cap").value;
  var borderPosition = node.pstyle("border-position").value;
  var borderPattern = node.pstyle("border-dash-pattern").pfValue;
  var borderOffset = node.pstyle("border-dash-offset").pfValue;
  var borderOpacity = node.pstyle("border-opacity").value * eleOpacity;
  var outlineWidth = node.pstyle("outline-width").pfValue;
  var outlineColor = node.pstyle("outline-color").value;
  var outlineStyle = node.pstyle("outline-style").value;
  var outlineOpacity = node.pstyle("outline-opacity").value * eleOpacity;
  var outlineOffset = node.pstyle("outline-offset").value;
  var cornerRadius = node.pstyle("corner-radius").value;
  if (cornerRadius !== "auto") cornerRadius = node.pstyle("corner-radius").pfValue;
  var setupShapeColor = function setupShapeColor2() {
    var bgOpy = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bgOpacity;
    r2.eleFillStyle(context, node, bgOpy);
  };
  var setupBorderColor = function setupBorderColor2() {
    var bdrOpy = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : borderOpacity;
    r2.colorStrokeStyle(context, borderColor[0], borderColor[1], borderColor[2], bdrOpy);
  };
  var setupOutlineColor = function setupOutlineColor2() {
    var otlnOpy = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : outlineOpacity;
    r2.colorStrokeStyle(context, outlineColor[0], outlineColor[1], outlineColor[2], otlnOpy);
  };
  var getPath = function getPath2(width2, height2, shape, points) {
    var pathCache = r2.nodePathCache = r2.nodePathCache || [];
    var key = hashStrings(shape === "polygon" ? shape + "," + points.join(",") : shape, "" + height2, "" + width2, "" + cornerRadius);
    var cachedPath = pathCache[key];
    var path2;
    var cacheHit = false;
    if (cachedPath != null) {
      path2 = cachedPath;
      cacheHit = true;
      rs.pathCache = path2;
    } else {
      path2 = new Path2D();
      pathCache[key] = rs.pathCache = path2;
    }
    return {
      path: path2,
      cacheHit
    };
  };
  var styleShape = node.pstyle("shape").strValue;
  var shapePts = node.pstyle("shape-polygon-points").pfValue;
  if (usePaths) {
    context.translate(pos.x, pos.y);
    var shapePath = getPath(nodeWidth, nodeHeight, styleShape, shapePts);
    path = shapePath.path;
    pathCacheHit = shapePath.cacheHit;
  }
  var drawShape = function drawShape2() {
    if (!pathCacheHit) {
      var npos = pos;
      if (usePaths) {
        npos = {
          x: 0,
          y: 0
        };
      }
      r2.nodeShapes[r2.getNodeShape(node)].draw(path || context, npos.x, npos.y, nodeWidth, nodeHeight, cornerRadius, rs);
    }
    if (usePaths) {
      context.fill(path);
    } else {
      context.fill();
    }
  };
  var drawImages = function drawImages2() {
    var nodeOpacity = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eleOpacity;
    var inside = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var prevBging = _p.backgrounding;
    var totalCompleted = 0;
    for (var _i = 0; _i < image.length; _i++) {
      var bgContainment = node.cy().style().getIndexedStyle(node, "background-image-containment", "value", _i);
      if (inside && bgContainment === "over" || !inside && bgContainment === "inside") {
        totalCompleted++;
        continue;
      }
      if (urlDefined[_i] && image[_i].complete && !image[_i].error) {
        totalCompleted++;
        r2.drawInscribedImage(context, image[_i], node, _i, nodeOpacity);
      }
    }
    _p.backgrounding = !(totalCompleted === numImages);
    if (prevBging !== _p.backgrounding) {
      node.updateStyle(false);
    }
  };
  var drawPie = function drawPie2() {
    var redrawShape = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var pieOpacity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eleOpacity;
    if (r2.hasPie(node)) {
      r2.drawPie(context, node, pieOpacity);
      if (redrawShape) {
        if (!usePaths) {
          r2.nodeShapes[r2.getNodeShape(node)].draw(context, pos.x, pos.y, nodeWidth, nodeHeight, cornerRadius, rs);
        }
      }
    }
  };
  var drawStripe = function drawStripe2() {
    var redrawShape = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var stripeOpacity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eleOpacity;
    if (r2.hasStripe(node)) {
      context.save();
      if (usePaths) {
        context.clip(rs.pathCache);
      } else {
        r2.nodeShapes[r2.getNodeShape(node)].draw(context, pos.x, pos.y, nodeWidth, nodeHeight, cornerRadius, rs);
        context.clip();
      }
      r2.drawStripe(context, node, stripeOpacity);
      context.restore();
      if (redrawShape) {
        if (!usePaths) {
          r2.nodeShapes[r2.getNodeShape(node)].draw(context, pos.x, pos.y, nodeWidth, nodeHeight, cornerRadius, rs);
        }
      }
    }
  };
  var darken = function darken2() {
    var darkenOpacity = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eleOpacity;
    var opacity = (darkness > 0 ? darkness : -darkness) * darkenOpacity;
    var c2 = darkness > 0 ? 0 : 255;
    if (darkness !== 0) {
      r2.colorFillStyle(context, c2, c2, c2, opacity);
      if (usePaths) {
        context.fill(path);
      } else {
        context.fill();
      }
    }
  };
  var drawBorder = function drawBorder2() {
    if (borderWidth > 0) {
      context.lineWidth = borderWidth;
      context.lineCap = borderCap;
      context.lineJoin = borderJoin;
      if (context.setLineDash) {
        switch (borderStyle) {
          case "dotted":
            context.setLineDash([1, 1]);
            break;
          case "dashed":
            context.setLineDash(borderPattern);
            context.lineDashOffset = borderOffset;
            break;
          case "solid":
          case "double":
            context.setLineDash([]);
            break;
        }
      }
      if (borderPosition !== "center") {
        context.save();
        context.lineWidth *= 2;
        if (borderPosition === "inside") {
          usePaths ? context.clip(path) : context.clip();
        } else {
          var region = new Path2D();
          region.rect(-nodeWidth / 2 - borderWidth, -nodeHeight / 2 - borderWidth, nodeWidth + 2 * borderWidth, nodeHeight + 2 * borderWidth);
          region.addPath(path);
          context.clip(region, "evenodd");
        }
        usePaths ? context.stroke(path) : context.stroke();
        context.restore();
      } else {
        usePaths ? context.stroke(path) : context.stroke();
      }
      if (borderStyle === "double") {
        context.lineWidth = borderWidth / 3;
        var gco = context.globalCompositeOperation;
        context.globalCompositeOperation = "destination-out";
        if (usePaths) {
          context.stroke(path);
        } else {
          context.stroke();
        }
        context.globalCompositeOperation = gco;
      }
      if (context.setLineDash) {
        context.setLineDash([]);
      }
    }
  };
  var drawOutline = function drawOutline2() {
    if (outlineWidth > 0) {
      context.lineWidth = outlineWidth;
      context.lineCap = "butt";
      if (context.setLineDash) {
        switch (outlineStyle) {
          case "dotted":
            context.setLineDash([1, 1]);
            break;
          case "dashed":
            context.setLineDash([4, 2]);
            break;
          case "solid":
          case "double":
            context.setLineDash([]);
            break;
        }
      }
      var npos = pos;
      if (usePaths) {
        npos = {
          x: 0,
          y: 0
        };
      }
      var shape = r2.getNodeShape(node);
      var bWidth = borderWidth;
      if (borderPosition === "inside") bWidth = 0;
      if (borderPosition === "outside") bWidth *= 2;
      var scaleX = (nodeWidth + bWidth + (outlineWidth + outlineOffset)) / nodeWidth;
      var scaleY = (nodeHeight + bWidth + (outlineWidth + outlineOffset)) / nodeHeight;
      var sWidth = nodeWidth * scaleX;
      var sHeight = nodeHeight * scaleY;
      var points = r2.nodeShapes[shape].points;
      var _path;
      if (usePaths) {
        var outlinePath = getPath(sWidth, sHeight, shape, points);
        _path = outlinePath.path;
      }
      if (shape === "ellipse") {
        r2.drawEllipsePath(_path || context, npos.x, npos.y, sWidth, sHeight);
      } else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(shape)) {
        var sMult = 0;
        var offsetX = 0;
        var offsetY = 0;
        if (shape === "round-diamond") {
          sMult = (bWidth + outlineOffset + outlineWidth) * 1.4;
        } else if (shape === "round-heptagon") {
          sMult = (bWidth + outlineOffset + outlineWidth) * 1.075;
          offsetY = -(bWidth / 2 + outlineOffset + outlineWidth) / 35;
        } else if (shape === "round-hexagon") {
          sMult = (bWidth + outlineOffset + outlineWidth) * 1.12;
        } else if (shape === "round-pentagon") {
          sMult = (bWidth + outlineOffset + outlineWidth) * 1.13;
          offsetY = -(bWidth / 2 + outlineOffset + outlineWidth) / 15;
        } else if (shape === "round-tag") {
          sMult = (bWidth + outlineOffset + outlineWidth) * 1.12;
          offsetX = (bWidth / 2 + outlineWidth + outlineOffset) * 0.07;
        } else if (shape === "round-triangle") {
          sMult = (bWidth + outlineOffset + outlineWidth) * (Math.PI / 2);
          offsetY = -(bWidth + outlineOffset / 2 + outlineWidth) / Math.PI;
        }
        if (sMult !== 0) {
          scaleX = (nodeWidth + sMult) / nodeWidth;
          sWidth = nodeWidth * scaleX;
          if (!["round-hexagon", "round-tag"].includes(shape)) {
            scaleY = (nodeHeight + sMult) / nodeHeight;
            sHeight = nodeHeight * scaleY;
          }
        }
        cornerRadius = cornerRadius === "auto" ? getRoundPolygonRadius(sWidth, sHeight) : cornerRadius;
        var halfW = sWidth / 2;
        var halfH = sHeight / 2;
        var radius2 = cornerRadius + (bWidth + outlineWidth + outlineOffset) / 2;
        var p3 = new Array(points.length / 2);
        var corners = new Array(points.length / 2);
        for (var _i2 = 0; _i2 < points.length / 2; _i2++) {
          p3[_i2] = {
            x: npos.x + offsetX + halfW * points[_i2 * 2],
            y: npos.y + offsetY + halfH * points[_i2 * 2 + 1]
          };
        }
        var _i3, p1, p22, p32, len = p3.length;
        p1 = p3[len - 1];
        for (_i3 = 0; _i3 < len; _i3++) {
          p22 = p3[_i3 % len];
          p32 = p3[(_i3 + 1) % len];
          corners[_i3] = getRoundCorner(p1, p22, p32, radius2);
          p1 = p22;
          p22 = p32;
        }
        r2.drawRoundPolygonPath(_path || context, npos.x + offsetX, npos.y + offsetY, nodeWidth * scaleX, nodeHeight * scaleY, points, corners);
      } else if (["roundrectangle", "round-rectangle"].includes(shape)) {
        cornerRadius = cornerRadius === "auto" ? getRoundRectangleRadius(sWidth, sHeight) : cornerRadius;
        r2.drawRoundRectanglePath(_path || context, npos.x, npos.y, sWidth, sHeight, cornerRadius + (bWidth + outlineWidth + outlineOffset) / 2);
      } else if (["cutrectangle", "cut-rectangle"].includes(shape)) {
        cornerRadius = cornerRadius === "auto" ? getCutRectangleCornerLength() : cornerRadius;
        r2.drawCutRectanglePath(_path || context, npos.x, npos.y, sWidth, sHeight, null, cornerRadius + (bWidth + outlineWidth + outlineOffset) / 4);
      } else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(shape)) {
        cornerRadius = cornerRadius === "auto" ? getRoundRectangleRadius(sWidth, sHeight) : cornerRadius;
        r2.drawBottomRoundRectanglePath(_path || context, npos.x, npos.y, sWidth, sHeight, cornerRadius + (bWidth + outlineWidth + outlineOffset) / 2);
      } else if (shape === "barrel") {
        r2.drawBarrelPath(_path || context, npos.x, npos.y, sWidth, sHeight);
      } else if (shape.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(shape)) {
        var pad = (bWidth + outlineWidth + outlineOffset) / nodeWidth;
        points = joinLines(expandPolygon(points, pad));
        r2.drawPolygonPath(_path || context, npos.x, npos.y, nodeWidth, nodeHeight, points);
      } else {
        var _pad = (bWidth + outlineWidth + outlineOffset) / nodeWidth;
        points = joinLines(expandPolygon(points, -_pad));
        r2.drawPolygonPath(_path || context, npos.x, npos.y, nodeWidth, nodeHeight, points);
      }
      if (usePaths) {
        context.stroke(_path);
      } else {
        context.stroke();
      }
      if (outlineStyle === "double") {
        context.lineWidth = bWidth / 3;
        var gco = context.globalCompositeOperation;
        context.globalCompositeOperation = "destination-out";
        if (usePaths) {
          context.stroke(_path);
        } else {
          context.stroke();
        }
        context.globalCompositeOperation = gco;
      }
      if (context.setLineDash) {
        context.setLineDash([]);
      }
    }
  };
  var drawOverlay = function drawOverlay2() {
    if (shouldDrawOverlay) {
      r2.drawNodeOverlay(context, node, pos, nodeWidth, nodeHeight);
    }
  };
  var drawUnderlay = function drawUnderlay2() {
    if (shouldDrawOverlay) {
      r2.drawNodeUnderlay(context, node, pos, nodeWidth, nodeHeight);
    }
  };
  var drawText = function drawText2() {
    r2.drawElementText(context, node, null, drawLabel);
  };
  var ghost = node.pstyle("ghost").value === "yes";
  if (ghost) {
    var gx = node.pstyle("ghost-offset-x").pfValue;
    var gy = node.pstyle("ghost-offset-y").pfValue;
    var ghostOpacity = node.pstyle("ghost-opacity").value;
    var effGhostOpacity = ghostOpacity * eleOpacity;
    context.translate(gx, gy);
    setupOutlineColor();
    drawOutline();
    setupShapeColor(ghostOpacity * bgOpacity);
    drawShape();
    drawImages(effGhostOpacity, true);
    setupBorderColor(ghostOpacity * borderOpacity);
    drawBorder();
    drawPie(darkness !== 0 || borderWidth !== 0);
    drawStripe(darkness !== 0 || borderWidth !== 0);
    drawImages(effGhostOpacity, false);
    darken(effGhostOpacity);
    context.translate(-gx, -gy);
  }
  if (usePaths) {
    context.translate(-pos.x, -pos.y);
  }
  drawUnderlay();
  if (usePaths) {
    context.translate(pos.x, pos.y);
  }
  setupOutlineColor();
  drawOutline();
  setupShapeColor();
  drawShape();
  drawImages(eleOpacity, true);
  setupBorderColor();
  drawBorder();
  drawPie(darkness !== 0 || borderWidth !== 0);
  drawStripe(darkness !== 0 || borderWidth !== 0);
  drawImages(eleOpacity, false);
  darken();
  if (usePaths) {
    context.translate(-pos.x, -pos.y);
  }
  drawText();
  drawOverlay();
  if (shiftToOriginWithBb) {
    context.translate(bb.x1, bb.y1);
  }
};
var drawNodeOverlayUnderlay = function drawNodeOverlayUnderlay2(overlayOrUnderlay) {
  if (!["overlay", "underlay"].includes(overlayOrUnderlay)) {
    throw new Error("Invalid state");
  }
  return function(context, node, pos, nodeWidth, nodeHeight) {
    var r2 = this;
    if (!node.visible()) {
      return;
    }
    var padding = node.pstyle("".concat(overlayOrUnderlay, "-padding")).pfValue;
    var opacity = node.pstyle("".concat(overlayOrUnderlay, "-opacity")).value;
    var color = node.pstyle("".concat(overlayOrUnderlay, "-color")).value;
    var shape = node.pstyle("".concat(overlayOrUnderlay, "-shape")).value;
    var radius2 = node.pstyle("".concat(overlayOrUnderlay, "-corner-radius")).value;
    if (opacity > 0) {
      pos = pos || node.position();
      if (nodeWidth == null || nodeHeight == null) {
        var _padding = node.padding();
        nodeWidth = node.width() + 2 * _padding;
        nodeHeight = node.height() + 2 * _padding;
      }
      r2.colorFillStyle(context, color[0], color[1], color[2], opacity);
      r2.nodeShapes[shape].draw(context, pos.x, pos.y, nodeWidth + padding * 2, nodeHeight + padding * 2, radius2);
      context.fill();
    }
  };
};
CRp$6.drawNodeOverlay = drawNodeOverlayUnderlay("overlay");
CRp$6.drawNodeUnderlay = drawNodeOverlayUnderlay("underlay");
CRp$6.hasPie = function(node) {
  node = node[0];
  return node._private.hasPie;
};
CRp$6.hasStripe = function(node) {
  node = node[0];
  return node._private.hasStripe;
};
CRp$6.drawPie = function(context, node, nodeOpacity, pos) {
  node = node[0];
  pos = pos || node.position();
  var cyStyle = node.cy().style();
  var pieSize = node.pstyle("pie-size");
  var hole = node.pstyle("pie-hole");
  var overallStartAngle = node.pstyle("pie-start-angle").pfValue;
  var x3 = pos.x;
  var y3 = pos.y;
  var nodeW = node.width();
  var nodeH = node.height();
  var radius2 = Math.min(nodeW, nodeH) / 2;
  var holeRadius;
  var lastPercent = 0;
  var usePaths = this.usePaths();
  if (usePaths) {
    x3 = 0;
    y3 = 0;
  }
  if (pieSize.units === "%") {
    radius2 = radius2 * pieSize.pfValue;
  } else if (pieSize.pfValue !== void 0) {
    radius2 = pieSize.pfValue / 2;
  }
  if (hole.units === "%") {
    holeRadius = radius2 * hole.pfValue;
  } else if (hole.pfValue !== void 0) {
    holeRadius = hole.pfValue / 2;
  }
  if (holeRadius >= radius2) {
    return;
  }
  for (var i2 = 1; i2 <= cyStyle.pieBackgroundN; i2++) {
    var size3 = node.pstyle("pie-" + i2 + "-background-size").value;
    var color = node.pstyle("pie-" + i2 + "-background-color").value;
    var opacity = node.pstyle("pie-" + i2 + "-background-opacity").value * nodeOpacity;
    var percent = size3 / 100;
    if (percent + lastPercent > 1) {
      percent = 1 - lastPercent;
    }
    var angleStart = 1.5 * Math.PI + 2 * Math.PI * lastPercent;
    angleStart += overallStartAngle;
    var angleDelta = 2 * Math.PI * percent;
    var angleEnd = angleStart + angleDelta;
    if (size3 === 0 || lastPercent >= 1 || lastPercent + percent > 1) {
      continue;
    }
    if (holeRadius === 0) {
      context.beginPath();
      context.moveTo(x3, y3);
      context.arc(x3, y3, radius2, angleStart, angleEnd);
      context.closePath();
    } else {
      context.beginPath();
      context.arc(x3, y3, radius2, angleStart, angleEnd);
      context.arc(x3, y3, holeRadius, angleEnd, angleStart, true);
      context.closePath();
    }
    this.colorFillStyle(context, color[0], color[1], color[2], opacity);
    context.fill();
    lastPercent += percent;
  }
};
CRp$6.drawStripe = function(context, node, nodeOpacity, pos) {
  node = node[0];
  pos = pos || node.position();
  var cyStyle = node.cy().style();
  var x3 = pos.x;
  var y3 = pos.y;
  var nodeW = node.width();
  var nodeH = node.height();
  var lastPercent = 0;
  var usePaths = this.usePaths();
  context.save();
  var direction = node.pstyle("stripe-direction").value;
  var stripeSize = node.pstyle("stripe-size");
  switch (direction) {
    case "vertical":
      break;
    // default
    case "righward":
      context.rotate(-Math.PI / 2);
      break;
  }
  var stripeW = nodeW;
  var stripeH = nodeH;
  if (stripeSize.units === "%") {
    stripeW = stripeW * stripeSize.pfValue;
    stripeH = stripeH * stripeSize.pfValue;
  } else if (stripeSize.pfValue !== void 0) {
    stripeW = stripeSize.pfValue;
    stripeH = stripeSize.pfValue;
  }
  if (usePaths) {
    x3 = 0;
    y3 = 0;
  }
  y3 -= stripeW / 2;
  x3 -= stripeH / 2;
  for (var i2 = 1; i2 <= cyStyle.stripeBackgroundN; i2++) {
    var size3 = node.pstyle("stripe-" + i2 + "-background-size").value;
    var color = node.pstyle("stripe-" + i2 + "-background-color").value;
    var opacity = node.pstyle("stripe-" + i2 + "-background-opacity").value * nodeOpacity;
    var percent = size3 / 100;
    if (percent + lastPercent > 1) {
      percent = 1 - lastPercent;
    }
    if (size3 === 0 || lastPercent >= 1 || lastPercent + percent > 1) {
      continue;
    }
    context.beginPath();
    context.rect(x3, y3 + stripeH * lastPercent, stripeW, stripeH * percent);
    context.closePath();
    this.colorFillStyle(context, color[0], color[1], color[2], opacity);
    context.fill();
    lastPercent += percent;
  }
  context.restore();
};
var CRp$5 = {};
var motionBlurDelay = 100;
CRp$5.getPixelRatio = function() {
  var context = this.data.contexts[0];
  if (this.forcedPixelRatio != null) {
    return this.forcedPixelRatio;
  }
  var containerWindow = this.cy.window();
  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return (containerWindow.devicePixelRatio || 1) / backingStore;
};
CRp$5.paintCache = function(context) {
  var caches = this.paintCaches = this.paintCaches || [];
  var needToCreateCache = true;
  var cache3;
  for (var i2 = 0; i2 < caches.length; i2++) {
    cache3 = caches[i2];
    if (cache3.context === context) {
      needToCreateCache = false;
      break;
    }
  }
  if (needToCreateCache) {
    cache3 = {
      context
    };
    caches.push(cache3);
  }
  return cache3;
};
CRp$5.createGradientStyleFor = function(context, shapeStyleName, ele, fill, opacity) {
  var gradientStyle;
  var usePaths = this.usePaths();
  var colors2 = ele.pstyle(shapeStyleName + "-gradient-stop-colors").value, positions2 = ele.pstyle(shapeStyleName + "-gradient-stop-positions").pfValue;
  if (fill === "radial-gradient") {
    if (ele.isEdge()) {
      var start = ele.sourceEndpoint(), end = ele.targetEndpoint(), mid = ele.midpoint();
      var d1 = dist(start, mid);
      var d2 = dist(end, mid);
      gradientStyle = context.createRadialGradient(mid.x, mid.y, 0, mid.x, mid.y, Math.max(d1, d2));
    } else {
      var pos = usePaths ? {
        x: 0,
        y: 0
      } : ele.position(), width2 = ele.paddedWidth(), height2 = ele.paddedHeight();
      gradientStyle = context.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, Math.max(width2, height2));
    }
  } else {
    if (ele.isEdge()) {
      var _start = ele.sourceEndpoint(), _end = ele.targetEndpoint();
      gradientStyle = context.createLinearGradient(_start.x, _start.y, _end.x, _end.y);
    } else {
      var _pos = usePaths ? {
        x: 0,
        y: 0
      } : ele.position(), _width = ele.paddedWidth(), _height = ele.paddedHeight(), halfWidth = _width / 2, halfHeight = _height / 2;
      var direction = ele.pstyle("background-gradient-direction").value;
      switch (direction) {
        case "to-bottom":
          gradientStyle = context.createLinearGradient(_pos.x, _pos.y - halfHeight, _pos.x, _pos.y + halfHeight);
          break;
        case "to-top":
          gradientStyle = context.createLinearGradient(_pos.x, _pos.y + halfHeight, _pos.x, _pos.y - halfHeight);
          break;
        case "to-left":
          gradientStyle = context.createLinearGradient(_pos.x + halfWidth, _pos.y, _pos.x - halfWidth, _pos.y);
          break;
        case "to-right":
          gradientStyle = context.createLinearGradient(_pos.x - halfWidth, _pos.y, _pos.x + halfWidth, _pos.y);
          break;
        case "to-bottom-right":
        case "to-right-bottom":
          gradientStyle = context.createLinearGradient(_pos.x - halfWidth, _pos.y - halfHeight, _pos.x + halfWidth, _pos.y + halfHeight);
          break;
        case "to-top-right":
        case "to-right-top":
          gradientStyle = context.createLinearGradient(_pos.x - halfWidth, _pos.y + halfHeight, _pos.x + halfWidth, _pos.y - halfHeight);
          break;
        case "to-bottom-left":
        case "to-left-bottom":
          gradientStyle = context.createLinearGradient(_pos.x + halfWidth, _pos.y - halfHeight, _pos.x - halfWidth, _pos.y + halfHeight);
          break;
        case "to-top-left":
        case "to-left-top":
          gradientStyle = context.createLinearGradient(_pos.x + halfWidth, _pos.y + halfHeight, _pos.x - halfWidth, _pos.y - halfHeight);
          break;
      }
    }
  }
  if (!gradientStyle) return null;
  var hasPositions = positions2.length === colors2.length;
  var length = colors2.length;
  for (var i2 = 0; i2 < length; i2++) {
    gradientStyle.addColorStop(hasPositions ? positions2[i2] : i2 / (length - 1), "rgba(" + colors2[i2][0] + "," + colors2[i2][1] + "," + colors2[i2][2] + "," + opacity + ")");
  }
  return gradientStyle;
};
CRp$5.gradientFillStyle = function(context, ele, fill, opacity) {
  var gradientStyle = this.createGradientStyleFor(context, "background", ele, fill, opacity);
  if (!gradientStyle) return null;
  context.fillStyle = gradientStyle;
};
CRp$5.colorFillStyle = function(context, r2, g2, b2, a2) {
  context.fillStyle = "rgba(" + r2 + "," + g2 + "," + b2 + "," + a2 + ")";
};
CRp$5.eleFillStyle = function(context, ele, opacity) {
  var backgroundFill = ele.pstyle("background-fill").value;
  if (backgroundFill === "linear-gradient" || backgroundFill === "radial-gradient") {
    this.gradientFillStyle(context, ele, backgroundFill, opacity);
  } else {
    var backgroundColor = ele.pstyle("background-color").value;
    this.colorFillStyle(context, backgroundColor[0], backgroundColor[1], backgroundColor[2], opacity);
  }
};
CRp$5.gradientStrokeStyle = function(context, ele, fill, opacity) {
  var gradientStyle = this.createGradientStyleFor(context, "line", ele, fill, opacity);
  if (!gradientStyle) return null;
  context.strokeStyle = gradientStyle;
};
CRp$5.colorStrokeStyle = function(context, r2, g2, b2, a2) {
  context.strokeStyle = "rgba(" + r2 + "," + g2 + "," + b2 + "," + a2 + ")";
};
CRp$5.eleStrokeStyle = function(context, ele, opacity) {
  var lineFill = ele.pstyle("line-fill").value;
  if (lineFill === "linear-gradient" || lineFill === "radial-gradient") {
    this.gradientStrokeStyle(context, ele, lineFill, opacity);
  } else {
    var lineColor = ele.pstyle("line-color").value;
    this.colorStrokeStyle(context, lineColor[0], lineColor[1], lineColor[2], opacity);
  }
};
CRp$5.matchCanvasSize = function(container2) {
  var r2 = this;
  var data4 = r2.data;
  var bb = r2.findContainerClientCoords();
  var width2 = bb[2];
  var height2 = bb[3];
  var pixelRatio = r2.getPixelRatio();
  var mbPxRatio = r2.motionBlurPxRatio;
  if (container2 === r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_NODE] || container2 === r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_DRAG]) {
    pixelRatio = mbPxRatio;
  }
  var canvasWidth = width2 * pixelRatio;
  var canvasHeight = height2 * pixelRatio;
  var canvas;
  if (canvasWidth === r2.canvasWidth && canvasHeight === r2.canvasHeight) {
    return;
  }
  r2.fontCaches = null;
  var canvasContainer = data4.canvasContainer;
  canvasContainer.style.width = width2 + "px";
  canvasContainer.style.height = height2 + "px";
  for (var i2 = 0; i2 < r2.CANVAS_LAYERS; i2++) {
    canvas = data4.canvases[i2];
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = width2 + "px";
    canvas.style.height = height2 + "px";
  }
  for (var i2 = 0; i2 < r2.BUFFER_COUNT; i2++) {
    canvas = data4.bufferCanvases[i2];
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = width2 + "px";
    canvas.style.height = height2 + "px";
  }
  r2.textureMult = 1;
  if (pixelRatio <= 1) {
    canvas = data4.bufferCanvases[r2.TEXTURE_BUFFER];
    r2.textureMult = 2;
    canvas.width = canvasWidth * r2.textureMult;
    canvas.height = canvasHeight * r2.textureMult;
  }
  r2.canvasWidth = canvasWidth;
  r2.canvasHeight = canvasHeight;
  r2.pixelRatio = pixelRatio;
};
CRp$5.renderTo = function(cxt, zoom2, pan2, pxRatio) {
  this.render({
    forcedContext: cxt,
    forcedZoom: zoom2,
    forcedPan: pan2,
    drawAllLayers: true,
    forcedPxRatio: pxRatio
  });
};
CRp$5.clearCanvas = function() {
  var r2 = this;
  var data4 = r2.data;
  function clear(context) {
    context.clearRect(0, 0, r2.canvasWidth, r2.canvasHeight);
  }
  clear(data4.contexts[r2.NODE]);
  clear(data4.contexts[r2.DRAG]);
};
CRp$5.render = function(options2) {
  var r2 = this;
  options2 = options2 || staticEmptyObject();
  var cy = r2.cy;
  var forcedContext = options2.forcedContext;
  var drawAllLayers = options2.drawAllLayers;
  var drawOnlyNodeLayer = options2.drawOnlyNodeLayer;
  var forcedZoom = options2.forcedZoom;
  var forcedPan = options2.forcedPan;
  var pixelRatio = options2.forcedPxRatio === void 0 ? this.getPixelRatio() : options2.forcedPxRatio;
  var data4 = r2.data;
  var needDraw = data4.canvasNeedsRedraw;
  var textureDraw = r2.textureOnViewport && !forcedContext && (r2.pinching || r2.hoverData.dragging || r2.swipePanning || r2.data.wheelZooming);
  var motionBlur = options2.motionBlur !== void 0 ? options2.motionBlur : r2.motionBlur;
  var mbPxRatio = r2.motionBlurPxRatio;
  var hasCompoundNodes2 = cy.hasCompoundNodes();
  var inNodeDragGesture = r2.hoverData.draggingEles;
  var inBoxSelection = r2.hoverData.selecting || r2.touchData.selecting ? true : false;
  motionBlur = motionBlur && !forcedContext && r2.motionBlurEnabled && !inBoxSelection;
  var motionBlurFadeEffect = motionBlur;
  if (!forcedContext) {
    if (r2.prevPxRatio !== pixelRatio) {
      r2.invalidateContainerClientCoordsCache();
      r2.matchCanvasSize(r2.container);
      r2.redrawHint("eles", true);
      r2.redrawHint("drag", true);
    }
    r2.prevPxRatio = pixelRatio;
  }
  if (!forcedContext && r2.motionBlurTimeout) {
    clearTimeout(r2.motionBlurTimeout);
  }
  if (motionBlur) {
    if (r2.mbFrames == null) {
      r2.mbFrames = 0;
    }
    r2.mbFrames++;
    if (r2.mbFrames < 3) {
      motionBlurFadeEffect = false;
    }
    if (r2.mbFrames > r2.minMbLowQualFrames) {
      r2.motionBlurPxRatio = r2.mbPxRBlurry;
    }
  }
  if (r2.clearingMotionBlur) {
    r2.motionBlurPxRatio = 1;
  }
  if (r2.textureDrawLastFrame && !textureDraw) {
    needDraw[r2.NODE] = true;
    needDraw[r2.SELECT_BOX] = true;
  }
  var style3 = cy.style();
  var zoom2 = cy.zoom();
  var effectiveZoom = forcedZoom !== void 0 ? forcedZoom : zoom2;
  var pan2 = cy.pan();
  var effectivePan = {
    x: pan2.x,
    y: pan2.y
  };
  var vp = {
    zoom: zoom2,
    pan: {
      x: pan2.x,
      y: pan2.y
    }
  };
  var prevVp = r2.prevViewport;
  var viewportIsDiff = prevVp === void 0 || vp.zoom !== prevVp.zoom || vp.pan.x !== prevVp.pan.x || vp.pan.y !== prevVp.pan.y;
  if (!viewportIsDiff && !(inNodeDragGesture && !hasCompoundNodes2)) {
    r2.motionBlurPxRatio = 1;
  }
  if (forcedPan) {
    effectivePan = forcedPan;
  }
  effectiveZoom *= pixelRatio;
  effectivePan.x *= pixelRatio;
  effectivePan.y *= pixelRatio;
  var eles = r2.getCachedZSortedEles();
  function mbclear(context2, x3, y3, w2, h2) {
    var gco = context2.globalCompositeOperation;
    context2.globalCompositeOperation = "destination-out";
    r2.colorFillStyle(context2, 255, 255, 255, r2.motionBlurTransparency);
    context2.fillRect(x3, y3, w2, h2);
    context2.globalCompositeOperation = gco;
  }
  function setContextTransform2(context2, clear2) {
    var ePan, eZoom, w2, h2;
    if (!r2.clearingMotionBlur && (context2 === data4.bufferContexts[r2.MOTIONBLUR_BUFFER_NODE] || context2 === data4.bufferContexts[r2.MOTIONBLUR_BUFFER_DRAG])) {
      ePan = {
        x: pan2.x * mbPxRatio,
        y: pan2.y * mbPxRatio
      };
      eZoom = zoom2 * mbPxRatio;
      w2 = r2.canvasWidth * mbPxRatio;
      h2 = r2.canvasHeight * mbPxRatio;
    } else {
      ePan = effectivePan;
      eZoom = effectiveZoom;
      w2 = r2.canvasWidth;
      h2 = r2.canvasHeight;
    }
    context2.setTransform(1, 0, 0, 1, 0, 0);
    if (clear2 === "motionBlur") {
      mbclear(context2, 0, 0, w2, h2);
    } else if (!forcedContext && (clear2 === void 0 || clear2)) {
      context2.clearRect(0, 0, w2, h2);
    }
    if (!drawAllLayers) {
      context2.translate(ePan.x, ePan.y);
      context2.scale(eZoom, eZoom);
    }
    if (forcedPan) {
      context2.translate(forcedPan.x, forcedPan.y);
    }
    if (forcedZoom) {
      context2.scale(forcedZoom, forcedZoom);
    }
  }
  if (!textureDraw) {
    r2.textureDrawLastFrame = false;
  }
  if (textureDraw) {
    r2.textureDrawLastFrame = true;
    if (!r2.textureCache) {
      r2.textureCache = {};
      r2.textureCache.bb = cy.mutableElements().boundingBox();
      r2.textureCache.texture = r2.data.bufferCanvases[r2.TEXTURE_BUFFER];
      var cxt = r2.data.bufferContexts[r2.TEXTURE_BUFFER];
      cxt.setTransform(1, 0, 0, 1, 0, 0);
      cxt.clearRect(0, 0, r2.canvasWidth * r2.textureMult, r2.canvasHeight * r2.textureMult);
      r2.render({
        forcedContext: cxt,
        drawOnlyNodeLayer: true,
        forcedPxRatio: pixelRatio * r2.textureMult
      });
      var vp = r2.textureCache.viewport = {
        zoom: cy.zoom(),
        pan: cy.pan(),
        width: r2.canvasWidth,
        height: r2.canvasHeight
      };
      vp.mpan = {
        x: (0 - vp.pan.x) / vp.zoom,
        y: (0 - vp.pan.y) / vp.zoom
      };
    }
    needDraw[r2.DRAG] = false;
    needDraw[r2.NODE] = false;
    var context = data4.contexts[r2.NODE];
    var texture = r2.textureCache.texture;
    var vp = r2.textureCache.viewport;
    context.setTransform(1, 0, 0, 1, 0, 0);
    if (motionBlur) {
      mbclear(context, 0, 0, vp.width, vp.height);
    } else {
      context.clearRect(0, 0, vp.width, vp.height);
    }
    var outsideBgColor = style3.core("outside-texture-bg-color").value;
    var outsideBgOpacity = style3.core("outside-texture-bg-opacity").value;
    r2.colorFillStyle(context, outsideBgColor[0], outsideBgColor[1], outsideBgColor[2], outsideBgOpacity);
    context.fillRect(0, 0, vp.width, vp.height);
    var zoom2 = cy.zoom();
    setContextTransform2(context, false);
    context.clearRect(vp.mpan.x, vp.mpan.y, vp.width / vp.zoom / pixelRatio, vp.height / vp.zoom / pixelRatio);
    context.drawImage(texture, vp.mpan.x, vp.mpan.y, vp.width / vp.zoom / pixelRatio, vp.height / vp.zoom / pixelRatio);
  } else if (r2.textureOnViewport && !forcedContext) {
    r2.textureCache = null;
  }
  var extent2 = cy.extent();
  var vpManip = r2.pinching || r2.hoverData.dragging || r2.swipePanning || r2.data.wheelZooming || r2.hoverData.draggingEles || r2.cy.animated();
  var hideEdges = r2.hideEdgesOnViewport && vpManip;
  var needMbClear = [];
  needMbClear[r2.NODE] = !needDraw[r2.NODE] && motionBlur && !r2.clearedForMotionBlur[r2.NODE] || r2.clearingMotionBlur;
  if (needMbClear[r2.NODE]) {
    r2.clearedForMotionBlur[r2.NODE] = true;
  }
  needMbClear[r2.DRAG] = !needDraw[r2.DRAG] && motionBlur && !r2.clearedForMotionBlur[r2.DRAG] || r2.clearingMotionBlur;
  if (needMbClear[r2.DRAG]) {
    r2.clearedForMotionBlur[r2.DRAG] = true;
  }
  if (needDraw[r2.NODE] || drawAllLayers || drawOnlyNodeLayer || needMbClear[r2.NODE]) {
    var useBuffer = motionBlur && !needMbClear[r2.NODE] && mbPxRatio !== 1;
    var context = forcedContext || (useBuffer ? r2.data.bufferContexts[r2.MOTIONBLUR_BUFFER_NODE] : data4.contexts[r2.NODE]);
    var clear = motionBlur && !useBuffer ? "motionBlur" : void 0;
    setContextTransform2(context, clear);
    if (hideEdges) {
      r2.drawCachedNodes(context, eles.nondrag, pixelRatio, extent2);
    } else {
      r2.drawLayeredElements(context, eles.nondrag, pixelRatio, extent2);
    }
    if (r2.debug) {
      r2.drawDebugPoints(context, eles.nondrag);
    }
    if (!drawAllLayers && !motionBlur) {
      needDraw[r2.NODE] = false;
    }
  }
  if (!drawOnlyNodeLayer && (needDraw[r2.DRAG] || drawAllLayers || needMbClear[r2.DRAG])) {
    var useBuffer = motionBlur && !needMbClear[r2.DRAG] && mbPxRatio !== 1;
    var context = forcedContext || (useBuffer ? r2.data.bufferContexts[r2.MOTIONBLUR_BUFFER_DRAG] : data4.contexts[r2.DRAG]);
    setContextTransform2(context, motionBlur && !useBuffer ? "motionBlur" : void 0);
    if (hideEdges) {
      r2.drawCachedNodes(context, eles.drag, pixelRatio, extent2);
    } else {
      r2.drawCachedElements(context, eles.drag, pixelRatio, extent2);
    }
    if (r2.debug) {
      r2.drawDebugPoints(context, eles.drag);
    }
    if (!drawAllLayers && !motionBlur) {
      needDraw[r2.DRAG] = false;
    }
  }
  this.drawSelectionRectangle(options2, setContextTransform2);
  if (motionBlur && mbPxRatio !== 1) {
    var cxtNode = data4.contexts[r2.NODE];
    var txtNode = r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_NODE];
    var cxtDrag = data4.contexts[r2.DRAG];
    var txtDrag = r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_DRAG];
    var drawMotionBlur = function drawMotionBlur2(cxt2, txt, needClear) {
      cxt2.setTransform(1, 0, 0, 1, 0, 0);
      if (needClear || !motionBlurFadeEffect) {
        cxt2.clearRect(0, 0, r2.canvasWidth, r2.canvasHeight);
      } else {
        mbclear(cxt2, 0, 0, r2.canvasWidth, r2.canvasHeight);
      }
      var pxr = mbPxRatio;
      cxt2.drawImage(
        txt,
        // img
        0,
        0,
        // sx, sy
        r2.canvasWidth * pxr,
        r2.canvasHeight * pxr,
        // sw, sh
        0,
        0,
        // x, y
        r2.canvasWidth,
        r2.canvasHeight
        // w, h
      );
    };
    if (needDraw[r2.NODE] || needMbClear[r2.NODE]) {
      drawMotionBlur(cxtNode, txtNode, needMbClear[r2.NODE]);
      needDraw[r2.NODE] = false;
    }
    if (needDraw[r2.DRAG] || needMbClear[r2.DRAG]) {
      drawMotionBlur(cxtDrag, txtDrag, needMbClear[r2.DRAG]);
      needDraw[r2.DRAG] = false;
    }
  }
  r2.prevViewport = vp;
  if (r2.clearingMotionBlur) {
    r2.clearingMotionBlur = false;
    r2.motionBlurCleared = true;
    r2.motionBlur = true;
  }
  if (motionBlur) {
    r2.motionBlurTimeout = setTimeout(function() {
      r2.motionBlurTimeout = null;
      r2.clearedForMotionBlur[r2.NODE] = false;
      r2.clearedForMotionBlur[r2.DRAG] = false;
      r2.motionBlur = false;
      r2.clearingMotionBlur = !textureDraw;
      r2.mbFrames = 0;
      needDraw[r2.NODE] = true;
      needDraw[r2.DRAG] = true;
      r2.redraw();
    }, motionBlurDelay);
  }
  if (!forcedContext) {
    cy.emit("render");
  }
};
var fpsHeight;
CRp$5.drawSelectionRectangle = function(options2, setContextTransform2) {
  var r2 = this;
  var cy = r2.cy;
  var data4 = r2.data;
  var style3 = cy.style();
  var drawOnlyNodeLayer = options2.drawOnlyNodeLayer;
  var drawAllLayers = options2.drawAllLayers;
  var needDraw = data4.canvasNeedsRedraw;
  var forcedContext = options2.forcedContext;
  if (r2.showFps || !drawOnlyNodeLayer && needDraw[r2.SELECT_BOX] && !drawAllLayers) {
    var context = forcedContext || data4.contexts[r2.SELECT_BOX];
    setContextTransform2(context);
    if (r2.selection[4] == 1 && (r2.hoverData.selecting || r2.touchData.selecting)) {
      var zoom2 = r2.cy.zoom();
      var borderWidth = style3.core("selection-box-border-width").value / zoom2;
      context.lineWidth = borderWidth;
      context.fillStyle = "rgba(" + style3.core("selection-box-color").value[0] + "," + style3.core("selection-box-color").value[1] + "," + style3.core("selection-box-color").value[2] + "," + style3.core("selection-box-opacity").value + ")";
      context.fillRect(r2.selection[0], r2.selection[1], r2.selection[2] - r2.selection[0], r2.selection[3] - r2.selection[1]);
      if (borderWidth > 0) {
        context.strokeStyle = "rgba(" + style3.core("selection-box-border-color").value[0] + "," + style3.core("selection-box-border-color").value[1] + "," + style3.core("selection-box-border-color").value[2] + "," + style3.core("selection-box-opacity").value + ")";
        context.strokeRect(r2.selection[0], r2.selection[1], r2.selection[2] - r2.selection[0], r2.selection[3] - r2.selection[1]);
      }
    }
    if (data4.bgActivePosistion && !r2.hoverData.selecting) {
      var zoom2 = r2.cy.zoom();
      var pos = data4.bgActivePosistion;
      context.fillStyle = "rgba(" + style3.core("active-bg-color").value[0] + "," + style3.core("active-bg-color").value[1] + "," + style3.core("active-bg-color").value[2] + "," + style3.core("active-bg-opacity").value + ")";
      context.beginPath();
      context.arc(pos.x, pos.y, style3.core("active-bg-size").pfValue / zoom2, 0, 2 * Math.PI);
      context.fill();
    }
    var timeToRender = r2.lastRedrawTime;
    if (r2.showFps && timeToRender) {
      timeToRender = Math.round(timeToRender);
      var fps = Math.round(1e3 / timeToRender);
      var text = "1 frame = " + timeToRender + " ms = " + fps + " fps";
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.fillStyle = "rgba(255, 0, 0, 0.75)";
      context.strokeStyle = "rgba(255, 0, 0, 0.75)";
      context.font = "30px Arial";
      if (!fpsHeight) {
        var dims = context.measureText(text);
        fpsHeight = dims.actualBoundingBoxAscent;
      }
      context.fillText(text, 0, fpsHeight);
      var maxFps = 60;
      context.strokeRect(0, fpsHeight + 10, 250, 20);
      context.fillRect(0, fpsHeight + 10, 250 * Math.min(fps / maxFps, 1), 20);
    }
    if (!drawAllLayers) {
      needDraw[r2.SELECT_BOX] = false;
    }
  }
};
function compileShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}
function createProgram(gl, vertexSource, fragementSource) {
  var vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  var fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragementSource);
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error("Could not initialize shaders");
  }
  return program;
}
function createTextureCanvas(r2, width2, height2) {
  if (height2 === void 0) {
    height2 = width2;
  }
  var canvas = r2.makeOffscreenCanvas(width2, height2);
  var ctx = canvas.context = canvas.getContext("2d");
  canvas.clear = function() {
    return ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  canvas.clear();
  return canvas;
}
function getEffectivePanZoom(r2) {
  var pixelRatio = r2.pixelRatio;
  var zoom2 = r2.cy.zoom();
  var pan2 = r2.cy.pan();
  return {
    zoom: zoom2 * pixelRatio,
    pan: {
      x: pan2.x * pixelRatio,
      y: pan2.y * pixelRatio
    }
  };
}
function getEffectiveZoom(r2) {
  var pixelRatio = r2.pixelRatio;
  var zoom2 = r2.cy.zoom();
  return zoom2 * pixelRatio;
}
function modelToRenderedPosition2(r2, pan2, zoom2, x3, y3) {
  var rx = x3 * zoom2 + pan2.x;
  var ry = y3 * zoom2 + pan2.y;
  ry = Math.round(r2.canvasHeight - ry);
  return [rx, ry];
}
function isSimpleShape(node) {
  if (node.pstyle("background-fill").value !== "solid") return false;
  if (node.pstyle("background-image").strValue !== "none") return false;
  if (node.pstyle("border-width").value === 0) return true;
  if (node.pstyle("border-opacity").value === 0) return true;
  if (node.pstyle("border-style").value !== "solid") return false;
  return true;
}
function arrayEqual(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (var i2 = 0; i2 < a1.length; i2++) {
    if (a1[i2] !== a2[i2]) {
      return false;
    }
  }
  return true;
}
function toWebGLColor(color, opacity, outArray) {
  var r2 = color[0] / 255;
  var g2 = color[1] / 255;
  var b2 = color[2] / 255;
  var a2 = opacity;
  var arr = outArray || new Array(4);
  arr[0] = r2 * a2;
  arr[1] = g2 * a2;
  arr[2] = b2 * a2;
  arr[3] = a2;
  return arr;
}
function indexToVec4(index, outArray) {
  var arr = outArray || new Array(4);
  arr[0] = (index >> 0 & 255) / 255;
  arr[1] = (index >> 8 & 255) / 255;
  arr[2] = (index >> 16 & 255) / 255;
  arr[3] = (index >> 24 & 255) / 255;
  return arr;
}
function vec4ToIndex(vec4) {
  return vec4[0] + (vec4[1] << 8) + (vec4[2] << 16) + (vec4[3] << 24);
}
function createTexture(gl, debugID) {
  var texture = gl.createTexture();
  texture.buffer = function(offscreenCanvas) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, offscreenCanvas);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
  };
  texture.deleteTexture = function() {
    gl.deleteTexture(texture);
  };
  return texture;
}
function getTypeInfo(gl, glslType) {
  switch (glslType) {
    case "float":
      return [1, gl.FLOAT, 4];
    case "vec2":
      return [2, gl.FLOAT, 4];
    case "vec3":
      return [3, gl.FLOAT, 4];
    case "vec4":
      return [4, gl.FLOAT, 4];
    case "int":
      return [1, gl.INT, 4];
    case "ivec2":
      return [2, gl.INT, 4];
  }
}
function createTypedArray(gl, glType, dataOrSize) {
  switch (glType) {
    case gl.FLOAT:
      return new Float32Array(dataOrSize);
    case gl.INT:
      return new Int32Array(dataOrSize);
  }
}
function createTypedArrayView(gl, glType, array3, stride, size3, i2) {
  switch (glType) {
    case gl.FLOAT:
      return new Float32Array(array3.buffer, i2 * stride, size3);
    case gl.INT:
      return new Int32Array(array3.buffer, i2 * stride, size3);
  }
}
function createBufferStaticDraw(gl, type, attributeLoc, dataArray) {
  var _getTypeInfo = getTypeInfo(gl, type), _getTypeInfo2 = _slicedToArray(_getTypeInfo, 2), size3 = _getTypeInfo2[0], glType = _getTypeInfo2[1];
  var data4 = createTypedArray(gl, glType, dataArray);
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data4, gl.STATIC_DRAW);
  if (glType === gl.FLOAT) {
    gl.vertexAttribPointer(attributeLoc, size3, glType, false, 0, 0);
  } else if (glType === gl.INT) {
    gl.vertexAttribIPointer(attributeLoc, size3, glType, 0, 0);
  }
  gl.enableVertexAttribArray(attributeLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buffer;
}
function createBufferDynamicDraw(gl, instances, type, attributeLoc) {
  var _getTypeInfo3 = getTypeInfo(gl, type), _getTypeInfo4 = _slicedToArray(_getTypeInfo3, 3), size3 = _getTypeInfo4[0], glType = _getTypeInfo4[1], bytes = _getTypeInfo4[2];
  var dataArray = createTypedArray(gl, glType, instances * size3);
  var stride = size3 * bytes;
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, instances * stride, gl.DYNAMIC_DRAW);
  gl.enableVertexAttribArray(attributeLoc);
  if (glType === gl.FLOAT) {
    gl.vertexAttribPointer(attributeLoc, size3, glType, false, stride, 0);
  } else if (glType === gl.INT) {
    gl.vertexAttribIPointer(attributeLoc, size3, glType, stride, 0);
  }
  gl.vertexAttribDivisor(attributeLoc, 1);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  var views = new Array(instances);
  for (var i2 = 0; i2 < instances; i2++) {
    views[i2] = createTypedArrayView(gl, glType, dataArray, stride, size3, i2);
  }
  buffer.dataArray = dataArray;
  buffer.stride = stride;
  buffer.size = size3;
  buffer.getView = function(i3) {
    return views[i3];
  };
  buffer.setPoint = function(i3, x3, y3) {
    var view = views[i3];
    view[0] = x3;
    view[1] = y3;
  };
  buffer.bufferSubData = function(count) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    if (count) {
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, dataArray, 0, count * size3);
    } else {
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, dataArray);
    }
  };
  return buffer;
}
function create3x3MatrixBufferDynamicDraw(gl, instances, attributeLoc) {
  var matrixSize = 9;
  var matrixData = new Float32Array(instances * matrixSize);
  var matrixViews = new Array(instances);
  for (var i2 = 0; i2 < instances; i2++) {
    var byteOffset = i2 * matrixSize * 4;
    matrixViews[i2] = new Float32Array(matrixData.buffer, byteOffset, matrixSize);
  }
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, matrixData.byteLength, gl.DYNAMIC_DRAW);
  for (var _i = 0; _i < 3; _i++) {
    var loc = attributeLoc + _i;
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 3 * 12, _i * 12);
    gl.vertexAttribDivisor(loc, 1);
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  buffer.getMatrixView = function(i3) {
    return matrixViews[i3];
  };
  buffer.setData = function(matrix, i3) {
    matrixViews[i3].set(matrix, 0);
  };
  buffer.bufferSubData = function() {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, matrixData);
  };
  return buffer;
}
function createPickingFrameBuffer(gl) {
  var fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  var targetTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, targetTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, targetTexture, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  fb.setFramebufferAttachmentSizes = function(width2, height2) {
    gl.bindTexture(gl.TEXTURE_2D, targetTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width2, height2, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  };
  return fb;
}
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
if (!Math.hypot) Math.hypot = function() {
  var y3 = 0, i2 = arguments.length;
  while (i2--) {
    y3 += arguments[i2] * arguments[i2];
  }
  return Math.sqrt(y3);
};
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
function identity2(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
function multiply(out, a2, b2) {
  var a00 = a2[0], a01 = a2[1], a02 = a2[2];
  var a10 = a2[3], a11 = a2[4], a12 = a2[5];
  var a20 = a2[6], a21 = a2[7], a22 = a2[8];
  var b00 = b2[0], b01 = b2[1], b02 = b2[2];
  var b10 = b2[3], b11 = b2[4], b12 = b2[5];
  var b20 = b2[6], b21 = b2[7], b22 = b2[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
function translate(out, a2, v) {
  var a00 = a2[0], a01 = a2[1], a02 = a2[2], a10 = a2[3], a11 = a2[4], a12 = a2[5], a20 = a2[6], a21 = a2[7], a22 = a2[8], x3 = v[0], y3 = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x3 * a00 + y3 * a10 + a20;
  out[7] = x3 * a01 + y3 * a11 + a21;
  out[8] = x3 * a02 + y3 * a12 + a22;
  return out;
}
function rotate(out, a2, rad) {
  var a00 = a2[0], a01 = a2[1], a02 = a2[2], a10 = a2[3], a11 = a2[4], a12 = a2[5], a20 = a2[6], a21 = a2[7], a22 = a2[8], s2 = Math.sin(rad), c2 = Math.cos(rad);
  out[0] = c2 * a00 + s2 * a10;
  out[1] = c2 * a01 + s2 * a11;
  out[2] = c2 * a02 + s2 * a12;
  out[3] = c2 * a10 - s2 * a00;
  out[4] = c2 * a11 - s2 * a01;
  out[5] = c2 * a12 - s2 * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
function scale(out, a2, v) {
  var x3 = v[0], y3 = v[1];
  out[0] = x3 * a2[0];
  out[1] = x3 * a2[1];
  out[2] = x3 * a2[2];
  out[3] = y3 * a2[3];
  out[4] = y3 * a2[4];
  out[5] = y3 * a2[5];
  out[6] = a2[6];
  out[7] = a2[7];
  out[8] = a2[8];
  return out;
}
function projection(out, width2, height2) {
  out[0] = 2 / width2;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height2;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
var Atlas = (function() {
  function Atlas2(r2, texSize, texRows, createTextureCanvas2) {
    _classCallCheck(this, Atlas2);
    this.debugID = Math.floor(Math.random() * 1e4);
    this.r = r2;
    this.texSize = texSize;
    this.texRows = texRows;
    this.texHeight = Math.floor(texSize / texRows);
    this.enableWrapping = true;
    this.locked = false;
    this.texture = null;
    this.needsBuffer = true;
    this.freePointer = {
      x: 0,
      row: 0
    };
    this.keyToLocation = /* @__PURE__ */ new Map();
    this.canvas = createTextureCanvas2(r2, texSize, texSize);
    this.scratch = createTextureCanvas2(r2, texSize, this.texHeight, "scratch");
  }
  return _createClass(Atlas2, [{
    key: "lock",
    value: function lock() {
      this.locked = true;
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      return new Set(this.keyToLocation.keys());
    }
  }, {
    key: "getScale",
    value: function getScale(_ref) {
      var w2 = _ref.w, h2 = _ref.h;
      var texHeight = this.texHeight, maxTexWidth = this.texSize;
      var scale2 = texHeight / h2;
      var texW = w2 * scale2;
      var texH = h2 * scale2;
      if (texW > maxTexWidth) {
        scale2 = maxTexWidth / w2;
        texW = w2 * scale2;
        texH = h2 * scale2;
      }
      return {
        scale: scale2,
        texW,
        texH
      };
    }
  }, {
    key: "draw",
    value: function draw(key, bb, doDrawing) {
      var _this = this;
      if (this.locked) throw new Error("can't draw, atlas is locked");
      var texSize = this.texSize, texRows = this.texRows, texHeight = this.texHeight;
      var _this$getScale = this.getScale(bb), scale2 = _this$getScale.scale, texW = _this$getScale.texW, texH = _this$getScale.texH;
      var drawAt = function drawAt2(location, canvas) {
        if (doDrawing && canvas) {
          var context = canvas.context;
          var x3 = location.x, row = location.row;
          var xOffset = x3;
          var yOffset = texHeight * row;
          context.save();
          context.translate(xOffset, yOffset);
          context.scale(scale2, scale2);
          doDrawing(context, bb);
          context.restore();
        }
      };
      var locations = [null, null];
      var drawNormal = function drawNormal2() {
        drawAt(_this.freePointer, _this.canvas);
        locations[0] = {
          x: _this.freePointer.x,
          y: _this.freePointer.row * texHeight,
          w: texW,
          h: texH
        };
        locations[1] = {
          // create a second location with a width of 0, for convenience
          x: _this.freePointer.x + texW,
          y: _this.freePointer.row * texHeight,
          w: 0,
          h: texH
        };
        _this.freePointer.x += texW;
        if (_this.freePointer.x == texSize) {
          _this.freePointer.x = 0;
          _this.freePointer.row++;
        }
      };
      var drawWrapped = function drawWrapped2() {
        var scratch = _this.scratch, canvas = _this.canvas;
        scratch.clear();
        drawAt({
          x: 0,
          row: 0
        }, scratch);
        var firstTexW = texSize - _this.freePointer.x;
        var secondTexW = texW - firstTexW;
        var h2 = texHeight;
        {
          var dx = _this.freePointer.x;
          var dy = _this.freePointer.row * texHeight;
          var w2 = firstTexW;
          canvas.context.drawImage(scratch, 0, 0, w2, h2, dx, dy, w2, h2);
          locations[0] = {
            x: dx,
            y: dy,
            w: w2,
            h: texH
          };
        }
        {
          var sx = firstTexW;
          var _dy = (_this.freePointer.row + 1) * texHeight;
          var _w = secondTexW;
          if (canvas) {
            canvas.context.drawImage(scratch, sx, 0, _w, h2, 0, _dy, _w, h2);
          }
          locations[1] = {
            x: 0,
            y: _dy,
            w: _w,
            h: texH
          };
        }
        _this.freePointer.x = secondTexW;
        _this.freePointer.row++;
      };
      var moveToStartOfNextRow = function moveToStartOfNextRow2() {
        _this.freePointer.x = 0;
        _this.freePointer.row++;
      };
      if (this.freePointer.x + texW <= texSize) {
        drawNormal();
      } else if (this.freePointer.row >= texRows - 1) {
        return false;
      } else if (this.freePointer.x === texSize) {
        moveToStartOfNextRow();
        drawNormal();
      } else if (this.enableWrapping) {
        drawWrapped();
      } else {
        moveToStartOfNextRow();
        drawNormal();
      }
      this.keyToLocation.set(key, locations);
      this.needsBuffer = true;
      return locations;
    }
  }, {
    key: "getOffsets",
    value: function getOffsets(key) {
      return this.keyToLocation.get(key);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.freePointer.x === 0 && this.freePointer.row === 0;
    }
  }, {
    key: "canFit",
    value: function canFit(bb) {
      if (this.locked) return false;
      var texSize = this.texSize, texRows = this.texRows;
      var _this$getScale2 = this.getScale(bb), texW = _this$getScale2.texW;
      if (this.freePointer.x + texW > texSize) {
        return this.freePointer.row < texRows - 1;
      }
      return true;
    }
    // called on every frame
  }, {
    key: "bufferIfNeeded",
    value: function bufferIfNeeded(gl) {
      if (!this.texture) {
        this.texture = createTexture(gl, this.debugID);
      }
      if (this.needsBuffer) {
        this.texture.buffer(this.canvas);
        this.needsBuffer = false;
        if (this.locked) {
          this.canvas = null;
          this.scratch = null;
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this.texture) {
        this.texture.deleteTexture();
        this.texture = null;
      }
      this.canvas = null;
      this.scratch = null;
      this.locked = true;
    }
  }]);
})();
var AtlasCollection = (function() {
  function AtlasCollection2(r2, texSize, texRows, createTextureCanvas2) {
    _classCallCheck(this, AtlasCollection2);
    this.r = r2;
    this.texSize = texSize;
    this.texRows = texRows;
    this.createTextureCanvas = createTextureCanvas2;
    this.atlases = [];
    this.styleKeyToAtlas = /* @__PURE__ */ new Map();
    this.markedKeys = /* @__PURE__ */ new Set();
  }
  return _createClass(AtlasCollection2, [{
    key: "getKeys",
    value: function getKeys() {
      return new Set(this.styleKeyToAtlas.keys());
    }
  }, {
    key: "_createAtlas",
    value: function _createAtlas() {
      var r2 = this.r, texSize = this.texSize, texRows = this.texRows, createTextureCanvas2 = this.createTextureCanvas;
      return new Atlas(r2, texSize, texRows, createTextureCanvas2);
    }
  }, {
    key: "_getScratchCanvas",
    value: function _getScratchCanvas() {
      if (!this.scratch) {
        var r2 = this.r, texSize = this.texSize, texRows = this.texRows, createTextureCanvas2 = this.createTextureCanvas;
        var texHeight = Math.floor(texSize / texRows);
        this.scratch = createTextureCanvas2(r2, texSize, texHeight, "scratch");
      }
      return this.scratch;
    }
  }, {
    key: "draw",
    value: function draw(key, bb, doDrawing) {
      var atlas = this.styleKeyToAtlas.get(key);
      if (!atlas) {
        atlas = this.atlases[this.atlases.length - 1];
        if (!atlas || !atlas.canFit(bb)) {
          if (atlas) atlas.lock();
          atlas = this._createAtlas();
          this.atlases.push(atlas);
        }
        atlas.draw(key, bb, doDrawing);
        this.styleKeyToAtlas.set(key, atlas);
      }
      return atlas;
    }
  }, {
    key: "getAtlas",
    value: function getAtlas(key) {
      return this.styleKeyToAtlas.get(key);
    }
  }, {
    key: "hasAtlas",
    value: function hasAtlas(key) {
      return this.styleKeyToAtlas.has(key);
    }
  }, {
    key: "markKeyForGC",
    value: function markKeyForGC(key) {
      this.markedKeys.add(key);
    }
  }, {
    key: "gc",
    value: function gc2() {
      var _this2 = this;
      var markedKeys = this.markedKeys;
      if (markedKeys.size === 0) {
        console.log("nothing to garbage collect");
        return;
      }
      var newAtlases = [];
      var newStyleKeyToAtlas = /* @__PURE__ */ new Map();
      var newAtlas = null;
      var _iterator = _createForOfIteratorHelper(this.atlases), _step;
      try {
        var _loop = function _loop2() {
          var atlas = _step.value;
          var keys = atlas.getKeys();
          var keysToCollect = intersection(markedKeys, keys);
          if (keysToCollect.size === 0) {
            newAtlases.push(atlas);
            keys.forEach(function(k) {
              return newStyleKeyToAtlas.set(k, atlas);
            });
            return 1;
          }
          if (!newAtlas) {
            newAtlas = _this2._createAtlas();
            newAtlases.push(newAtlas);
          }
          var _iterator2 = _createForOfIteratorHelper(keys), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var key = _step2.value;
              if (!keysToCollect.has(key)) {
                var _atlas$getOffsets = atlas.getOffsets(key), _atlas$getOffsets2 = _slicedToArray(_atlas$getOffsets, 2), s1 = _atlas$getOffsets2[0], s2 = _atlas$getOffsets2[1];
                if (!newAtlas.canFit({
                  w: s1.w + s2.w,
                  h: s1.h
                })) {
                  newAtlas.lock();
                  newAtlas = _this2._createAtlas();
                  newAtlases.push(newAtlas);
                }
                if (atlas.canvas) {
                  _this2._copyTextureToNewAtlas(key, atlas, newAtlas);
                  newStyleKeyToAtlas.set(key, newAtlas);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          atlas.dispose();
        };
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.atlases = newAtlases;
      this.styleKeyToAtlas = newStyleKeyToAtlas;
      this.markedKeys = /* @__PURE__ */ new Set();
    }
  }, {
    key: "_copyTextureToNewAtlas",
    value: function _copyTextureToNewAtlas(key, oldAtlas, newAtlas) {
      var _oldAtlas$getOffsets = oldAtlas.getOffsets(key), _oldAtlas$getOffsets2 = _slicedToArray(_oldAtlas$getOffsets, 2), s1 = _oldAtlas$getOffsets2[0], s2 = _oldAtlas$getOffsets2[1];
      if (s2.w === 0) {
        newAtlas.draw(key, s1, function(context) {
          context.drawImage(oldAtlas.canvas, s1.x, s1.y, s1.w, s1.h, 0, 0, s1.w, s1.h);
        });
      } else {
        var scratch = this._getScratchCanvas();
        scratch.clear();
        scratch.context.drawImage(oldAtlas.canvas, s1.x, s1.y, s1.w, s1.h, 0, 0, s1.w, s1.h);
        scratch.context.drawImage(oldAtlas.canvas, s2.x, s2.y, s2.w, s2.h, s1.w, 0, s2.w, s2.h);
        var w2 = s1.w + s2.w;
        var h2 = s1.h;
        newAtlas.draw(key, {
          w: w2,
          h: h2
        }, function(context) {
          context.drawImage(
            scratch,
            0,
            0,
            w2,
            h2,
            0,
            0,
            w2,
            h2
            // the destination context has already been translated to the correct position
          );
        });
      }
    }
  }, {
    key: "getCounts",
    value: function getCounts() {
      return {
        keyCount: this.styleKeyToAtlas.size,
        atlasCount: new Set(this.styleKeyToAtlas.values()).size
      };
    }
  }]);
})();
function intersection(set1, set2) {
  if (set1.intersection) return set1.intersection(set2);
  else return new Set(_toConsumableArray(set1).filter(function(x3) {
    return set2.has(x3);
  }));
}
var AtlasManager = (function() {
  function AtlasManager2(r2, globalOptions) {
    _classCallCheck(this, AtlasManager2);
    this.r = r2;
    this.globalOptions = globalOptions;
    this.atlasSize = globalOptions.webglTexSize;
    this.maxAtlasesPerBatch = globalOptions.webglTexPerBatch;
    this.renderTypes = /* @__PURE__ */ new Map();
    this.collections = /* @__PURE__ */ new Map();
    this.typeAndIdToKey = /* @__PURE__ */ new Map();
  }
  return _createClass(AtlasManager2, [{
    key: "getAtlasSize",
    value: function getAtlasSize() {
      return this.atlasSize;
    }
  }, {
    key: "addAtlasCollection",
    value: function addAtlasCollection(collectionName, atlasCollectionOptions) {
      var _this$globalOptions = this.globalOptions, webglTexSize = _this$globalOptions.webglTexSize, createTextureCanvas2 = _this$globalOptions.createTextureCanvas;
      var texRows = atlasCollectionOptions.texRows;
      var cachedCreateTextureCanvas = this._cacheScratchCanvas(createTextureCanvas2);
      var atlasCollection = new AtlasCollection(this.r, webglTexSize, texRows, cachedCreateTextureCanvas);
      this.collections.set(collectionName, atlasCollection);
    }
  }, {
    key: "addRenderType",
    value: function addRenderType(type, renderTypeOptions) {
      var collection4 = renderTypeOptions.collection;
      if (!this.collections.has(collection4)) throw new Error("invalid atlas collection name '".concat(collection4, "'"));
      var atlasCollection = this.collections.get(collection4);
      var opts = extend({
        type,
        atlasCollection
      }, renderTypeOptions);
      this.renderTypes.set(type, opts);
    }
  }, {
    key: "getRenderTypeOpts",
    value: function getRenderTypeOpts(type) {
      return this.renderTypes.get(type);
    }
  }, {
    key: "getAtlasCollection",
    value: function getAtlasCollection(name) {
      return this.collections.get(name);
    }
  }, {
    key: "_cacheScratchCanvas",
    value: function _cacheScratchCanvas(createTextureCanvas2) {
      var prevW = -1;
      var prevH = -1;
      var scratchCanvas = null;
      return function(r2, w2, h2, scratch) {
        if (scratch) {
          if (!scratchCanvas || w2 != prevW || h2 != prevH) {
            prevW = w2;
            prevH = h2;
            scratchCanvas = createTextureCanvas2(r2, w2, h2);
          }
          return scratchCanvas;
        } else {
          return createTextureCanvas2(r2, w2, h2);
        }
      };
    }
  }, {
    key: "_key",
    value: function _key(renderType, id2) {
      return "".concat(renderType, "-").concat(id2);
    }
    /** Marks textues associated with the element for garbage collection. */
  }, {
    key: "invalidate",
    value: function invalidate(eles) {
      var _this3 = this;
      var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$forceRedraw = _ref2.forceRedraw, forceRedraw = _ref2$forceRedraw === void 0 ? false : _ref2$forceRedraw, _ref2$filterEle = _ref2.filterEle, filterEle = _ref2$filterEle === void 0 ? function() {
        return true;
      } : _ref2$filterEle, _ref2$filterType = _ref2.filterType, filterType = _ref2$filterType === void 0 ? function() {
        return true;
      } : _ref2$filterType;
      var needGC = false;
      var runGCNow = false;
      var _iterator3 = _createForOfIteratorHelper(eles), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var ele = _step3.value;
          if (filterEle(ele)) {
            var _iterator4 = _createForOfIteratorHelper(this.renderTypes.values()), _step4;
            try {
              var _loop2 = function _loop22() {
                var opts = _step4.value;
                var renderType = opts.type;
                if (filterType(renderType)) {
                  var atlasCollection = _this3.collections.get(opts.collection);
                  var key = opts.getKey(ele);
                  var keyArray = Array.isArray(key) ? key : [key];
                  if (forceRedraw) {
                    keyArray.forEach(function(key2) {
                      return atlasCollection.markKeyForGC(key2);
                    });
                    runGCNow = true;
                  } else {
                    var id2 = opts.getID ? opts.getID(ele) : ele.id();
                    var mapKey = _this3._key(renderType, id2);
                    var oldKeyArray = _this3.typeAndIdToKey.get(mapKey);
                    if (oldKeyArray !== void 0 && !arrayEqual(keyArray, oldKeyArray)) {
                      needGC = true;
                      _this3.typeAndIdToKey["delete"](mapKey);
                      oldKeyArray.forEach(function(oldKey) {
                        return atlasCollection.markKeyForGC(oldKey);
                      });
                    }
                  }
                }
              };
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                _loop2();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (runGCNow) {
        this.gc();
        needGC = false;
      }
      return needGC;
    }
    /** Garbage collect */
  }, {
    key: "gc",
    value: function gc2() {
      var _iterator5 = _createForOfIteratorHelper(this.collections.values()), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var collection4 = _step5.value;
          collection4.gc();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "getOrCreateAtlas",
    value: function getOrCreateAtlas(ele, type, bb, styleKey) {
      var opts = this.renderTypes.get(type);
      var atlasCollection = this.collections.get(opts.collection);
      var drawn = false;
      var atlas = atlasCollection.draw(styleKey, bb, function(context) {
        if (opts.drawClipped) {
          context.save();
          context.beginPath();
          context.rect(0, 0, bb.w, bb.h);
          context.clip();
          opts.drawElement(context, ele, bb, true, true);
          context.restore();
        } else {
          opts.drawElement(context, ele, bb, true, true);
        }
        drawn = true;
      });
      if (drawn) {
        var id2 = opts.getID ? opts.getID(ele) : ele.id();
        var mapKey = this._key(type, id2);
        if (this.typeAndIdToKey.has(mapKey)) {
          this.typeAndIdToKey.get(mapKey).push(styleKey);
        } else {
          this.typeAndIdToKey.set(mapKey, [styleKey]);
        }
      }
      return atlas;
    }
  }, {
    key: "getAtlasInfo",
    value: function getAtlasInfo(ele, type) {
      var _this4 = this;
      var opts = this.renderTypes.get(type);
      var key = opts.getKey(ele);
      var keyArray = Array.isArray(key) ? key : [key];
      return keyArray.map(function(styleKey) {
        var bb = opts.getBoundingBox(ele, styleKey);
        var atlas = _this4.getOrCreateAtlas(ele, type, bb, styleKey);
        var _atlas$getOffsets3 = atlas.getOffsets(styleKey), _atlas$getOffsets4 = _slicedToArray(_atlas$getOffsets3, 2), tex1 = _atlas$getOffsets4[0], tex2 = _atlas$getOffsets4[1];
        return {
          atlas,
          tex: tex1,
          tex1,
          tex2,
          bb
        };
      });
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo() {
      var debugInfo = [];
      var _iterator6 = _createForOfIteratorHelper(this.collections), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _step6$value = _slicedToArray(_step6.value, 2), name = _step6$value[0], collection4 = _step6$value[1];
          var _collection$getCounts = collection4.getCounts(), keyCount = _collection$getCounts.keyCount, atlasCount = _collection$getCounts.atlasCount;
          debugInfo.push({
            type: name,
            keyCount,
            atlasCount
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return debugInfo;
    }
  }]);
})();
var AtlasBatchManager = (function() {
  function AtlasBatchManager2(globalOptions) {
    _classCallCheck(this, AtlasBatchManager2);
    this.globalOptions = globalOptions;
    this.atlasSize = globalOptions.webglTexSize;
    this.maxAtlasesPerBatch = globalOptions.webglTexPerBatch;
    this.batchAtlases = [];
  }
  return _createClass(AtlasBatchManager2, [{
    key: "getMaxAtlasesPerBatch",
    value: function getMaxAtlasesPerBatch() {
      return this.maxAtlasesPerBatch;
    }
  }, {
    key: "getAtlasSize",
    value: function getAtlasSize() {
      return this.atlasSize;
    }
  }, {
    key: "getIndexArray",
    value: function getIndexArray() {
      return Array.from({
        length: this.maxAtlasesPerBatch
      }, function(v, i2) {
        return i2;
      });
    }
  }, {
    key: "startBatch",
    value: function startBatch2() {
      this.batchAtlases = [];
    }
  }, {
    key: "getAtlasCount",
    value: function getAtlasCount() {
      return this.batchAtlases.length;
    }
  }, {
    key: "getAtlases",
    value: function getAtlases() {
      return this.batchAtlases;
    }
  }, {
    key: "canAddToCurrentBatch",
    value: function canAddToCurrentBatch(atlas) {
      if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
        return this.batchAtlases.includes(atlas);
      }
      return true;
    }
  }, {
    key: "getAtlasIndexForBatch",
    value: function getAtlasIndexForBatch(atlas) {
      var atlasID = this.batchAtlases.indexOf(atlas);
      if (atlasID < 0) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
          throw new Error("cannot add more atlases to batch");
        }
        this.batchAtlases.push(atlas);
        atlasID = this.batchAtlases.length - 1;
      }
      return atlasID;
    }
  }]);
})();
var circleSD = "\n  float circleSD(vec2 p, float r) {\n    return distance(vec2(0), p) - r; // signed distance\n  }\n";
var rectangleSD = "\n  float rectangleSD(vec2 p, vec2 b) {\n    vec2 d = abs(p)-b;\n    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);\n  }\n";
var roundRectangleSD = "\n  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {\n    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;\n    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;\n    vec2 q = abs(p) - b + cr.x;\n    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;\n  }\n";
var ellipseSD = "\n  float ellipseSD(vec2 p, vec2 ab) {\n    p = abs( p ); // symmetry\n\n    // find root with Newton solver\n    vec2 q = ab*(p-ab);\n    float w = (q.x<q.y)? 1.570796327 : 0.0;\n    for( int i=0; i<5; i++ ) {\n      vec2 cs = vec2(cos(w),sin(w));\n      vec2 u = ab*vec2( cs.x,cs.y);\n      vec2 v = ab*vec2(-cs.y,cs.x);\n      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));\n    }\n    \n    // compute final point and distance\n    float d = length(p-ab*vec2(cos(w),sin(w)));\n    \n    // return signed distance\n    return (dot(p/ab,p/ab)>1.0) ? d : -d;\n  }\n";
var RENDER_TARGET = {
  SCREEN: {
    name: "screen",
    screen: true
  },
  PICKING: {
    name: "picking",
    picking: true
  }
};
var TEX_PICKING_MODE = {
  // render the texture just like in RENDER_TARGET.SCREEN mode
  IGNORE: 1,
  // don't render the texture at all
  USE_BB: 2
  // render the bounding box as an opaque rectangle
};
var TEXTURE = 0;
var EDGE_STRAIGHT = 1;
var EDGE_CURVE_SEGMENT = 2;
var EDGE_ARROW = 3;
var RECTANGLE = 4;
var ROUND_RECTANGLE = 5;
var BOTTOM_ROUND_RECTANGLE = 6;
var ELLIPSE = 7;
var ElementDrawingWebGL = (function() {
  function ElementDrawingWebGL2(r2, gl, opts) {
    _classCallCheck(this, ElementDrawingWebGL2);
    this.r = r2;
    this.gl = gl;
    this.maxInstances = opts.webglBatchSize;
    this.atlasSize = opts.webglTexSize;
    this.bgColor = opts.bgColor;
    this.debug = opts.webglDebug;
    this.batchDebugInfo = [];
    opts.enableWrapping = true;
    opts.createTextureCanvas = createTextureCanvas;
    this.atlasManager = new AtlasManager(r2, opts);
    this.batchManager = new AtlasBatchManager(opts);
    this.simpleShapeOptions = /* @__PURE__ */ new Map();
    this.program = this._createShaderProgram(RENDER_TARGET.SCREEN);
    this.pickingProgram = this._createShaderProgram(RENDER_TARGET.PICKING);
    this.vao = this._createVAO();
  }
  return _createClass(ElementDrawingWebGL2, [{
    key: "addAtlasCollection",
    value: function addAtlasCollection(collectionName, opts) {
      this.atlasManager.addAtlasCollection(collectionName, opts);
    }
    /**
     * @typedef { Object } TextureRenderTypeOpts
     * @property { string } collection - name of atlas collection to render textures to
     * @property { function } getKey - returns the "style key" for an element, may be a single value or an array for multi-line lables
     * @property { function } drawElement - uses a canvas renderer to draw the element to the texture atlas
     * @property { boolean  } drawClipped - if true the context will be clipped to the bounding box before drawElement() is called, may affect performance
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } getRotation
     * @property { function } getRotationPoint
     * @property { function } getRotationOffset
     * @property { function } isVisible - an extra check for visibility in addition to ele.visible()
     * @property { function } getTexPickingMode - returns a value from the TEX_PICKING_MODE enum
     */
    /**
     * @param { string } typeName
     * @param { TextureRenderTypeOpts } opts
     */
  }, {
    key: "addTextureAtlasRenderType",
    value: function addTextureAtlasRenderType(typeName, opts) {
      this.atlasManager.addRenderType(typeName, opts);
    }
    /**
     * @typedef { Object } SimpleShapeRenderTypeOpts
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } isVisible - this is an extra check for visibility in addition to ele.visible()
     * @property { function } isSimple - check if element is a simple shape, or if it needs to fall back to texture rendering
     * @property { ShapeVisualProperties } shapeProps
     */
    /**
     * @typedef { Object } ShapeVisualProperties
     * @property { string } shape
     * @property { string } color
     * @property { string } opacity
     * @property { string } padding
     * @property { string } radius
     * @property { boolean } border
    */
    /**
     * @param { string } typeName
     * @param { SimpleShapeRenderTypeOpts } opts
     */
  }, {
    key: "addSimpleShapeRenderType",
    value: function addSimpleShapeRenderType(typeName, opts) {
      this.simpleShapeOptions.set(typeName, opts);
    }
    /**
     * Inform the atlasManager when element style keys may have changed.
     * The atlasManager can then mark unused textures for "garbage collection".
     */
  }, {
    key: "invalidate",
    value: function invalidate(eles) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, type = _ref.type;
      var atlasManager = this.atlasManager;
      if (type) {
        return atlasManager.invalidate(eles, {
          filterType: function filterType(t2) {
            return t2 === type;
          },
          forceRedraw: true
        });
      } else {
        return atlasManager.invalidate(eles);
      }
    }
    /**
     * Run texture garbage collection.
     */
  }, {
    key: "gc",
    value: function gc2() {
      this.atlasManager.gc();
    }
  }, {
    key: "_createShaderProgram",
    value: function _createShaderProgram(renderTarget) {
      var gl = this.gl;
      var vertexShaderSource = "#version 300 es\n      precision highp float;\n\n      uniform mat3 uPanZoomMatrix;\n      uniform int  uAtlasSize;\n      \n      // instanced\n      in vec2 aPosition; // a vertex from the unit square\n      \n      in mat3 aTransform; // used to transform verticies, eg into a bounding box\n      in int aVertType; // the type of thing we are rendering\n\n      // the z-index that is output when using picking mode\n      in vec4 aIndex;\n      \n      // For textures\n      in int aAtlasId; // which shader unit/atlas to use\n      in vec4 aTex; // x/y/w/h of texture in atlas\n\n      // for edges\n      in vec4 aPointAPointB;\n      in vec4 aPointCPointD;\n      in vec2 aLineWidth; // also used for node border width\n\n      // simple shapes\n      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]\n      in vec4 aColor; // also used for edges\n      in vec4 aBorderColor; // aLineWidth is used for border width\n\n      // output values passed to the fragment shader\n      out vec2 vTexCoord;\n      out vec4 vColor;\n      out vec2 vPosition;\n      // flat values are not interpolated\n      flat out int vAtlasId; \n      flat out int vVertType;\n      flat out vec2 vTopRight;\n      flat out vec2 vBotLeft;\n      flat out vec4 vCornerRadius;\n      flat out vec4 vBorderColor;\n      flat out vec2 vBorderWidth;\n      flat out vec4 vIndex;\n      \n      void main(void) {\n        int vid = gl_VertexID;\n        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below\n\n        if(aVertType == ".concat(TEXTURE, ") {\n          float texX = aTex.x; // texture coordinates\n          float texY = aTex.y;\n          float texW = aTex.z;\n          float texH = aTex.w;\n\n          if(vid == 1 || vid == 2 || vid == 4) {\n            texX += texW;\n          }\n          if(vid == 2 || vid == 4 || vid == 5) {\n            texY += texH;\n          }\n\n          float d = float(uAtlasSize);\n          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(RECTANGLE, " || aVertType == ").concat(ELLIPSE, " \n             || aVertType == ").concat(ROUND_RECTANGLE, " || aVertType == ").concat(BOTTOM_ROUND_RECTANGLE, ") { // simple shapes\n\n          // the bounding box is needed by the fragment shader\n          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat\n          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat\n          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated\n\n          // calculations are done in the fragment shader, just pass these along\n          vColor = aColor;\n          vCornerRadius = aCornerRadius;\n          vBorderColor = aBorderColor;\n          vBorderWidth = aLineWidth;\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(EDGE_STRAIGHT, ") {\n          vec2 source = aPointAPointB.xy;\n          vec2 target = aPointAPointB.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          // stretch the unit square into a long skinny rectangle\n          vec2 xBasis = target - source;\n          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));\n          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;\n\n          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(EDGE_CURVE_SEGMENT, ") {\n          vec2 pointA = aPointAPointB.xy;\n          vec2 pointB = aPointAPointB.zw;\n          vec2 pointC = aPointCPointD.xy;\n          vec2 pointD = aPointCPointD.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          vec2 p0, p1, p2, pos;\n          if(position.x == 0.0) { // The left side of the unit square\n            p0 = pointA;\n            p1 = pointB;\n            p2 = pointC;\n            pos = position;\n          } else { // The right side of the unit square, use same approach but flip the geometry upside down\n            p0 = pointD;\n            p1 = pointC;\n            p2 = pointB;\n            pos = vec2(0.0, -position.y);\n          }\n\n          vec2 p01 = p1 - p0;\n          vec2 p12 = p2 - p1;\n          vec2 p21 = p1 - p2;\n\n          // Find the normal vector.\n          vec2 tangent = normalize(normalize(p12) + normalize(p01));\n          vec2 normal = vec2(-tangent.y, tangent.x);\n\n          // Find the vector perpendicular to p0 -> p1.\n          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));\n\n          // Determine the bend direction.\n          float sigma = sign(dot(p01 + p21, normal));\n          float width = aLineWidth[0];\n\n          if(sign(pos.y) == -sigma) {\n            // This is an intersecting vertex. Adjust the position so that there's no overlap.\n            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          } else {\n            // This is a non-intersecting vertex. Treat it like a mitre join.\n            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          }\n\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(EDGE_ARROW, " && vid < 3) {\n          // massage the first triangle into an edge arrow\n          if(vid == 0)\n            position = vec2(-0.15, -0.3);\n          if(vid == 1)\n            position = vec2(  0.0,  0.0);\n          if(vid == 2)\n            position = vec2( 0.15, -0.3);\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n          vColor = aColor;\n        }\n        else {\n          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space\n        }\n\n        vAtlasId = aAtlasId;\n        vVertType = aVertType;\n        vIndex = aIndex;\n      }\n    ");
      var idxs = this.batchManager.getIndexArray();
      var fragmentShaderSource = "#version 300 es\n      precision highp float;\n\n      // declare texture unit for each texture atlas in the batch\n      ".concat(idxs.map(function(i3) {
        return "uniform sampler2D uTexture".concat(i3, ";");
      }).join("\n	"), "\n\n      uniform vec4 uBGColor;\n      uniform float uZoom;\n\n      in vec2 vTexCoord;\n      in vec4 vColor;\n      in vec2 vPosition; // model coordinates\n\n      flat in int vAtlasId;\n      flat in vec4 vIndex;\n      flat in int vVertType;\n      flat in vec2 vTopRight;\n      flat in vec2 vBotLeft;\n      flat in vec4 vCornerRadius;\n      flat in vec4 vBorderColor;\n      flat in vec2 vBorderWidth;\n\n      out vec4 outColor;\n\n      ").concat(circleSD, "\n      ").concat(rectangleSD, "\n      ").concat(roundRectangleSD, "\n      ").concat(ellipseSD, "\n\n      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha\n        return vec4( \n          top.rgb + (bot.rgb * (1.0 - top.a)),\n          top.a   + (bot.a   * (1.0 - top.a)) \n        );\n      }\n\n      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance\n        // scale to the zoom level so that borders don't look blurry when zoomed in\n        // note 1.5 is an aribitrary value chosen because it looks good\n        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); \n      }\n\n      void main(void) {\n        if(vVertType == ").concat(TEXTURE, ") {\n          // look up the texel from the texture unit\n          ").concat(idxs.map(function(i3) {
        return "if(vAtlasId == ".concat(i3, ") outColor = texture(uTexture").concat(i3, ", vTexCoord);");
      }).join("\n	else "), "\n        } \n        else if(vVertType == ").concat(EDGE_ARROW, ") {\n          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';\n          outColor = blend(vColor, uBGColor);\n          outColor.a = 1.0; // make opaque, masks out line under arrow\n        }\n        else if(vVertType == ").concat(RECTANGLE, " && vBorderWidth == vec2(0.0)) { // simple rectangle with no border\n          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done\n        }\n        else if(vVertType == ").concat(RECTANGLE, " || vVertType == ").concat(ELLIPSE, " \n          || vVertType == ").concat(ROUND_RECTANGLE, " || vVertType == ").concat(BOTTOM_ROUND_RECTANGLE, ") { // use SDF\n\n          float outerBorder = vBorderWidth[0];\n          float innerBorder = vBorderWidth[1];\n          float borderPadding = outerBorder * 2.0;\n          float w = vTopRight.x - vBotLeft.x - borderPadding;\n          float h = vTopRight.y - vBotLeft.y - borderPadding;\n          vec2 b = vec2(w/2.0, h/2.0); // half width, half height\n          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center\n\n          float d; // signed distance\n          if(vVertType == ").concat(RECTANGLE, ") {\n            d = rectangleSD(p, b);\n          } else if(vVertType == ").concat(ELLIPSE, " && w == h) {\n            d = circleSD(p, b.x); // faster than ellipse\n          } else if(vVertType == ").concat(ELLIPSE, ") {\n            d = ellipseSD(p, b);\n          } else {\n            d = roundRectangleSD(p, b, vCornerRadius.wzyx);\n          }\n\n          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling\n          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box\n          if(d > 0.0) {\n            if(d > outerBorder) {\n              discard;\n            } else {\n              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);\n            }\n          } else {\n            if(d > innerBorder) {\n              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;\n              vec4 innerBorderColor = blend(vBorderColor, vColor);\n              outColor = distInterp(innerBorderColor, outerColor, d);\n            } \n            else {\n              vec4 outerColor;\n              if(innerBorder == 0.0 && outerBorder == 0.0) {\n                outerColor = vec4(0);\n              } else if(innerBorder == 0.0) {\n                outerColor = vBorderColor;\n              } else {\n                outerColor = blend(vBorderColor, vColor);\n              }\n              outColor = distInterp(vColor, outerColor, d - innerBorder);\n            }\n          }\n        }\n        else {\n          outColor = vColor;\n        }\n\n        ").concat(renderTarget.picking ? "if(outColor.a == 0.0) discard;\n             else outColor = vIndex;" : "", "\n      }\n    ");
      var program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
      program.aPosition = gl.getAttribLocation(program, "aPosition");
      program.aIndex = gl.getAttribLocation(program, "aIndex");
      program.aVertType = gl.getAttribLocation(program, "aVertType");
      program.aTransform = gl.getAttribLocation(program, "aTransform");
      program.aAtlasId = gl.getAttribLocation(program, "aAtlasId");
      program.aTex = gl.getAttribLocation(program, "aTex");
      program.aPointAPointB = gl.getAttribLocation(program, "aPointAPointB");
      program.aPointCPointD = gl.getAttribLocation(program, "aPointCPointD");
      program.aLineWidth = gl.getAttribLocation(program, "aLineWidth");
      program.aColor = gl.getAttribLocation(program, "aColor");
      program.aCornerRadius = gl.getAttribLocation(program, "aCornerRadius");
      program.aBorderColor = gl.getAttribLocation(program, "aBorderColor");
      program.uPanZoomMatrix = gl.getUniformLocation(program, "uPanZoomMatrix");
      program.uAtlasSize = gl.getUniformLocation(program, "uAtlasSize");
      program.uBGColor = gl.getUniformLocation(program, "uBGColor");
      program.uZoom = gl.getUniformLocation(program, "uZoom");
      program.uTextures = [];
      for (var i2 = 0; i2 < this.batchManager.getMaxAtlasesPerBatch(); i2++) {
        program.uTextures.push(gl.getUniformLocation(program, "uTexture".concat(i2)));
      }
      return program;
    }
  }, {
    key: "_createVAO",
    value: function _createVAO() {
      var unitSquare = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
      this.vertexCount = unitSquare.length / 2;
      var n = this.maxInstances;
      var gl = this.gl, program = this.program;
      var vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      createBufferStaticDraw(gl, "vec2", program.aPosition, unitSquare);
      this.transformBuffer = create3x3MatrixBufferDynamicDraw(gl, n, program.aTransform);
      this.indexBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aIndex);
      this.vertTypeBuffer = createBufferDynamicDraw(gl, n, "int", program.aVertType);
      this.atlasIdBuffer = createBufferDynamicDraw(gl, n, "int", program.aAtlasId);
      this.texBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aTex);
      this.pointAPointBBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aPointAPointB);
      this.pointCPointDBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aPointCPointD);
      this.lineWidthBuffer = createBufferDynamicDraw(gl, n, "vec2", program.aLineWidth);
      this.colorBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aColor);
      this.cornerRadiusBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aCornerRadius);
      this.borderColorBuffer = createBufferDynamicDraw(gl, n, "vec4", program.aBorderColor);
      gl.bindVertexArray(null);
      return vao;
    }
  }, {
    key: "buffers",
    get: function get2() {
      var _this = this;
      if (!this._buffers) {
        this._buffers = Object.keys(this).filter(function(k) {
          return endsWith(k, "Buffer");
        }).map(function(k) {
          return _this[k];
        });
      }
      return this._buffers;
    }
  }, {
    key: "startFrame",
    value: function startFrame(panZoomMatrix) {
      var renderTarget = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : RENDER_TARGET.SCREEN;
      this.panZoomMatrix = panZoomMatrix;
      this.renderTarget = renderTarget;
      this.batchDebugInfo = [];
      this.wrappedCount = 0;
      this.simpleCount = 0;
      this.startBatch();
    }
  }, {
    key: "startBatch",
    value: function startBatch2() {
      this.instanceCount = 0;
      this.batchManager.startBatch();
    }
  }, {
    key: "endFrame",
    value: function endFrame() {
      this.endBatch();
    }
  }, {
    key: "_isVisible",
    value: function _isVisible(ele, opts) {
      if (ele.visible()) {
        if (opts && opts.isVisible) {
          return opts.isVisible(ele);
        }
        return true;
      }
      return false;
    }
    /**
     * Draws a texture using the texture atlas.
     */
  }, {
    key: "drawTexture",
    value: function drawTexture(ele, eleIndex, type) {
      var atlasManager = this.atlasManager, batchManager = this.batchManager;
      var opts = atlasManager.getRenderTypeOpts(type);
      if (!this._isVisible(ele, opts)) {
        return;
      }
      if (ele.isEdge() && !this._isValidEdge(ele)) {
        return;
      }
      if (this.renderTarget.picking && opts.getTexPickingMode) {
        var mode = opts.getTexPickingMode(ele);
        if (mode === TEX_PICKING_MODE.IGNORE) {
          return;
        } else if (mode == TEX_PICKING_MODE.USE_BB) {
          this.drawPickingRectangle(ele, eleIndex, type);
          return;
        }
      }
      var atlasInfoArray = atlasManager.getAtlasInfo(ele, type);
      var _iterator = _createForOfIteratorHelper(atlasInfoArray), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var atlasInfo = _step.value;
          var atlas = atlasInfo.atlas, tex1 = atlasInfo.tex1, tex2 = atlasInfo.tex2;
          if (!batchManager.canAddToCurrentBatch(atlas)) {
            this.endBatch();
          }
          var atlasIndex = batchManager.getAtlasIndexForBatch(atlas);
          for (var _i = 0, _arr = [[tex1, true], [tex2, false]]; _i < _arr.length; _i++) {
            var _arr$_i = _slicedToArray(_arr[_i], 2), tex = _arr$_i[0], first2 = _arr$_i[1];
            if (tex.w != 0) {
              var instance = this.instanceCount;
              this.vertTypeBuffer.getView(instance)[0] = TEXTURE;
              var indexView = this.indexBuffer.getView(instance);
              indexToVec4(eleIndex, indexView);
              var atlasIdView = this.atlasIdBuffer.getView(instance);
              atlasIdView[0] = atlasIndex;
              var texView = this.texBuffer.getView(instance);
              texView[0] = tex.x;
              texView[1] = tex.y;
              texView[2] = tex.w;
              texView[3] = tex.h;
              var matrixView = this.transformBuffer.getMatrixView(instance);
              this.setTransformMatrix(ele, matrixView, opts, atlasInfo, first2);
              this.instanceCount++;
              if (!first2) this.wrappedCount++;
              if (this.instanceCount >= this.maxInstances) {
                this.endBatch();
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * matrix is expected to be a 9 element array
     * this function follows same pattern as CRp.drawCachedElementPortion(...)
     */
  }, {
    key: "setTransformMatrix",
    value: function setTransformMatrix(ele, matrix, opts, atlasInfo) {
      var first2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
      var padding = 0;
      if (opts.shapeProps && opts.shapeProps.padding) {
        padding = ele.pstyle(opts.shapeProps.padding).pfValue;
      }
      if (atlasInfo) {
        var bb = atlasInfo.bb, tex1 = atlasInfo.tex1, tex2 = atlasInfo.tex2;
        var ratio = tex1.w / (tex1.w + tex2.w);
        if (!first2) {
          ratio = 1 - ratio;
        }
        var adjBB = this._getAdjustedBB(bb, padding, first2, ratio);
        this._applyTransformMatrix(matrix, adjBB, opts, ele);
      } else {
        var _bb = opts.getBoundingBox(ele);
        var _adjBB = this._getAdjustedBB(_bb, padding, true, 1);
        this._applyTransformMatrix(matrix, _adjBB, opts, ele);
      }
    }
  }, {
    key: "_applyTransformMatrix",
    value: function _applyTransformMatrix(matrix, adjBB, opts, ele) {
      var x3, y3;
      identity2(matrix);
      var theta = opts.getRotation ? opts.getRotation(ele) : 0;
      if (theta !== 0) {
        var _opts$getRotationPoin = opts.getRotationPoint(ele), sx = _opts$getRotationPoin.x, sy = _opts$getRotationPoin.y;
        translate(matrix, matrix, [sx, sy]);
        rotate(matrix, matrix, theta);
        var offset = opts.getRotationOffset(ele);
        x3 = offset.x + (adjBB.xOffset || 0);
        y3 = offset.y + (adjBB.yOffset || 0);
      } else {
        x3 = adjBB.x1;
        y3 = adjBB.y1;
      }
      translate(matrix, matrix, [x3, y3]);
      scale(matrix, matrix, [adjBB.w, adjBB.h]);
    }
    /**
     * Adjusts a node or label BB to accomodate padding and split for wrapped textures.
     * @param bb - the original bounding box
     * @param padding - the padding to add to the bounding box
     * @param first - whether this is the first part of a wrapped texture
     * @param ratio - the ratio of the texture width of part of the text to the entire texture
     */
  }, {
    key: "_getAdjustedBB",
    value: function _getAdjustedBB(bb, padding, first2, ratio) {
      var x1 = bb.x1, y1 = bb.y1, w2 = bb.w, h2 = bb.h, yOffset = bb.yOffset;
      if (padding) {
        x1 -= padding;
        y1 -= padding;
        w2 += 2 * padding;
        h2 += 2 * padding;
      }
      var xOffset = 0;
      var adjW = w2 * ratio;
      if (first2 && ratio < 1) {
        w2 = adjW;
      } else if (!first2 && ratio < 1) {
        xOffset = w2 - adjW;
        x1 += xOffset;
        w2 = adjW;
      }
      return {
        x1,
        y1,
        w: w2,
        h: h2,
        xOffset,
        yOffset
      };
    }
    /**
     * Draw a solid opaque rectangle matching the element's Bounding Box.
     * Used by the PICKING mode to make the entire BB of a label clickable.
     */
  }, {
    key: "drawPickingRectangle",
    value: function drawPickingRectangle(ele, eleIndex, type) {
      var opts = this.atlasManager.getRenderTypeOpts(type);
      var instance = this.instanceCount;
      this.vertTypeBuffer.getView(instance)[0] = RECTANGLE;
      var indexView = this.indexBuffer.getView(instance);
      indexToVec4(eleIndex, indexView);
      var colorView = this.colorBuffer.getView(instance);
      toWebGLColor([0, 0, 0], 1, colorView);
      var matrixView = this.transformBuffer.getMatrixView(instance);
      this.setTransformMatrix(ele, matrixView, opts);
      this.simpleCount++;
      this.instanceCount++;
      if (this.instanceCount >= this.maxInstances) {
        this.endBatch();
      }
    }
    /**
     * Draw a node using either a texture or a "simple shape".
     */
  }, {
    key: "drawNode",
    value: function drawNode(node, eleIndex, type) {
      var opts = this.simpleShapeOptions.get(type);
      if (!this._isVisible(node, opts)) {
        return;
      }
      var props = opts.shapeProps;
      var vertType = this._getVertTypeForShape(node, props.shape);
      if (vertType === void 0 || opts.isSimple && !opts.isSimple(node)) {
        this.drawTexture(node, eleIndex, type);
        return;
      }
      var instance = this.instanceCount;
      this.vertTypeBuffer.getView(instance)[0] = vertType;
      if (vertType === ROUND_RECTANGLE || vertType === BOTTOM_ROUND_RECTANGLE) {
        var bb = opts.getBoundingBox(node);
        var radius2 = this._getCornerRadius(node, props.radius, bb);
        var radiusView = this.cornerRadiusBuffer.getView(instance);
        radiusView[0] = radius2;
        radiusView[1] = radius2;
        radiusView[2] = radius2;
        radiusView[3] = radius2;
        if (vertType === BOTTOM_ROUND_RECTANGLE) {
          radiusView[0] = 0;
          radiusView[2] = 0;
        }
      }
      var indexView = this.indexBuffer.getView(instance);
      indexToVec4(eleIndex, indexView);
      var color = node.pstyle(props.color).value;
      var opacity = node.pstyle(props.opacity).value;
      var colorView = this.colorBuffer.getView(instance);
      toWebGLColor(color, opacity, colorView);
      var lineWidthView = this.lineWidthBuffer.getView(instance);
      lineWidthView[0] = 0;
      lineWidthView[1] = 0;
      if (props.border) {
        var borderWidth = node.pstyle("border-width").value;
        if (borderWidth > 0) {
          var borderColor = node.pstyle("border-color").value;
          var borderOpacity = node.pstyle("border-opacity").value;
          var borderColorView = this.borderColorBuffer.getView(instance);
          toWebGLColor(borderColor, borderOpacity, borderColorView);
          var borderPos = node.pstyle("border-position").value;
          if (borderPos === "inside") {
            lineWidthView[0] = 0;
            lineWidthView[1] = -borderWidth;
          } else if (borderPos === "outside") {
            lineWidthView[0] = borderWidth;
            lineWidthView[1] = 0;
          } else {
            var halfWidth = borderWidth / 2;
            lineWidthView[0] = halfWidth;
            lineWidthView[1] = -halfWidth;
          }
        }
      }
      var matrixView = this.transformBuffer.getMatrixView(instance);
      this.setTransformMatrix(node, matrixView, opts);
      this.simpleCount++;
      this.instanceCount++;
      if (this.instanceCount >= this.maxInstances) {
        this.endBatch();
      }
    }
  }, {
    key: "_getVertTypeForShape",
    value: function _getVertTypeForShape(node, shapeProp) {
      var shape = node.pstyle(shapeProp).value;
      switch (shape) {
        case "rectangle":
          return RECTANGLE;
        case "ellipse":
          return ELLIPSE;
        case "roundrectangle":
        case "round-rectangle":
          return ROUND_RECTANGLE;
        case "bottom-round-rectangle":
          return BOTTOM_ROUND_RECTANGLE;
        default:
          return void 0;
      }
    }
  }, {
    key: "_getCornerRadius",
    value: function _getCornerRadius(node, radiusProp, _ref2) {
      var w2 = _ref2.w, h2 = _ref2.h;
      if (node.pstyle(radiusProp).value === "auto") {
        return getRoundRectangleRadius(w2, h2);
      } else {
        var radius2 = node.pstyle(radiusProp).pfValue;
        var halfWidth = w2 / 2;
        var halfHeight = h2 / 2;
        return Math.min(radius2, halfHeight, halfWidth);
      }
    }
    /**
     * Only supports drawing triangles at the moment.
     */
  }, {
    key: "drawEdgeArrow",
    value: function drawEdgeArrow(edge, eleIndex, prefix) {
      if (!edge.visible()) {
        return;
      }
      var rs = edge._private.rscratch;
      var x3, y3, angle2;
      if (prefix === "source") {
        x3 = rs.arrowStartX;
        y3 = rs.arrowStartY;
        angle2 = rs.srcArrowAngle;
      } else {
        x3 = rs.arrowEndX;
        y3 = rs.arrowEndY;
        angle2 = rs.tgtArrowAngle;
      }
      if (isNaN(x3) || x3 == null || isNaN(y3) || y3 == null || isNaN(angle2) || angle2 == null) {
        return;
      }
      var arrowShape = edge.pstyle(prefix + "-arrow-shape").value;
      if (arrowShape === "none") {
        return;
      }
      var color = edge.pstyle(prefix + "-arrow-color").value;
      var baseOpacity = edge.pstyle("opacity").value;
      var lineOpacity = edge.pstyle("line-opacity").value;
      var opacity = baseOpacity * lineOpacity;
      var lineWidth = edge.pstyle("width").pfValue;
      var scale$1 = edge.pstyle("arrow-scale").value;
      var size3 = this.r.getArrowWidth(lineWidth, scale$1);
      var instance = this.instanceCount;
      var transform7 = this.transformBuffer.getMatrixView(instance);
      identity2(transform7);
      translate(transform7, transform7, [x3, y3]);
      scale(transform7, transform7, [size3, size3]);
      rotate(transform7, transform7, angle2);
      this.vertTypeBuffer.getView(instance)[0] = EDGE_ARROW;
      var indexView = this.indexBuffer.getView(instance);
      indexToVec4(eleIndex, indexView);
      var colorView = this.colorBuffer.getView(instance);
      toWebGLColor(color, opacity, colorView);
      this.instanceCount++;
      if (this.instanceCount >= this.maxInstances) {
        this.endBatch();
      }
    }
    /**
     * Draw straight-line or bezier curve edges.
     */
  }, {
    key: "drawEdgeLine",
    value: function drawEdgeLine(edge, eleIndex) {
      if (!edge.visible()) {
        return;
      }
      var points = this._getEdgePoints(edge);
      if (!points) {
        return;
      }
      var baseOpacity = edge.pstyle("opacity").value;
      var lineOpacity = edge.pstyle("line-opacity").value;
      var width2 = edge.pstyle("width").pfValue;
      var color = edge.pstyle("line-color").value;
      var opacity = baseOpacity * lineOpacity;
      if (points.length / 2 + this.instanceCount > this.maxInstances) {
        this.endBatch();
      }
      if (points.length == 4) {
        var instance = this.instanceCount;
        this.vertTypeBuffer.getView(instance)[0] = EDGE_STRAIGHT;
        var indexView = this.indexBuffer.getView(instance);
        indexToVec4(eleIndex, indexView);
        var colorView = this.colorBuffer.getView(instance);
        toWebGLColor(color, opacity, colorView);
        var lineWidthBuffer = this.lineWidthBuffer.getView(instance);
        lineWidthBuffer[0] = width2;
        var sourceTargetView = this.pointAPointBBuffer.getView(instance);
        sourceTargetView[0] = points[0];
        sourceTargetView[1] = points[1];
        sourceTargetView[2] = points[2];
        sourceTargetView[3] = points[3];
        this.instanceCount++;
        if (this.instanceCount >= this.maxInstances) {
          this.endBatch();
        }
      } else {
        for (var i2 = 0; i2 < points.length - 2; i2 += 2) {
          var _instance = this.instanceCount;
          this.vertTypeBuffer.getView(_instance)[0] = EDGE_CURVE_SEGMENT;
          var _indexView = this.indexBuffer.getView(_instance);
          indexToVec4(eleIndex, _indexView);
          var _colorView = this.colorBuffer.getView(_instance);
          toWebGLColor(color, opacity, _colorView);
          var _lineWidthBuffer = this.lineWidthBuffer.getView(_instance);
          _lineWidthBuffer[0] = width2;
          var pAx = points[i2 - 2], pAy = points[i2 - 1];
          var pBx = points[i2], pBy = points[i2 + 1];
          var pCx = points[i2 + 2], pCy = points[i2 + 3];
          var pDx = points[i2 + 4], pDy = points[i2 + 5];
          if (i2 == 0) {
            pAx = 2 * pBx - pCx + 1e-3;
            pAy = 2 * pBy - pCy + 1e-3;
          }
          if (i2 == points.length - 4) {
            pDx = 2 * pCx - pBx + 1e-3;
            pDy = 2 * pCy - pBy + 1e-3;
          }
          var pointABView = this.pointAPointBBuffer.getView(_instance);
          pointABView[0] = pAx;
          pointABView[1] = pAy;
          pointABView[2] = pBx;
          pointABView[3] = pBy;
          var pointCDView = this.pointCPointDBuffer.getView(_instance);
          pointCDView[0] = pCx;
          pointCDView[1] = pCy;
          pointCDView[2] = pDx;
          pointCDView[3] = pDy;
          this.instanceCount++;
          if (this.instanceCount >= this.maxInstances) {
            this.endBatch();
          }
        }
      }
    }
  }, {
    key: "_isValidEdge",
    value: function _isValidEdge(edge) {
      var rs = edge._private.rscratch;
      if (rs.badLine || rs.allpts == null || isNaN(rs.allpts[0])) {
        return false;
      }
      return true;
    }
  }, {
    key: "_getEdgePoints",
    value: function _getEdgePoints(edge) {
      var rs = edge._private.rscratch;
      if (!this._isValidEdge(edge)) {
        return;
      }
      var controlPoints3 = rs.allpts;
      if (controlPoints3.length == 4) {
        return controlPoints3;
      }
      var numSegments = this._getNumSegments(edge);
      return this._getCurveSegmentPoints(controlPoints3, numSegments);
    }
  }, {
    key: "_getNumSegments",
    value: function _getNumSegments(edge) {
      var numSegments = 15;
      return Math.min(Math.max(numSegments, 5), this.maxInstances);
    }
  }, {
    key: "_getCurveSegmentPoints",
    value: function _getCurveSegmentPoints(controlPoints3, segments) {
      if (controlPoints3.length == 4) {
        return controlPoints3;
      }
      var curvePoints = Array((segments + 1) * 2);
      for (var i2 = 0; i2 <= segments; i2++) {
        if (i2 == 0) {
          curvePoints[0] = controlPoints3[0];
          curvePoints[1] = controlPoints3[1];
        } else if (i2 == segments) {
          curvePoints[i2 * 2] = controlPoints3[controlPoints3.length - 2];
          curvePoints[i2 * 2 + 1] = controlPoints3[controlPoints3.length - 1];
        } else {
          var t2 = i2 / segments;
          this._setCurvePoint(controlPoints3, t2, curvePoints, i2 * 2);
        }
      }
      return curvePoints;
    }
  }, {
    key: "_setCurvePoint",
    value: function _setCurvePoint(points, t2, curvePoints, cpi) {
      if (points.length <= 2) {
        curvePoints[cpi] = points[0];
        curvePoints[cpi + 1] = points[1];
      } else {
        var newpoints = Array(points.length - 2);
        for (var i2 = 0; i2 < newpoints.length; i2 += 2) {
          var x3 = (1 - t2) * points[i2] + t2 * points[i2 + 2];
          var y3 = (1 - t2) * points[i2 + 1] + t2 * points[i2 + 3];
          newpoints[i2] = x3;
          newpoints[i2 + 1] = y3;
        }
        return this._setCurvePoint(newpoints, t2, curvePoints, cpi);
      }
    }
  }, {
    key: "endBatch",
    value: function endBatch2() {
      var gl = this.gl, vao = this.vao, vertexCount = this.vertexCount, count = this.instanceCount;
      if (count === 0) return;
      var program = this.renderTarget.picking ? this.pickingProgram : this.program;
      gl.useProgram(program);
      gl.bindVertexArray(vao);
      var _iterator2 = _createForOfIteratorHelper(this.buffers), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var buffer = _step2.value;
          buffer.bufferSubData(count);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var atlases = this.batchManager.getAtlases();
      for (var i2 = 0; i2 < atlases.length; i2++) {
        atlases[i2].bufferIfNeeded(gl);
      }
      for (var _i2 = 0; _i2 < atlases.length; _i2++) {
        gl.activeTexture(gl.TEXTURE0 + _i2);
        gl.bindTexture(gl.TEXTURE_2D, atlases[_i2].texture);
        gl.uniform1i(program.uTextures[_i2], _i2);
      }
      gl.uniform1f(program.uZoom, getEffectiveZoom(this.r));
      gl.uniformMatrix3fv(program.uPanZoomMatrix, false, this.panZoomMatrix);
      gl.uniform1i(program.uAtlasSize, this.batchManager.getAtlasSize());
      var webglBgColor = toWebGLColor(this.bgColor, 1);
      gl.uniform4fv(program.uBGColor, webglBgColor);
      gl.drawArraysInstanced(gl.TRIANGLES, 0, vertexCount, count);
      gl.bindVertexArray(null);
      gl.bindTexture(gl.TEXTURE_2D, null);
      if (this.debug) {
        this.batchDebugInfo.push({
          count,
          // instance count
          atlasCount: atlases.length
        });
      }
      this.startBatch();
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo() {
      var atlasInfo = this.atlasManager.getDebugInfo();
      var totalAtlases = atlasInfo.reduce(function(count, info) {
        return count + info.atlasCount;
      }, 0);
      var batchInfo = this.batchDebugInfo;
      var totalInstances = batchInfo.reduce(function(count, info) {
        return count + info.count;
      }, 0);
      return {
        atlasInfo,
        totalAtlases,
        wrappedCount: this.wrappedCount,
        simpleCount: this.simpleCount,
        batchCount: batchInfo.length,
        batchInfo,
        totalInstances
      };
    }
  }]);
})();
var CRp$4 = {};
CRp$4.initWebgl = function(opts, fns) {
  var r2 = this;
  var gl = r2.data.contexts[r2.WEBGL];
  opts.bgColor = getBGColor(r2);
  opts.webglTexSize = Math.min(opts.webglTexSize, gl.getParameter(gl.MAX_TEXTURE_SIZE));
  opts.webglTexRows = Math.min(opts.webglTexRows, 54);
  opts.webglTexRowsNodes = Math.min(opts.webglTexRowsNodes, 54);
  opts.webglBatchSize = Math.min(opts.webglBatchSize, 16384);
  opts.webglTexPerBatch = Math.min(opts.webglTexPerBatch, gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
  r2.webglDebug = opts.webglDebug;
  r2.webglDebugShowAtlases = opts.webglDebugShowAtlases;
  r2.pickingFrameBuffer = createPickingFrameBuffer(gl);
  r2.pickingFrameBuffer.needsDraw = true;
  r2.drawing = new ElementDrawingWebGL(r2, gl, opts);
  var getLabelRotation3 = function getLabelRotation4(prop) {
    return function(ele) {
      return r2.getTextAngle(ele, prop);
    };
  };
  var isLabelVisible = function isLabelVisible2(prop) {
    return function(ele) {
      var label = ele.pstyle(prop);
      return label && label.value;
    };
  };
  var isLayerVisible = function isLayerVisible2(prefix) {
    return function(node) {
      return node.pstyle("".concat(prefix, "-opacity")).value > 0;
    };
  };
  var getTexPickingMode = function getTexPickingMode2(ele) {
    var enabled = ele.pstyle("text-events").strValue === "yes";
    return enabled ? TEX_PICKING_MODE.USE_BB : TEX_PICKING_MODE.IGNORE;
  };
  var getBBForSimpleShape = function getBBForSimpleShape2(node) {
    var _node$position = node.position(), x3 = _node$position.x, y3 = _node$position.y;
    var w2 = node.outerWidth();
    var h2 = node.outerHeight();
    return {
      w: w2,
      h: h2,
      x1: x3 - w2 / 2,
      y1: y3 - h2 / 2
    };
  };
  r2.drawing.addAtlasCollection("node", {
    texRows: opts.webglTexRowsNodes
  });
  r2.drawing.addAtlasCollection("label", {
    texRows: opts.webglTexRows
  });
  r2.drawing.addTextureAtlasRenderType("node-body", {
    collection: "node",
    getKey: fns.getStyleKey,
    getBoundingBox: fns.getElementBox,
    drawElement: fns.drawElement
  });
  r2.drawing.addSimpleShapeRenderType("node-body", {
    getBoundingBox: getBBForSimpleShape,
    isSimple: isSimpleShape,
    shapeProps: {
      shape: "shape",
      color: "background-color",
      opacity: "background-opacity",
      radius: "corner-radius",
      border: true
    }
  });
  r2.drawing.addSimpleShapeRenderType("node-overlay", {
    getBoundingBox: getBBForSimpleShape,
    isVisible: isLayerVisible("overlay"),
    shapeProps: {
      shape: "overlay-shape",
      color: "overlay-color",
      opacity: "overlay-opacity",
      padding: "overlay-padding",
      radius: "overlay-corner-radius"
    }
  });
  r2.drawing.addSimpleShapeRenderType("node-underlay", {
    getBoundingBox: getBBForSimpleShape,
    isVisible: isLayerVisible("underlay"),
    shapeProps: {
      shape: "underlay-shape",
      color: "underlay-color",
      opacity: "underlay-opacity",
      padding: "underlay-padding",
      radius: "underlay-corner-radius"
    }
  });
  r2.drawing.addTextureAtlasRenderType("label", {
    // node label or edge mid label
    collection: "label",
    getTexPickingMode,
    getKey: getStyleKeysForLabel(fns.getLabelKey, null),
    getBoundingBox: getBoundingBoxForLabel(fns.getLabelBox, null),
    drawClipped: true,
    drawElement: fns.drawLabel,
    getRotation: getLabelRotation3(null),
    getRotationPoint: fns.getLabelRotationPoint,
    getRotationOffset: fns.getLabelRotationOffset,
    isVisible: isLabelVisible("label")
  });
  r2.drawing.addTextureAtlasRenderType("edge-source-label", {
    collection: "label",
    getTexPickingMode,
    getKey: getStyleKeysForLabel(fns.getSourceLabelKey, "source"),
    getBoundingBox: getBoundingBoxForLabel(fns.getSourceLabelBox, "source"),
    drawClipped: true,
    drawElement: fns.drawSourceLabel,
    getRotation: getLabelRotation3("source"),
    getRotationPoint: fns.getSourceLabelRotationPoint,
    getRotationOffset: fns.getSourceLabelRotationOffset,
    isVisible: isLabelVisible("source-label")
  });
  r2.drawing.addTextureAtlasRenderType("edge-target-label", {
    collection: "label",
    getTexPickingMode,
    getKey: getStyleKeysForLabel(fns.getTargetLabelKey, "target"),
    getBoundingBox: getBoundingBoxForLabel(fns.getTargetLabelBox, "target"),
    drawClipped: true,
    drawElement: fns.drawTargetLabel,
    getRotation: getLabelRotation3("target"),
    getRotationPoint: fns.getTargetLabelRotationPoint,
    getRotationOffset: fns.getTargetLabelRotationOffset,
    isVisible: isLabelVisible("target-label")
  });
  var setGCFlag = debounce(function() {
    console.log("garbage collect flag set");
    r2.data.gc = true;
  }, 1e4);
  r2.onUpdateEleCalcs(function(willDraw, eles) {
    var gcNeeded = false;
    if (eles && eles.length > 0) {
      gcNeeded |= r2.drawing.invalidate(eles);
    }
    if (gcNeeded) {
      setGCFlag();
    }
  });
  overrideCanvasRendererFunctions(r2);
};
function getBGColor(r2) {
  var container2 = r2.cy.container();
  var cssColor = container2 && container2.style && container2.style.backgroundColor || "white";
  return color2tuple(cssColor);
}
function getLabelLines(ele, prefix) {
  var rs = ele._private.rscratch;
  return getPrefixedProperty(rs, "labelWrapCachedLines", prefix) || [];
}
var getStyleKeysForLabel = function getStyleKeysForLabel2(getKey3, prefix) {
  return function(ele) {
    var key = getKey3(ele);
    var lines = getLabelLines(ele, prefix);
    if (lines.length > 1) {
      return lines.map(function(line, index) {
        return "".concat(key, "_").concat(index);
      });
    }
    return key;
  };
};
var getBoundingBoxForLabel = function getBoundingBoxForLabel2(getBoundingBox, prefix) {
  return function(ele, styleKey) {
    var bb = getBoundingBox(ele);
    if (typeof styleKey === "string") {
      var ui = styleKey.indexOf("_");
      if (ui > 0) {
        var lineIndex = Number(styleKey.substring(ui + 1));
        var lines = getLabelLines(ele, prefix);
        var h2 = bb.h / lines.length;
        var yOffset = h2 * lineIndex;
        var y1 = bb.y1 + yOffset;
        return {
          x1: bb.x1,
          w: bb.w,
          y1,
          h: h2,
          yOffset
        };
      }
    }
    return bb;
  };
};
function overrideCanvasRendererFunctions(r2) {
  {
    var renderCanvas = r2.render;
    r2.render = function(options2) {
      options2 = options2 || {};
      var cy = r2.cy;
      if (r2.webgl) {
        if (cy.zoom() > maxZoom$1) {
          clearWebgl(r2);
          renderCanvas.call(r2, options2);
        } else {
          clearCanvas(r2);
          renderWebgl(r2, options2, RENDER_TARGET.SCREEN);
        }
      }
    };
  }
  {
    var baseFunc = r2.matchCanvasSize;
    r2.matchCanvasSize = function(container2) {
      baseFunc.call(r2, container2);
      r2.pickingFrameBuffer.setFramebufferAttachmentSizes(r2.canvasWidth, r2.canvasHeight);
      r2.pickingFrameBuffer.needsDraw = true;
    };
  }
  {
    r2.findNearestElements = function(x3, y3, interactiveElementsOnly, isTouch) {
      return findNearestElementsWebgl(r2, x3, y3);
    };
  }
  {
    var _baseFunc = r2.invalidateCachedZSortedEles;
    r2.invalidateCachedZSortedEles = function() {
      _baseFunc.call(r2);
      r2.pickingFrameBuffer.needsDraw = true;
    };
  }
  {
    var _baseFunc2 = r2.notify;
    r2.notify = function(eventName, eles) {
      _baseFunc2.call(r2, eventName, eles);
      if (eventName === "viewport" || eventName === "bounds") {
        r2.pickingFrameBuffer.needsDraw = true;
      } else if (eventName === "background") {
        r2.drawing.invalidate(eles, {
          type: "node-body"
        });
      }
    };
  }
}
function clearWebgl(r2) {
  var gl = r2.data.contexts[r2.WEBGL];
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
function clearCanvas(r2) {
  var clear = function clear2(context) {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, r2.canvasWidth, r2.canvasHeight);
    context.restore();
  };
  clear(r2.data.contexts[r2.NODE]);
  clear(r2.data.contexts[r2.DRAG]);
}
function createPanZoomMatrix(r2) {
  var width2 = r2.canvasWidth;
  var height2 = r2.canvasHeight;
  var _util$getEffectivePan = getEffectivePanZoom(r2), pan2 = _util$getEffectivePan.pan, zoom2 = _util$getEffectivePan.zoom;
  var transform7 = create();
  translate(transform7, transform7, [pan2.x, pan2.y]);
  scale(transform7, transform7, [zoom2, zoom2]);
  var projection$1 = create();
  projection(projection$1, width2, height2);
  var product = create();
  multiply(product, projection$1, transform7);
  return product;
}
function setContextTransform(r2, context) {
  var width2 = r2.canvasWidth;
  var height2 = r2.canvasHeight;
  var _util$getEffectivePan2 = getEffectivePanZoom(r2), pan2 = _util$getEffectivePan2.pan, zoom2 = _util$getEffectivePan2.zoom;
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width2, height2);
  context.translate(pan2.x, pan2.y);
  context.scale(zoom2, zoom2);
}
function drawSelectionRectangle(r2, options2) {
  r2.drawSelectionRectangle(options2, function(context) {
    return setContextTransform(r2, context);
  });
}
function drawAxes(r2) {
  var context = r2.data.contexts[r2.NODE];
  context.save();
  setContextTransform(r2, context);
  context.strokeStyle = "rgba(0, 0, 0, 0.3)";
  context.beginPath();
  context.moveTo(-1e3, 0);
  context.lineTo(1e3, 0);
  context.stroke();
  context.beginPath();
  context.moveTo(0, -1e3);
  context.lineTo(0, 1e3);
  context.stroke();
  context.restore();
}
function drawAtlases(r2) {
  var draw = function draw2(drawing, name, row) {
    var collection4 = drawing.atlasManager.getAtlasCollection(name);
    var context = r2.data.contexts[r2.NODE];
    var atlases = collection4.atlases;
    for (var _i = 0; _i < atlases.length; _i++) {
      var atlas = atlases[_i];
      var canvas = atlas.canvas;
      if (canvas) {
        var w2 = canvas.width;
        var h2 = canvas.height;
        var x3 = w2 * _i;
        var y3 = canvas.height * row;
        var scale2 = 0.4;
        context.save();
        context.scale(scale2, scale2);
        context.drawImage(canvas, x3, y3);
        context.strokeStyle = "black";
        context.rect(x3, y3, w2, h2);
        context.stroke();
        context.restore();
      }
    }
  };
  var i2 = 0;
  draw(r2.drawing, "node", i2++);
  draw(r2.drawing, "label", i2++);
}
function getPickingIndexes(r2, mX1, mY1, mX2, mY2) {
  var x3, y3, w2, h2;
  var _util$getEffectivePan3 = getEffectivePanZoom(r2), pan2 = _util$getEffectivePan3.pan, zoom2 = _util$getEffectivePan3.zoom;
  {
    var _util$modelToRendered = modelToRenderedPosition2(r2, pan2, zoom2, mX1, mY1), _util$modelToRendered2 = _slicedToArray(_util$modelToRendered, 2), cX1 = _util$modelToRendered2[0], cY1 = _util$modelToRendered2[1];
    var t2 = 6;
    x3 = cX1 - t2 / 2;
    y3 = cY1 - t2 / 2;
    w2 = t2;
    h2 = t2;
  }
  if (w2 === 0 || h2 === 0) {
    return [];
  }
  var gl = r2.data.contexts[r2.WEBGL];
  gl.bindFramebuffer(gl.FRAMEBUFFER, r2.pickingFrameBuffer);
  if (r2.pickingFrameBuffer.needsDraw) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    renderWebgl(r2, null, RENDER_TARGET.PICKING);
    r2.pickingFrameBuffer.needsDraw = false;
  }
  var n = w2 * h2;
  var data4 = new Uint8Array(n * 4);
  gl.readPixels(x3, y3, w2, h2, gl.RGBA, gl.UNSIGNED_BYTE, data4);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  var indexes = /* @__PURE__ */ new Set();
  for (var i2 = 0; i2 < n; i2++) {
    var pixel = data4.slice(i2 * 4, i2 * 4 + 4);
    var index = vec4ToIndex(pixel) - 1;
    if (index >= 0) {
      indexes.add(index);
    }
  }
  return indexes;
}
function findNearestElementsWebgl(r2, x3, y3) {
  var indexes = getPickingIndexes(r2, x3, y3);
  var eles = r2.getCachedZSortedEles();
  var node, edge;
  var _iterator = _createForOfIteratorHelper(indexes), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var index = _step.value;
      var ele = eles[index];
      if (!node && ele.isNode()) {
        node = ele;
      }
      if (!edge && ele.isEdge()) {
        edge = ele;
      }
      if (node && edge) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return [node, edge].filter(Boolean);
}
function drawEle(r2, index, ele) {
  var drawing = r2.drawing;
  index += 1;
  if (ele.isNode()) {
    drawing.drawNode(ele, index, "node-underlay");
    drawing.drawNode(ele, index, "node-body");
    drawing.drawTexture(ele, index, "label");
    drawing.drawNode(ele, index, "node-overlay");
  } else {
    drawing.drawEdgeLine(ele, index);
    drawing.drawEdgeArrow(ele, index, "source");
    drawing.drawEdgeArrow(ele, index, "target");
    drawing.drawTexture(ele, index, "label");
    drawing.drawTexture(ele, index, "edge-source-label");
    drawing.drawTexture(ele, index, "edge-target-label");
  }
}
function renderWebgl(r2, options2, renderTarget) {
  var start;
  if (r2.webglDebug) {
    start = performance.now();
  }
  var drawing = r2.drawing;
  var eleCount = 0;
  if (renderTarget.screen) {
    if (r2.data.canvasNeedsRedraw[r2.SELECT_BOX]) {
      drawSelectionRectangle(r2, options2);
    }
  }
  if (r2.data.canvasNeedsRedraw[r2.NODE] || renderTarget.picking) {
    var gl = r2.data.contexts[r2.WEBGL];
    if (renderTarget.screen) {
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    } else {
      gl.disable(gl.BLEND);
    }
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    var panZoomMatrix = createPanZoomMatrix(r2);
    var eles = r2.getCachedZSortedEles();
    eleCount = eles.length;
    drawing.startFrame(panZoomMatrix, renderTarget);
    if (renderTarget.screen) {
      for (var i2 = 0; i2 < eles.nondrag.length; i2++) {
        drawEle(r2, i2, eles.nondrag[i2]);
      }
      for (var _i2 = 0; _i2 < eles.drag.length; _i2++) {
        drawEle(r2, _i2, eles.drag[_i2]);
      }
    } else if (renderTarget.picking) {
      for (var _i3 = 0; _i3 < eles.length; _i3++) {
        drawEle(r2, _i3, eles[_i3]);
      }
    }
    drawing.endFrame();
    if (renderTarget.screen && r2.webglDebugShowAtlases) {
      drawAxes(r2);
      drawAtlases(r2);
    }
    r2.data.canvasNeedsRedraw[r2.NODE] = false;
    r2.data.canvasNeedsRedraw[r2.DRAG] = false;
  }
  if (r2.webglDebug) {
    var end = performance.now();
    var compact = false;
    var time2 = Math.ceil(end - start);
    var debugInfo = drawing.getDebugInfo();
    var report = ["".concat(eleCount, " elements"), "".concat(debugInfo.totalInstances, " instances"), "".concat(debugInfo.batchCount, " batches"), "".concat(debugInfo.totalAtlases, " atlases"), "".concat(debugInfo.wrappedCount, " wrapped textures"), "".concat(debugInfo.simpleCount, " simple shapes")].join(", ");
    if (compact) {
      console.log("WebGL (".concat(renderTarget.name, ") - time ").concat(time2, "ms, ").concat(report));
    } else {
      console.log("WebGL (".concat(renderTarget.name, ") - frame time ").concat(time2, "ms"));
      console.log("Totals:");
      console.log("  ".concat(report));
      console.log("Texture Atlases Used:");
      var atlasInfo = debugInfo.atlasInfo;
      var _iterator2 = _createForOfIteratorHelper(atlasInfo), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var info = _step2.value;
          console.log("  ".concat(info.type, ": ").concat(info.keyCount, " keys, ").concat(info.atlasCount, " atlases"));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      console.log("");
    }
  }
  if (r2.data.gc) {
    console.log("Garbage Collect!");
    r2.data.gc = false;
    drawing.gc();
  }
}
var CRp$3 = {};
CRp$3.drawPolygonPath = function(context, x3, y3, width2, height2, points) {
  var halfW = width2 / 2;
  var halfH = height2 / 2;
  if (context.beginPath) {
    context.beginPath();
  }
  context.moveTo(x3 + halfW * points[0], y3 + halfH * points[1]);
  for (var i2 = 1; i2 < points.length / 2; i2++) {
    context.lineTo(x3 + halfW * points[i2 * 2], y3 + halfH * points[i2 * 2 + 1]);
  }
  context.closePath();
};
CRp$3.drawRoundPolygonPath = function(context, x3, y3, width2, height2, points, corners) {
  corners.forEach(function(corner) {
    return drawPreparedRoundCorner(context, corner);
  });
  context.closePath();
};
CRp$3.drawRoundRectanglePath = function(context, x3, y3, width2, height2, radius2) {
  var halfWidth = width2 / 2;
  var halfHeight = height2 / 2;
  var cornerRadius = radius2 === "auto" ? getRoundRectangleRadius(width2, height2) : Math.min(radius2, halfHeight, halfWidth);
  if (context.beginPath) {
    context.beginPath();
  }
  context.moveTo(x3, y3 - halfHeight);
  context.arcTo(x3 + halfWidth, y3 - halfHeight, x3 + halfWidth, y3, cornerRadius);
  context.arcTo(x3 + halfWidth, y3 + halfHeight, x3, y3 + halfHeight, cornerRadius);
  context.arcTo(x3 - halfWidth, y3 + halfHeight, x3 - halfWidth, y3, cornerRadius);
  context.arcTo(x3 - halfWidth, y3 - halfHeight, x3, y3 - halfHeight, cornerRadius);
  context.lineTo(x3, y3 - halfHeight);
  context.closePath();
};
CRp$3.drawBottomRoundRectanglePath = function(context, x3, y3, width2, height2, radius2) {
  var halfWidth = width2 / 2;
  var halfHeight = height2 / 2;
  var cornerRadius = radius2 === "auto" ? getRoundRectangleRadius(width2, height2) : radius2;
  if (context.beginPath) {
    context.beginPath();
  }
  context.moveTo(x3, y3 - halfHeight);
  context.lineTo(x3 + halfWidth, y3 - halfHeight);
  context.lineTo(x3 + halfWidth, y3);
  context.arcTo(x3 + halfWidth, y3 + halfHeight, x3, y3 + halfHeight, cornerRadius);
  context.arcTo(x3 - halfWidth, y3 + halfHeight, x3 - halfWidth, y3, cornerRadius);
  context.lineTo(x3 - halfWidth, y3 - halfHeight);
  context.lineTo(x3, y3 - halfHeight);
  context.closePath();
};
CRp$3.drawCutRectanglePath = function(context, x3, y3, width2, height2, points, corners) {
  var halfWidth = width2 / 2;
  var halfHeight = height2 / 2;
  var cornerLength = corners === "auto" ? getCutRectangleCornerLength() : corners;
  if (context.beginPath) {
    context.beginPath();
  }
  context.moveTo(x3 - halfWidth + cornerLength, y3 - halfHeight);
  context.lineTo(x3 + halfWidth - cornerLength, y3 - halfHeight);
  context.lineTo(x3 + halfWidth, y3 - halfHeight + cornerLength);
  context.lineTo(x3 + halfWidth, y3 + halfHeight - cornerLength);
  context.lineTo(x3 + halfWidth - cornerLength, y3 + halfHeight);
  context.lineTo(x3 - halfWidth + cornerLength, y3 + halfHeight);
  context.lineTo(x3 - halfWidth, y3 + halfHeight - cornerLength);
  context.lineTo(x3 - halfWidth, y3 - halfHeight + cornerLength);
  context.closePath();
};
CRp$3.drawBarrelPath = function(context, x3, y3, width2, height2) {
  var halfWidth = width2 / 2;
  var halfHeight = height2 / 2;
  var xBegin = x3 - halfWidth;
  var xEnd = x3 + halfWidth;
  var yBegin = y3 - halfHeight;
  var yEnd = y3 + halfHeight;
  var barrelCurveConstants = getBarrelCurveConstants(width2, height2);
  var wOffset = barrelCurveConstants.widthOffset;
  var hOffset = barrelCurveConstants.heightOffset;
  var ctrlPtXOffset = barrelCurveConstants.ctrlPtOffsetPct * wOffset;
  if (context.beginPath) {
    context.beginPath();
  }
  context.moveTo(xBegin, yBegin + hOffset);
  context.lineTo(xBegin, yEnd - hOffset);
  context.quadraticCurveTo(xBegin + ctrlPtXOffset, yEnd, xBegin + wOffset, yEnd);
  context.lineTo(xEnd - wOffset, yEnd);
  context.quadraticCurveTo(xEnd - ctrlPtXOffset, yEnd, xEnd, yEnd - hOffset);
  context.lineTo(xEnd, yBegin + hOffset);
  context.quadraticCurveTo(xEnd - ctrlPtXOffset, yBegin, xEnd - wOffset, yBegin);
  context.lineTo(xBegin + wOffset, yBegin);
  context.quadraticCurveTo(xBegin + ctrlPtXOffset, yBegin, xBegin, yBegin + hOffset);
  context.closePath();
};
var sin0 = Math.sin(0);
var cos0 = Math.cos(0);
var sin = {};
var cos = {};
var ellipseStepSize = Math.PI / 40;
for (i2 = 0 * Math.PI; i2 < 2 * Math.PI; i2 += ellipseStepSize) {
  sin[i2] = Math.sin(i2);
  cos[i2] = Math.cos(i2);
}
var i2;
CRp$3.drawEllipsePath = function(context, centerX, centerY, width2, height2) {
  if (context.beginPath) {
    context.beginPath();
  }
  if (context.ellipse) {
    context.ellipse(centerX, centerY, width2 / 2, height2 / 2, 0, 0, 2 * Math.PI);
  } else {
    var xPos, yPos;
    var rw = width2 / 2;
    var rh = height2 / 2;
    for (var i2 = 0 * Math.PI; i2 < 2 * Math.PI; i2 += ellipseStepSize) {
      xPos = centerX - rw * sin[i2] * sin0 + rw * cos[i2] * cos0;
      yPos = centerY + rh * cos[i2] * sin0 + rh * sin[i2] * cos0;
      if (i2 === 0) {
        context.moveTo(xPos, yPos);
      } else {
        context.lineTo(xPos, yPos);
      }
    }
  }
  context.closePath();
};
var CRp$2 = {};
CRp$2.createBuffer = function(w2, h2) {
  var buffer = document.createElement("canvas");
  buffer.width = w2;
  buffer.height = h2;
  return [buffer, buffer.getContext("2d")];
};
CRp$2.bufferCanvasImage = function(options2) {
  var cy = this.cy;
  var eles = cy.mutableElements();
  var bb = eles.boundingBox();
  var ctrRect = this.findContainerClientCoords();
  var width2 = options2.full ? Math.ceil(bb.w) : ctrRect[2];
  var height2 = options2.full ? Math.ceil(bb.h) : ctrRect[3];
  var specdMaxDims = number$1(options2.maxWidth) || number$1(options2.maxHeight);
  var pxRatio = this.getPixelRatio();
  var scale2 = 1;
  if (options2.scale !== void 0) {
    width2 *= options2.scale;
    height2 *= options2.scale;
    scale2 = options2.scale;
  } else if (specdMaxDims) {
    var maxScaleW = Infinity;
    var maxScaleH = Infinity;
    if (number$1(options2.maxWidth)) {
      maxScaleW = scale2 * options2.maxWidth / width2;
    }
    if (number$1(options2.maxHeight)) {
      maxScaleH = scale2 * options2.maxHeight / height2;
    }
    scale2 = Math.min(maxScaleW, maxScaleH);
    width2 *= scale2;
    height2 *= scale2;
  }
  if (!specdMaxDims) {
    width2 *= pxRatio;
    height2 *= pxRatio;
    scale2 *= pxRatio;
  }
  var buffCanvas = document.createElement("canvas");
  buffCanvas.width = width2;
  buffCanvas.height = height2;
  buffCanvas.style.width = width2 + "px";
  buffCanvas.style.height = height2 + "px";
  var buffCxt = buffCanvas.getContext("2d");
  if (width2 > 0 && height2 > 0) {
    buffCxt.clearRect(0, 0, width2, height2);
    buffCxt.globalCompositeOperation = "source-over";
    var zsortedEles = this.getCachedZSortedEles();
    if (options2.full) {
      buffCxt.translate(-bb.x1 * scale2, -bb.y1 * scale2);
      buffCxt.scale(scale2, scale2);
      this.drawElements(buffCxt, zsortedEles);
      buffCxt.scale(1 / scale2, 1 / scale2);
      buffCxt.translate(bb.x1 * scale2, bb.y1 * scale2);
    } else {
      var pan2 = cy.pan();
      var translation = {
        x: pan2.x * scale2,
        y: pan2.y * scale2
      };
      scale2 *= cy.zoom();
      buffCxt.translate(translation.x, translation.y);
      buffCxt.scale(scale2, scale2);
      this.drawElements(buffCxt, zsortedEles);
      buffCxt.scale(1 / scale2, 1 / scale2);
      buffCxt.translate(-translation.x, -translation.y);
    }
    if (options2.bg) {
      buffCxt.globalCompositeOperation = "destination-over";
      buffCxt.fillStyle = options2.bg;
      buffCxt.rect(0, 0, width2, height2);
      buffCxt.fill();
    }
  }
  return buffCanvas;
};
function b64ToBlob(b64, mimeType) {
  var bytes = atob(b64);
  var buff = new ArrayBuffer(bytes.length);
  var buffUint8 = new Uint8Array(buff);
  for (var i2 = 0; i2 < bytes.length; i2++) {
    buffUint8[i2] = bytes.charCodeAt(i2);
  }
  return new Blob([buff], {
    type: mimeType
  });
}
function b64UriToB64(b64uri) {
  var i2 = b64uri.indexOf(",");
  return b64uri.substr(i2 + 1);
}
function output(options2, canvas, mimeType) {
  var getB64Uri = function getB64Uri2() {
    return canvas.toDataURL(mimeType, options2.quality);
  };
  switch (options2.output) {
    case "blob-promise":
      return new Promise$1(function(resolve2, reject2) {
        try {
          canvas.toBlob(function(blob) {
            if (blob != null) {
              resolve2(blob);
            } else {
              reject2(new Error("`canvas.toBlob()` sent a null value in its callback"));
            }
          }, mimeType, options2.quality);
        } catch (err) {
          reject2(err);
        }
      });
    case "blob":
      return b64ToBlob(b64UriToB64(getB64Uri()), mimeType);
    case "base64":
      return b64UriToB64(getB64Uri());
    case "base64uri":
    default:
      return getB64Uri();
  }
}
CRp$2.png = function(options2) {
  return output(options2, this.bufferCanvasImage(options2), "image/png");
};
CRp$2.jpg = function(options2) {
  return output(options2, this.bufferCanvasImage(options2), "image/jpeg");
};
var CRp$1 = {};
CRp$1.nodeShapeImpl = function(name, context, centerX, centerY, width2, height2, points, corners) {
  switch (name) {
    case "ellipse":
      return this.drawEllipsePath(context, centerX, centerY, width2, height2);
    case "polygon":
      return this.drawPolygonPath(context, centerX, centerY, width2, height2, points);
    case "round-polygon":
      return this.drawRoundPolygonPath(context, centerX, centerY, width2, height2, points, corners);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(context, centerX, centerY, width2, height2, corners);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(context, centerX, centerY, width2, height2, points, corners);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(context, centerX, centerY, width2, height2, corners);
    case "barrel":
      return this.drawBarrelPath(context, centerX, centerY, width2, height2);
  }
};
var CR = CanvasRenderer;
var CRp = CanvasRenderer.prototype;
CRp.CANVAS_LAYERS = 3;
CRp.SELECT_BOX = 0;
CRp.DRAG = 1;
CRp.NODE = 2;
CRp.WEBGL = 3;
CRp.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"];
CRp.BUFFER_COUNT = 3;
CRp.TEXTURE_BUFFER = 0;
CRp.MOTIONBLUR_BUFFER_NODE = 1;
CRp.MOTIONBLUR_BUFFER_DRAG = 2;
function CanvasRenderer(options2) {
  var r2 = this;
  var containerWindow = r2.cy.window();
  var document2 = containerWindow.document;
  if (options2.webgl) {
    CRp.CANVAS_LAYERS = r2.CANVAS_LAYERS = 4;
    console.log("webgl rendering enabled");
  }
  r2.data = {
    canvases: new Array(CRp.CANVAS_LAYERS),
    contexts: new Array(CRp.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(CRp.CANVAS_LAYERS),
    bufferCanvases: new Array(CRp.BUFFER_COUNT),
    bufferContexts: new Array(CRp.CANVAS_LAYERS)
  };
  var tapHlOffAttr = "-webkit-tap-highlight-color";
  var tapHlOffStyle = "rgba(0,0,0,0)";
  r2.data.canvasContainer = document2.createElement("div");
  var containerStyle = r2.data.canvasContainer.style;
  r2.data.canvasContainer.style[tapHlOffAttr] = tapHlOffStyle;
  containerStyle.position = "relative";
  containerStyle.zIndex = "0";
  containerStyle.overflow = "hidden";
  var container2 = options2.cy.container();
  container2.appendChild(r2.data.canvasContainer);
  container2.style[tapHlOffAttr] = tapHlOffStyle;
  var styleMap = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  if (ms()) {
    styleMap["-ms-touch-action"] = "none";
    styleMap["touch-action"] = "none";
  }
  for (var i2 = 0; i2 < CRp.CANVAS_LAYERS; i2++) {
    var canvas = r2.data.canvases[i2] = document2.createElement("canvas");
    var type = CRp.CANVAS_TYPES[i2];
    r2.data.contexts[i2] = canvas.getContext(type);
    if (!r2.data.contexts[i2]) {
      error("Could not create canvas of type " + type);
    }
    Object.keys(styleMap).forEach(function(k) {
      canvas.style[k] = styleMap[k];
    });
    canvas.style.position = "absolute";
    canvas.setAttribute("data-id", "layer" + i2);
    canvas.style.zIndex = String(CRp.CANVAS_LAYERS - i2);
    r2.data.canvasContainer.appendChild(canvas);
    r2.data.canvasNeedsRedraw[i2] = false;
  }
  r2.data.topCanvas = r2.data.canvases[0];
  r2.data.canvases[CRp.NODE].setAttribute("data-id", "layer" + CRp.NODE + "-node");
  r2.data.canvases[CRp.SELECT_BOX].setAttribute("data-id", "layer" + CRp.SELECT_BOX + "-selectbox");
  r2.data.canvases[CRp.DRAG].setAttribute("data-id", "layer" + CRp.DRAG + "-drag");
  if (r2.data.canvases[CRp.WEBGL]) {
    r2.data.canvases[CRp.WEBGL].setAttribute("data-id", "layer" + CRp.WEBGL + "-webgl");
  }
  for (var i2 = 0; i2 < CRp.BUFFER_COUNT; i2++) {
    r2.data.bufferCanvases[i2] = document2.createElement("canvas");
    r2.data.bufferContexts[i2] = r2.data.bufferCanvases[i2].getContext("2d");
    r2.data.bufferCanvases[i2].style.position = "absolute";
    r2.data.bufferCanvases[i2].setAttribute("data-id", "buffer" + i2);
    r2.data.bufferCanvases[i2].style.zIndex = String(-i2 - 1);
    r2.data.bufferCanvases[i2].style.visibility = "hidden";
  }
  r2.pathsEnabled = true;
  var emptyBb = makeBoundingBox();
  var getBoxCenter = function getBoxCenter2(bb) {
    return {
      x: (bb.x1 + bb.x2) / 2,
      y: (bb.y1 + bb.y2) / 2
    };
  };
  var getCenterOffset = function getCenterOffset2(bb) {
    return {
      x: -bb.w / 2,
      y: -bb.h / 2
    };
  };
  var backgroundTimestampHasChanged = function backgroundTimestampHasChanged2(ele) {
    var _p = ele[0]._private;
    var same2 = _p.oldBackgroundTimestamp === _p.backgroundTimestamp;
    return !same2;
  };
  var getStyleKey = function getStyleKey2(ele) {
    return ele[0]._private.nodeKey;
  };
  var getLabelKey = function getLabelKey2(ele) {
    return ele[0]._private.labelStyleKey;
  };
  var getSourceLabelKey = function getSourceLabelKey2(ele) {
    return ele[0]._private.sourceLabelStyleKey;
  };
  var getTargetLabelKey = function getTargetLabelKey2(ele) {
    return ele[0]._private.targetLabelStyleKey;
  };
  var drawElement = function drawElement2(context, ele, bb, scaledLabelShown, useEleOpacity) {
    return r2.drawElement(context, ele, bb, false, false, useEleOpacity);
  };
  var drawLabel = function drawLabel2(context, ele, bb, scaledLabelShown, useEleOpacity) {
    return r2.drawElementText(context, ele, bb, scaledLabelShown, "main", useEleOpacity);
  };
  var drawSourceLabel = function drawSourceLabel2(context, ele, bb, scaledLabelShown, useEleOpacity) {
    return r2.drawElementText(context, ele, bb, scaledLabelShown, "source", useEleOpacity);
  };
  var drawTargetLabel = function drawTargetLabel2(context, ele, bb, scaledLabelShown, useEleOpacity) {
    return r2.drawElementText(context, ele, bb, scaledLabelShown, "target", useEleOpacity);
  };
  var getElementBox = function getElementBox2(ele) {
    ele.boundingBox();
    return ele[0]._private.bodyBounds;
  };
  var getLabelBox = function getLabelBox2(ele) {
    ele.boundingBox();
    return ele[0]._private.labelBounds.main || emptyBb;
  };
  var getSourceLabelBox = function getSourceLabelBox2(ele) {
    ele.boundingBox();
    return ele[0]._private.labelBounds.source || emptyBb;
  };
  var getTargetLabelBox = function getTargetLabelBox2(ele) {
    ele.boundingBox();
    return ele[0]._private.labelBounds.target || emptyBb;
  };
  var isLabelVisibleAtScale = function isLabelVisibleAtScale2(ele, scaledLabelShown) {
    return scaledLabelShown;
  };
  var getElementRotationPoint = function getElementRotationPoint2(ele) {
    return getBoxCenter(getElementBox(ele));
  };
  var addTextMargin = function addTextMargin2(prefix, pt, ele) {
    var pre = prefix ? prefix + "-" : "";
    return {
      x: pt.x + ele.pstyle(pre + "text-margin-x").pfValue,
      y: pt.y + ele.pstyle(pre + "text-margin-y").pfValue
    };
  };
  var getRsPt = function getRsPt2(ele, x3, y3) {
    var rs = ele[0]._private.rscratch;
    return {
      x: rs[x3],
      y: rs[y3]
    };
  };
  var getLabelRotationPoint = function getLabelRotationPoint2(ele) {
    return addTextMargin("", getRsPt(ele, "labelX", "labelY"), ele);
  };
  var getSourceLabelRotationPoint = function getSourceLabelRotationPoint2(ele) {
    return addTextMargin("source", getRsPt(ele, "sourceLabelX", "sourceLabelY"), ele);
  };
  var getTargetLabelRotationPoint = function getTargetLabelRotationPoint2(ele) {
    return addTextMargin("target", getRsPt(ele, "targetLabelX", "targetLabelY"), ele);
  };
  var getElementRotationOffset = function getElementRotationOffset2(ele) {
    return getCenterOffset(getElementBox(ele));
  };
  var getSourceLabelRotationOffset = function getSourceLabelRotationOffset2(ele) {
    return getCenterOffset(getSourceLabelBox(ele));
  };
  var getTargetLabelRotationOffset = function getTargetLabelRotationOffset2(ele) {
    return getCenterOffset(getTargetLabelBox(ele));
  };
  var getLabelRotationOffset = function getLabelRotationOffset2(ele) {
    var bb = getLabelBox(ele);
    var p3 = getCenterOffset(getLabelBox(ele));
    if (ele.isNode()) {
      switch (ele.pstyle("text-halign").value) {
        case "left":
          p3.x = -bb.w - (bb.leftPad || 0);
          break;
        case "right":
          p3.x = -(bb.rightPad || 0);
          break;
      }
      switch (ele.pstyle("text-valign").value) {
        case "top":
          p3.y = -bb.h - (bb.topPad || 0);
          break;
        case "bottom":
          p3.y = -(bb.botPad || 0);
          break;
      }
    }
    return p3;
  };
  var eleTxrCache = r2.data.eleTxrCache = new ElementTextureCache(r2, {
    getKey: getStyleKey,
    doesEleInvalidateKey: backgroundTimestampHasChanged,
    drawElement,
    getBoundingBox: getElementBox,
    getRotationPoint: getElementRotationPoint,
    getRotationOffset: getElementRotationOffset,
    allowEdgeTxrCaching: false,
    allowParentTxrCaching: false
  });
  var lblTxrCache = r2.data.lblTxrCache = new ElementTextureCache(r2, {
    getKey: getLabelKey,
    drawElement: drawLabel,
    getBoundingBox: getLabelBox,
    getRotationPoint: getLabelRotationPoint,
    getRotationOffset: getLabelRotationOffset,
    isVisible: isLabelVisibleAtScale
  });
  var slbTxrCache = r2.data.slbTxrCache = new ElementTextureCache(r2, {
    getKey: getSourceLabelKey,
    drawElement: drawSourceLabel,
    getBoundingBox: getSourceLabelBox,
    getRotationPoint: getSourceLabelRotationPoint,
    getRotationOffset: getSourceLabelRotationOffset,
    isVisible: isLabelVisibleAtScale
  });
  var tlbTxrCache = r2.data.tlbTxrCache = new ElementTextureCache(r2, {
    getKey: getTargetLabelKey,
    drawElement: drawTargetLabel,
    getBoundingBox: getTargetLabelBox,
    getRotationPoint: getTargetLabelRotationPoint,
    getRotationOffset: getTargetLabelRotationOffset,
    isVisible: isLabelVisibleAtScale
  });
  var lyrTxrCache = r2.data.lyrTxrCache = new LayeredTextureCache(r2);
  r2.onUpdateEleCalcs(function invalidateTextureCaches(willDraw, eles) {
    eleTxrCache.invalidateElements(eles);
    lblTxrCache.invalidateElements(eles);
    slbTxrCache.invalidateElements(eles);
    tlbTxrCache.invalidateElements(eles);
    lyrTxrCache.invalidateElements(eles);
    for (var _i = 0; _i < eles.length; _i++) {
      var _p = eles[_i]._private;
      _p.oldBackgroundTimestamp = _p.backgroundTimestamp;
    }
  });
  var refineInLayers = function refineInLayers2(reqs) {
    for (var i3 = 0; i3 < reqs.length; i3++) {
      lyrTxrCache.enqueueElementRefinement(reqs[i3].ele);
    }
  };
  eleTxrCache.onDequeue(refineInLayers);
  lblTxrCache.onDequeue(refineInLayers);
  slbTxrCache.onDequeue(refineInLayers);
  tlbTxrCache.onDequeue(refineInLayers);
  if (options2.webgl) {
    r2.initWebgl(options2, {
      getStyleKey,
      getLabelKey,
      getSourceLabelKey,
      getTargetLabelKey,
      drawElement,
      drawLabel,
      drawSourceLabel,
      drawTargetLabel,
      getElementBox,
      getLabelBox,
      getSourceLabelBox,
      getTargetLabelBox,
      getElementRotationPoint,
      getElementRotationOffset,
      getLabelRotationPoint,
      getSourceLabelRotationPoint,
      getTargetLabelRotationPoint,
      getLabelRotationOffset,
      getSourceLabelRotationOffset,
      getTargetLabelRotationOffset
    });
  }
}
CRp.redrawHint = function(group2, bool) {
  var r2 = this;
  switch (group2) {
    case "eles":
      r2.data.canvasNeedsRedraw[CRp.NODE] = bool;
      break;
    case "drag":
      r2.data.canvasNeedsRedraw[CRp.DRAG] = bool;
      break;
    case "select":
      r2.data.canvasNeedsRedraw[CRp.SELECT_BOX] = bool;
      break;
    case "gc":
      r2.data.gc = true;
      break;
  }
};
var pathsImpld = typeof Path2D !== "undefined";
CRp.path2dEnabled = function(on3) {
  if (on3 === void 0) {
    return this.pathsEnabled;
  }
  this.pathsEnabled = on3 ? true : false;
};
CRp.usePaths = function() {
  return pathsImpld && this.pathsEnabled;
};
CRp.setImgSmoothing = function(context, bool) {
  if (context.imageSmoothingEnabled != null) {
    context.imageSmoothingEnabled = bool;
  } else {
    context.webkitImageSmoothingEnabled = bool;
    context.mozImageSmoothingEnabled = bool;
    context.msImageSmoothingEnabled = bool;
  }
};
CRp.getImgSmoothing = function(context) {
  if (context.imageSmoothingEnabled != null) {
    return context.imageSmoothingEnabled;
  } else {
    return context.webkitImageSmoothingEnabled || context.mozImageSmoothingEnabled || context.msImageSmoothingEnabled;
  }
};
CRp.makeOffscreenCanvas = function(width2, height2) {
  var canvas;
  if ((typeof OffscreenCanvas === "undefined" ? "undefined" : _typeof(OffscreenCanvas)) !== "undefined") {
    canvas = new OffscreenCanvas(width2, height2);
  } else {
    var containerWindow = this.cy.window();
    var document2 = containerWindow.document;
    canvas = document2.createElement("canvas");
    canvas.width = width2;
    canvas.height = height2;
  }
  return canvas;
};
[CRp$b, CRp$a, CRp$9, CRp$8, CRp$7, CRp$6, CRp$5, CRp$4, CRp$3, CRp$2, CRp$1].forEach(function(props) {
  extend(CRp, props);
});
var renderer2 = [{
  name: "null",
  impl: NullRenderer
}, {
  name: "base",
  impl: BR
}, {
  name: "canvas",
  impl: CR
}];
var incExts = [{
  type: "layout",
  extensions: layout3
}, {
  type: "renderer",
  extensions: renderer2
}];
var extensions = {};
var modules = {};
function setExtension(type, name, registrant) {
  var ext = registrant;
  var overrideErr = function overrideErr2(field) {
    warn("Can not register `" + name + "` for `" + type + "` since `" + field + "` already exists in the prototype and can not be overridden");
  };
  if (type === "core") {
    if (Core.prototype[name]) {
      return overrideErr(name);
    } else {
      Core.prototype[name] = registrant;
    }
  } else if (type === "collection") {
    if (Collection.prototype[name]) {
      return overrideErr(name);
    } else {
      Collection.prototype[name] = registrant;
    }
  } else if (type === "layout") {
    var Layout = function Layout2(options2) {
      this.options = options2;
      registrant.call(this, options2);
      if (!plainObject(this._private)) {
        this._private = {};
      }
      this._private.cy = options2.cy;
      this._private.listeners = [];
      this.createEmitter();
    };
    var layoutProto = Layout.prototype = Object.create(registrant.prototype);
    var optLayoutFns = [];
    for (var i2 = 0; i2 < optLayoutFns.length; i2++) {
      var fnName = optLayoutFns[i2];
      layoutProto[fnName] = layoutProto[fnName] || function() {
        return this;
      };
    }
    if (layoutProto.start && !layoutProto.run) {
      layoutProto.run = function() {
        this.start();
        return this;
      };
    } else if (!layoutProto.start && layoutProto.run) {
      layoutProto.start = function() {
        this.run();
        return this;
      };
    }
    var regStop = registrant.prototype.stop;
    layoutProto.stop = function() {
      var opts = this.options;
      if (opts && opts.animate) {
        var anis = this.animations;
        if (anis) {
          for (var _i = 0; _i < anis.length; _i++) {
            anis[_i].stop();
          }
        }
      }
      if (regStop) {
        regStop.call(this);
      } else {
        this.emit("layoutstop");
      }
      return this;
    };
    if (!layoutProto.destroy) {
      layoutProto.destroy = function() {
        return this;
      };
    }
    layoutProto.cy = function() {
      return this._private.cy;
    };
    var getCy = function getCy2(layout4) {
      return layout4._private.cy;
    };
    var emitterOpts = {
      addEventFields: function addEventFields4(layout4, evt) {
        evt.layout = layout4;
        evt.cy = getCy(layout4);
        evt.target = layout4;
      },
      bubble: function bubble3() {
        return true;
      },
      parent: function parent4(layout4) {
        return getCy(layout4);
      }
    };
    extend(layoutProto, {
      createEmitter: function createEmitter3() {
        this._private.emitter = new Emitter(emitterOpts, this);
        return this;
      },
      emitter: function emitter3() {
        return this._private.emitter;
      },
      on: function on3(evt, cb) {
        this.emitter().on(evt, cb);
        return this;
      },
      one: function one3(evt, cb) {
        this.emitter().one(evt, cb);
        return this;
      },
      once: function once3(evt, cb) {
        this.emitter().one(evt, cb);
        return this;
      },
      removeListener: function removeListener3(evt, cb) {
        this.emitter().removeListener(evt, cb);
        return this;
      },
      removeAllListeners: function removeAllListeners3() {
        this.emitter().removeAllListeners();
        return this;
      },
      emit: function emit3(evt, params) {
        this.emitter().emit(evt, params);
        return this;
      }
    });
    define.eventAliasesOn(layoutProto);
    ext = Layout;
  } else if (type === "renderer" && name !== "null" && name !== "base") {
    var BaseRenderer3 = getExtension("renderer", "base");
    var bProto = BaseRenderer3.prototype;
    var RegistrantRenderer = registrant;
    var rProto = registrant.prototype;
    var Renderer = function Renderer2() {
      BaseRenderer3.apply(this, arguments);
      RegistrantRenderer.apply(this, arguments);
    };
    var proto = Renderer.prototype;
    for (var pName in bProto) {
      var pVal = bProto[pName];
      var existsInR = rProto[pName] != null;
      if (existsInR) {
        return overrideErr(pName);
      }
      proto[pName] = pVal;
    }
    for (var _pName in rProto) {
      proto[_pName] = rProto[_pName];
    }
    bProto.clientFunctions.forEach(function(name2) {
      proto[name2] = proto[name2] || function() {
        error("Renderer does not implement `renderer." + name2 + "()` on its prototype");
      };
    });
    ext = Renderer;
  } else if (type === "__proto__" || type === "constructor" || type === "prototype") {
    return error(type + " is an illegal type to be registered, possibly lead to prototype pollutions");
  }
  return setMap({
    map: extensions,
    keys: [type, name],
    value: ext
  });
}
function getExtension(type, name) {
  return getMap({
    map: extensions,
    keys: [type, name]
  });
}
function setModule(type, name, moduleType, moduleName, registrant) {
  return setMap({
    map: modules,
    keys: [type, name, moduleType, moduleName],
    value: registrant
  });
}
function getModule(type, name, moduleType, moduleName) {
  return getMap({
    map: modules,
    keys: [type, name, moduleType, moduleName]
  });
}
var extension = function extension2() {
  if (arguments.length === 2) {
    return getExtension.apply(null, arguments);
  } else if (arguments.length === 3) {
    return setExtension.apply(null, arguments);
  } else if (arguments.length === 4) {
    return getModule.apply(null, arguments);
  } else if (arguments.length === 5) {
    return setModule.apply(null, arguments);
  } else {
    error("Invalid extension access syntax");
  }
};
Core.prototype.extension = extension;
incExts.forEach(function(group2) {
  group2.extensions.forEach(function(ext) {
    setExtension(group2.type, ext.name, ext.impl);
  });
});
var _Stylesheet = function Stylesheet() {
  if (!(this instanceof _Stylesheet)) {
    return new _Stylesheet();
  }
  this.length = 0;
};
var sheetfn = _Stylesheet.prototype;
sheetfn.instanceString = function() {
  return "stylesheet";
};
sheetfn.selector = function(selector) {
  var i2 = this.length++;
  this[i2] = {
    selector,
    properties: []
  };
  return this;
};
sheetfn.css = function(name, value) {
  var i2 = this.length - 1;
  if (string(name)) {
    this[i2].properties.push({
      name,
      value
    });
  } else if (plainObject(name)) {
    var map2 = name;
    var propNames = Object.keys(map2);
    for (var j = 0; j < propNames.length; j++) {
      var key = propNames[j];
      var mapVal = map2[key];
      if (mapVal == null) {
        continue;
      }
      var prop = _Style.properties[key] || _Style.properties[dash2camel(key)];
      if (prop == null) {
        continue;
      }
      var _name = prop.name;
      var _value = mapVal;
      this[i2].properties.push({
        name: _name,
        value: _value
      });
    }
  }
  return this;
};
sheetfn.style = sheetfn.css;
sheetfn.generateStyle = function(cy) {
  var style3 = new _Style(cy);
  return this.appendToStyle(style3);
};
sheetfn.appendToStyle = function(style3) {
  for (var i2 = 0; i2 < this.length; i2++) {
    var context = this[i2];
    var selector = context.selector;
    var props = context.properties;
    style3.selector(selector);
    for (var j = 0; j < props.length; j++) {
      var prop = props[j];
      style3.css(prop.name, prop.value);
    }
  }
  return style3;
};
var version = "3.33.1";
var cytoscape = function cytoscape2(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  if (plainObject(options2)) {
    return new Core(options2);
  } else if (string(options2)) {
    return extension.apply(extension, arguments);
  }
};
cytoscape.use = function(ext) {
  var args = Array.prototype.slice.call(arguments, 1);
  args.unshift(cytoscape);
  ext.apply(null, args);
  return this;
};
cytoscape.warnings = function(bool) {
  return warnings(bool);
};
cytoscape.version = version;
cytoscape.stylesheet = cytoscape.Stylesheet = _Stylesheet;

// node_modules/react-cytoscapejs/dist/react-cytoscape.modern.js
var { string: o, array: l, object: s, number: a, bool: i, oneOfType: r, any: c, func: u } = import_prop_types.default;
var d = { id: o, className: o, style: r([o, s]), elements: r([l, c]), stylesheet: r([l, c]), layout: r([s, c]), pan: r([s, c]), zoom: a, panningEnabled: i, userPanningEnabled: i, minZoom: a, maxZoom: a, zoomingEnabled: i, userZoomingEnabled: i, boxSelectionEnabled: i, autoungrabify: i, autolock: i, autounselectify: i, get: u, toJson: u, diff: u, forEach: u, cy: u, headless: i, styleEnabled: i, hideEdgesOnViewport: i, textureOnViewport: i, motionBlur: i, motionBlurOpacity: a, wheelSensitivity: a, pixelRatio: r([o, s]) };
var p2 = (e2, t2) => {
  if (((e3, t3) => null == e3 || null == t3)(e2, t2) && (null != e2 || null != t2)) return true;
  if (e2 === t2) return false;
  if ("object" != typeof e2 || "object" != typeof t2) return e2 !== t2;
  const n = Object.keys(e2), o2 = Object.keys(t2), l2 = (n2) => e2[n2] !== t2[n2];
  return n.length !== o2.length || !(!n.some(l2) && !o2.some(l2));
};
var m = (e2, t2) => null != e2 ? e2[t2] : null;
var y2 = { diff: p2, get: m, toJson: (e2) => e2, forEach: (e2, t2) => e2.forEach(t2), elements: [{ data: { id: "a", label: "Example node A" } }, { data: { id: "b", label: "Example node B" } }, { data: { id: "e", source: "a", target: "b" } }], stylesheet: [{ selector: "node", style: { label: "data(label)" } }], zoom: 1, pan: { x: 0, y: 0 } };
var h = (e2, t2, n, o2) => n(m(e2, o2), m(t2, o2));
var b = (e2, t2, n, o2, l2, s2, a2) => {
  e2.batch(() => {
    (o2 === p2 || h(t2, n, o2, "elements")) && x2(e2, m(t2, "elements"), m(n, "elements"), l2, s2, a2, o2), h(t2, n, o2, "stylesheet") && E(e2, m(t2, "stylesheet"), m(n, "stylesheet"), l2), ["zoom", "minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "pan", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autoungrabify", "autolock", "autounselectify"].forEach((s3) => {
      h(t2, n, o2, s3) && f(e2, s3, m(t2, s3), m(n, s3), l2);
    });
  }), h(t2, n, o2, "layout") && g(e2, m(t2, "layout"), m(n, "layout"), l2);
};
var f = (e2, t2, n, o2, l2) => {
  e2[t2](l2(o2));
};
var g = (e2, t2, n, o2) => {
  const l2 = o2(n);
  null != l2 && e2.layout(l2).run();
};
var E = (e2, t2, n, o2) => {
  const l2 = e2.style();
  null != l2 && l2.fromJson(o2(n)).update();
};
var x2 = (e2, t2, n, o2, l2, s2, a2) => {
  const i2 = [], r2 = e2.collection(), c2 = [], u2 = {}, d2 = {}, p3 = (e3) => l2(l2(e3, "data"), "id");
  s2(n, (e3) => {
    const t3 = p3(e3);
    d2[t3] = e3;
  }), null != t2 && s2(t2, (t3) => {
    const n2 = p3(t3);
    u2[n2] = t3, ((e3) => null != d2[e3])(n2) || r2.merge(e2.getElementById(n2));
  }), s2(n, (e3) => {
    const t3 = p3(e3), n2 = ((e4) => u2[e4])(t3);
    ((e4) => null != u2[e4])(t3) ? c2.push({ ele1: n2, ele2: e3 }) : i2.push(o2(e3));
  }), r2.length > 0 && e2.remove(r2), i2.length > 0 && e2.add(i2), c2.forEach(({ ele1: t3, ele2: n2 }) => O(e2, t3, n2, o2, l2, a2));
};
var O = (e2, t2, n, o2, l2, s2) => {
  const a2 = l2(l2(n, "data"), "id"), i2 = e2.getElementById(a2), r2 = {};
  ["data", "position", "selected", "selectable", "locked", "grabbable", "classes"].forEach((e3) => {
    const a3 = l2(n, e3);
    s2(a3, l2(t2, e3)) && (r2[e3] = o2(a3));
  });
  const c2 = l2(n, "scratch");
  s2(c2, l2(t2, "scratch")) && i2.scratch(o2(c2)), Object.keys(r2).length > 0 && i2.json(r2);
};
var w = class extends import_react.default.Component {
  static get propTypes() {
    return d;
  }
  static get defaultProps() {
    return y2;
  }
  static normalizeElements(e2) {
    if (null != e2.length) return e2;
    {
      let { nodes: t2, edges: n } = e2;
      return null == t2 && (t2 = []), null == n && (n = []), t2.concat(n);
    }
  }
  constructor(t2) {
    super(t2), this.displayName = "CytoscapeComponent", this.containerRef = import_react.default.createRef();
  }
  componentDidMount() {
    const e2 = this.containerRef.current, { global: t2, headless: o2, styleEnabled: l2, hideEdgesOnViewport: s2, textureOnViewport: a2, motionBlur: i2, motionBlurOpacity: r2, wheelSensitivity: c2, pixelRatio: u2 } = this.props, d2 = this._cy = new cytoscape({ container: e2, headless: o2, styleEnabled: l2, hideEdgesOnViewport: s2, textureOnViewport: a2, motionBlur: i2, motionBlurOpacity: r2, wheelSensitivity: c2, pixelRatio: u2 });
    t2 && (window[t2] = d2), this.updateCytoscape(null, this.props);
  }
  updateCytoscape(e2, t2) {
    const n = this._cy, { diff: o2, toJson: l2, get: s2, forEach: a2 } = t2;
    b(n, e2, t2, o2, l2, s2, a2), null != t2.cy && t2.cy(n);
  }
  componentDidUpdate(e2) {
    this.updateCytoscape(e2, this.props);
  }
  componentWillUnmount() {
    this._cy.destroy();
  }
  render() {
    const { id: t2, className: n, style: o2 } = this.props;
    return import_react.default.createElement("div", { ref: this.containerRef, id: t2, className: n, style: o2 });
  }
};
export {
  w as default
};
//# sourceMappingURL=react-cytoscapejs.js.map
